'use strict';
// (function(){
//     const Luis = {//Objeto

//         name: 'Luis',
//         lastName: 'Perez',
//         address: {
//             street: '1st Avenue',
//             city: 'NY'
//         }
//     }
//     console.log(Luis);

//     const Mario = {...Luis, address: {
//         ...Luis.address
//     }}; //Para copiar


//     Mario.name = 'Mario';
//     Mario.address.street = '2nd Avenue';
//     console.log(Mario);
//     console.log(Luis);

//     // Luis.name = 'Luis';
//     // console.log(Luis);
//     // console.log(Mario);

//     const Array1 = [1,2,3];
//     const Array2 = [...Array1];
//     Array1.push(4);
//     console.log(Array1);
//     console.log(Array2);

// })();

//Encapsulamiento
(function (global) {
    const stateGenerator = (initialState) => {
        const state = initialState;
        return {
            getState: () => ({ ...state }), //spread operator
            agregaAlumno: (alumno) => { state.alumnos.push(alumno) }
        }

    }
    global.stateGenerator = stateGenerator;
})(window)
