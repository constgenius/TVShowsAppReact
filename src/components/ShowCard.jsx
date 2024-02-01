import React from 'react'
import { Link } from 'react-router-dom'
import Star from "../assets/star.png"
import image from "../assets/image.png"

const ShowCard = ({ show }) => {
    const premieredYear = new Date(show.show.premiered).getFullYear();

    return (
        <>
            <div key={show.show.id}>
                <Link to={`/details/${show.show.id}`}>
                    <div className="show" key={show.show.id}>
                        <div>
                            <p>{premieredYear}</p>
                        </div>
                        <div>
                            <img
                                src={
                                    show.show.image && show.show.image.original
                                        ? show.show.image.original
                                        : image
                                }
                                alt={show.show.name}
                            />
                        </div>
                        <div>

                            <span>{show.show.genres[0]}</span>
                            <section>
                                <h3>{show.show.name}</h3>
                                <span>
                                    {show.show.rating.average && <img src={Star} width={15} height={15} />}

                                    {show.show.rating.average && show.show.rating.average}</span>
                            </section>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default ShowCard


