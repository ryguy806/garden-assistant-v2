import {useState, SubmitEvent} from 'react'
import appleIcon from '../../assets/icons/apple.png'

const Locations = () => {

    const [locationList, setLocationList] = useState<string[]>([])
    const [newLocation, setNewLocation] = useState<string>("")

    const handleAdd = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newLocation == "") return
        setLocationList([...locationList, newLocation])
        setNewLocation("")
    }

  return (
    <div>
        <div>Gardens</div>
        <div>Here will be a list of the gardens available to choose from.</div>
        <div className="ml-3 my-3">
            <div className="mb-3">List of Gardens here:</div>
            <ul className={`flex flex-row space-x-10 flex-wrap list-disc`}>
                {locationList.map((location, i) => (
                    <li className="ml-10" key={i}>{location}</li>
                ))}
            </ul>
        </div>
        <br/>
        <div>Checkboxes here:</div>
        <div className="flex flex-wrap w-1/2">
            {locationList.map((location, i) => (
                <div key={i} className="flex m-3">
                    <input type="checkbox" value={'location'}/>{" "}{location}
                </div>
            ))}
        </div>
        <br/>
        <div>Add a new location here: </div>
        <div>
            <form onSubmit={handleAdd} className="flex flex-col justify-center mx-auto">
                <div className="flex flex-row space-x-3 ml-3">
                    <label>
                        Location Name: 
                    </label>
                    <input type="text" value={newLocation} onChange={(e) => setNewLocation(e.target.value)}/>
                </div>
                <div className="mt-3 ml-3">
                    <button type="submit" className="border-2 p-2 border-black">Add New Location</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Locations