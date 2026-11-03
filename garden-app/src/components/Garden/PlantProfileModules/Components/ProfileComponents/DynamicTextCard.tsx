import { useEffect, useState } from "react";
import { toSentenceCase } from "../../../../../pages/Journal/JournalView";

type DynamicTextCardProps = {
    text: string;
}

const DynamicTextCard = ({ text }: DynamicTextCardProps) => {

    const [textSize, setTextSize] = useState("text-2xl")
        
        useEffect(() => {
            if (text.length <= 10) {
                setTextSize("text-xl")
            }
            if (text.length > 10 && text.length <=19) {
                setTextSize("text-lg")
            }
            if (text.length > 19) {
                setTextSize("text-md")
            }
        }, [])

    return (
        <div className={`flex w-1/2 h-7/8 font-bold justify-center mx-auto border-black rounded-lg border-2 `}>
            {text === "" ? (<p>No data.</p>) : (<p className={`${textSize} m-auto p-2 text-center`}>{toSentenceCase(text)}</p>)}
        </div>
    )
}

export default DynamicTextCard;