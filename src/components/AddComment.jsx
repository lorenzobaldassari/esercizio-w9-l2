import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class AddComment extends Component{
    state={
        
        
        comment: ``,
        rate: ``,
        elementId: ``,
        
        
    }
    

    handleInputChange=(property,value)=>{
        this.setState({
            
                elementId:58915351,
                
                [property]:value    
                
            })}


                 
            handleFormSubmit=(e)=>{
                const obj={
                    comment:`ciao`,
                    rate:`miao`,
                    elementId:`ciao`
                }
                e.preventDefault();
                fetch(`https://striveschool-api.herokuapp.com/api/comments/`,
                {
                    method:'POST',
                    body: JSON.stringify(obj),
                    headers:{
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmNhZWY2ZTNkZDAwMTQ5NWU0NzMiLCJpYXQiOjE2OTgzMjc3MjYsImV4cCI6MTY5OTUzNzMyNn0.tiIIVH3G0CZxJMnN5wdW_wBXmeiHiRSF4i4GjMz16jA",
                        "content-type":"application/json",
                    },    
                })
                .then ((res)=>{
                    console.log(`RESPONSE`,res)
                    if (res.ok){
                        alert(`prenotazione salvata`)
                    }
                    else{
                        throw new Error(`c'e stato un errore nel savataggio`)
                    }
                })  
                .catch((err)=>{
                    console.log(`errore!`, err)
                })
              }   

    render(){
        return (
            <Form onSubmit={this.handleFormSubmit}>
                
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>comment</Form.Label>
                    <Form.Control onChange={(e)=>this.handleInputChange('comment',e.target.value)} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>rate</Form.Label>
                    <Form.Control type="text"  onChange={(e)=>this.handleInputChange('rate',e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}




export default AddComment