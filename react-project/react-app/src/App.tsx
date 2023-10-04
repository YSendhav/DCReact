import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LiveSongLinks from './Screens/LiveSongLinks/LiveSongLinks'
import Home from './Screens/YouTuberScreen/YouTuberScreen'


type Props = {}

const App = (props: Props) => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/liveSong' element={<LiveSongLinks />} />
          {/* <Route path='/page3' element={<BitlyLinkDialog />} /> */}
   

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App