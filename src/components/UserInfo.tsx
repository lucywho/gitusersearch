export default function UserInfo() {
    return (
        <div className="user-info">
            <div className="info-left">
                <div className="user-avatar">data.avatar_url</div>
            </div>
            <div className="info-right">
                <div className="user-strapline">
                    <div className="us-left">
                        <h1 className="user-name">data.name</h1>
                        <h3 className="user-login">@(data.login)</h3>
                    </div>

                    <h4 className="user-joined">Joined (data.created_at)</h4>
                </div>

                <div className="user-bio">
                    This profile has no bio / data.bio
                </div>

                <div className="user-data">
                    <div className="user-figures">
                        <div className="group-2-left">
                            <h4>Repos</h4>
                            <p>data.public_repos</p>
                        </div>
                        <div className="group-2-center">
                            <h4>Followers</h4>
                            <p>data.followers</p>
                        </div>
                        <div className="group-2-right">
                            <h4>Following</h4>
                            <p>data.following</p>
                        </div>
                    </div>
                    <div className="user-links">
                        <div className="ul-top">
                            <div className="link">
                                <p className="icon">X</p>
                                <p>data.location</p>
                            </div>
                            <div className="link">
                                <p className="icon">X</p>
                                <p>twitter_username</p>
                            </div>
                        </div>
                        <div className="ul-bottom">
                            <div className="link">
                                <p className="icon">X</p>
                                <p>data.blog</p>
                            </div>
                            <div className="link">
                                <p className="icon">X</p>
                                <p>@html_url</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
