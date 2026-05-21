import Navbar from './../Components/Navbar/Navbar';
import "./OurServices.css";

import Footer from '../Components/Footer/Footer';
import BodyContainer from '../Components/BodyContainer/BodyContainer';
import Title from '../Components/Headings/Title';
import { OUR_SERVICES } from '../Config/Config';


function OurServices() {
  return (
    <div>
        <Navbar active={"ourservices"}/>
      <Title title={"Our Services"} subtitle={"Enjoy every Bite of Freshness"}/>

      
     <BodyContainer>
      <div className='service-card'>
        {
          OUR_SERVICES.map((item,index)=>{
            return(
              <div key={index} className='card-design'>
               <p className='item'> {item.icon }</p> 
                <h2 className='rusk'>{item.title}</h2>
                <p className='desc'>{item.desc}</p>
                
                </div>
            )
          })
        }
      </div>
        
        </BodyContainer>
      <Footer />
    </div>
  )
}

export default OurServices
