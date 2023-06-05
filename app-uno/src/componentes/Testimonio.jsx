import React from "react";

function Testimonio() {
    return (
      <div className="contenedor-testimonio">
        <img className="imagen-testimonio" src={require("../imagenes/basquiat-uno.jpg")} alt="Foto basquiat uno" />
        <div className="contenedor-texto-testimonio">
          <p className="nombre-testimonio">Franco</p>
          <p className="cargo-testimonio">Nada</p>
          <p className="texto-testimonio">Quisque consequat varius dui, id sollicitudin libero lobortis nec. Vivamus et eros at odio pulvinar eleifend ut nec dui. Nunc blandit auctor mi sed molestie. Donec congue mauris sed augue vulputate, ut dignissim elit lacinia. Donec fringilla ligula lorem. Curabitur tellus lorem, pharetra vitae malesuada vitae, consectetur sed purus. Proin vitae magna nunc. In eu velit a elit hendrerit molestie sit amet sed urna. Donec eleifend nisl ut pulvinar placerat. Quisque sollicitudin molestie felis, sit amet varius mauris venenatis ac. Maecenas id enim quis arcu porta lacinia.

</p>
        </div>
      </div>
    );
}

export default Testimonio;