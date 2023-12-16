
/**
 * Saca el valor de la carta
 * @param {} carta Example: AH, QS, 10S, retorna una carta para convertirla en un numero despues 
 * @returns {Number}
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);

    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
            
}