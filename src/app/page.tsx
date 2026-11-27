import ActualMeta from '@/сomponents/ActualMeta/page';
import Hero from '@/сomponents/Hero/page'
import HistoryPage from '@/сomponents/HistoryGame/page';
import getBestPlayerData from './api/getBestPlayerData';
import { PlayerState } from '@/types';
import { ActualChempions } from '@/сomponents/ActualMeta/actualChampions/page';
import { Builds } from '@/сomponents/ActualMeta/builds';
import { LiveGame } from '@/сomponents/HistoryGame/liveGames';
import { FooterBord } from '@/сomponents/Hero/footerbord';
import { getActualpatch } from '@/lib/riot/getActualPatch';

export default async function Home() {
  const data = await getBestPlayerData() as PlayerState
  const pacth = await getActualpatch();
  
  return (
    <main>
      <Hero player={data} actualPatch={pacth.actualPatch}/>
      <ActualMeta actualPatch={pacth.actualPatch}/>
      <HistoryPage 
          wins={data.wins} 
          KDA_Avarage={data.KDA_Avarage} 
          csMin={data.csMin} 
          visionMin={1.34} 
          games={data.games}
          />
      <ActualChempions />
      <Builds />
      <LiveGame actualPatch={pacth.actualPatch} chimpions={pacth.chimpions} />
      <FooterBord />
    </main>
  );
}
