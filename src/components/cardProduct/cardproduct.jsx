import React,{useEffect,useState} from 'react'
import styles from './stylecardPr.module.scss'
import { ThreeCircles } from 'react-loader-spinner'
import  '../GlobalStyle/style.css'

const Cardproduct = ({setId,data,setcheck}) => {
  const [resultImage,setResultImage]=useState([])
  const [result,setResult]=useState([])
  const [resultType,setResultType]=useState([])
  const [error,setError]=useState('')
  const [isLoading,setIsLoading]=useState(false)
  useEffect(()=>{
    fetchdata()
  },[])
  const fetchdata= ()=>{
    try {
      setIsLoading(true)
      setTimeout(async() => {
        const dataAPI=await fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
        const datas=await dataAPI.json()
        setResult(datas)
        setResultImage(datas.sprites.front_default)
        const types=datas.types.map((item)=>{
          return item.type.name;
        })
        setResultType(types)
        setIsLoading(false)
      }, 500);
    } catch (err) {
      setError(err.message)
    }
  }
  const handleClick=async()=>{
    const dataAPI=await fetch(`https://pokeapi.co/api/v2/pokemon/${data.name}`)
    const datas=await dataAPI.json()
    setId(datas.id)
    setcheck(data.name)
  }
  return (
    <div className={styles.products} onClick={handleClick}>
      {isLoading && <ThreeCircles width="25" color="red" outerCircleColor="green" />}
       {!isLoading&& <><img className={styles.productImage} src={resultImage} alt="" />
       <div className={styles.id}>N°{result.id}</div>
        <h2 className={styles.h2}>{data.name}</h2>
        <div className={styles.types}>
           {resultType.map((item,index)=>{
            return <div key={index} className={`${styles.item} ${item}`}>
              {item}
            </div>
           })}
        </div></>}
    </div>
  )
}

export default Cardproduct