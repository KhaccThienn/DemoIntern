const copyToClip = () => {
  var copyText = document.getElementById("bankName").textContent;
  alert("Đã Sao Chép " + copyText);
  console.log(copyText);
}
const copyToClipBoard = () => {
  var copyText = document.getElementById("bankNumber").textContent;
  alert("Đã Sao Chép "+ copyText);
  console.log(copyText);
};

const backToCart = () => {
  window.location.href = "cart.html"
}