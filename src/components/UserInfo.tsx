import { GitHubUser } from "../data-type"
import LinkIcon from "../assets/link-lm.png"
import LocationIcon from "../assets/location-lm.png"
import BuildingIcon from "../assets/building-lm.png"
import TwitterIcon from "../assets/twitter-dm.png"

type PassedProps = {
    darkMode: Boolean
}

type Props = PassedProps & GitHubUser

export default function UserInfo(props: Props) {
    let darkMode = props.darkMode

    return (
        <div className={`user-info ${darkMode ? "dark" : ""}`}>
            <div className="info-top">
                <div className="info-left">
                    {props.avatar_url && (
                        <img
                            className="user-avatar"
                            src={props.avatar_url}
                            alt="user avatar"
                        />
                    )}
                </div>
                <div className="info-right">
                    <div className="name-login">
                        <h1 className={`user-name ${darkMode && "dark"}`}>
                            {props.name}
                        </h1>
                        <h3 className="user-login">@{props.login}</h3>
                    </div>

                    <h4 className={`user-joined ${darkMode && "dark"}`}>
                        Joined {props.created_at}
                    </h4>
                </div>
            </div>
            <div className="user-data">
                <div className={`user-bio ${darkMode ? "dark" : ""}`}>
                    {props.bio ? `${props.bio}` : "This profile has no bio"}
                </div>
                <div className={`user-figures ${darkMode ? "dark" : ""}`}>
                    <div className="uf">
                        <p>Repos</p>
                        <p className="figure">{props.public_repos}</p>
                    </div>
                    <div className="uf">
                        <p>Followers</p>
                        <p className="figure">{props.followers}</p>
                    </div>
                    <div className="uf">
                        <p>Following</p>
                        <p className="figure">{props.following}</p>
                    </div>
                </div>
                <div className={`user-links ${darkMode ? "dark" : ""}`}>
                    <div
                        className={`link location ${
                            !props.location ? "n-a" : ""
                        } ${darkMode ? "dark" : ""} `}
                    >
                        <img
                            className={`icon ${darkMode ? "dark" : ""}`}
                            src={LocationIcon}
                            alt="location icon"
                        ></img>
                        {props.location ? (
                            <p>{props.location}</p>
                        ) : (
                            <p>Not Available</p>
                        )}
                    </div>
                    <div
                        className={`link blog ${!props.blog ? "n-a" : ""} ${
                            darkMode ? "dark" : ""
                        }`}
                    >
                        <img
                            className={`icon ${darkMode ? "dark" : ""}`}
                            src={LinkIcon}
                            alt="chain link icon"
                        ></img>
                        {props.blog ? (
                            <a href={`${props.blog}`}>{props.blog}</a>
                        ) : (
                            <p>Not Available</p>
                        )}
                    </div>

                    <div
                        className={`link twitter ${
                            !props.twitter_username ? "n-a" : ""
                        } ${darkMode ? "dark" : ""}`}
                    >
                        <img
                            className={`icon ${darkMode ? "dark" : ""}`}
                            src={TwitterIcon}
                            alt="twitter logo"
                        ></img>
                        {props.twitter_username ? (
                            <p>{props.twitter_username}</p>
                        ) : (
                            <p>Not Available</p>
                        )}
                    </div>
                    <div
                        className={`link html-url ${
                            !props.html_url ? "n-a" : ""
                        } ${darkMode ? "dark" : ""}`}
                    >
                        <img
                            className={`icon ${darkMode ? "dark" : ""}`}
                            src={BuildingIcon}
                            alt="building icon"
                        ></img>
                        {props.html_url ? (
                            <a href={`${props.html_url}`}>@github</a>
                        ) : (
                            <p>Not Available</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
