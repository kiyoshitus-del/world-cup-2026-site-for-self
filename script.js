const flags = {
  USA: "🇺🇸", CAN: "🇨🇦", MEX: "🇲🇽", JPN: "🇯🇵", BRA: "🇧🇷", FRA: "🇫🇷", ARG: "🇦🇷", ENG: "🏴",
  ESP: "🇪🇸", GER: "🇩🇪", ITA: "🇮🇹", POR: "🇵🇹", NED: "🇳🇱", BEL: "🇧🇪", CRO: "🇭🇷", MAR: "🇲🇦",
  KOR: "🇰🇷", AUS: "🇦🇺", SEN: "🇸🇳", GHA: "🇬🇭", URU: "🇺🇾", COL: "🇨🇴", DEN: "🇩🇰", SUI: "🇨🇭",
  SWE: "🇸🇪", POL: "🇵🇱", ECU: "🇪🇨", QAT: "🇶🇦", CRC: "🇨🇷", IRN: "🇮🇷", WAL: "🏴", CMR: "🇨🇲",
  NGA: "🇳🇬", CHI: "🇨🇱", PER: "🇵🇪", EGY: "🇪🇬", TUN: "🇹🇳", TUR: "🇹🇷", SCO: "🏴", UKR: "🇺🇦",
  NOR: "🇳🇴", SRB: "🇷🇸", AUT: "🇦🇹", ALG: "🇩🇿", PAR: "🇵🇾", PAN: "🇵🇦", NZL: "🇳🇿", JAM: "🇯🇲", BOL: "🇧🇴",
  RSA: "🇿🇦", CZE: "🇨🇿", BIH: "🇧🇦", HAI: "🇭🇹", CIV: "🇨🇮", CUW: "🇨🇼", KSA: "🇸🇦", CPV: "🇨🇻",
  IRQ: "🇮🇶", JOR: "🇯🇴", COD: "🇨🇩", UZB: "🇺🇿"
};

const PUBLIC_SHEET_ID = "1clyPCkO1eSpmoLcYF0Sc8sRCsVkgOXyq3dBZWZEJBVo";
const PUBLIC_SHEET_NAMES = [
  "試合",
  "グループ順位",
  "トーナメント",
  "国ランキング",
  "選手ランキング",
  "FIFAランキング"
];

const matchesByDate = [
  {
    date: "2026-06-12",
    label: "6月12日（金）",
    matches: [
      {
        status: "finished",
        venue: "Estadio Ciudad de Mexico",
        home: { code: "MEX", name: "メキシコ" },
        away: { code: "RSA", name: "南アフリカ" },
        score: "2 - 0",
        scorers: ["メキシコ: ラウール・ヒメネス, ほか1名確認中", "南アフリカ: -"],
        highlightUrl: ""
      },
      {
        status: "finished",
        venue: "Estadio Guadalajara",
        home: { code: "KOR", name: "韓国" },
        away: { code: "CZE", name: "チェコ" },
        score: "2 - 1",
        scorers: ["韓国: ファン・インボム, オ・ヒョンギュ", "チェコ: ラディスラフ・クレイチー"],
        highlightUrl: ""
      }
    ]
  },
  {
    date: "2026-06-13",
    label: "6月13日（土）",
    matches: [
      {
        status: "finished",
        venue: "Toronto Stadium",
        home: { code: "CAN", name: "カナダ" },
        away: { code: "BIH", name: "ボスニア・ヘルツェゴビナ" },
        score: "1 - 1",
        scorers: ["カナダ: Cyle Larin", "ボスニア・ヘルツェゴビナ: Lukic"],
        highlightUrl: ""
      },
      {
        status: "finished",
        venue: "Los Angeles Stadium",
        home: { code: "USA", name: "アメリカ" },
        away: { code: "PAR", name: "パラグアイ" },
        score: "4 - 1",
        scorers: ["アメリカ: オウンゴール, Folarin Balogun x2, Gio Reyna", "パラグアイ: Mauricio"],
        highlightUrl: ""
      }
    ]
  },
  {
    date: "2026-06-14",
    label: "6月14日（日）",
    matches: [
      {
        status: "upcoming",
        venue: "San Francisco Bay Area Stadium",
        home: { code: "QAT", name: "カタール" },
        away: { code: "SUI", name: "スイス" },
        kickoff: "4:00",
        broadcast: "確認中"
      },
      {
        status: "upcoming",
        venue: "New York New Jersey Stadium",
        home: { code: "BRA", name: "ブラジル" },
        away: { code: "MAR", name: "モロッコ" },
        kickoff: "7:00",
        broadcast: "確認中"
      },
      {
        status: "upcoming",
        venue: "Boston Stadium",
        home: { code: "HAI", name: "ハイチ" },
        away: { code: "SCO", name: "スコットランド" },
        kickoff: "10:00",
        broadcast: "確認中"
      },
      {
        status: "upcoming",
        venue: "BC Place Vancouver",
        home: { code: "AUS", name: "オーストラリア" },
        away: { code: "TUR", name: "トルコ" },
        kickoff: "13:00",
        broadcast: "確認中"
      }
    ]
  }
];

const groupNames = "ABCDEFGHIJKL".split("");
const groupTeams = [
  ["MEX", "KOR", "CZE", "RSA"], ["CAN", "BIH", "QAT", "SUI"], ["BRA", "MAR", "HAI", "SCO"],
  ["USA", "AUS", "TUR", "PAR"], ["GER", "ECU", "CIV", "CUW"], ["NED", "JPN", "SWE", "TUN"],
  ["BEL", "EGY", "IRN", "NZL"], ["ESP", "URU", "KSA", "CPV"], ["FRA", "NOR", "SEN", "IRQ"],
  ["ARG", "AUT", "ALG", "JOR"], ["POR", "COL", "COD", "UZB"], ["ENG", "CRO", "GHA", "PAN"]
];

const countryNames = {
  USA: "アメリカ", CAN: "カナダ", MEX: "メキシコ", JPN: "日本", BRA: "ブラジル", FRA: "フランス",
  ARG: "アルゼンチン", ENG: "イングランド", ESP: "スペイン", GER: "ドイツ", ITA: "イタリア",
  POR: "ポルトガル", NED: "オランダ", BEL: "ベルギー", CRO: "クロアチア", MAR: "モロッコ",
  KOR: "韓国", AUS: "オーストラリア", SEN: "セネガル", GHA: "ガーナ", URU: "ウルグアイ",
  COL: "コロンビア", DEN: "デンマーク", SUI: "スイス", SWE: "スウェーデン", POL: "ポーランド",
  ECU: "エクアドル", QAT: "カタール", CRC: "コスタリカ", IRN: "イラン", WAL: "ウェールズ",
  CMR: "カメルーン", NGA: "ナイジェリア", CHI: "チリ", PER: "ペルー", EGY: "エジプト",
  TUN: "チュニジア", TUR: "トルコ", SCO: "スコットランド", UKR: "ウクライナ", NOR: "ノルウェー",
  SRB: "セルビア", AUT: "オーストリア", PAR: "パラグアイ", PAN: "パナマ", NZL: "ニュージーランド",
  JAM: "ジャマイカ", BOL: "ボリビア", RSA: "南アフリカ", CZE: "チェコ", BIH: "ボスニア・ヘルツェゴビナ",
  HAI: "ハイチ", CIV: "コートジボワール", CUW: "キュラソー", KSA: "サウジアラビア", CPV: "カーボベルデ",
  IRQ: "イラク", JOR: "ヨルダン", COD: "DRコンゴ", UZB: "ウズベキスタン", ALG: "アルジェリア"
};

const groupStatsRows = [
  ["A", 1, "MEX", 1, 1, 0, 0, 2, 0, 2, 3], ["A", 2, "KOR", 1, 1, 0, 0, 2, 1, 1, 3], ["A", 3, "CZE", 1, 0, 0, 1, 1, 2, -1, 0], ["A", 4, "RSA", 1, 0, 0, 1, 0, 2, -2, 0],
  ["B", 1, "CAN", 1, 0, 1, 0, 1, 1, 0, 1], ["B", 2, "BIH", 1, 0, 1, 0, 1, 1, 0, 1], ["B", 3, "QAT", 0, 0, 0, 0, 0, 0, 0, 0], ["B", 4, "SUI", 0, 0, 0, 0, 0, 0, 0, 0],
  ["C", 1, "BRA", 0, 0, 0, 0, 0, 0, 0, 0], ["C", 2, "MAR", 0, 0, 0, 0, 0, 0, 0, 0], ["C", 3, "HAI", 0, 0, 0, 0, 0, 0, 0, 0], ["C", 4, "SCO", 0, 0, 0, 0, 0, 0, 0, 0],
  ["D", 1, "USA", 1, 1, 0, 0, 4, 1, 3, 3], ["D", 2, "AUS", 0, 0, 0, 0, 0, 0, 0, 0], ["D", 3, "TUR", 0, 0, 0, 0, 0, 0, 0, 0], ["D", 4, "PAR", 1, 0, 0, 1, 1, 4, -3, 0],
  ["E", 1, "GER", 0, 0, 0, 0, 0, 0, 0, 0], ["E", 2, "ECU", 0, 0, 0, 0, 0, 0, 0, 0], ["E", 3, "CIV", 0, 0, 0, 0, 0, 0, 0, 0], ["E", 4, "CUW", 0, 0, 0, 0, 0, 0, 0, 0],
  ["F", 1, "NED", 0, 0, 0, 0, 0, 0, 0, 0], ["F", 2, "JPN", 0, 0, 0, 0, 0, 0, 0, 0], ["F", 3, "SWE", 0, 0, 0, 0, 0, 0, 0, 0], ["F", 4, "TUN", 0, 0, 0, 0, 0, 0, 0, 0],
  ["G", 1, "BEL", 0, 0, 0, 0, 0, 0, 0, 0], ["G", 2, "EGY", 0, 0, 0, 0, 0, 0, 0, 0], ["G", 3, "IRN", 0, 0, 0, 0, 0, 0, 0, 0], ["G", 4, "NZL", 0, 0, 0, 0, 0, 0, 0, 0],
  ["H", 1, "ESP", 0, 0, 0, 0, 0, 0, 0, 0], ["H", 2, "URU", 0, 0, 0, 0, 0, 0, 0, 0], ["H", 3, "KSA", 0, 0, 0, 0, 0, 0, 0, 0], ["H", 4, "CPV", 0, 0, 0, 0, 0, 0, 0, 0],
  ["I", 1, "FRA", 0, 0, 0, 0, 0, 0, 0, 0], ["I", 2, "NOR", 0, 0, 0, 0, 0, 0, 0, 0], ["I", 3, "SEN", 0, 0, 0, 0, 0, 0, 0, 0], ["I", 4, "IRQ", 0, 0, 0, 0, 0, 0, 0, 0],
  ["J", 1, "ARG", 0, 0, 0, 0, 0, 0, 0, 0], ["J", 2, "AUT", 0, 0, 0, 0, 0, 0, 0, 0], ["J", 3, "ALG", 0, 0, 0, 0, 0, 0, 0, 0], ["J", 4, "JOR", 0, 0, 0, 0, 0, 0, 0, 0],
  ["K", 1, "POR", 0, 0, 0, 0, 0, 0, 0, 0], ["K", 2, "COL", 0, 0, 0, 0, 0, 0, 0, 0], ["K", 3, "COD", 0, 0, 0, 0, 0, 0, 0, 0], ["K", 4, "UZB", 0, 0, 0, 0, 0, 0, 0, 0],
  ["L", 1, "ENG", 0, 0, 0, 0, 0, 0, 0, 0], ["L", 2, "CRO", 0, 0, 0, 0, 0, 0, 0, 0], ["L", 3, "GHA", 0, 0, 0, 0, 0, 0, 0, 0], ["L", 4, "PAN", 0, 0, 0, 0, 0, 0, 0, 0]
];

