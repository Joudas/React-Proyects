import React, {useState} from 'react'
import { MenuProvider } from '../Context/MenuContext'
import { Menu } from './Menu';
import "../Css/style.css";
import { DetailMeal } from './DetailMeal';


export const HandlePages = () => {
    const [page, setPage] = useState("menu");
    const handlePage = (pag) => {
        setPage(pag);
    }

  return (
    <>
      <MenuProvider>
        <main>
          {page=="menu" && <Menu handlePage={handlePage}/>}
          {page=="detail" && <DetailMeal handlePage={handlePage}/>}
        </main>
      </MenuProvider>
    </>
  )
}
