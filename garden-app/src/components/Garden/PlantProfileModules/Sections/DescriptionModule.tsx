const DescriptionModule = (plantDescription = "") => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Description: {plantDescription}
        </div>
    )
}

export default DescriptionModule;