const groups = groupNames.map(group => ({
  group,
  standings: groupStatsRows.filter(row => row[0] === group).map(row => ({
    rank: row[1],
    code: row[2],
    team: countryNames[row[2]],
    played: row[3],
    wins: row[4],
    draws: row[5],
    losses: row[6],
    goalsFor: row[7],
    goalsAgainst: row[8],
    diff: row[9],
    points: row[10]
  }))
}));

const tournament = [
  {
    key: "r32",
    label: "ラウンド32",
    dateRange: "6/28 - 7/2",
    matches: [
      { id: "R32-1", date: "6/28(土) 4:00", teams: [{ name: "アメリカ", code: "USA", score: "2" }, { name: "日本", code: "JPN", score: "1" }], status: "終了" },
      { id: "R32-2", date: "6/28(土) 8:00", teams: [{ name: "ブラジル", code: "BRA", score: "-" }, { name: "デンマーク", code: "DEN", score: "-" }], status: "試合前" },
      { id: "R32-3", date: "6/29(日) 0:00", teams: [{ name: "フランス", code: "FRA", score: "3" }, { name: "韓国", code: "KOR", score: "0" }], status: "終了" },
      { id: "R32-4", date: "6/29(日) 4:00", teams: [{ name: "アルゼンチン", code: "ARG", score: "-" }, { name: "ガーナ", code: "GHA", score: "-" }], status: "試合前" },
      { id: "R32-5", date: "6/29(日) 8:00", teams: [{ name: "スペイン", code: "ESP", score: "-" }, { name: "モロッコ", code: "MAR", score: "-" }], status: "試合前" },
      { id: "R32-6", date: "6/29(日) 12:00", teams: [{ name: "イングランド", code: "ENG", score: "1" }, { name: "セネガル", code: "SEN", score: "1" }], status: "PK 4-3" },
      { id: "R32-7", date: "6/30(月) 0:00", teams: [{ name: "ポルトガル", code: "POR", score: "-" }, { name: "スイス", code: "SUI", score: "-" }], status: "試合前" },
      { id: "R32-8", date: "6/30(月) 4:00", teams: [{ name: "オランダ", code: "NED", score: "-" }, { name: "カナダ", code: "CAN", score: "-" }], status: "試合前" },
      { id: "R32-9", date: "6/30(月) 8:00", teams: [{ name: "メキシコ", code: "MEX", score: "-" }, { name: "ナイジェリア", code: "NGA", score: "-" }], status: "試合前" },
      { id: "R32-10", date: "6/30(月) 12:00", teams: [{ name: "ドイツ", code: "GER", score: "-" }, { name: "コロンビア", code: "COL", score: "-" }], status: "試合前" },
      { id: "R32-11", date: "7/1(火) 0:00", teams: [{ name: "ベルギー", code: "BEL", score: "-" }, { name: "ウルグアイ", code: "URU", score: "-" }], status: "試合前" },
      { id: "R32-12", date: "7/1(火) 4:00", teams: [{ name: "クロアチア", code: "CRO", score: "-" }, { name: "オーストラリア", code: "AUS", score: "-" }], status: "試合前" },
      { id: "R32-13", date: "7/1(火) 8:00", teams: [{ name: "イタリア", code: "ITA", score: "-" }, { name: "スウェーデン", code: "SWE", score: "-" }], status: "試合前" },
      { id: "R32-14", date: "7/1(火) 12:00", teams: [{ name: "トルコ", code: "TUR", score: "-" }, { name: "エジプト", code: "EGY", score: "-" }], status: "試合前" },
      { id: "R32-15", date: "7/2(水) 4:00", teams: [{ name: "セルビア", code: "SRB", score: "-" }, { name: "エクアドル", code: "ECU", score: "-" }], status: "試合前" },
      { id: "R32-16", date: "7/2(水) 8:00", teams: [{ name: "ポーランド", code: "POL", score: "-" }, { name: "チリ", code: "CHI", score: "-" }], status: "試合前" }
    ]
  },
  {
    key: "r16",
    label: "ラウンド16",
    dateRange: "7/4 - 7/7",
    matches: [
      { id: "R16-1", date: "7/4(土) 4:00", teams: [{ name: "R32-1の勝者", source: true, score: "-" }, { name: "R32-2の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-2", date: "7/4(土) 8:00", teams: [{ name: "R32-3の勝者", source: true, score: "-" }, { name: "R32-4の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-3", date: "7/5(日) 0:00", teams: [{ name: "R32-5の勝者", source: true, score: "-" }, { name: "R32-6の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-4", date: "7/5(日) 4:00", teams: [{ name: "R32-7の勝者", source: true, score: "-" }, { name: "R32-8の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-5", date: "7/5(日) 8:00", teams: [{ name: "R32-9の勝者", source: true, score: "-" }, { name: "R32-10の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-6", date: "7/5(日) 12:00", teams: [{ name: "R32-11の勝者", source: true, score: "-" }, { name: "R32-12の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-7", date: "7/6(月) 4:00", teams: [{ name: "R32-13の勝者", source: true, score: "-" }, { name: "R32-14の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "R16-8", date: "7/6(月) 8:00", teams: [{ name: "R32-15の勝者", source: true, score: "-" }, { name: "R32-16の勝者", source: true, score: "-" }], status: "カード未確定" }
    ]
  },
  {
    key: "qf",
    label: "準々決勝",
    dateRange: "7/9 - 7/11",
    matches: [
      { id: "QF-1", date: "7/9(木) 4:00", teams: [{ name: "R16-1の勝者", source: true, score: "-" }, { name: "R16-2の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "QF-2", date: "7/9(木) 8:00", teams: [{ name: "R16-3の勝者", source: true, score: "-" }, { name: "R16-4の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "QF-3", date: "7/10(金) 4:00", teams: [{ name: "R16-5の勝者", source: true, score: "-" }, { name: "R16-6の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "QF-4", date: "7/10(金) 8:00", teams: [{ name: "R16-7の勝者", source: true, score: "-" }, { name: "R16-8の勝者", source: true, score: "-" }], status: "カード未確定" }
    ]
  },
  {
    key: "sf",
    label: "準決勝",
    dateRange: "7/14 - 7/15",
    matches: [
      { id: "SF-1", date: "7/14(火) 9:00", teams: [{ name: "QF-1の勝者", source: true, score: "-" }, { name: "QF-2の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "SF-2", date: "7/15(水) 9:00", teams: [{ name: "QF-3の勝者", source: true, score: "-" }, { name: "QF-4の勝者", source: true, score: "-" }], status: "カード未確定" }
    ]
  },
  {
    key: "final",
    label: "決勝",
    dateRange: "7/19",
    matches: [
      { id: "FINAL", date: "7/19(日) 9:00", teams: [{ name: "SF-1の勝者", source: true, score: "-" }, { name: "SF-2の勝者", source: true, score: "-" }], status: "カード未確定" },
      { id: "3RD", date: "7/18(土) 9:00", teams: [{ name: "SF-1の敗者", source: true, score: "-" }, { name: "SF-2の敗者", source: true, score: "-" }], status: "3位決定戦" }
    ]
  }
];

const r32SeedLabels = [
  "グループA 1位", "グループB 2位", "グループC 1位", "グループD 2位",
  "グループE 1位", "グループF 2位", "グループG 1位", "グループH 2位",
  "グループI 1位", "グループJ 2位", "グループK 1位", "グループL 2位",
  "グループB 1位", "グループA 2位", "グループD 1位", "グループC 2位",
  "グループF 1位", "グループE 2位", "グループH 1位", "グループG 2位",
  "グループJ 1位", "グループI 2位", "グループL 1位", "グループK 2位",
  "3位上位 1", "3位上位 2", "3位上位 3", "3位上位 4",
  "3位上位 5", "3位上位 6", "3位上位 7", "3位上位 8"
];

tournament[0].matches.forEach((match, matchIndex) => {
  match.teams.forEach((team, teamIndex) => {
    team.seed = r32SeedLabels[(matchIndex * 2) + teamIndex];
  });
});

const betaTournamentRows = [
  ["r32", "R32-1", "6/28", "グループA 1位", "グループB 2位"], ["r32", "R32-2", "6/28", "グループC 1位", "グループD 2位"],
  ["r32", "R32-3", "6/29", "グループE 1位", "グループF 2位"], ["r32", "R32-4", "6/29", "グループG 1位", "グループH 2位"],
  ["r32", "R32-5", "6/30", "グループI 1位", "グループJ 2位"], ["r32", "R32-6", "6/30", "グループK 1位", "グループL 2位"],
  ["r32", "R32-7", "7/1", "グループB 1位", "グループA 2位"], ["r32", "R32-8", "7/1", "グループD 1位", "グループC 2位"],
  ["r32", "R32-9", "7/2", "グループF 1位", "グループE 2位"], ["r32", "R32-10", "7/2", "グループH 1位", "グループG 2位"],
  ["r32", "R32-11", "7/3", "グループJ 1位", "グループI 2位"], ["r32", "R32-12", "7/3", "グループL 1位", "グループK 2位"],
  ["r32", "R32-13", "7/3", "グループA-C 3位候補", "グループD-F 3位候補"], ["r32", "R32-14", "7/3", "グループG-I 3位候補", "グループJ-L 3位候補"],
  ["r32", "R32-15", "7/3", "3位上位候補", "3位上位候補"], ["r32", "R32-16", "7/3", "3位上位候補", "3位上位候補"],
  ["r16", "R16-1", "7/4", "R32-1の勝者", "R32-2の勝者"], ["r16", "R16-2", "7/4", "R32-3の勝者", "R32-4の勝者"],
  ["r16", "R16-3", "7/5", "R32-5の勝者", "R32-6の勝者"], ["r16", "R16-4", "7/5", "R32-7の勝者", "R32-8の勝者"],
  ["r16", "R16-5", "7/6", "R32-9の勝者", "R32-10の勝者"], ["r16", "R16-6", "7/6", "R32-11の勝者", "R32-12の勝者"],
  ["r16", "R16-7", "7/7", "R32-13の勝者", "R32-14の勝者"], ["r16", "R16-8", "7/7", "R32-15の勝者", "R32-16の勝者"],
  ["qf", "QF-1", "7/9", "R16-1の勝者", "R16-2の勝者"], ["qf", "QF-2", "7/10", "R16-3の勝者", "R16-4の勝者"],
  ["qf", "QF-3", "7/11", "R16-5の勝者", "R16-6の勝者"], ["qf", "QF-4", "7/11", "R16-7の勝者", "R16-8の勝者"],
  ["sf", "SF-1", "7/14", "QF-1の勝者", "QF-2の勝者"], ["sf", "SF-2", "7/15", "QF-3の勝者", "QF-4の勝者"],
  ["final", "FINAL", "7/19", "SF-1の勝者", "SF-2の勝者"], ["final", "3RD", "7/18", "SF-1の敗者", "SF-2の敗者"]
];

const betaRoundInfo = {
  r32: { label: "ラウンド32", dateRange: "6/28 - 7/3" },
  r16: { label: "ラウンド16", dateRange: "7/4 - 7/7" },
  qf: { label: "準々決勝", dateRange: "7/9 - 7/11" },
  sf: { label: "準決勝", dateRange: "7/14 - 7/15" },
  final: { label: "決勝", dateRange: "7/18 - 7/19" }
};

tournament.splice(0, tournament.length, ...Object.entries(betaRoundInfo).map(([key, info]) => ({
  key,
  label: info.label,
  dateRange: info.dateRange,
  matches: betaTournamentRows.filter(row => row[0] === key).map(row => ({
    id: row[1],
    date: row[2],
    teams: [
      { name: "未確定", seed: row[3], source: true, score: "-" },
      { name: "未確定", seed: row[4], source: true, score: "-" }
    ],
    status: row[1] === "3RD" ? "3位決定戦" : "カード未確定"
  }))
})));

const rankingData = {
  countries: [
    { title: "得点数ランキング", unit: "点", rows: [["BRA", 12], ["FRA", 10], ["ESP", 9], ["ARG", 8], ["USA", 7], ["JPN", 7], ["POR", 6]] },
    { title: "失点数ランキング", unit: "失点", rows: [["GHA", 8], ["AUS", 7], ["CAN", 6], ["SEN", 6], ["KOR", 5], ["PAN", 5], ["QAT", 4]] },
    { title: "イエローカード数ランキング", unit: "枚", rows: [["URU", 9], ["MAR", 8], ["DEN", 7], ["GER", 7], ["USA", 6], ["MEX", 6], ["NGA", 5]] },
    { title: "レッドカード数ランキング", unit: "枚", rows: [["SEN", 2], ["POL", 1], ["IRN", 1], ["CMR", 1], ["PER", 1], ["WAL", 1]] }
  ],
  players: [
    { title: "得点数ランキング", unit: "点", rows: [["ヴィニシウス", "BRA", 5], ["エムバペ", "FRA", 4], ["久保 建英", "JPN", 4], ["メッシ", "ARG", 3], ["プリシッチ", "USA", 3], ["モラタ", "ESP", 3]] },
    { title: "アシスト数ランキング", unit: "本", rows: [["グリーズマン", "FRA", 4], ["デ・ブライネ", "BEL", 3], ["ペドリ", "ESP", 3], ["ブルーノ", "POR", 2], ["三笘 薫", "JPN", 2], ["バルベルデ", "URU", 2]] },
    { title: "イエローカード数ランキング", unit: "枚", rows: [["ロメロ", "ARG", 3], ["アムラバト", "MAR", 3], ["ロドリ", "ESP", 2], ["ライス", "ENG", 2], ["遠藤 航", "JPN", 2], ["アダムス", "USA", 2]] },
    { title: "レッドカード数ランキング", unit: "枚", rows: [["クリバリ", "SEN", 1], ["ヒメネス", "MEX", 1], ["ヌニェス", "URU", 1], ["ベイル", "WAL", 1], ["ケイン", "ENG", 0], ["ネイマール", "BRA", 0]] }
  ],
  fifa: [
    ["ARG", 1889.02], ["FRA", 1851.92], ["BRA", 1812.78], ["ENG", 1807.83], ["BEL", 1793.71],
    ["POR", 1770.53], ["NED", 1758.51], ["ESP", 1732.64], ["ITA", 1718.82], ["CRO", 1717.57],
    ["USA", 1676.52], ["MEX", 1661.74], ["JPN", 1645.09], ["MAR", 1638.45], ["CAN", 1558.12]
  ]
};

rankingData.countries = [
  { title: "得点数ランキング", unit: "点", rows: [["USA", 4], ["MEX", 2], ["KOR", 2], ["CAN", 1], ["BIH", 1], ["CZE", 1], ["PAR", 1]] },
  { title: "失点数ランキング", unit: "失点", rows: [["PAR", 4], ["RSA", 2], ["CZE", 2], ["USA", 1], ["KOR", 1], ["CAN", 1], ["BIH", 1]] },
  { title: "イエローカード数ランキング", unit: "枚", rows: [] },
  { title: "レッドカード数ランキング", unit: "枚", rows: [["RSA", 2], ["MEX", 1]] }
];

rankingData.players = [
  { title: "得点数ランキング", unit: "点", rows: [["Folarin Balogun", "USA", 2], ["Gio Reyna", "USA", 1], ["Mauricio", "PAR", 1], ["Cyle Larin", "CAN", 1], ["Lukic", "BIH", 1], ["Raul Jimenez", "MEX", 1], ["Hwang In-beom", "KOR", 1], ["Oh Hyeon-gyu", "KOR", 1], ["Ladislav Krejci", "CZE", 1]] },
  { title: "アシスト数ランキング", unit: "本", rows: [["Promise David", "CAN", 1]] },
  { title: "イエローカード数ランキング", unit: "枚", rows: [] },
  { title: "レッドカード数ランキング", unit: "枚", rows: [["Yaya Sithole", "RSA", 1], ["Themba Zwane", "RSA", 1], ["Cesar Montes", "MEX", 1]] }
];

rankingData.fifa = [
  [1, "ARG", 1877.27], [2, "ESP", 1874.71], [3, "FRA", 1870.70], [4, "ENG", 1828.02],
  [5, "POR", 1767.85], [6, "BRA", 1765.86], [7, "MAR", 1755.10], [8, "NED", 1753.57],
  [9, "BEL", 1742.24], [10, "GER", 1735.77], [11, "CRO", 1714.87], [13, "MEX", 1700.98],
  [14, "COL", 1698.35], [15, "USA", 1688.53], [16, "SEN", 1684.07], [17, "URU", 1673.07],
  [18, "JPN", 1661.58], [19, "SUI", 1650.06], [20, "IRN", 1619.58], [22, "KOR", 1612.55],
  [23, "TUR", 1605.73], [24, "ECU", 1598.52], [25, "AUT", 1597.40], [27, "AUS", 1579.34],
  [28, "ALG", 1571.03], [29, "EGY", 1562.37], [30, "NOR", 1557.44], [31, "CAN", 1551.50],
  [33, "CIV", 1540.87], [34, "PAN", 1539.16], [38, "SWE", 1509.79], [40, "SCO", 1503.34],
  [42, "PAR", 1488.05], [43, "CZE", 1484.82], [45, "TUN", 1476.41], [46, "COD", 1474.43],
  [50, "UZB", 1458.73], [56, "QAT", 1450.31], [57, "IRQ", 1446.28], [60, "KSA", 1423.88],
  [61, "RSA", 1414.88], [63, "BIH", 1395.19], [64, "JOR", 1387.74], [67, "CPV", 1371.11],
  [73, "GHA", 1346.88], [82, "CUW", 1294.77], [83, "HAI", 1293.10], [85, "NZL", 1275.58]
];

const groupStageScheduleEt = [
  ["06-11", "15:00", "A", "MEX", "RSA", "Estadio Ciudad de Mexico", "FOX", "finished", 2, 0, ["メキシコ: ラウール・ヒメネス, ほか1名確認中", "南アフリカ: -"]],
  ["06-11", "18:00", "A", "KOR", "CZE", "Estadio Guadalajara", "FS1", "finished", 2, 1, ["韓国: ファン・インボム, オ・ヒョンギュ", "チェコ: ラディスラフ・クレイチー"]],
  ["06-12", "15:00", "B", "CAN", "BIH", "Toronto Stadium", "FOX", "finished", 1, 1, ["カナダ: Cyle Larin", "ボスニア・ヘルツェゴビナ: Lukic"]],
  ["06-12", "21:00", "D", "USA", "PAR", "Los Angeles Stadium", "FOX", "finished", 4, 1, ["アメリカ: オウンゴール, Folarin Balogun x2, Gio Reyna", "パラグアイ: Mauricio"]],
  ["06-13", "15:00", "B", "QAT", "SUI", "San Francisco Bay Area Stadium", "FOX"],
  ["06-13", "18:00", "C", "BRA", "MAR", "New York New Jersey Stadium", "FOX"],
  ["06-13", "21:00", "C", "HAI", "SCO", "Boston Stadium", "FS1"],
  ["06-14", "00:00", "D", "AUS", "TUR", "BC Place Vancouver", "FS1"],
  ["06-14", "12:00", "E", "GER", "CUW", "Kansas City Stadium", "FS1"],
  ["06-14", "15:00", "E", "CIV", "ECU", "Philadelphia Stadium", "FOX"],
  ["06-14", "18:00", "F", "NED", "JPN", "Dallas Stadium", "FOX"],
  ["06-14", "21:00", "F", "TUN", "SWE", "Houston Stadium", "FS1"],
  ["06-15", "12:00", "G", "BEL", "EGY", "Seattle Stadium", "FS1"],
  ["06-15", "15:00", "G", "IRN", "NZL", "Charlotte Stadium", "FOX"],
  ["06-15", "18:00", "H", "ESP", "CPV", "Miami Stadium", "FOX"],
  ["06-15", "21:00", "H", "KSA", "URU", "Kansas City Stadium", "FS1"],
  ["06-16", "12:00", "I", "FRA", "SEN", "New York New Jersey Stadium", "FS1"],
  ["06-16", "15:00", "I", "IRQ", "NOR", "Boston Stadium", "FOX"],
  ["06-16", "18:00", "J", "ARG", "ALG", "Los Angeles Stadium", "FOX"],
  ["06-16", "21:00", "J", "JOR", "AUT", "Toronto Stadium", "FS1"],
  ["06-17", "12:00", "K", "POR", "UZB", "Houston Stadium", "FS1"],
  ["06-17", "15:00", "K", "COD", "COL", "Miami Stadium", "FOX"],
  ["06-17", "18:00", "L", "ENG", "CRO", "Dallas Stadium", "FOX"],
  ["06-17", "21:00", "L", "PAN", "GHA", "San Francisco Bay Area Stadium", "FS1"],
  ["06-18", "15:00", "A", "RSA", "KOR", "Atlanta Stadium", "FOX"],
  ["06-18", "18:00", "B", "SUI", "BIH", "Los Angeles Stadium", "FOX"],
  ["06-18", "21:00", "A", "MEX", "CZE", "Estadio Guadalajara", "FS1"],
  ["06-18", "23:00", "B", "CAN", "QAT", "BC Place Vancouver", "FS1"],
  ["06-19", "15:00", "C", "MAR", "HAI", "New York New Jersey Stadium", "FOX"],
  ["06-19", "18:00", "C", "SCO", "BRA", "Miami Stadium", "FOX"],
  ["06-19", "21:00", "D", "TUR", "PAR", "Kansas City Stadium", "FS1"],
  ["06-19", "23:00", "D", "USA", "AUS", "Seattle Stadium", "FOX"],
  ["06-20", "15:00", "E", "CUW", "CIV", "Houston Stadium", "FOX"],
  ["06-20", "18:00", "F", "JPN", "TUN", "Vancouver Stadium", "FOX"],
  ["06-20", "21:00", "E", "GER", "ECU", "Philadelphia Stadium", "FS1"],
  ["06-20", "23:00", "F", "NED", "SWE", "Dallas Stadium", "FS1"],
  ["06-21", "15:00", "G", "EGY", "IRN", "New York New Jersey Stadium", "FOX"],
  ["06-21", "18:00", "H", "CPV", "KSA", "Dallas Stadium", "FOX"],
  ["06-21", "21:00", "G", "BEL", "NZL", "Seattle Stadium", "FS1"],
  ["06-21", "23:00", "H", "ESP", "URU", "Toronto Stadium", "FS1"],
  ["06-22", "15:00", "I", "SEN", "IRQ", "Philadelphia Stadium", "FOX"],
  ["06-22", "18:00", "J", "ALG", "JOR", "San Francisco Bay Area Stadium", "FOX"],
  ["06-22", "21:00", "I", "FRA", "NOR", "Boston Stadium", "FS1"],
  ["06-22", "23:00", "J", "ARG", "AUT", "Kansas City Stadium", "FS1"],
  ["06-23", "15:00", "K", "UZB", "COD", "Atlanta Stadium", "FOX"],
  ["06-23", "18:00", "L", "CRO", "PAN", "Toronto Stadium", "FOX"],
  ["06-23", "21:00", "K", "POR", "COL", "Miami Stadium", "FS1"],
  ["06-23", "23:00", "L", "ENG", "GHA", "Dallas Stadium", "FS1"],
  ["06-24", "15:00", "B", "BIH", "QAT", "Atlanta Stadium", "FOX"],
  ["06-24", "15:00", "B", "SUI", "CAN", "San Francisco Bay Area Stadium", "FS1"],
  ["06-24", "21:00", "A", "RSA", "CZE", "Miami Stadium", "FS1"],
  ["06-24", "21:00", "A", "KOR", "MEX", "Houston Stadium", "FOX"],
  ["06-25", "15:00", "D", "TUR", "USA", "Los Angeles Stadium", "FOX"],
  ["06-25", "15:00", "D", "PAR", "AUS", "Seattle Stadium", "FS1"],
  ["06-25", "21:00", "C", "SCO", "MAR", "Boston Stadium", "FOX"],
  ["06-25", "21:00", "C", "BRA", "HAI", "Philadelphia Stadium", "FS1"],
  ["06-26", "15:00", "F", "SWE", "JPN", "Atlanta Stadium", "FOX"],
  ["06-26", "15:00", "F", "TUN", "NED", "New York New Jersey Stadium", "FS1"],
  ["06-26", "21:00", "E", "CUW", "ECU", "Toronto Stadium", "FOX"],
  ["06-26", "21:00", "E", "CIV", "GER", "Kansas City Stadium", "FS1"],
  ["06-27", "15:00", "H", "URU", "CPV", "Vancouver Stadium", "FOX"],
  ["06-27", "15:00", "H", "KSA", "ESP", "Miami Stadium", "FS1"],
  ["06-27", "18:00", "J", "AUT", "ALG", "Dallas Stadium", "FOX"],
  ["06-27", "18:00", "J", "JOR", "ARG", "New York New Jersey Stadium", "FS1"],
  ["06-27", "21:00", "G", "EGY", "NZL", "Houston Stadium", "FS1"],
  ["06-27", "21:00", "G", "IRN", "BEL", "Seattle Stadium", "FOX"],
  ["06-27", "22:00", "I", "NOR", "SEN", "Los Angeles Stadium", "FS1"],
  ["06-27", "22:00", "I", "IRQ", "FRA", "Kansas City Stadium", "FOX"]
];

const knockoutScheduleEt = [
  ["06-28", "15:00", "R32", "R32-1", "2位グループA", "2位グループB"],
  ["06-28", "18:00", "R32", "R32-2", "1位グループE", "3位グループA/B/C/D/F"],
  ["06-28", "21:00", "R32", "R32-3", "1位グループK", "3位グループD/E/I/J/L"],
  ["06-29", "15:00", "R32", "R32-4", "1位グループI", "3位グループC/D/F/G/H"],
  ["06-29", "18:00", "R32", "R32-5", "1位グループE", "2位グループI"],
  ["06-29", "21:00", "R32", "R32-6", "1位グループA", "3位グループC/E/F/H/I"],
  ["06-30", "15:00", "R32", "R32-7", "2位グループL", "2位グループE"],
  ["06-30", "18:00", "R32", "R32-8", "1位グループD", "3位グループB/E/F/I/J"],
  ["06-30", "21:00", "R32", "R32-9", "1位グループG", "3位グループA/E/H/I/J"],
  ["07-01", "15:00", "R32", "R32-10", "1位グループJ", "2位グループH"],
  ["07-01", "18:00", "R32", "R32-11", "1位グループC", "3位グループH/I/J/K/L"],
  ["07-01", "21:00", "R32", "R32-12", "1位グループL", "3位グループE/H/I/J/K"],
  ["07-02", "15:00", "R32", "R32-13", "1位グループD", "2位グループC"],
  ["07-02", "18:00", "R32", "R32-14", "1位グループG", "2位グループJ"],
  ["07-02", "21:00", "R32", "R32-15", "1位グループB", "3位グループE/F/G/I/J"],
  ["07-03", "15:00", "R32", "R32-16", "1位グループH", "2位グループF"],
  ["07-03", "18:00", "R16", "R16-1", "R32-2の勝者", "R32-3の勝者"],
  ["07-03", "21:00", "R16", "R16-2", "R32-4の勝者", "R32-5の勝者"],
  ["07-04", "17:00", "R16", "R16-3", "R32-6の勝者", "R32-7の勝者"],
  ["07-04", "20:00", "R16", "R16-4", "R32-8の勝者", "R32-9の勝者"],
  ["07-05", "15:00", "R16", "R16-5", "R32-10の勝者", "R32-11の勝者"],
  ["07-05", "18:00", "R16", "R16-6", "R32-12の勝者", "R32-13の勝者"],
  ["07-06", "17:00", "R16", "R16-7", "R32-14の勝者", "R32-15の勝者"],
  ["07-06", "20:00", "R16", "R16-8", "R32-16の勝者", "R32-1の勝者"],
  ["07-09", "21:00", "QF", "QF-1", "R16-1の勝者", "R16-2の勝者"],
  ["07-10", "21:00", "QF", "QF-2", "R16-3の勝者", "R16-4の勝者"],
  ["07-11", "17:00", "QF", "QF-3", "R16-5の勝者", "R16-6の勝者"],
  ["07-11", "21:00", "QF", "QF-4", "R16-7の勝者", "R16-8の勝者"],
  ["07-14", "20:00", "SF", "SF-1", "QF-1の勝者", "QF-2の勝者"],
  ["07-15", "20:00", "SF", "SF-2", "QF-3の勝者", "QF-4の勝者"],
  ["07-18", "18:00", "3RD", "3RD", "SF-1の敗者", "SF-2の敗者"],
  ["07-19", "18:00", "FINAL", "FINAL", "SF-1の勝者", "SF-2の勝者"]
];

function toJstParts(mmdd, time) {
  const [month, day] = mmdd.split("-").map(Number);
  const [hour, minute] = time.split(":").map(Number);
  const shifted = new Date(Date.UTC(2026, month - 1, day, hour + 13, minute));
  return {
    date: `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, "0")}-${String(shifted.getUTCDate()).padStart(2, "0")}`,
    kickoff: `${shifted.getUTCMonth() + 1}/${shifted.getUTCDate()} ${shifted.getUTCHours()}:${String(shifted.getUTCMinutes()).padStart(2, "0")}`
  };
}

function dateLabel(date) {
  const d = new Date(`${date}T00:00:00+09:00`);
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  return `${d.getMonth() + 1}月${d.getDate()}日（${weekdays[d.getDay()]}）`;
}

function displayBroadcast(usBroadcast) {
  return `日本: 枠未発表 / 米国: ${usBroadcast}`;
}

const allScheduleMatches = [
  ...groupStageScheduleEt.map(row => {
    const [mmdd, time, group, homeCode, awayCode, venue, usBroadcast, status = "upcoming", homeScore = "", awayScore = "", scorers = []] = row;
    const jst = toJstParts(mmdd, time);
    const base = {
      date: jst.date,
      stage: `グループ${group}`,
      status,
      venue,
      home: { code: homeCode, name: countryNames[homeCode] },
      away: { code: awayCode, name: countryNames[awayCode] },
      broadcast: displayBroadcast(usBroadcast),
      kickoff: jst.kickoff.replace(/^[0-9]+\/[0-9]+ /, "")
    };
    return status === "finished"
      ? { ...base, score: `${homeScore} - ${awayScore}`, scorers, highlightUrl: "" }
      : base;
  }),
  ...knockoutScheduleEt.map(row => {
    const [mmdd, time, stage, id, homeSeed, awaySeed] = row;
    const jst = toJstParts(mmdd, time);
    return {
      date: jst.date,
      stage,
      status: "upcoming",
      venue: id,
      home: { code: "", name: homeSeed },
      away: { code: "", name: awaySeed },
      kickoff: jst.kickoff.replace(/^[0-9]+\/[0-9]+ /, ""),
      broadcast: "日本: 枠未発表 / 米国: 未発表"
    };
  })
];

matchesByDate.splice(0, matchesByDate.length, ...Object.values(allScheduleMatches.reduce((acc, match) => {
  acc[match.date] ||= { date: match.date, label: dateLabel(match.date), matches: [] };
  acc[match.date].matches.push(match);
  return acc;
}, {})).sort((a, b) => a.date.localeCompare(b.date)));

const knockoutRoundKey = { R32: "r32", R16: "r16", QF: "qf", SF: "sf", FINAL: "final", "3RD": "final" };
const knockoutRoundLabels = {
  r32: { label: "ラウンド32", dateRange: "6/29 - 7/4" },
  r16: { label: "ラウンド16", dateRange: "7/4 - 7/7" },
  qf: { label: "準々決勝", dateRange: "7/10 - 7/12" },
  sf: { label: "準決勝", dateRange: "7/15 - 7/16" },
  final: { label: "決勝", dateRange: "7/19 - 7/20" }
};
tournament.splice(0, tournament.length, ...Object.entries(knockoutRoundLabels).map(([key, info]) => ({
  key,
  label: info.label,
  dateRange: info.dateRange,
  matches: knockoutScheduleEt
    .filter(row => knockoutRoundKey[row[2]] === key)
    .map(row => {
      const jst = toJstParts(row[0], row[1]);
      return {
        id: row[3],
        date: `${jst.kickoff}`,
        teams: [
          { name: "未確定", seed: row[4], source: true, score: "-" },
          { name: "未確定", seed: row[5], source: true, score: "-" }
        ],
        status: row[2] === "3RD" ? "3位決定戦" : "カード未確定"
      };
    })
})));

const correctedGroupCsv = `06-11,20:00,A,MEX,RSA,ITVX
06-12,03:00,A,KOR,CZE,ITVX
06-12,20:00,B,CAN,BIH,BBC iPlayer
06-13,02:00,D,USA,PAR,BBC iPlayer
06-13,20:00,B,QAT,SUI,ITVX
06-13,23:00,C,BRA,MAR,BBC iPlayer
06-14,02:00,C,HAI,SCO,BBC iPlayer
06-14,05:00,D,AUS,TUR,ITVX
06-14,18:00,E,GER,CUW,ITVX
06-14,21:00,F,NED,JPN,ITVX
06-15,00:00,E,CIV,ECU,BBC iPlayer
06-15,03:00,F,SWE,TUN,ITVX
06-15,17:00,H,ESP,CPV,ITVX
06-15,20:00,G,BEL,EGY,BBC iPlayer
06-15,23:00,H,KSA,URU,ITVX
06-16,02:00,G,IRN,NZL,BBC iPlayer
06-16,20:00,I,FRA,SEN,BBC iPlayer
06-16,23:00,I,IRQ,NOR,BBC iPlayer
06-17,02:00,J,ARG,ALG,ITVX
06-17,05:00,J,AUT,JOR,BBC iPlayer
06-17,18:00,K,POR,COD,BBC iPlayer
06-17,21:00,L,ENG,CRO,ITVX
06-18,00:00,L,GHA,PAN,ITVX
06-18,03:00,K,UZB,COL,BBC iPlayer
06-18,17:00,A,CZE,RSA,BBC iPlayer
06-18,20:00,B,SUI,BIH,ITVX
06-18,23:00,B,CAN,QAT,ITVX
06-19,02:00,A,MEX,KOR,BBC iPlayer
06-19,20:00,D,USA,AUS,BBC iPlayer
06-19,23:00,C,SCO,MAR,ITVX
06-20,02:00,C,BRA,HAI,ITVX
06-20,05:00,D,TUR,PAR,ITVX
06-20,18:00,F,NED,SWE,BBC iPlayer
06-20,21:00,E,GER,CIV,ITVX
06-21,01:00,E,ECU,CUW,BBC iPlayer
06-21,05:00,F,TUN,JPN,BBC iPlayer
06-21,17:00,H,ESP,KSA,BBC iPlayer
06-21,20:00,G,BEL,IRN,ITVX
06-21,23:00,H,URU,CPV,BBC iPlayer
06-22,02:00,G,NZL,EGY,ITVX
06-22,18:00,J,ARG,AUT,BBC iPlayer
06-22,22:00,I,FRA,IRQ,BBC iPlayer
06-23,01:00,I,NOR,SEN,ITVX
06-23,04:00,J,JOR,ALG,ITVX
06-23,18:00,K,POR,UZB,ITVX
06-23,21:00,L,ENG,GHA,BBC iPlayer
06-24,00:00,L,PAN,CRO,BBC iPlayer
06-24,03:00,K,COL,COD,ITVX
06-24,20:00,B,SUI,CAN,ITVX
06-24,20:00,B,BIH,QAT,ITVX
06-24,23:00,C,MAR,HAI,BBC iPlayer
06-24,23:00,C,SCO,BRA,BBC iPlayer
06-25,02:00,A,RSA,KOR,BBC iPlayer
06-25,02:00,A,CZE,MEX,BBC iPlayer
06-25,21:00,E,CUW,CIV,BBC iPlayer
06-25,21:00,E,ECU,GER,BBC iPlayer
06-26,00:00,F,TUN,NED,BBC iPlayer
06-26,00:00,F,JPN,SWE,BBC iPlayer
06-26,03:00,D,TUR,USA,ITVX
06-26,03:00,D,PAR,AUS,ITVX
06-26,20:00,I,NOR,FRA,ITVX
06-26,20:00,I,SEN,IRQ,ITVX
06-27,01:00,H,CPV,KSA,ITVX
06-27,01:00,H,URU,ESP,ITVX
06-27,04:00,G,NZL,BEL,BBC iPlayer
06-27,04:00,G,EGY,IRN,BBC iPlayer
06-27,22:00,L,PAN,ENG,ITVX
06-27,22:00,L,CRO,GHA,ITVX
06-28,00:30,K,COL,POR,BBC iPlayer
06-28,00:30,K,COD,UZB,BBC iPlayer
06-28,03:00,J,ALG,AUT,BBC iPlayer
06-28,03:00,J,JOR,ARG,BBC iPlayer`;

const correctedKnockoutCsv = `06-28,20:00,R32,R32-1,2位グループA,2位グループB
06-29,18:00,R32,R32-2,1位グループC,2位グループF
06-29,21:30,R32,R32-3,1位グループE,3位グループA/B/C/D/F
06-30,02:00,R32,R32-4,1位グループF,2位グループC
06-30,18:00,R32,R32-5,2位グループE,2位グループI
06-30,22:00,R32,R32-6,1位グループI,3位グループC/D/F/G/H
07-01,02:00,R32,R32-7,1位グループA,3位グループC/E/F/H/I
07-01,17:00,R32,R32-8,1位グループL,3位グループE/H/I/J/K
07-01,21:00,R32,R32-9,1位グループG,3位グループA/E/H/I/J
07-02,01:00,R32,R32-10,1位グループD,3位グループB/E/F/I/J
07-02,20:00,R32,R32-11,1位グループH,2位グループJ
07-03,00:00,R32,R32-12,2位グループK,2位グループL
07-03,04:00,R32,R32-13,1位グループB,3位グループE/F/G/I/J
07-03,19:00,R32,R32-14,2位グループD,2位グループG
07-03,23:00,R32,R32-15,1位グループJ,2位グループH
07-04,02:30,R32,R32-16,1位グループK,3位グループD/E/I/J/L
07-04,18:00,R16,R16-1,R32-1の勝者,R32-2の勝者
07-04,22:00,R16,R16-2,R32-3の勝者,R32-4の勝者
07-05,21:00,R16,R16-3,R32-5の勝者,R32-6の勝者
07-06,01:00,R16,R16-4,R32-7の勝者,R32-8の勝者
07-06,20:00,R16,R16-5,R32-9の勝者,R32-10の勝者
07-07,01:00,R16,R16-6,R32-11の勝者,R32-12の勝者
07-07,17:00,R16,R16-7,R32-13の勝者,R32-14の勝者
07-07,21:00,R16,R16-8,R32-15の勝者,R32-16の勝者
07-09,21:00,QF,QF-1,R16-1の勝者,R16-2の勝者
07-10,20:00,QF,QF-2,R16-3の勝者,R16-4の勝者
07-11,22:00,QF,QF-3,R16-5の勝者,R16-6の勝者
07-12,02:00,QF,QF-4,R16-7の勝者,R16-8の勝者
07-14,20:00,SF,SF-1,QF-1の勝者,QF-2の勝者
07-15,20:00,SF,SF-2,QF-3の勝者,QF-4の勝者
07-18,22:00,3RD,3RD,SF-1の敗者,SF-2の敗者
07-19,20:00,FINAL,FINAL,SF-1の勝者,SF-2の勝者`;

function bstToJstParts(mmdd, time) {
  const [month, day] = mmdd.split("-").map(Number);
  const [hourText, minuteText = "0"] = time.replace(".", ":").split(":");
  const shifted = new Date(Date.UTC(2026, month - 1, day, Number(hourText) + 8, Number(minuteText)));
  return {
    date: `${shifted.getUTCFullYear()}-${String(shifted.getUTCMonth() + 1).padStart(2, "0")}-${String(shifted.getUTCDate()).padStart(2, "0")}`,
    kickoff: `${shifted.getUTCMonth() + 1}/${shifted.getUTCDate()} ${shifted.getUTCHours()}:${String(shifted.getUTCMinutes()).padStart(2, "0")}`
  };
}

function csvRows(csv) {
  return csv.trim().split("\n").map(line => line.split(","));
}

function pairKey(codeA, codeB) {
  return [codeA, codeB].sort().join("-");
}

const liveBroadcastByPair = new Map();

function addLiveBroadcast(channels, pairs) {
  pairs.forEach(pair => {
    const [codeA, codeB] = pair.split("-");
    const key = pairKey(codeA, codeB);
    const existing = liveBroadcastByPair.get(key) || [];
    channels.forEach(channel => {
      if (!existing.includes(channel)) existing.push(channel);
    });
    liveBroadcastByPair.set(key, existing);
  });
}

addLiveBroadcast(["NHK総合"], [
  "MEX-RSA", "CAN-BIH", "HAI-SCO", "NED-JPN", "ESP-CPV", "BEL-EGY", "ARG-ALG",
  "MEX-KOR", "USA-AUS", "BRA-HAI", "NED-SWE", "ESP-KSA", "NOR-SEN", "POR-UZB",
  "SUI-CAN", "CZE-MEX", "JPN-SWE", "NOR-FRA", "JOR-ARG"
]);

addLiveBroadcast(["フジテレビ系"], [
  "FRA-SEN", "POR-COD", "SCO-MAR", "PAN-CRO", "COL-POR"
]);

addLiveBroadcast(["日本テレビ系"], [
  "AUS-TUR", "SWE-TUN", "CZE-RSA", "GER-CIV", "TUN-JPN", "COL-COD", "TUR-USA",
  "URU-ESP", "NZL-BEL"
]);

function japaneseBroadcast(homeCode, awayCode) {
  const channels = ["DAZN"];
  const tvChannels = liveBroadcastByPair.get(pairKey(homeCode, awayCode)) || [];
  return [...channels, ...tvChannels].join(" / ");
}

function directMatchKey(homeCode, awayCode) {
  return `${homeCode || ""}-${awayCode || ""}`;
}

const timedScorersByMatch = {
  "MEX-RSA": ["メキシコ: 9' Julian Quinones, 67' Raul Jimenez", "南アフリカ: -"],
  "KOR-CZE": ["韓国: 67' Hwang In-beom, 80' Oh Hyeon-gyu", "チェコ: 59' Ladislav Krejci"],
  "CAN-BIH": ["カナダ: 78' Cyle Larin", "ボスニア・ヘルツェゴビナ: 21' Lukic"],
  "USA-PAR": ["アメリカ: 7' Own goal, 31' Folarin Balogun, 45+5' Folarin Balogun, 90+7' Gio Reyna", "パラグアイ: 73' Mauricio"],
  "QAT-SUI": ["カタール: 90+5' Boualem Khoukhi", "スイス: 17' Breel Embolo"],
  "BRA-MAR": ["ブラジル: 32' Vinicius Junior", "モロッコ: 21' Ismael Saibari"],
  "HAI-SCO": ["ハイチ: -", "スコットランド: 28' John McGinn"],
  "AUS-TUR": ["オーストラリア: 27' Nestory Irankunda, 75' Connor Metcalfe", "トルコ: -"],
  "GER-CUW": ["ドイツ: 6' Felix Nmecha, 38' Nico Schlotterbeck, 45+5' Kai Havertz, 47' Jamal Musiala, 68' Nathaniel Brown, 78' Deniz Undav, 88' Kai Havertz", "キュラソー: 21' Livano Comenencia"],
  "NED-JPN": ["オランダ: 51' Virgil van Dijk, 64' Crysencio Summerville", "日本: 57' Keito Nakamura, 89' Daichi Kamada"],
  "CIV-ECU": ["コートジボワール: 90' Amad Diallo", "エクアドル: -"],
  "SWE-TUN": ["スウェーデン: 7' Yasin Ayari, 30' Alexander Isak, 60' Viktor Gyokeres, 86' Mattias Svanberg, 90+6' Yasin Ayari", "チュニジア: 43' Omar Rekik"]
};

function hasGoalMinute(scorers) {
  return (scorers || []).some(line => /\d+(?:\+\d+)?'\s*\S/.test(String(line)));
}

function scorerLinesForMatch(homeCode, awayCode, scorers) {
  const lines = Array.isArray(scorers) ? scorers : [];
  return hasGoalMinute(lines) ? lines : (timedScorersByMatch[directMatchKey(homeCode, awayCode)] || lines);
}

const correctedScheduleMatches = [
  ...csvRows(correctedGroupCsv).map(row => {
    const [mmdd, time, group, homeCode, awayCode, overseasBroadcast] = row;
    const jst = bstToJstParts(mmdd, time);
    const resultMap = {
      "MEX-RSA": [2, 0, timedScorersByMatch["MEX-RSA"]],
      "KOR-CZE": [2, 1, timedScorersByMatch["KOR-CZE"]],
      "CAN-BIH": [1, 1, timedScorersByMatch["CAN-BIH"]],
      "USA-PAR": [4, 1, timedScorersByMatch["USA-PAR"]]
    };
    const highlightUrlMap = {
      "MEX-RSA": "https://www.youtube.com/watch?v=Ht804w5UO0E",
      "KOR-CZE": "https://www.youtube.com/watch?v=1kc2lD5KzKU",
      "CAN-BIH": "https://www.youtube.com/watch?v=fA-D5X94BhQ",
      "USA-PAR": "https://www.youtube.com/watch?v=jpOLXF6Mpxs"
    };
    const result = resultMap[`${homeCode}-${awayCode}`];
    const matchKey = `${homeCode}-${awayCode}`;
    return {
      date: jst.date,
      stage: `グループ${group}`,
      status: result ? "finished" : "upcoming",
      venue: `グループ${group}`,
      home: { code: homeCode, name: countryNames[homeCode] },
      away: { code: awayCode, name: countryNames[awayCode] },
      kickoff: jst.kickoff.replace(/^[0-9]+\/[0-9]+ /, ""),
      broadcast: japaneseBroadcast(homeCode, awayCode),
      ...(result ? { score: `${result[0]} - ${result[1]}`, scorers: result[2], highlightUrl: highlightUrlMap[matchKey] || "" } : {})
    };
  }),
  ...csvRows(correctedKnockoutCsv).map(row => {
    const [mmdd, time, stage, id, homeSeed, awaySeed] = row;
    const jst = bstToJstParts(mmdd, time);
    return {
      date: jst.date,
      stage,
      status: "upcoming",
      venue: id,
      home: { code: "", name: homeSeed },
      away: { code: "", name: awaySeed },
      kickoff: jst.kickoff.replace(/^[0-9]+\/[0-9]+ /, ""),
      broadcast: "DAZN / 地上波: 未発表"
    };
  })
];

matchesByDate.splice(0, matchesByDate.length, ...Object.values(correctedScheduleMatches.reduce((acc, match) => {
  acc[match.date] ||= { date: match.date, label: dateLabel(match.date), matches: [] };
  acc[match.date].matches.push(match);
  return acc;
}, {})).sort((a, b) => a.date.localeCompare(b.date)));

tournament.splice(0, tournament.length, ...Object.entries(knockoutRoundLabels).map(([key, info]) => ({
  key,
  label: info.label,
  dateRange: info.dateRange,
  matches: csvRows(correctedKnockoutCsv)
    .filter(row => knockoutRoundKey[row[2]] === key)
    .map(row => {
      const jst = bstToJstParts(row[0], row[1]);
      return {
        id: row[3],
        date: jst.kickoff,
        teams: [
          { name: "未確定", seed: row[4], source: true, score: "-" },
          { name: "未確定", seed: row[5], source: true, score: "-" }
        ],
        status: row[2] === "3RD" ? "3位決定戦" : "カード未確定"
      };
    })
})));

function getTodayJstDateKey(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(date).reduce((acc, part) => {
    acc[part.type] = part.value;
    return acc;
  }, {});
  return `${parts.year}-${parts.month}-${parts.day}`;
}

function getInitialMatchDateIndex() {
  const today = getTodayJstDateKey();
  const nextMatchIndex = matchesByDate.findIndex(day => day.date >= today);
  return nextMatchIndex === -1 ? Math.max(0, matchesByDate.length - 1) : nextMatchIndex;
}

let currentDateIndex = getInitialMatchDateIndex();
let currentRankingTab = "countries";
let currentRankingMetricIndex = 0;
let rankingSearchQuery = "";
let currentTournamentRound = "r32";
let isMatchAnimating = false;
const expandedRankings = new Set();
let calendarViewYear = 2026;
let calendarViewMonth = 6;

const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function flag(code) {
  return flags[code] || "🏳️";
}

function codeFromCountryName(name) {
  return Object.entries(countryNames).find(([, countryName]) => countryName === name)?.[0] || "";
}

function numberValue(value, fallback = 0) {
  if (value === "" || value === null || value === undefined) return fallback;
  const number = Number(String(value).replace(/,/g, ""));
  return Number.isNaN(number) ? fallback : number;
}

function normalizeGoogleDateExpression(value, type) {
  const match = String(value).match(/^Date\((\d+),(\d+),(\d+)(?:,(\d+),(\d+),(\d+))?\)$/);
  if (!match) return value;
  const [, year, zeroBasedMonth, day, hour = "0", minute = "0"] = match;
  if (type === "date") {
    return `${year}-${String(Number(zeroBasedMonth) + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }
  return `${Number(hour)}:${String(Number(minute)).padStart(2, "0")}`;
}

function normalizeSheetCell(cell, column = {}) {
  if (!cell) return "";
  const value = cell.v ?? cell.f ?? "";
  if (Array.isArray(value)) {
    const [hour = 0, minute = 0] = value;
    return `${hour}:${String(minute).padStart(2, "0")}`;
  }
  if (typeof value === "string" && value.startsWith("Date(")) {
    return normalizeGoogleDateExpression(value, column.type);
  }
  if (value instanceof Date) {
    return `${value.getFullYear()}-${String(value.getMonth() + 1).padStart(2, "0")}-${String(value.getDate()).padStart(2, "0")}`;
  }
  return typeof value === "string" ? value.trim() : value;
}

function sheetTableToObjects(table) {
  const labeledColumns = (table.cols || [])
    .map((column, index) => ({ header: String(column.label || "").trim(), index }))
    .filter(item => item.header);
  const rows = (table.rows || []).map(row => (row.c || []).map((cell, index) => normalizeSheetCell(cell, table.cols?.[index] || {})));
  if (!rows.length) return [];
  if (labeledColumns.length) {
    return rows
      .filter(row => row.some(value => value !== ""))
      .map(row => Object.fromEntries(labeledColumns.map(({ header, index }) => [header, row[index] ?? ""])));
  }
  const headerIndexes = rows[0]
    .map((header, index) => ({ header: String(header || "").trim(), index }))
    .filter(item => item.header);
  return rows.slice(1)
    .filter(row => row.some(value => value !== ""))
    .map(row => Object.fromEntries(headerIndexes.map(({ header, index }) => [header, row[index] ?? ""])));
}

function loadPublicSheet(sheetName) {
  return new Promise((resolve, reject) => {
    const callbackName = `wcSheetCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const cacheBust = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timeoutId = window.setTimeout(() => {
      cleanup();
      reject(new Error(`${sheetName} の読み込みがタイムアウトしました`));
    }, 12000);

    function cleanup() {
      window.clearTimeout(timeoutId);
      delete window[callbackName];
      script.remove();
    }

    window[callbackName] = response => {
      cleanup();
      if (response.status !== "ok") {
        reject(new Error(`${sheetName} の読み込みに失敗しました`));
        return;
      }
      resolve(sheetTableToObjects(response.table));
    };

    script.onerror = () => {
      cleanup();
      reject(new Error(`${sheetName} の読み込みに失敗しました`));
    };
    script.src = `https://docs.google.com/spreadsheets/d/${PUBLIC_SHEET_ID}/gviz/tq?tqx=responseHandler:${callbackName}&sheet=${encodeURIComponent(sheetName)}&cacheBust=${cacheBust}`;
    document.head.appendChild(script);
  });
}

function groupMatchesByDate(matches) {
  return Object.values(matches.reduce((acc, match) => {
    acc[match.date] ||= { date: match.date, label: dateLabel(match.date), matches: [] };
    acc[match.date].matches.push(match);
    return acc;
  }, {})).sort((a, b) => a.date.localeCompare(b.date));
}

function applySheetMatches(rows) {
  const nextMatches = rows.map(row => {
    const status = row.status === "試合終了" || row.status === "finished" ? "finished" : "upcoming";
    const base = {
      date: String(row.date || ""),
      stage: row.stage || "",
      status,
      venue: row.venue_or_match_id || "",
      home: { code: row.home_code || "", name: row.home_name || "" },
      away: { code: row.away_code || "", name: row.away_name || "" },
      kickoff: row.kickoff_jst || "",
      broadcast: row.broadcast || ""
    };
    if (base.home.code && base.home.name) countryNames[base.home.code] = base.home.name;
    if (base.away.code && base.away.name) countryNames[base.away.code] = base.away.name;
    return status === "finished"
      ? {
          ...base,
          score: row.score || "-",
          scorers: scorerLinesForMatch(base.home.code, base.away.code, row.scorers ? String(row.scorers).split(" / ").filter(Boolean) : []),
          highlightUrl: row.highlight_url || ""
        }
      : base;
  }).filter(match => match.date && match.home.name && match.away.name);

  if (nextMatches.length) {
    matchesByDate.splice(0, matchesByDate.length, ...groupMatchesByDate(nextMatches));
  }
}

function applySheetGroups(rows) {
  const grouped = rows.reduce((acc, row) => {
    const group = row.group;
    if (!group) return acc;
    const code = row.team_code || "";
    const team = row.team_name || countryNames[code] || code;
    if (code && team) countryNames[code] = team;
    acc[group] ||= { group, standings: [] };
    acc[group].standings.push({
      rank: numberValue(row.rank),
      code,
      team,
      played: numberValue(row.played),
      wins: numberValue(row.wins),
      draws: numberValue(row.draws),
      losses: numberValue(row.losses),
      goalsFor: numberValue(row.goals_for),
      goalsAgainst: numberValue(row.goals_against),
      diff: numberValue(row.goal_difference),
      points: numberValue(row.points)
    });
    return acc;
  }, {});

  const nextGroups = groupNames.map(group => grouped[group]).filter(Boolean);
  if (nextGroups.length) {
    groups.splice(0, groups.length, ...nextGroups);
  }
}

function applySheetTournament(rows) {
  const roundOrder = ["r32", "r16", "qf", "sf", "final"];
  const grouped = rows.reduce((acc, row) => {
    const key = String(row.round_key || "").toLowerCase();
    if (!key) return acc;
    acc[key] ||= {
      key,
      label: row.round_label || key,
      dateRange: row.date_range || "",
      matches: []
    };
    const homeCode = codeFromCountryName(row.home_name || "");
    const awayCode = codeFromCountryName(row.away_name || "");
    acc[key].matches.push({
      id: row.match_id || "",
      date: row.kickoff_jst || "",
      teams: [
        { name: row.home_name || "未確定", code: homeCode, seed: row.home_seed || "", source: !homeCode, score: row.home_score || "-" },
        { name: row.away_name || "未確定", code: awayCode, seed: row.away_seed || "", source: !awayCode, score: row.away_score || "-" }
      ],
      status: row.status || "カード未確定"
    });
    return acc;
  }, {});

  const nextTournament = roundOrder.map(key => grouped[key]).filter(Boolean);
  if (nextTournament.length) {
    tournament.splice(0, tournament.length, ...nextTournament);
  }
}

function rankingCardsFromRows(rows, type) {
  const metricOrder = type === "players"
    ? ["得点数ランキング", "アシスト数ランキング", "イエローカード数ランキング", "レッドカード数ランキング"]
    : ["得点数ランキング", "失点数ランキング", "イエローカード数ランキング", "レッドカード数ランキング"];
  const grouped = rows.reduce((acc, row) => {
    const metric = row.metric || "";
    if (!metric) return acc;
    acc[metric] ||= { title: metric, unit: row.unit || "", rows: [] };
    if (type === "players") {
      acc[metric].rows.push({
        rank: numberValue(row.rank),
        value: [row.player_name || "", row.team_code || "", numberValue(row.value)]
      });
    } else {
      const code = row.team_code || "";
      if (code && row.team_name) countryNames[code] = row.team_name;
      acc[metric].rows.push({
        rank: numberValue(row.rank),
        value: [code, numberValue(row.value)]
      });
    }
    return acc;
  }, {});

  return metricOrder
    .map(metric => grouped[metric])
    .filter(Boolean)
    .map(card => ({
      title: card.title,
      unit: card.unit,
      rows: card.rows.sort((a, b) => a.rank - b.rank).map(row => row.value)
    }));
}

function applySheetRankings(countryRows, playerRows, fifaRows) {
  const nextCountries = rankingCardsFromRows(countryRows, "countries");
  const nextPlayers = rankingCardsFromRows(playerRows, "players");
  const nextFifa = fifaRows.map(row => {
    const code = row.team_code || "";
    if (code && row.team_name) countryNames[code] = row.team_name;
    return [numberValue(row.fifa_rank), code, numberValue(row.points)];
  }).filter(row => row[0] && row[1]).sort((a, b) => a[0] - b[0]);

  if (nextCountries.length) rankingData.countries = nextCountries;
  if (nextPlayers.length) rankingData.players = nextPlayers;
  if (nextFifa.length) rankingData.fifa = nextFifa;
}

async function loadPublicSheetData() {
  const [matches, groupRows, tournamentRows, countryRows, playerRows, fifaRows] = await Promise.all(
    PUBLIC_SHEET_NAMES.map(loadPublicSheet)
  );
  applySheetMatches(matches);
  applySheetGroups(groupRows);
  applySheetTournament(tournamentRows);
  applySheetRankings(countryRows, playerRows, fifaRows);
}

function sortStandings(standings) {
  return [...standings]
    .sort((a, b) => (
      b.points - a.points ||
      b.diff - a.diff ||
      b.goalsFor - a.goalsFor ||
      b.wins - a.wins ||
      a.team.localeCompare(b.team, "ja")
    ))
    .map((row, index) => ({ ...row, rank: index + 1 }));
}

function sortedMatches(matches) {
  return matches
    .map((match, originalIndex) => ({ match, originalIndex }))
    .sort((a, b) => (a.match.status === "finished" ? 0 : 1) - (b.match.status === "finished" ? 0 : 1));
}

function fifaRankForCode(code) {
  if (!code) return "";
  const row = rankingData.fifa.find(item => item[1] === code);
  return row ? row[0] : "";
}

function teamNameWithRank(team) {
  const rank = fifaRankForCode(team.code);
  const rankLabel = rank ? `<span class="fifa-rank" aria-label="FIFAランキング${rank}位">#${rank}</span>` : "";
  return `<span class="team-name">${team.name}${rankLabel}</span>`;
}

function scorerLineForTeam(match, team) {
  return (match.scorers || []).find(line => String(line).startsWith(`${team.name}:`)) || "";
}

function parseGoalEntry(entry) {
  const text = String(entry || "").trim();
  const minuteMatch = text.match(/^(\d+(?:\+\d+)?)'\s*(.+)$/);
  if (minuteMatch) {
    return {
      minute: minuteMatch[1],
      name: minuteMatch[2].trim()
    };
  }
  return { minute: "", name: text };
}

function expandScorerText(text) {
  return String(text || "")
    .split(",")
    .map(name => name.trim())
    .filter(name => name && name !== "-")
    .flatMap(name => {
      const countMatch = name.match(/\s*x(\d+)$/i);
      const count = countMatch ? Number(countMatch[1]) : 1;
      const playerName = countMatch ? name.replace(/\s*x\d+$/i, "").trim() : name;
      return Array.from({ length: count }, () => parseGoalEntry(playerName));
    });
}

function scorerGroup(match, team) {
  const line = scorerLineForTeam(match, team);
  const scorerText = line.includes(":") ? line.split(":").slice(1).join(":").trim() : "";
  const goals = expandScorerText(scorerText);

  return `
    <div class="scorer-team">
      <div class="goal-list">
        ${goals.length ? goals.map(goal => `
          <div class="goal-row">
            ${goal.minute ? `<span class="goal-minute">${goal.minute}'</span>` : ""}
            <span class="goal-player">${goal.name}</span>
          </div>
        `).join("") : ""}
      </div>
    </div>
  `;
}

function renderScorerGroups(match) {
  const groups = [match.home, match.away].map(team => scorerGroup(match, team)).join("");

  return `
    <div class="scorers">
      <div class="scorer-grid">${groups}</div>
    </div>
  `;
}

function renderMatches() {
  const day = matchesByDate[currentDateIndex];
  if (qs("#match-calendar").hidden) {
    calendarViewMonth = Number(day.date.slice(5, 7));
  }
  qs("#current-date-label").textContent = day.label;
  qs("#prev-day").disabled = currentDateIndex === 0;
  qs("#next-day").disabled = currentDateIndex === matchesByDate.length - 1;
  qs("#match-list").innerHTML = sortedMatches(day.matches).map(({ match, originalIndex }) => {
    const isFinished = match.status === "finished";
    return `
      <article class="card match-card">
        <div class="match-top">
          <span class="status ${isFinished ? "" : "upcoming"}">${isFinished ? "試合終了" : "試合前"}</span>
          <span class="venue">${match.venue}</span>
        </div>
        <div class="teams">
          <div class="team"><span class="flag">${flag(match.home.code)}</span>${teamNameWithRank(match.home)}</div>
          ${isFinished ? `<div class="score"><strong>${match.score}</strong><span>Full Time</span></div>` : `<div class="kickoff"><span class="kickoff-label">キックオフ</span><strong>${match.kickoff}</strong><span>日本時間</span></div>`}
          <div class="team"><span class="flag">${flag(match.away.code)}</span>${teamNameWithRank(match.away)}</div>
        </div>
        <div class="match-meta">
          ${isFinished ? `${renderScorerGroups(match)}<button class="text-link" type="button" data-highlight="${currentDateIndex}-${originalIndex}">試合ハイライトを見る</button>` : `<span class="pill">${match.broadcast}</span>`}
        </div>
      </article>
    `;
  }).join("");
  renderCalendar();
}

function renderCalendar() {
  const matchDateIndex = new Map(matchesByDate.map((day, index) => [day.date, index]));
  const year = calendarViewYear;
  const month = calendarViewMonth;
  const firstDayOffset = new Date(`${year}-${String(month).padStart(2, "0")}-01T00:00:00`).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const cells = [];
  const availableMonths = [...new Set(matchesByDate.map(day => day.date.slice(0, 7)))].sort();
  const currentMonthKey = `${year}-${String(month).padStart(2, "0")}`;

  for (let i = 0; i < firstDayOffset; i += 1) {
    cells.push(`<span></span>`);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const index = matchDateIndex.get(date);
    const hasMatch = index !== undefined;
    const active = index === currentDateIndex;
    cells.push(`
      <button class="calendar-day ${hasMatch ? "has-match" : ""} ${active ? "is-active" : ""}" type="button" ${hasMatch ? `data-date-index="${index}"` : "disabled"}>
        ${day}
      </button>
    `);
  }

  qs("#calendar-month-label").textContent = `${year}年${month}月`;
  const prevMonth = qs('[data-calendar-month="-1"]');
  const nextMonth = qs('[data-calendar-month="1"]');
  if (prevMonth) prevMonth.disabled = currentMonthKey === availableMonths[0];
  if (nextMonth) nextMonth.disabled = currentMonthKey === availableMonths[availableMonths.length - 1];
  qs("#calendar-grid").innerHTML = cells.join("");
}

function renderGroups() {
  qs("#group-chips").innerHTML = groups.map((group, index) => `<button class="chip ${index === 0 ? "is-active" : ""}" type="button" data-group="${group.group}">${group.group}</button>`).join("");
  qs("#group-list").innerHTML = groups.map(group => `
    <article class="card group-card" id="group-${group.group}">
      <div class="group-title">
        <h3>グループ${group.group}</h3>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>順位</th><th class="team-cell">チーム</th><th>試合</th><th>勝</th><th>分</th><th>負</th><th>得点</th><th>失点</th><th>得失点差</th><th>勝点</th>
            </tr>
          </thead>
          <tbody>
            ${sortStandings(group.standings).map(row => `
              <tr>
                <td>${row.rank}</td>
                <td class="team-cell"><span class="team-inline"><span class="group-flag">${flag(row.code)}</span>${row.team}</span></td>
                <td>${row.played}</td><td>${row.wins}</td><td>${row.draws}</td><td>${row.losses}</td>
                <td>${row.goalsFor}</td><td>${row.goalsAgainst}</td><td>${row.diff > 0 ? "+" : ""}${row.diff}</td><td>${row.points}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </article>
  `).join("");
}

function renderTournament() {
  const tabRounds = tournament.filter(round => round.key !== "third");
  qs("#round-tabs").innerHTML = tabRounds.map((round, index) => `<button class="round-chip ${index === 0 ? "is-active" : ""}" type="button" data-round="${round.key}"><strong>${round.label}</strong><span>${round.dateRange}</span></button>`).join("");
  currentTournamentRound = "r32";
  qs("#bracket-scroll").className = "bracket-scroll focus-r32";
  qs("#bracket").className = "bracket focus-r32";
  qs("#bracket").innerHTML = tournament.map((round, roundIndex) => `
    <section class="round-column round-${round.key}" data-round-column="${round.key}">
      ${round.matches.map((match, matchIndex) => `
        <article class="card bracket-match" style="--match-index: ${matchIndex};">
          <div class="bracket-match-meta"><span>${match.id}</span><span>${match.date}</span></div>
          ${match.teams.map(team => `
            <div class="bracket-slot ${team.source ? "is-source" : ""}">
              <div class="slot-team">
                ${team.code ? `<span class="slot-flag">${flag(team.code)}</span>` : `<span class="slot-source"></span>`}
                <span class="slot-copy"><span class="slot-name">${team.name}</span>${team.seed ? `<span class="slot-seed">${team.seed}</span>` : ""}</span>
              </div>
              <strong class="slot-score">${team.score}</strong>
            </div>
          `).join("")}
          <div class="match-foot"><span>${match.status}</span></div>
        </article>
      `).join("")}
    </section>
  `).join("");
}

function updateRoundTab(roundKey, behavior = "smooth") {
  qsa(".round-chip").forEach(chip => chip.classList.toggle("is-active", chip.dataset.round === roundKey));
  const activeChip = qs(`[data-round="${roundKey}"]`);
  if (activeChip) {
    qs("#round-tabs").scrollTo({ left: activeChip.offsetLeft - 16, behavior });
  }
}

function scrollLeftForElement(scrollArea, element, inset = 16) {
  const areaRect = scrollArea.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  return Math.max(0, scrollArea.scrollLeft + elementRect.left - areaRect.left - inset);
}

function scrollTournamentToRound(roundKey, behavior = "smooth") {
  const scrollArea = qs("#bracket-scroll");
  const target = qs(`[data-round-column="${roundKey}"]`);
  if (!scrollArea || !target) return;
  scrollArea.scrollTo({ left: scrollLeftForElement(scrollArea, target), behavior });
}

function setActiveRound(roundKey, options = {}) {
  const { scrollTabs = true } = options;
  const changed = currentTournamentRound !== roundKey;
  currentTournamentRound = roundKey;
  updateRoundTab(roundKey, scrollTabs ? "smooth" : "auto");
  qs("#bracket-scroll").className = `bracket-scroll focus-${roundKey}`;
  qs("#bracket").className = `bracket focus-${roundKey}`;
  return changed;
}

function rankingRow(item, index, type) {
  if (type === "players") {
    return `
      <div class="ranking-row">
        <span class="rank-number">${index + 1}</span>
        <div class="rank-main"><strong>${item[0]}</strong><span>${flag(item[1])} ${countryNames[item[1]]}</span></div>
        <span class="rank-value">${item[2]}</span>
      </div>
    `;
  }

  return `
    <div class="ranking-row">
      <span class="rank-number">${index + 1}</span>
      <div class="rank-main"><strong>${flag(item[0])} ${countryNames[item[0]]}</strong><span>${item[0]}</span></div>
      <span class="rank-value">${item[1]}</span>
    </div>
  `;
}

function rankingMetricLabel(title) {
  return title.replace("数ランキング", "").replace("カードランキング", "");
}

function normalizeSearchText(value) {
  return String(value || "").trim().toLowerCase();
}

function rankingSearchPlaceholder(type) {
  if (type === "players") return "選手名・国名で検索";
  return "国名で検索";
}

function updateRankingSearchUi() {
  const input = qs("#ranking-search-input");
  const clear = qs("#ranking-search-clear");
  if (!input || !clear) return;
  input.placeholder = rankingSearchPlaceholder(currentRankingTab);
  input.value = rankingSearchQuery;
  clear.classList.toggle("is-visible", Boolean(rankingSearchQuery));
}

function rankingRowMatches(row, type, query) {
  if (!query) return true;
  if (type === "players") {
    const code = row[1];
    return [
      row[0],
      code,
      countryNames[code]
    ].some(value => normalizeSearchText(value).includes(query));
  }

  const code = row[0];
  return [
    code,
    countryNames[code]
  ].some(value => normalizeSearchText(value).includes(query));
}

function fifaRowMatches(row, query) {
  if (!query) return true;
  return [
    row[1],
    countryNames[row[1]]
  ].some(value => normalizeSearchText(value).includes(query));
}

function renderRankingMetricTabs(type) {
  const tabs = qs("#ranking-metric-tabs");
  if (type === "fifa") {
    tabs.innerHTML = "";
    return;
  }

  tabs.innerHTML = `
    <div class="metric-tab-row" role="tablist" aria-label="ランキング項目">
      ${rankingData[type].map((card, index) => `
        <button class="metric-tab ${index === currentRankingMetricIndex ? "is-active" : ""}" type="button" data-ranking-metric="${index}">
          ${rankingMetricLabel(card.title)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderRankingCard(card, index, type) {
  const key = `${type}-${index}`;
  const query = normalizeSearchText(rankingSearchQuery);
  const filteredRows = card.rows.filter(row => rankingRowMatches(row, type, query));
  const maxRows = Math.min(filteredRows.length, 10);
  const limit = query ? maxRows : expandedRankings.has(key) ? maxRows : Math.min(maxRows, 5);
  const rowsHtml = filteredRows.length
    ? filteredRows.slice(0, limit).map((row, rowIndex) => rankingRow(row, rowIndex, type)).join("")
    : `<div class="empty-state">該当するランキングがありません</div>`;
  return `
    <article class="card ranking-card">
      <div class="ranking-head">
        <h3>${card.title}</h3>
        <span class="unit-label">${card.unit}</span>
      </div>
      ${query ? `<p class="ranking-note">${filteredRows.length}件表示</p>` : ""}
      <div class="ranking-list">${rowsHtml}</div>
      ${!query && maxRows > 5 ? `<button class="more-button" type="button" data-more="${key}">${expandedRankings.has(key) ? "閉じる" : "もっと見る"}</button>` : ""}
    </article>
  `;
}

function renderRankings() {
  const content = qs("#ranking-content");
  updateRankingSearchUi();
  renderRankingMetricTabs(currentRankingTab);
  if (currentRankingTab === "fifa") {
    const key = "fifa-0";
    const query = normalizeSearchText(rankingSearchQuery);
    const filteredRows = rankingData.fifa.filter(row => fifaRowMatches(row, query));
    const limit = query ? filteredRows.length : expandedRankings.has(key) ? filteredRows.length : 10;
    content.innerHTML = `
      <article class="card ranking-card is-fifa">
        <div class="ranking-head"><h3>FIFAランキング</h3><span class="unit-label">ポイント</span></div>
        <p class="ranking-note">2026年大会の出場国のみ表示</p>
        ${query ? `<p class="ranking-note">${filteredRows.length}件表示</p>` : ""}
        <div class="ranking-list">
          ${filteredRows.length ? filteredRows.slice(0, limit).map((row, index) => `
            <div class="ranking-row">
              <span class="rank-number">${row[0]}</span>
              <div class="rank-main"><strong>${flag(row[1])} ${countryNames[row[1]]}</strong><span>${row[1]}</span></div>
              <span class="rank-value">${typeof row[2] === "number" ? row[2].toFixed(2) : row[2]}</span>
            </div>
          `).join("") : `<div class="empty-state">該当するランキングがありません</div>`}
        </div>
        ${!query && filteredRows.length > 10 ? `<button class="more-button" type="button" data-more="${key}">${expandedRankings.has(key) ? "閉じる" : "もっと見る"}</button>` : ""}
      </article>
    `;
    return;
  }
  const card = rankingData[currentRankingTab][currentRankingMetricIndex] || rankingData[currentRankingTab][0];
  content.innerHTML = renderRankingCard(card, currentRankingMetricIndex, currentRankingTab);
}

function switchScreen(target) {
  qsa(".screen").forEach(screen => screen.classList.toggle("is-active", screen.id === target));
  qsa(".nav-tab").forEach(tab => tab.classList.toggle("is-active", tab.dataset.target === target));
  qs(`#${target}`).scrollTop = 0;
}

function setMatchListMotion(x, opacity = 1, mode = "") {
  const list = qs("#match-list");
  list.classList.toggle("is-dragging", mode === "drag");
  list.classList.toggle("is-sliding", mode === "slide");
  list.style.transform = `translateX(${x}px)`;
  list.style.opacity = opacity;
}

function clearMatchListMotion() {
  const list = qs("#match-list");
  list.classList.remove("is-dragging", "is-sliding");
  list.style.transform = "";
  list.style.opacity = "";
}

function changeMatchDate(offset, options = {}) {
  if (isMatchAnimating) return;
  const nextIndex = Math.min(matchesByDate.length - 1, Math.max(0, currentDateIndex + offset));
  if (nextIndex === currentDateIndex) {
    setMatchListMotion(0, 1, "slide");
    window.setTimeout(clearMatchListMotion, 190);
    return;
  }

  const applyDateChange = () => {
    currentDateIndex = nextIndex;
    qs("#match-calendar").hidden = true;
    qs("#calendar-toggle").setAttribute("aria-expanded", "false");
    renderMatches();
    qs("#matches").scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!options.animate) {
    applyDateChange();
    return;
  }

  isMatchAnimating = true;
  const direction = offset > 0 ? -1 : 1;
  const width = qs("#matches").clientWidth || 430;

  setMatchListMotion(direction * width, 0.35, "slide");
  window.setTimeout(() => {
    applyDateChange();
    setMatchListMotion(-direction * width, 0.35, "");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setMatchListMotion(0, 1, "slide");
        window.setTimeout(() => {
          clearMatchListMotion();
          isMatchAnimating = false;
        }, 200);
      });
    });
  }, 175);
}

function bindEvents() {
  qsa(".nav-tab").forEach(tab => tab.addEventListener("click", () => switchScreen(tab.dataset.target)));
  let tournamentScrollTimer = 0;
  let isTournamentTouching = false;

  qs("#prev-day").addEventListener("click", () => {
    changeMatchDate(-1);
  });

  qs("#next-day").addEventListener("click", () => {
    changeMatchDate(1);
  });

  let matchSwipeStartX = 0;
  let matchSwipeStartY = 0;
  let matchSwipeDragging = false;

  qs("#match-list").addEventListener("touchstart", event => {
    if (isMatchAnimating) return;
    const touch = event.touches[0];
    matchSwipeStartX = touch.clientX;
    matchSwipeStartY = touch.clientY;
    matchSwipeDragging = false;
    clearMatchListMotion();
  }, { passive: true });

  qs("#match-list").addEventListener("touchmove", event => {
    if (isMatchAnimating) return;
    const touch = event.touches[0];
    const diffX = touch.clientX - matchSwipeStartX;
    const diffY = touch.clientY - matchSwipeStartY;
    if (!matchSwipeDragging && Math.abs(diffX) > 14 && Math.abs(diffX) > Math.abs(diffY) * 1.2) {
      matchSwipeDragging = true;
    }
    if (!matchSwipeDragging) return;
    const width = qs("#matches").clientWidth || 430;
    const limitedX = Math.max(width * -0.32, Math.min(width * 0.32, diffX * 0.58));
    setMatchListMotion(limitedX, 1 - Math.min(0.18, Math.abs(limitedX) / width), "drag");
  }, { passive: true });

  qs("#match-list").addEventListener("touchend", event => {
    if (isMatchAnimating) return;
    const touch = event.changedTouches[0];
    const diffX = touch.clientX - matchSwipeStartX;
    const diffY = touch.clientY - matchSwipeStartY;
    if (!matchSwipeDragging || Math.abs(diffX) < 56 || Math.abs(diffX) < Math.abs(diffY) * 1.35) {
      setMatchListMotion(0, 1, "slide");
      window.setTimeout(clearMatchListMotion, 190);
      return;
    }
    changeMatchDate(diffX < 0 ? 1 : -1, { animate: true });
  }, { passive: true });

  qs("#calendar-toggle").addEventListener("click", () => {
    const calendar = qs("#match-calendar");
    const isHidden = calendar.hidden;
    if (isHidden) {
      calendarViewMonth = Number(matchesByDate[currentDateIndex].date.slice(5, 7));
    }
    calendar.hidden = !isHidden;
    qs("#calendar-toggle").setAttribute("aria-expanded", String(isHidden));
    renderCalendar();
  });

  document.addEventListener("click", event => {
    const dateButton = event.target.closest("[data-date-index]");
    if (dateButton) {
      currentDateIndex = Number(dateButton.dataset.dateIndex);
      qs("#match-calendar").hidden = true;
      qs("#calendar-toggle").setAttribute("aria-expanded", "false");
      renderMatches();
    }

    const monthButton = event.target.closest("[data-calendar-month]");
    if (monthButton) {
      calendarViewMonth = Math.min(7, Math.max(6, calendarViewMonth + Number(monthButton.dataset.calendarMonth)));
      renderCalendar();
    }

    const highlight = event.target.closest("[data-highlight]");
    if (highlight) {
      const [dateIndex, matchIndex] = highlight.dataset.highlight.split("-").map(Number);
      const url = matchesByDate[dateIndex].matches[matchIndex].highlightUrl;
      if (url) {
        window.open(url, "_blank", "noopener");
      } else {
        alert("ハイライト動画は準備中です");
      }
    }

    const groupChip = event.target.closest("[data-group]");
    if (groupChip) {
      qsa("#group-chips .chip").forEach(chip => chip.classList.toggle("is-active", chip === groupChip));
      groupChip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      const targetGroup = qs(`#group-${groupChip.dataset.group}`);
      if (groupChip.dataset.group === "A") {
        qs("#groups").scrollTo({ top: 0, behavior: "smooth" });
      } else if (targetGroup) {
        const groupsScreen = qs("#groups");
        const stickyHeight = qs("#group-chips").offsetHeight + 14;
        groupsScreen.scrollTo({
          top: targetGroup.offsetTop - stickyHeight,
          behavior: "smooth"
        });
      }
    }

    const roundChip = event.target.closest("[data-round]");
    if (roundChip) {
      setActiveRound(roundChip.dataset.round);
      scrollTournamentToRound(roundChip.dataset.round);
      qs("#tournament").scrollTo({ top: 0, behavior: "smooth" });
    }

    const more = event.target.closest("[data-more]");
    if (more) {
      expandedRankings.has(more.dataset.more) ? expandedRankings.delete(more.dataset.more) : expandedRankings.add(more.dataset.more);
      renderRankings();
    }

    const metricTab = event.target.closest("[data-ranking-metric]");
    if (metricTab) {
      currentRankingMetricIndex = Number(metricTab.dataset.rankingMetric);
      renderRankings();
      qs("#rankings").scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  qsa(".rank-tab").forEach(tab => tab.addEventListener("click", () => {
    currentRankingTab = tab.dataset.rankingTab;
    currentRankingMetricIndex = 0;
    rankingSearchQuery = "";
    qsa(".rank-tab").forEach(item => item.classList.toggle("is-active", item === tab));
    renderRankings();
    qs("#rankings").scrollTo({ top: 0, behavior: "smooth" });
  }));

  qs("#ranking-search-input").addEventListener("input", event => {
    rankingSearchQuery = event.target.value;
    renderRankings();
  });

  qs("#ranking-search-clear").addEventListener("click", () => {
    rankingSearchQuery = "";
    renderRankings();
    qs("#ranking-search-input").focus();
  });

  qs("#bracket-scroll").addEventListener("touchstart", () => {
    isTournamentTouching = true;
    window.clearTimeout(tournamentScrollTimer);
  }, { passive: true });

  qs("#bracket-scroll").addEventListener("touchend", () => {
    isTournamentTouching = false;
  }, { passive: true });

  qs("#bracket-scroll").addEventListener("scroll", () => {
    window.clearTimeout(tournamentScrollTimer);
    const scrollArea = qs("#bracket-scroll");
    const columns = qsa(".round-column");
    const left = scrollArea.scrollLeft;
    let active = columns[0].dataset.roundColumn;
    let nearestDistance = Infinity;
    columns.forEach(column => {
      const distance = Math.abs(scrollLeftForElement(scrollArea, column) - left);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        active = column.dataset.roundColumn;
      }
    });
    if (!qs(`[data-round="${active}"]`)) return;
    updateRoundTab(active, "auto");
    tournamentScrollTimer = window.setTimeout(() => {
      if (isTournamentTouching) return;
      const changed = setActiveRound(active, { scrollTabs: false });
      if (nearestDistance > 2) {
        scrollTournamentToRound(active, "auto");
      }
      if (changed) {
        qs("#tournament").scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 260);
  }, { passive: true });
}

async function init() {
  currentDateIndex = getInitialMatchDateIndex();
  calendarViewYear = Number(matchesByDate[currentDateIndex]?.date.slice(0, 4)) || 2026;
  calendarViewMonth = Number(matchesByDate[currentDateIndex]?.date.slice(5, 7)) || 6;
  renderMatches();
  renderGroups();
  renderTournament();
  renderRankings();
  bindEvents();

  try {
    await loadPublicSheetData();
  } catch (error) {
    console.warn("公開スプレッドシートを読み込めなかったため、固定データで表示します。", error);
    return;
  }

  currentDateIndex = getInitialMatchDateIndex();
  calendarViewYear = Number(matchesByDate[currentDateIndex]?.date.slice(0, 4)) || 2026;
  calendarViewMonth = Number(matchesByDate[currentDateIndex]?.date.slice(5, 7)) || 6;
  renderMatches();
  renderGroups();
  renderTournament();
  renderRankings();
}

init();
