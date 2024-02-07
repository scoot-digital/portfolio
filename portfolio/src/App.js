import 'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/app.css';
import Header from './components/header'
import Work from './pages/work'
import About from './pages/about'
import Resume from './pages/resume'
import Contact from './pages/contact'
import Footer from './components/footer'
import Project from './components/project'

function App() {

  console.log("Showing portfolio!")

  return (

    <div className="App">             

      <BrowserRouter>

        <Header>          

            <Routes>              

                <Route path="/" element={<Work/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/contact" element={<Contact/>}/>              

            </Routes> 

        </Header>
        
      </BrowserRouter>

      <Footer/>

    </div>

  )

}

export default App