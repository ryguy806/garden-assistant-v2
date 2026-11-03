
import IndividualPhotoComponent from "../Components/ImageComponents/IndividulaPhotoComponent";
import PhotoCarouselComponent from "../Components/ImageComponents/PhotoCarouselComponent";

type PlantPhotosModuleProps = {
    image_url: string
}

const PlantPhotosModule = ({ image_url }: PlantPhotosModuleProps) => {
    return (
        <div className='flex items-center justify-center'>
            {/* <PhotoCarouselComponent image_url={image_url}/> */}
            <IndividualPhotoComponent image={image_url} visible={true}/>
        </div>
    )
}

export default PlantPhotosModule;