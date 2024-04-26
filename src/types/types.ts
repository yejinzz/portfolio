export interface ChildrenProps {
  children: React.ReactNode;
}

export interface projectDataProps {
  id: number;
  thumbImg: string;
  link: { deploy: string; github: string };
  name: string;
  subTitle: string;
  period: string;
  stack: string[];
  overview: string;
  team: string;
  featinfo: string[];
  contribs: string[];
  screen: { imgUrl: string; screenDesc: string }[];
}

export interface TabsProps {
  targetRef: React.RefObject<HTMLElement>;
  onMoveToTarget: () => void;
  targetName: string;
  // isTarget: boolean;
}

export type SetRefType<T extends HTMLElement> = React.RefObject<T> | ((instance: T | null) => void);
