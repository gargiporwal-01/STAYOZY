🏡 StayOzy – A Full-Stack Travel Stay Platform ✨🌍
StayOzy is a full-stack web application inspired by Airbnb where users can explore unique stays, list their own properties, manage bookings, and share reviews — all in one place.
🚀 Features
🔑 Authentication & Authorization – Secure login, signup, and session handling using Passport.js.
🏠 Listings Management (CRUD) – Add, edit, and delete properties with images and details.
📅 Booking System – Users can book stays with proper date validation.
⭐ Reviews & Ratings – Guests can leave reviews on listings.
💬 Flash Messages – Real-time feedback for user actions (success/error).
📱 Responsive UI – Works seamlessly on mobile, tablet, and desktop.
⚡ Optimized Middleware – Route protection, error handling, and validations.
🛠 Tech Stack
Frontend: EJS, HTML, CSS, Bootstrap, JavaScript
Backend: Node.js, Express.js
Database: MongoDB Atlas (Mongoose ODM)
Authentication: Passport.js, Express-Session, Connect-Flash
Architecture: MVC Pattern
Deployment: [Heroku/Render/Railway] (add your actual deployment link)
📂 Project Structure
StayOzy/
│── models/         # Mongoose schemas (User, Listing, Review)
│── routes/         # Express route handlers
│── controllers/    # Business logic for listings, reviews, auth
│── views/          # EJS templates
│── public/         # CSS, JS, images
│── app.js          # Entry point
│── package.json    # Dependencies
