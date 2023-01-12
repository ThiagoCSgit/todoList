import './style.css'
import { KeyboardEvent, useState } from 'react'

type Props = {
    onEnter: (taskName: string) => void
}

export const AddArea = ({onEnter}: Props) => {
    const [inputText, setInputText] = useState('')
    function handleKeyUp(e: KeyboardEvent){
        if(e.code === 'Enter' && inputText !== ''){
            onEnter(inputText)
            setInputText('')
        }
    }
    return (
    <div className='containerAddArea'>
        <div className="image">+</div>
        <input 
            className='addInput' 
            type="text" 
            placeholder='Adicionar tarefa'
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyUp={handleKeyUp}  
        />
    </div>
    )
}