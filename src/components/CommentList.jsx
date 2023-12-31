import { Component } from "react";
import ListGroup from 'react-bootstrap/ListGroup';






class CommentList extends Component{
    state={
reservation:[],

    }

    
    getComment=()=>{
        
        console.log(this.props.Id,`ciaow22`)
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.Id}`,{headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmNhZWY2ZTNkZDAwMTQ5NWU0NzMiLCJpYXQiOjE2OTgzMjc3MjYsImV4cCI6MTY5OTUzNzMyNn0.tiIIVH3G0CZxJMnN5wdW_wBXmeiHiRSF4i4GjMz16jA"
        }}
        )
        .then((response)=>{
            if(response.ok){
                return  response.json()
            }else{
                throw new Error(`errore nel recuper informazioni`)
            }
        })
        .then((data)=>{
            console.log(`dati recuperati dddddddddd`, data)
            this.setState({
                reservation:data,
                loading:false
            })
        })
        .catch(error=>{
            console.log(`ERROR`,error)
            this.setState({
                loading:false
            })
        })}
        componentDidUpdate(prevProps,prevState){
           
            if(prevProps.Id !== this.props.Id){

                this.getComment()}}
            
            
           
            
            
         

    render(){
       
        return(
            
            <ListGroup >
                
                
                {   
                    this.state.reservation.map((comment,i)=>{
                        
                       return <ListGroup.Item className="bg-info" key={i+1}>{i+1} - {comment.comment} {comment.rate}</ListGroup.Item>         
                    })
                }
            </ListGroup>
        )
    }
}




export default CommentList