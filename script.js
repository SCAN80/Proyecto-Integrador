const API_URL = 'https://api.nutritionix.com/v1_1/search/';

const APP_ID = '875e39cb';
const APP_KEY = '7d8f27d555ff9188b7aab36f1a820979';

const searchBtn = document.getElementById('btn-search');
const searchInput = document.getElementById('food');
const resultDiv = document.getElementById('result_food');

searchBtn.addEventListener('click', () => {
  const food = searchInput.value;
  fetch(`${API_URL}${food}?results=0:1&fields=item_name,nf_total_fat,nf_calories&appId=${APP_ID}&appKey=${APP_KEY}`)
    .then(response => response.json())
    .then(data => {
      const foodName = data.hits[0].fields.nf_total_fat;
      const calories = data.hits[0].fields.nf_calories;
      resultDiv.innerHTML = `
      <div class="card">
                <h2>${food}</h2>
                <p>Grasa: ${foodName}</p>
                <p>Calorías totales: ${calories}</p>
                <hr>
            </div>`
            const card = resultDiv.querySelector('.card');
            card.classList.add('show');
    })
    .catch(error => {
      resultDiv.innerHTML = 'Ha ocurrido un error de cálculo';
      });
});
