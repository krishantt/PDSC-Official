import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//Import all css files
import './css/flex-slider.css'
import './css/fontawesome.css'
import './css/lightbox.css'
import './css/owl.css'
import './css/template.css'
// Import Font Awesome styles
import '@fortawesome/fontawesome-free/css/all.min.css';
// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//Importing Components
import Navbar from './components/Navbar/Navbar'
import MainBanner from './components/MainBanner/MainBanner'
import Features from './components/Features/Features'
import JoinUs from './components/JoinUs/JoinUs'
import GeneralMembersForm from './components/GeneralMembersForm/GeneralMembersForm'
import PastBootcamps from './components/PastBootcamps/PastBootcamps'
import ReachOut from './components/ReachOut/ReachOut'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <MainBanner />
      <Features />
      <JoinUs />
      <GeneralMembersForm />
      <PastBootcamps />
      <ReachOut />
      <Footer />
    </>
  )
}

export default App