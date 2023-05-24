import './App.css';
import { useState } from "react";
import phom1 from './images/main3.jpg';
import phom2 from './images/Alt3.jpg';
import phom3 from './images/Alt1.jpg';
import phom4 from './images/main2.jpg';
import phom5 from './images/Alt4.jpg';

import {Menu1, Menu2, Menu3,} from './Menu.js';

function App() {
  const [menu, setmenu] = useState("0")
  const menuHeaders = ["empty", "Aarayes", "Salad", "Hot & Cold Drinks", "Korean Chicken", "Sushi & Poke", "Sides"]
  return (
    <div>
      <div className="App-Section">
        <div className="App-SectionC" >
        <img
            className="mainbackground-image"
            src={phom1}
            alt="Background"
        />
        <div className="content-container">
          <div>
            <h1 className="center-logo">Welcome to</h1>
            <h1 className="center-logo"> Aarayes El Hamra</h1>
          </div>
        </div>

        </div>
      </div>
      <div className="App-Section">
        <div className="App-SectionC"  >
        <img
            className="mainbackground-image two"
            src={phom2}
            alt="Background"
        />
        <img
            className="mainbackground-image two"
            src={phom3}
            alt="Background"
        />
        <div className="content-container">
          <div style={{width: '100%'}}>
            <h1 className="center-logo menu">Explore The Menu</h1>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(1)}}> Aarayes </button>
              <button className="menubutton" onClick={(event) => {setmenu(2)}}> Salad </button>
            </div>
            <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(3)}}> Hot & Cold Drinks </button>
              {/* <button className="menubutton" onClick={(event) => {setmenu(4)}}> Korean Chicken </button> */}
            </div>
            {/* <div className="menubutton-section">
              <button className="menubutton" onClick={(event) => {setmenu(5)}}> Sushi & Poke </button>
              <button className="menubutton"onClick={(event) => {setmenu(6)}}> Side Dishes </button>
            </div> */}
            <br></br>
          </div>
        </div>
        </div>
      </div>
      { menu > 0 && <div style={{backgroundColor: 'antiquewhite'}}>
        <div></div>
        <h1 className='center-logo sub'>{menuHeaders[menu]}</h1>
        <div className="Menu-Section" style={{}}>
          {menu === 1 && Menu1.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 2 && Menu2.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 3 && Menu3.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {/* {menu === 4 && Menu4.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 5 && Menu5.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})}
          {menu === 6 && Menu6.map((item) => {return <div className="menu-item"><div style={{display: 'flex', position: 'relative'}}><p className='menu-item-name'>{item.name}</p><p className='menu-item-price'>- ${item.price}</p> {item.hot === true && <p></p>} </div></div>})} */}
        </div>
      </div>}
      <div className="App-Section info">
        <br></br>
        <br></br>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "center"}}>
          <div className="InfoSection">
            <br></br>
            <img
            className="info-image"
            src={phom4}
            alt="Background"
            />
            <b>
              <p>Open Daily Except Sunday</p> 	
              <p>10:00 AM - 8:00 PM</p> 
            </b>
              <p>*Holiday Hours May Differ</p>
          </div>
          <div className="InfoSection">
            <img
            className="info-image"
            src={phom5}
            alt="Background"
            />
            <b>
              <p>Contact:</p> 	
              <p>Phone: (70)000-000 </p> 
            </b>
            {/* <a href="https://www.doordash.com/store/u-dupbop-seattle-1034523/" target="_blank" rel="noopener noreferrer"><button className="orderButton">Order Online</button></a> */}
          </div>
          <div className="InfoSection">
            <br></br>
            <iframe title="Location"className="info-image" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.692197099121!2d35.4768201!3d33.8965475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f172c4ca9da23%3A0xba771b82098cbe8b!2sArayes%20El%20Hamra!5e0!3m2!1sen!2sus!4v1621269299111!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <b>
              <p>Makdessi street, </p> 
              <p>Antoun Jemeyel Side Street</p>
              <p>Across from Edison roastety</p>
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
