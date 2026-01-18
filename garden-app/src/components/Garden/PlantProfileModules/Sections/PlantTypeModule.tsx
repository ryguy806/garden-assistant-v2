import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantTypeModuleProps = {
    plantType: string;
}

const PlantTypeModule = ({ plantType = "" }: PlantTypeModuleProps) => {

    return (
        <div className='flex text-3xl justify-center border-black border-2 p-4'>
            {toSentenceCase(plantType)}
        </div>
    )
}

export default PlantTypeModule;