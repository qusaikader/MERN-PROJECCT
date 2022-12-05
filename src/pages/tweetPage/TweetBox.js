import Avatar from '@mui/material/Avatar';
import Button  from '@mui/material/Button';
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'
import firebase from 'firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            displayName : "MERN-QHN",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username: "qhn_mern",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://www.dell.com/wp-uploads/2021/07/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594455_003454-440x440.jpg"
        })

        setTweetMessage("")
        setTweetImage("")
    }

    return (
        <div className = "tweetBox">
            <form>
                <div className = "tweetBox__input">
                    <Avatar
                        src = "https://www.dell.com/wp-uploads/2021/07/s_6F9FA8C635E5B49A4AA9474CB76D1146BC1F6408CE5EEC320713FFF4758F98B5_1569007594455_003454-440x440.jpg"
                    />
                    <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening!" 
                        type = "text" 
                    />
                </div>
                <input 
                    onChange = { (e) => setTweetImage(e.target.value) }
                    value = {tweetImage}
                    className = "tweetBox__imageInput"
                    placeholder = "Optional : Enter Image URL"
                    type = "text"
                />
                <Button 
                onClick = { sendTweet }
                className = "tweetBox__tweetButton">Tweety</Button>
            </form>
        </div>
    )
}

export default TweetBox
