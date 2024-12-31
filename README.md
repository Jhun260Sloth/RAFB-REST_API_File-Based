# RAFB-REST\_API\_File-Based

A simple REST API built with Node.js and Express.js that uses JSON files stored in a folder (`json_s`) as the data source. This API provides functionality for retrieving JSON data based on the file name, making it a great example of a lightweight, file-based backend system.

---

## Features

- **File-Based Storage**: Data is stored in individual JSON files within the `json_s` folder, eliminating the need for a database.
- **RESTful Endpoints**: Provides endpoints for fetching data by file name.
- **Lightweight**: Ideal for small-scale projects or learning purposes.
- **Easy to Customize**: The codebase is straightforward and easy to extend.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) for package management

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/RAFB-REST_API_File-Based.git
   cd RAFB-REST_API_File-Based
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   or if you use yarn:

   ```bash
   yarn install
   ```

---

## How to Run

1. **Start the server**:

   ```bash
   npm start
   ```

   or

   ```bash
   node server.js
   ```

2. **Access the API**:
   The server will start on `http://localhost:3000` (default port). You can test the endpoints using tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/).

---

## Endpoints

### GET /:filename
Retrieve the data from a specific JSON file in the `json_s` folder. The `filename` should be the name of the file (without the `.json` extension).

**Example Request:**

```bash
GET http://localhost:3000/example
```

If the file `json_s/example.json` exists, its content will be returned.

---

## Folder Structure

```
RAFB-REST_API_File-Based/
├── json_s/            # Folder containing JSON files
│   ├── example.json   # Example JSON file
├── server.js          # Main entry point of the application
├── package.json       # Project metadata and dependencies
├── README.md          # Project documentation
└── node_modules/      # Installed dependencies
```

---

## Customization

- **Port Configuration**: Update the `PORT` variable in `server.js` to change the server's listening port.
- **Data Source**: Add or modify JSON files in the `json_s` folder to adjust the available data.

