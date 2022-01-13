import React from 'react'
import './App.css'
class App extends React.Component{
    constructor(){
        super();
        this.state = {advice:'' }
    }

    
    getAdvice = () =>{
        fetch(`https://api.adviceslip.com/advice`)
        .then(response =>  response.json())
        .then(data => {
            const {advice} = data.slip
            this.setState({advice})
        })
    }
    componentDidMount(){
        this.getAdvice()
    }
   
    render(){
        const {advice} = this.state

        return(
        
            <div>
                
                <div className = "card">
                <h1 className="card-text">{advice}</h1>
                
                <button 
                className = "card-btn"
                onClick={this.getAdvice}>get advice
                </button>
                </div>
                
            </div>
        )
    }
    
    
}

export default App