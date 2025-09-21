const recipes = [
  {
    title: "Chickpea Curry",
    category: "Dinner",
    imagePath: "/assets/images/recipes/chickpea-curry-plated.webp",
    ingredients: [
      "1 tablespoon olive oil",
      "1 medium onion, chopped",
      "2 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "1 can (14 oz) diced tomatoes",
      "1 can (15 oz) chickpeas, drained and rinsed",
      "1 can (14 oz) coconut milk",
      "1 tablespoon curry powder",
      "1 teaspoon cumin",
      "1 teaspoon turmeric",
      "1 teaspoon salt",
      "1/2 teaspoon black pepper",
      "1 cup spinach, chopped",
      "1 tablespoon lime juice",
      "Fresh cilantro for garnish",
    ],
    steps: [
      "Heat olive oil in a large pot over medium heat.",
      "Add chopped onion and sauté until translucent, about 5 minutes.",
      "Stir in minced garlic and grated ginger, cooking for 1 minute until fragrant.",
      "Add diced tomatoes, chickpeas, and coconut milk to the pot.",
      "Stir in curry powder, cumin, turmeric, salt, and black pepper.",
      "Bring the mixture to a simmer, then reduce heat and let it cook for 15 minutes, stirring occasionally.",
      "Add chopped spinach and lime juice, cooking for another 5 minutes until spinach is wilted.",
      "Serve hot, garnished with fresh cilantro.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "17%",
        },
        {
          nutrient: "Protein",
          amount: "12g",
          percentDV: "24%",
        },
        {
          nutrient: "Carbs",
          amount: "45g",
          percentDV: "15%",
        },
        {
          nutrient: "Fat",
          amount: "14g",
          percentDV: "22%",
        },
        {
          nutrient: "Fiber",
          amount: "10g",
          percentDV: "40%",
        },
        {
          nutrient: "Sugar",
          amount: "6g",
          percentDV: "7%",
        },
        {
          nutrient: "Sodium",
          amount: "600mg",
          percentDV: "26%",
        },
      ],
    },
    description:
      "Warm and comforting, this chickpea curry features a blend of aromatic spices, creamy coconut milk, and hearty chickpeas. A simple, vegetarian one-pot meal that comes together quickly for a satisfying dinner any night of the week.",
  },
  {
    title: "Shrimp Tacos with Mango Salsa",
    category: "Lunch",
    imagePath:
      "/assets/images/recipes/shrimp-tacos-with-mango-salsa-plated.webp",
    ingredients: [
      "1 lb shrimp, peeled and deveined",
      "2 tbsp olive oil",
      "1 tsp chili powder",
      "1/2 tsp garlic powder",
      "1/2 tsp cumin",
      "Salt to taste",
      "8 small corn tortillas",
      "1 cup mango, diced",
      "1/2 red onion, finely chopped",
      "1/4 cup cilantro, chopped",
      "1 lime, juiced",
      "1 avocado, sliced",
    ],
    steps: [
      "In a bowl, toss the shrimp with olive oil, chili powder, garlic powder, cumin, and salt.",
      "Heat a skillet over medium-high heat and cook the shrimp for 2-3 minutes on each side until pink and opaque.",
      "While the shrimp cooks, prepare the mango salsa by combining diced mango, red onion, cilantro, and lime juice in a bowl. Mix well and season with salt to taste.",
      "Warm the corn tortillas in a dry skillet or microwave until pliable.",
      "Assemble the tacos by placing shrimp on each tortilla, topping with mango salsa, and adding slices of avocado.",
      "Serve immediately.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "18%",
        },
        {
          nutrient: "Protein",
          amount: "25g",
          percentDV: "50%",
        },
        {
          nutrient: "Carbs",
          amount: "40g",
          percentDV: "13%",
        },
        {
          nutrient: "Fat",
          amount: "10g",
          percentDV: "15%",
        },
        {
          nutrient: "Fiber",
          amount: "5g",
          percentDV: "20%",
        },
        {
          nutrient: "Sugar",
          amount: "6g",
          percentDV: "7%",
        },
        {
          nutrient: "Sodium",
          amount: "600mg",
          percentDV: "26%",
        },
      ],
    },
    description:
      "Enjoy the vibrant flavors of these shrimp tacos, featuring tender shrimp cooked with a blend of spices and topped with a fresh, fruity mango salsa. A quick and easy lunch or dinner option that's sure to satisfy.",
  },
  {
    title: "Vegetable Stir-Fry with Tofu",
    category: "Dinner",
    imagePath:
      "/assets/images/recipes/vegetable-stir-fry-with-tofu-plated.webp",
    ingredients: [
      "14 oz firm tofu",
      "2 tbsp soy sauce",
      "1 tbsp sesame oil",
      "1 cup broccoli florets",
      "1 cup bell peppers, sliced",
      "1 cup carrots, julienned",
      "1 cup snap peas",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "2 green onions, chopped",
      "1 tsp cornstarch (optional)",
      "2 tbsp water (optional)",
      "Salt and pepper to taste",
    ],
    steps: [
      "Press the tofu to remove excess moisture, then cut into bite-sized cubes.",
      "In a large skillet or wok, heat the sesame oil over medium-high heat.",
      "Add the tofu cubes and cook until golden brown on all sides, about 5-7 minutes. Remove and set aside.",
      "In the same skillet, add garlic and ginger, sauté for 1 minute until fragrant.",
      "Add broccoli, bell peppers, carrots, and snap peas. Stir-fry for about 5-7 minutes until vegetables are tender-crisp.",
      "Return the tofu to the skillet. Pour in the soy sauce, and stir to combine.",
      "If desired, mix cornstarch with water to create a slurry, and add to the skillet to thicken the sauce. Stir well.",
      "Season with salt and pepper to taste, and garnish with green onions before serving.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "400",
          percentDV: "20%",
        },
        {
          nutrient: "Protein",
          amount: "30g",
          percentDV: "60%",
        },
        {
          nutrient: "Carbs",
          amount: "30g",
          percentDV: "10%",
        },
        {
          nutrient: "Fat",
          amount: "20g",
          percentDV: "30%",
        },
        {
          nutrient: "Fiber",
          amount: "8g",
          percentDV: "30%",
        },
        {
          nutrient: "Sugar",
          amount: "6g",
          percentDV: "7%",
        },
        {
          nutrient: "Sodium",
          amount: "800mg",
          percentDV: "35%",
        },
      ],
    },
    description:
      "This quick and easy vegetable stir-fry features a variety of crisp veggies and firm tofu sautéed in a savory soy-sesame sauce. A simple, plant-based dinner that's packed with nutrients and ready in just 30 minutes.",
  },
  {
    title: "Spaghetti Aglio e Olio",
    category: "Dinner",
    imagePath: "/assets/images/recipes/spaghetti-aglio-e-olio-plated.webp",
    ingredients: [
      "200g spaghetti",
      "4 cloves garlic",
      "60ml olive oil",
      "1 tsp red pepper flakes",
      "2 tbsp fresh parsley",
      "Salt to taste",
      "Parmesan cheese (optional)",
    ],
    steps: [
      "Cook spaghetti in salted boiling water until al dente.",
      "While spaghetti cooks, thinly slice garlic cloves.",
      "In a large pan, heat olive oil over medium heat and add sliced garlic.",
      "Sauté garlic until golden and fragrant, being careful not to burn it.",
      "Add red pepper flakes and sauté for another 30 seconds.",
      "Drain the spaghetti and add it to the pan with garlic and oil.",
      "Toss spaghetti to coat evenly in the garlic oil.",
      "Season with salt to taste and add chopped parsley.",
      "Serve hot, topped with grated Parmesan cheese if desired.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "410",
          percentDV: "20%",
        },
        {
          nutrient: "Protein",
          amount: "12g",
          percentDV: "24%",
        },
        {
          nutrient: "Carbs",
          amount: "60g",
          percentDV: "20%",
        },
        {
          nutrient: "Fat",
          amount: "15g",
          percentDV: "23%",
        },
        {
          nutrient: "Fiber",
          amount: "3g",
          percentDV: "12%",
        },
        {
          nutrient: "Sugar",
          amount: "1g",
          percentDV: "1%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "A simple yet flavorful Italian classic, this Spaghetti Aglio e Olio features al dente spaghetti tossed with fragrant garlic, olive oil, and a touch of red pepper flakes. Topped with fresh parsley and optional Parmesan, it's a quick, vegetarian dinner that's ready in under 30 minutes.",
  },
  {
    title: "Mediterranean Quinoa Salad",
    category: "Salad",
    imagePath: "/assets/images/recipes/mediterranean-quinoa-salad-plated.webp",
    ingredients: [
      "1 cup quinoa",
      "2 cups water",
      "1 cup cherry tomatoes, halved",
      "1 cucumber, diced",
      "1/2 red onion, finely chopped",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup Kalamata olives, pitted and sliced",
      "1/4 cup fresh parsley, chopped",
      "3 tablespoons olive oil",
      "2 tablespoons lemon juice",
      "1 teaspoon dried oregano",
      "Salt to taste",
      "Pepper to taste",
    ],
    steps: [
      "Rinse the quinoa under cold water in a fine mesh strainer.",
      "In a medium saucepan, combine quinoa and water. Bring to a boil over medium-high heat.",
      "Reduce heat to low, cover, and simmer for 15 minutes or until quinoa is fluffy and water is absorbed.",
      "Remove from heat and let it cool for about 10 minutes.",
      "In a large bowl, combine cherry tomatoes, cucumber, red onion, feta cheese, olives, and parsley.",
      "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
      "Add the cooled quinoa to the vegetable mixture and pour the dressing over.",
      "Toss gently to combine all ingredients.",
      "Serve chilled or at room temperature.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "320",
          percentDV: "16%",
        },
        {
          nutrient: "Protein",
          amount: "10g",
          percentDV: "20%",
        },
        {
          nutrient: "Carbs",
          amount: "40g",
          percentDV: "13%",
        },
        {
          nutrient: "Fat",
          amount: "14g",
          percentDV: "22%",
        },
        {
          nutrient: "Fiber",
          amount: "5g",
          percentDV: "20%",
        },
        {
          nutrient: "Sugar",
          amount: "3g",
          percentDV: "3%",
        },
        {
          nutrient: "Sodium",
          amount: "400mg",
          percentDV: "17%",
        },
      ],
    },
    description:
      "This vibrant Mediterranean Quinoa Salad is a nourishing and flavor-packed dish. Fluffy quinoa is tossed with fresh tomatoes, crisp cucumber, tangy feta, and briny olives, all dressed in a light vinaigrette. It's a delicious vegetarian option that can be enjoyed as a main or side.",
  },
  {
    title: "Lentil Soup with Spinach",
    category: "Soup",
    imagePath: "/assets/images/recipes/lentil-soup-with-spinach-plated.webp",
    ingredients: [
      "1 cup lentils, rinsed",
      "4 cups vegetable broth",
      "1 medium onion, chopped",
      "2 cloves garlic, minced",
      "2 medium carrots, diced",
      "2 celery stalks, diced",
      "1 teaspoon cumin",
      "1 teaspoon paprika",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "2 cups fresh spinach, chopped",
      "1 tablespoon olive oil",
      "1 tablespoon lemon juice",
    ],
    steps: [
      "Heat olive oil in a large pot over medium heat.",
      "Add chopped onion, garlic, carrots, and celery; sauté until vegetables are softened, about 5-7 minutes.",
      "Stir in cumin, paprika, salt, and black pepper; cook for 1 minute until fragrant.",
      "Add rinsed lentils and vegetable broth; bring to a boil.",
      "Reduce heat to low and simmer for about 25-30 minutes, or until lentils are tender.",
      "Stir in chopped spinach and lemon juice; cook for an additional 5 minutes.",
      "Taste and adjust seasoning if necessary.",
      "Serve hot.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "210",
          percentDV: "10%",
        },
        {
          nutrient: "Protein",
          amount: "12g",
          percentDV: "24%",
        },
        {
          nutrient: "Carbs",
          amount: "36g",
          percentDV: "12%",
        },
        {
          nutrient: "Fat",
          amount: "4g",
          percentDV: "6%",
        },
        {
          nutrient: "Fiber",
          amount: "12g",
          percentDV: "48%",
        },
        {
          nutrient: "Sugar",
          amount: "3g",
          percentDV: "3%",
        },
        {
          nutrient: "Sodium",
          amount: "500mg",
          percentDV: "22%",
        },
      ],
    },
    description:
      "Warm up with this hearty, vegetarian Lentil Soup. Packed with protein-rich lentils, aromatic spices, and fresh spinach, it's a comforting, one-pot meal that's easy to prepare and perfect for a chilly day.",
  },
  {
    title: "Stuffed Bell Peppers",
    category: "Dinner",
    imagePath: "/assets/images/recipes/stuffed-bell-peppers-plated.webp",
    ingredients: [
      "4 medium bell peppers",
      "1 cup cooked rice",
      "1 lb ground beef",
      "1 can (15 oz) black beans, drained and rinsed",
      "1 cup corn, frozen or canned",
      "1 cup salsa",
      "1 tsp cumin",
      "1 tsp chili powder",
      "1 cup shredded cheese",
      "Salt to taste",
      "Pepper to taste",
    ],
    steps: [
      "Preheat the oven to 375°F (190°C).",
      "Cut the tops off the bell peppers and remove the seeds.",
      "In a large skillet, brown the ground beef over medium heat until fully cooked, then drain excess fat.",
      "Add cooked rice, black beans, corn, salsa, cumin, chili powder, salt, and pepper to the skillet. Mix well until heated through.",
      "Stuff each bell pepper with the beef and rice mixture, packing it in tightly.",
      "Place the stuffed peppers upright in a baking dish. If they don't stand, trim the bottoms slightly.",
      "Top each pepper with shredded cheese.",
      "Cover the baking dish with aluminum foil and bake for 30 minutes.",
      "Remove the foil and bake for an additional 10-15 minutes until the cheese is bubbly and the peppers are tender.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "18%",
        },
        {
          nutrient: "Protein",
          amount: "25g",
          percentDV: "50%",
        },
        {
          nutrient: "Carbs",
          amount: "45g",
          percentDV: "15%",
        },
        {
          nutrient: "Fat",
          amount: "10g",
          percentDV: "15%",
        },
        {
          nutrient: "Fiber",
          amount: "8g",
          percentDV: "32%",
        },
        {
          nutrient: "Sugar",
          amount: "5g",
          percentDV: "6%",
        },
        {
          nutrient: "Sodium",
          amount: "600mg",
          percentDV: "26%",
        },
      ],
    },
    description:
      "Stuffed Bell Peppers are a delightful, protein-packed dinner. Juicy bell peppers are filled with a savory mixture of ground beef, rice, black beans, and corn, seasoned with cumin and chili powder. A simple yet satisfying meal the whole family will enjoy.",
  },
  {
    title: "Chia Seed Pudding with Berries",
    category: "Dessert",
    imagePath:
      "/assets/images/recipes/chia-seed-pudding-with-berries-plated.webp",
    ingredients: [
      "1/4 cup chia seeds",
      "1 cup almond milk",
      "1 tablespoon honey or maple syrup",
      "1/2 teaspoon vanilla extract",
      "1/2 cup mixed berries (strawberries, blueberries, raspberries)",
    ],
    steps: [
      "In a bowl, combine chia seeds, almond milk, honey (or maple syrup), and vanilla extract.",
      "Whisk the mixture thoroughly to prevent clumping of chia seeds.",
      "Cover the bowl and refrigerate for at least 4 hours or overnight to allow the chia seeds to expand and thicken.",
      "Once thickened, stir the pudding again to mix well.",
      "Serve in bowls or jars topped with mixed berries.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "210",
          percentDV: "10%",
        },
        {
          nutrient: "Protein",
          amount: "6g",
          percentDV: "12%",
        },
        {
          nutrient: "Carbs",
          amount: "34g",
          percentDV: "11%",
        },
        {
          nutrient: "Fat",
          amount: "7g",
          percentDV: "11%",
        },
        {
          nutrient: "Fiber",
          amount: "10g",
          percentDV: "40%",
        },
        {
          nutrient: "Sugar",
          amount: "6g",
          percentDV: "7%",
        },
        {
          nutrient: "Sodium",
          amount: "120mg",
          percentDV: "5%",
        },
      ],
    },
    description:
      "This creamy chia seed pudding is a delightful, nutrient-dense dessert. Infused with vanilla and sweetened with honey or maple syrup, it's topped with a colorful medley of fresh berries for a naturally sweet and satisfying treat.",
  },
  {
    title: "Pita Bread with Hummus and Veggies",
    category: "Snack",
    imagePath:
      "/assets/images/recipes/pita-bread-with-hummus-and-veggies-plated.webp",
    ingredients: [
      "2 whole wheat pita breads",
      "1 cup hummus",
      "1 medium cucumber, sliced",
      "1 medium carrot, julienned",
      "1 red bell pepper, sliced",
      "1 cup cherry tomatoes, halved",
      "1/4 cup olives, sliced",
      "1 tablespoon olive oil",
      "1 teaspoon lemon juice",
      "Salt and pepper to taste",
    ],
    steps: [
      "Cut the pita breads in half to create pockets.",
      "In a small bowl, mix olive oil, lemon juice, salt, and pepper to make a dressing.",
      "Spread a generous amount of hummus inside each pita pocket.",
      "Fill the pita pockets with cucumber slices, carrot sticks, red bell pepper strips, cherry tomatoes, and olives.",
      "Drizzle the dressing over the veggies inside the pita.",
      "Serve immediately and enjoy your snack.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "17%",
        },
        {
          nutrient: "Protein",
          amount: "12g",
          percentDV: "24%",
        },
        {
          nutrient: "Carbs",
          amount: "50g",
          percentDV: "17%",
        },
        {
          nutrient: "Fat",
          amount: "12g",
          percentDV: "18%",
        },
        {
          nutrient: "Fiber",
          amount: "10g",
          percentDV: "40%",
        },
        {
          nutrient: "Sugar",
          amount: "5g",
          percentDV: "6%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "Enjoy a satisfying and nutritious snack with this simple recipe for Pita Bread with Hummus and Veggies. Crisp pita pockets are filled with creamy hummus and a colorful medley of fresh vegetables, creating a delightful balance of flavors and textures.",
  },
  {
    title: "Chicken Fajitas",
    category: "Dinner",
    imagePath: "/assets/images/recipes/chicken-fajitas-plated.webp",
    ingredients: [
      "1 lb boneless, skinless chicken breasts",
      "1 bell pepper, sliced",
      "1 onion, sliced",
      "2 tablespoons olive oil",
      "2 teaspoons chili powder",
      "1 teaspoon cumin",
      "1 teaspoon garlic powder",
      "1 teaspoon onion powder",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "8 small flour tortillas",
      "1/2 cup shredded cheese (optional)",
      "1/2 cup salsa (optional)",
      "1/4 cup sour cream (optional)",
    ],
    steps: [
      "Preheat a large skillet over medium-high heat.",
      "In a bowl, combine the olive oil, chili powder, cumin, garlic powder, onion powder, salt, and black pepper to create a marinade.",
      "Add the chicken breasts to the marinade, ensuring they are well coated. Let them sit for about 15 minutes.",
      "Once marinated, add the chicken to the preheated skillet. Cook for about 6-7 minutes on each side until fully cooked and no longer pink in the center.",
      "Remove the chicken from the skillet and let it rest for a few minutes before slicing it into strips.",
      "In the same skillet, add the sliced bell pepper and onion. Sauté for about 5 minutes until they are tender and slightly caramelized.",
      "Return the sliced chicken to the skillet with the vegetables and stir to combine everything.",
      "Warm the tortillas in a separate pan or microwave until soft.",
      "Serve the chicken and vegetable mixture in the tortillas, topped with cheese, salsa, and sour cream if desired.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "450",
          percentDV: "23%",
        },
        {
          nutrient: "Protein",
          amount: "30g",
          percentDV: "60%",
        },
        {
          nutrient: "Carbs",
          amount: "45g",
          percentDV: "15%",
        },
        {
          nutrient: "Fat",
          amount: "15g",
          percentDV: "23%",
        },
        {
          nutrient: "Fiber",
          amount: "3g",
          percentDV: "12%",
        },
        {
          nutrient: "Sugar",
          amount: "2g",
          percentDV: "2%",
        },
        {
          nutrient: "Sodium",
          amount: "800mg",
          percentDV: "35%",
        },
      ],
    },
    description:
      "Sizzling chicken fajitas with vibrant bell peppers and onions, seasoned with a flavorful blend of chili powder, cumin, garlic, and onion. This easy, one-pan dinner comes together quickly for a satisfying Tex-Mex meal any night of the week.",
  },
  {
    title: "Savory Oatmeal with Egg and Avocado",
    category: "Breakfast",
    imagePath:
      "/assets/images/recipes/savory-oatmeal-with-egg-and-avocado-plated.webp",
    ingredients: [
      "1 cup rolled oats",
      "2 cups water or vegetable broth",
      "1 ripe avocado",
      "2 large eggs",
      "1 tablespoon olive oil",
      "1/2 teaspoon salt",
      "1/4 teaspoon black pepper",
      "1/4 teaspoon garlic powder",
      "1 tablespoon chopped fresh herbs (optional, e.g., chives or parsley)",
    ],
    steps: [
      "In a medium saucepan, bring 2 cups of water or vegetable broth to a boil.",
      "Add 1 cup of rolled oats and reduce heat to a simmer. Cook for about 5-7 minutes, stirring occasionally, until the oats are creamy.",
      "Meanwhile, in a skillet, heat 1 tablespoon of olive oil over medium heat.",
      "Crack 2 large eggs into the skillet and cook to your liking (sunny-side up, over-easy, or scrambled).",
      "Season the eggs with 1/2 teaspoon salt, 1/4 teaspoon black pepper, and 1/4 teaspoon garlic powder.",
      "Once the oatmeal is cooked, remove from heat and stir in chopped fresh herbs if using.",
      "Spoon the oatmeal into bowls, top each bowl with a cooked egg and sliced avocado.",
      "Serve immediately, garnished with additional herbs if desired.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "470",
          percentDV: "24%",
        },
        {
          nutrient: "Protein",
          amount: "16g",
          percentDV: "32%",
        },
        {
          nutrient: "Carbs",
          amount: "52g",
          percentDV: "17%",
        },
        {
          nutrient: "Fat",
          amount: "24g",
          percentDV: "37%",
        },
        {
          nutrient: "Fiber",
          amount: "10g",
          percentDV: "40%",
        },
        {
          nutrient: "Sugar",
          amount: "1g",
          percentDV: "1%",
        },
        {
          nutrient: "Sodium",
          amount: "550mg",
          percentDV: "24%",
        },
      ],
    },
    description:
      "Savory oatmeal is a delightful breakfast option, blending creamy oats with the richness of avocado and a perfectly cooked egg. This simple, protein-packed meal comes together quickly, making it an easy and satisfying way to start your day.",
  },
  {
    title: "Vegetable Sushi Rolls",
    category: "Lunch",
    imagePath: "/assets/images/recipes/vegetable-sushi-rolls-plated.webp",
    ingredients: [
      "2 cups sushi rice",
      "2 1/2 cups water",
      "1/4 cup rice vinegar",
      "2 tablespoons sugar",
      "1 teaspoon salt",
      "4 sheets nori (seaweed)",
      "1/2 cucumber, julienned",
      "1 carrot, julienned",
      "1 avocado, sliced",
      "1 bell pepper, thinly sliced",
      "Soy sauce for serving",
      "Pickled ginger for serving",
      "Wasabi for serving",
    ],
    steps: [
      "Rinse the sushi rice under cold water until the water runs clear.",
      "In a pot, combine the rinsed rice and water. Bring to a boil, then reduce to low heat, cover, and simmer for 20 minutes.",
      "Remove from heat and let the rice sit covered for an additional 10 minutes.",
      "In a small bowl, mix rice vinegar, sugar, and salt until dissolved. Fold this mixture into the cooked rice gently.",
      "Place a bamboo sushi mat on a clean surface and lay a sheet of nori on top, shiny side down.",
      "Wet your hands to prevent sticking and grab a handful of sushi rice. Spread it evenly over the nori, leaving a 1-inch border at the top.",
      "Arrange a line of cucumber, carrot, avocado, and bell pepper across the rice, about 1 inch from the bottom.",
      "Using the sushi mat, roll the nori tightly away from you, pressing firmly to shape the roll.",
      "Seal the edge of the nori with a little water. Repeat with remaining ingredients.",
      "Using a sharp knife, slice the rolls into bite-sized pieces. Serve with soy sauce, pickled ginger, and wasabi.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "250",
          percentDV: "12%",
        },
        {
          nutrient: "Protein",
          amount: "6g",
          percentDV: "12%",
        },
        {
          nutrient: "Carbs",
          amount: "50g",
          percentDV: "17%",
        },
        {
          nutrient: "Fat",
          amount: "5g",
          percentDV: "8%",
        },
        {
          nutrient: "Fiber",
          amount: "4g",
          percentDV: "16%",
        },
        {
          nutrient: "Sugar",
          amount: "2g",
          percentDV: "2%",
        },
        {
          nutrient: "Sodium",
          amount: "500mg",
          percentDV: "22%",
        },
      ],
    },
    description:
      "Vegetable Sushi Rolls are a fresh, plant-based take on the classic Japanese dish. Fragrant sushi rice is wrapped in nori sheets with crunchy julienned cucumber and carrot for a satisfying, flavor-packed lunch or snack. Perfect for vegetarians and sushi lovers alike.",
  },
  {
    title: "Grilled Salmon with Asparagus",
    category: "Dinner",
    imagePath:
      "/assets/images/recipes/grilled-salmon-with-asparagus-plated.webp",
    ingredients: [
      "4 oz salmon fillet",
      "1 tbsp olive oil",
      "1 tsp lemon juice",
      "1/2 tsp garlic powder",
      "1/4 tsp salt",
      "1/4 tsp black pepper",
      "8 oz asparagus, trimmed",
      "1 lemon, sliced (for garnish)",
    ],
    steps: [
      "Preheat the grill to medium-high heat.",
      "In a small bowl, mix olive oil, lemon juice, garlic powder, salt, and black pepper.",
      "Brush the mixture onto the salmon fillet and asparagus.",
      "Place the salmon skin-side down on the grill.",
      "Add the asparagus next to the salmon on the grill.",
      "Grill the salmon for about 6-8 minutes until it flakes easily with a fork.",
      "Grill the asparagus for about 4-6 minutes, turning occasionally, until tender and slightly charred.",
      "Remove the salmon and asparagus from the grill and let rest for a minute.",
      "Serve the salmon and asparagus on a plate, garnished with lemon slices.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "17%",
        },
        {
          nutrient: "Protein",
          amount: "34g",
          percentDV: "68%",
        },
        {
          nutrient: "Carbs",
          amount: "8g",
          percentDV: "3%",
        },
        {
          nutrient: "Fat",
          amount: "20g",
          percentDV: "31%",
        },
        {
          nutrient: "Fiber",
          amount: "4g",
          percentDV: "16%",
        },
        {
          nutrient: "Sugar",
          amount: "2g",
          percentDV: "2%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "Elevate your dinner with this delightful Grilled Salmon and Asparagus dish. The salmon is infused with a zesty lemon-garlic marinade, while the tender asparagus adds a fresh, nutritious side. A quick and easy meal that's perfect for a weeknight or weekend gathering.",
  },
  {
    title: "Caprese Salad with Balsamic Glaze",
    category: "Salad",
    imagePath:
      "/assets/images/recipes/caprese-salad-with-balsamic-glaze-plated.webp",
    ingredients: [
      "2 large ripe tomatoes",
      "8 ounces fresh mozzarella cheese",
      "1/2 cup fresh basil leaves",
      "2 tablespoons extra virgin olive oil",
      "2 tablespoons balsamic glaze",
      "Salt to taste",
      "Freshly cracked black pepper to taste",
    ],
    steps: [
      "Slice the tomatoes into 1/4-inch thick slices.",
      "Slice the fresh mozzarella cheese into 1/4-inch thick slices.",
      "On a serving platter, alternate layers of tomato and mozzarella slices, adding basil leaves between each layer.",
      "Drizzle the extra virgin olive oil over the arranged salad.",
      "Drizzle the balsamic glaze over the top of the salad.",
      "Season with salt and freshly cracked black pepper to taste.",
      "Serve immediately.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "320",
          percentDV: "16%",
        },
        {
          nutrient: "Protein",
          amount: "16g",
          percentDV: "32%",
        },
        {
          nutrient: "Carbs",
          amount: "20g",
          percentDV: "7%",
        },
        {
          nutrient: "Fat",
          amount: "22g",
          percentDV: "34%",
        },
        {
          nutrient: "Fiber",
          amount: "2g",
          percentDV: "8%",
        },
        {
          nutrient: "Sugar",
          amount: "4g",
          percentDV: "4%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "Savor the classic flavors of a Caprese salad with juicy tomatoes, creamy mozzarella, and fragrant basil, all drizzled with a tangy balsamic glaze. This vegetarian dish is a simple yet elegant way to enjoy the bounty of fresh, seasonal ingredients.",
  },
  {
    title: "Thai Coconut Soup",
    category: "Soup",
    imagePath: "/assets/images/recipes/thai-coconut-soup-plated.webp",
    ingredients: [
      "1 tablespoon vegetable oil",
      "1 medium onion, chopped",
      "3 cloves garlic, minced",
      "1 tablespoon ginger, grated",
      "1 tablespoon red curry paste",
      "4 cups coconut milk",
      "2 cups vegetable broth",
      "1 cup mushrooms, sliced",
      "1 cup bell pepper, sliced",
      "1 cup baby spinach",
      "2 tablespoons lime juice",
      "1 tablespoon soy sauce",
      "Fresh cilantro for garnish",
    ],
    steps: [
      "Heat the vegetable oil in a large pot over medium heat.",
      "Add the chopped onion and sauté until translucent, about 3-4 minutes.",
      "Stir in the minced garlic and grated ginger, cooking for another minute.",
      "Add the red curry paste and cook for 1-2 minutes until fragrant.",
      "Pour in the coconut milk and vegetable broth, stirring to combine.",
      "Bring the mixture to a simmer, then add the sliced mushrooms and bell pepper.",
      "Cook for about 5 minutes until the vegetables are tender.",
      "Stir in the baby spinach, lime juice, and soy sauce, cooking until the spinach wilts.",
      "Remove from heat and serve hot, garnished with fresh cilantro.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "320",
          percentDV: "16%",
        },
        {
          nutrient: "Protein",
          amount: "5g",
          percentDV: "10%",
        },
        {
          nutrient: "Carbs",
          amount: "24g",
          percentDV: "8%",
        },
        {
          nutrient: "Fat",
          amount: "25g",
          percentDV: "38%",
        },
        {
          nutrient: "Fiber",
          amount: "3g",
          percentDV: "12%",
        },
        {
          nutrient: "Sugar",
          amount: "3g",
          percentDV: "3%",
        },
        {
          nutrient: "Sodium",
          amount: "600mg",
          percentDV: "26%",
        },
      ],
    },
    description:
      "This aromatic Thai coconut soup features a creamy blend of coconut milk, red curry paste, and fresh ginger. Mushrooms and onions add heartiness to this fragrant, vegetarian-friendly dish that's perfect for a cozy meal or as a starter.",
  },
  {
    title: "Pasta Primavera",
    category: "Pasta",
    imagePath: "/assets/images/recipes/pasta-primavera-plated.webp",
    ingredients: [
      "8 oz pasta",
      "2 tbsp olive oil",
      "1 cup bell peppers, sliced",
      "1 cup zucchini, sliced",
      "1 cup cherry tomatoes, halved",
      "1 cup broccoli florets",
      "2 cloves garlic, minced",
      "1 tsp Italian seasoning",
      "Salt to taste",
      "Pepper to taste",
      "1/4 cup grated Parmesan cheese (optional)",
      "Fresh basil for garnish (optional)",
    ],
    steps: [
      "Cook the pasta according to package instructions until al dente; drain and set aside.",
      "In a large skillet, heat olive oil over medium heat.",
      "Add the garlic and sauté for 1 minute until fragrant.",
      "Add the bell peppers, zucchini, and broccoli; cook for 5-7 minutes until tender.",
      "Stir in the cherry tomatoes and Italian seasoning; cook for another 2-3 minutes.",
      "Add the cooked pasta to the skillet; toss to combine.",
      "Season with salt and pepper to taste.",
      "Serve hot, topped with grated Parmesan cheese and fresh basil if desired.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "400",
          percentDV: "20%",
        },
        {
          nutrient: "Protein",
          amount: "12g",
          percentDV: "24%",
        },
        {
          nutrient: "Carbs",
          amount: "60g",
          percentDV: "20%",
        },
        {
          nutrient: "Fat",
          amount: "15g",
          percentDV: "23%",
        },
        {
          nutrient: "Fiber",
          amount: "5g",
          percentDV: "20%",
        },
        {
          nutrient: "Sugar",
          amount: "5g",
          percentDV: "6%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "Pasta Primavera is a vibrant, veggie-packed dish that celebrates the flavors of spring. Tender pasta is tossed with a colorful medley of bell peppers, zucchini, tomatoes, and broccoli, all sautéed in garlic-infused olive oil and seasoned with Italian herbs. A quick, easy, and nutritious weeknight meal.",
  },
  {
    title: "Cabbage Stir-Fry with Beef",
    category: "Stir-Fry",
    imagePath: "/assets/images/recipes/cabbage-stir-fry-with-beef-plated.webp",
    ingredients: [
      "1 lb beef sirloin, thinly sliced",
      "4 cups green cabbage, shredded",
      "1 medium onion, sliced",
      "2 cloves garlic, minced",
      "1 bell pepper, sliced",
      "2 tablespoons soy sauce",
      "1 tablespoon oyster sauce",
      "1 tablespoon vegetable oil",
      "1 teaspoon sesame oil",
      "1 teaspoon ginger, minced",
      "Salt and pepper to taste",
    ],
    steps: [
      "Heat vegetable oil in a large skillet over medium-high heat.",
      "Add sliced beef and cook until browned, about 3-5 minutes. Remove beef from skillet and set aside.",
      "In the same skillet, add onion, garlic, and ginger. Sauté for 2-3 minutes until fragrant.",
      "Add bell pepper and cabbage, stirring frequently, and cook for another 5-7 minutes until vegetables are tender.",
      "Return the beef to the skillet, and add soy sauce, oyster sauce, sesame oil, salt, and pepper. Stir well to combine and heat through for 2 more minutes.",
      "Serve hot over rice or noodles if desired.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "17%",
        },
        {
          nutrient: "Protein",
          amount: "30g",
          percentDV: "60%",
        },
        {
          nutrient: "Carbs",
          amount: "15g",
          percentDV: "5%",
        },
        {
          nutrient: "Fat",
          amount: "20g",
          percentDV: "31%",
        },
        {
          nutrient: "Fiber",
          amount: "4g",
          percentDV: "16%",
        },
        {
          nutrient: "Sugar",
          amount: "5g",
          percentDV: "6%",
        },
        {
          nutrient: "Sodium",
          amount: "800mg",
          percentDV: "35%",
        },
      ],
    },
    description:
      "Enjoy a quick and flavorful stir-fry with tender beef, crisp cabbage, and aromatic garlic and onions. This simple, one-pan dish comes together in no time, making it a perfect weeknight meal. Serve over rice for a satisfying and well-balanced dinner.",
  },
  {
    title: "Banana Pancakes with Maple Syrup",
    category: "Breakfast",
    imagePath:
      "/assets/images/recipes/banana-pancakes-with-maple-syrup-plated.webp",
    ingredients: [
      "1 cup all-purpose flour",
      "2 tbsp sugar",
      "2 tsp baking powder",
      "1/2 tsp salt",
      "1 cup milk",
      "1 large egg",
      "2 ripe bananas, mashed",
      "2 tbsp butter, melted",
      "1 tsp vanilla extract",
      "Maple syrup for serving",
    ],
    steps: [
      "In a bowl, mix the flour, sugar, baking powder, and salt.",
      "In another bowl, whisk together the milk, egg, mashed bananas, melted butter, and vanilla extract.",
      "Combine the wet ingredients with the dry ingredients until just mixed; do not overmix.",
      "Heat a non-stick skillet over medium heat and lightly grease it.",
      "Pour 1/4 cup of batter for each pancake onto the skillet.",
      "Cook until bubbles form on the surface, then flip and cook until golden brown on the other side.",
      "Serve warm with maple syrup.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "17%",
        },
        {
          nutrient: "Protein",
          amount: "8g",
          percentDV: "16%",
        },
        {
          nutrient: "Carbs",
          amount: "60g",
          percentDV: "20%",
        },
        {
          nutrient: "Fat",
          amount: "10g",
          percentDV: "15%",
        },
        {
          nutrient: "Fiber",
          amount: "3g",
          percentDV: "12%",
        },
        {
          nutrient: "Sugar",
          amount: "8g",
          percentDV: "9%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "Indulge in a stack of fluffy banana pancakes, bursting with the natural sweetness of ripe bananas and drizzled with rich maple syrup. This easy-to-make breakfast is a comforting way to start your day, perfect for a leisurely weekend morning.",
  },
  {
    title: "Falafel Wrap with Tahini Sauce",
    category: "Lunch",
    imagePath:
      "/assets/images/recipes/falafel-wrap-with-tahini-sauce-plated.webp",
    ingredients: [
      "1 cup dried chickpeas",
      "1/2 small onion, chopped",
      "2 cloves garlic, minced",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh cilantro, chopped",
      "1 tsp ground cumin",
      "1 tsp ground coriander",
      "1/2 tsp salt",
      "1/4 tsp black pepper",
      "1/2 tsp baking powder",
      "1/4 cup flour",
      "Oil for frying",
      "4 whole wheat tortillas",
      "1 cup lettuce, shredded",
      "1 tomato, diced",
      "1 cucumber, sliced",
      "1/2 cup tahini sauce",
    ],
    steps: [
      "Soak chickpeas in water overnight, then drain.",
      "In a food processor, combine chickpeas, onion, garlic, parsley, cilantro, cumin, coriander, salt, pepper, and baking powder. Blend until coarse.",
      "Add flour and pulse until mixture holds together but is not smooth.",
      "Form mixture into small balls or patties.",
      "Heat oil in a pan over medium heat. Fry falafel until golden brown, about 3-4 minutes per side.",
      "Drain falafel on paper towels.",
      "Warm tortillas in a dry pan or microwave.",
      "Assemble wraps by placing lettuce, tomato, cucumber, and falafel on each tortilla.",
      "Drizzle tahini sauce over the filling and roll up the wraps tightly.",
      "Serve immediately.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "550",
          percentDV: "27%",
        },
        {
          nutrient: "Protein",
          amount: "18g",
          percentDV: "36%",
        },
        {
          nutrient: "Carbs",
          amount: "70g",
          percentDV: "23%",
        },
        {
          nutrient: "Fat",
          amount: "24g",
          percentDV: "37%",
        },
        {
          nutrient: "Fiber",
          amount: "12g",
          percentDV: "48%",
        },
        {
          nutrient: "Sugar",
          amount: "5g",
          percentDV: "6%",
        },
        {
          nutrient: "Sodium",
          amount: "600mg",
          percentDV: "26%",
        },
      ],
    },
    description:
      "Crispy falafel wrapped in warm pita with cool, creamy tahini sauce - a delightful vegetarian lunch that's packed with Middle Eastern flavors and plant-based protein. This easy-to-make recipe is perfect for a quick, satisfying meal.",
  },
  {
    title: "Baked Sweet Potatoes with Black Beans",
    category: "Dinner",
    imagePath:
      "/assets/images/recipes/baked-sweet-potatoes-with-black-beans-plated.webp",
    ingredients: [
      "4 medium sweet potatoes",
      "1 can (15 oz) black beans, drained and rinsed",
      "1 cup corn kernels (fresh or frozen)",
      "1 teaspoon cumin",
      "1 teaspoon chili powder",
      "1 tablespoon olive oil",
      "Salt to taste",
      "Pepper to taste",
      "1 avocado, diced (optional)",
      "Fresh cilantro for garnish (optional)",
    ],
    steps: [
      "Preheat your oven to 400°F (200°C).",
      "Wash and scrub the sweet potatoes, then poke holes in them with a fork.",
      "Place the sweet potatoes on a baking sheet and bake for 45-60 minutes, or until tender.",
      "While the sweet potatoes are baking, heat olive oil in a skillet over medium heat.",
      "Add the black beans, corn, cumin, chili powder, salt, and pepper to the skillet.",
      "Cook for 5-7 minutes, stirring occasionally until heated through.",
      "Once the sweet potatoes are done, remove them from the oven and let them cool slightly.",
      "Slice each sweet potato in half and fluff the insides with a fork.",
      "Top each sweet potato half with the black bean mixture.",
      "Garnish with diced avocado and fresh cilantro if desired. Serve warm.",
    ],
    nutrition: {
      rows: [
        {
          nutrient: "Calories",
          amount: "350",
          percentDV: "18%",
        },
        {
          nutrient: "Protein",
          amount: "10g",
          percentDV: "20%",
        },
        {
          nutrient: "Carbs",
          amount: "60g",
          percentDV: "20%",
        },
        {
          nutrient: "Fat",
          amount: "8g",
          percentDV: "12%",
        },
        {
          nutrient: "Fiber",
          amount: "15g",
          percentDV: "60%",
        },
        {
          nutrient: "Sugar",
          amount: "5g",
          percentDV: "5%",
        },
        {
          nutrient: "Sodium",
          amount: "300mg",
          percentDV: "13%",
        },
      ],
    },
    description:
      "Baked Sweet Potatoes with Black Beans is a simple, nutritious dinner that combines the natural sweetness of roasted sweet potatoes with the protein-packed goodness of black beans. Seasoned with aromatic cumin and chili powder, this vegetarian dish is a satisfying and flavorful weeknight meal.",
  },
];

