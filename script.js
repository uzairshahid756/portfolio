// ===== Mobile Menu =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("active"));

// Mobile par link click hone par menu band karo
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("active"));
});

// ===== Typing Effect (Aapke Roles) =====
const words = [
  "Data Analyst",
  "ML Expert",
  "Python Developer",
  "Problem Solver",
];
let wordIndex = 0,
  charIndex = 0,
  isDeleting = false;
const typedEl = document.querySelector(".typed");

function typeEffect() {
  const current = words[wordIndex];
  typedEl.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!isDeleting && charIndex === current.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1600);
    return;
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }
  setTimeout(typeEffect, isDeleting ? 55 : 110);
}
typeEffect();

// ===== Contact Form =====
function sendMessage(e) {
  e.preventDefault();
  alert("✅ Shukriya! Aapka message mil gaya. Uzair jaldi reply karenge.");
  e.target.reset();
  return false;
}

// ===== Chatbot =====
const chatbotBtn = document.getElementById("chatbotBtn");
const chatbotBox = document.getElementById("chatbotBox");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const sendBtn = document.getElementById("sendBtn");

chatbotBtn.onclick = () => chatbotBox.classList.toggle("active");
closeChat.onclick = () => chatbotBox.classList.remove("active");

// ===== Chatbot Responses (Customized for Uzair) =====
const responses = {
  hello: "Assalam-o-Alaikum! Kaise hain aap? 😊",
  hi: "Hi! Uzair ke portfolio mein khush aamdeed. Kya jaanna chahenge?",
  salam: "Walaikum Assalam! Kya madad kar sakta hoon? 😊",
  name: "Main Uzair ka AI assistant hoon. Uzair Ali Shahid ek Data Analyst aur ML Expert hain.",
  uzair:
    "Muhammad Uzair Ali Shahid — Data Analyst, ML Expert aur Python Developer hain. 🚀",
  skill:
    "Uzair ki skills: Python, Machine Learning, Data Analysis, SQL, Pandas, NumPy, Scikit-Learn, TensorFlow, Power BI.",
  python:
    "Uzair Python mein expert hain — data analysis, automation aur ML models banate hain. 🐍",
  "machine learning":
    "Uzair Machine Learning expert hain — regression, classification, NLP aur deep learning par kaam karte hain. 🤖",
  ml: "Uzair ML models Scikit-Learn aur TensorFlow se banate hain with high accuracy. 🧠",
  data: "Uzair data analysis mein expert hain — Pandas, NumPy, SQL aur Power BI use karte hain. 📊",
  analysis:
    "Data Analysis Uzair ki core skill hai — 1M+ records handle kar chuke hain. 📈",
  project:
    "Uzair ke projects: Sales Data Analysis, ML Price Prediction, aur Sentiment Analysis Bot. Projects section dekhein! 🚀",
  experience:
    "Uzair ke paas 2+ saal ka experience hai Data Analysis aur ML mein. 💼",
  education:
    'Education details ke liye "About" section check karein ya direct contact karein.',
  contact:
    "Contact karne ke liye: email uzair@example.com ya Contact form fill karein. 📧",
  email: "Uzair ka email: uzair@example.com 📩",
  hire: "Great! Uzair available hain freelance ke liye. Contact form fill karein ya email karein. ✅",
  price:
    "Pricing project ke scope par depend karti hai. Details ke liye contact karein. 💰",
  rate: "Rate project ke hisaab se discuss ho sakti hai. Contact form use karein.",
  freelance:
    "Haan, Uzair freelance projects available hain. Contact karein! 💼",
  cv: 'Uzair ki CV download karne ke liye "Download CV" button click karein. 📄',
  resume: "CV download button Home section mein hai. 📄",
  location:
    "Uzair Pakistan se hain, aur remotely worldwide kaam karte hain. 🌍",
  bye: "Allah Hafiz! Phir milenge 👋",
  thanks: "You're welcome! Koi aur sawaal ho toh poochein 😊",
  thank: "Khush rahein! 😊",
  help: "Aap pooch sakte hain: skills, projects, experience, contact, hire, CV, Python, ML, data analysis",
  who: "Uzair Ali Shahid — Data Analyst, ML Expert aur Python Developer. 🎯",
  what: 'Uzair data se insights nikalte hain aur ML models banate hain. Poochein "skills" ya "projects"!',
};

function getBotReply(msg) {
  const lower = msg.toLowerCase().trim();
  for (const key in responses) {
    if (lower.includes(key)) return responses[key];
  }
  return "Sorry, mujhe samajh nahi aaya. 🤔 Aap 'help' likhein options ke liye, ya 'contact' likh kar Uzair se baat karein.";
}

function addMessage(text, sender) {
  const div = document.createElement("div");
  div.className = sender === "bot" ? "bot-msg" : "user-msg";
  div.textContent = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendChat() {
  const msg = chatInput.value.trim();
  if (!msg) return;
  addMessage(msg, "user");
  chatInput.value = "";
  setTimeout(() => addMessage(getBotReply(msg), "bot"), 600);
}

sendBtn.onclick = sendChat;
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendChat();
});
