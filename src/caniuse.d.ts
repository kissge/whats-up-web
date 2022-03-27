declare interface CaniuseData {
  eras: Eras;
  agents: Agents;
  statuses: Statuses;
  cats: Cats;
  updated: number;
  data: Data;
}

declare interface Eras {
  [eraId: string]: string;
}

declare interface Agents {
  [agentId: string]: Agent;
}

declare interface UsageGlobal {
  [version: string]: number;
}

declare interface Agent {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: UsageGlobal;
  versions: (string | null)[];
  prefix_exceptions?: PrefixExceptions;
}

declare interface PrefixExceptions {
  [version: string]: string;
}

declare interface Statuses {
  rec: string;
  pr: string;
  cr: string;
  wd: string;
  ls: string;
  other: string;
  unoff: string;
}

declare interface Cats {
  CSS: string[];
  HTML5: string[];
  JS: string[];
  'JS API': string[];
  Other: string[];
  Security: string[];
  SVG: string[];
}

declare interface Data {
  [featureId: string]: Feature;
}

declare interface Feature {
  title: string;
  description: string;
  spec: string;
  status: keyof Statuses;
  links: LinksEntity[];
  categories: string[];
  stats: Stats;
  notes: string;
  notes_by_num: NotesByNum;
  usage_perc_y: number;
  usage_perc_a: number;
  ucprefix: boolean;
  parent: string;
  keywords: string;
  ie_id: string;
  chrome_id: string;
  firefox_id: string;
  webkit_id: string;
}

declare interface LinksEntity {
  url: string;
  title: string;
}

declare interface Stats {
  [agentId: string]: {
    [version: string]: StatsString;
  };
}

declare interface NotesByNum {
  [num: Num]: string;
}

declare type StatsString = string;
declare type Num = `${number}`;
