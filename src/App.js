import React from "react";
import Navbar from "./component/NavBar/NavBar";
import {action,originals,romance,horror,comedy,documentary} from './urls'
import "./App.css"
import Banner from "./component/Banner/Banners";
import RowPost from "./component/RowPost/RowPost";

export function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={originals} title="Netflix Originals"/>
        <RowPost url={action} title="Action" isSmall/>
        <RowPost url={romance} title="Romance" isSmall/>
        <RowPost url={horror} title="Horror" isSmall/>
        <RowPost url={comedy} title="Comedy" isSmall/>
        <RowPost url={documentary} title="Documentary" isSmall/>
        
    </div>
  );
}

export default App
