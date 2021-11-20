# Madlibs - Project 3
## Description
We’ll be building an interactive Mad Libs game where users will be prompted to fill blanks in a story with nouns, verbs, adjectives, adverbs, and more, before finally reading it in all its glory. If the story is satisfying, users will be able to add it to their Favorites page. They can also choose to start over if they want to play again.
We’ll be building the API from scratch, which means the templates will be original, and the user-created stories will be sure to entertain.
### Project Links
- [Back end git](https://github.com/MongoMisfits/mad-libs-backend) 
- [Front end git](https://github.com/MongoMisfits/mad-libs-frontend)
### Wireframes and Architecture
- Wireframes: 
    -[Mobile/Tablet View](https://www.figma.com/file/gVVawBL5lQwdp4d2YnXK6J/Untitled?node-id=0%3A1)
    -[Desktop View](https://i.imgur.com/3xUElGR.jpg)
    -[React Architecture](https://www.figma.com/file/xdOJ9YFYnJ88ubVOGkYvC5/Untitled?node-id=0%3A1)
### Time/Priority Matrix
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Git management | H | 8hrs |  |  |
| Backend Setup (connection, controllers, models) | H | 3hrs |  |  |
| Seed Data | H | 5hrs |  |  |
| Setup React File w/ libraries & components | H | 3hrs |  |  |
| Header| H | 1hrs |  |  |
| Backend connection to frontend | H | 1hrs |  |  |
| Implement backend data to body components | H | 10hrs |  |  |
| CRUD implementation on Results component | H | 7hrs |  |  |
| Responsiveness, Styling | H | 10hrs |  |  |
| Deployment | H | 1hr |  |  |
| Additional information on body components| L | 3hrs |  |  |
| Extra Styling, Animated images & BG | L | 5hrs |  |  |
| Total | H | 57hrs|  |  |
## MVP/Post-MVP
### MVP
- Express w/ mongoose/mongo
- User and madlib models
- Deployment to heroku & ghpages
- React app w/ Routes, Links, States, & UseEffects
- Home Page
    - Carousel style homepage that switches between each input
- Color palette/styling
- Form on Results Component
    - Able to save username and completed madlib information to database
    - Displays user models on results page which also includes madlib models
- Responsive Design
### Post-MVP
- additional info on carousel
- animated background and 

## Components - Descriptions
- React hooks & router
- Header, footer
    - Title, Theme of Madlibs, Link to team page
    - Title resets game and returns to instructions page
- Body
    - Displays inputs on a carousel type page
    - Includes definitions of input type and an example
- Results
    - Includes database information of other's madlib forms
    - Includes form component
- Form
    - Allows users to enter a name and submit their madlib to be saved in the database
    - Allows users to enter their own stories with selected inputs

## Additional Libraries

- React, react-router-dom
- Node
- Express
