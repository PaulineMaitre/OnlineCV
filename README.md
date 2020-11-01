# CV Builder 

## Menu
- [Group Members](#group-members)
- [Project Presentation](#project-presentation)
- [Website Screenshots](#website-screenshots)
- [Install and launch project](#install-and-launch-project)
    - [Docker](#docker)
    - [Back (API)](#back-api)
    - [Front (Angular)](#front-angular)
- [Features](#features)
    - [See a Resume](#see-a-resume)
    - [Add A Resume](#add-a-resume)
    - [Edit A Resume](#edit-a-resume)
- [License](#license)

## Group members

- DELLA SETA Raphaël
- MAITRE Pauline
- SOLDE Fabien

## Project Presentation

The project goal is to create a CV builder website able to visualize and edit your CV/resume dynamically.
The project is built as a SPA using Angular and Spring Boot with MariaDB as a database.

The user can perform different actions on the website. They are defined below but, the main ones are :
- Select a resume from the list saved in the database
- Visualize the resume and interact with the page (contact via email download CV in PDF)
- Create a new user
- Edit any user information and add new information to it

## Website Screenshots

These pictures represent the different layouts of the web app:

- HomePage
![CV builder Homepage](/readmeContents/homepage.jpg "CV builder Homepage")

- User Resume
![CV builder user resume](/readmeContents/cv_sample.PNG "CV builder resume")

- Edit Resume Section
![CV builder edit resume](/readmeContents/editresume.jpg "CV builder edit resume")

## Install and launch project

To launch the project properly, you should follow these steps. They should also be able to help you in case of an unknown error.

#### Docker
Launch the docker terminal and run the following command to create the database container

````
docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 -v "`pwd`/initdb:/docker-entrypoint-initdb.d" mariadb
````
Still Blocked ? [Check the dedicated Readme](/api/README.md "Database and Docker ReadMe")
#### Back (API)

Open the project in IntelliJ IDEA or your favorite IDEA.

- Initiate the database according to docker instance IP address
The IP address in src/main/application.properties should be like :  
````
spring.datasource.url=jdbc:mariadb://DOCKER-INSTANCE-IP:3306/defaultdb
````
- Add the database in IntelliJ and run the SQL queries in the initdb folder :
    - first: 1_TABLES.sql
    - second: 2_DEFAULT_Entries.sql
    (this should create the table and add the first profiles to the database)
- Run the Application.java file. Doing this, you should be able to see the localhost retuning 'it works !' [API localhost](http://localhost:8080)

Still Blocked ? [Check the dedicated Readme](/api/README.md "Database and Docker ReadMe")
### Front (Angular)

Open the project in IntelliJ IDEA or your favorite IDEA.
 
- Make sure to have nodeJS and npm installed on your device
- Run the following commands to install the project
````
npm install -g npm@latest
npm install
````
- Launch the project :
 Either run the command in the terminal or use the IntelliJ play button.
 ````
 ng serve
 ````

- You should be able to see the localhost retuning the CV Builder Website [API localhost](http://localhost:4200)

Still Blocked ? [Check the dedicated Readme](/front/README.md "Database and Docker ReadMe")
## Features

#### See A Resume

At the home page click on a name to visualise its resume. You will be able to :

- see the resume content
- export resume PDF
- export resume json
- contact by email the targeted profile (Please referer to the credentials sent by mail or ask us again)

#### Add A Resume

On the home page click on the``Create your own resume`` picture.
You will be able to give your information and create your personal resume.
Once saved you will be able to edit the resume to add more elements.

#### Edit A Resume

In order to edit a user, go on the home page and click on the yellow edit button next to your user.
You will be redirected to the editing page where you will be able to add remove or modify all the contents.
## License

[MIT](/license.md)
