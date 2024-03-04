# recipe-finder Documentation

Welcome to RecipeFinder, a web platform that enables users to discover, post, and share culinary recipes. This documentation will guide you through the setup process and provide an overview of the key features.

## Table of Contents

1. [Website URL](#website-url)
   - [Features](#Features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Available Scripts](#available-scripts)
4. [Dependencies](#dependencies)
5. [License](#license)

## 1. Website URL

RecipeFinder hosted on Linux Server

### 1.1 Features
- User Profiles: Simple registration and login system allowing users to maintain their collection of recipes.
- Search & Discover: : Users can search for recipes based on ingredients, cuisine type, dietary
restrictions, or keywords.
- Recipe Submission: Users can post their recipes, complete with ingredients, preparation steps,
images, and tags.
- User Recipe Deletion: Users can successfully delete a recipe they've created, the UI reflects the changes by removing the deleted recipe from the list.
- User Authentication: Ensure that users are authenticated before they can manage their recipes. Using Firebase Authentication.
- Firebase Security Rules added: Ensure's that only the authenticated user who created a recipe can delete it. This adds an additional layer of security to prevent unauthorized deletions.

## 2. Getting Started

Follow these steps to set up and run the project on your local machine.

### 2.1 Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from [https://nodejs.org/](https://nodejs.org/).

### 2.2 Installation

After installing Node.js and npm, navigate to the project directory in your terminal and run:

npm install

### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 2.3 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## 3. Dependencies 

After installing Node.js and npm, navigate to the project directory in your terminal and run:
- [framer-motion](https://www.npmjs.com/package/framer-motion)
- [react-icons](https://www.npmjs.com/package/react-icons)
- [react-router-dom](https://www.npmjs.com/package/react-router-dom)
- [styled-components](https://www.npmjs.com/package/styled-components)
- [@splidejs/react-splide](https://www.npmjs.com/package/@splidejs/react-splide)

## 4. Liscensing

Icons by <a href="http://icons8.com/icons"> Icons8 Icons</a>

Nitr - <a href="https://stock.adobe.com/contributor/201119346/nitr?load_type=author&prev_url=detail">
          stock.adobe.com</a>
          
Bit24 - <a href="https://stock.adobe.com/contributor/201208577/bit24?load_type=author&prev_url=detail">stock.adobe.com</a>

Spoonacular API: Credits to Spoonacular API for providing culinary information.

Firebase API: Credits to Firebase for providing cloud services. 

Firestore Database: Firestore Database is used for storing and managing data in this project. 

Firebase Authentication: This project utilizes Firebase Authentication services for user authentication.
