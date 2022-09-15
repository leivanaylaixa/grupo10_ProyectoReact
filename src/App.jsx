import { Grid } from "./Grid.jsx";
import estilos from "./App.module.css";

export function App() {
  return (
    <div>
      <header>
        <h1 className={estilos.Titulo}> Peliculas Anime </h1>
      </header>
      <main>
        <h2 className={estilos.main}> Peliculas de la Semana </h2>
        <Grid />
      </main>
    </div>
  );
}
