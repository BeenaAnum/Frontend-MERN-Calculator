function calculate() {
  let input = document.getElementById("input").value;

  fetch("http://localhost:3000/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ expression: input })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("result").innerText =
      "Result: " + (data.result || data.error);
  });
}

// function calculate() {
//   let input = document.getElementById("input").value;

//   fetch("https://your-backend-url.vercel.app/calculate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ expression: input })
//   })
//   .then(res => res.json())
//   .then(data => {
//     document.getElementById("result").innerText = data.result || data.error;
//   });
// }