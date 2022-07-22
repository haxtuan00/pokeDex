import React,{useState,useEffect} from 'react'
import styles from './style.module.scss'
const Stat = ({data}) => {
    const [sum,setSum]=useState('')
    useEffect(()=>{
        Sum()
    })
    const Sum=()=>{
        const tong= data.stats.reduce((init,d)=>{
            return init+d.base_stat
        },0)
        setSum(tong)
    }
    console.log(sum)
  return (
    <div className={styles.wrap_stat}>
        <h4 className={styles.title}>Stats</h4>
        <div className={styles.row}>
          <div className={styles.colum}>
            <div className={styles.stat_title} style={{ background: '#DF2140',}}>HP</div>
            <h5>{data.stats[0].base_stat}</h5>
          </div>
          <div className={styles.colum}>
            <div className={styles.stat_title} style={{ background: '#FF994D',}}>ATK</div>
            <h5>{data.stats[1].base_stat}</h5>
          </div>
          <div className={styles.colum}>
            <div className={styles.stat_title} style={{ background: '#eecd3d',}}>DEF</div>
            <h5>{data.stats[2].base_stat}</h5>
          </div>
          <div className={styles.colum}>
            <div className={styles.stat_title} style={{ background: '#85DDFF',}}>SpA</div>
            <h5>{data.stats[3].base_stat}</h5>
          </div>
          <div className={styles.colum}>
            <div className={styles.stat_title} style={{ background: '#96da83',}}>SpD</div>
            <h5>{data.stats[4].base_stat}</h5>
          </div>
          <div className={styles.colum}>
            <div className={styles.stat_title} style={{ background: '#FB94A8',}}>SPD</div>
            <h5>{data.stats[5].base_stat}</h5>
          </div>
          <div className={styles.colum} style={{ background: '#88AAEA',}}>
            <div className={styles.stat_title} style={{ background: '#7195DC',}} >TOT</div>
            <h5>{sum}</h5>
          </div>
        </div>
        </div>
  )
}

export default Stat