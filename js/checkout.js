const copyToClip = () => {
  var copyText = document.getElementById("bankName").textContent;
  alert("Đã Sao Chép " + copyText);
  console.log(copyText);
}
const copyToClipBoard = () => {
  var copyText = document.getElementById("bankNumber").textContent;
  var copy = navigator.clipboard.writeText(copyText)
  console.log(copy);
};

const backToCart = () => {
  window.location.href = "cart.html"
}