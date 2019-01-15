import React, { Component } from 'react'

import HeaderInterno from './header-interno'

class NovoAnuncio extends Component {

  render () {

    return (
      <div>
      <HeaderInterno />
      <div className="container" style={{paddingTop: '120px'}}>
              <h1>Novo Anuncio</h1>
              <form onSubmit={null}>
                <div className='form-group'>
                  <label htmlFor='nome'>Nome</label>
                  <input type='text' className='form-control' id='nome' placehold='Nome '/>
                </div>
              </form>
      </div>

      </div>
    )
  }


}

export default NovoAnuncio