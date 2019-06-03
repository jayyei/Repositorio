import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super()
        this.state = { mouseX: 0, mouseY: 0}
        this.handleMouseMove = this.handleMouseMove.bind(this)
    }

    handleClick(e) {
        console.log(e)
        console.log(e.nativeEvent)
        alert('Hi there');
    }

    handleMouseMove(e) {
        const { clientX, clientY } = e
        this.setState({mouseX: clientX, mouseY: clientY})
    }
    render () {
        return(
            <div className="App">
                <h4> Eventos </h4>
                <button onClick= {this.handleClick }> Hi there! </button>
                <div 
                    onMouseMove={this.handleMouseMove}
                    style={{border:'1px solid #000', marginTop:10, padding:10 }}>
                    <p>{this.state.mouseX}, {this.state.mouseY}</p>
                </div>
            </div>
        )
    }
}
export default App;