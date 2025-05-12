"use client"
import React, { useEffect, useState } from 'react'

const ClassSelect = ({ setSelectedClass }) => {
  const [classes, setClasses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchClasses() {
      try {
        const response = await fetch('http://localhost:8000/api/clases')
        if (!response.ok) throw new Error('Error al obtener las clases')
        const data = await response.json()
        setClasses(data.clases)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchClasses()
  }, [])

  return (
    <select
      name="characterClass" 
      defaultValue=""
      onChange={(e) => setSelectedClass(e.target.value)}
    >
      <option value="" disabled>Selecciona una clase</option>
      {classes.map((characterClass) => (
        <option value={characterClass._id} key={characterClass._id}>
          {characterClass.nombre}
        </option>
      ))}
    </select>
  )
}

export default ClassSelect
