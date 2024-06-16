// import {  } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProfile from './Pages/HomePage/HomePage';
import UploadVideo from './Pages/UploadVideo/UploadVideo';
import './App.scss';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element ={<SingleProfile/>}>
          <Route path="/videos/:videoId" element={<SingleProfile/>}></Route>
        </Route>
        <Route path="/upload-video" element={<UploadVideo />}/>
        <Route path="/*" element={<NotFoundPage/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
