import React from 'react'
import HeaderInterno from '../components/header-interno'
import { Link , Route} from 'react-router-dom'
import CategoriaInterna from '../components/categoria-interna'
// se precisamos manter um estado interno do componente, através do state
// usa uma classe, 
// caso ele não precisa, usa ele só passando as props, os componetes, usa como const mesmo

const Categorias = (props) => {

  return (

    <div>
      <HeaderInterno />
      <div className='container' style={{paddingTop: '120px'}}>
        <h1>Categorias</h1>
        <div className='row'>
          <div className='col-lg-4'>
           <ul>
            {
              // JSON.stringify(props.categorias)
              props.categorias.map(
                cat => {
                  return (
                  <li>  <Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link> </li>
                  )
                }
              )
            }
            </ul>
          </div>
          <div className='col-lg-8'>
            <Route path='/categorias/:urlCategoria' component={CategoriaInterna} />
          
          </div>

      </div>
      </div>
    </div>

  )
}
export default Categorias