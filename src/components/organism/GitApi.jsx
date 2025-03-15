import { useState } from "react";
import { useEffect } from "react";
import UserGit from "../molecula/Usergit.jsx";
import Navbar from "../atomo/navbar.jsx";
import Footer from "../atomo/footer.jsx";
const UserApiGit = () => {
  const [Loading, setLoading] = useState(false);
  const [userGitData, setUserGit] = useState([]);
  const [error, setError] = useState(null);
  const [busqueda, setbusqueda] = useState("");
  const [selectedAssociation, setSelectedAssociation] = useState("");
  useEffect(() => {
    const fetchUsersGit = async () => {
      try {
        setLoading(true);
        const RespuestaApiGit = await fetch(
          "https://api.github.com/repos/facebook/react/issues"
        );
        if (RespuestaApiGit.status !== 200) {
          throw new Error("no se ha podido obtener la informacion");
        }
        const dataGit = await RespuestaApiGit.json();
        console.log("Datos obtenidos:", dataGit);
        setUserGit(dataGit);
      } catch (error) {
        setError(`message: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchUsersGit();
  }, []);

  const filterByAssociation = (association) => {
    setSelectedAssociation(association);
  };
  const ProyectosFiltradoPorBusqueda = userGitData.filter(
    (user) =>
      user.title.toLowerCase().includes(busqueda.toLowerCase()) &&
      (selectedAssociation
        ? user.author_association === selectedAssociation
        : true)
  );

  const sortProjectsMayorMenor = () => {
    const sortedData = [...userGitData].sort((a, b) => b.comments - a.comments);
    setUserGit(sortedData);
  };

  const sortProjectsrMenorMayor = () => {
    const sortedData = [...userGitData].sort((a, b) => a.comments - b.comments);
    setUserGit(sortedData);
  };

  if (Loading === true) {
    return <p>Cargando datos..............</p>;
  }
  if (error !== null) {
    return <p> Ah ocurrido un error: {error}</p>;
  }
  return (
    <div>
      <Navbar
        setbusqueda={setbusqueda}
        sortMayorMenor={sortProjectsMayorMenor}
        sortMenorMayor={sortProjectsrMenorMayor}
        filterByAssociation ={filterByAssociation }
      ></Navbar>
      {ProyectosFiltradoPorBusqueda.map((user) => {
        return (
          <UserGit
            key={user.id}
            id={user.id}
            estado={user.state}
            title={user.title}
            comments={user.comments}
            author_association={user.author_association}
          />
        );
      })}
      <Footer/>
    </div>
  );
};

export default UserApiGit;
