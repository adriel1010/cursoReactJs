import React from 'react'
import axios from 'axios'
import AnuncioHome from './anuncio-home'



class CategoriaInterna  extends Component{
//https://mercadodev-ef540.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22automoveis%22

  constructor(props){
    super(props)

    this.state = {
      anuncios: {}
    }

    this.loadAnuncios = this.loadAnuncios.bind(this)

    this.loadAnuncios(newProps.match.params.urlCategoria)

  }

  loadAnuncios(urlCategoria){

    const url = `https://mercadodev-ef540.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`;
    axios.get(url).then( data => {
      this.setState({ anuncios: data.data })
      this.categoria =  urlCategoria
    })

  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.urlCategoria){
      if(this.categoria !== newProps.match.params.urlCategoria ){
        this.loadAnuncios(newProps.match.params.urlCategoria)
      }
    }
  }

  render() {
    return (

      <div className="row">
       { Object.keys(this.state.anuncios).map( key => {
         const anuncio = this.state.anuncios[key]
         return <AnuncioHome id={key} key={key} anuncio={anuncio} />
       }) }
     </div>

    )

}

}
export default CategoriaInterna
