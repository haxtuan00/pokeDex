import React,{useEffect,useState} from 'react'
import AllProduct from '../AllProduct/AllProduct'
import Detail from '../rightDetail'
import styles from './style.module.scss'
import { ThreeCircles } from 'react-loader-spinner'
import {BsArrowUpShort} from 'react-icons/bs'
console.log(styles)
const Data = () => {
    const [result,setResult]=useState([])
    const [show,setShow]=useState(false)
    const [id,setID]=useState(0)
    const [next,setNext]=useState('')
    const [scroll,setScroll]=useState(false)
  useEffect(()=>{
     const handleScroll=(e)=>{
      if(e.target.documentElement.scrollTop>200){
        setScroll(true)
      }else{
        setScroll(false)
      }
     }
     window.addEventListener('scroll',handleScroll)
     fetchData()
  },[])
  const fetchData=async ()=>{
        const dataAPI=await fetch(' https://pokeapi.co/api/v2/pokemon?limit=21&offset=0')
        const data=await dataAPI.json()
        setNext(data.next)
        setResult(data.results) 
  }
  const handleNext=async ()=>{
    const dataAPI=await fetch(next)
    const data=await dataAPI.json()
    console.log(data)
    setNext(data.next)
    data.results.forEach( (data)=>{
      setResult((p)=>[...p,data])
   })
  }
  const handleTop=()=>{
    window.scroll({
      top:0,
      behavior: 'smooth'
    })
  }
  return (
    <>
       <div className={styles.app_contain}>
      <AllProduct setId={setID} setShow={setShow} data={result}/>
      
      <div className={styles.loading}>
        <ThreeCircles width="50" color="red" outerCircleColor="green" />
      </div>
      {scroll&&<div className={styles.scroll} onClick={handleTop}>
        <BsArrowUpShort fontSize='25' color='red'/>
      </div>}
      <div className={styles.btn} onClick={handleNext}>Load more</div>
    </div>
    <Detail show={show} id={id}/>
    </>
  )
}

export default Data