import PlantPhotosModule from "../PlantProfileModules/Sections/PlantPhotosModule";

const PlantProfileCenterSegment = () => {

    return (
        <div className='flex w-1/2 flex-col h-full bg-green-400'>
            <PlantPhotosModule plantPhotos={["photo1.jpg", "photo2.jpg", "photo3.jpg"]}/>
        </div>
    )
}

export default PlantProfileCenterSegment;