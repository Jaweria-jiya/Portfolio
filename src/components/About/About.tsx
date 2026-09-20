import Card from "../Card/Card";
import stack from "../../assets/stack.png"
import py from "../../assets/python.png"
import react from "../../assets/react.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)

export default function About(){

    useGSAP(() => {
        gsap.from(".circle", {x:-100, duration:1, opacity:0, stagger:1, scrollTrigger:{trigger: ".circle", scroller: "body", scrub: 2, 
            start: "top 60%", end: "top 30%"
        }},)

         gsap.from(".line", {x:-100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: ".line", scroller: "body", scrub: 2,
            start: "top 60%", end: "top 30%"
        }},)

        gsap.from(".aboutdetails h1", {x:-100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: ".aboutdetails h1", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)

        gsap.from(".aboutdetails ul", {y:100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: ".aboutdetails ul", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)

        gsap.from(".rightabout", {x:100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: ".rightabout", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)
    })

    return <div id="about" className="w-full h-screen flex bg-purple-800 overflow-hidden">
        <div className="leftabout w-[50%] flex items-center justify-center gap-[40px]">
            <div className="circle-line flex flex-col items-center">
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
                <div className="line"></div>
                <div className="circle"></div>
            </div>
            <div className="aboutdetails flex gap-[50px] flex-col">
                <div className="personalInfo">
                    <h1 className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent text-2xl font-semibold">Personal Info</h1>
                    <ul>
                        <li><span>NAME</span>: JAWERIA</li>
                        <li><span>AGE</span>: 23 YEARS</li>
                        <li><span>GENDER</span>: FEMALE</li>
                        <li><span>LANGUAGE KNOWN</span>: URDU , ENGLISH</li>
                    </ul>
                </div>
                <div className="education">
                    <h1 className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent text-2xl font-semibold">Education</h1>
                    <ul>
                        <li>Intermediate</li>
                        <li>IT course</li>
                    </ul>
                </div>
                <div className="skill">
                    <h1 className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent text-2xl font-semibold">Skills</h1>
                    <ul>
                        <li>FULL STACK DEVELOPER</li>
                        <li>Python</li>
                        <li>typescript</li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="rightabout w-[50%] h-screen flex items-center justify-center flex-col gap-3">
            <Card title={"Full Stack Developer"} img={stack} />
            <Card title={"Python"} img={py} />
            <Card title={"Reactjs"} img={react} />
        </div>
    </div>
}