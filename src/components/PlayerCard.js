import React from 'react';

const PlayerCard = ({ imageUrl, name, position, team, additionalInfo }) => {
    return (
        <div className="player-card">
            <div className="player-image-container">
                <img src={imageUrl} className="player-img" alt={name} />
            </div>
            <div className="player-info">
                <h2 className="player-name">{name}</h2>
                <p className="player-details">{position} - {team}</p>
                <p className="player-additional">{additionalInfo}</p>
            </div>
        </div>
    );
};

export default PlayerCard;