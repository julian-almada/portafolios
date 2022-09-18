import Barra from "./components/barra/Barra";
import Footer from "./components/footer/Footer";

window.onscroll = function() {
  let posicion = window.pageXOffset || document.documentElement.scrollTop;

  let elemento1 = document.getElementById('heart');
  let elemento2 = document.getElementById('fire');

  elemento1.style.bottom = posicion * 0.1 + 'px';
  elemento2.style.top = posicion * 0.1 + 'px';
}

function App() {
  return (
    <div className="App">
      <Barra />
      <Footer />
    </div>
  );
}





export default App;
