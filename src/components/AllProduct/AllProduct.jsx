import React,{useState,useEffect} from 'react'
import Cardproduct from '../cardProduct/cardproduct'
import styles from './style.module.scss'
import Header from '../header/header'
const AllProduct = ({setId,data,setShow}) => {
  const [inputValue,setInputValue]=useState('')
  return (
    <div className={styles.container}>
      <Header inputvalue={setInputValue} />
      <div className={styles.wrap}>
        {data.filter((items)=>{
           return items.name.includes(inputValue)
          })
        .map((item)=>{
            return <Cardproduct setId={setId} setcheck={setShow} key={item.name} data={item}/>
        })}
    </div>
    
    </div>
  )
}
export default AllProduct