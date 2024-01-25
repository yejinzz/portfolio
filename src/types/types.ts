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
