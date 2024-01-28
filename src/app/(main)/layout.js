"use client"
import { createContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getMyInfo } from "../controllers/user_controller";
import Loader from "../components/loader";
export const UserContext = createContext()
const Page = ({children}) => {
    const [userDetails, setUserDetails] = useState(null);
    const [loader, setLoader] = useState(false);
    useEffect(() => {
     setLoader(true)
      getMyInfo().then((data)=>{
       setUserDetails(data)
       setLoader(false)
      })
    }, []);
    return ( loader?<Loader/>: <div>
        <UserContext.Provider value={{ userDetails,setUserDetails }}>
        <Navbar/>
        <div className="pt-24">
        {children}

        </div>
        </UserContext.Provider>
        

    </div> );
}
 
export default Page;