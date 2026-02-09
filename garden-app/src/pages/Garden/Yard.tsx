import { useQuery, getAllPerenualPlants } from "wasp/client/operations";
import { Link } from "wasp/client/router";

const Yard = () => {

  const {data, isLoading, error} = useQuery(getAllPerenualPlants)

  const plants = data ? data.sort((a, b) => a.scientific_name.localeCompare(b.scientific_name)) : []
  
  if(isLoading) return <div className="bg-green-300 text-3xl">Loading...</div>
  if(error) return <div className="bg-red-300 text-3xl font-bold">Error loading data: {error.message}</div>

  return (
    <div className='h-screen mx-auto'>
      <div className="text-4xl font-bold text-green-600 flex justify-center mb-10">My Plants!</div>
      <div className="flex flex-col justify-center mx-auto space-y-10 first:mt-10">
        {plants.map((plant) => (
          <div key={plant.id} className="flex justify-center mx-10 p-4 hover:ring-2 ring-yellow-500">
            <Link to="/garden/:plant" params={{plant: plant.id}}>
              {plant.common_name && `${plant.common_name} | `}{plant.scientific_name}
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Yard;

