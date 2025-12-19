// Sample Data to simulate a JSON fetch
const travelData = {
    "countries": [
        { "id": 1, "name": "Australia", "cities": [
            {"name": "Sydney", "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9", "description": "Iconic Opera House and beautiful harbor views."},
            {"name": "Melbourne", "imageUrl": "https://images.unsplash.com/photo-1514395462725-fb4566210144", "description": "Famous for its coffee culture and artsy laneways."}
        ]}
    ],
    "temples": [
        { "id": 1, "name": "Angkor Wat, Cambodia", "imageUrl": "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", "description": "The largest religious monument in the world."},
        { "id": 2, "name": "Kinkaku-ji, Japan", "imageUrl": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e", "description": "The stunning Zen temple known as the Golden Pavilion."}
    ],
    "beaches": [
        { "id": 1, "name": "Bora Bora, French Polynesia", "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e", "description": "Crystal clear turquoise waters and luxury overwater bungalows."},
        { "id": 2, "name": "Copacabana, Brazil", "imageUrl": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5", "description": "A world-famous beach known for its vibrant energy."}
    ]
};

const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');
const resultContainer = document.getElementById('resultContainer');

function searchRecommendations() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    resultContainer.innerHTML = ''; // Clear previous results

    if (input.includes('beach')) {
        displayResults(travelData.beaches);
    } else if (input.includes('temple')) {
        displayResults(travelData.temples);
    } else if (input.includes('country') || input.includes('australia')) {
        displayResults(travelData.countries[0].cities);
    } else {
        resultContainer.innerHTML = '<p>No results found. Try "beach", "temple", or "country".</p>';
    }
}

function displayResults(data) {
    data.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('result-card');
        div.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" style="width:100%; border-radius:8px;">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <button class="btnVisit">Visit</button>
        `;
        resultContainer.appendChild(div);
    });
}

function clearResults() {
    document.getElementById('conditionInput').value = '';
    resultContainer.innerHTML = '';
}

btnSearch.addEventListener('click', searchRecommendations);
btnClear.addEventListener('click', clearResults);
