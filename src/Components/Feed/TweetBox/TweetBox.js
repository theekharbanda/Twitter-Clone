import React from "react";
import {Avatar, Button} from "@mui/material";

function TweetBox() {

    return (
        <div className = "tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src ="1612444719328.jpg"/>
                    <input placeholder="What's happening?"></input>

                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox ;