import { ImageFieldType } from "../../../../api/api";
import PhotoCarouselComponent from "../Components/PhotoCarouselComponent";

type PlantPhotosModuleProps = {
    plantPhotos: {
            "flower": ImageFieldType[],
            "leaf": ImageFieldType[],
            "habit": ImageFieldType[],
            "fruit": ImageFieldType[],
            "bark": ImageFieldType[],
            "other": ImageFieldType[]
        }
}

const PlantPhotosModule = ({ plantPhotos }: PlantPhotosModuleProps) => {
    return (
        <div className='flex text-3xl font-bold items-center'>
            <PhotoCarouselComponent images={plantPhotos}/>
        </div>
    )
}

export default PlantPhotosModule;