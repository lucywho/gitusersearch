import ReactDOM from "react-dom/client"

import App from "./components/App"

import "./index.css"

const container = document.getElementById("app")!

ReactDOM.hydrateRoot(container, <App />)
