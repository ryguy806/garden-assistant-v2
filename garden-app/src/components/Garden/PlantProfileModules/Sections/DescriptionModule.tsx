type DescriptionModuleProps = {
    plantDescription: string;
}

const DescriptionModule = ({ plantDescription = "" }: DescriptionModuleProps) => {
    return (
        <div className='flex flex-grow flex-col text-xl h-7/8 rounded-lg font-bold items-start border-black border-2 p-4'>
            <div>Description:</div>
            <div className="text-lg font-normal mb-3"><p>{plantDescription}</p></div>
        </div>
    )
}

export default DescriptionModule;