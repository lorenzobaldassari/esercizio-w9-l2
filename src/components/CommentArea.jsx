import { Component } from "react";
import CommentList from "./CommentList";
// import AddComment from "./AddComment";


// const apikey=`eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNjRiN2Y2ZTNkZDAwMTQ5NWU0NTMiLCJpYXQiOjE2OTgzMjU2ODcsImV4cCI6MTY5OTUzNTI4N30.REJTaJMw6lxDXD-JhQNGze2k4dKDtBNP7edMET0V4Gw`
class CommentAera extends Component{
    

    state=({
        data:[]

    })
    
    // componentDidUpdate(prevProps,prevState){
    //       if(prevProps.id !== this.props.id){
    //           this.getComment()
    //       }
    //   }
    
    // getComment=()=>{
        
        
    //     fetch(`https://striveschool-api.herokuapp.com/api/comments`,{headers: {
    //         "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNmNhZWY2ZTNkZDAwMTQ5NWU0NzMiLCJpYXQiOjE2OTgzMjc3MjYsImV4cCI6MTY5OTUzNzMyNn0.tiIIVH3G0CZxJMnN5wdW_wBXmeiHiRSF4i4GjMz16jA"
    //         }}
    //    )
    //     .then((response)=>{
    //         if(response.ok){
    //             return  response.json()
    //         }else{
    //             throw new Error(`errore nel recuper informazioni`)
    //         }
    //     })
    //     .then((data)=>{
    //         console.log(`dati recuperati array commenti`, data)
    //         this.setState({
    //             data:data,
               
    //         })
    //     })
    //     .catch(error=>{
    //         console.log(`ERROR`,error)
           
    //     })}
       

    
    render(){
        return(
            <div>          
                    <CommentList Id={this.props.id} />
            </div>
        )
    }
}




export default CommentAera