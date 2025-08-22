# 📚 Dev Academy REST API

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-Auth%20Tokens-ffffff?logo=jsonwebtokens&logoColor=white)
![Swagger](https://img.shields.io/badge/Swagger-API%20Docs-85EA2D?logo=swagger&logoColor=white)

**Dev Academy REST API** is a **Node.js RESTful API** designed to manage educational resources in an academy.  
It provides full CRUD functionality for:  
- 👩‍🎓 Users  
- 🏫 Bootcamps  
- 📘 Courses  
- ⭐ Reviews

  
## 🚀 Endpoints

- **Swagger UI**: `http://localhost:3000/api-docs`  
- **Postman Collection**: Use the provided JSON file in the project.

### Screenshots  
<img width="800" alt="auth" src="https://github.com/user-attachments/assets/1be0b082-b258-48a1-9e92-2d087af32149">  
<img width="800" alt="bootcamps" src="https://github.com/user-attachments/assets/09b8bf7b-42a0-4083-83ea-26ea0151859c">  
<img width="800" alt="courses" src="https://github.com/user-attachments/assets/fdebf626-ce85-45d2-9653-335aa63f5e9d">  
<img width="800" alt="reviews" src="https://github.com/user-attachments/assets/063db466-ac7f-4bd0-8e49-d8eec0dcad11">  
<img width="800" alt="users" src="https://github.com/user-attachments/assets/7f167e17-0b2b-4322-87f3-13b38cf5a446">  


## 🔑 Key Features

✔ **JWT Authentication** – Secure login & session handling  
✔ **Password Hashing** with `bcryptjs`  
✔ **RBAC (Role-Based Access Control)**  
✔ **Password Recovery** (Forgot & Reset Password)  
✔ **Email Notifications** with `nodemailer`  
✔ **Server-Side Validation** using `express-validator`  
✔ **Advanced MongoDB Queries** & Aggregations  
✔ **Pagination** for large datasets  
✔ **Image Uploads** via `express-fileupload`  
✔ **SEO-Friendly URLs** using `slugify`  
✔ **Rate Limiting** with `express-rate-limit`  
✔ **Mongoose Hooks** (pre & post save/update)  


## ⚙️ Installation
  1. Clone the repository
  
  ```bash
    git clone https://github.com/carpodok/dev-academy-rest-api.git
  ```
  
  2. Navigate to the project directory:
  
   ```bash
    cd dev-academy-rest-api
   ```

  3. Install required dependencies
  
  ```bash
   npm install
  ```
<br>

## Configuration

1. Creat a `.env` file on the root of the project and add the following environment variables. To set up email host informations visit [Mailtrap](https://mailtrap.io/home) and create your account.

```
NODE_ENV=development
PORT=3000
MONGO_URI=<your-mongo-uri>

FILE_UPLOAD_PATH= ./public/uploads
MAX_FILE_UPLOAD=1000000

JWT_SECRET=<your-jwt-secret>
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30

// Set up with your own configurations
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=
SMTP_EMAIL=
SMTP_PASSWORD= 
FROM_EMAIL=noreply@devacademy.io
FROM_NAME=Dev Academy
```

<br>

2. To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d

# Import all data
node seeder -i
```

## Running the Application

1. To start the server, run the following command on the root of the project path;

```
npm start
```

For the development purpose;
```
npm run dev
```

2. The application will be running on  `http://localhost:3000`

<br>

## License
This project is licensed under the MIT License.
