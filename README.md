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
cd ../Client
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
npm start
