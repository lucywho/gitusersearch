import { GitHubUser } from "../data-type"

const LinkIcon = require("../assets/link-lm.png")

export default function UserInfo(props: GitHubUser) {
    return (
        <div className="user-info">
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
                <div className="user-strapline">
                    <div className="us-left">
                        <h1 className="user-name">{props.name}</h1>
                        <h3 className="user-login">@{props.login}</h3>
                    </div>

                    <h4 className="user-joined">Joined {props.created_at}</h4>
                </div>

                <div className="user-bio">
                    {props.bio ? `${props.bio}` : "This profile has no bio"}
                </div>

                <div className="user-data">
                    <div className="user-figures">
                        <div className="uf-left">
                            <h4>Repos</h4>
                            <p>{props.public_repos}</p>
                        </div>
                        <div className="uf-center">
                            <h4>Followers</h4>
                            <p>{props.followers}</p>
                        </div>
                        <div className="uf-right">
                            <h4>Following</h4>
                            <p>{props.following}</p>
                        </div>
                    </div>
                    <div className="user-links">
                        <div className="ul-top">
                            <div className={`link ${!props.location && "n-a"}`}>
                                <img
                                    className="icon"
                                    src=""
                                    alt="location icon"
                                ></img>
                                {props.location ? (
                                    <p>{props.location}</p>
                                ) : (
                                    <p>Not Available</p>
                                )}
                            </div>
                            <div
                                className={`link ${
                                    !props.twitter_username && "n-a"
                                }`}
                            >
                                <img
                                    className="icon"
                                    src=""
                                    alt="twitter logo"
                                ></img>
                                {props.twitter_username ? (
                                    <p>{props.twitter_username}</p>
                                ) : (
                                    <p>Not Available</p>
                                )}
                            </div>
                        </div>
                        <div className="ul-bottom">
                            <div className={`link ${!props.blog && "n-a"}`}>
                                <img
                                    className="icon"
                                    src={LinkIcon}
                                    alt="chain link icon"
                                ></img>
                                {props.blog ? (
                                    <a href={`${props.blog}`}>{props.blog}</a>
                                ) : (
                                    <p>Not Available</p>
                                )}
                            </div>
                            <div className={`link ${!props.html_url && "n-a"}`}>
                                <img
                                    className="icon"
                                    src=""
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
            </div>
        </div>
    )
}
