import Card from "../Card/Card";
import todo from "../../assets/todo.png"
import food_project from "../../assets/food_project.png"
import plant_project from "../../assets/crosby.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)


export default function Projects(){

    useGSAP(() => {
        gsap.from("#projects h1", {y:100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: "#projects h1", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)

         gsap.from("#projects .slider", {y:100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: "#projects .slider", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)
    })

    return <div id="projects" className="w-full h-screen flex items-center justify-center flex-col gap-7 bg-red-800 overflow-hidden">
        <h1 className="bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent text-4xl font-semibold pt-16 text-center px-2">1 YEAR EXPERIENCED IN PROJECTS</h1>
        <div className="slider flex ">
            <Card title={"Todo AI App"} img={todo} />
            <Card title={"Food Menu Website"} img={food_project} />
            <Card title={"Plants"} img={plant_project} />
            <Card title={"Plants"} img={plant_project} />
            <Card title={"Plants"} img={plant_project} />
        </div>
    </div>
}