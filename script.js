
function openModal(dish) {
    var modal = document.getElementById('recipeModal');
    var content = document.getElementById('recipe-content');
    content.innerHTML = '';

    var recipes = {
        'dongpo-pork': 'Ingredients: 1 kg pork belly, 100 ml Shaoxing wine, 100 g rock sugar, 4-5 slices ginger, 2-3 green onions, soy sauce, water. Steps: Blanch pork, caramelize sugar, add pork and other ingredients, simmer for 1.5-2 hours.',
        'boiled-cabbage': 'Ingredients: 1 head cabbage, 4 cups water, 2 tbsp salt, 1 tbsp butter, black pepper(optional). Steps: Boil water, add cabbage, simmer for 15-20 minutes, drain, add butter and pepper.',
        'hamburger': 'Ingredients: 500 g ground beef, 1/2 tsp salt, 1/2 tsp pepper, 4 buns, toppings (lettuce, tomato, cheese, etc.). Steps: Mix beef, salt, and pepper, form patties, grill them, toast buns, assemble with toppings.'
    };

    content.innerHTML = recipes[dish];
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('recipeModal');
    modal.style.display = 'none';
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
});