type Props = {
name: string;
login: string;
avatar_url: string;
created_at: string;
bio: string;
public_repos: number;
followers: number;
following: number;
location: string;
blog: string;
twitter_username: string;
html_url: string;

}

export default function UserInfo(props: Props) {
    return (
        <div className="user-info">
            <div className="info-left">
                <div className="user-avatar">{props.avatar_url}</div>
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
                    {props.bio ? {props.bio} : "This profile has no bio"}
                     
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
                                <p className="icon">X</p>
                                <p>{props.twitter_username}</p>
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
