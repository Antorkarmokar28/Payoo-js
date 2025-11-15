document.getElementById("login-id").addEventListener("click", function (event) {
  event.preventDefault();
  const accountInput = document.getElementById("account-input").value;
  const pinInput = document.getElementById("pin-input").value;
  const pin = parseInt(pinInput);
  if (accountInput.length === 11) {
    if (pin === 1234) {
      window.location.href = "./main.html";
    } else {
      alert("Password incorrect");
    }
  } else {
    alert("Please provide valid account number");
  }
});
