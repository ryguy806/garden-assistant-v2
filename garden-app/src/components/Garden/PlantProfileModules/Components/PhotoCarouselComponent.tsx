import IndividualPhotoComponent from "./IndividulaPhotoComponent";

type PhotoCarouselProps = {
    images: string[];
}

const PhotoCarouselComponent = ({images}: PhotoCarouselProps) => {

    return (
        <div className="flex flex-col">
            {images.length > 1 ?  images.map((image, index) => (
                <IndividualPhotoComponent key={index} image={image}/>
            )) : <IndividualPhotoComponent image={images[0]}/>}
        </div>
    )
}

export default PhotoCarouselComponent;