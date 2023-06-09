import React from "react";
import "../estilo/Testimonio.css";

function Testimonio(props) {
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio" src={require(`../imagenes/basquiat-${props.imagen}.jpg`)} alt="Foto basquiat uno" />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">{props.nombre} en <strong>{props.pais}</strong></p>
          <p className="texto-testimonio">{props.testimonio}</p>
        </div>
      </div>
    );
}

export default Testimonio;