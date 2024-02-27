import { useRef } from "react";
import Modal from "./Modal";

export default function CreateProject({ onHome, onAdd }) {
    const style = {
        inputContainer: "flex flex-col w-full",
        label: "font-semibold text-stone-500",
        input: "w-full h-10 bg-stone-200 rounded-sm",
        textarea: "w-full h-16 bg-stone-200 rounded-sm",
    }

    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay">
                <h2 className='text-3xl font-bold text-stone-700'>Invalid Input</h2>
                <p className='text-stone-600 text-lg font-medium'>Oops... looks like you gorgot to enter a value.</p>
                <p className='text-stone-600 text-lg font-medium'>Please make sure yoou probide a valid value for every input field.</p>
            </Modal>
            <div className='flex flex-col items-center justify-center w-2/3 h-full pr-60 pl-16 gap-6 '>
                <div className="flex justify-end gap-7 mt-16 mb-4 w-full">
                    <button className="text-lg font-medium"
                        onClick={onHome}>Cancel</button>
                    <button className="w-32 h-14 rounded-lg bg-black text-white text-lg font-medium "
                        onClick={handleSave}>Save</button>
                </div>
                <div className={style.inputContainer}>
                    <label className={style.label}>TITLE</label>
                    <input ref={title} type="text" className={style.input} />
                </div>
                <div className={style.inputContainer}>
                    <label className={style.label}>DESCRIPTION</label>
                    <textarea ref={description} className={style.textarea} />
                </div>
                <div className={style.inputContainer}>
                    <label className={style.label}>DUE DATE</label>
                    <input ref={dueDate} type="date" className={style.input} />
                </div>
            </div >
        </>)
};