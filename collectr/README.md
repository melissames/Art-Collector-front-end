#PXL8

###Description
PXL8 is an App using a React frontend and a Rails backend and utilizes the Artsy API, Chart JS, as well as several third party React CSS libraries.  The purpose of PXL8 is to analyze each image of an artwork and graph the top five colors present in each.  You can also search for a particular artist to find out the top colors in their artwork.

###Motivation
My passion is to walk the fine line between science and art and so I wanted to build something data driven that would appeal to art lovers.  When a user clicks on an artwork that appeals to them, the backend analyzes each pixel in the image and sends the frontend the top colors present.  The frontend then uses this data to create a pie graph with each section being colored by the hex code that was provided.

###Framework
The frontend is React 16.3.2.  To run this on your machine run:
`npm install && npm start`
Additionally please go to the [backend](https://github.com/melissames/Art-Collector-back-end) and see the instructions for running the backend of PXL8
It also uses React Chart JS ^2.7.2
For all dependencies, please see package.json

###Features
The features PXL8
