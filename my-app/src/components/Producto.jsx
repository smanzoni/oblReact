import React,{Component} from 'react';

class Producto extends Component{

    constructor(props){
        super(props);

        this.state = { cantidad: 0,
                        stock: this.props.stock }

        this.agregarCarrito = this.agregarCarrito.bind(this);
        this.setZero = this.setZero.bind(this);
        this.stockMasDiez = this.stockMasDiez.bind(this);
    }
    
    agregarCarrito(evt){
        if(this.state.stock < 1)alert("No hay mas stock")
        else{
            this.setState({ cantidad: this.state.cantidad + 1 });
            this.setState({ stock: this.state.stock -1});
        }
    }

    setZero(evt){
        this.setState({cantidad: 0});
    }

    stockMasDiez(evt){
        this.setState({stock: this.state.stock+=10})
    }

    render(){

        const {name} = this.props;
        let {cantidad,stock} = this.state;

        return (
            <div>
                <h2>Nombre: {name}</h2>
                <h3>Stock: {stock}</h3>
                <p>Cantidad: {cantidad}</p>

                <button onClick={evt => this.agregarCarrito()}>Agregar</button>
                <button onClick={evt => this.setZero()}>Borrar</button>
                <button onClick={evt => this.stockMasDiez()}>Stock +10</button>
            </div>
        );

    }
}

export default Producto;