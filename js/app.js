const form = document.querySelector("#loan-form");

const result = document.querySelector("#output");
result.style.display = "none";

const loader = document.querySelector("#loader");
loader.style.display = "none";

const error = document.querySelector("#error-message");
error.style.display = "none";

form.addEventListener("submit", calculateResults);

function calculateResults(e) {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");

  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    loader.style.display = "block";

    setTimeout(() => {
      loader.style.display = "none";
      output.style.display = "block";
    }, 700);

    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);
  } else {
    loader.style.display = "block";

    setTimeout(() => {
      loader.style.display = "none";
      error.style.display = "block";
    }, 700);

    error.style.display = "none";
    error.style.with = "200px";
    error.style.height = "50px";
    error.style.padding = "10px";
    error.style.background = "yellow";
  }
  e.preventDefault();
}
