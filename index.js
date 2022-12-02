const sunMoonContainer = document.querySelector(".sun-moon-container");
let mystatus = localStorage.getItem("status");
if (!localStorage.getItem("status")) {
  localStorage.setItem("status", "active");

  mystatus = localStorage.getItem("status");
} else {
  mystatus = localStorage.getItem("status");
}

mystatus == "active"
  ? (document.body.className = " ")
  : (document.body.className = "dark");
if (localStorage.getItem("deg")) {
  localStorage.removeItem("deg");
  mystatus == "active"
    ? localStorage.setItem("deg", 0)
    : localStorage.setItem("deg", 180);
}

sunMoonContainer.style.setProperty("--rotate", localStorage.getItem("deg"));
document.querySelector(".theme-toggle-btn").addEventListener("click", () => {
  mystatus = mystatus === "active" ? "inactive" : "active";
  localStorage.setItem("status", mystatus);
  let state = localStorage.getItem("status");
  console.log(state);
  state == "active"
    ? (document.body.className = " ")
    : (document.body.className = "dark");

  const rotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotate")
  );

  sunMoonContainer.style.setProperty("--rotate", rotation + 180);
  const rotation2 = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotate")
  );

  localStorage.setItem("deg", rotation2);
});
