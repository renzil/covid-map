# Intro
COVID map of hospital beds available in Bangalore city.

# Syncing
Clone this repository using "git clone %REPO_URL%"

# Prerequisites
Google Cloud API Key with access to Maps JavaScript API, Google Sheets API and Geocoding API.
Firebase account with a Realtime Database.
Publicly readable Google Sheet with a specific format (see https://docs.google.com/spreadsheets/u/1/d/16alrZU8iaZhnKSvbXcKR2C5r8ohQy7lhUt5Em4WAeYE). Here the sheet id is 16alrZU8iaZhnKSvbXcKR2C5r8ohQy7lhUt5Em4WAeYE.

Configure all the API keys as per src/mustache/config.js

# Installing
Run "npm install" in a terminal.

# Building on local machine
Run "npm run watch". This will create a dist folder, compile and copy HTML / CSS / JS files, fetch assets from the cloud, and start a live server that hot-reloads on file changes. Website can be accessed using localhost:8080 in any browser.

# Building for production
Run "npm run build".
