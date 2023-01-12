import './style.css'
import {Item} from '../../types/item'
import { useEffect, useState } from 'react'
type Props = {
    item: Item,
    handleStatus: (statusTask: boolean, taskId: number) => void
}

export const ListItem = ({item, handleStatus}: Props) => {
    const [done, setDone] = useState(item.done)

    function changeCheck(value: boolean, labelTarget: string){
        setDone(value)
        let label = document.getElementById(`${labelTarget}`)
        if(value && label != null){
            label.style.textDecoration = 'line-through'
        } else if (label != null){
            label.style.textDecoration = 'none'
        }
    }

    useEffect(() => {
        changeCheck(item.done, `label-${item.id}`)
    }, [item])

    function handleChange(check: boolean, label: string){
        changeCheck(check, label)
        handleStatus(!done, item.id)
    }

    return (
        <div className='containerItem'>
            <input 
                type="checkbox" id={'input-'+item.id} checked={done} 
                onChange={e => handleChange(e.target.checked, 'label-'+item.id)}
            />
            <label id={'label-'+item.id} htmlFor={'input-'+item.id}>{item.name} - {item.id} - {item.done.toString()}</label>
        </div>
    )
}