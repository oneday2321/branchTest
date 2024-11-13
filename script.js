
function openModal(dish) {
    var modal, content;
    var recipes = {
        'dongpo-pork': 'Ingredients: 1 kg pork belly, 100 ml Shaoxing wine, 100 g rock sugar, 4-5 slices ginger, 2-3 green onions, soy sauce, water. Steps: Blanch pork, caramelize sugar, add pork and other ingredients, simmer for 1.5-2 hours.',
        'boiled-cabbage': 'Ingredients: 1 head cabbage, 4 cups water, 2 tbsp salt, 1 tbsp butter, black pepper(optional). Steps: Boil water, add cabbage, simmer for 15-20 minutes, drain, add butter and pepper.',
        'hamburger': 'Ingredients: 500 g ground beef, 1/2 tsp salt, 1/2 tsp pepper, 4 buns, toppings (lettuce, tomato, cheese, etc.). Steps: Mix beef, salt, and pepper, form patties, grill them, toast buns, assemble with toppings.',
        'huiguorou': 'Ingredients: 500g pork belly, 2 green peppers, 1 red pepper, 2 garlic shoots, 3 cloves garlic, 3 slices ginger, 2 tablespoons Pixian bean paste, 1 tablespoon soy sauce, 1 tablespoon cooking wine, 1 teaspoon sugar, salt to taste, cooking oil to taste. Steps: Boil pork belly for 20 minutes, cool and slice. Cut green and red peppers into pieces, chop garlic shoots. Heat oil in a pan, add bean paste, garlic, and ginger, stir-fry. Add pork, soy sauce, cooking wine, and sugar, stir-fry. Add green and red peppers, garlic shoots, stir-fry and season with salt.',
        'egg-fried-rice': 'Ingredients: 2 cups cooked rice, 3 large eggs, 2 chopped green onions, 1 diced carrot, 1/2 cup peas, 2 tablespoons soy sauce, 2 tablespoons vegetable oil, salt and pepper to taste. Steps: Heat oil in a pan, add carrot and peas, cook for 2-3 minutes. Add beaten eggs, scramble. Add cooked rice, mix with vegetables and eggs. Pour soy sauce, season with salt and pepper, stir-fry for 2-3 minutes. Garnish with green onions.'
    };
    if(dish === 'egg-fried-rice') {
        modal = document.getElementById('egg-fried-rice-modal');
    } else if(dish === 'huiguorou') {
        modal = document.getElementById('huiguorou-modal');
    } else {
        modal = document.getElementById('recipeModal');
        content = document.getElementById('recipe-content');
        content.innerHTML = recipes[dish];
    }
    modal.style.display = 'block';
    setTimeout(function() {
        closeModal(dish === 'huiguorou' ? 'huiguorou-modal' : 'recipeModal');
    }, 5000);
}

function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = 'none';

    if (modalTimeout) {
        clearTimeout(modalTimeout);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var stepsToggleButtons = document.querySelectorAll('.toggle-steps');
    stepsToggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var steps = button.nextElementSibling;
            steps.style.display = (steps.style.display === 'none' || steps.style.display === '') ? 'block' : 'none';
        });
    });

    var ingredients = document.querySelectorAll('.ingredient');
    ingredients.forEach(function(ingredient) {
        ingredient.addEventListener('mouseenter', function() {
            var tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = ingredient.getAttribute('data-tooltip');
            ingredient.appendChild(tooltip);
        });

        ingredient.addEventListener('mouseleave', function() {
            var tooltip = ingredient.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    var huiguorouButton = document.querySelector('#show-huiguorou-recipe');
    if (huiguorouButton) {
        huiguorouButton.addEventListener('click', function() {
            openModal('huiguorou');
        });
    }
});