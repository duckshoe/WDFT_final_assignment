# WDFT_final_assignment
# Project Proposal: The I Hate Looking Up Certain Things Every Day So I Want to Put Them All In One Place Project

I’m a big basketball nerd and I have a handful of sites that I navigate through every day to look at the same information. I’d like to scrape/use API calls to gather all of this information into one place so I can just visit one site to get all of it and possibly make it easier to interpret using some data visualization techniques

## Project Goals

- I’d like to work with a new API/scrape some new data
- I’d like to improve my CSS skills
- I’d like to deploy this on my server so I can share it with other people who may find it useful
- I’d like to find a way to include some data visualization

## Tech Stack

### First Party Tools
React for the front end/user interface, Node/Express for the server and Axios/Cheerio for API calls/scraping data. I don't think I'll need a database but if I do I will defer to your wisdom on which I should use.

Front end will be pretty simple: a header with a title, a menu to select which statistics you want to view and selector of some kind to switch from raw data to visualized data. The data raw data will ideally be sortable alphabetically, ascending/decending, etc.

Back end will be making api calls and sorting incoming data before it gets sent to the front end

### Third Party Tools

NBA stats API library- https://github.com/bttmly/nba - this is a user-compiled library with endpoints to some of the information I would need
http://www.espn.com/nba/statistics/rpm - not a tool but I would want to scrape the data for every Toronto player from this site

chart.js was used for the data visualization because it was the easiest to implement. I wasn't doing anything crazy with the visualization so whatever provided me with a simple chart was sufficient


## Features and Deliverables


- a user interface for viewing the statistics and switching between different types of statistics
- an option to view either the raw data in sortable tables or to view the data in chart form


## Data

data: comes in as strings and integers and will be provided by API/scraping. this will be the core of the project, presented in tables and charts

## How to Run the Project

The project is in the final-assignment folder inside the git repo. NPM install from there then use mkdir -p data/db to create the database folder and mongod --dbpath data/db to start the DB to complete the set up. Run server.js from /api and NPM start from /final-assignment to run it.