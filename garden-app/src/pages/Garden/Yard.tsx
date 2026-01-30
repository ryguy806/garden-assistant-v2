import { useQuery, getAllPlants } from "wasp/client/operations";
import { Link } from "wasp/client/router";

type PlantDataType = {
    id: number;
    userId: number;
    createdDate: Date;
    common_name: string | null;
    scientific_name: string;
    slug: string;
    growth_habit: string | null;
    light: number | null;
    image_url: string | null;
}

const Yard = () => {

  const {data, isLoading, error} = useQuery(getAllPlants)

  const plants = data ? data : []
  
  if(isLoading) return <div className="bg-green-300 text-3xl">Loading...</div>
  if(error) return <div className="bg-red-300 text-3xl font-bold">Error loading data: {error.message}</div>

  return (
    <div className='container mx-auto my-5'>
      <div className="text-4xl font-bold text-green-600">Your Plants!</div>
      <div className="flex flex-col justify-center mx-auto space-y-10">
        {plants.map((plant) => (
          <div key={plant.id} className="flex justify-center mx-10 border-2 borer-black p-4">
            <Link to="/yard/:plant" params={{plant: plant.id}}>
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

