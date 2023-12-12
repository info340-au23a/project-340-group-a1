import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


export default function HomeDashboard(props) {
    const paramsResult = useParams();
    const currentTab = paramsResult.dashtab;

    const tabVal = () => {
        if(currentTab === "ranks"){
            return 1
        } else if(currentTab === "my-stats"){
            return 2
        } else {
            return 0
        }
    }

    return(
        <div className="dashboardContainer">
            <h2>Dashboard</h2>
            <div className="dashboard">
                {/* Dash Tab links */}
                <Tabs value={tabVal()} variant="fullWidth">
                    <Tab label="Overview" component={Link} to="/home/overview" />
                    <Tab label="Ranks" component={Link} to="/home/ranks" />
                    <Tab label="My Stats" component={Link} to="/home/my-stats" />
                </Tabs>
                {/* Dash Tab content */}
                <HomeDashContent dashTab={currentTab} />
            </div>
        </div>
    )
}

function HomeDashContent(props) {
    const { dashTab } = props;
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