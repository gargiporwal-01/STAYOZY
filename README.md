# 🏡 STAYOZY

**STAYOZY** is a full-stack vacation rental platform inspired by Airbnb. It allows users to browse, search, create, and manage property listings with photos, interactive maps, reviews, and secure authentication — all built with the MERN + EJS stack.  

🚀 **Live Demo**  
Explore the deployed application here: [**STAYOZY Live**](https://stayozy.onrender.com/signup)

---

## 💡 Key Features

✅ **User Authentication:** Secure sign-up, login, and logout functionality powered by Passport.js and session-based authentication.  
🏠 **Property Listings (CRUD):** Create, read, update, and delete listings with owner-only edit/delete protection.  
🖼 **Image Uploads:** Upload and manage listing images via Cloudinary.  
🗺 **Interactive Maps:** Display geocoded locations and markers with Mapbox.  
🔎 **Advanced Search:** Filter listings by title, description, country, or location with flexible matching.  
⭐ **Reviews & Ratings:** Add, view, and delete reviews with 1–5 star ratings.  
🛡️ **Validation & Security:** Joi validation, secure sessions, and centralized error handling for robust protection.  
📱 **Responsive UI:** Clean and modern EJS + Bootstrap interface optimized for all devices.  

---

## 💻 Tech Stack

| **Category**        | **Technology**                        | **Description** |
|---------------------|--------------------------------------|----------------|
| **Backend**         | Node.js, Express.js                  | Server and API |
| **Database**        | MongoDB + Mongoose                   | Data modeling and persistence |
| **Auth**            | Passport.js (passport-local)         | Secure authentication and sessions |
| **Views/UI**        | EJS, EJS-Mate, Bootstrap, Vanilla JS | Server-rendered views with reusable layouts |
| **File Storage**    | Cloudinary + Multer                  | Image uploads and storage |
| **Maps**            | Mapbox SDK                           | Geocoding and interactive maps |
| **Validation**      | Joi                                  | Server-side validation |
| **Sessions**        | express-session + connect-mongo      | Session store in MongoDB |
| **Deployment**      | Render                               | Cloud deployment |

---

## ⚙️ Setup Instructions

### **Prerequisites**
- Node.js v18+ installed (uses engines: `>= 24.4.1`)
- MongoDB (Atlas or local)
- Cloudinary account for image storage
- Mapbox account for maps

---

### **Installation**

```bash
# Clone the repository
git clone <your-repo-url>
cd STAYOZY

# Install dependencies
npm install
