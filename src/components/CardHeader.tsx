import MoonIcon from "../assets/moon-dark.png"
import SunIcon from "../assets/sun-lm.png"

type Props = {
    darkMode: Boolean
    toggleMode: () => void
}

export default function CardHeader({ darkMode, toggleMode }: Props) {
    return (
        <div className="strapline">
            <h1 className="devfinder">devfinder</h1>
            <div className={`mode ${darkMode && "dark"}`} onClick={toggleMode}>
                <p className={`dark-light ${darkMode && "dark"}`}>
                    {darkMode ? "LIGHT" : "DARK"}
                </p>

                <img
                    className={`sun-moon ${darkMode && "dark"}`}
                    src={darkMode ? SunIcon : MoonIcon}
                    alt={darkMode ? "moon icon" : "sun icon"}
                ></img>
            </div>
        </div>
    )
}
