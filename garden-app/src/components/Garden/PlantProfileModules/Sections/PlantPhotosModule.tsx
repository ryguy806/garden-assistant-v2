type PlantPhotosModuleProps = {
    plantPhotos: string[];
}

const PlantPhotosModule = ({ plantPhotos }: PlantPhotosModuleProps) => {
    return (
        <div className='flex text-3xl font-bold bg-blue-300 items-center'>
            Photos: {plantPhotos}
        </div>
    )
}

export default PlantPhotosModule;