import React from 'react'
import { FiHome } from "react-icons/fi";
import { FaEye } from "react-icons/fa";

export const Personaje = ({ data, setData, setShowCharacters, setShowMore }) => {

    const onReset = () => {
        setData(null);
        setShowCharacters(false);

    }

    const showCharacters = () => {
        setShowCharacters(false);
        setShowMore(true);
    }


    return (
        <div className="characters">
            <div className="container-characters">
                {!data ? (
                    <p>No hay personajes para mostrar</p>
                ) :
                    data.map(personaje => (
                        <div className="character-container" key={personaje.id}>
                            <div className='container-img'>
                                <img src={`https://cdn.thesimpsonsapi.com/500${personaje.portrait_path}`} alt={personaje.name} />
                            </div>
                            <div>
                                <h3>{personaje.name}</h3>
                                <h6>
                                    {personaje.status === "Alive" ? (
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
                                    <span>{personaje.age ? personaje.age : 'Unknown'}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Birthdate: </span>
                                    <span>{personaje.birthdate ? personaje.birthdate : 'Unknown'}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Gender: </span>
                                    <span>{personaje.gender ? personaje.gender : 'Unknown'}</span>
                                </p>
                                <p>
                                    <span className="text-grey">Occupation: </span>
                                    <span>{personaje.occupation ? personaje.occupation : 'Unknown'}</span>
                                </p>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="container-buttons">
                <button className='btn btn-secondary' id='bt_home' onClick={onReset} >
                   <FiHome /> <p className='back-home'>Go Home</p>                 
                </button>
                <br />
                <button className="btn btn-secondary" id='bt_see' onClick={showCharacters}>
                     <p className='back-home'>See more...</p> <FaEye />
                </button>
            </div>
        </div>
    );
};


