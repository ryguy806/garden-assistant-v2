import { ImageFieldType } from "../../../api/api";
import PlantPhotosModule from "../PlantProfileModules/Sections/PlantPhotosModule";

type PlantProfilePhotoProps = {
    plantPhotos: {
        "flower": ImageFieldType[],
        "leaf": ImageFieldType[],
        "habit": ImageFieldType[],
        "fruit": ImageFieldType[],
        "bark": ImageFieldType[],
        "other": ImageFieldType[]
    },
    image_url: string | null
}

const PlantProfileCenterSegment = ({plantPhotos, image_url}: PlantProfilePhotoProps) => {
    return (
        <div className='flex w-1/2 flex-col h-full mx-4'>
            <PlantPhotosModule plantPhotos={plantPhotos} image_url={image_url}/>
        </div>
    )
}

export default PlantProfileCenterSegment;