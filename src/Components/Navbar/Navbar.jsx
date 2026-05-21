
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { House } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import { NotebookPen } from 'lucide-react';
import { HeartHandshake } from 'lucide-react';




function Navbar({active}) {
  return (
    <div className='Main-contain'><House className='icon'/>
      <Link to="/"  className='ab' style={{fontWeight:active==="home"?"bold":"normal"}}
      >Home
      </Link>&nbsp;
      <Link to="/about" className='ab' style={{fontWeight:active==="about"?"bold":"normal"}}
       ><NotebookPen className='icon'/>About
       </Link>&nbsp;
      <Link to="/contact" className='ab' style={{fontWeight:active==="contact"?"bold":"normal"}}
      ><PhoneCall className='icon'/>Contact
      </Link>&nbsp;
      <Link to="/ourservices" className='ab' style={{fontWeight:active==="ourservices"?"bold":"normal"}} >
     <HeartHandshake className='icon'/> OurServices</Link>&nbsp;
      
    </div>
  )
}

export default Navbar
