import { useState, useEffect } from 'react';
import { TeamType } from '../types/TeamType';

const usePlayersCount = (teams: TeamType[], selectedTeamId: number | null) => {
  const [totalPlayers, setTotalPlayers] = useState(0);
  const [selectedTeamPlayers, setSelectedTeamPlayers] = useState(0);

  useEffect(() => {
    const total = teams.reduce((sum, team) => sum + team.playersCount, 0);
    setTotalPlayers(total);
  }, [teams]);

  useEffect(() => {
    if (selectedTeamId !== null) {
      const team = teams.find(t => t.id === selectedTeamId);
      setSelectedTeamPlayers(team ? team.playersCount : 0);
    }
  }, [selectedTeamId, teams]); 
  return { totalPlayers, selectedTeamPlayers };
};

export default usePlayersCount;