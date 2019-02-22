import React, { Component } from 'react'

import Grid from '../template/grid'
import IconButton from './iconButton'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { add, changeDescription , search , clear} from './todoActions'


class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

     keyHandler = (e) => {
         // extrair atributos de cada um deles/ caso não dizesse assim, precisaria usar o this.props.nomeDoMetodo...
         const { add, clear, search, description } = this.props
        if(e.key === 'Enter') {
            e.shiftKey ? search(description) : add(description)
        } else if (e.key === 'Escape'){
            clear()
        }
    }

    render () {
        const { add, search, description } = this.props
        // esse add chamado no onClick, ta sendo chamado la de todoAction.js
        return (
            <div role='form' className='todoFrom row'>
        
            <Grid cols='12 9 10'> 
                <input id='description' className='form-control'
                        placeholder='Adicione uma tarefa' 
                        value={this.props.description}
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        ></input> 
           </Grid>
            <Grid cols='12 3 2'> 
                <IconButton style='primay' icon='plus' 
                onClick={() => add(description) }></IconButton>
    
                <IconButton style='info' icon='search' 
                onClick={() => search(description)}></IconButton>
    
                <IconButton style='default' icon='close' 
                onClick={this.props.clear}></IconButton>
              
            </Grid>
        </div>
        )
    }

} 

const mapStateToProps = state => ({ description: state.todo.description })
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)

/**
 * o que está acontecendo....
 * 
 * o meu onChange do input está apontando para meu método changeDescription, que foi mapeado dentro de mapDispatchToProps 'aqui dentro tem esse método'
 * - depois de mapeado, passando um mapDispatchToProps passando um dispatch para ele, ele simplesmente irá la nesse método changeDescription onde foi criado e
 * executar ele, nesse obj irá ser retornado, nele tem o tipo da ação e o valor digitado no campo input, e esse valor é armazenado dentro do payload
 * e esse payload é usando dentro de todoReducer que irá mudar quando o estado for alterado, ai lá em reducer.js ele é armazenado em todo 
 * 
 * 
 * o search esta dentro de todoActions.js, ele é chamado pq foi declarado aqui na declaração do exports
 */