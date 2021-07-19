document.querySelector(".rnOuter").addEventListener("click", (e) => {
  const helperText = document.querySelector(".helper-text");
  helperText.style.animation = "fade-out 1s ease-out 1 forwards";
  const curtainParts = [...document.querySelectorAll(".rnInner")];
  curtainParts.forEach((curtain) => {
    curtain.style.transform = "scaleX(0)";
  });
  setTimeout(function () {
    window.location.href = "navigation.html";
  }, 7000);
});

document.querySelector(".aoTable").addEventListener("click", (e) => {
	window.location.href = "navigation.html"
  });
  