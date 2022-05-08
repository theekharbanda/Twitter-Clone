import React from "react";
import './Feed.css';
import TweetBox from './TweetBox/TweetBox.js';
import './TweetBox/TweetBox.css';
import Post from './Post/Post.js';

function Feed(){
    return (
        <div className="feed">
            {/*Header*/}
            <div className ="feed__header">
            <h2>Home</h2>
            </div>
            


            {/*Tweet Box*/}
            <TweetBox/>

            

            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            {/*Post*/}
            {/*Post*/}


            
        </div>
    )
}

export default Feed;