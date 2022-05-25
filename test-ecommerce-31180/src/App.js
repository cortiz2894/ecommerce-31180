import './App.css';
import './test.css'
import NavBar from './components/NavBar/NavBar'
import CardList from './components/CardList/CardList';
import productos from './utils/productsMock'
import { useState, useEffect } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
    const [products, setProducts] = useState([])
    
    useEffect( () => {
        getProducts()
        .then( (response) => {
            setProducts(response)
        })
        .catch( (err) => {
            console.log("Catch: Fallo la llamada.", err)
        })
        .finally( () => {
            // console.log("Finally: termino la promesa")
        })
    }, [])

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 4000)
        })
    }  



//   useEffect( () => {
      
//     fetch('https://jsonplaceholder.typicode.com/users', {
//         method: 'PATCH',
//         headers : {
//             'Access-Control-Allow-Origin': 'http://localhost:3000',
//             'Content-Type': 'application/json',
//             'Autorization' : token
//         },
//         body: JSON.stringify({
//             name: "christian",
//             mail: 'asda@gmail.com',
//         })
//     })
//     .then((response) => {
//         return response.json()
//     })
//     .then( (data) => {
//         console.log("respuesta : ", data)
//     })

//   }, [])

  return (
    //JSX
    <div className="App">
      <NavBar/>
      {/* <div className='general-container'>
        <CardList title={'Productos Recomendados'} products={productos}/>
      </div>
       */}
       <ItemDetailContainer />
    </div> 

  );
}

export default App;
