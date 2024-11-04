import { PlantProfileItems } from "wasp/client/crud";
import { titleCase } from "../../components/Breadcrumbs/Breadcrumbs";
import { useParams } from "react-router";

const PlantProfile = () => {
  // const { plant } = useParams<"plant">();

  return (
    <div className=' flex flex-col mx-auto space-y-5 mt-24'>
      <div className='flex flex-row'>
        <div>
          <img src={""} alt='' />
        </div>
        <div>
          <div className='text-2xl font-bold'>{titleCase("")}</div>
          <div className='text-2xl font-bold'>{titleCase("")}</div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default PlantProfile;
