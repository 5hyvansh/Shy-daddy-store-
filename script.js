const buyBtn = document.getElementById("buyBtn");
const popup = document.getElementById("popup");

buyBtn.onclick = function () {
  popup.style.display = "flex";
};

popup.onclick = function (e) {
  if (e.target === popup) {
    popup.style.display = "none";
  }
};
