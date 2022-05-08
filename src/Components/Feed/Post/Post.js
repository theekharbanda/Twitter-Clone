import React from "react";
import './Post.css'
import {Avatar} from '@mui/material';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';

function Post({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}){
    return(
        <div className ="post">
            <div className = "post__avatar">
                <Avatar src=""/>
            </div>
            <div className ="post__body">
                <div className="post__header">
                    <div className ="post__headerText">
                        <h3>
                            Naman Kharbanda {" "} <span className="post__headerUsername">
                                <VerifiedRoundedIcon className ="post__badge"/> @thee_kharbanda
                            </span>
                        </h3>
                    </div>
                </div>
                <div className = "post__description">
                    <p> Hey There ! Thanks for using this platform!</p>
                </div>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize ="small"/>
                    <RepeatIcon fontSize = "small"/>
                    <FavoriteBorderIcon fontSize= "small"/>
                    <ShareIcon fontSize= "small"/>
                </div>
            </div>


        </div>
    )
}

export default Post ;