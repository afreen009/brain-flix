import { useState } from 'react';
import Header from './components/Header/Header';
import UploadVideo from './components/UploadVideo/UploadVideo';
import Hero from './components/Hero/Hero';
import VideoDescription from './components/VideoDescription/VideoDescription';
import './App.scss';
import videos from './data/videos.json';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [video, setVideo] = useState(videos);
  const [selectedVideo, setselectedVideo] = useState(videos[0]); 
  // useEffect(() => {
  //   componentDidUpdate// videoList result
  //setVideo(result.data.videos[0])
  // }, [dependencies])
  

  const handleSelectVideo = (clickedId) => {
    //api
    //setselectedVideo
    const foundVideo = videos.find((video) => clickedId === video.id);
    setselectedVideo(foundVideo);
  };

  const filteredVideos = video.filter(
    (video) => video.id !== selectedVideo.id
  );

  return (
    <main className='main'>
      <Header />
      <UploadVideo /> 
      {/* <Hero video={selectedVideo}/>
      <div className='main__innerSec'>
      <VideoDescription video={selectedVideo} />
      <VideoList videoList={filteredVideos} handleSelectVideo={handleSelectVideo}/>
      </div> */}
    </main>
  )
}

export default App
