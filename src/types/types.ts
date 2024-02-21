export interface PlcardProps {
  playListId: number;
  memberId: number;
  createMember: string;
  title: string;
  coverImg: string;
  tags: [];
  likeCount: number;
  body: string;
  createdAt: string;
  modifiedAt: string;
}

export interface ChildrenProps {
  children: React.ReactNode;
}

export interface TitleAnimationProps {
  children: string;
  className: string;
}

export type UrlProps = {
  url: string;
};

export interface ICheckBoxProps {
  setSectionRef?: (ref: HTMLElement) => void; // 타입 지정
}

export type projectDataProps = {
  id: number;
  name: string;
  subTitle: string;
  period: string;
  stack: string[];

  overview: string;
  team: string;
  featinfo: string[];
  parts: {
    title: string;
    description: string;
  }[];
  imgUrl: string[];
};

export type projectDetailProps = {
  id: number;
  name: string;
  subTitle: string;
  overview: string;
  period: string;
  team: string;
  stack: string[];
  featinfo: string[];
  parts: {
    title: string;
    description: string;
  }[];
  imgUrl: string[];
};
