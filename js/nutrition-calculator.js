const form = document.querySelector(".calculator__form");
const resultsSection = document.querySelector(".calculator__results");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    age: parseInt(formData.get("age")),
    gender: formData.get("gender"),
    height: parseInt(formData.get("height")),
    weight: parseInt(formData.get("weight")),
    activityFactor: parseFloat(formData.get("activity")),
  };

  const results = calculateNutrition(data);
  displayResults(results);
});

const calculateNutrition = ({
  age,
  gender,
  height,
  weight,
  activityFactor,
}) => {
  let bmr;

  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = bmr * activityFactor;

  const carbsCalories = tdee * 0.5;
  const proteinCalories = tdee * 0.2;
  const fatCalories = tdee * 0.3;

  const carbsGrams = Math.round(carbsCalories / 4);
  const proteinGrams = Math.round(proteinCalories / 4);
  const fatGrams = Math.round(fatCalories / 9);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    macros: {
      carbs: { grams: carbsGrams, calories: carbsCalories },
      protein: { grams: proteinGrams, calories: proteinCalories },
      fat: { grams: fatGrams, calories: fatCalories },
    },
  };
};

const displayResults = (results) => {
  const bmrEl = document.querySelector(".metric__value--bmr");
  const tdeeEl = document.querySelector(".metric__value--tdee");
  const carbsAmountEl = document.querySelector(".macro__amount--carbs");
  const proteinAmountEl = document.querySelector(".macro__amount--protein");
  const fatAmountEl = document.querySelector(".macro__amount--fat");

  bmrEl.textContent = results.bmr;
  tdeeEl.textContent = results.tdee;

  carbsAmountEl.textContent = `${results.macros.carbs.grams}g (50%)`;
  proteinAmountEl.textContent = `${results.macros.protein.grams}g (20%)`;
  fatAmountEl.textContent = `${results.macros.fat.grams}g (30%)`;

  resultsSection.style.display = "grid";
};
