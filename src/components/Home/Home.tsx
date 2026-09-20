import women from "../../assets/home.png"
import {ReactTyped} from "react-typed"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export default function Home(){

    useGSAP(() => {
        let tl1 = gsap.timeline()
        tl1.from("#home .leftHome .line1", {y:80, duration:1, opacity:0})
        tl1.from("#home .leftHome .line2", {y:80, duration:1, opacity:0})
        tl1.from("#home .leftHome .line3", {y:80, duration:1, opacity:0})
        tl1.from("#home .rightHome img", {x:150, duration:0.6, opacity:0})
    },[])


    return <div id="home" className="w-full h-screen min-h-screen flex bg-amber-700 overflow-hidden">
        <div className="leftHome w-[50%] h-screen flex justify-center items-center">
            <div className="text-white">
                <h1 className="line1 text-[0.8em]">I'M</h1>
                <h1 className="line2 text-[3em] bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">JAWERIA</h1>
                
                <h1 className="line3 text-[1.2em]">
                    <ReactTyped 
                    strings={["AI Developer","Full Stack Developer"]} typeSpeed={80} backSpeed={80} loop
                    cursorChar="|" />
                </h1>

                <button className="px-[18px] py-[5px] text-black border-2 border-solid border-[#42b4cd]">HIRE ME</button>
            </div>
        </div>
        <div className="rightHome w-[50%] flex justify-center items-center">
            <img src={women} alt="" className="w-[50%]" />
        </div>
    </div>
}