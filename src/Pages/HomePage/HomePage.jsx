import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from '../../components/Hero/Hero';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import './HomePage.scss';
import VideoList from '../../components/VideoList/VideoList';

const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/"; // root route for API endpoint
const API_KEY = "?api_key=ea5349e3-babf-4703-96e7-ebbc2041eb84";

function HomePage() {
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null); 
  let { videoId } = useParams();
  
  const getVideosEndPoint = `${API_URL}videos${API_KEY}`;


  const getVideos = async () => {
    try{
      const result= await axios.get(getVideosEndPoint);
      const videoList = result.data;
      setVideo(videoList);
    }catch(e){
      console.log(e);
    }
  }

  useEffect(() => {
    getVideos();
  }, []);

 let selectedVideoId = videoId || videos[0]?.id;

  useEffect(() => {

    const getSingleVideo =  async(selectedVideoId) => {
      try {
        const response = await axios.get(`${API_URL}videos/${videoId || selectedVideoId}${API_KEY}`);
        setSelectedVideo(response.data);
      } catch (error) {
        console.error(error);
      }
  };

    getSingleVideo(selectedVideoId);

}, [selectedVideoId]);

const filteredVideos= videos.filter((video)=>video.id !== selectedVideoId);

const handleSelectVideo = (clickedId) => {
  const foundVideo = videos.find((video) => clickedId === video.id);
  setSelectedVideo(foundVideo);
};

 return ( 
  selectedVideo != null ? 
  <>
    <main className='main'>
      <Hero video={selectedVideo}/> 
      <div className='main__innerSec'>
      <VideoDescription video={selectedVideo} />
      <VideoList videoList={filteredVideos} handleSelectVideo={handleSelectVideo}/>
      </div>
    </main>
    </>: <p>Loading.....</p>
  )
}

export default HomePage
