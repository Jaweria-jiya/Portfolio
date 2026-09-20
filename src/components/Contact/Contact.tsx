import contact from "../../assets/contact.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)



export default function Contact(){

    useGSAP(() => {
         gsap.from("#contact .leftcontact", {x:-100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: "#contact .leftcontact", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)

         gsap.from("#contact .rightcontact", {x:100, duration:1, opacity:0, stagger:1 ,scrollTrigger:{trigger: "#contact .rightcontact", scroller: "body", scrub: 2,
            start: "top 80%", end: "top 30%"
        }},)
    })

    return <div id="contact" className="w-full min-h-screen bg-fuchsia-800 flex overflow-hidden">
        <div className="leftcontact w-[50%] h-screen flex items-center justify-center">
            <img src={contact} alt="" className="w-[65%]" />
        </div>
        <div className="rightcontact w-[50%] h-screen flex items-center justify-center">
            <form action="https://formspree.io/f/myezzqqn" method="POST" className="w-[80%] min-h-[70%] flex items-center justify-center flex-col bg-[rgb(19,25,29)] shadow-[2px_2px_10px_black,_2px_2px_10px_black] gap-6 text-white hover:shadow-[2px_2px_10px_#42b4cd,_2px_2px_10px_#42b4cd] rounded-2xl">

                <input type="text" name="UserName" placeholder="Name" className="w-[80%]
                h-[50px] border-2 border-solid border-[#42b4cd]  rounded-4xl p-5 outline-0" />

                <input type="email" name="Eamil" placeholder="Email" className="w-[80%]
                h-[50px] border-2 border-solid border-[#42b4cd]  rounded-4xl p-5 outline-0" />

                <textarea name="Message" id="textarea" placeholder="Message me" className="w-[80%]
                h-[130px] border-2 border-solid border-[#42b4cd]  rounded-4xl p-5 outline-0 resize-none"></textarea>

                <input type="submit" id="btn" value={"Submit"} className="w-[80%]
                h-[50px] border-2 border-solid border-[#42b4cd]  rounded-4xl p-5 outline-0" />
            </form>
        </div>
    </div>
}