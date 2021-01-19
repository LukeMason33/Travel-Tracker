# Travel Tracker
With this project, we were given a basic repo that included a built in webpack to compile our files. Everything else was created. It involved fetch requests to a local server in order to get the data we needed, or to post new data and represent it in a UI/UX friendly manner.

## Usage
Opening the Travel Tracker website will prompt the user to a login page. Here, the user needs to type "travelerXX" (the XX being any number 1-50). Then in the password input, the user needs to type "travel2020". Once done correctly, the user will be brought to the main dashboard where they are welcomed at the top of the screen, and displayed to 3 main sections: an upcoming flights section, a pending flights section, and a past flights section. Inside of each of these will be travel cards that fall under the respective section. These cards display the destination of the trip, an image of the destination, the date the trip started, the duration of the trip in days, and also the cost of the trip. If a user doesn't have any trips that match the criteria for any of the three sections, there will be a message letting them know that there is no information to display.

Login to Dashboard View:

![screenshot of login](./src/images/login.png)

![screenshot of mainpage](./src/images/dashboard.png)

The user can click on the book now located in the header of the page, that will bring you a from where when filled out, you can calculate the cost of your made trip.

Book trip form:

![screenshot of form](./src/images/request.png)

After 'Calculate Cost' button is clicked:

![screenshot of cost](./src/images/calculate-cost.png)

Once the user feels confident that the form is filled out and the trip is what they want, they then can click the submit button which will then take the user back to the dashboard and display their new trip in the pending section.

Dashboard After Submit:  

![screenshot of dashboard](./src/images/after-submit.png)

## How to Install
1. `fork` this repository
2. `git clone` it down to your command line
3. Navigate into the repository on your machine
4. Run `npm install`
5. Run `npm start` to launch local server

To access data api:
1. `git clone` [this]() (add link) repo to your command line
2. Navigate into the repository on your machine
3. Run `npm install`
4. Run `npm start` to launch API server (*both servers need to be running to access the site)

OR

Visit live site [here]() (we will build this live right?)

## Technologies Used
1. JavaScript (vanilla)
2. HTML
3. Sass/SCSS
3. WebPack
4. Chai & Mocha

## Planning
I utilized issues and a project work board to help me organize my work through this process.

### Testing development
I tested each property and each method for each class. I covered mostly happy paths in the testing, with a few sad paths in there as well.

### Challenges
* The biggest challenge for myself in this project was displaying error messages based on failed fetch requests. I found this to be difficult because we were never introduced on how to treat different error messages, we only knew that other ones existed.
* Another big challenge for me was to find the time to put all my attention in the styling. The javascript side of things were very heavy on this project, so I had to go with a very minimal looking website, but it does function greatly.

### Wins
* The biggest win of this project was successfully achieving POST requests and getting the dom to update with new data added to our server. It's really cool to see how data can be modified on the clients computer, then the data is sent to the server where it is than modified, and then sent back to have the clients machine display that newly changed data.

## Future Iterations
* I want to make a traveler agent side to this site where the would have full control over travelers pending trips. On this side, you can approve trips, decline trips, and add new destinations for the travelers to go to.
* I would like to clean up the site and include more images and styling.
* I would like to have the trip cards be clickable, which would then show more information about the trip, give you a cost breakdown, and other information that the user might find helpful.

## Project Members
This project was designed and implemented by [Luke Mason](https://github.com/LukeMason33)
