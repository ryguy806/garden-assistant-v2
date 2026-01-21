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
        <div className="flex">
            {imageArray.length >= 1 ?  imageArray.map((image, index) => (
                <IndividualPhotoComponent key={index} image={image.image_url}/>
            )) : (
                <div className="max-w-lg h-96 w-full m-auto py-4 px-2 relative group">
                {/* Image Container */}
                <div
                    style={{ backgroundImage: `url(${imageArray[currentPhotoIndex].image_url})` }}
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                ></div>
                
                {/* Left Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer" onClick={prevSlide}>
                    {"<"}
                </div>
                
                {/* Right Arrow */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/50 text-white cursor-pointer" onClick={nextSlide}>
                    {">"}
                </div>

                {/* Indicators */}
                <div className="flex top-4 justify-center py-2">
                    {imageArray.map((src, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentPhotoIndex(index)}
                        className={`cursor-pointer w-3 h-3 mx-1 rounded-full ${
                        currentPhotoIndex === index ? 'bg-black' : 'bg-gray-400'
                        }`}
                    ></div>
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
    
    for (let i = 0; i < flowers.length; i++) {
        newArray.push(flowers[i]);
    }
    for (let i = 0; i < leafs.length; i++) {
        newArray.push(leafs[i]);
    }
    for (let i = 0; i < habits.length; i++) {
        newArray.push(habits[i]);
    }
    for (let i = 0; i < fruits.length; i++) {
        newArray.push(fruits[i]);
    }
    for (let i = 0; i < barks.length; i++) {
        newArray.push(barks[i]);
    }
    for (let i = 0; i < others.length; i++) {
        newArray.push(others[i]);
    }

    return newArray
}