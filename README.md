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

I was looking at Vega(https://vega.github.io/vega/) or chart.js(http://www.chartjs.org/) for data visualization but I haven’t researched them extensively or tried any of them so that’s subject to change.

Front end will be pretty simple: a header with a title, a menu to select which statistics you want to view and selector of some kind to switch from raw data to visualized data. The data raw data will ideally be sortable alphabetically, ascending/decending, etc.

Back end will be making api calls and sorting incoming data before it gets sent to the front end

### Third Party Tools

NBA stats API library- https://github.com/bttmly/nba - this is a user-compiled library with endpoints to some of the information I would need
http://www.espn.com/nba/statistics/rpm - not a tool but I would want to scrape the data for every Toronto player from this site

I am looking at these data visualization libraries, I’m just not sure which one I would go with yet.
Vega - https://vega.github.io/vega/
chart.js - http://www.chartjs.org/
c3.js - http://c3js.org/ 

## Features and Deliverables


- a user interface for viewing the statistics and switching between different types of statistics
- an option to view either the raw data or whatever data visualization techniques are used
- I’d like to have a blog associated with it at some point, possibly at the submission date but that’s secondary to the data component
- eventually I plan on reaching out to some of the creators of some different statistical models to see if they would like their work included

## Data

data: comes in as strings and integers and will be provided by API/scraping. this will be the core of the project, presented in tables and charts

There isn’t really a lot to say about the data, what gets delivered is pretty basic, getting it into one place and presenting it is the fun/challenging part