import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../filtroNavegacion/FilterComponent.css";
import { ContainerResults } from "../ventanadaResultados/ContainerResults";
import { getAllProductsFromDB } from "../../services/product_service";

const FilterComponent = ({ setClicked }) => {
  const [dataApi, setDataApi] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [resultado, setResultado] = useState([]);
  //para mostrar ventana de resultados
  // const [ show, setShow] = useState(false);

  const filtrado = (valorDelInput) => {
    const resultadoBusqueda = dataApi.filter((item) => {
      if (item.nombre.toLowerCase().includes(valorDelInput.toLowerCase())) {
        return item;
      }
    });
    setResultado(resultadoBusqueda);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    setFiltered(inputValue);
    filtrado(inputValue);
  };

  useEffect(() => {
    getAllProductsFromDB()
      .then(({ data }) => {
        setDataApi(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
     <section className="sectionFilter">
     <form className="navbar-form">
        <button className="search-button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <input
          className="input-navbar-filter"
          onChange={handleChange}
          value={filtered}
          id="filtro"
          type="text"
          maxLength={30}
          placeholder="Buscar productos..."
        />
      </form>
      <ContainerResults
        resultado={resultado}
        filtered={filtered}
        setFiltered={setFiltered}
        setClicked={setClicked}
      />
     </section>
    </>
  );
};

export default FilterComponent;
