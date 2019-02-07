import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import TodoFrom from './todoForm'
import TodoList from './todoList'
import axios from 'axios'


const URL = 'http://localhost:3003/api/todos'

export default class Todo extends  Component {

    constructor(props){
        super(props)
        this.state = { 
            description: '',
             list: [] 
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh();
    }

    refresh(description = '') {
        const seart = description ? `&description_regex=/${description}/` : ''
        console.log('chamo o pesqui ', seart);   
        axios.get(`${URL}?sort=-creatdAt${seart}`).
            then(resp => this.setState({ ...this.state, 
                description,
                list: resp.data }))
            
    }

    handleAdd() {
        const description = this.state.description
        axios.post(URL, { description }).then(resp => this.refresh())
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`).then(resp => this.refresh(this.state.description))
    }

    handleChange(e) {
        this.setState({...this.state, description: e.target.value })
    }

    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true }).then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false }).then(resp => this.refresh(this.state.description))

    }

    handleSearch(){
        
        this.refresh(this.state.description)
    }

    handleClear(){
        this.refresh();
    }   

    render() {
        return (
            <div>
                <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
                <TodoFrom description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}/>

                <TodoList list={this.state.list} 
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                   />
            </div>
        )
    }

}