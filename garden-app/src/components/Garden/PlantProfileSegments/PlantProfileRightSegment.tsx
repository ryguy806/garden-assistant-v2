import PlantNamesModule from "../PlantProfileModules/Sections/PlantNamesModule";
import DimensionsModule from "../PlantProfileModules/Sections/DimensionsModule";
import ListCard from "../PlantProfileModules/Components/ProfileComponents/ListCard";
import DynamicTextCard from '../PlantProfileModules/Components/ProfileComponents/DynamicTextCard'
import SingleDataCard from '../PlantProfileModules/Components/ProfileComponents/SingleDataCard'
import HalfDataCard from "../PlantProfileModules/Components/ProfileComponents/HalfDataCard";

type PlantProfileRightSegmentProps = {
    commonName: string;
    scientificName: string;
    duration: string;
    growth_habit: string;
    dimensions: {
        type: string | null,
        min_value: number,
        max_value: number,
        unit: string
    }[],
    flowering_season: string,
    growth_rate: string,
    pest_susceptibility: string[],
    attracts: string[],
}

const PlantProfileRightSegment = ({ 
    commonName, 
    scientificName, 
    duration, 
    growth_habit, 
    dimensions, 
    growth_rate,
    pest_susceptibility,
    attracts,
    flowering_season,
 }: PlantProfileRightSegmentProps) => {

    return (
        <div className='flex w-1/2 flex-col h-full justify-between'>
            <PlantNamesModule plantName={commonName} scientificName={scientificName} />
            <div className="flex flex-col space-y-3">
                <div className="flex flex-row w-full gap-3 space-x-3">
                    <DynamicTextCard text={duration}/>
                    <DynamicTextCard text={growth_habit}/>
                </div>
                <div className="flex flex-row w-full space-x-3">
                    <DimensionsModule plantDimensions={dimensions} />
                    <HalfDataCard title="Flowers in" data={flowering_season}/>
                </div>
                <div className="flex flex-row w-full space-x-3">
                    <div className="flex flex-col w-full space-y-3">
                        <SingleDataCard title="Growth Rate" data={growth_rate}/>
                        <ListCard title="Attracts" list={attracts} single={"No data."}/>
                    </div>  
                    <div className="w-full h-full">
                        <ListCard title="Pests" list={pest_susceptibility} single={"No data."}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantProfileRightSegment;
