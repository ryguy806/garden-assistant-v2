type IndividualPhotoProps = {
    image: string;
}

const IndividualPhotoComponent = ({image}: IndividualPhotoProps) => {

    return (
        <div>
            <img src={image} alt="Plant Photo"/>
        </div>
    );
}

export default IndividualPhotoComponent;