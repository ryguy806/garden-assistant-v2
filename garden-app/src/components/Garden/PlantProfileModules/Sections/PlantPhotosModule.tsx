import PhotoCarouselComponent from "../Components/PhotoCarouselComponent";

type PlantPhotosModuleProps = {
    plantPhotos: string[];
}

const PlantPhotosModule = ({ plantPhotos }: PlantPhotosModuleProps) => {
    return (
        <div className='flex text-3xl font-bold items-center'>
            <PhotoCarouselComponent images={plantPhotos}/>
        </div>
    )
}

export default PlantPhotosModule;