type SingleDataCardProps = {
    title: string,
    data: string;
}

const SingleDataCard = ({ title, data }: SingleDataCardProps) => {
    return (
        <>
            <div className='flex flex-row text-xl h-7/8 w-full rounded-lg font-normal items-start border-black border-2 p-2'>
                <div className="font-bold">{title}:</div>
                <div className="m-auto "><p>{data !== "" ? data : "No data"}</p></div>
            </div>
        </>
    )
}

export default SingleDataCard;