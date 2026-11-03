import { Cloud, CloudSun, Cloudy, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantLightModuleProps = {
    light: string | null;
}

const PlantLightModule = ({ light }: PlantLightModuleProps) => {

    const [lightIcon, setLightIcon] = useState(<Sun/>)

    useEffect(() => {
        switch (light) {
            case "full shade": setLightIcon(<Cloudy size={30}/>);
            break;
            case "part shade": setLightIcon(<Cloud size={30}/>);
            break;
            case "sun part shade": setLightIcon(<CloudSun size={30}/>);
            break;
            default: setLightIcon(<Sun size={30} color="#cab602"/>);
        }
    }, [])

    return (
        <div className='flex flex-row w-1/2 text-2xl rounded-lg items-center px-auto border-black border-2 p-2'>
            {light !== null ? (
                <div className="flex mx-auto space-x-7">
                    <div >{toSentenceCase(light)}</div>
                    <div className="m-auto">{lightIcon}</div>
                </div>
            ): (
                <p><i>no light data</i></p>
                )
            }       
        </div>
    )
}

export default PlantLightModule;

