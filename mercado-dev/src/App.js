import React, { Component } from 'react';
import logo from './logo.svg';
import HeaderHome from './components/header-home'
import AnuncioHome from './components/anuncio-home'
import Footer from './components/footer'
import Categoria from './components/categoria'
import base from './banco/base'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      categorias: [],
      anuncios: []
    }

    base.bindToState('categorias', {
      context: this,
      state: 'categorias',
    });

    base.bindToState('anuncios', {
      context: this,
      state: 'anuncios',
      queries:{
        limitToLast:3
      }
    });

  }





  render() {

    let index = 0;

    return (
      <div className="App">
       <HeaderHome />

       <div className="container">
         <h3>Últimos Anúncios</h3>
         <div className="row">

           {
             this.state.anuncios.map( (anun, indice) => {
               return  [

                    <AnuncioHome anuncio={anun}/>,
                 ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
               ]
             })
           }
          </div>

       <h3>Categorias</h3>
       <div className="row">
          {
            this.state.categorias.map( (cat, indice) => {
              return  [
                <Categoria categoria={cat} />,
                ++index%4 === 0 && <div key={'c'+indice} className="w-100"></div>
              ]
            })
          }



</div>
</div>
       <Footer />



      </div>
    );
  }
}

export default App;
