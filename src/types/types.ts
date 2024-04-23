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

export type UrlProps = {
  url: string;
};

export interface ICheckBoxProps {
  setSectionRef?: (ref: HTMLElement) => void; // 타입 지정
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

// export type projectDetailProps = {
//   id: number;
//   name: string;
//   subTitle: string;
//   overview: string;
//   period: string;
//   team: string;
//   stack: string[];
//   featinfo: string[];
//   contribs: {
//     title: string;
//     description: string;
//   }[];
//   imgUrl: string[];
// };
