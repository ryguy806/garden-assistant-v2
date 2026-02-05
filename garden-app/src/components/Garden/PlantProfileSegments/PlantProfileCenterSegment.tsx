import { ImageFieldType } from "../../../api/api";
import PlantPhotosModule from "../PlantProfileModules/Sections/PlantPhotosModule";

type PlantProfilePhotoProps = {
    image_url: string 
}

const PlantProfileCenterSegment = ({image_url}: PlantProfilePhotoProps) => {
    return (
        <div className='flex w-1/2 flex-col h-full mx-4'>
            <PlantPhotosModule image_url={image_url}/>
        </div>
    )
}

export default PlantProfileCenterSegment;