import { toSentenceCase } from "../../../../pages/Journal/JournalView";

type PlantGroupModuleProps = {
    plantGroup: string;
}

const PlantGroupModule = ({ plantGroup }: PlantGroupModuleProps) => {
    return (
        <div className='flex text-2xl item-start justify-center border-black border-2 p-4'>
            {plantGroup === "" ? (<p><i>growth habit unavailable</i></p>) : toSentenceCase(plantGroup)}
        </div>
    )
}

export default PlantGroupModule;