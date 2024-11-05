import { Link } from "wasp/client/router";
import PlantProfile from "./PlantProfile";
import { PlantProfileItems } from "wasp/client/crud";

const Garden = () => {
  const { data, isLoading, error } = PlantProfileItems.getAll.useQuery();

  const plantData = data ? data : [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='container mx-auto'>
      <div>Here are your plants</div>
      <div className='flex justify-between flex-col'>
        <div className='border-2 border-solid border-green-500 p-5'>
          {plantData.map((plant) => {
            return (
              <Link
                key={plant.id}
                to={`/yard/plant-profile/:plant`}
                params={{ plant: plant.name }}
                className='border-b-2 border-green-500 hover:bg-green-400'
              >
                <div className='flex flex-row justify-between'>
                  <div>{plant.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className='flex flex-start'>
          <Link to='/yard/plant-add' className='bg-green-400'>
            Add Plant
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Garden;