const workoutPlans = {
  arms: {
    none: {
      name: "Bodyweight Arms Workout",
      exercises: [
        {
          name: "Push-ups",
          duration: 45,
          description: "Standard push-ups, keep body straight",
        },
        {
          name: "Tricep Dips",
          duration: 30,
          description: "Use a chair or bench, lower body slowly",
        },
        {
          name: "Pike Push-ups",
          duration: 30,
          description: "Target shoulders, form an inverted V",
        },
        {
          name: "Arm Circles",
          duration: 20,
          description: "Small circles forward, then backward",
        },
      ],
      totalTime: 125,
    },
    dumbbells: {
      name: "Dumbbell Arms Workout",
      exercises: [
        {
          name: "Bicep Curls",
          duration: 45,
          description: "Controlled movement, squeeze at the top",
        },
        {
          name: "Overhead Press",
          duration: 45,
          description: "Press dumbbells overhead, keep core tight",
        },
        {
          name: "Tricep Extensions",
          duration: 30,
          description: "Lower weight behind head slowly",
        },
        {
          name: "Hammer Curls",
          duration: 30,
          description: "Neutral grip, alternate arms",
        },
      ],
      totalTime: 150,
    },
    "resistance-bands": {
      name: "Resistance Band Arms",
      exercises: [
        {
          name: "Band Bicep Curls",
          duration: 45,
          description: "Step on band, curl handles up",
        },
        {
          name: "Band Overhead Press",
          duration: 40,
          description: "Press band overhead from shoulders",
        },
        {
          name: "Band Tricep Extensions",
          duration: 35,
          description: "Hold band overhead, extend down",
        },
        {
          name: "Band Lateral Raises",
          duration: 30,
          description: "Raise arms to sides against resistance",
        },
      ],
      totalTime: 150,
    },
    kettlebells: {
      name: "Kettlebell Arms Workout",
      exercises: [
        {
          name: "Kettlebell Swings",
          duration: 45,
          description: "Hip hinge movement, swing to shoulder height",
        },
        {
          name: "Kettlebell Press",
          duration: 40,
          description: "Press kettlebell overhead, one arm at a time",
        },
        {
          name: "Kettlebell Rows",
          duration: 35,
          description: "Bent over row, pull to ribs",
        },
        {
          name: "Kettlebell Halos",
          duration: 30,
          description: "Circle kettlebell around your head",
        },
      ],
      totalTime: 150,
    },
    barbell: {
      name: "Barbell Arms Workout",
      exercises: [
        {
          name: "Barbell Curls",
          duration: 45,
          description: "Stand tall, curl bar to chest",
        },
        {
          name: "Overhead Press",
          duration: 45,
          description: "Press barbell overhead from shoulders",
        },
        {
          name: "Close-Grip Bench Press",
          duration: 40,
          description: "Narrow grip, focus on triceps",
        },
        {
          name: "Barbell Rows",
          duration: 35,
          description: "Bent over, pull bar to lower chest",
        },
      ],
      totalTime: 165,
    },
  },
  legs: {
    none: {
      name: "Bodyweight Legs Workout",
      exercises: [
        {
          name: "Squats",
          duration: 45,
          description: "Feet shoulder-width apart, sit back",
        },
        {
          name: "Lunges",
          duration: 40,
          description: "Alternate legs, keep front knee over ankle",
        },
        {
          name: "Calf Raises",
          duration: 30,
          description: "Rise up on toes, slow descent",
        },
        {
          name: "Wall Sit",
          duration: 30,
          description: "Back against wall, thighs parallel to floor",
        },
      ],
      totalTime: 145,
    },
    dumbbells: {
      name: "Dumbbell Legs Workout",
      exercises: [
        {
          name: "Goblet Squats",
          duration: 45,
          description: "Hold dumbbell at chest, squat deep",
        },
        {
          name: "Dumbbell Lunges",
          duration: 45,
          description: "Hold dumbbells at sides, lunge forward",
        },
        {
          name: "Romanian Deadlifts",
          duration: 40,
          description: "Hinge at hips, lower dumbbells",
        },
        {
          name: "Calf Raises",
          duration: 30,
          description: "Hold dumbbells, rise on toes",
        },
      ],
      totalTime: 160,
    },
    "resistance-bands": {
      name: "Resistance Band Legs",
      exercises: [
        {
          name: "Band Squats",
          duration: 45,
          description: "Stand on band, squat with resistance",
        },
        {
          name: "Band Side Steps",
          duration: 40,
          description: "Band around ankles, step sideways",
        },
        {
          name: "Band Glute Bridges",
          duration: 35,
          description: "Band around thighs, bridge up",
        },
        {
          name: "Band Leg Press",
          duration: 30,
          description: "Lying down, press band with feet",
        },
      ],
      totalTime: 150,
    },
    kettlebells: {
      name: "Kettlebell Legs Workout",
      exercises: [
        {
          name: "Kettlebell Squats",
          duration: 45,
          description: "Hold kettlebell at chest, squat",
        },
        {
          name: "Kettlebell Deadlifts",
          duration: 45,
          description: "Hinge at hips, lower kettlebell",
        },
        {
          name: "Kettlebell Lunges",
          duration: 40,
          description: "Hold kettlebell, alternate lunges",
        },
        {
          name: "Single-Leg Deadlifts",
          duration: 35,
          description: "Balance on one leg, hinge forward",
        },
      ],
      totalTime: 165,
    },
    barbell: {
      name: "Barbell Legs Workout",
      exercises: [
        {
          name: "Back Squats",
          duration: 60,
          description: "Bar on shoulders, squat deep",
        },
        {
          name: "Romanian Deadlifts",
          duration: 50,
          description: "Hinge at hips, lower bar",
        },
        {
          name: "Walking Lunges",
          duration: 45,
          description: "Hold bar on shoulders, lunge forward",
        },
        {
          name: "Calf Raises",
          duration: 30,
          description: "Bar on shoulders, rise on toes",
        },
      ],
      totalTime: 185,
    },
  },
  chest: {
    none: {
      name: "Bodyweight Chest Workout",
      exercises: [
        {
          name: "Push-ups",
          duration: 45,
          description: "Standard push-ups, full range of motion",
        },
        {
          name: "Wide Push-ups",
          duration: 40,
          description: "Hands wider than shoulders",
        },
        {
          name: "Diamond Push-ups",
          duration: 30,
          description: "Hands form diamond shape",
        },
        {
          name: "Incline Push-ups",
          duration: 35,
          description: "Hands elevated on bench or step",
        },
      ],
      totalTime: 150,
    },
    dumbbells: {
      name: "Dumbbell Chest Workout",
      exercises: [
        {
          name: "Dumbbell Press",
          duration: 50,
          description: "Lying flat, press dumbbells up",
        },
        {
          name: "Dumbbell Flyes",
          duration: 45,
          description: "Arms wide, bring dumbbells together",
        },
        {
          name: "Incline Dumbbell Press",
          duration: 45,
          description: "On incline, press dumbbells up",
        },
        {
          name: "Pullovers",
          duration: 35,
          description: "Lower dumbbell behind head",
        },
      ],
      totalTime: 175,
    },
    "resistance-bands": {
      name: "Resistance Band Chest",
      exercises: [
        {
          name: "Band Chest Press",
          duration: 45,
          description: "Anchor band behind, press forward",
        },
        {
          name: "Band Flyes",
          duration: 40,
          description: "Arms wide, bring handles together",
        },
        {
          name: "Band Push-ups",
          duration: 35,
          description: "Band across back, push-ups with resistance",
        },
        {
          name: "Band Crossovers",
          duration: 30,
          description: "Cross arms in front of chest",
        },
      ],
      totalTime: 150,
    },
    kettlebells: {
      name: "Kettlebell Chest Workout",
      exercises: [
        {
          name: "Kettlebell Press",
          duration: 45,
          description: "Lying down, press kettlebells up",
        },
        {
          name: "Kettlebell Flyes",
          duration: 40,
          description: "Wide arc motion with kettlebells",
        },
        {
          name: "Floor Press",
          duration: 40,
          description: "Press from floor, limited range",
        },
        {
          name: "Kettlebell Pullovers",
          duration: 35,
          description: "Lower kettlebell behind head",
        },
      ],
      totalTime: 160,
    },
    barbell: {
      name: "Barbell Chest Workout",
      exercises: [
        {
          name: "Bench Press",
          duration: 60,
          description: "Lower bar to chest, press up",
        },
        {
          name: "Incline Bench Press",
          duration: 50,
          description: "On incline, press barbell up",
        },
        {
          name: "Close-Grip Bench Press",
          duration: 45,
          description: "Narrow grip, focus on triceps",
        },
        {
          name: "Barbell Pullovers",
          duration: 35,
          description: "Lower bar behind head",
        },
      ],
      totalTime: 190,
    },
  },
  core: {
    none: {
      name: "Bodyweight Core Workout",
      exercises: [
        {
          name: "Plank",
          duration: 45,
          description: "Hold straight line from head to heels",
        },
        {
          name: "Bicycle Crunches",
          duration: 40,
          description: "Alternate elbow to opposite knee",
        },
        {
          name: "Russian Twists",
          duration: 35,
          description: "Sit up, twist side to side",
        },
        {
          name: "Mountain Climbers",
          duration: 30,
          description: "Plank position, alternate knees",
        },
      ],
      totalTime: 150,
    },
    dumbbells: {
      name: "Dumbbell Core Workout",
      exercises: [
        {
          name: "Weighted Crunches",
          duration: 45,
          description: "Hold dumbbell at chest, crunch up",
        },
        {
          name: "Russian Twists",
          duration: 40,
          description: "Hold dumbbell, twist side to side",
        },
        {
          name: "Weighted Plank",
          duration: 35,
          description: "Plank with dumbbell on back",
        },
        {
          name: "Dumbbell Deadbugs",
          duration: 30,
          description: "Lying down, opposite arm and leg",
        },
      ],
      totalTime: 150,
    },
    "resistance-bands": {
      name: "Band Core Workout",
      exercises: [
        {
          name: "Band Crunches",
          duration: 45,
          description: "Anchor band overhead, crunch down",
        },
        {
          name: "Band Woodchoppers",
          duration: 40,
          description: "Diagonal pulling motion",
        },
        {
          name: "Band Pallof Press",
          duration: 35,
          description: "Hold band at chest, press out",
        },
        {
          name: "Band Bicycle",
          duration: 30,
          description: "Band around feet, bicycle motion",
        },
      ],
      totalTime: 150,
    },
    kettlebells: {
      name: "Kettlebell Core Workout",
      exercises: [
        {
          name: "Kettlebell Swings",
          duration: 45,
          description: "Hip hinge, swing to shoulder height",
        },
        {
          name: "Turkish Get-ups",
          duration: 40,
          description: "Complex movement from lying to standing",
        },
        {
          name: "Kettlebell Windmills",
          duration: 35,
          description: "Overhead hold, bend to side",
        },
        {
          name: "Kettlebell Sit-ups",
          duration: 30,
          description: "Hold kettlebell, sit up",
        },
      ],
      totalTime: 150,
    },
    barbell: {
      name: "Barbell Core Workout",
      exercises: [
        {
          name: "Barbell Rollouts",
          duration: 45,
          description: "Roll bar forward, engage core",
        },
        {
          name: "Barbell Russian Twists",
          duration: 40,
          description: "Sit up, twist bar side to side",
        },
        {
          name: "Barbell Sit-ups",
          duration: 35,
          description: "Hold bar at chest, sit up",
        },
        {
          name: "Barbell Landmines",
          duration: 30,
          description: "Pivot bar in arc motion",
        },
      ],
      totalTime: 150,
    },
  },
  fullbody: {
    none: {
      name: "Full Body HIIT",
      exercises: [
        {
          name: "Burpees",
          duration: 30,
          description: "Full body movement, jump at the top",
        },
        {
          name: "Mountain Climbers",
          duration: 30,
          description: "Keep hips level, quick feet",
        },
        {
          name: "Jumping Jacks",
          duration: 30,
          description: "Full range of motion, land softly",
        },
        {
          name: "High Knees",
          duration: 30,
          description: "Bring knees to chest level",
        },
        {
          name: "Plank",
          duration: 30,
          description: "Hold straight line from head to heels",
        },
      ],
      totalTime: 150,
    },
    dumbbells: {
      name: "Dumbbell Full Body",
      exercises: [
        {
          name: "Dumbbell Thrusters",
          duration: 45,
          description: "Squat to overhead press",
        },
        {
          name: "Renegade Rows",
          duration: 40,
          description: "Plank position, alternate rows",
        },
        {
          name: "Dumbbell Burpees",
          duration: 35,
          description: "Burpee holding dumbbells",
        },
        {
          name: "Man Makers",
          duration: 40,
          description: "Burpee with row and press",
        },
      ],
      totalTime: 160,
    },
    "resistance-bands": {
      name: "Band Full Body Circuit",
      exercises: [
        {
          name: "Band Squats to Press",
          duration: 45,
          description: "Squat then press band overhead",
        },
        {
          name: "Band Rows to Reverse Fly",
          duration: 40,
          description: "Row then open arms wide",
        },
        {
          name: "Band Lateral Walks",
          duration: 35,
          description: "Side steps with band resistance",
        },
        {
          name: "Band Mountain Climbers",
          duration: 30,
          description: "Band around feet, mountain climbers",
        },
      ],
      totalTime: 150,
    },
    kettlebells: {
      name: "Kettlebell Full Body",
      exercises: [
        {
          name: "Kettlebell Swings",
          duration: 45,
          description: "Hip hinge, explosive swing",
        },
        {
          name: "Kettlebell Clean & Press",
          duration: 40,
          description: "Clean to shoulder, press overhead",
        },
        {
          name: "Kettlebell Goblet Squats",
          duration: 35,
          description: "Hold at chest, squat deep",
        },
        {
          name: "Turkish Get-ups",
          duration: 40,
          description: "Complex movement, lying to standing",
        },
      ],
      totalTime: 160,
    },
    barbell: {
      name: "Barbell Full Body",
      exercises: [
        {
          name: "Barbell Thrusters",
          duration: 50,
          description: "Front squat to overhead press",
        },
        {
          name: "Barbell Rows",
          duration: 45,
          description: "Bent over, pull to lower chest",
        },
        {
          name: "Deadlifts",
          duration: 50,
          description: "Hip hinge, lift from floor",
        },
        {
          name: "Barbell Burpees",
          duration: 35,
          description: "Burpee over the barbell",
        },
      ],
      totalTime: 180,
    },
  },
};

