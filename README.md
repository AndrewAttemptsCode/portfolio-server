# Portfolio - Server Side

Portfolio of Andrew Travis - Full stack web developer specializing in React and Node.js based web applications.

## About

This is the server side of a full-stack web application, responsible for handling backend logic and email functionality via Nodemailer. It supports the portfolio’s contact form, enabling secure message delivery, while contributing to my growth in backend development, API handling, and overall full-stack proficiency.

## Features

* Server-side form validation
* RESTful API endpoints built with Express
* CORS configuration and handling
* Email delivery for contact form submissions using Nodemailer

## Tech Stack

* **Back End:** Node.js, Express, Nodemailer
* **Other Tools:** VSCode, ESLint

*(Front end service for web app lives in a separate repository: [portfolio-client](https://github.com/AndrewAttemptsCode/portfolio-client))*

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/en) (v18 or later)

* [Google App Password](https://support.google.com/accounts/answer/185833?hl=en) for Nodemailer

## Installation
```bash
# Clone the repo
git clone https://github.com/AndrewAttemptsCode/portfolio-server.git

# Navigate into the folder
cd project-name

# Install dependencies
npm install
```

## Environment Variables
Create a .env file within the root folder and add:
```
CLIENT_URL=YOUR_CLIENT_URL
USER_EMAIL=YOUR_GOOGLE_EMAIL
GOOGLE_APP_PASSWORD=YOUR_GOOGLE_APP_PASSPHRASE
```
Replace `YOUR_CLIENT_URL` with the actual URL of your front end with the contact form set up on it.

Replace `YOUR_GOOGLE_EMAIL` with the Google account you created the app password with.

Replace `YOUR_GOOGLE_APP_PASSPHRASE` with the pass phrase that was generated on Google App Password set up.

## Running the app
```bash
# Start the development server
npm run start
```
