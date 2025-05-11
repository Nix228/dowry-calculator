function calculate() {
  let price = 100;

  let education = document.getElementById("education").value;
  price *= Number(education);

  let networth = document.getElementById("networth").value;
  price *= Number(networth);

  let caste = document.getElementById("caste").value;
  price += Number(caste);

  let skills = document.querySelectorAll(".skill:checked");
  for (let i = 0; i < skills.length; i++) {
    price += Number(skills[i].value);
  }

  let age = document.querySelector('input[name="age"]:checked').value;
  price *= Number(age);

  let reputation = document.querySelectorAll(".reputation:checked");
  for (let i = 0; i < reputation.length; i++) {
    let val = Number(reputation[i].value);
    if (val < 1) {
      if (val > 0) price *= val;
      else price += val;
    }
  }

  document.getElementById("result").textContent = "Final Price: $" + Math.round(price);
  document.getElementById("result").style.borderColor = "red";
}