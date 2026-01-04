type PlantNamesModuleProps = {
    plantName: string;
    scientificName: string;
}

const PlantNamesModule = ({ plantName = "", scientificName = "" }: PlantNamesModuleProps) => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Plant Names: {plantName}, Scientific Name: <i>{scientificName}</i>
        </div>
    )
}

export default PlantNamesModule;