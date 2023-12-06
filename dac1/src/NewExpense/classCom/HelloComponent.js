import React from "react";
class HelloComponent extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            name : "anand",
        }
    }
    render()
    {
        return (<h1>Class Component is under construction : {this.state.name}</h1>)
    }
}
export default HelloComponent;