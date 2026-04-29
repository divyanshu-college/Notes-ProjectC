import {useState} from 'react'
import './App.css'



const App = () => {
   const[title,settitle]=useState('')
   const[details,setDetails]=useState('')
   const[task,settask]=useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    
    const copyTask=[...task];
   
    copyTask.push({title,details})
    settask(copyTask);
    
    

    settitle('')
    setDetails('')
    
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1)
    settask(copyTask)
    
    
  }
 
  return (
    <div className='h-full  lg:flex bg-black text-white '>
      
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex gap-4 lg:w-1/2 items-start flex-col p-10 '>

       <h1 className='text-4xl font-bold'>Add Notes</h1>
    {/* Pehla input for heading */}
         <input 
        type="text" 
        placeholder='Eenter Notes Heading'
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>{
          settitle(e.currentTarget.value);
        }}
         />
       { /*DeTAILED WALA INPUT*/}
      <textarea
       type="text"
       className='px-5 w-full font-medium  h-32 py-2 flex items-start flex-row border-2 outline-none rounded'
       placeholder='write Details here'
       value={details}
       onChange={(e)=>{
        setDetails(e.target.value);
       }}
       />

       <button 
       className='bg-white active:bg-gray-300 w-full font-medium outline-none text-black px-5 py-2 rounded'
       >Add  Notes
       </button>
      
       
      </form>
      <div className=' lg:w-1/2 lg:border-l-2  p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>

        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
          {task.map(function(elem,idx){
          return <div key={idx} className="flex justify-between flex-col item-start relative h-52 w-40 rounded-xl text-black pt-9 pb-4 bg-cover bg-[url('https://imgs.search.brave.com/b9nc5BMwJ963hopkarex8iyCPZDL5oVweOdhvT2icjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')]">
            
           <div>
             <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-4 leading-tight text-xs p-2 font-semi-bold text-gray-6 00'>{elem.details}</p>
           </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-[70%] self-center cursor-pointer active:scale-95 bg-red-500 py-2 text-xs rounded font-bold text-white'>Delete</button>
          </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
