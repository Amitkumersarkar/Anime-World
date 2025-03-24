import './App.css'

function App() {

  return (
    <>
      <div className='w-11/12 mx-auto'>
        {/* <nav className='s w-11/12 font-bold pb-4 cursor-pointer pt-5  '> */}
        <div className='s w-11/12 pb-8 font-bold  pt-5  '>
          <p className='font-serif text-2xl border-b-1'><i>Anime World</i></p>
          <div className='flex cursor-pointer gap-8'>
            <li>Home</li>
            <li>About</li>
            <li>Movie</li>
            <li>Series</li>
          </div>
        </div>
        {/* </nav> */}
        <div >
          <img width="100%" src="Anime.PNG" alt="The Last Airbender" />
        </div>
        <div className='font-mono font-semibold pt-6 pb-10'>
          <h2>Avatar : The Last Airbender</h2>
          <h3>Rating : 9.3 </h3>
          <h3>Creators : Michael Dante DiMartino and Brayn Konietzko </h3>
          <p>
            Storyline : The world is divided into four elemental nations: The Northern and Southern Water Tribes, the Earth Kingdom, the Fire Nation, and the Air Nomads. The Avatar upholds the balance between the nations, but everything changed when the Fire Nation invaded. Only the Avatar, master of all four elements, can stop them. But when the world needs him most, he vanishes. A hundred years later Katara and Sokka discover the new Avatar, an airbender named Aang. Together they must help Aang master the elements and save the world.
          </p>
        </div>
      </div>
    </>
  )
}

export default App
