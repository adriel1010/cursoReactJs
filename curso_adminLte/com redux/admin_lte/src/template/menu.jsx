import React from 'react'

export default props => ( 

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <i className='fa fa-calendar-check-o' /> TodoApp
  </a>
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
 
      <li className="nav-item">
        <a className="nav-link" href="/todos">Tarefas</a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="/about">Sobre</a>
      </li> 
    </ul>
    
  </div>
</nav>

)