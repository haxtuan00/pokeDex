import React,{useState} from 'react'
import styles from './styles.module.scss'
import {AiOutlineSearch} from 'react-icons/ai'
const Header = ({inputvalue}) => {
  const changes=(e)=>{
    inputvalue(e.target.value)
  }
  return (
    <div className={styles.input_search}>
        <input onChange={changes} className={styles.input} type="text" placeholder='Search your Pokemon'/>
        <button>
            <AiOutlineSearch/>
        </button>
    </div>
  )
}

export default Header