let hamburger = document.querySelector(".hamburger");
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector(".close-btn");
let ctbtn = document.querySelector(".contact_btn");
let contact = document.querySelector(".contact");

hamburger.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});
