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

Theses pictures repressents the differents layouts of the webapp:

- HomePage
![CV builder Homepage](/readmeContents/image.jpg "CV builder Homepage")

- User Resume
![CV builder user resume](/front/src/assets/cv_sample.PNG "CV builder resume")

- Edit Resume Section
![CV builder edit resume](/readmeContents/image.jpg "CV builder edit resume")

## Install and launch project

In order to launch the project properly, you should follow the these steps. They should also be able to help you in case of unknown error.

#### Docker
Launch the docker terminal and run the following command to create the database container

````
docker run --name mariadb --rm -e MYSQL_ROOT_PASSWORD=toor -e MYSQL_DATABASE=defaultdb -p 3306:3306 -v "`pwd`/initdb:/docker-entrypoint-initdb.d" mariadb
````
Still Blocked ? [Check the dedicated Readme](/api/README.md "Database and Docker ReadMe")
#### Back (API)

Open the project in IntelliJ IDEA or your favorite IDEA

- Initiate the database according to docker instance IP address
The IP address in src/main/application.properties should be like :  
````
spring.datasource.url=jdbc:mariadb://DOCKER-INSTANCE-IP:3306/defaultdb
````
- Add the database in IntelliJ and run the sql queries in the initdb folder :
    - first : 1_TABLES.sql
    - second : All the default entries
    (this should create the table and add the first profiles to the data base)
- Run the Application.java file, doing this you should be able to see the localhost retuning 'it works !' [API localhost](http://localhost:8080)

Still Blocked ? [Check the dedicated Readme](/api/README.md "Database and Docker ReadMe")
### Front (Angular)

## Features
====

## License

[MIT](https://choosealicense.com/licenses/mit/)
