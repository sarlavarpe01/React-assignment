
import { createRoot } from 'react-dom/client'
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Views/Home';
import About from './Views/About';
import Contact from './Views/Contact';
import OurServices from './Views/OurServices';





const root=createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/ourservices" element={<OurServices/>}/>

    </Routes>
    </BrowserRouter>
)