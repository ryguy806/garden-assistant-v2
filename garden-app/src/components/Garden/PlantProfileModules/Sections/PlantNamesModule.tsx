import { useState, useEffect } from "react";
import { capitalizeWords } from "../../../../pages/Journal/JournalView";

type PlantNamesModuleProps = {
    plantName: string;
    scientificName: string;
}

const PlantNamesModule = ({ plantName = "", scientificName = "" }: PlantNamesModuleProps) => {

    const [textNameSize, setTextNameSize] = useState("")
    const [textSciSize, setTextSciSize] = useState("")
            
    useEffect(() => {
        if (plantName.length <= 18) setTextNameSize("text-3xl")
        if (scientificName.length <= 20) setTextSciSize("text-2xl")
        if (plantName.length > 18 && plantName.length <=28) setTextNameSize("text-2xl pt-1")
        if (scientificName.length > 20 && scientificName.length <= 35) setTextSciSize("text-xl pt-1")
        if (plantName.length > 28) setTextNameSize("text-xl pt-2")
        if (scientificName.length > 35) setTextSciSize("text-lg pt-2")
    }, [])

    return (
        <div className="relative w-full z-10">
            <div className="relative w-[75%] h-auto mx-auto aspect-square -rotate-[70deg] bg-[#687e1165] flex items-center justify-center pb-4"
                style={{ borderRadius: "0 75% 0 75%" }}
            >
                 <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ overflow: "hidden", borderRadius: "inherit" }}
                >
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" strokeOpacity="0.6" />
                    </svg>
                </div>
                <div className="rotate-[70deg] flex flex-col justify-center text-center pt-3 pl-3">
                    <div className={`${textNameSize} font-bold`}>{capitalizeWords(plantName)}</div>
                    <div className={`${textSciSize} font-normal`}><i>{scientificName}</i></div>
                </div>            
            </div>
        </div>
    )
}


export default PlantNamesModule;