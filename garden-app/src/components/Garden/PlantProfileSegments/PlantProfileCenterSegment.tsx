import PlantPhotosModule from "../PlantProfileModules/Sections/PlantPhotosModule";

type PlantProfilePhotoProps = {
    plantPhotos: string[];
}

const PlantProfileCenterSegment = ({plantPhotos}: PlantProfilePhotoProps) => {

    return (
        <div className='flex w-1/2 flex-col h-full'>
            <PlantPhotosModule plantPhotos={plantPhotos}/>
        </div>
    )
}

export default PlantProfileCenterSegment;