document.querySelector(".rnOuter").addEventListener("click", (e) => {
	const curtainParts = [...document.querySelectorAll(".rnInner")];
	curtainParts.forEach((curtain) => {
		curtain.style.transform = "scaleX(0)";
	});
});