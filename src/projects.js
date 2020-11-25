import burger from "./images/burger.png";
import xkcdaily from "./images/xkcdaily.png";
import rolodex from "./images/rolodex.png";
import weather from "./images/weather.png";
import quote from "./images/quote.png";
import password from "./images/password.png";
import planner from "./images/planner.gif";
import quiz from "./images/quiz.png";


const projects = [
  {
    "id": 1,
    "name": "XKCDaily",
    "image": xkcdaily,
    "description": "A daily calendar app that displays a random XKCD comic for each day for the true XKCD enthusiast. Features Passport login and MySQL database for storing saved events and linking comics to their date.",
    "deploy": "https://xkcdaily.herokuapp.com/",
    "repository": "https://github.com/LindseyM20/xkcDaily"
  },
  {
    "id": 2,
    "name": "Burgermania!",
    "image": burger,
    "description": "MVC-structured app for logging and checking off your burger bucketlist. Uses Node, Express, MySQL, Handlebars, and ORM.",
    "deploy": "https://peaceful-peak-71723.herokuapp.com/",
    "repository": "https://github.com/LindseyM20/burgermania"
  },
  {
    "id": 3,
    "name": "Company Rolodex",
    "image": rolodex,
    "description": "This employee database search app built with React makes API calls to Random User API. Sort and filter results with ease.",
    "deploy": "https://nameless-brook-59912.herokuapp.com/",
    "repository": "https://github.com/LindseyM20/company-rolodex"
  },
  {
    "id": 4,
    "name": "Weather Dashboard",
    "image": weather,
    "description": "An application to search for a city and view its weather conditions & forecast. Previous cities saved in Local Storage.",
    "deploy": "https://lindseym20.github.io/weather-dashboard/",
    "repository": "https://github.com/LindseyM20/weather-dashboard"
  },
  {
    "id": 6,
    "name": "Random Password Generator",
    "image": password,
    "description": "This dynamic app runs in the browser, and takes user input to create a secure password.",
    "deploy": "https://lindseym20.github.io/random-password-generator/",
    "repository": "https://github.com/LindseyM20/random-password-generator"
  },
  {
    "id": 7,
    "name": "Scheduler",
    "image": planner,
    "description": "Simple planner app that allows the user to save events for each hour of the day.",
    "deploy": "https://lindseym20.github.io/planner-application/",
    "repository": "https://github.com/LindseyM20/planner-application"
  },
  {
    "id": 8,
    "name": "Coding Quiz",
    "image": quiz,
    "description": "This is a dynamic, timed quiz game to test your knowledge of coding basics.",
    "deploy": "https://lindseym20.github.io/coding-challenge/",
    "repository": "https://github.com/LindseyM20/coding-challenge"
  },
    {
    "id": 5,
    "name": "Quote Buddy",
    "image": quote,
    "description": "Using 2 APIs, this friendly app will generate random quotes, speak them, and save favorites.",
    "deploy": "https://lindseym20.github.io/QuoteBuddy/",
    "repository": "https://github.com/LindseyM20/QuoteBuddy"
  }
]

export default projects;