const healthQuotes = [
  {
    quote:
      "Fuel your body with nourishing foods that energize and heal, for a healthier and happier life.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole foods that fuel your health, energize your spirit, and empower your life.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole, colorful foods that fuel you from the inside out.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole foods to fuel your potential and thrive in every aspect of life.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole foods to fuel your vitality and radiate wellness from within.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole foods that fuel your health, energize your spirit, and nourish your soul.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole, colorful foods to fuel your potential and thrive every day.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole foods that fuel your energy, strength, and vitality every day.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with whole, colorful foods to fuel your potential and live vibrantly every day.",
    category: "nutrition",
  },
  {
    quote:
      "Nourish your body with the fuel it deserves, and watch as your health and vitality flourish.",
    category: "nutrition",
  },
  {
    quote:
      "Every step you take towards exercise is a step towards a healthier and happier you.",
    category: "exercise",
  },
  {
    quote:
      "Every drop of sweat is a step closer to a healthier, stronger you. Keep pushing, keep moving, keep growing.",
    category: "exercise",
  },
  {
    quote: "Sweat today, smile tomorrow.",
    category: "exercise",
  },
  {
    quote:
      "Embrace the challenge of each workout as an opportunity to strengthen your body, mind, and spirit.",
    category: "exercise",
  },
  {
    quote:
      "Every step, every rep, every drop of sweat gets you closer to the best version of yourself.",
    category: "exercise",
  },
  {
    quote:
      "Every drop of sweat shed in exercise is a step towards a healthier and stronger version of yourself.",
    category: "exercise",
  },
  {
    quote:
      "Push yourself to exercise not just for the body you want, but for the strength, energy, and confidence you deserve.",
    category: "exercise",
  },
  {
    quote:
      "Let every drop of sweat be a step towards a healthier, stronger, and happier you.",
    category: "exercise",
  },
  {
    quote: "Sweat now, shine later.",
    category: "exercise",
  },
  {
    quote:
      "Embrace the burn, it's your body transforming into strength and resilience. Keep pushing, every step forward is a victory.",
    category: "exercise",
  },
  {
    quote:
      "Feed your mind with positivity, exercise your thoughts with gratitude, and nurture your soul with self-care.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace your journey to mental wellness, one step at a time, with self-compassion and resilience.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace the power of your mind; nurture it, protect it, and let positivity bloom within.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace your inner strength and resilience, for your mental health journey is a testament to your courage and growth.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace your struggles as opportunities for growth, for the strongest minds are forged in the fires of adversity.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace your journey to mental wellness with compassion, courage, and resilience - you are worthy of healing and peace.",
    category: "mental_health",
  },
  {
    quote:
      "Nourish your mind with positivity and self-care, for mental health is the cornerstone of overall well-being.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace the journey of healing your mind, for true strength comes from within.",
    category: "mental_health",
  },
  {
    quote:
      "Nourish your mind daily with positivity and self-care, for mental wellness is just as important as physical health.",
    category: "mental_health",
  },
  {
    quote:
      "Embrace your inner strength and resilience, for every struggle you overcome is a step toward a healthier mind.",
    category: "mental_health",
  },
  {
    quote:
      "Nourish your body, move your soul, and radiate wellness from within.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love, movement, and nourishing foods to thrive in a life of wellness.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love, exercise, and wholesome foods, and watch your wellness flourish.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love and care every day to thrive in wellness and vitality.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, mind, and soul daily to cultivate a life filled with vitality and joy.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, move with purpose, and embrace self-care - your health is the greatest gift you can give yourself.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, move with purpose, and embrace self-care daily to cultivate a life of vibrant health and wellness.",
    category: "wellness",
  },
  {
    quote:
      "Nurture your body, mind, and soul with love, nourishment, and movement every day to thrive in wellness.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, move with purpose, and cultivate a positive mindset - your wellness journey starts with small, consistent steps.",
    category: "wellness",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love, gratitude, and movement every day to thrive in wellness.",
    category: "wellness",
  },
  {
    quote:
      "Embrace the present moment with gratitude and awareness, nurturing your mind, body, and soul towards optimal health and well-being.",
    category: "mindfulness",
  },
  {
    quote:
      "Embrace mindfulness to nourish your body, soothe your mind, and elevate your spirit towards vibrant health.",
    category: "mindfulness",
  },
  {
    quote:
      "Be present in your body, nourish your mind, and honor your spirit with each mindful breath you take.",
    category: "mindfulness",
  },
  {
    quote:
      "Embrace the present moment with mindful awareness, nurturing your body and soul with each breath you take.",
    category: "mindfulness",
  },
  {
    quote:
      "Be present in your body, nourish your mind, and let your soul shine through mindfulness in every moment.",
    category: "mindfulness",
  },
  {
    quote:
      "Nourish your body, mind, and soul with mindful choices every day, and watch your health flourish.",
    category: "mindfulness",
  },
  {
    quote:
      "Embrace each moment mindfully, for it is in the present where true health and vitality reside.",
    category: "mindfulness",
  },
  {
    quote:
      "Nourish your mind, body, and soul with the power of mindfulness, for true health begins from within.",
    category: "mindfulness",
  },
  {
    quote:
      "Be present in every moment, for mindfulness is the key to unlocking true health and vitality within.",
    category: "mindfulness",
  },
  {
    quote:
      "Be present in each moment, nourish your body and mind with mindfulness, and watch your health and well-being flourish.",
    category: "mindfulness",
  },
  {
    quote:
      "Prioritize your sleep like it's your most important meeting - because your health deserves your full attention and care.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize sleep as a vital part of your self-care routine, allowing your body and mind to rejuvenate and thrive.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize your sleep, for it is the foundation upon which a healthy and vibrant life is built.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize your sleep, for it is the foundation upon which your health and well-being are built.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize your sleep, for it is the foundation of a healthy body and a clear mind.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize quality sleep, for it is the foundation of a healthy and vibrant life.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize quality sleep to fuel your body, mind, and spirit for a vibrant and fulfilling life.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize quality sleep to awaken the best version of yourself each day.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize your sleep for a healthier and happier life. Your body and mind deserve the rest they need.",
    category: "sleep",
  },
  {
    quote:
      "Prioritize restful sleep as an essential part of your wellness routine, for a rejuvenated mind and body each day.",
    category: "sleep",
  },
  {
    quote:
      "Stay hydrated, nourish your body, and thrive from within. Your health is your wealth, so drink up and feel the difference.",
    category: "hydration",
  },
  {
    quote:
      "Stay hydrated, fuel your body, and thrive. Your wellness journey begins with a glass of water.",
    category: "hydration",
  },
  {
    quote:
      "Stay hydrated, feel energized. Your body thrives when you give it the water it needs.",
    category: "hydration",
  },
  {
    quote:
      "Nourish your body with water, the elixir of life, and feel yourself come alive with vitality and energy.",
    category: "hydration",
  },
  {
    quote:
      "Hydrate your body, nourish your soul, and watch your health flourish.",
    category: "hydration",
  },
  {
    quote:
      "Stay hydrated, fuel your body with water, and watch your health flourish like a blooming flower.",
    category: "hydration",
  },
  {
    quote:
      "Stay hydrated like a plant in the sun, nourishing your body with every drop to bloom and thrive.",
    category: "hydration",
  },
  {
    quote:
      "Stay hydrated, feel invigorated - water is the elixir of life, nourishing your body and soul.",
    category: "hydration",
  },
  {
    quote:
      "Nourish your body with water, the elixir of life, and feel your energy soar.",
    category: "hydration",
  },
  {
    quote:
      "Stay hydrated, your body craves it. Your energy, focus, and overall health will thank you.",
    category: "hydration",
  },
  {
    quote:
      "Embrace peace within chaos, breathe deeply, and choose calmness in the midst of stress.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace stillness, breathe deeply, release tension. Let go of stress and invite peace into your body and mind.",
    category: "stress_management",
  },
  {
    quote:
      "Take a deep breath and release the weight of stress. Your mind and body deserve peace.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace the power within to conquer stress, breathe deeply, and let go of what does not serve your well-being.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace the calm within you, breathe deeply, and release the weight of stress. Your mind and body deserve peace.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace the power of breath, releasing stress with each exhale, restoring calm and balance within.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace self-care as a daily ritual to conquer stress and nurture your well-being.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace challenges with a calm mind and inner strength, for it is in the face of stress that our resilience shines brightest.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace the chaos, breathe through the storms, and find peace in the midst of it all.",
    category: "stress_management",
  },
  {
    quote:
      "Embrace stillness within chaos; breathe in peace, breathe out stress.",
    category: "stress_management",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love, rest, and movement. Your self-care is your superpower.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul daily; self-care is not selfish, it's essential for a vibrant life.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love and care, for self-care is the foundation of true health and happiness.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul daily - self-care is the key to unlocking your full potential.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your mind, body, and soul with self-care, for a healthier, happier you.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul daily; self-care is the key to unlocking your full potential and living a vibrant life.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love and care each day. You deserve to prioritize your well-being.",
    category: "self_care",
  },
  {
    quote:
      "Nurture your body, mind, and soul with the care and love they deserve. Your well-being is worth the effort.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul with love and care, for self-care is the foundation of a healthy and fulfilling life.",
    category: "self_care",
  },
  {
    quote:
      "Nourish your body, mind, and soul with self-care to thrive in health and happiness.",
    category: "self_care",
  },
  {
    quote:
      "Believe in yourself and your ability to make positive changes for a healthier, happier life.",
    category: "motivation",
  },
  {
    quote:
      "Believe in yourself and your ability to achieve your health goals. Your mindset is the key to unlocking your potential.",
    category: "motivation",
  },
  {
    quote:
      "Believe in yourself, stay committed, and watch your health soar to new heights.",
    category: "motivation",
  },
  {
    quote:
      "Take control of your health journey today, one small step at a time. Your body will thank you for the love and care you give it.",
    category: "motivation",
  },
  {
    quote:
      "Believe in your ability to make positive changes in your health. Your journey starts with one small step forward.",
    category: "motivation",
  },
  {
    quote:
      "Embrace the power within you to make daily choices that nourish your mind, body, and soul. Your health journey starts with a single step.",
    category: "motivation",
  },
  {
    quote:
      "You are capable of achieving greatness in your health journey - believe in yourself, take action, and never give up.",
    category: "motivation",
  },
  {
    quote:
      "Fuel your body with nourishing foods and positive thoughts, and watch your motivation soar to new heights.",
    category: "motivation",
  },
  {
    quote:
      "Believe in the power of your choices to transform your health and inspire others to do the same.",
    category: "motivation",
  },
  {
    quote:
      "Every small step towards a healthier you is a giant leap towards a happier life.",
    category: "motivation",
  },
];

