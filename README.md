# To run the project:

1. Run "npm init" in the projects command line
2. run "npm start" or "npm test"

Deployed version of the app: https://stalwart-dasik-844bea.netlify.app/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


#### TL;DR:  
- app's home page renders 10 results that also get stored into local storage 
- very result has a "details" link that shows recipe information upon clicking on it.
- when user searches (with keypress or button press) 10 results get rendered
- same results also persist if the app gets refresed
- user can save favorite recipes when clicking on the star icon

Since I pasted the API key directly in the link instead of using the .env file, I kindly ask you (if the api suddenly fails to fetch) to replace my key with your own in "Searched", "HomeRecipes" and "Details" folder. 
