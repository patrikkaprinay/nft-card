import './App.css'

function App() {
  return (
    <div className="h-screen w-screen bg-blue-darkest flex items-center justify-center text-hard-white font-outfit">
      <div className="card bg-blue-darker w-80 flex items-center justify-between flex-col rounded-xl p-6 shadow-2xl ">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <img
              src="/images/image-equilibrium.jpg"
              alt="Equilibrium"
              className="rounded-xl"
            />
            <div className="opacity-0 hover:opacity-100 transition duration-150 absolute top-0 left-0 w-full h-full bg-hard-cyan/50 z-10 rounded-xl flex items-center justify-center cursor-pointer">
              <img src="/images/icon-view.svg" alt="" />
            </div>
          </div>
          <div>
            <p className="text-xl mb-3 font-bold hover:text-hard-cyan transition duration-150 cursor-pointer">
              Equilibrium #3429
            </p>
            <p className="text-soft-blue font-light">
              Our Equilibrium collection promotes balance and calm.
            </p>
          </div>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center justify-center gap-1.5 font-bold text-hard-cyan/90">
              <img src="/images/icon-ethereum.svg" alt="" />
              <p>0.041 ETH</p>
            </div>
            <div className="flex items-center justify-center gap-1.5 text-soft-blue">
              <img src="/images/icon-clock.svg" alt="" />
              <p>3 days left</p>
            </div>
          </div>
        </div>
        <hr className="text-blue-dark w-full mt-5 mb-4" />
        <div className="flex items-center justify-start w-full gap-3">
          <div>
            <img
              src="/images/image-avatar.png"
              className="w-7 outline rounded-full outline-1 outline-white"
              alt=""
            />
          </div>
          <div>
            <p className="text-soft-blue font-light">
              Creation of{' '}
              <span className="text-hard-white hover:text-hard-cyan transition duration-150 cursor-pointer">
                Jules Wyvern
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
