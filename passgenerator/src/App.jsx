import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Pass from '../Pass'
import PopUp from './PopUp'
import API_delOp from './API_delOp'
import CardComponent from './CardComponent'
import DataApi from './DataApi'
import Pagination from './Pagination'

function App() {
  
  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // useEffect(() => {
  //   setIsPopupOpen(true);
  // }, []);

  // const closePopup = () => {
  //   setIsPopupOpen(false);
  // };
  return (
    <>
      { <Pass/> }

      {/* <API_delOp/> */}
      {/* <useFetch/> */}
      {/* <DataApi/> */}
       {/* <CardComponent/> */}
       {/*<Pagination/>*/}
      {/* <PopUp isOpen={isPopupOpen} onClose={closePopup}/> */}
    </>
  )
}

export default App
