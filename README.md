# hackOrSnooze

Objective / Summary
Demo
Main Takeaways
Explanation of Files
Main Models
Functions

summary /demo of app
- emulates social news website, HackerNews
- allows users to create, modify, delete acc, view profile
- allows users to submit, delete stories
- allows toggling between favorites, own users, and all stories
- uses the public HackOrSnooze API

main takeaways
- creating instances of classes w/ specific properties to request API
- GET/POST requests using AJAX/axios
- async / await functions to give app time to load from db

explanation of JS files
separation of concerns, readability, and reusablility

Main Model - Classes
- user classes: every new signup/login creates a new instance of a user class with properties that are used in the functions, ex: log-in token for authentication
- story classes: every instance of a story also has properties that are used in functions 
- storyList classes: used in filtering stories based off of all, own, and favorites

Functions
- Story: create, delete, toggling favs, markup and show story on page
- User: sign up, log in/out, user profile, local storage
- Main: global constants for jQuery accessibility, start app on load, hiding components 
- NavBar: all navbar functions, most of which hide/show components after being generated
