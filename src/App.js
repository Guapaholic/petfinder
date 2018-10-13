import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import Splash from './views/Splash'
// import Swipeview from './views/Swipeview'
// import Bffsearch from './views/Bffsearch'
import Carousel from './components/Carousel'
import Navbar from './components/Navbar'
import Wrapper from './components/Wrapper'
// import Button from './components/Button'
import './App.css'
import API from './utilities/API'

const App = () => (
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
