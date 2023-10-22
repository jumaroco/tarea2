import React from 'react'

function Datos() {
    const name = 'Julio Rodriguez';

    const contarCaracteres = (name) => {
      return name.length;
    }
    
    const alumnos = [
      {id: 1, name: 'Julio', age: 30},
      {id: 2, name: 'Juan', age: 25},
      {id: 3, name: 'Pedro', age: 20},
      {id: 4, name: 'Maria',  age: 15},
      {id: 5, name: 'Jose', age: 10},
    ];
    
    const activo = true;
    const fecha = new Date();
    const arrayLenguajes = ['PHP', 'JS', 'Java', 'Python'];
    
      return (
        <div>
          <h1>React App</h1>
          <p>Esta es mi primera aplicación en React</p>
          <h2>¡Hola {name}!</h2>
          <h3>El nombre: {name} tiene: {contarCaracteres(name)} caracteres</h3>
          <h4>condicionales: {JSON.stringify(activo)}</h4>
          <h4>array de lenguajes de Programacion {arrayLenguajes}</h4>
          <h4>Fecha: {fecha.toLocaleDateString()}</h4>
          <h2>Lista de alumnos</h2>
          <ul>
            {alumnos.map((alumno) => (
              <li key={alumno.id}>Nombre: {alumno.name} - {alumno.age} años</li>
            ))}
          </ul>
        </div>
      );
}

export default Datos