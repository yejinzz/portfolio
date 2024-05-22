export interface ChildrenProps {
  children: React.ReactNode;
}

// export type DetailItem = string | { subDetail: string; subDesc: string[] };

type DetailT = {
  title?: string;
  details?: (string | { subDetail: string; subDesc: string[] })[];
};

type TroubleT = {
  title: string;
  details: { label: string; desc: string }[];
  referencesCode?: string[];
  referencesImg?: string[];
};

export interface projectDataProps {
  id: number;
  thumbImg: string;
  link: { deploy: string; github: string };
  title: string;
  subTitle: string;
  period: string;
  stack: string[];
  overview: string;
  team: string;
  contribs: DetailT[];
  troubleShooting?: TroubleT[];
  screen: { imgUrl: string; screenDesc: string }[];
}

export interface TabsProps {
  targetRef: React.RefObject<HTMLElement>;
  onMoveToTarget: () => void;
  targetName: string;

  // isTarget: boolean;
}

export type SetRefType<T extends HTMLElement> = React.RefObject<T> | ((instance: T | null) => void);
