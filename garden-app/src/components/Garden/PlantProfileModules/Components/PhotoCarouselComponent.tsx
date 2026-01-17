import IndividualPhotoComponent from "./IndividulaPhotoComponent";

type PhotoCarouselProps = {
    images: string[];
}

const PhotoCarouselComponent = ({images}: PhotoCarouselProps) => {

    return (
        <div className="flex flex-col">
            {images.map((image, index) => (
                <IndividualPhotoComponent key={index} image={image}/>
            ))}
        </div>
    )
}

export default PhotoCarouselComponent;