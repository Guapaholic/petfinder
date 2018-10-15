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
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
//MAterial UI

// function App() {
//   return (
//     <Button variant="contained" color="primary">
//       Hello World
//     </Button>
//   );
// }

// ReactDOM.render(<App />, document.querySelector('#app'));

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />
      <Button variant="contained" color="primary">
      Login
    </Button>
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
