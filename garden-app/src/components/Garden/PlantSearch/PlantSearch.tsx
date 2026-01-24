import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import { IndividualPlantDataType } from "wasp/src/api/api";
import { lookForSpecificPlantScientificName } from "wasp/client/operations";
import { Link } from "wasp/client/router";

const PlantSearch = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const debouncedSearchTerm = useDebounce(searchTerm, 500)
    const [results, setResults] = useState<IndividualPlantDataType>({} as IndividualPlantDataType)
    const [isSearching, setIsSearching] = useState(false)

    useEffect(() => {

        const getIndividualPlantData = async (search: string) => {
              const individualAPIPlantData: IndividualPlantDataType = await lookForSpecificPlantScientificName(search)
              setResults(individualAPIPlantData)
              setIsSearching(false)
            }

        if(debouncedSearchTerm) {
            setIsSearching(true)
            getIndividualPlantData(debouncedSearchTerm)
        } else {
            setResults({} as IndividualPlantDataType)
        }

    }, [debouncedSearchTerm])

    const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchInput}/>

            {isSearching && <div>Searching...</div>}

            {results && (
                <div>
                    <Link to="/yard/:plant" params={{plant: results.scientific_name}}/>
                </div>
            )}
        </div>
    )
}

export default PlantSearch;
