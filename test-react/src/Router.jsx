import { useState, useEffect } from "react";
import { Events } from "./Event";
import { match } from "path-to-regexp";

  // eslint-disable-next-line no-unused-vars
export function Router({routes = [], defaultComponent: DefaultComponent = () =>  <h2>404</h2>}){
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    };

    window.addEventListener(Events.PUSHTATE, onLocationChange);
    window.addEventListener(Events.POPSTATE, onLocationChange);

    return () => {
      window.removeEventListener(Events.PUSHTATE, onLocationChange);
      window.removeEventListener(Events.POPSTATE, onLocationChange);
    }
  }, []);

  let routeParams = {};

    //Detectar rutas dinamicas con path-to-regexp
    // /search/:query
  const Page = routes.find(({path}) => {
    if(path === currentPath) return true;
    console.log(path);
    const matcherURL = match(path, {decode: decodeURIComponent});
    const matched = matcherURL(currentPath);
    console.log(matched);
    if(!matched) return false;

    //Guarda los parametros dinamicos con path-to-regexp
    // /search/:query
    // /search/javascript
    // routeParams.query = javascript
    routeParams = matched.params;
    return true;
    })?.Component
  return Page ? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams}/>
}