import { ChampionsResponse, PatchData } from "@/types";

export async function getActualpatch ():Promise<PatchData> {
    const patch = await fetch('https://ddragon.leagueoflegends.com/api/versions.json', 
        {
            next: {
                revalidate: 300
        }}
    )
    if (!patch.ok) {
        throw new Error('Failed to fetch actual count patch');
    }

    const versions: string[] = await patch.json();
    const actualPatch = versions[0];

    const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/${actualPatch}/data/en_US/champion.json`,
        {
        next: {
            revalidate: 86400,
        },
        }
   )

    if(!response.ok){
        throw new Error('Failed to fetch champions')
    }

    const data: ChampionsResponse = await response.json();
    const chimpions = Object.values(data.data);
    const fullData = {
        actualPatch,
        chimpions
    }

    return fullData;
}

