import { useState } from "react";
import './../VideoList/VideoList.scss'

const VideoList = ({videoList, handleSelectVideo}) => {
    return (
            <section className="videoList">
                <p>NEXT VIDEOS</p>
                {videoList.length > 0 ? (
                    <ol>
                        {videoList.map((video, index) => (
                            <>
                            <li key={video.id}>
                                <div className="videoList__divider"></div>
                                <section className="videoList__card" onClick={()=> handleSelectVideo(video.id)}>
                                    <div className="videoList__imgBox"> 
                                            <img className="" src={video.image} alt="" />
                                    </div>
                                    <div className="videoList__videoNameDiv">
                                        <p className="videoList__videoName">
                                            {video.title}
                                        </p>
                                        <p className="videoList__channel">
                                            {video.channel}
                                        </p>
                                    </div>
                                </section>
                            </li>
                            </>
                        ))}
                    </ol>
            ) : (
            <p>No Comments available.</p>
            )}
            </section>
    );
};

export default VideoList;