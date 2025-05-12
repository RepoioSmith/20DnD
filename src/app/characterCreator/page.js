"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "../../components/index"
import ClassSelect from "@/components/ClassSelect"
import SpellSelector from "@/components/SpellSelector"

export default function Home() {
  const [selectedClass, setSelectedClass] = useState(null)
  const [selectedSpells, setSelectedSpells] = useState([])
  const [name, setName] = useState(null)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const characterData = {
      nombre: name,
      clase: selectedClass,
      nivel: 1,
      hechizos: selectedSpells,
    }

    try {
      const response = await fetch("http://localhost:8000/api/characters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(characterData),
      })

      if (response.ok) {
        alert("¡Personaje creado con éxito!")
        router.push("/myCharacters")
      } else {
        alert("Error al crear el personaje")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Ocurrió un error inesperado")
    }
  }

  return (
    <div>
      <Navbar />
      <h1>Character Creator</h1>
      <form onSubmit={handleSubmit}>
        <label>Character Name: </label>
        <input
          type="text"
          name="characterName"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label>Character Class: </label>
        <ClassSelect setSelectedClass={setSelectedClass} />
        <br />
        <label>Hechizos: </label>
        <SpellSelector
          setSelectedSpells={setSelectedSpells}
          selectedSpells={selectedSpells}
        />
        <br />
        <button type="submit">Create Character</button>
      </form>
    </div>
  )
}
