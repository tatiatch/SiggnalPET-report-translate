## Getting Started

### Prerequisites
* Node.js and npm (or yarn) installed

### Installation
```
### 1.`npm install`

### 2. Copy the content of .env.example into .env

### 3. Replace the `REACT_APP_LIBRETRANSLATE_API_KEY` with the actual api key !!!this step is important for the app to work

### 2.`npm start`
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<h1>How to generate the translaions</h1>

### `npm run translate -- --locales en,es,fr,de,pt --force`

The command supports 2 flags `--locales` and `--force`

1. `--locales` flag is required. It can be just one argument ex: `--locales en` or it an be multiple arguments `--locales en,es,fr,de,pt`
2. `--force` flag is optional. If --force is provided all the .json files will be re-created. If --force is not provided .json files remain the same, only new keys are being added at the end of the .json
