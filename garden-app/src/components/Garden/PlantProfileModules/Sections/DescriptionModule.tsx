type DescriptionModuleProps = {
    plantDescription: string;
}

const DescriptionModule = ({ plantDescription = "" }: DescriptionModuleProps) => {
    return (
        <div className='flex flex-col text-3xl font-bold items-center'>
            <div>Description:</div>
            <div className="text-md font-normal"><p>This is the description of the plant</p></div>
        </div>
    )
}

export default DescriptionModule;