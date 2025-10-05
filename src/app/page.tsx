'use client';

import React, { useState } from 'react';
import useTeams from '../hooks/useTeams';
import usePlayersCount from '../hooks/usePlayersCount';
import TeamSelector from '../components/TeamSelector';
import TeamDetails from '../components/TeamDetails';
import { TeamType } from '../types/TeamType';

export default function Home() {
  const { teams, loading } = useTeams();
  const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);

  const selectedTeam = teams.find(team => team.id === selectedTeamId) || null;
  const { totalPlayers, selectedTeamPlayers } = usePlayersCount(teams, selectedTeamId);

  if (loading) return <p className="text-center mt-10">Завантаження...</p>;

  return (
    <main className="p-6 max-w-4xl mx-auto min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold text-center mb-6">Список команд</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <p><strong>Загальна кількість гравців у всіх командах:</strong> {totalPlayers}</p>
      </div>

      <TeamSelector
        teams={teams}
        selectedTeamId={selectedTeamId}
        onSelectTeam={setSelectedTeamId}
      />

      <div className="flex justify-center">
        <TeamDetails team={selectedTeam} selectedTeamPlayers={selectedTeamPlayers} />
      </div>
    </main>
  );
}