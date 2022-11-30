import { DataType } from "../data-type"

export default function UserInfo(props: DataType) {
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
                        <div className="group-2-left">
                            <h4>Repos</h4>
                            <p>{props.public_repos}</p>
                        </div>
                        <div className="group-2-center">
                            <h4>Followers</h4>
                            <p>{props.followers}</p>
                        </div>
                        <div className="group-2-right">
                            <h4>Following</h4>
                            <p>{props.following}</p>
                        </div>
                    </div>
                    <div className="user-links">
                        <div className="ul-top">
                            <div className="link">
                                <p className="icon">X</p>
                                <p>{props.location}</p>
                            </div>
                            <div className="link">
                                <p
                                    className={`icon ${
                                        !props.twitter_username && "n-a"
                                    }`}
                                >
                                    X
                                </p>
                                {props.twitter_username ? (
                                    <p>{props.twitter_username}</p>
                                ) : (
                                    <p className="n-a">Not Available</p>
                                )}
                            </div>
                        </div>
                        <div className="ul-bottom">
                            <div className="link">
                                <p className="icon">X</p>
                                <p>{props.blog}</p>
                            </div>
                            <div className="link">
                                <p className="icon">X</p>
                                <p>@{props.html_url}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
