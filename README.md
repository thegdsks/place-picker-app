# 🗺️ PlacePicker App

A simple yet powerful **Place Picker Application** built using **React**.  
This app allows you to maintain your personal collection of places you'd like to visit or have already visited.

---

## 🚀 Features

- 📍 Fetches available places from a backend API
- 📥 Adds selected places to your personal collection
- ❌ Removes places from your list with confirmation modal
- 📡 Uses browser Geolocation API to sort places by distance
- ⚠️ Graceful error handling and loading states

---

## 🛠️ Tech Stack

- React (Functional Components + Hooks)
- Fetch API
- Vite (Development server & bundler)

---

## 📂 Project Structure

```
placepicker-app
├── public
│   └── assets
│       └── logo.png
├── src
│   ├── components
│   │   ├── AvailablePlaces.jsx
│   │   ├── DeleteConfirmation.jsx
│   │   ├── Error.jsx
│   │   ├── Modal.jsx
│   │   ├── Places.jsx
│   ├── App.jsx
│   ├── http.js
│   └── loc.js
├── package.json
└── README.md
```

---

## 📝 Setup & Run

### 1. Clone Repository

```bash
git clone https://github.com/gdsks/placepicker-app.git
cd placepicker-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

App will be available at **http://localhost:5173**

---

## 🌐 Backend API

Make sure you have a backend API running at:
```
http://localhost:3000/places
http://localhost:3000/user-places
```

Refer to the `fetchAvailablePlaces` and `fetchuserPlaces` functions in `http.js` for backend configuration.

---

## 📜 License

This project is maintained by **gdsks** under **Glinr Projects**.  
Released under the **MIT License**.

---

## 🙌 Contributions

Feel free to fork, improve, and submit PRs.  
If you like this project, don't forget to ⭐️ star the repo.

**Happy Coding! 🧑🏻‍💻✨**
