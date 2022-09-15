import { Card } from "./Card.jsx";
import estilos from "./Grid.module.css";
import peliculas from "./peliculas.json";

export function Grid() {
  return (
    <ul className={estilos.Grid}>
      {peliculas.map((pelicula) => (
        <Card key={pelicula.Id} pelicula={pelicula} />
      ))}
    </ul>
  );
}
