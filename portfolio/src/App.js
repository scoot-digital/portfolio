import logo from './logo.svg';
import './styles/app.css';
import Header from './components/header'
import Jumbotron from './components/jumbotron'
import About from './components/about'
import Footer from './components/footer'
import Project from './components/project'

function App() {

  console.log("Showing portfolio!")

  return (

    <div className="App">             

        <Header/>

        <Jumbotron/>

        <About/>

        <Footer/>

    </div>

  )

}

export default App