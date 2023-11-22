import React from 'react';
import { Link, useParams } from 'react-router-dom';

export default function HomeDashboard(props) {
    const paramsResult = useParams();

    const currentTab = paramsResult.dashtab;


    return(
        <div className="dashboardContainer">
            <h2>Dashboard</h2>
            <div className="dashboard">
                {/* Dash Tab links */}
                <div className="dash-tabs">
                    <Link name="Overview" to={"/home/overview"}><button className="dash-tablinks" name="Overview">Overview</button></Link>
                    <Link name="Ranks" to={"/home/ranks"}><button className="dash-tablinks" name="Ranks">Ranks</button></Link>
                    <Link name="My-Stats" to={"/home/my-stats"}><button className="dash-tablinks" name="My Stats">My Stats</button></Link>
                </div>
                {/* <Dash Tab content */}
                <HomeDashContent dashTab={currentTab} />
            </div>
        </div>
    )
}

function HomeDashContent(props) {
    const {dashTab} = props;
    const contentToShow = () => {
        if(dashTab === "ranks"){
            return <RankTab />
        } else if(dashTab === "my-stats"){
            return <MyStatsTab />
        } else {
            return <OverviewTab />
        }
    }
    
    return(
        
        <div id={dashTab} className="dashcontent">
            {contentToShow()}
        </div>
    )
}

function OverviewTab(props) {
    return(
        <div>
            <h3>Overview</h3>
            <p>Overview specific content (probably a table of upcoming matches and other general important info)</p>
            <p><strong>ALSO FOR THE NAVBAR</strong> -- <em>right now there is no navbar support between tabs for screens smaller than 598px</em></p>
        </div>
    )
}

function RankTab(props) {
    return(
        <div>
            <h3>Ranks</h3>
            <p>Rank content specifically (a table of rank standings with friends etc.)</p>
        </div>
    )
}

function MyStatsTab(props) {
    return(
        <div>
            <h3>My Stats</h3>
            <p>A table of user unique statistics (players, win rate, etc.)</p>
        </div>
    )
}