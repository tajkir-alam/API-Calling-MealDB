const loadMeals = (food) => {
    const URLIs = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`;
    fetch(URLIs)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    meals.forEach(meal => {
        const cardContent = document.createElement('div');
        cardContent.classList.add('col');
        cardContent.innerHTML = `
        <div class="col">
            <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#idMeal">
                        Launch demo modal
                    </button>
                </div>
            </div>
        </div>
        `
        cardContainer.appendChild(cardContent);
    });
}

const searchBtn = (food) =>{
    const searchValue = document.getElementById('search-item').value;
    loadMeals(searchValue);    
}

const mealDetails = idMeal => {
    const URLIs = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(URLIs)
    .then(res => res.json())
    .then(data => mealInformation(data.meals[0]))
}

const mealInformation = idMeal =>{
    document.getElementById('modal-food-title').innerText = idMeal.strMeal;
    document.getElementById('modal-body').innerText = idMeal.strInstructions;
}

loadMeals('fish')