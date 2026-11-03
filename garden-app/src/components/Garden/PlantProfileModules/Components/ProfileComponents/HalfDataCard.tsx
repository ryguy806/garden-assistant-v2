type HalfDataCardProps = {
    title: string,
    data: string;
}

const HalfDataCard = ({ title, data }: HalfDataCardProps) => {
    return (
        <>
            <div className='flex flex-row text-lg h-7/8 w-1/2 rounded-lg font-normal items-start border-black border-2 p-2'>
                <div className="font-bold text-xl">{title}:</div>
                <div className="m-auto"><p>{data !== "" ? data : "No data"}</p></div>
            </div>
        </>
    )
}

export default HalfDataCard;