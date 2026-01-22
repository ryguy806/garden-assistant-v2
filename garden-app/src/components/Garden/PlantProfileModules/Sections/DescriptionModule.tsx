type DescriptionModuleProps = {
    plantDescription: string;
}

const DescriptionModule = ({ plantDescription = "" }: DescriptionModuleProps) => {
    return (
        <div className='flex flex-col text-2xl overflow-y-auto font-bold items-start border-black border-2 p-4'>
            <div>Description:</div>
            <div className="text-md font-normal"><p>{plantDescription}</p></div>
        </div>
    )
}

export default DescriptionModule;