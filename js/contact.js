
const handleSubmit = (e) => {
  e.preventDefault();
}
const validation = () => {
  var username = document.getElementById("name").value;
  console.log(username);
}

const nameValidate = () => {
  var username = document.getElementById("name").value;
  let userRegex = /^[a-zA-Z]{4,30}$/;

  if (userRegex.test(username)) {
    document.getElementById("nameErr").classList.add("d-none");
  } else {
    document.getElementById("nameErr").classList.remove("d-none");
  }

}; 

const mailValidate = () => {
  var email = document.getElementById("mail").value;
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (emailRegex.test(email)) {
    document.getElementById("mailErr").classList.add("d-none");
  } else {
    document.getElementById("mailErr").classList.remove("d-none");
  }
}

const phoneValidate = () => {
  var phone = document.getElementById("phone").value;
  let phoneRegex = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/

  if (phoneRegex.test(phone)) {
    document.getElementById("phoneErr").classList.add("d-none");
  } else {
    document.getElementById("phoneErr").classList.remove("d-none");
  }
}