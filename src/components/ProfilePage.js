import React, { useState } from 'react';

export default function ProfilePage(props) {
    const { currentUser, fantasyDataArray, changeTeamData } = props;
    const [teamName, setTeamName] = useState(currentUser.teamName || '');
    const [leagueName, setLeagueName] = useState(currentUser.leagueName || '');
    const [recordName, setRecordName] = useState(currentUser.recordName || '');
    const [editingTeamName, setEditingTeamName] = useState(false);
    const teamData = fantasyDataArray.filter((team) => {
        return team.firebasekey === currentUser.uid
    });

    const handleTeamNameChange = (event) => {
        setTeamName(event.target.value);
    };
    const handleLeagueNameChange = (event) => {
        setLeagueName(event.target.value);
    };
    const handleRecordChange = (event) => {
        setRecordName(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        changeTeamData(
            currentUser,
            document.getElementById('changeTeamNameSubmit').value,
            document.getElementById('changeLeagueNameSubmit').value,
            document.getElementById('changeRecordSubmit').value
        );
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
                            <div className="info-label">
                                <label htmlFor="changeTeamNameSubmit">Team Name: </label>
                                <input
                                    type="text"
                                    id="changeTeamNameSubmit"
                                    value={teamName}
                                    onChange={handleTeamNameChange}
                                    placeholder="Enter your team name"
                                />
                            </div>
                            <div className="info-label">
                                <label htmlFor="changeLeagueNameSubmit">League Name: </label>
                                <input
                                    type="text"
                                    id="changeLeagueNameSubmit"
                                    value={leagueName}
                                    onChange={handleLeagueNameChange}
                                    placeholder="Enter your league name"
                                />
                            </div>
                            <div className="info-label">
                                <label htmlFor="changeRecordSubmit">Record: </label>
                                <input
                                    type="text"
                                    id="changeRecordSubmit"
                                    value={recordName}
                                    onChange={handleRecordChange}
                                    placeholder="Enter your record"
                                />
                            </div>
                            <button className="profileBtn" type="submit">Save</button>
                        </div>
                    </form>
                ) : (
                    <div className="profile-info">
                        <button className="profileBtn" onClick={handleEditButtonClick}>Edit Team Details</button>
                        <div>
                            <p><strong>Team Name:</strong> {teamData[0].TeamName}</p>
                            <p><strong>League Name:</strong> {teamData[0].LeagueName}</p>
                            <p><strong>Record:</strong> {teamData[0].Record}</p>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
