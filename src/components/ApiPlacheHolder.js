import React, { useState, useEffect } from 'react'

const ApiPlaceHolder = () => {

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsuarios(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='container py-5'>
                <h1 className='text-center py-5'>Usuarios</h1>
                <div className='row'>
                    {
                        usuarios.map((item) => (
                            <div class="card mb-3 mx-2 col-md-5" key={item.id}>
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img src="usuario2.png" alt="..." class='card-img-top' />
                                    </div>
                                    <div class="col-md-8">
                                        <div className='card-body pie-cards'>
                                            <p class="text-sm-left"><b>Nombre: </b> {item.name}</p>
                                            <p class="text-sm-left"><b>Usuario: </b> {item.username}</p>
                                            <p class="text-sm-left"><b>Email: </b> {item.email}</p>
                                        </div>
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title">Dirección</h5>
                                                <p class="text-sm-left"><b>Calle: </b> {item.address.street}</p>
                                                <p class="text-sm-left"><b>Apartamento: </b> {item.address.suite}</p>
                                                <p class="text-sm-left"><b>Ciudad: </b> {item.address.city}</p>
                                                <p class="text-sm-left"><b>Zipcode: </b> {item.address.zipcode}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ApiPlaceHolder