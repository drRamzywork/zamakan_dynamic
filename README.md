## Next.js Project Deployment and Style Customization Guide

This README file outlines the steps to deploy a Next.js project on a server and customize its styling, specifically for handling bi-directional (LTR and RTL) text styles and language management. The project is provided as a zipped file.

### Project Structure

Each component in this project uses an index.module.scss file for its styling, with CSS rules organized into sections for both LTR (Left-to-Right) and RTL (Right-to-Left) layouts. Comments such as RTL styles or LTR styles are used to distinguish between the styles.

### Deployment

#### Prerequisites

Before deploying, ensure you have Node.js installed on your server. This project has been tested with Node.js versions 12.x and above.

#### Steps to Deploy

1. Unzip the Project:
   Unzip the project file into your desired directory:

```bash
unzip path/to/your/project.zip -d /path/to/unzip/project
cd /path/to/unzip/project
```

2. Install Dependencies:
   Install the necessary npm packages:

Second, run the development server:

```bash
npm install
```

3. Set Up Environment Variables:
   Configure your .env.local file with the necessary environment variables, which the scripts will populate.

4. Build the Application:
   Run the build command to create an optimized production build:

```bash
npm run build
```

5. Start the Production Server:
   Use the provided app.js to start your Next.js application in a production environment:

```bash
node app.js
```

This script sets up an HTTP server that handles requests with the Next.js server.

6. Running in Development Mode:
   To run the project in development mode, use:

```bash
npm run dev
```

This command starts the Next.js development server with hot reloading enabled, useful for development and testing changes in real-time.

### Server Configuration

- The server listens on the port specified by process.env.PORT or defaults to port 3000.

- The environment should be set to production unless you are in a development phase.

### Style Customization

To modify or add styles:

- Locate the index.module.scss file within the respective component directory.
- Add or modify the styles under the appropriate comments for LTR or RTL layouts as needed.

### Scripts Description

#### Language and Translation Management Scripts

This project includes scripts that automate the fetching and setup of language-specific configurations and translations at build time:

1. fetchAndMapLanguages:

- Purpose: Fetches language settings from a remote API and generates a .env.local file mapping language codes to language IDs.

- When it runs: It should be executed before building the application, typically in a pre-build step in your package.json.

2. fetchLanguages:

- Purpose: Fetches all languages and their respective translations, saving them into locale-specific directories.
- When it runs: This script also runs at build time, ensuring that all language data is up-to-date before deployment.

#### API Data Fetching

- getStaticPaths and getStaticProps in pages/city/[id] use environment variables to fetch data specific to a locale and render pages statically at build time.

### Summary

This guide provides comprehensive instructions for deploying a Next.js project on any server that supports Node.js, managing bi-directional styles, and handling dynamic language and translation features efficiently. By following these steps, developers can ensure a robust deployment and a streamlined user experience across different languages and text directions.
