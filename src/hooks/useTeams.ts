import { useState, useEffect } from 'react';
import { TeamType } from '../types/TeamType';

const useTeams = () => {
  const [teams, setTeams] = useState<TeamType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeams = () => {
      const mockData: TeamType[] = [
        { id: 1, name: "Динамо Київ", league: "УПЛ", playersCount: 28 },
        { id: 2, name: "Шахтар", league: "УПЛ", playersCount: 30 },
        { id: 3, name: "Манчестер Сіті", league: "Прем’єр-ліга", playersCount: 32 },
        { id: 4, name: "Барселона", league: "Ла Ліга", playersCount: 29 },
      ];
      setTimeout(() => {
        setTeams(mockData);
        setLoading(false);
      }, 500);
    };

    fetchTeams();
  }, []);

  return { teams, loading };
};

export default useTeams;