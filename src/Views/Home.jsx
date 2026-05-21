import React from 'react'
import "./Home.css";
import Navbar from './../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import BodyContainer from '../Components/BodyContainer/BodyContainer';
import {PRODUCTS} from './../Config/Config';
import Product from '../Components/Product-Container/Product';
import Title from '../Components/Headings/Title';




function Home(){
  return (

    <div>
      <Navbar active={"home"} />
     <Title title={"Fresh Fruits for a Healthy Life"} subtitle={"Experiance the Natural taste of fram-fresh fruits Delivered with freshness"}/>
     <subtitle/>
    <BodyContainer>
        <div className='main-products'>
        {
        PRODUCTS.map((product) => {
          return(
            <Product product={product}/>
          )
        })
      }
      </div>
     </BodyContainer>
      
      <Footer />
    </div>
  )
}

export default Home


