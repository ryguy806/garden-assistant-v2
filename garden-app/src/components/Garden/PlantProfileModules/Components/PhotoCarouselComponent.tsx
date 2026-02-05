import { useEffect, useState } from "react";
import IndividualPhotoComponent from "./IndividulaPhotoComponent";
import { ImageFieldType } from "../../../../api/api";

type PhotoCarouselProps = {
    image_url: string
}

const PhotoCarouselComponent = ({image_url}: PhotoCarouselProps) => {
    // const [currentPhotoIndex, setCurrentPhotoIndex] =  useState<number>(0)
    // const [imageArray, setImageArray] = useState<ImageFieldType[]>([])
    // if (Object.keys(images).length = 0) {
    //     setImageArray(convertToImageFieldTypeArray(images))
    // }
    
    // const prevSlide = () => {  
    //     setCurrentPhotoIndex((prev) => prev === 0 ? imageArray.length - 1 : prev - 1)
    // }
    
    // const nextSlide = () => {
    //     setCurrentPhotoIndex((next) => next === imageArray.length - 1 ? 0 : next + 1)
    // }

    // const goToSlide = (index: number) => setCurrentPhotoIndex(index);

    // return (
    //     <div className="relative">
    //         {imageArray.length === 0 ? (
    //             <div>
    //                {image_url !== null ? (<IndividualPhotoComponent image={image_url!} visible={true}/>) : (
    //                 <div className="flex h-96 w-96 justify-center items-center m-auto object-cover bg-gray-300 text-white">No plant photo provided.</div>
    //                )}
    //             </div>
    //             ) : (
    //                 <>
    //                     <div className="flex h-96 w-96 justify-center mx-auto object-cover">
    //                         {imageArray.map((src, index) => (
    //                             <div key={index} className={`inset-0 transition-opacity duration-700 ease-in-out ${
    //                                 index === currentPhotoIndex ? "opacity-100 z-10" : "hidden opacity-0 z-0"
    //                             }`}>
    //                                 <IndividualPhotoComponent image={src.image_url} visible={index === currentPhotoIndex}/>
    //                             </div>
    //                         ))}
    //                     </div>
    //                     <button onClick={prevSlide} className="absolute bottom-1/2 left-10 -translate-y-1/2 bg-green-500/50 text-white p-2 rounded-full z-20">
    //                         {"<"}
    //                     </button>
    //                     <button onClick={nextSlide} className="absolute bottom-1/2 right-10 -translate-y-1/2 bg-green-500/50 text-white p-2 rounded-full z-20">
    //                         {">"}
    //                     </button>
    //                 </>
    //         )}

    //         {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
    //             {imageArray.map((src, index) => (
    //                 <button key={src.id} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full border border-white ${
    //                     index === currentPhotoIndex ? "bg-black" : "bg-black/40"
    //                 }`}/>
    //             ))}
    //         </div> */}
    //   </div>
    // )

    return (
        <div>
            <IndividualPhotoComponent image={image_url} visible={true}/>
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
    
    if (imageUrls["flower"]) {
        for (let i = 0; i < flowers.length; i++) {
        newArray.push(flowers[i]);
    }}
    if (imageUrls["leaf"]) {for (let i = 0; i < leafs.length; i++) {
        newArray.push(leafs[i]);
    }}
    if (imageUrls['habit']) {for (let i = 0; i < habits.length; i++) {
        newArray.push(habits[i]);
    }}
    if (imageUrls["fruit"]) {for (let i = 0; i < fruits.length; i++) {
        newArray.push(fruits[i]);
    }}
    if (imageUrls["bark"]) {for (let i = 0; i < barks.length; i++) {
        newArray.push(barks[i]);
    }}
    if (imageUrls["other"]) {for (let i = 0; i < others.length; i++) {
        newArray.push(others[i]);
    }}

    return newArray
}