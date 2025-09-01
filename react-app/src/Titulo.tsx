function Titulo() {
  const nombre = "Sergio";
  if (nombre) {
    return <h1>Hola {nombre}</h1>;
  }
  return <h1>Hola hola</h1>;
}

export default Titulo;
