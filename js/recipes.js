const recipeGrid = document.querySelector(".recipes__grid");
const recipeEmptyElement = document.querySelector(".recipes__empty");
const recipeSearchInput = document.querySelector(".recipes__search");
const recipeCategorySelect = document.querySelector(".recipes__select");

let allRecipes = [];

const render = (recipes) => {
  recipeGrid.innerHTML = "";
  if (!recipes.length) {
    recipeEmptyElement.hidden = false;
    return;
  }
  recipeEmptyElement.hidden = true;

  recipes.forEach((r) => {
    const recipeCard = document.createElement("article");
    recipeCard.className = "recipe-card";

    const recipeMedia = document.createElement("div");
    recipeMedia.className = "recipe-card__media";
    recipeMedia.style.backgroundImage = `url(${r.imagePath})`;
    recipeCard.appendChild(recipeMedia);

    const recipeBody = document.createElement("div");
    recipeBody.className = "recipe-card__body";

    const recipeCategory = document.createElement("div");
    recipeCategory.className = "recipe-card__category";
    recipeCategory.textContent = r.category;
    recipeBody.appendChild(recipeCategory);

    const recipeTitle = document.createElement("h3");
    recipeTitle.className = "recipe-card__title";
    recipeTitle.textContent = r.title;
    recipeBody.appendChild(recipeTitle);

    const recipeDescription = document.createElement("p");
    recipeDescription.className = "recipe-card__desc";
    recipeDescription.textContent = r.description.slice(0, 100) + "...";
    recipeBody.appendChild(recipeDescription);
    recipeCard.appendChild(recipeBody);

    recipeGrid.appendChild(recipeCard);
  });
};

const applyFilters = () => {
  const query = recipeSearchInput.value.trim().toLowerCase();
  const category = recipeCategorySelect.value;

  const filtered = allRecipes.filter((r) => {
    const matchesCategory = category === "all" || r.category === category;
    if (!query) return matchesCategory;

    return matchesCategory && r.title.toLowerCase().includes(query);
  });

  render(filtered);
};

const populateCategories = (recipes) => {
  const uniqueCategories = [...new Set(recipes.map((r) => r.category))].sort();

  uniqueCategories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    recipeCategorySelect.appendChild(option);
  });
};

const init = async () => {
  try {
    const res = await fetch("./assets/recipes.json");
    allRecipes = await res.json();
    populateCategories(allRecipes);
    render(allRecipes);

    recipeSearchInput.addEventListener("input", applyFilters);
    recipeCategorySelect.addEventListener("change", applyFilters);
  } catch (err) {
    console.error("Failed to load recipes:", err);
    recipeEmptyElement.hidden = false;
    recipeEmptyElement.textContent = "Failed to load recipes.";
  }
};

init();
