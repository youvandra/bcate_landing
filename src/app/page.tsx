import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className={`w-full p-8 h-auto  grid grid-cols-12 gap-8`} >
        <div className='col-span-6' >
          <h1 className='text-2xl font-medium mb-4' >BCate Project</h1>
          <p className='max-w-md text-normal ' >Welcome to Bcate 👋, where creativity meets blockchain, your gateway to a world of unique architectural designs!</p>
          <div className='' >

          </div>
        </div>

      </div>
      <div className='max-w-screen-xl' >
        <p>Bcate project</p>
      </div>
    </>
  )
}
