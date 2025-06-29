import { Link } from "./Link";

export default function PorcelainPage(){
  return(
    <>
      <div className="container">
        <h2>Te encuentras en la sección sobre nosotros, qué quieres saber acerca de esta pagina?</h2>
        <h4>Esta es la pagina porcelana</h4>
        
        <img src="/OIP.jpg" alt="Porcelain Irelia" style={{width:"20rem", borderRadius:"50%"}}/>
        <br />
                <Link to="/">Ir al home</Link>     
           
      </div>
    </>
  )
}