import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { PerenualRawDataType } from "../../../api/newApi";
import { searchForPerenualPlants } from "wasp/client/operations";
import { Link } from "wasp/client/router";
import { toSentenceCase } from "../../../pages/Journal/JournalView";

const PlantSearch = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const debouncedSearchTerm = useDebounce(toSentenceCase(searchTerm), 500)
    const [results, setResults] = useState<PerenualRawDataType>({data: [] as unknown as PerenualRawDataType["data"], to: 0, per_page: 0, current_page: 0, from: 0, last_page: 0, total: 0})
    const [isSearching, setIsSearching] = useState(false)
    const [hasResults, setHasResults] = useState(false)

    useEffect(() => {

        const getPlantData = async (search: string) => {
        //Add way to stop the search if string is empty.
            if (search.length >=3) {
                const rawPlantData: PerenualRawDataType = await searchForPerenualPlants(search)
                setResults(rawPlantData)
                if (results.data.length >= 1) {
                    setIsSearching(false)
                    setHasResults(true)
                }
        } else {
            setHasResults(false)
        }
    }

        if(debouncedSearchTerm && debouncedSearchTerm.length >= 3 ) {
            setIsSearching(true)
            setHasResults(false)
            getPlantData(debouncedSearchTerm)
        } else {
            setResults({} as PerenualRawDataType)
        }

    }, [debouncedSearchTerm, searchTerm])

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div className="flex flex-col h-full w-full">
            <input className="flex mx-auto border-black border w-1/3 p-1 pl-2" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchInput}/>

            {isSearching && <div className="flex mx-auto">Searching...🔎🌱</div>}
            <div className="flex flex-col space-y-3 text-black mx-auto justify-center">
            {
                hasResults ? (
                    results.data.map((plant) => (
                        <div key={plant.id} className="mx-5 w-full h-auto hover:ring-2 ring-yellow-500 first:mt-5">
                            <Link to="/search/:plant" params={{plant: plant.id}} className="flex mx-auto my-4 justify-center">
                               <p>{plant.common_name && `${plant.common_name} | `}<i>{plant.scientific_name}</i></p>
                            </Link>
                        </div>
                    ))
                ) : (<div>No results found.</div>)
            }
            </div>
        </div>
    )
}

export default PlantSearch;
