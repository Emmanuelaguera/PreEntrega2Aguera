import React from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Center } from '@chakra-ui/react'

const ItemListContainer = () => {
  const { category } = useParams()
  const [filtrado, setFiltrado] = useState([])
  const productos = [
    { id: "1", name: "The Last Of As", description: "Terror, Accion y Aventura", stock: "15", price: 5200, category: "cat1" },
    { id: "2", name: "Apex Legend", description: "Battle Royale", stock: "8", price: 2200, category: "cat2" },
    { id: "3", name: "Metal Gear Solid", description: "Accion, Estrategia", stock: "12", price: 3200, category: "cat3" },
    { id: "4", name: "Uncharted", description: "Accion y Aventura", stock: "6", price: 4200, category: "cat4" },

  ]
  const mostrarProductos = new Promise((resolve, reject) => {
    if (productos.length > 0) {
      setTimeout(() => {
        resolve(productos)
      }, 3000)

    } else {
      reject(" No se encuentra el producto en nuestro Stock")
    }
  })

  // mostrarProductos
  //   .then((resultado) => {
  //     console.log(resultado)
  //   })
  //   .catch((error) => {

  //   })


  //const filteredProduts = productos.filter((productos => productos.category == "cat1"))
  useEffect(() => {
    if (category) {
      const filteredProduts = productos.filter((productos => productos.category == category))
      setFiltrado(filteredProduts)
    }
    else {
      setFiltrado(productos)
    }

  }, [category])

  return (
    <Center p='1rem'>
      <ItemList productos={filtrado} />
    </Center>
  )
}

export default ItemListContainer