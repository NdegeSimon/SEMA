const menuIcon = document.getElementById("menu-icon");
const navMenu = document.getElementById("nav-menu");

menuIcon.addEventListener("click", function() {
  navMenu.classList.toggle("show"); // toggle the visibility with a new class
});

 const textarea = document.querySelector("textarea");

  textarea.addEventListener("input", () => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
     });




     
 let shengMap = {};

fetch('sheng.json')
  .then(res => res.json())
  .then(data => {
    shengMap = data;
  })
  .catch(err => console.error("Failed to load sheng DB:", err));

// Speech recognition setup
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-KE"; // or "sw-KE" if you're mostly using Kiswahili

const mic = document.getElementById("mic-icon");

mic.addEventListener("click", () => {
  mic.classList.add("listening");
  recognition.start();
});

recognition.onresult = (event) => {
  const raw = event.results[0][0].transcript.toLowerCase();
  console.log("👂 Raw:", raw);

  const words = raw.split(" ");

  const translated = words.map(word => shengMap[word] || word).join(" ");
  console.log("🧠 Translated:", translated);

  // You could display this somewhere in your UI
};

recognition.onend = () => mic.classList.remove("listening");
recognition.onerror = (e) => {
  console.error("❌ Speech error:", e);
  mic.classList.remove("listening");
};
    
