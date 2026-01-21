import { useState } from "react";
import IndividualPhotoComponent from "./IndividulaPhotoComponent";
import { ImageFieldType } from "../../../../api/api";

type PhotoCarouselProps = {
    images: {
        "flower": ImageFieldType[],
        "leaf": ImageFieldType[],
        "habit": ImageFieldType[],
        "fruit": ImageFieldType[],
        "bark": ImageFieldType[],
        "other": ImageFieldType[]
    }
}

const PhotoCarouselComponent = ({images}: PhotoCarouselProps) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] =  useState<number>(0);
    const imageArray = convertToImageFieldTypeArray(images);
    
    const prevSlide = () => {
        const newIndex = currentPhotoIndex === 0 ? imageArray.length - 1 : currentPhotoIndex - 1;
        setCurrentPhotoIndex(newIndex)
    }
    
    const nextSlide = () => {
        const newIndex = currentPhotoIndex === imageArray.length -1 ? 0 : currentPhotoIndex + 1;
        setCurrentPhotoIndex(newIndex)
    }

    return (
        <div className="flex flex-col">
            {imageArray.length > 1 ?  imageArray.map((image, index) => (
                <IndividualPhotoComponent key={index} image={image.image_url}/>
            )) : (
                <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl">
                    <div 
                        className="flex transition-transform duration-500 ease-in-out h-full"
                        style={{ transform: `translateX(-${currentPhotoIndex * 100}%)` }}
                    >
                        {imageArray.map((src, index) => (
                            <img
                                key={src.id}
                                src={src.image_url}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover flex-shrink-0"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PhotoCarouselComponent;

const convertToImageFieldTypeArray = (imageUrls: {
    "flower": ImageFieldType[],
    "leaf": ImageFieldType[],
    "habit": ImageFieldType[],
    "fruit": ImageFieldType[],
    "bark": ImageFieldType[],
    "other": ImageFieldType[]
}): ImageFieldType[] => {
    const newArray: ImageFieldType[] = []

    const flowers = imageUrls["flower"];
    const leafs = imageUrls["leaf"];
    const habits = imageUrls["habit"];
    const fruits = imageUrls["fruit"];
    const barks = imageUrls["bark"];
    const others = imageUrls["other"];

    console.log(flowers)
    
    // for (let i = 0; i < flowers.length; i++) {
    //     newArray.push(flowers[i]);
    // }
    // for (let i = 0; i < leafs.length; i++) {
    //     newArray.push(leafs[i]);
    // }
    // for (let i = 0; i < habits.length; i++) {
    //     newArray.push(habits[i]);
    // }
    // for (let i = 0; i < fruits.length; i++) {
    //     newArray.push(fruits[i]);
    // }
    // for (let i = 0; i < barks.length; i++) {
    //     newArray.push(barks[i]);
    // }
    // for (let i = 0; i < others.length; i++) {
    //     newArray.push(others[i]);
    // }

    return newArray
}