const healthTips = [
  "Incorporate a daily 10-minute walk into your routine, preferably in a natural setting. This simple practice not only boosts cardiovascular health but also enhances mood and reduces stress, making it an effective way to promote overall well-being and prevent chronic diseases.",
  "Aim to drink at least 8 cups of water daily, adjusting based on your activity level and climate. Carry a reusable water bottle to remind yourself to hydrate regularly, and consider drinking a glass of water before each meal to help with digestion and portion control.",
  "To improve your posture and mobility, take a few minutes each hour to stand up, stretch your arms overhead, and gently twist your torso side to side. This simple routine helps relieve tension, promotes circulation, and keeps your spine flexible throughout the day.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as they provide essential vitamins, minerals, and antioxidants that support overall health. This simple habit can enhance your nutrient intake and make meals more enjoyable.",
  "To build a lasting habit, start small: choose one specific action to perform daily, like drinking a glass of water first thing in the morning. Consistency is key; track your progress and celebrate small wins to reinforce the behavior and make it a natural part of your routine.",
  "Incorporate a daily 10-minute stretching routine into your morning or evening schedule. This simple practice can improve flexibility, enhance circulation, and reduce the risk of injury, helping you stay active and safe throughout your day.",
  "To stay properly hydrated, aim to drink at least eight 8-ounce glasses of water each day. You can increase your intake by carrying a reusable water bottle and sipping throughout the day, especially during meals and physical activity.",
  "Aim to drink at least eight glasses of water daily, but adjust based on your activity level and climate. Keep a reusable water bottle handy to make sipping throughout the day easier, and try to replace sugary drinks with water to stay hydrated and support overall health.",
  "Incorporate short bursts of physical activity into your daily routine by taking the stairs, going for a brisk walk during breaks, or doing a quick 5-minute workout at home. These small changes can significantly boost your overall fitness and energy levels.",
  "Take a few minutes each hour to stand up, stretch, and move around. Simple movements like neck rolls, shoulder shrugs, and gentle torso twists can improve your posture and enhance mobility, reducing the risk of discomfort and stiffness from prolonged sitting.",
  "To improve your posture and mobility, take a few minutes each hour to stand up, stretch, and walk around. Focus on pulling your shoulders back and down while engaging your core. This simple habit can help reduce stiffness and promote better alignment throughout your day.",
  "Take five minutes each day for mindful breathing. Find a quiet spot, close your eyes, and focus on your breath. Inhale deeply through your nose, hold for a moment, then exhale slowly through your mouth. This practice can reduce stress and improve your overall mood.",
  "Aim to drink at least 8 cups (about 2 liters) of water daily, adjusting based on activity level and climate. Carry a reusable water bottle with you, and set reminders on your phone to sip throughout the day, helping maintain optimal hydration for energy and focus.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time each day, even on weekends. This helps regulate your body's internal clock, making it easier to fall asleep and wake up refreshed.",
  "To build a lasting habit, start small and be consistent. Choose one specific action, like taking a 5-minute walk after lunch, and commit to doing it every day for a month. This simple routine can lead to greater health benefits over time as it becomes part of your daily life.",
  "To improve your posture and mobility, take a few minutes each hour to stand up, stretch, and do a few gentle twists. This simple routine helps relieve tension, promotes blood flow, and keeps your spine aligned, making it easier to stay active and focused throughout the day.",
  "To improve posture and mobility, take a few minutes every hour to stand up, stretch your arms overhead, and gently rotate your torso side to side. This simple routine helps release tension, encourages better alignment, and enhances circulation, making it easier to stay active throughout the day.",
  "To improve your posture and mobility, take a few minutes every hour to stand up, stretch your arms overhead, and gently twist your torso side to side. This simple routine can help relieve tension, enhance flexibility, and promote better alignment throughout your day.",
  "Incorporate a variety of colorful fruits and vegetables into your meals to boost nutrient intake and improve overall health. Aim for at least five servings a day, as this can enhance your immune system and reduce the risk of chronic diseases.",
  "Incorporate a daily walk into your routine, aiming for at least 30 minutes. This simple activity enhances cardiovascular health, improves mood, and reduces stress. Walking outdoors can also boost vitamin D levels and strengthen your immune system, contributing to overall well-being.",
  "Establish a consistent sleep schedule by going to bed and waking up at the same time every day, even on weekends. This helps regulate your body’s internal clock, making it easier to fall asleep and wake up refreshed, which can improve overall mood and cognitive function.",
  "To improve your posture and mobility, take a few minutes every hour to stand up, stretch your arms overhead, and gently twist your torso side to side. This simple routine helps release tension, enhances circulation, and promotes better alignment throughout your day.",
  "Incorporate at least 30 minutes of moderate physical activity into your daily routine, such as brisk walking, cycling, or dancing. This can boost your mood, improve cardiovascular health, and enhance overall fitness. Aim for a mix of activities you enjoy to stay motivated and engaged.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as diverse colors often indicate different nutrients that support overall health. Try adding berries to breakfast or mixing greens into lunch and dinner for a flavorful boost.",
  "Take short breaks every hour to stand, stretch, and move around. Simple movements like shoulder rolls and gentle neck stretches can relieve tension and improve posture. Incorporating these mini-breaks into your routine can enhance mobility and overall well-being.",
  "To prevent accidents at home, take a few minutes each day to declutter high-traffic areas. Remove tripping hazards like loose rugs, shoes, and cords. Keeping your living space organized not only promotes safety but also creates a more calming environment.",
  "Establish a consistent sleep schedule by going to bed and waking up at the same time every day, even on weekends. This helps regulate your body’s internal clock, leading to improved sleep quality and increased energy levels throughout the day.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as they provide essential vitamins, minerals, and antioxidants that support overall health. A simple way to start is by adding them to smoothies, salads, or as snacks.",
  "Incorporate more whole foods into your meals by aiming to fill half your plate with fruits and vegetables at each meal. This simple practice boosts your nutrient intake, supports digestion, and can help maintain a healthy weight, all while making your meals more colorful and enjoyable.",
  "Incorporate a daily safety check into your routine by assessing your home environment for potential hazards. Ensure that walkways are clear, smoke detectors are functional, and emergency exits are accessible. This simple practice can significantly reduce the risk of accidents and enhance your overall safety.",
  "Incorporate more whole foods into your meals by filling half your plate with fruits and vegetables at each meal. This simple practice boosts your nutrient intake, supports digestive health, and can help maintain a healthy weight over time.",
  "Start your day by setting a specific, achievable goal, like drinking a glass of water or taking a 10-minute walk. Write it down and track your progress. This simple habit can boost your motivation and create a positive momentum for healthier choices throughout the day.",
  "Incorporate at least 30 minutes of moderate physical activity into your daily routine, such as brisk walking, cycling, or dancing. This not only boosts your cardiovascular health but also enhances mood and energy levels, making it easier to stay active and engaged throughout the day.",
  "Take a few minutes each day to practice mindfulness by focusing on your breath. Find a quiet space, close your eyes, and inhale deeply for four counts, then exhale for four counts. This simple practice can reduce stress, improve focus, and enhance your overall mental wellbeing.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time every day, even on weekends. This helps regulate your body's internal clock, making it easier to fall asleep and wake up refreshed.",
  "Start your day with a glass of water as soon as you wake up. This simple habit helps rehydrate your body after sleep, kick-starts your metabolism, and can improve focus throughout the morning. Aim for at least eight glasses of water throughout the day to stay well-hydrated.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time every day. This helps regulate your body's internal clock, making it easier to fall asleep and wake up refreshed. Avoid screens and stimulating activities an hour before bed for the best results.",
  "Start your day by setting a specific goal, such as drinking a glass of water upon waking. This simple action not only hydrates you but also establishes a positive routine. Gradually add more healthy habits to your morning, reinforcing a proactive mindset for the day ahead.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time each day, even on weekends. This helps regulate your body's internal clock, making it easier to fall asleep and wake up refreshed.",
  "Practice gratitude daily by jotting down three things you're thankful for each morning. This simple act can shift your mindset, enhance mood, and promote resilience. Over time, it fosters a more positive outlook on life, contributing to improved mental well-being.",
  "To improve your posture and mobility, take a short break every hour to stand up, stretch, and walk around for a few minutes. Focus on keeping your shoulders relaxed and your spine aligned while moving, as this can enhance circulation and reduce muscle tension throughout the day.",
  "Incorporate short bursts of activity into your day, like 5-10 minute walks or quick bodyweight exercises, especially during breaks. This not only boosts your mood but also enhances metabolism and can improve overall fitness, making it easier to stay active consistently.",
  "Take five minutes each day to practice mindfulness through deep breathing or meditation. Focus on your breath and let go of distractions. This simple practice can reduce stress, improve mood, and enhance overall mental clarity, helping you feel more centered throughout your day.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as different colors often signify different nutrients, which can enhance your overall health and well-being. This simple change can boost your energy and improve digestion.",
  "To build a lasting habit, start small: choose one simple action to do daily, like a 5-minute walk or drinking a glass of water first thing in the morning. Consistency is key; over time, this small change can lead to bigger health improvements.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time every day, even on weekends. This helps regulate your body's internal clock, making it easier to fall asleep and wake up feeling refreshed.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as these foods provide essential vitamins, minerals, and antioxidants that support overall health. Try adding them to smoothies, salads, or as snacks to boost your nutrition effortlessly.",
  "Take a few moments every hour to stand up, stretch, and adjust your posture. Try rolling your shoulders back and down while standing tall. This simple practice can help improve your mobility, reduce tension, and enhance overall well-being throughout the day.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as different colors often indicate different nutrients. This simple habit boosts your overall health, supports your immune system, and helps maintain a balanced diet.",
  "Start your day with a simple morning routine that includes a glass of water and five minutes of stretching. This small habit can boost hydration, improve flexibility, and set a positive tone for the day. Consistency is key—try to do it every morning for a month to build the habit.",
  "Take five minutes each day to practice mindfulness or deep breathing. Find a quiet space, close your eyes, and focus on your breath. This simple practice can reduce stress, enhance your mood, and improve your overall mental wellbeing by promoting relaxation and presence in the moment.",
  "Spend at least 10 minutes each day practicing mindfulness or deep breathing exercises. This simple habit can help reduce stress, improve focus, and enhance your overall mental wellbeing. Find a quiet spot, close your eyes, and concentrate on your breath to cultivate a sense of calm.",
  "Aim to drink at least eight 8-ounce glasses of water daily. A practical way to stay on track is to carry a reusable water bottle and refill it throughout the day. This not only helps maintain hydration but also encourages healthier habits overall.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as they provide essential vitamins, minerals, and antioxidants that support overall health. A simple way to start is by adding a piece of fruit or a handful of veggies to each meal or snack.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five different colors to ensure a wide range of vitamins, minerals, and antioxidants, which support overall health and help reduce the risk of chronic diseases.",
  "To build a lasting habit, start small by committing to just five minutes a day of your desired activity, whether it's exercise, reading, or meditation. Gradually increase the time as it becomes part of your routine, reinforcing the behavior with positive self-talk and rewards.",
  "Incorporate at least 30 minutes of moderate physical activity into your daily routine, such as brisk walking, cycling, or dancing. Aim for consistency, as regular movement boosts your mood, energy levels, and overall health. Small changes, like taking the stairs or walking during breaks, can make a big difference.",
  "Incorporate a daily 10-minute walk into your routine, ideally in natural surroundings. This simple activity not only boosts physical health by improving cardiovascular fitness but also enhances mental well-being by reducing stress and anxiety, making it an effective preventive measure for overall health.",
  "Aim to drink at least eight glasses of water daily, adjusting for activity level and climate. To make it easier, carry a reusable water bottle and set reminders on your phone. Staying hydrated can boost your energy and improve concentration throughout the day.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five different types, as they provide essential vitamins, minerals, and antioxidants that support overall health and well-being. Experiment with different colors to keep meals interesting and nutritious.",
  "Incorporate at least 30 minutes of moderate exercise into your daily routine, such as brisk walking or cycling. Aim for activities that elevate your heart rate and can be easily integrated into your day, like taking the stairs or walking during lunch breaks, to boost your overall fitness.",
  "Aim to drink at least eight 8-ounce glasses of water daily, adjusting based on your activity level and climate. Carry a reusable water bottle to remind yourself to hydrate regularly, and consider adding slices of fruit or herbs for a refreshing twist.",
  "To improve your posture and mobility, take a 5-minute break every hour to stand, stretch, and move around. Focus on shoulder rolls and gentle side bends to relieve tension. This simple routine can enhance circulation, reduce stiffness, and promote overall well-being throughout your day.",
  "To stay adequately hydrated, aim to drink at least eight 8-ounce glasses of water daily. A simple trick is to carry a reusable water bottle and refill it throughout the day. This habit helps remind you to drink more and supports overall health.",
  "To build a healthy habit, start small by choosing one action to repeat daily, like drinking a glass of water each morning. Consistency is key; track your progress for a month to reinforce the behavior, making it easier to expand into other healthy practices over time.",
  "Incorporate a daily safety check into your routine by assessing your environment for potential hazards, such as clutter, loose rugs, or inadequate lighting. This simple practice can significantly reduce the risk of falls and injuries, promoting a safer living space for everyone.",
  "Incorporate a variety of colorful fruits and vegetables into your meals each day. Aim for at least five servings, as different colors often represent different nutrients. This simple change can boost your overall health, support your immune system, and improve energy levels.",
  "To build a lasting habit, start small and be consistent. Choose a simple action, like drinking a glass of water each morning. Set a specific time and keep it visible, so it becomes a natural part of your routine. Celebrate small wins to reinforce your commitment.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time every day, even on weekends. This helps regulate your body's internal clock, making it easier to fall asleep and wake up feeling refreshed.",
  "Aim to drink at least eight 8-ounce glasses of water each day, spreading your intake throughout the day. Carry a reusable water bottle with you as a reminder, and consider drinking a glass of water before each meal to stay hydrated and support your overall health.",
  "To stay well-hydrated, aim to drink a glass of water with each meal and snack. This simple habit not only helps maintain hydration but also supports digestion and can prevent overeating. Make water your go-to beverage throughout the day for optimal health.",
  "Incorporate short bursts of physical activity throughout your day, such as a 5-minute walk every hour. This simple change can boost your energy levels, improve mood, and enhance overall fitness without requiring a significant time commitment.",
  "Incorporate short bursts of activity throughout your day, such as taking a brisk 5-minute walk every hour or doing a set of bodyweight exercises. This approach can boost your energy, improve mood, and enhance overall fitness without requiring a lengthy workout session.",
  "Incorporate a daily walk into your routine, aiming for at least 30 minutes. This simple activity not only boosts cardiovascular health but also enhances mood and reduces stress. Walking outdoors can improve your vitamin D levels and connect you with nature, further promoting overall well-being.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time every day. Limit screen time an hour before bed, and create a calm environment by dimming lights and reducing noise to signal your body it's time to rest.",
  "Start your day with a simple morning routine that includes five minutes of stretching or deep breathing. This helps set a positive tone for the day, boosts your energy, and makes it easier to integrate healthy habits throughout the day. Consistency is key, so aim to do this daily.",
  "Incorporate a 10-minute walk into your daily routine, whether during lunch breaks or after dinner. This simple activity boosts mood, enhances cardiovascular health, and can aid in weight management. Aim for a brisk pace to maximize benefits and enjoy the fresh air.",
  "Incorporate regular handwashing into your daily routine, especially before meals and after using the restroom. This simple practice effectively reduces the spread of germs and infections, promoting overall health and safety. Use soap and water for at least 20 seconds to maximize its benefits.",
  "Incorporate a daily routine of at least 30 minutes of moderate physical activity, such as brisk walking or cycling. This not only boosts cardiovascular health but also enhances mental well-being and reduces the risk of chronic diseases, making it a vital component of your preventive health strategy.",
  "To improve your sleep quality, establish a consistent bedtime routine by going to bed and waking up at the same time each day, even on weekends. This helps regulate your body's internal clock, making it easier to fall asleep and wake up refreshed.",
  "Establish a consistent bedtime routine by going to bed and waking up at the same time each day, even on weekends. This helps regulate your body's internal clock, improving sleep quality and making it easier to fall asleep and wake up refreshed.",
  "Incorporate at least 30 minutes of moderate physical activity into your daily routine, such as brisk walking, cycling, or dancing. This can boost your mood, improve heart health, and enhance overall well-being, making it easier to stay active and energized throughout the day.",
  "To build a lasting healthy habit, start small and be consistent. Choose one specific action, like drinking a glass of water first thing in the morning, and repeat it daily. Over time, this simple practice can lead to greater wellness and motivate you to adopt more positive habits.",
  "To build a lasting health habit, start small by setting a specific daily goal, like taking a 10-minute walk after lunch. Consistency is key; track your progress to stay motivated, and gradually increase the duration or intensity as you feel comfortable.",
  "Incorporate at least 30 minutes of moderate exercise into your daily routine to boost your heart health and overall well-being. Activities like brisk walking, cycling, or dancing not only improve physical fitness but also enhance mental health, reducing stress and anxiety.",
  "To improve your posture and mobility, take a few minutes every hour to stand up, stretch your arms overhead, and gently twist your torso side to side. This simple routine helps relieve tension, promotes better alignment, and encourages blood flow, enhancing overall well-being.",
  "Aim to drink at least 8 glasses of water daily, but adjust based on your activity level and climate. Keep a reusable water bottle with you to remind yourself to sip throughout the day, making hydration a natural part of your routine.",
  "Incorporate short bursts of activity throughout your day, such as a 5-minute walk every hour or quick bodyweight exercises like squats or push-ups. This not only boosts your metabolism but also enhances mood and focus, making it easier to stay active in your daily routine.",
  "Establish a consistent sleep schedule by going to bed and waking up at the same time every day, even on weekends. This helps regulate your body's internal clock, improving sleep quality and making it easier to fall asleep and wake up feeling refreshed.",
  "Incorporate a daily mindfulness practice into your routine, such as spending five minutes focusing on your breath or observing your surroundings. This simple act can reduce stress, improve mood, and enhance overall mental clarity, helping you feel more grounded throughout your day.",
  "Take a few minutes each day to practice mindfulness through deep breathing or meditation. Focusing on your breath helps reduce stress and enhances mental clarity. Aim for at least five minutes, finding a quiet space to center your thoughts and recharge your mind.",
  "Incorporate at least 30 minutes of moderate exercise into your daily routine, such as brisk walking, cycling, or dancing. This can boost your mood, improve cardiovascular health, and enhance overall fitness. Aim for a mix of activities to keep it enjoyable and sustainable.",
  "Take a few minutes each hour to stand up, stretch, and move around. Simple actions like shoulder rolls, gentle twists, or walking can improve your posture and mobility, reducing tension and enhancing overall well-being throughout the day.",
  "To build a lasting habit, start small and be consistent. Choose one specific action, like drinking a glass of water each morning, and repeat it daily. Track your progress to stay motivated, and gradually expand your habit as it becomes easier to maintain.",
  "Start your day by setting a specific intention for one healthy habit you want to build, such as drinking more water or taking a short walk. Write it down and keep it visible throughout the day to remind yourself and reinforce your commitment.",
  "To improve your posture and mobility, take short breaks every hour to stand, stretch, and move around. Simple movements like shoulder rolls, neck stretches, and gentle torso twists can help relieve tension and promote better alignment throughout your day.",
  "To prevent accidents at home, create a clutter-free environment by regularly tidying up and securing loose rugs or cables. This simple practice reduces the risk of trips and falls, making your living space safer for everyone.",
  "Incorporate a brief mobility routine into your day by taking a 5-minute break every hour to stretch and move. Focus on gentle neck rolls, shoulder shrugs, and hip circles to improve posture and reduce stiffness, promoting better overall body alignment and comfort.",
  "Aim to drink at least eight 8-ounce glasses of water daily, adjusting based on your activity level and climate. To make it easier, carry a reusable water bottle with you and set reminders to take sips throughout the day, ensuring you stay consistently hydrated.",
  "To build a lasting habit, start small and be consistent. Choose one simple action, like drinking a glass of water each morning, and do it every day for a month. This creates a routine that can easily grow into larger, healthier habits over time.",
];
