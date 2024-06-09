import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoDescription from './components/VideoDescription/VideoDescription';
import './App.scss';
import videos from './data/videos.json';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [video, setVideo] = useState(videos);
  const [selectedVideo, setselectedVideo] = useState(videos[0]); 

  const handleSelectVideo = (clickedId) => {
    console.log('came here');
    const foundVideo = videos.find((video) => clickedId === video.id);
    setselectedVideo(foundVideo);
  };

  const filteredVideos = video.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <main className='main'>
      <Header/>
      <Hero video={selectedVideo}/>
      <div className='main__innerSec'>
      <VideoDescription video={selectedVideo} />
      <VideoList videoList={filteredVideos} handleSelectVideo={handleSelectVideo}/>
      </div>
    </main>
  )
}

export default App
