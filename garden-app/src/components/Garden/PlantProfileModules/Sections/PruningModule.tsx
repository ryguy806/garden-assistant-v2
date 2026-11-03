import { Scissors } from "lucide-react";

type PruningModuleProps = {
    pruning_months: string[];
}

const PruningModule = ({ pruning_months }: PruningModuleProps) => {
    return (
        <>
            <div className='flex flex-row text-xl h-7/8 w-1/2 font-normal items-start border-black border-2 p-2'>
                <div className="font-bold flex flex-row text-2xl"><Scissors size={30}/> Month:</div>
                <div className="m-auto">{pruning_months ? pruning_months.map((item) => (
                    <p key={item}>{item}</p>
                )) : "No Pruning preference data available"}</div>
            </div>
        </>
    )
}

export default PruningModule;