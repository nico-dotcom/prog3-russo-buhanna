import React, { Component} from 'react'

class Filtrado extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput1: ''
        }
    }

    evitarSubmit(event){
        console.log(event)
        event.preventDefault()
    }

    controlarInputs(event){
        this.setState({
            valorInput1: event.target.value
        }, () => this.props.filtrarPeliculas(this.state.valorInput1) )

    }

    render(){
        return(
            <form className='search-form' onSubmit={(event) => this.evitarSubmit(event)} >
                <input type="text" placeholder="Buscar película"
                    onChange={(event)=> this.controlarInputs(event)} 
                    value={this.state.valorInput1}
                />
            </form>
        )
    }

}

export default Filtrado