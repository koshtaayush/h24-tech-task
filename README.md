## home24 Frontend Tech Task

Owner|Type
---|---
Front-End Chapter|Support

### Welcome

Welcome to the "take-home tech task". This repository contains an application that, when running, will request data from our GraphQL server and render a basic product listing page. It's a simple page, with a header, sidebar, some articles and a footer. Your task is to spend some time looking at how it is built and try to improve it by refactoring the code into something that you would be personally proud of.

### Current Code & Structure

The application is split into two parts, the server and the client. This test is mainly focussing on the client aspect of the code, so try and work mainly in the client folder. All code is written in TypeScript with React as this is what we use at home24 daily.

##### Server

The server is a basic API endpoint for accessing live data. The server is built using express and a simple 5-minute cache to reduce the number of unnecessary calls being made while you work on the client. The server proxies all POST requests from `/graphql` to our public production GraphQL endpoint.

##### Client

The client is a basic create-react-app application that renders a product listing page. The page itself shows 50 products from a specific product category. The code and UX could do with some improvement, we've worked hard to create it in a way that will allow you plenty of room to show off your skills and experience that you've gained working as a Frontend Engineer. Please take some time to look around and spot all the areas that you would like to improve. Remember, that when you are finished, you should be happy with your work.

If you find that you couldn't finish everything that you wanted to, then please make a note of them in the [TODO.md](TODO.md). Make sure to include what it was you wanted to do and why you wanted to do it.

### Getting up & running

Both the server and client need to be installed and started.

##### Server

1) `cd server`
2) `npm install`
2) `npm start`

##### Client

1) `cd ../client`
2) `npm install`
2) `npm start`

_Note: create-react-app should open your default browser at localhost to show the application working._

### Tips

We use the following technologies. Demonstrating how you would use these would make it easier for us to see how smooth your transition into the team might be:

1) React with [Hooks](https://reactjs.org/docs/hooks-intro.html)
2) [Jest](https://jestjs.io/)
3) [Emotion.js](https://github.com/emotion-js/emotion) with [styled-system](https://styled-system.com/)
4) [TypeScript](https://www.typescriptlang.org/)

_Note: it's not compulsory to use these technologies but it does help the team process your submission faster. If you aren't familiar with some or all of these then please don't worry, use whatever you need to get the job done_

### Finishing up

Please make sure all your changes are included in your submission and that any new parts added to the application are documented so the team can easily see your hard work.

Code can be submitted back to your recruiter as a zip file containing all the code (excluding both node_modules folders) or you can push your code to a public version control system and send us the link e.g. Github etc

If you have any feedback or notes that you'd like to share with the team please add them to [NOTES.md](NOTES.md).

### What to expect

The team will review your submission and if everyone is happy with the work, we'll ask you to come in and meet us. Getting feedback on your submission can take anything between  3 - 5 working days.

### Closing notes

If you have any difficulty or something just isn't working as it should be, please let your recruiter know ASAP so we can support you.

Thank you for applying to work at home24, we value and appreciate the time that you are spending on this. Good luck and have fun.
