import Navbar from './../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BodyContainer from '../Components/BodyContainer/BodyContainer';
import Title from '../Components/Headings/Title';


function Contact() {
  return (
    <div>
      <Navbar active={"contact"}/>
      <Title title={"Get In Touch"} subtitle={"Feel free to contact us Anytime for Fresh Fruits"}/>
     <BodyContainer>
      
     </BodyContainer>
      <Footer/>
    </div>
  )
}

export default Contact
