document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = document.getElementById("amount").value;
    const convertAmount = parseFloat(amount);
    const pin = document.getElementById("pin-input").value;
    const convertPin = parseFloat(pin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertMainBalance = parseFloat(mainBalance);
    if (convertAmount && convertPin) {
      if (convertPin === 1234) {
        const sum = convertMainBalance + convertAmount;
        document.getElementById("main-balance").innerText = sum;
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("Enter Amount");
    }
  });
