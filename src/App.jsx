import { BrowserRouter } from "react-router-dom";


import {Contact, Profile, Achievement, Experience, Education, Hero, Navbar, Tech, Project, StarsCanvas, Content, Footer } from "./components";

const App = () => {
  return (
    <div style={{backgroundColor:"black"}}>
    <BrowserRouter>
      <div style={{backgroundColor:"black"}} className='relative z-0 bg-primary'>
        <div style={{backgroundColor:"black"}} className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <Content />
        <Education />
        <Project />
        <Experience />
        <Achievement />
        <Profile/>
        <Tech />
        <div  style={{backgroundColor:"black"}}className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <Footer/>
      </div>
    </BrowserRouter>
    </div>
  )
}

export default App
