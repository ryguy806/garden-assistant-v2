import { PlantProfileItems } from "wasp/client/crud";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router";

const PlantProfile = () => {
  const { plant } = useParams<"plant">();
  const { data, isLoading, error } = PlantProfileItems.getAll.useQuery();

  const plantData = data ? data : [];

  const thisPlant = plantData.filter((plantItem) => plantItem.name === plant);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=' flex flex-col mx-auto space-y-10 mt-24'>
      <div className='flex flex-row space-x-10 justify-between'>
        <div>
          {thisPlant[0].imageURL} *This will be an image in the future.*
        </div>
        <div className='flex flex-col'>
          <div className='text-lg bold flex justify-end'>
            {thisPlant[0].name}
          </div>
          <div className='flex flex-row justify-end space-x-3'>
            <h2>Location:</h2>
            <p>{thisPlant[0].garden}</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-5'>
        <div className='flex flex-row justify-between'>
          <h2>Details:</h2>
          <p>{thisPlant[0].details}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <h2>Fertilizer Needs:</h2>
          <p>{thisPlant[0].fertilizerNeeds}</p>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row space-x-3'>
            <h2>Type:</h2>
            <p>{titleCase(thisPlant[0].type as string)}</p>
          </div>
          <div className='flex flex-row space-x-3'>
            <h2>Group:</h2>
            <p>{titleCase(thisPlant[0].group)}</p>
          </div>
        </div>
      </div>
      <div>
        This is where I will put the notes section. I hope to have it update
        each individual plant.
        {/* {thisPlant[0].noteItems.map((note) => )} */}
      </div>
    </div>
  );
};

export default PlantProfile;
