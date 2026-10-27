import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"

export default function Footer(){
    return <div className="w-full h-[100px] flex justify-center items-center">
        <div className="w-[40%] md:w-[12%] h-[55%] flex justify-center border-3 border-gray-600 items-center rounded-full gap-4 bg-cyan-500">
            <a href="www.linkedin.com/in/jaweria-a5725b287"><img src={linkedin} alt="" className="w-[40px] hover:w-[50px]"/></a>
            <a href="https://github.com/Jaweria-jiya"><img src={github} alt="" className="w-[40px] hover:w-[50px]" /></a>
        </div>
    </div>
}