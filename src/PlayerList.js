import React from 'react';
import Player from './Player';
import Joueurs from './joueurs';

function PlayerList() {
    const tab = players.map ( j => {
        return <Joueurs name = {JSON.parse(j).name} team = {JSON.parse(j).team} nationality = {JSON.parse(j).nationality} 
        number = {JSON.parse(j).jerseyNumber} age = {JSON.parse(j).age} imageURL = {JSON.parse(j).imageURL} key = {JSON.parse(j).name}></Joueurs>;
    });
    return (
        <div className="row align-items-center">
            {tab}
        </div>
    )
}

export default PlayerList;