import React from 'react';

export default function LeaguePage (props) {
    
        return (
            <div>
                <header>
                    <h1>League Standings</h1>
                </header>

                <main>
                    <section>
                        <h2>EAST</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Team</th>
                                    <th>Owner</th>
                                    <th>Record</th>
                                    <th>Win%</th>
                                    <th>GB</th>
                                    <th>PF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="imgs/appleLogo.png" alt="Team Logo" /></td>
                                    <td>Team Apple</td>
                                    <td>Anshul</td>
                                    <td>5-1-0</td>
                                    <td>.833</td>
                                    <td>-</td>
                                    <td>843.18</td>
                                </tr>
                                <tr>
                                    <td><img src="imgs/dolphinLogo.png" alt="Team Logo" /></td>
                                    <td>Team Dolphins</td>
                                    <td>Tom</td>
                                    <td>5-1-0</td>
                                    <td>.833</td>
                                    <td>-</td>
                                    <td>843.18</td>
                                </tr>
                                <tr>
                                    <td><img src="imgs/sandwichLogo.png" alt="Team Logo" /></td>
                                    <td>Team Sandwich</td>
                                    <td>Christopher</td>
                                    <td>5-1-0</td>
                                    <td>.833</td>
                                    <td>-</td>
                                    <td>843.18</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>WEST</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Logo</th>
                                    <th>Team</th>
                                    <th>Owner</th>
                                    <th>Record</th>
                                    <th>Win%</th>
                                    <th>GB</th>
                                    <th>PF</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><img src="imgs/starLogo.png" alt="Team Logo" /></td>
                                    <td>Team Stars</td>
                                    <td>Trevor</td>
                                    <td>5-1-0</td>
                                    <td>.833</td>
                                    <td>-</td>
                                    <td>815.04</td>
                                </tr>
                                <tr>
                                    <td><img src="imgs/dinoLogo.png" alt="Team Logo" /></td>
                                    <td>Team Dino</td>
                                    <td>Nick Saban</td>
                                    <td>5-1-0</td>
                                    <td>.833</td>
                                    <td>-</td>
                                    <td>815.04</td>
                                </tr>
                                <tr>
                                    <td><img src="imgs/dogLogo.png" alt="Team Logo" /></td>
                                    <td>Team Dog</td>
                                    <td>Michael Penix</td>
                                    <td>5-1-0</td>
                                    <td>.833</td>
                                    <td>-</td>
                                    <td>815.04</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </main>
            </div>
        );
}


