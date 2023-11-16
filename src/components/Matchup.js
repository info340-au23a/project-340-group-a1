import React from "react";
import { NavBar } from "./Navigation.js";

export default function MatchupTable() {
    return (
        <div>
            <NavBar />

            <header>
            <h1>Match Up</h1>
        </header>
       
        {/* <!-- main content --> */}
        <main>

            <div className="Tmatchup">
            <table>
                <tr>
                    <th>Your Team</th>
                    <th>Score: Total</th>
                    <th>Opponent</th>
                    <th>Score: Total</th>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>10</td>
                    <td>Player 1</td>
                    <td>20</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>11</td>
                    <td>Player 1</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>12</td>
                    <td>Player 1</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>13</td>
                    <td>Player 1</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>14</td>
                    <td>Player 1</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>15</td>
                    <td>Player 1</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>16</td>
                    <td>Player 1</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>17</td>
                    <td>Player 1</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>Player 1</td>
                    <td>18</td>
                    <td>Player 1</td>
                    <td>28</td>
                </tr>
            </table>
            </div>
        </main>

        </div>
    )
}