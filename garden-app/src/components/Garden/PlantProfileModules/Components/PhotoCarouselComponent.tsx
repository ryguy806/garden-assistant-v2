import { useEffect, useState } from "react";
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
    } | null
}

const PhotoCarouselComponent = ({images}: PhotoCarouselProps) => {
    const [currentPhotoIndex, setCurrentPhotoIndex] =  useState<number>(0)
    const [imageArray, setImageArray] = useState<ImageFieldType[]>([])
    if (images !== null) {
        setImageArray(convertToImageFieldTypeArray(images));
    }
    
    const prevSlide = () => {
        setCurrentPhotoIndex((prev) => prev === 0 ? imageArray.length - 1 : prev - 1)
    }
    
    const nextSlide = () => {
        setCurrentPhotoIndex((next) => next === imageArray.length - 1 ? 0 : next + 1)
    }

    const goToSlide = (index: number) => setCurrentPhotoIndex(index);

    console.log("currentPhotoIndex: ", currentPhotoIndex);

    return (
        <div className="relative">
            {imageArray.length <= 1 || imageArray === null ?  imageArray.map((image, index) => (
                <IndividualPhotoComponent key={index} image={image.image_url} visible={true}/>
            )) : (
                <div className="flex h-96 w-96 justify-center mx-auto object-cover">
                    {imageArray.map((src, index) => (
                        <div key={index} className={`inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentPhotoIndex ? "opacity-100 z-10" : "hidden opacity-0 z-0"
                        }`}>
                            <IndividualPhotoComponent image={src.image_url} visible={index === currentPhotoIndex}/>
                        </div>
                    ))}
                </div>
            )}

            <button onClick={prevSlide} className="absolute bottom-1/2 left-10 -translate-y-1/2 bg-green-500/50 text-white p-2 rounded-full z-20">
                {"<"}
            </button>
            <button onClick={nextSlide} className="absolute bottom-1/2 right-10 -translate-y-1/2 bg-green-500/50 text-white p-2 rounded-full z-20">
                {">"}
            </button>

            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {imageArray.map((src, index) => (
                    <button key={src.id} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full border border-white ${
                        index === currentPhotoIndex ? "bg-black" : "bg-black/40"
                    }`}/>
                ))}
            </div> */}
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