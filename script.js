console.log("WORK")

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("toggleButton")
    .addEventListener("click", function () {
      const hoverSection = document.getElementById("hoverSection")
      hoverSection.classList.toggle("visible")
    })
})
