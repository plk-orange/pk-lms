import React from "react";
import { Link } from 'react-router-dom';


const PlayerCardItem = ({player}) => {
    return ( <Link to={`player/${player.player_id}`}>
    <div className={playerStyles.wrap}>
      <div className={playerStyles.cont}>
        <div className={playerStyles.title}>
          <div className={playerStyles.name}>{player.player}</div>

          <p className={playerStyles.team}><Link to={`team/${player.team_name}`}>{player.team_name} </Link></p>
        </div>
        <div className={playerStyles.scores.all}>
          <p className={playerStyles.scores.w}>{player.wins}</p>
          <p className={playerStyles.scores.l}>{player.loss}</p>
          <p className={playerStyles.scores.p}>45%</p>
        </div>
      </div>
    </div>
    </Link>)
}


const PlayerCard = ({players}) => {



  return (<>

  <div className='divide-y-2'>
    {players && players.map((player, i) => <PlayerCardItem key={i} player={player} /> )}
    </div>
    </>
  );
};

export default PlayerCard;

//
//
//        Name Name            W L %
//
//
//
//
//

const playerStyles = {
  wrap: `w-2/5 border border-pkgray-md opacity-75 border-y-0 hover:bg-pkgray-xxl transition duration-200 ease-out `,
  cont: `flex justify-between border-t border-pkgray-md py-1 px-4`,
  title: `flex gap-4 w-full`,
  name: `font-bold w-1/2`,
  team: `w-1/2 hover:text-pkorange-md`,
  scores: {
    all: `grid grid-cols-3 `,
    w: `min-w-1/3  font-bold `,
    l: `min-w-1/3  opacity-30 `,
    p: `min-w-1/3  `,
  },
};
