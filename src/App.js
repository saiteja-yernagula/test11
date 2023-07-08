import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Newcom from './Newcom';
import Counter from './Counter';







function App(){
  return (
    <>
    
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Newcom/>}/>
            <Route path='/counter' element={<Counter/>}/>


         
         </Routes>
    </BrowserRouter>
    <Counter/>
    </div>
    </>
    
  )
}

export default App
