document.getElementById('search-button').addEventListener('click', () => {
    const city = document.getElementById('city-input').value.trim();

    if (!city) {
        alert('Please enter a city name.');
        return;
    }
    fetchWeather(city);
    saveCityToLocalStorage(city);
    displaySearchedCities();

});

document.getElementById('city-input').addEventListener('focus', displayStoredCities);

document.getElementById('city-input').addEventListener('blur', () => {
    setTimeout(() => {
        document.getElementById('suggestions').style.display = 'none';
    }, 200); // Delay to allow clicking on suggestions
});
function displayStoredCities() {
    const cities = JSON.parse(localStorage.getItem('searchedCities')) || [];
    const suggestionsBox = document.getElementById('suggestions');
    
    suggestionsBox.innerHTML = ''; // Clear previous suggestions
    
    if (cities.length > 0) {
        //Add a title to the suggestions box
        const titleElement = document.createElement('div');
        titleElement.textContent = 'Previously Searched Cities';
        titleElement.className = 'suggestions-title';
        suggestionsBox.appendChild(titleElement);

        // Generate city suggestions
        cities.forEach((city) => {
            const cityElement = document.createElement('div');
            cityElement.textContent = city;
            cityElement.className = 'suggestion-item';
            
            // Add click functionality to fill input
            cityElement.addEventListener('click', () => {
                document.getElementById('city-input').value = city;
                suggestionsBox.style.display = 'none';
            });

            suggestionsBox.appendChild(cityElement);
        });

        suggestionsBox.style.display = 'block'; // Show suggestions box
    } else {
        suggestionsBox.style.display = 'none'; // Hide if no cities
    }
}

function fetchWeather(city)  {
    fetch(`/api/weather?city=${city}`)
        .then((response) => response.json())
        .then((data) => {
            if (data.error) {
                alert(data.error);
            } else {
                displayWeather(data);
            }
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again.');
        });
}

function saveCityToLocalStorage(city) {
    let cities = JSON.parse(localStorage.getItem('searchedCities')) || [];
    if (!cities.includes(city)) {
        cities.push(city);
    }
    localStorage.setItem('searchedCities', JSON.stringify(cities));
}

function displaySearchedCities() {
    const cities = JSON.parse(localStorage.getItem('searchedCities')) || [];
}
// Function to display the current date
function displayCurrentDate() {
    const dateContainer = document.getElementById('current-date');
    const currentDate = new Date();

    // Format the date (e.g., "January 12, 2025")
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString(undefined, options);

    dateContainer.textContent = `${formattedDate}`;
}

// Call displayCurrentDate on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    displaySearchedCities();
});


// Call displaySearchedCities on page load
document.addEventListener('DOMContentLoaded', () => {
    displayCurrentDate();
    displaySearchedCities();
});


function displayWeather(data) {
    const weatherDisplay = document.getElementById('weather-display');

    const weatherIcons = {
        'clear sky': '☀️', // Sun
        'few clouds': '🌤️', // Partly Cloudy
        'scattered clouds': '☁️', // Cloud
        'broken clouds': '☁️', // Cloud
        'shower rain': '🌧️', // Rain
        'rain': '🌧️', // Rain
        'thunderstorm': '⛈️', // Thunderstorm
        'snow': '❄️', // Snow
        'mist': '🌫️', // Fog
    };

    const weatherIcon = weatherIcons[data.conditions] || '🌡️'; // Default icon

    weatherDisplay.innerHTML = `
        <div class="weather-icon">${weatherIcon}</div>
        <h2>Today’s Weather for ${data.city}</h2>
        <p><span class="sun-icon">☀️</span> Temperature: ${data.temperature}°C</p>
        <p><span class="humidity-icon">💧</span> Humidity: ${data.humidity}%</p>
        <p><span class="wind-icon">🌬️</span> Wind Speed: ${data.wind_speed} m/s</p>
        <p><span class="cloud-icon">☁️</span> Conditions: ${data.conditions}</p>
    `;    
    setBackground(data.conditions)
}

function setBackground(condition) {
    const backgrounds = {
        'clear sky': '/images/clear-sky.jpg',
        'few clouds': '/images/few-clouds.jpg',
        'scattered clouds': '/images/few-clouds.jpg',
        'broken clouds': '/images/few-clouds.jpg',
        'shower rain': '/images/rain.jpg',
        'rain': '/images/rain.jpg',
        'thunderstorm': '/images/rain.jpg',
        'snow': '/images/snow.jpg',
        'mist': '/images/mist.jpg',
    };

    const background = backgrounds[condition] || '/images/default-weather.jpg';

    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
}

