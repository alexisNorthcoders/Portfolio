const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config()


const app = express();
app.disable("x-powered-by");
app.use(cors());
app.use(express.json({ limit: "20kb" }));
app.use("/", router);
app.listen(5555, () => console.log("Server Running"));

// The form is public (nginx proxies /contact), so every field is capped and
// escaped, and public senders get a fixed subject and a daily cap. Local
// callers such as amazon-scraper post straight to port 5555 and keep their
// own subject.
const LIMITS = { name: 100, email: 200, phone: 50, message: 5000, subject: 200 };
const PUBLIC_DAILY_CAP = 30;
const PUBLIC_SUBJECT = "Contact Form Submission - Portfolio";

let publicSent = { day: "", count: 0 };

function isLocal(req) {
  const proxied = req.headers["x-forwarded-for"] || req.headers["x-real-ip"];
  const addr = req.socket.remoteAddress;
  return !proxied && (addr === "127.0.0.1" || addr === "::1" || addr === "::ffff:127.0.0.1");
}

// A missing field is empty; anything that is not text, or is too long, is null.
function field(value, max) {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  const s = value.trim();
  return s.length <= max ? s : null;
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
}

// Counts a public send against today's cap; false once the cap is reached.
function takePublicSend() {
  const today = new Date().toISOString().slice(0, 10);
  if (publicSent.day !== today) publicSent = { day: today, count: 0 };
  if (publicSent.count >= PUBLIC_DAILY_CAP) return false;
  publicSent.count++;
  return true;
}

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const body = req.body ?? {};
  const local = isLocal(req);
  const firstName = field(body.firstName, LIMITS.name);
  const lastName = field(body.lastName, LIMITS.name);
  const email = field(body.email, LIMITS.email);
  const phone = field(body.phone, LIMITS.phone);
  const message = field(body.message, LIMITS.message);
  const subject = local ? field(body.subject, LIMITS.subject) || PUBLIC_SUBJECT : PUBLIC_SUBJECT;

  if ([firstName, lastName, email, phone, message].includes(null) || !email || !message) {
    return res.status(400).json({ code: 400, status: "Invalid message" });
  }
  if (!local && !takePublicSend()) {
    console.log("Contact: daily cap reached, message refused");
    return res.status(429).json({ code: 429, status: "Too many messages today" });
  }

  const name = `${firstName} ${lastName}`.trim();
  const mail = {
    from: name.replace(/[\r\n<>"]/g, ""),
    to: process.env.GMAIL_EMAIL,
    subject,
    html: `<p>Name: ${escapeHtml(name)}</p>
           <p>Email: ${escapeHtml(email)}</p>
           <p>Phone: ${escapeHtml(phone)}</p>
           <p>Message: ${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
  };
  console.log(`Contact: message from ${name} <${email}>${local ? " (local)" : ""}`);
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Contact: send failed", error);
      res.status(500).json({ code: 500, status: "Could not send message" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
