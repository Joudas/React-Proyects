import { Link } from "./Link";
 
export default function HomePage(){
  return(
    <>
      <div className="container">
        <h2>Hola, bienvenido, esta es la sección del home</h2>   
        <Link to="/porcelain">Ir a los aspectos porcentail</Link>     
      </div>
    </>
  )
}