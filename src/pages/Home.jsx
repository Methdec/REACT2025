import { Link } from "react-router";
import { useAuth } from "../auth/AuthProvider";
import { Login, Logout } from "../auth/LoginOut";

export default function Home() {
  const { user } = useAuth();
  
    return (
      <>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/games">
      <button>Voir les jeux</button>
      </Link>
      <Link to="/characters">
      <button>Voir les boss</button>
      </Link>
      <Link to="/monsters">
      <button>Voir les monstres</button>
      </Link>
      <Link to="/bosses">
      <button>Voir les personnages</button>
      </Link>
      <Link to="/dungeons">
      <button>Voir les dongeons</button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {user ? (
        <>
          <p>Bienvenue {user.username}</p>
          <Logout />
        </>
      ) : (
        <Link to="/connect">
      <button>Se connecter</button>
      </Link>
      
      )}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </>

    );
  }
