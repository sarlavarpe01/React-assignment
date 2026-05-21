import Navbar from './../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BodyContainer from '../Components/BodyContainer/BodyContainer';
import Title from '../Components/Headings/Title';
function About() {
  return (
    <div>
      <Navbar active={"about"}/>
      <Title title={"About Our Fruits"} subtitle={"Fresh Fruits,Better quality and healthy living every day"}/>
      <BodyContainer>
        
      </BodyContainer>
      <Footer/>
    </div>
  )
}

export default About
