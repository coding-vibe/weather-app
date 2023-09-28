# Weather app

The "Weather app" project is a web application that provides a 5-day weather forecast with 3-hour step and historical weather forecast. The app features are a responsive layout and an user-friendly interface that can be effortlessly switched between multiple languages. Translation of the location into another language isn't carried out due to the specifics of the API.

- [OpenWeatherMap API Documentation](./docs/OpenWeatherMapAPI.md)

## Project Description

### Tab 1: 5-Day Weather Forecast

On the first tab, users can view a 5-day weather forecast. Users have the option to select the language and units of measurement for displaying information.

### Tab 2: Historical Weather Forecast

On the second tab, users can view historical weather forecasts with almost similar functionality, but there is additional possibility to select a search period to obtain detailed information about past weather conditions.

## Core Technologies

The project was developed using the following core technologies:

- React
- React Router DOM
- TypeScript
- Formik
- Material-UI (MUI)
- Node v20.3.1
- npm v9.6.7

## Scripts

The project includes the following scripts that can be executed:

- `dev`: Launches the development mode using Vite.
- `build`: Compiles TypeScript and builds the project using Vite.
- `serve`: Launches a server to deploy the built project.
- `lint`: Runs ESLint to check the code style.
- `preview`: Launches a preview using Vite.
- `prettier-format`: Applies formatting using Prettier.

## Getting Started

1. Clone the repo to your local computer.
2. Run `npm install` to install the required dependencies.
3. To start the development mode, use the command `npm run dev`.
4. To build the project, use the command `npm run build`.
5. To launch the server for the built project, use the command `npm run serve`.
