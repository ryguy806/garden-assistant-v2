import HardinessModule from "../PlantProfileModules/Sections/HardinessModule";
import PlantLightModule from "../PlantProfileModules/Sections/PlantLightModule";
import PlantPhotosModule from "../PlantProfileModules/Sections/PlantPhotosModule";
import WateringModule from "../PlantProfileModules/Sections/WateringModule";
import SingleDataCard from '../PlantProfileModules/Components/ProfileComponents/SingleDataCard'
import HalfDataCard from "../PlantProfileModules/Components/ProfileComponents/HalfDataCard";
import ListCard from "../PlantProfileModules/Components/ProfileComponents/ListCard";

type PlantProfileCenterProps = {
    image_url: string,
    hardiness: {
        min: number,
        max: number
    },
    soil: string,
    light: string,
    watering: string,
    maintenance: string
}

const PlantProfileCenterSegment = ({image_url, hardiness, soil, watering, light, maintenance}: PlantProfileCenterProps) => {
    return (
        <div className='flex w-1/2 flex-col h-full mx-4 justify-between'>
            <PlantPhotosModule image_url={image_url}/>
            <div className="flex flex-col space-y-3 mt-4">
                <div className="flex flex-row w-full space-x-3">
                    <HardinessModule plantHardiness={hardiness} />
                    <PlantLightModule light={light} />
                </div>
                <div className="flex flex-row w-full space-x-3">
                    <ListCard title="Soil" list={soil.split(" ")} single={soil} />
                    <WateringModule plantWatering={watering} />
                </div>
                <div className="flex flex-row w-full space-x-3">
                   <SingleDataCard title="Maintenance Level" data={maintenance}/>
                </div>
            </div>
        </div>
    )
}

export default PlantProfileCenterSegment;