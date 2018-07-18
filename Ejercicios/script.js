'use strict';
(() => {


    const rAppend = appendLI('reprobados');
    const aAppend = appendLI('asesorias');
    const bAppend = appendLI('becados');
    // const alumnosState = alumnosService({alumnos:[]});

    // fetch('/cars').then((res)=>{
    //     const cars = res.json();
    //     console.log(cars);
    // });
    fetch('/alumnos').then((res) => {
        return res.json();
    })
        .then((alumnos) => {

            const alumnosReprobados = alumnos.filter(alumno => alumno.promedio < 30)
            alumnosReprobados.forEach(alumnosReprobados => {
                rAppend(alumnosReprobados.nombre);
            })
            const alumnosAsesorias = alumnos.filter(alumno => alumno.promedio >= 30 && alumno.promedio < 80)
            alumnosAsesorias.forEach(alumnosAsesorias => {
                aAppend(alumnosAsesorias.nombre);
            })
            const alumnosBecados = alumnos.filter(alumno => alumno.promedio >= 80 || (alumno.destacado && alumno.promedio >= 30))
            alumnosBecados.forEach(alumnosBecados => {
                bAppend(alumnosBecados.nombre);
            })

        })

    // function imprimirAlumnos(alumnos) {
    //     document.getElementById('becados').innerHTML = '';
    //     alumnos.forEach(alumno => {
    //         bAppend(alumno.nombre);
    //     });
    // }
    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
