import { createContext, useState } from "react"

const MenuContext = createContext();
const MenuProvider = ({children}) => {
    const [firstLetter, setFirstLetter] = useState();
    const [dataMeal, setDataMeal] = useState();
    const [url, setUrl] = useState();
    const [urlMeal, setUrlMeal] = useState();


    const handleInputLetter = (e) => {
        let input = e.target;
        setFirstLetter(input.value.toLowerCase());
    }
    const handleDataMeal = (data) => {setDataMeal(data)}
    const handleUrl = (u) => {setUrl(u)}
    const handleUrlMeal = (u) => {setUrlMeal(u)}

    const data = {
        firstLetter,
        dataMeal,
        urlMeal,
        url,
        handleUrl,
        handleDataMeal,
        handleUrlMeal,
        handleInputLetter
    };

  return <MenuContext.Provider value={data}>{children}</MenuContext.Provider>
}
export {MenuProvider};
export default MenuContext;