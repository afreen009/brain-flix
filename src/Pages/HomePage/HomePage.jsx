import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Hero from '../../components/Hero/Hero';
import VideoDescription from '../../components/VideoDescription/VideoDescription';
import './HomePage.scss';
import VideoList from '../../components/VideoList/VideoList';

function HomePage() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  let { videoId } = useParams();
  const getVideosEndPoint = `${API_URL}videos`;

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
        const response = await axios.get(`${API_URL}videos/${videoId || selectedVideoId}`);
        setSelectedVideo(response.data);
      } catch (error) {
        console.error(error);
      }
  };

  if(videos[0]?.id || selectedVideoId){
    getSingleVideo(selectedVideoId);
  }
}, [selectedVideoId]);

const filteredVideos= videos.filter((video)=>video.id !== selectedVideoId);

const handleSelectVideo = (clickedId) => {
  const foundVideo= videos.find((video) => clickedId === video.id);
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