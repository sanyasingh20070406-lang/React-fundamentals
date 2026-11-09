# Week 3 Assignment: React Hooks & Client-Side Routing

A multi-page Single Page Application (SPA) dashboard built using **React (Vite)** and **React Router DOM**. This project demonstrates intermediate clean architecture principles by separating layout concerns, application hooks, and view management.

## 🚀 Key Deliverables Met
- **Client-Side Routing:** Implemented instantaneous, reload-free transitions between three distinct pages using `<BrowserRouter>`, `<Routes>`, and `<Link>`.
- **3 Dedicated Route Components:**
  - `Home`: A landing dashboard welcome screen view.
  - `To-Do App`: Core state engine tracking tasks with individual completion switches and filters.
  - `About`: Contextual metadata documentation overview detailing technical concepts.
- **Hook State Mechanics:** Utilized `useState` for real-time form inputs and list renders, combined with `useEffect` lifecycle synchronization to store task items securely inside `localStorage`.

## 📁 Component Tree Structure
```text
src/
├── App.jsx          # Router configurations, navigation bar layout, and path routing
├── Home.jsx         # Landing page view element
├── About.jsx        # Informational project details view element
├── TodoPage.jsx     # Parent state container engine for the To-Do feature
├── TodoForm.jsx     # Controlled text input capture form
├── TodoList.jsx     # Maps array collections down to child nodes
└── TodoItem.jsx     # Individual item row executing delete/toggle operations
```

## 🛠️ Installation & Local Setup Instructions
To run this application repository locally, follow these commands:

1. Clone this repository to your machine.
2. Open your terminal inside the project root and install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite local runtime server:
   ```bash
   npm run dev
   ```
4. Access the web view inside your browser interface at the URL printed in your terminal (e.g., `http://localhost:5174/`).
