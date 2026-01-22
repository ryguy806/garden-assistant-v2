type DescriptionModuleProps = {
    plantDescription: string;
}

const DescriptionModule = ({ plantDescription = "" }: DescriptionModuleProps) => {
    return (
        <div className='flex flex-grow flex-col text-2xl h-7/8 font-bold items-start border-black border-2 p-4'>
            <div>Description:</div>
            <div className="text-md font-normal"><p>{plantDescription}</p></div>
        </div>
    )
}

export default DescriptionModule;