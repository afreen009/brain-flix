import { useState } from "react";
import '../VideoDescription/VideoDescription.scss';
import Comments from '../Comments/Comments';

const VideoDescription = ({video}) => {
    const formattedDate = new Date(video.timestamp).toLocaleDateString("en-US");
    return (
            <section className="videoDescription">
                <h1 className="videoDescription__title">{video.title}</h1> 
                <div className="videoDescription__divider videoDescription__divider--tabDesk"></div>
                <div className="videoDescription__aboutVideo">
                    <div className="videoDescription__channelTime">
                        <h3 className="videoDescription__channel">
                        By {video.channel}
                        </h3>
                        <p className="videoDescription__time">{formattedDate}</p>
                    </div>
                    <div className="videoDescription__channelTime">
                        <div className="videoDescription__viewRow">
                            <img src="/src/assets/icons/views.svg" alt="views icon" />
                            <p className="videoDescription__views">{video.views}</p>
                        </div>
                        <div className="videoDescription__likesRow">
                            <img src="/src/assets/icons/likes.svg" alt="likes icon" />
                            <p className="videoDescription__likes">{video.likes}</p>
                        </div>
                    </div>
                </div>
                <div className="videoDescription__divider"></div>
                <p className="videoDescription__descriptionPara">
                    {video.description}
                </p>
                <Comments video={video}/>
            </section>
    );
};

export default VideoDescription;