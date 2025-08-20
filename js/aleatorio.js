const nomes = [
    "Alex", "Morgan", "Casey", "Jordan", "Taylor", 
    "Riley", "Sage", "Phoenix", "Nova", "Orion"
];

const cargos = [
    "Comandante", "Capitão", "Líder da Expedição", 
    "Chefe da Missão", "Coordenador", "Oficial Superior"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
export const cargo = aleatorio(cargos);