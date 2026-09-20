type CardProps = {
    title: string;
    img: string;
}



export default function Card({title, img}: CardProps){
    return <div>
        <div className="card">
            <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">{title}</h1>
            <div className="hovercard ">
                <img src={img} alt="" className="" />
            </div>
        </div>
    </div>
}