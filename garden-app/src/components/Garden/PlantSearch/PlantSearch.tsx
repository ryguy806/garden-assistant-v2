import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { RawDataType } from "wasp/src/api/api";
import { searchForPlants } from "wasp/client/operations";
import { Link } from "wasp/client/router";

const PlantSearch = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const debouncedSearchTerm = useDebounce(searchTerm, 1000)
    const [results, setResults] = useState<RawDataType>({data: [] as unknown as RawDataType["data"], links: {first: "", last: "", next: "", self: ""}, meta: {total: 0}})
    const [isSearching, setIsSearching] = useState(false)
    const [hasResults, setHasResults] = useState(false)

    useEffect(() => {

        const getPlantData = async (search: string) => {
        //Add way to stop the search if string is empty.
            if (search.length >=3) {
                const rawPlantData: RawDataType = await searchForPlants(search)
                setResults(rawPlantData)
                if (results.data.length >= 1) {
                    setIsSearching(false)
                    setHasResults(true)
                }
        }}

        if(debouncedSearchTerm && debouncedSearchTerm.length >= 3 ) {
            setIsSearching(true)
            setHasResults(false)
            getPlantData(debouncedSearchTerm)
        } else {
            setResults({} as RawDataType)
        }

        console.log("Results: ", results)

    }, [debouncedSearchTerm])

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchInput}/>

            {isSearching && <div>Searching...</div>}
            <div className="flex flex-col space-y-3 text-black mx-auto justify-center">
            {
                hasResults && (
                    results.data.map((plant) => (
                        <div key={plant.id} className="border-black border-2 h-4 w-auto">
                            <Link to="/yard/:plant" params={{plant: plant.id}}>
                                {plant.scientific_name}
                            </Link>
                        </div>
                    ))
                )
            }
            </div>
        </div>
    )
}

export default PlantSearch;
