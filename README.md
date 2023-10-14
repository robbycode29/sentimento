# sentimento
A web-scraper for sentiment analysis and more

scrape source: https://wsa-test.vercel.app/

# Sentimento REST API Documentation

The Sentimento REST API is a Node.js application that utilizes Express for handling HTTP requests. It performs web scraping using Puppeteer to extract information from a provided URL and applies sentiment analysis to the extracted text. The application provides an endpoint for fetching data related to different text sections, including their sentiment, word count, and relevant details.

## Installation

1. Clone the project repository from GitHub.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

## Running the Server

To start the Sentimento server, run the following command:

```bash
npm start
```

The server will run on the specified port, and you can access the API endpoints to perform operations.

## Endpoints

### Fetch Sentiment Analysis Data

- Endpoint: `/scrape?url={url}`
- Method: `GET`
- Description: This endpoint scrapes data from the provided URL and performs sentiment analysis on the extracted text.
- Query Parameters:
  - `url` (required): The URL to be scraped.
- Response:
  - Upon successful scraping and sentiment analysis, the API returns a JSON array containing objects with the following attributes:
    - `genre`: The genre of the text section.
    - `title`: The title of the text section.
    - `short_description`: A brief description of the text section.
    - `author`: The author of the text section.
    - `author_description`: A description of the author.
    - `image`: The URL of the associated image.
    - `href`: The URL associated with the text section.
    - `sentiment`: The sentiment analysis result, which can be either "positive," "negative," or "neutral."
    - `words`: The word count of the text section.
- Error Response:
  - If the scraping process fails, the API returns an error with a status code of 500 and an error message.

## Dependencies

The application uses the following main dependencies:

- **Express**: For building the REST API server.
- **Puppeteer**: For web scraping and extracting data from web pages.
- **Axios**: For making HTTP requests to external APIs.

## Files

The application consists of the following main files:

1. **routes/source.js**: Contains the Express router and the endpoint definition for performing web scraping and sentiment analysis on the provided URL.
2. **utils/wordsApi.js**: A file that was intended to handle the retrieval of positive and negative word lists from an external API. However, it is currently commented out and not in use. If you want to use this API uncomment the file.

## Additional Notes

- The application currently uses a predefined set of positive and negative words for sentiment analysis, which can be found in the `getSentiment` function in the `source.js` file.
- The application utilizes Puppeteer to launch a headless Chromium browser for web scraping. The Chromium path is specified via an environment variable `CHROMIUM_PATH`.

## Author

The Sentimento REST API is authored and maintained by Oprescu Robert. For any inquiries or issues, please contact robertandrei.oprescu@gmail.com.

# Sentimento Frontend Application Documentation

The Sentimento Frontend application is developed using Vue.js and TypeScript. It provides a user interface for interacting with the Sentimento REST API. The application allows users to input a URL and then displays the scraped data, including sentiment analysis, from the provided URL. Below is an overview of the application's main components and functionalities.

## Installation

1. Clone the project repository from GitHub.
2. Navigate to the frontend directory in your terminal.
3. Run the following command to install the necessary dependencies:

   ```bash
   npm install
   ```

4. Run the development server using:

   ```bash
   npm run serve
   ```

5. Open the application in your web browser at the specified localhost address.

## Overview

The application consists of the following main components:

1. **HomeView.vue**: The main component responsible for rendering the home page UI. It includes a search bar for inputting the URL to be scraped and displays the fetched data.
2. **SearchBar.vue**: A reusable component for handling user input of the URL to be scraped.
3. **LoadingBuffer.vue**: A loading indicator component displayed during the data fetching process.
4. **PostWall.vue**: A component for rendering the posts obtained from the API with additional formatting for sentiment analysis results.

## Functionality

The main functionalities of the application include:

- Accepting user input of a URL to be scraped.
- Displaying the scraped data from the provided URL, including the sentiment analysis results.
- Handling loading indicators during the data fetching process.
- Handling error messages in case of failed data retrieval.

## Components

### HomeView Component

- Responsible for rendering the main user interface of the application.
- Utilizes the `SearchBar`, `LoadingBuffer`, and `PostWall` components.
- Includes methods for handling data fetching, error handling, and post formatting.
- Utilizes VueX for state management.

### SearchBar Component

- Allows users to input the URL to be scraped.

### LoadingBuffer Component

- Displays a loading indicator during data fetching.

### PostWall Component

- Renders the posts obtained from the API with additional formatting for sentiment analysis results.

## Styling

The application utilizes scoped styling to provide a customized UI experience. Custom scrollbar styling is applied to enhance the visual appeal of the application.

## Author

The Sentimento Frontend Application is authored and maintained by Oprescu Robert. For any inquiries or issues, please contact robertandrei.oprescu@gmail.com.

## Note

Ensure that the Sentimento REST API is running and accessible to the frontend application before usage. Adjust the API endpoint if necessary to match the running instance of the Sentimento REST API.