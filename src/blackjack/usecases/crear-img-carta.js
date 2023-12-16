
/**
 * 
 * @param {String} carta Es la carta para agregarla
 * @param {HTMLImageElement} divCartas Es el elemento donde van las imagenes de la computadora
 */
export const crearImg = ( carta, divCartas ) => {

    if(!carta) throw new Error('No hay carta');
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    divCartas.append( imgCarta );

}



