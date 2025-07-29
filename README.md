# 🇺🇸 US News 24×7

US News 24×7 is a modern, fully responsive React.js-based news application focused on delivering real-time headlines and breaking news from across the United States. Designed with performance and user experience in mind, this project showcases a modular architecture, clean UI, and seamless API integrations.

---

## 🚀 Features

- 📰 Displays top US news articles via NewsAPI.org *(auto-updated with time-to-time live feeds)*
- 🔄 Auto-refresh and loading spinners for better UX
- 🔍 Component-based structure using React.js
- 📱 Fully responsive and mobile-friendly UI
- 🧩 Reusable components: Navbar, NewsItem, Spinner
- 📦 Modern development setup with Create React App
- 🎯 Easy to deploy and scalable

---

## 📁 Project Structure

```
US-News-24x7/
├── node_modules/                 # Project dependencies
├── public/                      # Static files served to browser
│   ├── favicon.ico              # Website icon
│   ├── index.html               # Root HTML file
│   ├── logo512.png              # App logo
│   ├── manifest.json            # App metadata
│   └── robots.txt               # Search engine rules
├── src/                         # React source files
│   ├── components/              # Reusable UI components
│   │   ├── Navbar.js            # Top navigation bar
│   │   ├── News.js              # Main news feed logic
│   │   ├── NewsItem.js          # Individual news card
│   │   ├── Rocket.gif           # Custom loading GIF
│   │   └── Spinner.js           # Spinner loader component
│   ├── App.css                  # Main app styles
│   ├── App.js                   # Root React component
│   ├── App.test.js              # Test cases for App
│   ├── index.css                # Global CSS
│   ├── index.js                 # App entry point
│   ├── logo.svg                 # React logo
│   ├── reportWebVitals.js       # Web performance metrics
│   └── setupTests.js            # Unit testing setup
├── .env.local                   # API keys and environment variables
├── .gitignore                   # Files to ignore in Git
├── package-lock.json            # Dependency lock file
├── package.json                 # Project info and dependencies
├── README.md                    # Project overview
└── sampleOutput.json            # Example news API response
```



---

## 🛠️ Installation

```bash
git clone https://github.com/yourusername/us-news-24x7.git
cd us-news-24x7
npm install
▶️ Running the App
npm start

🔌 API Integration Example (NewsAPI.org)
In your .env.local file:
REACT_APP_NEWS_API_KEY=your_api_key_here

Technologies Used
React.js
JavaScript (ES6+)
CSS3
Git & GitHub
REST APIs (NewsAPI)
Create React App

👨‍💻 Author
Tarun Chaudhari
I'm passionate about building scalable and performant web applications that solve real-world problems.

Feel free to fork, clone, or contribute to this project!

---

Let me know if you’d like to:

- Add automatic refresh (`setInterval`) code for news updates
- Include screenshots or badges
- Generate a GitHub banner with your name/project branding

Want me to regenerate the downloadable `.md` file again with this?


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
