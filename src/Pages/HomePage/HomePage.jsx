import axios from "axios";
import { useState, useEffect } from "react";
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import './HomePage.scss';
import VideoList from '../../components/VideoList/VideoList';

const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/"; // root route for API endpoint
const API_KEY = "?api_key=ea5349e3-babf-4703-96e7-ebbc2041eb84";

const getVideosEndPoint = `${API_URL}videos${API_KEY}`;


function HomePage() {
  const [video, setVideo] = useState([]);
  const [selectedVideo, setselectedVideo] = useState([]); 

  const getVideos = async () => {
    try{
      let result = await axios.get(getVideosEndPoint);
      setVideo(result.data);
      setselectedVideo(result.data[0]);
      console.log(result.data[0]);
    }catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getVideos();
  }, [])
  

  const handleSelectVideo = (clickedId) => {
    const foundVideo = video.find((video) => clickedId === video.id);
    setselectedVideo(foundVideo);
  };

  const filteredVideos = video.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <main className='main'>
      <Header />
      <Hero video={selectedVideo}/>
      <div className='main__innerSec'>
      <VideoDescription video={selectedVideo} />
      <VideoList videoList={filteredVideos} handleSelectVideo={handleSelectVideo}/>
      </div>
    </main>
  )
}

export default HomePage
