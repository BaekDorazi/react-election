import logo from './logo.svg';
import './App.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDbnDgyv2eQovXO9ugJQD6Ko3fDWnIROYo",
    authDomain: "react-election.firebaseapp.com",
    projectId: "react-election",
    storageBucket: "react-election.appspot.com",
    messagingSenderId: "179754433195",
    appId: "1:179754433195:web:a24ef0d1654edd74fd55ee",
    measurementId: "G-VCW1C70TPX"
};

function App() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
