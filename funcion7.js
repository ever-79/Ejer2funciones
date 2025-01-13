const estudiantes = [
    { nombre: 'Ana', nota: 8 },
    { nombre: 'Luis', nota: 10 },
    { nombre: 'Carlos', nota: 6 },
    { nombre: 'Raul', nota: 6 },
    { nombre: 'Martha', nota: 2 },
    { nombre: 'Mica', nota: 3 }
    ];
    
    // Usando una función flecha para filtrar estudiantes con nota mayor o igual a 7
    const aprobados = estudiantes.filter(estudiante => estudiante.nota <= 7);
    
    console.log(aprobados);
    // Salida: [ { nombre: 'Ana', nota: 8 }, { nombre: 'Carlos', nota: 9 } ]
    
    