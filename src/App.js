import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Todo from './Todo';
import Newcom from './Newcom';



function App (){
  return (
    <>
    
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Newcom/>}/>
            <Route path='/todo' element={<Todo/>}/>
            


         </Routes>
    </BrowserRouter>
    </div>
    </>
    
  )
}

export default App
