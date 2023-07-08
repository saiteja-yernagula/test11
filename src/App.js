import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import Todo from './Todo';
import Newcom from './Newcom';

import Pixabay from './Pixabay';
import Search from './Search';






function App(){
  return (
    <>
    
    
    <div>
    <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<Newcom/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/gallery' element={<Pixabay/>}/>
            <Route path='/gallery/search/:gdata' element={<Search/>}/>


            


         </Routes>
    </BrowserRouter>
    </div>
    </>
    
  )
}

export default App
