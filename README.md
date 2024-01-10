## How to Run the Project

### Prerequisites

Before running the project, make sure you have the following installed:

- [Java Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-downloads.html)
- [IntelliJ IDEA Ultimate/Commonunity](https://www.jetbrains.com/idea/download/)
- [Node.js](https://nodejs.org/) (including npm)
- Angular CLI (install using `npm install -g @angular/cli`)


### Project Setup

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/your-username/two-factor-authentication.git
    cd two-factor-authentication
    ```

### Backend Setup


1. **Open the Project in IntelliJ IDEA:**

    - Open IntelliJ IDEA Ultimate.
    - Choose `File` > `Open` and select the `backend` folder.

2. **Configure the Spring Framework:**

    - Ensure that you have the Spring Framework set up in your project.
    - If not, create a new Spring project in IntelliJ IDEA by following these steps:
        - Choose `File` > `New` > `Project`.
        - Select `Spring Initializr`.
        - Configure your project settings and add the necessary dependencies.
        - Click `Finish` to create the project.

3. **Needed Dependencies:**

    - Open the `pom.xml` file and you can see all needed dependencies for the project.
   
4. **Run the Application:**

    - Locate the main application file (e.g., `TwoFactorAuthenticationApplication.java`).
    - Right-click on the file and choose `Run` to start the Spring Boot application.

5. **Access the Application:**

    - Once the application is running, you can access it at [http://localhost:8080](http://localhost:8080) in your web browser.

# Angular Frontend for Two Factor Authentication

This project is the frontend implementation for the Two Factor Authentication system. It is built using Angular.

1. **Navigate to the Frontend Directory:**

    ```bash
    cd two-factor-authentication/frontend
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    ```

3. **Run the Angular Development Server:**

    ```bash
    ng serve
    ```

    The application will be available at [http://localhost:4200](http://localhost:4200).

### Project Structure

- `/src`: Contains the source code of the Angular application.
- `/src/app`: Main application code.