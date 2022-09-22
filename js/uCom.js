const toLogin = () => {
  window.location.href = "login.html";
};
const none = () => {
  var icons = document.getElementById("icons");

  if (document.getElementById("search").value) {
    icons.classList.add("d-none");
  } else {
    icons.classList.remove("d-none");
  }
};