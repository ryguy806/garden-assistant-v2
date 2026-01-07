import { PlantProfileItems } from "wasp/client/crud";
import { useParams } from "react-router";
import PlantProfileQuickFacts, { PlantProfileQuickFactsProps } from "../../components/Garden/PlantProfileQuickFacts";
import {useState, useEffect} from 'react'

const PlantProfile = () => {
  const { plant } = useParams<"plant">();
  // const { data, isLoading, error } = PlantProfileItems.getAll.useQuery();

  const [apiPlantData, setApiPlantData] = useState<PlantProfileQuickFactsProps | null>()
  const [apiError, setApiError] = useState<string | null>(null)
  const [apiIsLoading, setApiIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://trefle.io./')
        if (!response.ok) {
          throw new Error(`Network response is not OK: ${response.statusText}`)
        }
        const result = await response.json()
        setApiPlantData({plantData: result})
        setApiError(null)
      } catch (err) {
        if (err instanceof Error) {
          setApiError(err.message)
          setApiPlantData(null)
        } else {
          setApiError("An unknown error occurred")
        }
      } finally {
        setApiIsLoading(false)
      }
    }

    fetchData()
  }, [])

  // const plantData = data ? data : [];

  // const thisPlant = plantData.filter((plantItem) => plantItem.name === plant);

  if (apiIsLoading) return <div>Loading...</div>;
  if (apiError) return <div>Error: {apiError}</div>;

  return (
    <div className=' flex flex-row mx-auto space-x-10 mt-24'>
      <PlantProfileQuickFacts plantData={apiPlantData}/>

      {/* <div className='flex flex-row space-x-10 justify-between'>
        <div>
          {thisPlant[0].imageURL}<br/><p>*This will be an image in the future.*</p>
        </div>
        <div className='flex flex-col'>
          <div className='text-lg bold'>{thisPlant[0].name}</div>
          <div className='flex flex-row space-x-3'>
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
      </div> */}
    </div>
  );
};

export default PlantProfile;