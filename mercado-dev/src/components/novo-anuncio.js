import React, { Component } from 'react'

import HeaderInterno from './header-interno'
import base, { storage } from '../banco/base'
import { Redirect } from 'react-router-dom'

class NovoAnuncio extends Component {
  constructor(props){
    super(props)

    this.state = {
      sucesss: false,
      nome: '',
      descricao: '',
      preco: '',
      telefone: '',
      foto:'',
    }
  }

  onChange(campo, valor){

    this.setState({
      [campo]: valor.target ?  valor.target.value: valor,
    });

  }

  salvar(e){



    const file = this.foto.files[0]
    const { name, size } = file
    const ref = storage.ref(name)
    ref.put(file).then( img => {
     console.log(img);
      const novoAnuncio = {
        nome: this.state.nome,
        descricao: this.state.descricao,
        preco: this.state.preco,
        vendedor: 'adriel',
    //    foto: img.metadata.downloadURLs[0],
        telefone: this.state.telefone,
        categoria: this.categoria.value,
}
        base.push('anuncios', {
          data: novoAnuncio
        })
        .then(() => {

            this.setState({ sucesss: true})
         
        })


     }    )



    e.preventDefault();

  }

  render () {

    return (
      <div>
        {this.state.sucesss &&  <Redirect to='/' />}
      <HeaderInterno />
      <div className="container" style={{paddingTop: '120px'}}>
        <h1>Novo Anuncio</h1>
        <form onSubmit={null}>

          <div className='form-group'>
            <label htmlFor='foto'>Foto</label>
            <input  type='file' className='form-control' id='foto' placehold='Foto' ref={(ref) => this.foto = ref}/>
          </div>

          <div className='form-group'>
            <label htmlFor='nome'>Nome</label>
            <input value={this.state.nome} onChange={this.onChange.bind(this, 'nome')} type='text' className='form-control' id='nome' placehold='Nome '/>
          </div>

          <div className='form-group'>
            <label htmlFor='categorias'>Categorias</label>
             <select ref={(ref) => this.categoria=ref}>
               {this.props.categorias.map( cat => <option key={cat.url} value={cat.url}>{cat.categoria}</option> )}
             </select>
          </div>

          <div className='form-group'>
            <label htmlFor='descricao'>Descrição</label>
            <input value={this.state.descricao} onChange={(e) => {this.setState({descricao: e.target.value})}} type='text' className='form-control' id='descricao' placehold='Descrição '/>
          </div>

          <div className='form-group'>
            <label htmlFor='preco'>Preço</label>
            <input value={this.state.preco} onChange={(e) => {this.setState({preco: e.target.value})}} type='text' className='form-control' id='preco' placehold='Preço '/>
          </div>

          <div className='form-group'>
            <label htmlFor='telefone'>Telefone</label>
            <input value={this.state.telefone} onChange={(e) => {this.setState({telefone: e.target.value})}} type='text' className='form-control' id='telefone' placehold='Telefone'/>
          </div>

          <button type='submit' onClick={this.salvar.bind(this)}  className='btn btn-primary'>Salvar Anúncio</button>
        </form>
      </div>

      </div>
    )
  }


}

export default NovoAnuncio
