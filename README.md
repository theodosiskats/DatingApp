<h1 align="center">
  <img alt="Dating App logo" src="https://res.cloudinary.com/theodosisk/image/upload/v1679432605/OnlinePublicAssets/Dating_App_Logo_ql8klz.png" width="224px"/><br/>
  Dating App
</h1>
<p align="center">This is a web application that allows users to sign up, create profiles, upload images, search for potential partners based on specific criteria, and send live private messages using <b>SignalR</b>. The application is built using <b>Angular 15</b> and <b>.NET Core 7</b>, and implements the repository and unit of work pattern to create abstraction levels. It also includes features such as filtering, sorting, and pagination of data, drag and drop photo upload, global error handling, and authentication using JWT authentication tokens. </p> 

<p align="center">
<img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" /></a>&nbsp;<img src="https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white" alt="DotNet" />&nbsp;<a href="https://github.com/theodosiskats/DatingApp/actions" target="_blank"><img src="https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHubActions" /></a>&nbsp;<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="license" />&nbsp;<a href="https://github.com/theodosiskats/DatingApp/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge" alt="license" /></a></p>

## Prerequisites
- Node.js
- Angular CLI
- .NET Core 7 SDK
- PostgreSQL database
- Cloudinary account
- HTTPS certificate

## Packages
<div text-align="center">

| Angular 15 | .NET Core 7 |
| ---------- | ----------- |
| Reactive Forms | Entity Framework |
| Ngx-Bootstrap | PostgreSQL |
| Pagination | Microsoft ASP.NET Identity |
| Toastr | Cloudinary |
| Tabs | AutoMapper |

</div>

## Patterns
- Repository
- Unit of Work


## ⚡️ Quick start

1. Clone the repository.

2. Create a database in PostgreSQL and update the `appsettings.json` file in the `API` project with your database connection string.

3. Create a Cloudinary account and update the `appsettings.json` file in the `API` project with your Cloudinary account details.

4. In the `API` project, run the following commands to create the database schema:

```
dotnet ef migrations add InitialCreate
dotnet ef database update
```

5. In the `Client` project, run the following command to install dependencies:

```
npm install
```


6. In the `Client` project, run the following command to start the application:

```
ng serve
```

7. Open a web browser and navigate to `https://localhost:4200` to access the application.

## 🐳 Docker-way to quick start

You can also run the application using Docker. To do so, follow these steps:

1. Build the Docker image by running the following command in the root directory of the project:
```
docker build -t datingapp .
```
2. Run the Docker container:
```
docker run -d -p 8080:80 datingapp
```

3. Open a web browser and navigate to `https://localhost:8080` to access the application.

> 🔔 Please note: Deployment is currently **available** in this image for fly.io only.

## Features

The application includes the following features:

- User authentication and authorization using ASP.net Identity and JWT authentication tokens.
- User profiles with the ability to upload photos using Cloudinary and drag and drop photo upload.
- Matching algorithm to suggest potential partners based on specific criteria.
- Ability to like and message other users.
- Pagination, filtering, and sorting of data with error handling and global error handling.
- Toast notifications for various actions.
- Tabs to organize different sections of the application.
- Secured routes with canactivate and candeactivate guards.
- HTTP interceptors to show WebAPI errors on the client app.
- HTTPS certificate applied for secure communication.

## Fly.io
You can deploy the application to Fly.io using the following steps:

1. Sign up for a Fly.io account and create a new organization.

2. Install the Fly CLI by following the instructions on the Fly.io documentation.

3. In the root directory of the project, run the following command to create a new Fly.io application:

```
fly apps create
```
4. Set the environment variables required by the application using the following commands:

```
fly secrets set DATABASE_URL=<your-database-url>
fly secrets set CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
fly secrets set CLOUDINARY_API_KEY=<your-cloudinary-api-key>
fly secrets set CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
fly secrets set JWT_SECRET=<your-jwt-secret>
```
5. In the API project, update the appsettings.Production.json file with your Fly.io application URL and database connection string.


6. In the root directory of the project, run the following command to deploy the application:
```
fly deploy
```

7. Once the deployment is complete, run the following command to open the application in a web browser:

```
fly open
```
That's it! Your application is now deployed to Fly.io.

## ⚠️ License

`Dating App` is free and open-source software licensed under the [MIT License](https://github.com/theodosiskats/DatingApp/blob/master/LICENSE).
