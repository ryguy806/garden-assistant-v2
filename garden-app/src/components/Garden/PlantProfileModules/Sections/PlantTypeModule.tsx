import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantTypeModuleProps = {
    plantType: string;
}

const PlantTypeModule = ({ plantType = "" }: PlantTypeModuleProps) => {

    return (
        <div className='flex text-3xl font-bold'>
            {toSentenceCase(plantType)}
        </div>
    )
}

export default PlantTypeModule;