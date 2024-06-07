import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";


export default function ShowNav({children}) {
    const pathsToHide = ['/login', '/register', '/forgot-password', '/reset-password', '/new-password'];
    const [show,setShow]=useState(false);
    const location = useLocation();

    useEffect(()=>{
        if (pathsToHide.includes(location?.pathname)) {
            setShow(false);
          } else {
            setShow(true);
          }
    },[location])

  return (
    <div>{show && children}</div>
  )
}
