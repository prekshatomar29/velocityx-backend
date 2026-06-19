# 🚀 VelocityX Backend

Backend API for VelocityX E-Commerce Platform built with Node.js, Express.js, MongoDB and JWT Authentication.

## ✨ Features

* User Registration
* User Login
* JWT Authentication
* Product APIs
* Cart Management
* Order Management
* Profile API
* Protected Routes
* MongoDB Database Integration

## 🛠️ Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs

## 📂 Project Structure

config/
controllers/
middleware/
models/
routes/

server.js

## 🚀 Installation

```bash
npm install
npm run dev
```

## 🔐 Environment Variables

Create a .env file:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

## API Routes

### Auth

* POST /api/users/register
* POST /api/users/login

### Products

* GET /api/products
* GET /api/products/:slug

### Cart

* GET /api/cart
* POST /api/cart/add
* PUT /api/cart/:id
* DELETE /api/cart/:id

### Orders

* POST /api/orders
* GET /api/orders/myorders

### Profile

* GET /api/profile

## 👨‍💻 Developer

Preksha Tomar

B.Tech CSE | Sharda University
