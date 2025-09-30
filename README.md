# MOS Portfolio - Dockerized

This repository contains my personal portfolio application, containerized using Docker and served with **NGINX** for production.

---

## 🚀 Steps to Reproduce

### 1. Clone the Repository
```bash
git clone https://github.com/Mosrichard/MOS-PORTFOLIO.git
cd MOS-PORTFOLIO


2. Create Dockerfile

A multi-stage Dockerfile is used to optimize the image size.

Stage 1: Build React app with Node.js

Stage 2: Serve production build using NGINX (distroless & lightweight)

Dockerfile:

FROM node:18 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


3. Build Docker Image

docker build -t portfolio:latest .


4. Tag & Push to Docker Hub

Replace mosrichard1234 with your Docker Hub username. If you want my image you can pull using docker pull mosrichard1234/portfolio:latest

docker tag portfolio:latest mosrichard1234/portfolio:latest
docker push mosrichard1234/portfolio:latest

5. Pull Image from Docker Hub

docker pull mosrichard1234/portfolio:latest


6. Run Container

Run the container and map port 8080 on localhost to port 80 inside the container.

docker run -d --name portfolio -p 8080:80 mosrichard1234/portfolio:latest


7. Access Application

Open in browser:

http://localhost:8080


📦 Image Details

Base image (build stage): node:18

Base image (production stage): nginx:alpine

Optimized for size using multi-stage builds.

✅ Summary

React app is built in a Node.js environment.

Final production image is minimal (NGINX-based).

Easy deployment via Docker Hub.

