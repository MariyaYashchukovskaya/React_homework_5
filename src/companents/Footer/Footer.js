import {footerConst} from './const'
import './Footer.css'
function sum(a,b){
    return a+b
}

// const arr = ['Title1','Title2','Title3']
const arrNew = [
    {id: 123345, title:'Title1',text:'Title1', posts:['e','x','y'] },
    {id: 1233456, title:'Title2',text:'Title2',posts:['i','v','d'] },
   
]



function Footer(){
const isLogin = false;
    const condition = sum(1,5)<3
    const className=condition? "footer" : "footerNew"

    if(isLogin){
    return(
    <footer>
      <h2 className={className}>{footerConst}</h2>
      <p>footer text</p>
      <p>{sum(2,3)}</p>
    </footer>
    )
    }else 
    return (
    <div>
        <p>FALCE</p>
    {/* <ul>
        {arr.map((item)=>(
            <li key= {item}>{item}</li>
        ))}      
    </ul> */}
    <ul>
        {arrNew.map((itemNew)=>(
            <li key= {itemNew.title}>
                <span>{itemNew.text}</span>
                <span>{itemNew.id}</span>
               {itemNew.posts.map((i)=>            
               (<span key={i} >{i}</span>))}
                </li>
        ))}      
    </ul>
    
    </div>
    )
  }

  export {Footer}