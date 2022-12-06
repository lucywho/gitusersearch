import MoonIcon from "../assets/moon-dark.png"
export default function CardHeader() {
    return (
        <div className="strapline">
            <h1 className="devfinder">devfinder</h1>
            <div className="mode">
                <p className="dark">DARK</p>
                <img className="moon " src={MoonIcon} alt="moon icon"></img>
            </div>
        </div>
    )
}
