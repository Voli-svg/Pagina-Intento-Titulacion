import './navbar.css';
const Navbar = ({ setbusqueda, sortMayorMenor, sortMenorMayor, filterByAssociation }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <button className="navbar-brand text-light fw-bold" onClick={() => location.reload()}>
            Home
          </button>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Filtro de Asociación
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={() => filterByAssociation("MEMBER")}>Mostrar solo 'MEMBER'</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => filterByAssociation("COLLABORATOR")}>Mostrar solo 'COLLABORATOR'</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => filterByAssociation("CONTRIBUTOR")}>Mostrar solo 'CONTRIBUTOR'</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => filterByAssociation("NONE")}>Mostrar solo 'NONE'</button>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item" onClick={() => filterByAssociation("")}>Mostrar todos los proyectos</button>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ordenar por comentarios
              </a>
              <ul className="dropdown-menu">
                <li>
                  <button className="dropdown-item" onClick={() => sortMayorMenor()}>Mayor a menor</button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => sortMenorMayor()}>Menor a Mayor</button>
                </li>
              </ul>
            </li>
          </ul>
          <h1>Lista De Proyectos</h1>
          <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()} id="BarraBusqueda">
            <input id="FormBarraBusqueda" className="form-control me-2" type="text" placeholder="Buscar" aria-label="Search" onChange={(e) => setbusqueda(e.target.value)} />
            <button className="btn btn-outline-light" type="submit">Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
