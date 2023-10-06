import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import YouTuberScreenWrapper from '../YouTuberScreen/YouTuberScreenWrapper'
import LiveSongLinksWrapper from '../LiveSongLinks/LiveSongLinksWrapper'
import BitlyLinkDialog from '../DialogBox/BitlyLinkDialog'
import NoPageFoundPage from '../NoPageFound/NoPageFoundPage'
import Page1 from '../NoPageFound/Page1'
import Page2 from '../NoPageFound/Page2'
import Page3 from '../NoPageFound/Page3'


type Props = {}

const PageRoute = (props: Props) => {
 
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<YouTuberScreenWrapper/>} />
          <Route path='/liveSong' element={<LiveSongLinksWrapper />} />
          <Route path='/home' element={<BitlyLinkDialog />} />
          <Route path='/01' element={<NoPageFoundPage/>} />
          <Route path='/02' element={<Page1/>} />
          <Route path='/03' element={<Page2/>} />
          <Route path='/04' element={<Page3/>}/>
          
   

        </Routes>
      </BrowserRouter>
    )
}

export default PageRoute