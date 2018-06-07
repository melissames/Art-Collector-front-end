# PXL8

### Description
PXL8 is an App using a React frontend and a Rails backend and utilizes the Artsy API, Chart JS, as well as several third party React CSS libraries.  The purpose of PXL8 is to analyze each image of an artwork and graph the top five colors present in each.  You can also search for a particular artist to find out the top colors in their artwork.


### Motivation
My passion is to walk the fine line between science and art and so I wanted to build something data driven that would appeal to art lovers.  When a user clicks on an artwork that appeals to them, the backend analyzes each pixel in the image and sends the frontend the top colors present.  The frontend then uses this data to create a pie graph with each section being colored by the hex code that was provided.


### Framework
The frontend is React 16.3.2.  To run this on your machine run:
`npm install && npm start`
Additionally please go to the [backend](https://github.com/melissames/Art-Collector-back-end) and see the instructions for running the backend of PXL8
It also uses React Chart JS ^2.7.2
For all dependencies, please see package.json


### Features
PXL8 walks on the edge of creativity and technology. Using RMagick in the Rails backend to analyze the most prevalent colors, the frontend uses this data to create an individualized pie graph.  The pie graph uses the color data obtained from the backend to color each section chart.  There is also a search feature that goes to the backend and finds the query in the database or hits the Artsy API to return and save 10 new artworks.


### API Reference
The Artsy API was used to obtain the images of the artworks.  Please refer to the [backend](https://github.com/melissames/Art-Collector-back-end) for more information.


### How to Use PXL8
Enter an artist into the search bar to return a carousel of 10 artworks related to your query.  Click on each artwork to return a colorized pie graph showing the top five colors in each piece.


### Credits
-[Artsy API](https://developers.artsy.net/docs/search)
-[Chart JS](https://www.npmjs.com/package/react-chartjs)
