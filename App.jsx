//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import React from "react"; 
import FunctionalComp from './Components/FunctionalComp'
import { ClassComp, ClassComp1 } from "./Components/ClassComp"
import Click from "./Components/Click";
import Counter from "./Components/Counter";
import ParentComp from "./Components/ParentComp";
function App() {


  return (
  <div>
     <h1>Hello Welcome to Geeta University</h1>
     <h2>This video is Functional Component </h2>
     <FunctionalComp></FunctionalComp>
     <ClassComp/>
     <ClassComp1/>
     <Click/>
     <Counter/>
     <ParentComp/>
     </div>
  )
}

export default App
