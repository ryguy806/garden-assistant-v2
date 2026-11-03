import { Droplets, Ban } from "lucide-react";
import { useEffect, useState } from 'react'

type WateringModuleProps = {
    plantWatering: string;
}

const WateringModule = ({ plantWatering = "No watering information provided." }: WateringModuleProps) => {

    const [wateringData, setWateringData] = useState(<></>);

    useEffect(() => {
        switch (plantWatering.toLowerCase()) {
            case "none": 
                setWateringData(<Ban size={40} color="#ff0000"/>);
                break;
            case "minimum": 
                setWateringData(<div className="flex flex-row">
                    <Droplets size={30} color="#4e97d0"/>
                </div>);
                break;
            case "average": 
                setWateringData(<div className="flex flex-row">
                    <Droplets size={30} color="#4e97d0"/>
                    <Droplets size={30} color="#4e97d0"/>
                </div>);
                break;
            case "frequent": 
                setWateringData(<div className="flex flex-row">
                    <Droplets size={25} color="#4e97d0"/>
                    <Droplets size={25} color="#4e97d0"/>
                    <Droplets size={25} color="#4e97d0"/>
                </div>);
                break;
            default: setWateringData(<>{plantWatering}</>)
        }
    }, [])

    return (
        <div className='flex flex-row w-full rounded-lg items-start border-black border-2 p-2'>
            <div className="flex flex-row m-auto space-x-2 text-2xl">
                <div className="flex">{plantWatering == "Minimum" ? "Minimal" : plantWatering}</div><div className="flex mx-auto my-auto">{wateringData}</div>
            </div>
        </div>
    )
}

export default WateringModule;