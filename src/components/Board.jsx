import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import O from '../assets/O.png';
import X from '../assets/X.png';
const Board = () => {
    
    const initialState=new Array(9).fill(null);
    const [data,setData]=useState(initialState);
    const[count,updatecount]=useState(0);
    const handleClick=(num,index)=>{
        if(data[index]!==null){
            return;
        }
       if(num%2===0){
        updatecount(num+1);
        let newdata=[...data];
        newdata[index]='O';
        setData(newdata);
       }else{
        updatecount(num+1)
        let newdata=[...data];
        newdata[index]='X';
        setData(newdata);
       }
       
    }
    const checkwinner=()=>{
       
          if((data[0]==='X'&& data[1]==='X'&& data[2]==='X')||(data[3]==='X'&& data[4]==='X'&& data[5]==='X')||(data[6]==='X'&& data[7]==='X'&& data[8]==='X') ||(data[0]==='X'&& data[4]==='X'&& data[8]==='X')||(data[2]==='X'&& data[4]==='X'&& data[6]==='X')||(data[0]==='X'&& data[3]==='X'&& data[6]==='X')||(data[1]==='X'&& data[4]==='X'&& data[7]==='X')||(data[2]==='X'&& data[5]==='X'&& data[8]==='X')){
            alert('X is winner')
            setData(initialState);
            return;
          }else if((data[0]==='O'&& data[1]==='O'&& data[2]==='O')||(data[3]==='O'&& data[4]==='O'&& data[5]==='O')||(data[6]==='O'&& data[7]==='O'&& data[8]==='O') ||(data[0]==='O'&& data[4]==='O'&& data[8]==='O')||(data[2]==='O'&& data[4]==='O'&& data[6]==='O')||(data[0]==='O'&& data[3]==='O'&& data[6]==='O')||(data[1]==='O'&& data[4]==='O'&& data[7]==='O')||(data[2]==='O'&& data[5]==='O'&& data[8]==='O')){
            alert('O is winner');
            setData(initialState);
            return;
          }
         
         if(!data.includes(null)){
          alert('No Winner');
          setData(initialState);
          return;
         }


         
        
    }
    useEffect(()=>{
        checkwinner(); 
    },[data])
  return (
    <>
    <div style={{color:'white',fontSize:'2em',textAlign:'center',marginBottom:'1em'}}>TIC TAC TOE</div>
    <BoardStyle>
    {data.map((el,index)=><button key={index} onClick={(event)=>handleClick(count,index)} className="box">{el==='X'?<img src={X} alt='x'/>:el==='O'?<img src={O} alt='o'/>:null}</button>)}
    </BoardStyle>
    </>
  )
}
const BoardStyle= styled.div`
 display:grid;
 grid-template-columns:repeat(3,1fr);
 grid-template-rows:repeat(3,1fr);
 gap:1em;
 align-content:center;
 align-items:center;
 border:1px solid;
 padding:1em;
 border-radius:.5em;
 background-color:#3B185F;
 .box{
    border:1px solid black;
    /* padding:2em ; */
    display:flex;
    align-content:center;
 align-items:center;
    width:5em;
    height:5em;
    border-radius:.3em;
    background-color:#C060A1;
    
    &:hover{
        background-color:#F0CAA3;
    }
    &:disabled{
        border:1px solid black;
    /* padding:2em ; */
    border-radius:.3em;
    background-color:#C060A1;
    }
    img{
        width:4em;
        padding:0px;
        /* disabled:true; */
    }
   
 }


`

export default Board