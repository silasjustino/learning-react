import React, {useState} from 'react'
import './style.css'

import {Card} from '../../components/Card'

export function Home() {

  const [studentName, setStudentName] = useState()

  return (
    <div className='container'>
    <h1>Teste do estado: {studentName}</h1>
    <input type="text" placeholder="Digite o nome..."
    onChange={e => setStudentName(e.target.value)}
    />
    <button>Adicionar</button>

    <Card name="Silas Justino" time="10:55:25"/>
    <Card name="Thor Odinson" time="11:19:24"/>
    <Card name="Loki Lawfeyson" time="11:25:43"/>
    </div>
  )
}

