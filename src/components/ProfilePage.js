import React, { useState } from 'react';

export default function ProfilePage(props) {
    const { currentUser } = props;
    const [teamName, setTeamName] = useState(currentUser.teamName || '');
    const [editingTeamName, setEditingTeamName] = useState(false);

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        setEditingTeamName(false);
    };
    const handleEditButtonClick = () => {
        setEditingTeamName(true);
    };

    return (
        <div>
            <h1>My Profile</h1>
            <main>
                {editingTeamName ? (
                    <form onSubmit={handleFormSubmit}>
                        <div className="profile-info">
                            <div className="info-label">Team Name:</div>
                            <input
                                type="text"
                                value={teamName}
                                onChange={handleTeamNameChange}
                                placeholder="Enter your team name"
                            />
                            <button type="submit">Save</button>
                        </div>
                    </form>
                ) : (
                    <div className="profile-info">
                        <button onClick={handleEditButtonClick}>Edit Team Name</button>
                        <div>
                            <div className="info-label">Team Name:</div>
                            <div>{teamName}</div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
