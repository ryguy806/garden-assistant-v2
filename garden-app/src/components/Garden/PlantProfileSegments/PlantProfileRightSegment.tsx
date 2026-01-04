import PlantGroupModule from "../PlantProfileModules/Sections/PlantGroupModule";
import PlantNamesModule from "../PlantProfileModules/Sections/PlantNamesModule";
import PlantTypeModule from "../PlantProfileModules/Sections/PlantTypeModule";

const PlantProfileRightSegment = () => {

    return (
        <div className='w-1/2'>
            <PlantNamesModule plantName="" scientificName=""/>
            <PlantGroupModule plantGroup=""/>
            <PlantTypeModule plantType=""/>
        </div>
    )
}

export default PlantProfileRightSegment;
