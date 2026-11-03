import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';
import { PerenualIndividualPlantDataType } from '../../api/newApi';

export type PlantProfileProps = {
    plantProfile: PerenualIndividualPlantDataType
}

const PlantProfileQuickFacts = ({plantProfile}: PlantProfileProps) => {
    return (
        <>
            <div className='flex flex-row h-auto justify-between content-center'>
                <span className="flex w-7/12 flex-grow">
                    <PlantProfileLeftSegment description={plantProfile.data.description}/>
                </span>
                <PlantProfileCenterSegment 
                    image_url={plantProfile.data.default_image}
                    soil={plantProfile.data.soil}
                    light={plantProfile.data.sunlight} 
                    watering={plantProfile.data.watering} 
                    hardiness={plantProfile.data.hardiness}
                    maintenance={plantProfile.data.maintenance}
                />
                <PlantProfileRightSegment 
                    commonName={plantProfile.data.common_name ? plantProfile.data.common_name : plantProfile.data.scientific_name} 
                    scientificName={plantProfile.data.scientific_name} 
                    growth_habit={plantProfile.data.type} 
                    duration={plantProfile.data.cycle}
                    dimensions={plantProfile.data.dimensions}
                    growth_rate={plantProfile.data.growth_rate}
                    attracts={plantProfile.data.attracts}
                    pest_susceptibility={plantProfile.data.pest_susceptibility}
                    flowering_season={plantProfile.data.flowering_season}
                />
            </div>
        </>
    );
}

export default PlantProfileQuickFacts;