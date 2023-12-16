
/**
 * Para pedir la carta
 * @param {Array<String>} deck Es el array de las cartas
 * @returns {String} Regresa una carta, por ejemplo: AS, QS, 10H
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}