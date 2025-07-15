import { useState } from "react";


export default function MyApp(){const[count,setCount]=useState(0); function push() {setCount(count+1)}return (<div> <h1>Welcome to my app</h1> <MyButton count={count} onClick={push}/><MyButton count={count} onClick={push}/></div>);}

function MyButton({count,onClick}){ return (<button onClick={onClick}>ボタンが{count}回押されました</button>)}
