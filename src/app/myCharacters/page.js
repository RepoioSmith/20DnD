"use client";
import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/index";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch("https://dndapi-vx9y.onrender.com/api/characters");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setCharacters(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  if (loading) return <p>Cargando personajes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-justify">
      <Navbar />
      {characters.map((character) => (
        <div key={character._id} className="border p-4 m-4 shadow rounded-lg mx-100 text-justify text-wrap px-15">
          <h1 className="text-2xl font-bold mb-2">{character.nombre}</h1>
          <p><strong>Clase:</strong> {character.clase?.nombre}</p>
          <p><strong>Nivel:</strong> {character.nivel}</p>

          <div className="mt-2">
            <p><strong>Equipamiento:</strong></p>
            <ul className="list-disc ml-6">
              {character.equipamiento.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-2">
            <p><strong>Hechizos:</strong></p>
            {character.hechizos.map((spell) => (
              <div key={spell._id} className="mb-2">
                <p className="font-semibold">{spell.nombre}</p>
                <ul className="list-disc ml-6 text-sm">
                  {spell.content.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-2">
            <p className="font-bold">Características de la clase:</p>
            <p>{character.clase?.caracteristicas_clase?.content}</p>

            <p className="mt-1 font-semibold">Puntos de Golpe:</p>
            <ul className="list-disc ml-6">
              {character.clase?.caracteristicas_clase?.hit_points?.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <p className="mt-1 font-semibold">Proficiencias:</p>
            <ul className="list-disc ml-6">
              {character.clase?.caracteristicas_clase?.proficiencias?.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            <p className="mt-1 font-semibold">Equipamiento inicial:</p>
            {Array.isArray(character.clase?.caracteristicas_clase?.equipamiento) &&
              character.clase.caracteristicas_clase.equipamiento.map((item, i) => (
                <div key={i} className="ml-6">
                  {Array.isArray(item) ? (
                    <ul className="list-disc">
                      {item.map((subItem, j) => (
                        <li key={j}>{subItem}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
