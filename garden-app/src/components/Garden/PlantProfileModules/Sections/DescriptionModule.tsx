type DescriptionModuleProps = {
    plantDescription: string;
}

const DescriptionModule = ({ plantDescription = "" }: DescriptionModuleProps) => {
    return (
        <div className='flex flex-col text-3xl font-bold bg-blue-300 items-center'>
            <div>Description:</div>
            <div className="text-md font-normal">{plantDescription}</div>
        </div>
    )
}

export default DescriptionModule;