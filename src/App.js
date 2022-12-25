import './index.css';
import Character from './components/character';
import { useState } from 'react';


function App() {
  const [characters, setCharacter] = useState(
    [
      {
        name: "batman", 
        power: "really rich", 
        img : "https://images.pexels.com/photos/11791435/pexels-photo-11791435.jpeg" 
      },
      {
        name: "robin", 
        power: "athletic", 
        img : "https://images.pexels.com/photos/10228068/pexels-photo-10228068.jpeg" 
      },
      {
        name: "bugs bunny", 
        power: "comic", 
        img : "https://images.pexels.com/photos/4588056/pexels-photo-4588056.jpeg" 
      },
      {
        name: "spiderman", 
        power: "spider power", 
        img : "https://images.pexels.com/photos/8421963/pexels-photo-8421963.jpeg" 
      }
    ]
  );
  return (
    <div className="App">
      <div className='flex flex-wrap justify-center '>
        {characters.map((character) => {
          return(
          <Character 
            name={character.name} 
            power={character.power} 
            img={character.img} 
          />)
        })}
      </div>
    </div>
  );
}

export default App;
