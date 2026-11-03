import {Frown} from 'lucide-react'

type IndividualPhotoProps = {
    image: string;
    visible: boolean
}

const IndividualPhotoComponent = ({image, visible}: IndividualPhotoProps) => {

    return (
        <>
            { image !== "No image." ? (
                <div className={`flex justify-center border-black rounded-lg border-2 mx-auto ${visible ? "" : "hidden"}`}>
                    <img className="object-cover w-full h-full" src={image} alt="Plant Photo"/>
                </div>
            ) : (
                <div className="flex flex-col justify-center mt-24 mx-auto text-3xl bold">
                    No image available at this time.
                    <Frown className="flex justify-center mt-24 mx-auto" size={100} color="blue"/>
                </div>
            )}
        </>
    );
}

export default IndividualPhotoComponent;