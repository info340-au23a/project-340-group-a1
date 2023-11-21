import React from 'react';

const PlayerCard = ({ imageUrl, name, position, team, additionalInfo }) => {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
                <img src={imageUrl} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="card-text">{position} - {team}</p>
                    <p className="card-text">{additionalInfo}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;