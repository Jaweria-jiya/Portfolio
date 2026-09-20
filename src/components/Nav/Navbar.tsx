import { useRef } from 'react'
import {Link} from 'react-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Navbar(){

    let menu = useRef<HTMLDivElement>(null)
    let mobile = useRef<HTMLUListElement>(null)

    useGSAP(() => {
        let tl = gsap.timeline()
        tl.from("nav h1",
            {y:-100,duration:1, opacity:0})

        tl.from("nav ul li",
            {y:-100, duration:0.8, opacity:0, stagger:1})
    })

    return <nav className="flex justify-between items-center w-full h-[80px] p-10 box-border top-0 fixed z-[20]">
        <h1 className="capitalize font-semibold text-3xl bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
            portfolio
        </h1>

        <ul className="desktopmenu flex items-center justify-center gap-[20px] text-white cursor-pointer">
            <Link to="home" smooth={true}  duration={550}  activeClass="active" spy={true}><li>Home</li></Link>
            <Link to="about" smooth={true}  duration={550} activeClass="active" spy={true}><li>About</li></Link>
            <Link to="projects" smooth={true} duration={550}  activeClass="active" spy={true}><li>Project</li></Link>
            <Link to="contact" smooth={true} duration={550}  activeClass="active" spy={true}><li>Contact</li></Link>
        </ul>

        <div className="hamburger cursor-pointer" ref={menu} onClick={() => {
            mobile.current?.classList.toggle("activemobile")
            menu.current?.classList.toggle("activeham")
        }}>
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
        </div>

        <ul ref={mobile} className="mobilemenu flex items-center justify-center gap-[20px] text-white cursor-pointer">
            <Link to="home" smooth={true}  duration={550}  activeClass="active" spy={true}><li>Home</li></Link>
            <Link to="about" smooth={true}  duration={550} activeClass="active" spy={true}><li>About</li></Link>
            <Link to="projects" smooth={true} duration={550}  activeClass="active" spy={true}><li>Project</li></Link>
            <Link to="contact" smooth={true} duration={550}  activeClass="active" spy={true}><li>Contact</li></Link>
        </ul>
    </nav>
}