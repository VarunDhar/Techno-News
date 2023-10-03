import React, { useContext, useEffect } from 'react'

import { Header } from './Components/Header';
import { Blogs } from './Components/Blogs';
import { Footer } from './Components/Footer';
import { AppContext } from './Context/AppContext';
import { Loader } from './Components/Loader';
export const App = () => {

  const {setValues,isLoading} = useContext(AppContext);
  useEffect(()=>{
    console.log("inside useeffect");
    setValues();
  },[]);
  
  
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-x-1">
      {!isLoading?(<div><Header />
      <Blogs />
      <Footer /></div>):(<Loader />) 
      }
    </div>
  )
}

export default App