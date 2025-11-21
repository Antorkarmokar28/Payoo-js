document
  .getElementById("cashout-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("cashout-pin").value;
    const convertedPIN = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedAmount && convertedPIN) {
      if (convertedPIN === 1234) {
        const minas = convertedMainBalance - convertedAmount;
        document.getElementById("main-balance").innerText = minas;
      } else {
        alert("Incorrect PIN!");
      }
    } else {
      alert("Please enter amount");
    }
  });
