import React, { Component } from 'react'
import base from '../banco/base'
import AnuncioHome from '../components/anuncio-home'
import HeaderHome from '../components/header-home'


import Categoria from '../components/categoria'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      anuncios: []
    }



    base.bindToState('anuncios', {
      context: this,
      state: 'anuncios',
      queries:{
        limitToLast:3
      }
    });

  }

  render () {
    let index = 0;
    return (
      <div>
      <div className="container">
      <HeaderHome />
      <h3>Últimos Anúncios</h3>
      <div className="row">

      {
        Object.keys(this.state.anuncios).map( key => {
          const anuncio = this.state.anuncios[key]
          return  [

            <AnuncioHome anuncio={anuncio}/>,
            ++index%4 === 0 && <div key={key} className="w-100"></div>
          ]
        })
      }
      </div>

      <h3>Categorias</h3>
      <div className="row">
      {
        this.props.categorias.map( (cat, indice) => {
          return  [
            <Categoria categoria={cat} />,
            ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
          ]
        })
      }



      </div>
      </div>
      </div>

    )

  }
}

export default Home
