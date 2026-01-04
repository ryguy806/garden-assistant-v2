const PlantTypeModule = (plantType = "") => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Plant Type: {plantType}
        </div>
    )
}

export default PlantTypeModule;