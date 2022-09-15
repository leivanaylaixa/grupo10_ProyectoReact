import estilos from "./Card.module.css";
export function Card({ pelicula }) {
  const posterPeli = pelicula.poster;
  return (
    <li className={estilos.Card}>
      <img
        width={330}
        height={450}
        className={estilos.Imagen}
        src={posterPeli}
        alt={pelicula.Titulo}
      />
      <div> Titulo: {pelicula.Titulo}</div>
      <div>Año: {pelicula.Año}</div>
      <div>Género: {pelicula.Género}</div>
      <div>Sinopsis: {pelicula.Sinopsis}</div>
      <div>Duración: {pelicula.Duracion}</div>
    </li>
  );
}
