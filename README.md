HERO.IO

HERO.IO is a modern web application designed to showcase and manage a collection of mobile applications. It serves as a platform where users can explore trending apps, view detailed statistics and ratings, and simulate the installation process. Built with a focus on performance and user experience, it features a responsive design and interactive elements.

🚀 Features
-----------

App Discovery: Browse through a catalog of trending and all available applications.
Search Functionality: Filter apps by title or company name with real-time search.
App Details: View comprehensive details including descriptions, download stats, ratings, and reviews.
Interactive Charts: Visual representation of app ratings using dynamic bar charts.
Installation Simulation: Users can "install" and "uninstall" apps, with data persisted locally using localStorage.
Responsive Design: Fully responsive layout optimized for desktop and mobile devices.
Navigation & Routing: Seamless page transitions using React Router.
Toast Notifications: Real-time feedback for user actions (install, uninstall, errors).
Error Handling: Custom 404 error page for undefined routes.
🛠️ Technologies Used
Frontend Framework: React
Routing: React Router DOM
Styling: Tailwind CSS & DaisyUI
Charts: Recharts
Notifications: React Hot Toast
Icons: FontAwesome
State Management: React Hooks (useState, useEffect)
Data Persistence: Browser LocalStorage
Data Fetching: Fetch API (loading local appData.json)

📂 Project Structure
src/
├── Components/          # Reusable UI components (Navbar, Footer, Cards, etc.)
├── Pages/               # Main page components (Home, Apps, Details, Installation)
├── Apps/                # Specific feature components (AllApps, TrendingApps)
├── App.jsx              # Main App component
└── Root.jsx             # Root layout with Navbar, Footer, and Loading state


🏃‍♂️ Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites :

Node.js installed
npm or yarn package manager
Installation
Clone the repo
git clone https://github.com/Dark-asteric/hero-io.git
Install dependencies
npm install
Run the development server
npm run dev
Open in browser Navigate to http://localhost:5173 (or the port specified in your terminal).
📸 Screenshots
(Add screenshots of the Home, Apps, and Installation pages here)

🤝 Contributing
Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request

📧 Contact :
Developer: Dark-asteric
GitHub: https://github.com/Dark-asteric

Copyright © 2026 HERO.IO. All rights reserved.