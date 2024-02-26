import IMG from '../assets/no-projects.png';

export default function NoSelectedProject({ onCreate }) {
    return (
        <div
            className='flex flex-col items-center justify-center w-2/3 gap-7 pb-36
            '>
            <img
                className='w-20'
                src={IMG}
                alt='No-Projects.'
            ></img>
            <h1 className='text-3xl font-bold text-stone-700'>No Project Selected</h1>
            <p className='text-zinc-500 text-lg font-medium'>Select a project or get started with a new one</p>
            <button className="w-48 h-10 mb-10 text-lg textlect a text-zinc-300 bg-zinc-700 rounded-md"
                onClick={onCreate}>Create new project</button>
        </div>)
}