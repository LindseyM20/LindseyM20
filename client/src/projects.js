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
    "description": "Fry Cook",
    "deploy": "Restaurant Owner",
    "repository": "A Giant Anchor"
  },
  {
    "id": 3,
    "name": "Company Rolodex",
    "image": rolodex,
    "description": "Fry Cook",
    "deploy": "Cashier",
    "repository": "An Easter Island Head"
  },
  {
    "id": 4,
    "name": "Weather Dashboard",
    "image": weather,
    "description": "Fry Cook",
    "deploy": "Boy Genius",
    "repository": "A Secret Laboratory"
  },
  {
    "id": 6,
    "name": "Random Password Generator",
    "image": password,
    "description": "Fry Cook",
    "deploy": "Student",
    "repository": "Bluffington"
  },
  {
    "id": 7,
    "name": "Scheduler",
    "image": planner,
    "description": "Fry Cook",
    "deploy": "Looney Toon",
    "repository": "A Rabbit Burrow"
  },
  {
    "id": 8,
    "name": "Coding Quiz",
    "image": quiz,
    "description": "Fry Cook",
    "deploy": "Ladies Man",
    "repository": "Aron City"
  },
    {
    "id": 5,
    "name": "Quote Buddy",
    "image": quote,
    "description": "Fry Cook",
    "deploy": "A Cowardly Dog",
    "repository": "Nowhere, Kansas"
  }
]

export default projects;
