import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import MyBrand from './components/brand/MyBrand';
import Services from './components/services/Services';
import Projects from './components/projects/Projects';
import Testimonial from './components/testimonials/Testimonial';
import EmailSub from './components/emailSubscription/EmailSub';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <MyBrand/>
      <Services/>
      <Projects/>
      <Testimonial/>
      <EmailSub/>
      <Footer/>
    </div>
  );
}

export default App;
