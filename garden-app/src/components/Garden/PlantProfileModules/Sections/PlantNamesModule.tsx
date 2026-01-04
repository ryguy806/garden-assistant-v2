const PlantNamesModule = (plantName = "", scientificName = "") => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Plant Names: {plantName}, Scientific Name: {scientificName}
        </div>
    )
}

export default PlantNamesModule;