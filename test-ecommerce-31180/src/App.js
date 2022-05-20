import './App.css';
import './test.css'
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList';
import SnackBar from './components/SnackBar/SnackBar';
import Modal from './components/Modal/Modal'
import { useState, useEffect } from 'react';

function App() {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const [products, setProducts] = useState([])
  const productos = [
      {
          title : 'Remera Oversize',
          price : 1500,
          image : 'remera1.jpg',
          description: '',
          stock: 3,
          id: 1
      },
      {
          title : 'Remera Oversize 2',
          price : 3500,
          image : 'musculosa2.jpeg',
          description: '',
          stock: 5,
          id: 2
      },
      {
          title : 'Musculosa 3',
          price : 2000,
          image : 'musculosa1.jpeg',
          description: '',
          stock: 10,
          id: 3
      },
  ]

  const getProducts = () => {
      return new Promise( (resolve, reject) => {
          setTimeout(() => {
              resolve(productos)
          }, 4000)
      })
  }  

  useEffect( () => {
      getProducts()
      .then( (response) => {
          // console.log("Then : Respuesta Promesa: ", response)
          setProducts(response)
      })
      .catch( (err) => {
          // console.log("Catch: Fallo la llamada.", err)
      })
      .finally( () => {
          // console.log("Finally: termino la promesa")
      })
  }, [])

  return (
    //JSX
    <div className="App">
      <NavBar/>
      <div className='general-container'>
        <CardList title={'Productos Recomendados'} products={productos}/>
        {/* <CardList title={'Productos Relacionados'}/> */}
      </div>
      <button onClick={() => setOpen(true)}>Abrir modal</button>
    </div> 

  );
}

export default App;
