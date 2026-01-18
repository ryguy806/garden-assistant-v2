type IndividualPhotoProps = {
    image: string;
}

const IndividualPhotoComponent = ({image}: IndividualPhotoProps) => {

    return (
        <div className="flex justify-center border-black border-2 mx-auto size-5/6">
            <img src={image} alt="Plant Photo"/>
        </div>
    );
}

export default IndividualPhotoComponent;