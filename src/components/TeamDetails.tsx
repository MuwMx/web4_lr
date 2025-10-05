import React from 'react';
import { TeamType } from '../types/TeamType';

interface TeamDetailsProps {
  team: TeamType | null;
  selectedTeamPlayers: number;
}

const TeamDetails: React.FC<TeamDetailsProps> = ({ team, selectedTeamPlayers }) => {
  if (!team) return <p>Оберіть команду для перегляду деталей</p>;

  return (
    <div className="bg-green-800 text-white p-6 rounded-lg max-w-md">
      <h2 className="text-xl font-bold">{team.name}</h2>
      <p className="text-green-200 mb-2">{team.league}</p>
      <p className="text-sm">Гравців у команді: <strong>{selectedTeamPlayers}</strong></p>
      <button className="mt-3 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
        Деталі
      </button>
    </div>
  );
};

export default TeamDetails;