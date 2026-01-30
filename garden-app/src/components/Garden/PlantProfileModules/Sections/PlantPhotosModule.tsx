import { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_IMG_SRC_TYPES } from "react";
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
    },
    image_url: string | null
}

const PlantPhotosModule = ({ plantPhotos, image_url }: PlantPhotosModuleProps) => {
    return (
        <div className='flex text-3xl font-bold items-center border-black border-2 p-4'>
            <PhotoCarouselComponent images={plantPhotos} image_url={image_url}/>
        </div>
    )
}

export default PlantPhotosModule;