export default function CreateProject() {
    const inputContainer = "flex flex-col w-full";
    const label = "font-semibold text-stone-500";
    const input = "w-full h-10 bg-stone-200 rounded-sm";
    const textarea = "w-full h-16 bg-stone-200 rounded-sm";

    return (
        <div className='flex flex-col items-center justify-center w-3/4 h-full pr-60 pl-16 gap-6 '>
            <div className="flex justify-end gap-7 mt-16 mb-4 w-full">
                <button className="text-lg font-medium">Cancel</button>
                <button className="w-32 h-14 rounded-lg bg-black text-white text-lg font-medium ">Save</button>
            </div>
            <div className={inputContainer}>
                <label className={label}>TITLE</label>
                <input type="text" className={input} />
            </div>
            <div className={inputContainer}>
                <label className={label}>DESCRIPTION</label>
                <textarea className={textarea} />
            </div>
            <div className={inputContainer}>
                <label className={label}>DUE DATE</label>
                <input type="date" className={input} />
            </div>
        </div>)
}