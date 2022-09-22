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
const navigated = () => {
  window.location.href = "https://facebook.com"
}
const navigateTo = () => {
  window.location.href = "upcomming.html";
};
const toDetail = () => {
  window.location.href = "detailRoad.html";
}