# Smart LMS Backend

## Features

- JWT Authentication
- Role Based Access Control (RBAC)
- Course Management
- Student Enrollment
- Cloudinary File Upload
- MongoDB Aggregation Analytics

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- Cloudinary

## APIs

### Auth
- POST /register
- POST /login

### Courses
- POST /course
- GET /course/:id

### Enrollment
- POST /enroll/:courseId

### Analytics
- GET /analytics/top-courses
