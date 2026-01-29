import React from 'react';
import './style.css';
import ShinyText from './components/shinytext';

function App() {
  return (
    /* De h-screen en flex-col zorgen dat ze onder elkaar in het midden komen */
    <div className="bg-black h-screen w-full flex flex-col items-center justify-center gap-10">
      
      {/* Eerste regel */}
      <div className="flex">
        <ShinyText 
          text="WELKOM OP MIJN WEBSITE" 
          speed={3} 
          color="#ffffff" 
          className="text-4xl md:text-6xl font-black tracking-widest" 
        />
      </div>

      {/* Tweede regel */}
      <div className="flex">
        <ShinyText 
          text="Ik ben Illie en het werkt eindelijk! 🚀" 
          speed={2} 
          color="#b5b5b5" 
          className="text-xl md:text-2xl font-light" 
        />
      </div>

    </div>
  );
}

export default App;