import React, { useEffect, useState } from 'react'
import { FiHome } from "react-icons/fi";

export const OtrosPersonajes = ({ setData, setShowMore, setShowCharacters }) => {
    const onReset = () => {
        setData(null);
        setShowCharacters(false);
        setShowMore(false);

    }

    const [page, setPage] = useState(2)           // página actual
    const [characterData, setCharacterData] = useState([])

    // Cargar personajes según la página
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`);
                const data = await response.json();
                setCharacterData(data.results || []);
            } catch (error) {
                console.error('Error fetching characters:', error);
                setCharacterData([]);
            }
        };

        fetchCharacters();
    }, [page]);

    console.log(characterData);
    console

    const nextPage = () => setPage(prev => prev + 1)
    const prevPage = () => page > 1 && setPage(prev => prev - 1)

    return (
        <div className='caracter'>
            <div className='container-characters'>
                {
                    characterData.map(character => (
                        <div key={character.id} className='character-container'>
                            <div className='container-img'>
                                <img
                                    className='img-character'
                                    src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                                    alt={character.name}
                                />
                            </div>
                            <div className='character-container-info'>

                                <h3>{character.name}</h3>
                                <h6>
                                    {character.status === "Alive" ? (
                                        <>
                                            <span className="alive" />
                                            Alive
                                        </>
                                    ) : (
                                        <>
                                            <span className="dead" />
                                            Dead
                                        </>
                                    )}
                                </h6>
                                <p>
                                    <span className="text-grey">Age: </span>
                                    <span>{character.age ? character.age : 'Unknown'}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Birthdate: </span>
                                    <span>{character.birthdate ? character.birthdate : 'Unknown'}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Gender: </span>
                                    <span>{character.gender ? character.gender : 'Unknown'}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Occupation: </span>
                                    <span>{character.occupation ? character.occupation : 'Unknown'}</span>
                                </p>
                            </div>
                        </div>







                    ))
                }
            </div>

            {/* Controles de paginación */}
            <div className='column'>
                <div className='row'>
                    <h2><span>Página {page}</span></h2>
                </div>
                <div className='row'>
                    <div className="container-buttons">
                        <div className="pagination">
                            <button className='btn btn-info' id='bt_home' onClick={prevPage} disabled={page === 1}>
                                Anterior
                            </button>
                            <button className='btn btn-info' id='bt_home' onClick={nextPage}>
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
                {/* Botón volver arriba proyecto de escritorio */}
                <div className='row'>
                    <div className="container-buttons">
                        <button className='btn btn-secondary' id='bt_home' onClick={onReset} >
                            <FiHome /> <p className='back-home'>Go Home</p>
                        </button>

                    </div>
                </div>
            </div>

        </div>
    )
}
