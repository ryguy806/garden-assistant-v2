import PlantProfileLeftSegment from './PlantProfileSegments/PlantProfileLeftSegment';
import PlantProfileCenterSegment from './PlantProfileSegments/PlantProfileCenterSegment';
import PlantProfileRightSegment from './PlantProfileSegments/PlantProfileRightSegment';

export type PlantProfileQuickFactsProps = {
     plantData: {
        data: {
            author: string,
            bibliography: string,
            common_name: string,
            family: string,
            family_common_name: string,
            genus: string,
            genus_id: number,
            id: number,
            links: {
                genus: string,
                plant: string,
                self: string
            },
            plant_id: number,
            rank: string,
            scientific_name: string,
            slug: string,
            status: string,
            synonyms: string[],
            year: number
        }[],
        links: {
            first: string,
            last: string,
            next: string,
            self: string
        },
        meta: {
            total: number
        }
    }
}

const PlantProfileQuickFacts = (data: PlantProfileQuickFactsProps) => {
    return (
        <div className=' flex flex-row mx-auto justify-between mt-24'>
            <PlantProfileLeftSegment />
            <PlantProfileCenterSegment />
            <PlantProfileRightSegment />
        </div>
    );
}

export default PlantProfileQuickFacts;