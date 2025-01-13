# Weather Dashboard

A dynamic and visually appealing weather dashboard that allows users to search for real-time weather information by city name. The application dynamically updates the background, and provides a user-friendly interface.

---

## Features
- 🌤️ **Dynamic Backgrounds**: Changes based on weather conditions (e.g., sunny, rainy, snowy).
- 📊 **Weather Details**: Displays temperature, humidity, wind speed, and conditions in visually distinct sections.
- 🌍 **Previously Searched Cities**: Stores and displays the last searched cities using browser-side storage.
- 🔄 **Real-Time Weather Updates**: Fetches live weather data from the OpenWeatherMap API.
- 🖼️ **Animated Icons**: Weather conditions are represented with visually appealing animated SVGs or Lottie animations.
- 💾 **Local Storage Integration**: Retains previously searched cities for future reference.
- 📱 **Responsive Design**: Works seamlessly across different devices and screen sizes.

---

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/manenikita31/weather-dashboard.git

2. Navigate to the project directory:
   ```bash
   cd weather-dashboard
3. Install the required dependencies:
   ```bash
   npm install
4. Add an .env file at the root level with your OpenWeatherMap API key:
   ```bash
   API_KEY=openweathermap_api_key
5. Start the application:
   ```bash
   node server.js
6. Open your browser and navigate to:
   http://localhost:3000

## API Documentation
- API Endpoint: /api/weather
- Request Parameters:
- city (string): Name of the city to fetch weather data for.
- Error response:
  ```json
  {
  "error": "City not found or invalid API key."
  }

## Design Decisions
1. Dynamic Backgrounds: Background images change based on weather conditions for an immersive user experience.
2. User-Friendly Storage: Browser-side storage ensures that users can revisit their previously searched cities.
3. Modern Aesthetics: Gradient backgrounds that adapt to weather conditions.

## Future Improvements
1. 5-Day Weather Forecast:
   - Extend functionality to display a 5-day forecast for the selected city.
2. Localization:
   - Support for multiple languages.
3. Improved Animations:
   - Use advanced Lottie animations for weather icons.
4. Dark Mode:
   - Add support for a dark mode theme.
5. Search Suggestions:
   - Auto-suggest cities while typing in the search bar.
6. User Authentication:
   - Allow users to save favorite cities with personalized dashboards.

## Notes About Platform Limitations
1. API Rate Limits:
- The free tier of the OpenWeatherMap API allows only a limited number of calls per minute. Ensure caching and limit requests to avoid hitting the cap.

2. Cold Starts (Replit Deployment):
- If deployed on Replit, the backend server may experience delays when waking up after inactivity.

3. Browser Storage Limits:
- localStorage has a storage limit of 5MB, which should suffice for storing a list of previously searched cities

## Visual Demo
- After starting the server:
 https://github.com/manenikita31/Weather-Dashboard/blob/main/public/images/Screenshot%20(87).png

- Weather information:
  



