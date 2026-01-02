import JournalItemView from "./JournalItem";
import { JournalItem } from "wasp/entities";

const JournalList = ({ journalItems }: { journalItems: JournalItem[] }) => {
  if (!journalItems?.length) return <div>No Entries</div>;

  return (
    <div>
      <div className='bg-[#f5f5f5] w-full mx-auto my-0 p-0'>
        <ul className='text-[#555] p-0 w-[500px] border-[1px] border-[#dedede]'>
          {journalItems &&
            journalItems.map((journalItem: JournalItem) => (
              <li
                key={journalItem.id}
                className='border-b-[1px] border-dotted border-[#ccc]h-auto p-3'
              >
                <JournalItemView journalItem={journalItem} />
              </li>
            ))}
        </ul>
      </div>
      <br />
    </div>
  );
};

export default JournalList;
