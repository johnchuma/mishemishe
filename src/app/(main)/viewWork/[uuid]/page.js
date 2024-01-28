"use client"
import { useEffect, useState } from "react";
import {getWorkDetails} from "../../../controllers/work_controller"
import Loader from "../../../components/loader"
import Image from "next/image"
const Page = ({params}) => {
    const uuid = params.uuid;
    const [work, setwork] = useState(null);
    const [loading, setloading] = useState(true);
    useEffect(() => {
     getWorkDetails(uuid).then((data)=>{
        setwork(data)
        setloading(false)
     })
        
    }, []);
    return ( loading?<Loader/>:<div className=" bg-slate-100 min-h-screen px-3 md:px-12 py-6 md:py-12">
        <div className="flex flex-col md:flex-row md:space-x-8">
             <div className=" w-full mb-4 md:w-8/12 bg-white px-3 md:px-12 py-8 rounded">
                <div className=" text-xl md:text-2xl font-bold text-slate-800">{work.title}</div>
                <div className="flex space-x-1 items-center mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                </svg>
                <div className=" font-medium text-sm opacity-70">{work.address}</div>
            </div>
       
                <div className="mt-4"><Image src={work.backgroundImage} height={300} width={300} className="w-full"/></div>
            <div className="mt-5 text-slate-800 ">{work.description}</div>
             </div>
             <div className=" w-full md:w-4/12 space-y-4 md:space-y-8  ">
                <div className="w-full bg-white px-3 md:px-12 py-8">
                    <div className="flex items-center space-x-3">
                        <input type="radio" checked className=" checked:bg-slate-800 "/>
                    <div className="font-bold">{work.startingPrice} TSH</div>

                    </div>
                    <div className="text-sm ml-7">Starting price</div>
                </div>

                <div className="w-full flex flex-col items-center bg-white px-3 md:px-12 py-4 md:py-8">
                  
                        <div><Image src={work.User.image} height={80} width={80} 
                        className="rounded-full aspect-square object-cover"/></div>
                        <div className="flex flex-col text-center space-y-1">
                   <div className="font-bold mt-4">{work.User.name} </div>
                   <div className="text-sm">{work.User.email}</div>
                   <div className="text-sm">Phone: {work.phone}</div>

             
                   </div>
                   <div className="py-3 px-4 bg-slate-800 flex justify-center text-sm text-white mt-3 w-full">Call Me</div>

                  
                </div>
             </div>

        </div>
    </div> );
}
 
export default Page;