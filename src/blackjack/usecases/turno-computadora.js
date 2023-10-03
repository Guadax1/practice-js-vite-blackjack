import { pedirCarta, valorCarta, crearCartaTHML } from './'


/**
 * turno de la computadora
 * @param { Number } puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param { HTMLElement } puntosHTML HTML para mostrar los puntos
 * @param { HTMLElement } divCartasComputadora HTML para mostrar las cartas de la computadora
 * @param { Array<String> } deck 
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if ( !puntosMinimos ) throw new Error( 'Argumento puntosMinimos es necesario' );
    if ( !puntosHTML ) throw new Error( 'Argumento puntosHTML es necesario' );

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaTHML( carta );
        divCartasComputadora.append( imgCarta );

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
    }, 100 );
}