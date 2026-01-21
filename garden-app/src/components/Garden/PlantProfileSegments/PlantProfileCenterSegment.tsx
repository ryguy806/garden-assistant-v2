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
    }
}

const PlantProfileCenterSegment = ({plantPhotos}: PlantProfilePhotoProps) => {
    return (
        <div className='flex w-1/2 flex-col h-full'>
            <PlantPhotosModule plantPhotos={plantPhotos}/>
        </div>
    )
}

export default PlantProfileCenterSegment;