Markdown
# ✈️ Firebird Airlines - Modern Flight Booking Platform

Firebird Airlines is a production-quality, responsive flight booking web application built with React and Vite. It simulates a complete, end-to-end airline reservation experience—featuring Goibibo-style global city search, dynamic flight status tracking, multi-step booking workflows, and client-side data persistence.

---

## 🚀 Live Demo
- **Live URL:** https://firebird-airlines-git-main-tanmay-projects1.vercel.app

---

## ✨ Key Features

- **🌍 Global City & Airport Search:** Goibibo/MakeMyTrip-style live autocomplete dropdown supporting cities and airports worldwide.
- **🕒 Real-time Flight Status Engine:** Dynamic status badges for upcoming and completed flights.
- **📝 Multi-Step Booking Workflow:**
  1. Passenger Information & Preferences
  2. Interactive Seat Selection Map (Available, Selected, and Booked states)
  3. Baggage & Cabin Class Selection
  4. Comprehensive Booking Summary
- **💳 Simulated Demo Payment Gateway:** Secure-looking UI supporting multiple payment methods (UPI, Cards, Net Banking).
- **🎫 Instant E-Ticket Generation:** Generates a unique **PNR**, **Booking ID**, and clean e-ticket layout.
- **📂 My Bookings History:** Fully persistent booking logs powered by `localStorage` so user history remains intact across page reloads.

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Vite, React Router DOM
- **Styling:** Custom CSS, Modern CSS Variables, Flexbox/Grid (Responsive Layout)
- **Data Persistence:** Browser `localStorage`
- **Deployment:** Vercel

---

## ⚙️ Getting Started Locally

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/tanmayshresht/Firebird-Airlines.git](https://github.com/tanmayshresht/Firebird-Airlines.git)
Navigate to the project directory:

Bash
cd Firebird-Airlines
Install dependencies:

Bash
cd client
npm install
Run the development server:

Bash
npm run dev
Open your browser:
Go to http://localhost:5173 to view the application.

📱 Screenshots / User Flow
Search & Discovery: Enter origin and destination cities using live autocomplete suggestions.

Flight Board: View active flight schedules, gates, and status indicators.

Seat Matrix: Visually pick seats from an interactive layout.

Checkout & Success: Complete the demo payment to instantly generate your PNR ticket.

👨‍💻 Author
Tanmay Shresth

GitHub: @tanmayshresht