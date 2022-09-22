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

const nameValidate = () => {
  var username = document.getElementById("name").value;
  let userRegex = /^[a-zA-Z]{4,30}$/;

  if (userRegex.test(username)) {
    document.getElementById("nameErr").classList.add("d-none");
  } else {
    document.getElementById("nameErr").classList.remove("d-none");
  }
}; 

const passValidate = () => {
  var pass = document.getElementById("pass").value;
  let passRegex = /^[a-zA-Z0-9]{8,30}$/;

  if (passRegex.test(pass)) {
    document.getElementById("pasErr").classList.add("d-none");
  } else {
    document.getElementById("pasErr").classList.remove("d-none");
  }
};
const repassValidate = () => {
  var pass = document.getElementById("repass").value;
  let passRegex = /^[a-zA-Z0-9]{8,30}$/;

  if (passRegex.test(pass)) {
    document.getElementById("repassErr").classList.add("d-none");
  } else {
    document.getElementById("repassErr").classList.remove("d-none");
  }
};

const phoneValidate = () => {
  var phone = document.getElementById("phone").value;
  let phoneRegex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/;

  if (phoneRegex.test(phone)) {
    document.getElementById("phoneErr").classList.add("d-none");
  } else {
    document.getElementById("phoneErr").classList.remove("d-none");
  }
};

const submitForm = (e) => {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var pass = document.getElementById("pass").value;
  var repass = document.getElementById("repass").value;
  
  var users = JSON.parse(localStorage.getItem("users"), "[]") 

  console.log(typeof (users))

  if (!name ||
      !phone ||
      !pass ||
    !repass ||
    pass !== repass
    ) {
    alert("Invalid");
    window.location.href = "register.html";
  } else {
    var data = {
      name: name,
      phoneNum: phone,
      pas: pass
    }
  }
}