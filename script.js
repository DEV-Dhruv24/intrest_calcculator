document.getElementById('calculateBtn').addEventListener('click', function () {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);
    const type = document.getElementById('type').value;

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('result').textContent = "Please enter valid inputs.";
        return;
    }

    let interest;

    if (type === "simple") {
        interest = (principal * rate * time) / 100;
    } else if (type === "compound") {
        interest = principal * (Math.pow((1 + rate / 100), time)) - principal;
    }

    document.getElementById('result').innerHTML = `
        <strong>${type === "simple" ? "Simple Interest" : "Compound Interest"}:</strong> ₹${interest.toFixed(2)}
    `;
});
