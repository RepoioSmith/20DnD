"use client"
import React, { useEffect } from 'react'

const SpellSelector = ({setSelectedSpells,selectedSpells}) => {
    const [spells, setSpells] = React.useState()

    useEffect(() => {
        async function fetchSpells() {
            const response = await fetch(`https://dndapi-vx9y.onrender.com/api/hechizos`)
            const data = await response.json()
            setSpells(data.hechizos)
            console.log(data.hechizos)
        }

        fetchSpells()
    }, [])
    return (
        <div>
            {spells?.map((spell) => (
                <div key={spell._id}>
                <input value={spell._id} key={spell._id} type='checkbox' onClick={(e)=>{
                    setSelectedSpells((prev) => {
                        if (e.target.checked) {
                            return [...prev, spell._id]
                        } else {
                            return prev.filter((s) => s !== spell._id)
                        }
                    })
                }}/>
                <label htmlFor={spell._id}>{spell.nombre}</label>
                </div >
            ))}    
        </div>      
    )
}

export default SpellSelector