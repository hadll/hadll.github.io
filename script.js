window.addEventListener("scroll", updateScreen);
function updateScreen() {
  divs = document.getElementsByClassName("planet");
  scrollpos = this.scrollY / 300;
  for (i = 0; i < divs.length; i++) {
    modscrollpos = scrollpos + (i * 2 * Math.PI) / divs.length;
    far = (Math.cos(modscrollpos) * window.innerWidth) / 10;
    divs[i].style =
      "left:" +
      (Math.sin(modscrollpos) * (window.innerWidth / 2) + window.innerWidth / 2 - far / 2) +
      "px;top:" +
      (far + 300) +
      "px;height:" +
      (far + 150) / 3 +
      "px;width:" +
      (far + 150) / 3 +
      "px;";
  }
}
window.onload = updateScreen;
