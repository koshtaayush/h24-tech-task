# Assignment

### Getting Started

* The following version has been used for this application 
* The **node version used** : `v10.16.3`
* The **npm version used** : `6.9.0`

## Running the project in your local

1. Ensure you have nodeJS (the version specified above installed)
2. Clone the project,  
3. Run into the root of the folder and move to client folder and execute `npm install`
4. Run `npm start` in the client directory of the project
5. The project should be up and running. Open http://localhost:3000/
6. The page will reload if you make edits.


## Testing

* For unit testing `jest` framework has been used along with `enzyme`. 
* To execute the unit test cases, please run `npm run test`. This will run all the test in watch mode.


## Approach for problem the code solution is trying to solve.
1. The list is fetched as soon as the user lands on the page
2. A search bar has been implemented on the header to search
3. On changing the input, an API call is made to fetch the search result
4. Debouncing has been implemented to optimize the performance for search results
5. A sorting dropdown has been provided to sort the list items
6. It makes an API call with the sorted option
7. The solution is completely responsive and adjusts according to screen size

## Production Build

1. The production build folder can be generted using `npm run build`
2. It will create a build folder. You may serve it with a static server, which can be served therogh any process manager ex: PM2, forever
3. Currently it is being served using express server, the configs are written in `server.js` file
4. For using it install PM2 process manager globally in the machine using `npm install pm2 -g` 
5. A PM2 configuration file is provided as `pm2-config.json`
6. The app can be served using `pm2 start pm2-config.json`
7. It will run on http://localhost:3000/

## Optimizations

1. Typescript has been used for the type checkings so that most of the errors can be caught on development phase itself
2. Linting and pre-commit hooks have been used to follow the code quality and a same pattern
3. Unit testing setup has been done so that a TDD approach can be taken up
4. Chunking and hashing the build files generated

### Screens
1. Landing Screen
<img width="1680" alt="Screenshot 2021-09-11 at 8 25 41 PM" src="https://user-images.githubusercontent.com/14069441/132952021-bf158f6f-0183-46af-b28c-82826f0bcf50.png">

2. Autosuggest Component for search
<img width="1680" alt="Screenshot 2021-09-11 at 8 26 11 PM" src="https://user-images.githubusercontent.com/14069441/132952031-b9f5610e-9740-4f70-aee4-50ee5891c211.png">

3. Loading state for autosuggest
<img width="1680" alt="Screenshot 2021-09-11 at 8 26 44 PM" src="https://user-images.githubusercontent.com/14069441/132952046-13f6247d-c196-473d-a7c5-3147bf62a823.png">

4. Sorting Dropdown
<img width="1680" alt="Screenshot 2021-09-11 at 8 27 19 PM" src="https://user-images.githubusercontent.com/14069441/132952048-663addc2-ad02-462b-83bb-6cd2d4ed796b.png">

5. Hover state on sorting dropdown
<img width="1680" alt="Screenshot 2021-09-11 at 8 27 30 PM" src="https://user-images.githubusercontent.com/14069441/132952054-ae44a076-376b-4666-9bd9-b67b4c13ae34.png">

6. Mobile layout
<img width="375" alt="Screenshot 2021-09-11 at 8 28 06 PM" src="https://user-images.githubusercontent.com/14069441/132952072-ff8ed9b1-5edb-4ded-b6fa-81423ae69367.png">
