import React from 'react'

class Field extends React.Component {
    constructor(props){
        super(props)

        this.state = {value: props.initialValue}

    }

    handleChange(event) {
        this.setState({ 
            value: event.target.value
        })
    }

    render () {
        return (
            <div>
                <label>{this.state.value}</label><br />
                <input onChange={this.handleChange.bind(this)} value={this.state.value} />
             </div>
        )
    }

}
export default Field