// Palabra que acompaña a la cantidad de pases ("1 pase", "2 pases").
// La usan el servidor y los scripts del navegador: no repetir en otro lado.
export function etiquetaPases(pases: number | string): string {
  return Number(pases) === 1 ? "pase" : "pases";
}
