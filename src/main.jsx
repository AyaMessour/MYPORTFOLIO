import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContactForm from './ContactForm.jsx'
import Navbar from './navbar.jsx'
import Hero from './Hero-section.jsx'
import About from './About.jsx'
import Skills from './Skills.jsx'
import Projects from './Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
       <About></About>
<Projects></Projects>
    <Skills></Skills>
    {/* <App /> */}
  <ContactForm></ContactForm>
  </StrictMode>,
)
