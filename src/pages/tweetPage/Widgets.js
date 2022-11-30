import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>
                <TwitterTweetEmbed tweetId = {"1597149874314960900"} />
                <TwitterTweetEmbed tweetId = {"1509026345929814020"} />
                <TwitterTweetEmbed tweetId = {"1585574597927530497"} />

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "qusai_k09"
                    options = {{ height: 400 }}
                />

            </div>
        </div>
    )
}

export default Widgets
