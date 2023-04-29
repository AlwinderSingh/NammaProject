import logo from './logo.svg';
import './App.css';
import NavBar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Home } from './Home';
import { BookForm } from './BookForm';
import { About } from './About';
import { Feedback } from './Feedback';
import ContactForm from './Contact';
import Popup from './Popup';

function App() {
  const [view,setView]=useState(1)
  const handleView=(view)=>{
    setView(view)
  }
  const [renderedElement,setRenderedElement]=useState(<Home />)

  useEffect(()=>{
    if(view===1){
      setRenderedElement(<Home />)
    }else if(view===2){
      setRenderedElement(<BookForm />)
    }
    else if(view===3){
      setRenderedElement(<About />)
    }
    else if(view===4){
      setRenderedElement(<Feedback />)
    }
    else if(view===5){
      setRenderedElement(<ContactForm />)
    }
    else if(view===6){
      setRenderedElement(<Popup />)
    }
  },[view])
  return (
    <div className="App">
      <NavBar setView={handleView}/>
      {renderedElement}
    </div>
  );
}

export default App;
