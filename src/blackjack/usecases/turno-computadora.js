import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearImg } from "./crear-img-carta";

/**
 * Turno de la computadora 
 * @param {Number} puntosMinimos Puntos minimos que la computadora necesita para poder ganar el juego
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if( !puntosMinimos ) throw new Error('Puntos minimos son necesarios');
    if( !puntosHTML ) throw new Error('Puntos HTML es necesario');

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        crearImg(carta, divCartasComputadora);

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 150 );
}
