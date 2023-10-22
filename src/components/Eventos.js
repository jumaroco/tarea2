import React,{useState} from 'react'

const Eventos = () => {

    const [titulo, setTitulo] = useState('Titulo desde estado');
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState('');

    const aumentar = () => {
        setContador(contador + 1);
    }

    const disminuir = () => {
        setContador(contador - 1);
        if(contador === -5){
            alert("La temperatura es muy baja");
            setContador(0);
        }
    }
    
    const handleInput = (e) => {
        setNombre(e.target.value);
    }

    const capturarNombre = (e) => {
        e.preventDefault();
        alert(nombre);
    }
    
  return (
    <div>
        <hr />
        <h3 className='text-info'>1- Manejo de Eventos - Cambiar titulo</h3>
        <h4 className=' bg-danger text-white'>{titulo}</h4>
        <button className='btn btn-success' onClick={() => setTitulo('Titulo cambiado desde el evento')}>Cambiar Titulo</button>
        <hr />
        <h3 className='text-info'>2- Manejo de Eventos - Aumentar y Disminuir</h3>
        <h3>{contador}</h3>
        <button className='btn btn-success' onClick={aumentar}>Aumentar (+)</button>
        <button className='btn btn-danger mx-2' onClick={disminuir}>Disminuir (-)</button>
        <hr />
        <h3 className='text-info'>3- Manejo de Eventos - Input</h3>
        <div>
            <input type="text" 
             placeholder="Ingrese su nombre"  className='form-control'
              value={nombre}
              onChange={handleInput} />
        </div>
        <p className=''>El nombre es <span className='bg-success text-white'>{nombre}</span></p>
        <button className='btn btn-success' onClick={capturarNombre}>Capturar Nombre</button>
    </div>
  )
}

export default Eventos