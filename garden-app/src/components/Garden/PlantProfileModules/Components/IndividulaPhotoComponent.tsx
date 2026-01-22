type IndividualPhotoProps = {
    image: string;
    visible: boolean
}

const IndividualPhotoComponent = ({image, visible}: IndividualPhotoProps) => {

    return (
        <div className={`flex justify-center border-black border-2 mx-auto size-5/6 ${visible ? "" : "hidden"}`}>
            <img src={image} alt="Plant Photo"/>
        </div>
    );
}

export default IndividualPhotoComponent;