import React from 'react'

export default class AddFolder extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            newFolder : '',
        };
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const folder = this.state
        console.log(folder)
    }

    handleFolder = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    render(){
        const {newFolder} = this.state
        return (
            <div>
            <h1>{newFolder}</h1>
           <form onSubmit={this.handleSubmit}>
               <label>
                   Folder Name:
                   <input type="text" name="newFolder" id="name" onChange={this.handleFolder}/>
               </label>
               <input type="submit" value="Submit"/>
           </form>
           </div>
        );
    }
}