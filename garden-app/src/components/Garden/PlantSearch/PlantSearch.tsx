import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { RawDataType } from "wasp/src/api/api";
import { searchForPlants } from "wasp/client/operations";
import { Link } from "wasp/client/router";

const PlantSearch = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const [results, setResults] = useState<RawDataType>({} as RawDataType)
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {

        const getPlantData = async (search: string) => {
              const rawPlantData: RawDataType = await searchForPlants(search)
              setResults(rawPlantData)
            }

        if(debouncedSearchTerm) {
            setIsSearching(true)
            getPlantData(debouncedSearchTerm)
        } else {
            setResults({} as RawDataType)
        }

    }, [debouncedSearchTerm])

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchInput}/>

            {isSearching && <div>Searching...</div>}

            {
                results === {} as RawDataType ? (<div>No Results yet</div>) : ({
                    results.data.map((id: number) => (
                        <Link to={"/yard/:plant"} params={{ plant: id }} key={id}/>
                    ))
                })
            }
        </div>
    )
}

export default PlantSearch;
