import logo from './logo.svg';
import './App.css';
import Testimonio from "./componentes/Testimonio.jsx"

function App() {
  return (
    <div className="App">
        <div className="contenedor-principal">

          <Testimonio 
          nombre="Calavera"
          imagen="uno"
          pais="Estados Unidos"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus ornare commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis nunc sit amet velit tempor ornare vitae non arcu. Fusce nunc nunc, tempor et rhoncus et, ullamcorper quis erat. Phasellus at elementum velit, sed rhoncus lectus. Nullam fringilla ligula lacus, sed mollis est congue vitae. Cras porta, velit sit amet molestie fermentum, arcu nisl vulputate metus, nec ultricies leo dolor ut tortor.
          "
          />

          <Testimonio 
          nombre="Calavera"
          imagen="dos"
          pais="Estados Unidos"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus ornare commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis nunc sit amet velit tempor ornare vitae non arcu. Fusce nunc nunc, tempor et rhoncus et, ullamcorper quis erat. Phasellus at elementum velit, sed rhoncus lectus. Nullam fringilla ligula lacus, sed mollis est congue vitae. Cras porta, velit sit amet molestie fermentum, arcu nisl vulputate metus, nec ultricies leo dolor ut tortor.
          "
          />

          <Testimonio 
          nombre="Calavera"
          imagen="tres"
          pais="Japon"
          testimonio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus ornare commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis nunc sit amet velit tempor ornare vitae non arcu. Fusce nunc nunc, tempor et rhoncus et, ullamcorper quis erat. Phasellus at elementum velit, sed rhoncus lectus. Nullam fringilla ligula lacus, sed mollis est congue vitae. Cras porta, velit sit amet molestie fermentum, arcu nisl vulputate metus, nec ultricies leo dolor ut tortor.
          "
          />
        </div>

    </div>
  );
}

export default App;
