import React,{useState,useEffect} from 'react'
import Stat from './stat'
import styles from './style.module.scss'
import {AiOutlineClose} from 'react-icons/ai'
import  '../GlobalStyle/style.css'
const Detail = ({show,id}) => {
  const [data,setData]=useState(null)
  const [entry,setEntry]=useState(null)
  const [resultType,setResultType]=useState([])
  const [resultImage,setResultImage]=useState([])
  const [close,setClose]=useState(false)
  const dataLocal= JSON.parse(localStorage.getItem('detail'))
  useEffect(()=>{
    document.querySelector('.poke_detail').classList.remove('aminationRighttoLeft')
    setTimeout(() => {
      document.querySelector('.poke_detail').classList.add('aminationRighttoLeft')
    }, 100);
    setTimeout(()=>{
      fetchData()
   fetchEntry()
    },400)
    setClose(false)
  },[show])
  const fetchData=async ()=>{
    const dtAPI=await fetch(`https://pokeapi.co/api/v2/pokemon/${show}`)
    const datas=await dtAPI.json()
   setData(datas)
   const types=datas.types.map((item)=>{
    return item.type.name;
  })
  datas.sprites.versions['generation-v']['black-white'].animated.front_default?setResultImage(datas.sprites.versions['generation-v']['black-white'].animated.front_default):setResultImage(datas.sprites.front_default)
  setResultType(types)
  }
  const fetchEntry=async ()=>{
    const entrydataAPI=await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const dataEntry=await entrydataAPI.json()
    setEntry(dataEntry.flavor_text_entries[0].flavor_text)
  }
  const clickClose=()=>{
    setClose(true)
  }
  return (
    <div  className={`${styles.WrapDetail} poke_detail`} id={close?'close':''}>
      {/* <div className={styles.background}></div> */}
      <div className={styles.close} onClick={clickClose}>
        <AiOutlineClose/>
      </div>
      <div className={styles.detail}>
        <img className={styles.current_pokemon_image} src={data?resultImage:'https://js-pokedex-virid.vercel.app/src/no-pokemon-selected-image.png'}/>
        <h2 className={styles.name}>{data?data.name:''}</h2>
        <div className={styles.types}>
           {resultType.map((item,index)=>{
            return <div key={index} className={`${styles.item} ${item}`}>
              {item}
            </div>
           })}
        </div>
        <h4>{data?'Pokedex Entry':''}</h4>
        <span className={styles.entry}>{entry}</span>
        {data?<div className={styles.hei_wei}>
          <div className={styles.height}>
            <h4 className={styles.title}>Height</h4>
            <div className={styles.number}>{data.height/10} m</div>
          </div>
          <div className={styles.weight}>
            <h4 className={styles.title}>Weight</h4>
            <div className={styles.number}>{data.weight/10} Kg</div>
          </div>
        </div>:''}
        <div>
          <h4 className={styles.title}>{data&&'Abilities'}</h4>
          <div className={styles.hei_wei}>
            {data&&data.abilities.map((item)=>{
              return <div className={styles.Abilities_number}>{item.ability.name}</div>
            })}
          </div>
        </div>
       {data&&<Stat data={data}/>}
      </div>
    </div>
  )
}
export default Detail