import { PlantProfileItems } from "wasp/client/crud";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router";

const PlantProfile = () => {
  const { plant } = useParams<"plant">();

  const { data, isLoading, error } = PlantProfileItems.getAll.useQuery();

  const allPlantData = data ?? [];

  const plantData = allPlantData.filter((item) => item.name === plant);

  if (isLoading) return <div>Loading!</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=' flex flex-col mx-auto space-y-5 mt-24'>
      <div className='flex flex-row'>
        <div>
          <img src={plantData[0].imageURL as string} alt='' />
        </div>
        <div>
          <div className='text-2xl font-bold'>{titleCase(plant as string)}</div>
          <div className='text-2xl font-bold'>{titleCase(plantData[0].name as string)}</div>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default PlantProfile;
