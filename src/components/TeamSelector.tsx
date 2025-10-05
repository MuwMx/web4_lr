import React from 'react';
import { TeamType } from '../types/TeamType';

interface TeamSelectorProps {
  teams: TeamType[];
  selectedTeamId: number | null;
  onSelectTeam: (id: number) => void;
}

const TeamSelector: React.FC<TeamSelectorProps> = ({ teams, selectedTeamId, onSelectTeam }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-2">Оберіть команду:</h3>
      <div className="flex flex-wrap gap-2">
        {teams.map(team => (
          <button
            key={team.id}
            onClick={() => onSelectTeam(team.id)}
            className={`px-4 py-2 rounded ${
              selectedTeamId === team.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {team.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TeamSelector;