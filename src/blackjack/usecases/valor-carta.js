

/**
 * Esta función convierte las letras a valores numéricos y los numeros en formato string a number
 * @param { String } carta Ejemplo: '2C' o 'QD'
 * @returns { Number } retorna un número que se sumará al html
 */

export const valorCarta = ( carta ) => {

    if ( !carta ) throw new Error( 'Debes enviar la carta' ) 

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}