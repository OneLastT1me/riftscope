import ActualMeta from '@/сomponents/ActualMeta/page';
import Hero from '@/сomponents/Hero/page'
import HistoryPage from '@/сomponents/HistoryGame/page';
import getBestPlayerData from './api/getBestPlayerData';
import { PlayerState } from '@/types';
import { ActualChempions } from '@/сomponents/ActualMeta/actualChampions/page';
import { Builds } from '@/сomponents/ActualMeta/builds';
import { LiveGame } from '@/сomponents/HistoryGame/liveGames';

export default async function Home() {
  const data = await getBestPlayerData() as PlayerState
  
  return (
    <main>
      <Hero player={data}/>
      <ActualMeta />
      <HistoryPage 
          wins={data.wins} 
          KDA_Avarage={data.KDA_Avarage} 
          csMin={data.csMin} 
          visionMin={1.34} 
          games={data.games}/>
      <ActualChempions />
      <Builds />
      <LiveGame />      
    </main>
  );
}
