type ListCardProps = {
    title: string,
    list: string[],
    single: string,
}

const ListCard = ({ title, list, single }: ListCardProps) => {

    return (
        <>
            <div className='flex flex-row text-lg w-full rounded-lg font-normal space-x-2 items-start border-black border-2 p-2'>
                <div className="font-bold flex flex-row text-xl">{title}:</div>
                    <ul className="pl-2 list-disc list-outside">
                        {list.length > 0 && list[0] != "No" ? list.map((item) => (
                            <li className="ml-2" key={item}>{item}</li>
                        )) : single}
                    </ul>
            </div>
        </>
    )
}

export default ListCard;

// {attracts.length > 0 &&}