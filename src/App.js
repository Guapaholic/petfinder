import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Splash from './views/Splash'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
import './App.css'
import API from './utilities/API'
import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar';

const App = () => (
  return(
    ButtonAppBar()
  )
  <BrowserRouter>
    <div>
      <Navbar />
      <Carousel />
      <Wrapper>
        <Route exact path='/' component={Splash} />
        <Route exact path='/home' component={Splash} />
        {/* <Route match='/swipe' component={Swipeview} />
        <Route match='/search' component={Bffsearch} /> */}
      </Wrapper>
    </div>
  </BrowserRouter>
)

console.log(API.randompet())

export default App;
