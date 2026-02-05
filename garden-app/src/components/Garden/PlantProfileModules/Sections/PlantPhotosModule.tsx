import { ImageFieldType } from "../../../../api/api";
import IndividualPhotoComponent from "../Components/IndividulaPhotoComponent";
import PhotoCarouselComponent from "../Components/PhotoCarouselComponent";

type PlantPhotosModuleProps = {
    image_url: string
}

const PlantPhotosModule = ({ image_url }: PlantPhotosModuleProps) => {
    return (
        <div className='flex text-3xl font-bold items-center border-black border-2 p-4'>
            {/* <PhotoCarouselComponent image_url={image_url}/> */}
            <IndividualPhotoComponent image={image_url} visible={true}/>
        </div>
    )
}

export default PlantPhotosModule;