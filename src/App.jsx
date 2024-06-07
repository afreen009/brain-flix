import { useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VideoDescription from './components/VideoDescription/VideoDescription';
import './App.scss';
import videos from './data/videos.json';

function App() {
  const [selectedVideo, setselectedVideo] = useState(videos[0]); 
  return (
    <main className='main'>
      <Header/>
      <Hero video={selectedVideo}/>
      <VideoDescription video={selectedVideo}/>
    </main>
  )
}

export default App
