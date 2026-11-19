export const rank = [
  {
    tier: 'S+',
    color: '#DAB867',
  },
  {
    tier: 'S',
    color: '#35E0CF',
  },
  {
    tier: 'A',
    color: '#62A8FF',
  },
  {
    tier: 'A+',
    color: '#647ea9',
  },
  {
    rank: 'B',
    color: '#9CB0B3',
  }
]


import type { ChampionStats } from "./types";

export const championStats: ChampionStats[] = [
  // =========================
  // TOP
  // =========================

  { championId: "shen", role: "Top", tier: "S+", winRate: 53.7, pickRate: 4.1, banRate: 1.2, matches: 1908, rankPosition: 1, change: 2 },
  { championId: "fiora", role: "Top", tier: "S+", winRate: 52.2, pickRate: 5.6, banRate: 19.8, matches: 2570, rankPosition: 2, change: 1 },
  { championId: "malphite", role: "Top", tier: "S+", winRate: 51.8, pickRate: 5.9, banRate: 15.0, matches: 2703, rankPosition: 3, change: 3 },
  { championId: "jax", role: "Top", tier: "S", winRate: 51.9, pickRate: 5.1, banRate: 12.9, matches: 2331, rankPosition: 4, change: -1 },
  { championId: "akali", role: "Top", tier: "S", winRate: 52.4, pickRate: 3.7, banRate: 22.4, matches: 1722, rankPosition: 5, change: 2 },
  { championId: "aatrox", role: "Top", tier: "S", winRate: 50.9, pickRate: 8.6, banRate: 9.4, matches: 3965, rankPosition: 6, change: -2 },
  { championId: "camille", role: "Top", tier: "A+", winRate: 51.3, pickRate: 6.8, banRate: 4.2, matches: 3120, rankPosition: 7, change: 1 },
  { championId: "renekton", role: "Top", tier: "A+", winRate: 50.8, pickRate: 7.2, banRate: 5.1, matches: 3315, rankPosition: 8, change: 0 },
  { championId: "ksante", role: "Top", tier: "A", winRate: 49.8, pickRate: 5.4, banRate: 2.8, matches: 2485, rankPosition: 9, change: -2 },
  { championId: "gnar", role: "Top", tier: "A", winRate: 50.6, pickRate: 4.7, banRate: 1.5, matches: 2160, rankPosition: 10, change: 1 },
  { championId: "darius", role: "Top", tier: "A", winRate: 50.4, pickRate: 7.9, banRate: 11.3, matches: 3630, rankPosition: 11, change: -1 },
  { championId: "ornn", role: "Top", tier: "A", winRate: 51.2, pickRate: 4.3, banRate: 0.8, matches: 1980, rankPosition: 12, change: 2 },
  { championId: "camille", role: "Top", tier: "B", winRate: 49.6, pickRate: 3.2, banRate: 1.4, matches: 1470, rankPosition: 13, change: -2 },
  { championId: "gwen", role: "Top", tier: "B", winRate: 49.9, pickRate: 4.5, banRate: 2.1, matches: 2070, rankPosition: 14, change: 0 },
  { championId: "teemo", role: "Top", tier: "C", winRate: 48.8, pickRate: 3.6, banRate: 3.2, matches: 1650, rankPosition: 15, change: -3 },

  // =========================
  // JUNGLE
  // =========================

  { championId: "hecarim", role: "Jungle", tier: "S+", winRate: 52.5, pickRate: 6.7, banRate: 25.2, matches: 3085, rankPosition: 1, change: 3 },
  { championId: "talon", role: "Jungle", tier: "S+", winRate: 52.1, pickRate: 7.7, banRate: 45.5, matches: 3545, rankPosition: 2, change: 2 },
  { championId: "nunu", role: "Jungle", tier: "S+", winRate: 53.9, pickRate: 3.4, banRate: 0.8, matches: 1565, rankPosition: 3, change: 1 },
  { championId: "nidalee", role: "Jungle", tier: "S", winRate: 52.1, pickRate: 3.2, banRate: 1.1, matches: 1470, rankPosition: 4, change: 2 },
  { championId: "zyra", role: "Jungle", tier: "S", winRate: 53.7, pickRate: 3.2, banRate: 1.9, matches: 1457, rankPosition: 5, change: 1 },
  { championId: "ekko", role: "Jungle", tier: "S", winRate: 51.4, pickRate: 5.8, banRate: 4.8, matches: 2660, rankPosition: 6, change: -1 },
  { championId: "viego", role: "Jungle", tier: "S", winRate: 54.1, pickRate: 9.4, banRate: 12.3, matches: 4310, rankPosition: 7, change: 2 },
  { championId: "leesin", role: "Jungle", tier: "A+", winRate: 49.8, pickRate: 12.1, banRate: 8.7, matches: 5550, rankPosition: 8, change: -2 },
  { championId: "jarvaniv", role: "Jungle", tier: "A+", winRate: 51.2, pickRate: 6.3, banRate: 3.2, matches: 2890, rankPosition: 9, change: 1 },
  { championId: "nocturne", role: "Jungle", tier: "A", winRate: 51.0, pickRate: 5.4, banRate: 2.8, matches: 2480, rankPosition: 10, change: 0 },
  { championId: "graves", role: "Jungle", tier: "A", winRate: 50.5, pickRate: 8.2, banRate: 5.7, matches: 3760, rankPosition: 11, change: -1 },
  { championId: "kayn", role: "Jungle", tier: "A", winRate: 50.8, pickRate: 6.9, banRate: 8.1, matches: 3170, rankPosition: 12, change: 1 },
  { championId: "amumu", role: "Jungle", tier: "B", winRate: 49.6, pickRate: 3.8, banRate: 1.1, matches: 1740, rankPosition: 13, change: -2 },
  { championId: "sejuani", role: "Jungle", tier: "B", winRate: 49.9, pickRate: 4.1, banRate: 0.9, matches: 1880, rankPosition: 14, change: 0 },
  { championId: "masteryi", role: "Jungle", tier: "C", winRate: 48.7, pickRate: 3.5, banRate: 5.4, matches: 1600, rankPosition: 15, change: -3 },

  // =========================
  // MID
  // =========================

  { championId: "leblanc", role: "Mid", tier: "S+", winRate: 53.2, pickRate: 5.4, banRate: 21.3, matches: 2492, rankPosition: 1, change: 3 },
  { championId: "orianna", role: "Mid", tier: "S+", winRate: 51.3, pickRate: 7.1, banRate: 1.1, matches: 3277, rankPosition: 2, change: 1 },
  { championId: "syndra", role: "Mid", tier: "S+", winRate: 50.3, pickRate: 12.4, banRate: 22.7, matches: 5707, rankPosition: 3, change: -1 },
  { championId: "ekko", role: "Mid", tier: "S", winRate: 51.1, pickRate: 6.2, banRate: 4.8, matches: 2870, rankPosition: 4, change: 2 },
  { championId: "yasuo", role: "Mid", tier: "S", winRate: 50.9, pickRate: 7.0, banRate: 33.2, matches: 3201, rankPosition: 5, change: 0 },
  { championId: "ahri", role: "Mid", tier: "S", winRate: 51.5, pickRate: 9.1, banRate: 5.4, matches: 4180, rankPosition: 6, change: 1 },
  { championId: "zed", role: "Mid", tier: "A+", winRate: 49.8, pickRate: 8.3, banRate: 24.5, matches: 3810, rankPosition: 7, change: -2 },
  { championId: "akali", role: "Mid", tier: "A+", winRate: 50.6, pickRate: 6.5, banRate: 22.4, matches: 2990, rankPosition: 8, change: 1 },
  { championId: "viktor", role: "Mid", tier: "A", winRate: 50.7, pickRate: 6.1, banRate: 1.8, matches: 2800, rankPosition: 9, change: 0 },
  { championId: "orianna", role: "Mid", tier: "A", winRate: 49.9, pickRate: 4.8, banRate: 1.2, matches: 2210, rankPosition: 10, change: -2 },
  { championId: "syndra", role: "Mid", tier: "A", winRate: 49.7, pickRate: 5.3, banRate: 8.5, matches: 2440, rankPosition: 11, change: -1 },
  { championId: "taliyah", role: "Mid", tier: "A", winRate: 51.0, pickRate: 4.2, banRate: 0.7, matches: 1930, rankPosition: 12, change: 2 },
  { championId: "veigar", role: "Mid", tier: "B", winRate: 49.4, pickRate: 3.7, banRate: 1.5, matches: 1700, rankPosition: 13, change: -1 },
  { championId: "katarina", role: "Mid", tier: "B", winRate: 49.2, pickRate: 5.5, banRate: 8.2, matches: 2530, rankPosition: 14, change: 0 },
  { championId: "malzahar", role: "Mid", tier: "C", winRate: 48.9, pickRate: 3.1, banRate: 1.0, matches: 1420, rankPosition: 15, change: -2 },

  // =========================
  // ADC
  // =========================

  { championId: "xayah", role: "ADC", tier: "S+", winRate: 53.0, pickRate: 7.2, banRate: 1.4, matches: 3326, rankPosition: 1, change: 3 },
  { championId: "velkoz", role: "ADC", tier: "S+", winRate: 55.9, pickRate: 2.1, banRate: 1.3, matches: 951, rankPosition: 2, change: 2 },
  { championId: "yunara", role: "ADC", tier: "S+", winRate: 50.9, pickRate: 16.4, banRate: 10.0, matches: 7572, rankPosition: 3, change: 1 },
  { championId: "kalista", role: "ADC", tier: "S", winRate: 51.3, pickRate: 7.5, banRate: 9.4, matches: 3453, rankPosition: 4, change: 0 },
  { championId: "draven", role: "ADC", tier: "S", winRate: 51.6, pickRate: 6.1, banRate: 45.9, matches: 2803, rankPosition: 5, change: 2 },
  { championId: "jinx", role: "ADC", tier: "S", winRate: 54.0, pickRate: 12.2, banRate: 8.5, matches: 5620, rankPosition: 6, change: -1 },
  { championId: "kaisa", role: "ADC", tier: "A+", winRate: 50.8, pickRate: 11.4, banRate: 6.2, matches: 5240, rankPosition: 7, change: 1 },
  { championId: "ezreal", role: "ADC", tier: "A+", winRate: 49.9, pickRate: 14.2, banRate: 3.7, matches: 6540, rankPosition: 8, change: -2 },
  { championId: "caitlyn", role: "ADC", tier: "A", winRate: 50.5, pickRate: 10.1, banRate: 12.8, matches: 4650, rankPosition: 9, change: 1 },
  { championId: "ashe", role: "ADC", tier: "A", winRate: 50.7, pickRate: 8.4, banRate: 2.9, matches: 3860, rankPosition: 10, change: 0 },
  { championId: "lucian", role: "ADC", tier: "A", winRate: 49.8, pickRate: 6.7, banRate: 3.2, matches: 3080, rankPosition: 11, change: -1 },
  { championId: "vayne", role: "ADC", tier: "A", winRate: 50.2, pickRate: 6.5, banRate: 9.1, matches: 2990, rankPosition: 12, change: 1 },
  { championId: "sivir", role: "ADC", tier: "B", winRate: 49.6, pickRate: 4.1, banRate: 0.8, matches: 1880, rankPosition: 13, change: -2 },
  { championId: "kogmaw", role: "ADC", tier: "B", winRate: 49.7, pickRate: 3.6, banRate: 1.1, matches: 1650, rankPosition: 14, change: 0 },
  { championId: "twitch", role: "ADC", tier: "C", winRate: 48.9, pickRate: 4.5, banRate: 3.8, matches: 2070, rankPosition: 15, change: -3 },

  // =========================
  // SUPPORT
  // =========================

  { championId: "alistar", role: "Support", tier: "S+", winRate: 53.1, pickRate: 10.7, banRate: 4.0, matches: 4931, rankPosition: 1, change: 3 },
  { championId: "rell", role: "Support", tier: "S+", winRate: 52.6, pickRate: 8.3, banRate: 1.9, matches: 3800, rankPosition: 2, change: 2 },
  { championId: "thresh", role: "Support", tier: "S+", winRate: 51.8, pickRate: 12.4, banRate: 9.5, matches: 5700, rankPosition: 3, change: 1 },
  { championId: "leona", role: "Support", tier: "S", winRate: 51.8, pickRate: 8.3, banRate: 4.3, matches: 3828, rankPosition: 4, change: 0 },
  { championId: "senna", role: "Support", tier: "S", winRate: 52.6, pickRate: 5.4, banRate: 0.8, matches: 2492, rankPosition: 5, change: 2 },
  { championId: "rakan", role: "Support", tier: "S", winRate: 51.2, pickRate: 7.8, banRate: 2.4, matches: 3590, rankPosition: 6, change: -1 },
  { championId: "nautilus", role: "Support", tier: "A+", winRate: 50.8, pickRate: 10.2, banRate: 5.6, matches: 4690, rankPosition: 7, change: 1 },
  { championId: "lulu", role: "Support", tier: "A+", winRate: 50.6, pickRate: 7.1, banRate: 3.2, matches: 3260, rankPosition: 8, change: 0 },
  { championId: "nami", role: "Support", tier: "A", winRate: 50.9, pickRate: 6.5, banRate: 1.8, matches: 2990, rankPosition: 9, change: 2 },
  { championId: "milio", role: "Support", tier: "A", winRate: 50.5, pickRate: 5.4, banRate: 1.1, matches: 2480, rankPosition: 10, change: -1 },
  { championId: "blitzcrank", role: "Support", tier: "A", winRate: 50.4, pickRate: 7.3, banRate: 16.5, matches: 3350, rankPosition: 11, change: 1 },
  { championId: "braum", role: "Support", tier: "A", winRate: 50.7, pickRate: 4.8, banRate: 0.6, matches: 2210, rankPosition: 12, change: 0 },
  { championId: "zyra", role: "Support", tier: "B", winRate: 49.8, pickRate: 4.2, banRate: 1.4, matches: 1930, rankPosition: 13, change: -2 },
  { championId: "brand", role: "Support", tier: "B", winRate: 49.5, pickRate: 5.6, banRate: 2.1, matches: 2570, rankPosition: 14, change: -1 },
  { championId: "xerath", role: "Support", tier: "C", winRate: 48.8, pickRate: 3.9, banRate: 1.6, matches: 1790, rankPosition: 15, change: -3 },
];
