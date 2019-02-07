import React from 'react'
import IconButton from './iconButton'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux' // irá conectar esse componente com os dados e store
import { markAsDone, handleMarkAsPending, remove } from './todoActions'


const TodoList = props => {

    const renderRows = () => {
        const list = props.list || []
        return  list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : '' } >{todo.description}</td>
                <td>
                    <IconButton style='sucess' icon='check' hide={todo.done}
                        onClick={() => props.markAsDone(todo)}></IconButton>

                    <IconButton style='warning' icon='undo' hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)}></IconButton>

                    <IconButton style='danger' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions' >Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        
        
        </table>
    )
    }
    // mapeia o objeto do redux 
    // esse atributo list aqui, ta vindo la da onde eu mapiei o list na declaração do redux 
    const mapStateToProps = state => ({ list: state.todo.list })
    const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, handleMarkAsPending, remove }, dispatch)

    export default connect(mapStateToProps, mapDispatchToProps)(TodoList)