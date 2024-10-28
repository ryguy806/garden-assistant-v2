import JournalList from "./JournalList";
import { AuthUser } from "wasp/auth";
import { Dispatch, FC, FormEvent, SetStateAction, useState } from "react";
import { JournalItems } from "wasp/client/crud";

const JournalView = ({ user }: { user: AuthUser }) => {
  const { data, isLoading, error } = JournalItems.getAll.useQuery();
  const journalItems = data?.filter((item) => item.userId === user.id);

  const [addEntry, setAddEntry] = useState(false);
  const handleAddEntry = () => setAddEntry(true);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='mt-24 w-[90vw]'>
      <div className='flex items-center m-5 justify-center'>
        <h1 className='font-bold text-xl'>Garden Journal</h1>
      </div>
      <div>{journalItems && <JournalList journalItems={journalItems} />}</div>
      <div className='border-2 border-black'>
        <div className='text-lg underline m-3'>New Journal Entry</div>
        <div className='m-5'>
          {addEntry ? (
            <JournalItemForm setAddEntry={setAddEntry} />
          ) : (
            <button
              onClick={handleAddEntry}
              className='border-black border-2 rounded-md p-3'
            >
              Add Entry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalView;

interface JournalItemFormProps {
  setAddEntry: Dispatch<SetStateAction<boolean>>;
}

export const toSentenceCase = (str: string): string => {
  const sentences = str.split(/([!.?]\W)/g);

  let newEntry: string = "";

  for (let i = 0; i < sentences.length; i++) {
    let restOfSentence = sentences[i].substring(1).toLowerCase();
    let firstLetter = sentences[i].charAt(0).toUpperCase();
    newEntry += firstLetter + restOfSentence;

    newEntry.replaceAll(" i ", " I ");
  }

  return newEntry;
};

const JournalItemForm: FC<JournalItemFormProps> = ({ setAddEntry }) => {
  const createJournalItem = JournalItems.create.useAction();
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const target = event.target as HTMLFormElement;
      const newEntry = target.entry.value;

      target.reset();
      await createJournalItem({
        entry: newEntry,
      });
    } catch (err: any) {
      window.alert("Error: " + err.message);
    }
    setAddEntry(false);
  };

  return (
    <form onSubmit={handleFormSubmit} className='flex flex-row space-x-3'>
      <textarea
        name='entry'
        id='entry'
        placeholder='Entry'
        className='border-2'
      />
      <button type='submit' className='border-2 bg-green-300 w-32 p-3'>
        Add Entry
      </button>
    </form>
  );
};
