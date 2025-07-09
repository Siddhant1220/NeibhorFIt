# 🏡 NeighborFit — Neighborhood Livability & Lifestyle Matching Platform

A full-stack web application that helps users discover neighborhoods that best match their lifestyle preferences — factoring in livability metrics like safety, amenities, commute, affordability, and more.

Built with a modern **MERN (MongoDB, Express, React, Node.js)** stack, NeighborFit fetches area data, computes livability scores, and visualizes them through an intuitive, interactive interface.

---

## 📸 Preview

![App Preview](./preview.gif) <!-- optional if you have a demo gif or screenshot -->

---

## 🌟 Features

- 🔍 Compare neighborhoods based on real-time livability metrics
- 📊 View breakdown of factors like Amenities, Crime, Cost, Commute, Employment, Schools, etc.
- 🗺️ Interactive area maps with location markers
- 📝 User signup/login and personalized profiles
- 📈 Livability scoring algorithm
- 📚 Open data sourced and processed via APIs and JSON datasets

---

## ⚙️ Tech Stack

- **Frontend:** React, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (with Mongoose)
- **Styling:** Inline CSS-in-JS (for now), optionally Tailwind CSS
- **APIs/Data:** Open civic APIs, JSON-based area ratings

---

## 🚀 Getting Started

### 📦 Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally

---

### 🔧 Installation

```bash
git clone https://github.com/yourusername/neighborfit.git
cd neighborfit
# Install server dependencies
cd Server
npm install

# Install client dependencies
cd /Client/Client
npm install

▶️ Running the App
Start MongoDB (if not already running)
bash
mongod

Start Backend Server
bash
cd Server
npm run dev

Start Frontend React App
bash
cd Client
cd Client
npm start

📄 Pages & Components Overview
📌 HomePage
The landing page introducing NeighborFit, highlighting key features like neighborhood matching based on amenities, safety, commute, and other lifestyle factors. It includes sections with imagery and descriptive text to guide new users.

📌 LoginPage
Allows existing users to securely log in with their email and password. On successful login, users are redirected to their personalized profile page.

📌 SignupPage
New users can register by entering their name, email, and password. Upon successful signup, the user is redirected to their profile page.

📌 UserPage
Displays the logged-in user's personal profile information including their name, email, and the date they joined the platform.

📌 Navbar
The main navigation bar, visible across all pages. Dynamically adjusts links based on whether a user is logged in or not. Provides access to Home, Map, Areas, Login, and Signup pages.

📌 Footer
The footer component displayed on every page, containing quick navigation links like Home, About, Contact, and Blog along with developer credits.

📌 LivabilityMetrics
Displays a grid of Delhi neighborhoods with their respective livability scores. Clicking on a neighborhood redirects users to a detailed metrics page for that area.

📌 LivabilityBreakdown
Shows a detailed livability breakdown of an area, presenting scores for different factors like amenities, crime, commute, cost of living, schools, and healthcare in a clean, card-based layout.

📌 MapSection
(If implemented) Displays a visual map of Delhi highlighting key neighborhoods. Intended to integrate livability scores and interactive location markers.

📌 AreaRating.js
Stores predefined livability scores and metrics for various Delhi neighborhoods, acting as a data source for the frontend pages.

📌 User API (Node/Express)
Backend APIs for:

Registering a new user

Logging in

Fetching user data by ID (used for profile page)

📊 Future Possible Pages
📍 Compare Page (planned): To compare metrics of two or more neighborhoods side by side.

📌 Blog, Contact, About Pages (placeholders in footer): Informational pages for platform content and outreach.
Fetching user data by ID (used for profile page)

📊 Future Possible Pages
📍 Compare Page (planned): To compare metrics of two or more neighborhoods side by side.

📌 Blog, Contact, About Pages (placeholders in footer): Informational pages for platform content and outreach.
