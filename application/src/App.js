import photo from './Profil/moi.webp'
import './App.css';
import Profil from './Profil/Profil';
function App() {
  
  return (
    <div className="App">
      <h1>Bienvenue chez Moi! </h1>
      <Profil fullname="Mariama diallo" bio="Je suis une personne tres Ambicieuse ,courageuse.
        Aider tant qu'on peut . Aimer tant qu'on vit!" proffession="Developeur en Fullstack">
       <img src={photo} alt="image"/>
        </Profil>
      
    </div>
           
        )
    }

export default App;
