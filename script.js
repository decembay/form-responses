const scriptURL = "https://script.google.com/macros/s/AKfycbwYhsNsT7vV3bxe4NttRvHEfOqiCaEC-WVhlPWVo9E6ntVIq2fFlPo2Qe85-gab4j31/exec"; // paste your deployed Apps Script Web App URL here

document.getElementById("myForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const result = await response.json();
    document.getElementById("response").textContent = result.message;
    document.getElementById("myForm").reset();
  } catch (error) {
    document.getElementById("response").textContent = "Error submitting form!";
  }
});
