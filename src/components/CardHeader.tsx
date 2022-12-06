import MoonIcon from "../assets/moon-dark.png"
import SunIcon from "../assets/sun-lm.png"
import { useState } from "react"

export default function CardHeader() {
    const [darkMode, toggleDarkMode] = useState<Boolean>(false)

    return (
        <div className="strapline">
            <h1 className="devfinder">devfinder</h1>
            <div className="mode" onClick={() => toggleDarkMode(!darkMode)}>
                <p className={`dark-light ${darkMode && "dark"}`}>
                    {darkMode ? "LIGHT" : "DARK"}
                </p>
                {/* {!darkMode && (
                    <img
                        className="sun-moon"
                        src={MoonIcon}
                        alt="moon icon"
                    ></img>
                )}
                {darkMode && (
                    <img
                        className="sun-moon"
                        src={SunIcon}
                        alt="sun icon"
                    ></img>
                )} */}
                <img
                    className="sun-moon"
                    src={darkMode ? { MoonIcon } : { SunIcon }}
                    alt={darkMode ? "moon icon" : "sun icon"}
                ></img>
            </div>
        </div>
    )
}
