# Intro
COVID map of hospital beds available in Bangalore city.

To contribute, please join our Slack channel at https://join.slack.com/t/hospitaltrackerin/shared_invite/zt-g2w4l8yo-e9YmsmSrEoLdBqTT2xDMqg

Please push all code changes into a new branch, and create a PR for merging to stage. Code will need to be approved by at least 1 code owner before being merged to stage. Merges into master will be done from stage only.

# Prerequisites
Google Cloud API Key with access to Maps JavaScript API, Google Sheets API and Geocoding API.

Firebase account with a Realtime Database.

Publicly readable Google Sheet with a specific format (see https://docs.google.com/spreadsheets/u/1/d/16alrZU8iaZhnKSvbXcKR2C5r8ohQy7lhUt5Em4WAeYE). Here the sheet id is 16alrZU8iaZhnKSvbXcKR2C5r8ohQy7lhUt5Em4WAeYE.

You need to set the API keys and other configuration as environment variables (see .vscode/launch.json.template). If using Visual Studio Code, rename this file to 'launch.json' after you have added the environment variables to Run through Code.

# Installing
Run "npm install" in a terminal.

# Building on local machine
Run "npm run watch". This will create a dist folder, compile and copy HTML / CSS / JS files, fetch assets from the cloud, and start a live server that hot-reloads on file changes. Website can be accessed using localhost:8080 in any browser.

Don't forget to set the environment variables before running this script. This can be easily done with the VS Code launch.json template file.

# Building for production
Run "npm run build".

Don't forget to set the environment variables before running this script.
