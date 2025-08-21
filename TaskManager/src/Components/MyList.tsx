

interface MyListProps {
    tasks: string[]
}



function MyList({ tasks }:MyListProps ) {



  return (
    <>

    <div>
       <div className="mt-[20px]">
        <button className="border-1 py-[0.4em] px-[0.8em] rounded-4xl border-fuchsia-700 text-gray-500 hover:border-fuchsia-400 hover:text-white">All</button>
        <button className="border-1 py-[0.4em] px-[0.8em] rounded-4xl border-fuchsia-700 text-gray-500 hover:border-fuchsia-400 hover:text-white ml-[20px]">Active</button>
        <button className="border-1 py-[0.4em] px-[0.8em]  rounded-4xl border-fuchsia-700 text-gray-500 hover:border-fuchsia-400 hover:text-white">Completed</button>
       </div>
       <div className="flex flex-col mt-[25px] gap-3">
        {tasks.map((task,index) => (

          
            <li key={index} className="flex h-[100px]  max-h-200px overflow-y-auto justify-around items-center gap-4 border-1"><span className="flex-1 max-w-[500px]   break-words">{task}</span>
            <button className="flex text-red-500">❌</button></li>
          

        ))}
       </div>
    </div>
      
    </> 
  )
}

export default MyList;