import IndividualPhotoComponent from "./IndividulaPhotoComponent";

type PhotoCarouselProps = {
    images: string[];
}

const PhotoCarouselComponent = ({images}: PhotoCarouselProps) => {

    return (
        <>
            {images.map((image, index) => (
                <div key={index}>
                    <IndividualPhotoComponent image={image}/>
                </div>
            ))}
        </>
    )
}

export default PhotoCarouselComponent;