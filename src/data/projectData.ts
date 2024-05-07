import { projectDataProps } from '../types/types';

export const ProjectData: projectDataProps[] = [
  {
    id: 1,
    thumbImg: '/image/project/ieun/Ieun.webp',
    link: { deploy: 'https://ieun.store/', github: 'https://github.com/yejinzz/Ieun' },
    title: 'Ieun',
    subTitle: '업사이클링 중개 서비스',
    team: '팀 프로젝트',
    period: '2023.06.28 - 2023.07.24',
    stack: ['React', 'Redux-Toolkit', 'Styled-Components', 'Axios'],
    overview: `利 이로울 이 / 隱 숨을 은\n‘이은’은 사용하지 않는 자재를 펀딩 받아 새로운 용도로 활용하거나, 구매 또는 판매를 돕는 업사이클링 중개 서비스입니다.\n‘숨어있는 것들로 세상을 이롭게’ , ‘일반 사용자와 업사이클러의 연결고리’ 라는 두 가지 의미를 담고 있습니다.`,
    contribs: [
      {
        title: '회원가입, 로그인, 마이 페이지 기능 및 UI 담당.',
        details: [
          `사용자 유형별 회원가입 구현.`,
          {
            subDetail: `사용자 유형별 마이페이지 제공.`,
            subDesc: [
              `일반 사용자: 프로필 수정 및 나의 펀딩 내역, 나의 주문 내역 제공.`,
              `업사이클러: 프로필 수정 및 기본 제공 내역을 포함한 나의 펀딩 등록 내역, 나의 스토어 등록 내역 제공.`,
            ],
          },
        ],
      },
      {
        title: '재사용 가능한 Image Upload 및 Preview 구현',
        details: [
          `input type="file” button 커스텀.`,
          `\`FileReader API\`를 활용한 이미지 Preview 구현.`,
          `\`FormData API\`를 사용한 이미지 데이터 전송.`,
        ],
      },
      {
        title: '효율적인 form을 제어를 위한 custom hooks 개발',
        details: [
          `initialValue을 인자로 받아 Input State를 관리하는 \`useInputs\` 개발.`,
          `Form별 유효성 검사 로직을 모듈화 하여 특정 필드에 대한 유효성 검사 및 오류 메세지 처리하는 \`useErrHandler\` 개발.`,
        ],
      },

      {
        title: '성능 최적화',

        details: [
          {
            subDetail: `React Lazy, Suspese를 통한 코드 스플리팅, 이미지 최적화 등 작업 수행. `,
            subDesc: [`Lighthouse Performance 점수 \`64점 → 97점\``],
          },
        ],
      },
      {
        title: '사용자 경험 개선',
        details: [
          {
            subDetail: `반응형 웹 구현`,
            subDesc: [
              `프로젝트 전반적인 반응형 웹을 구현`,
              `\`Swiper.js\` 라이브러리를 활용하여 모바일 화면의 메인 배너 스와이프 구현.`,
            ],
          },
          {
            subDetail: `Loding Spinner 애니메이션 도입을 통한 UX 개선`,
            subDesc: [
              `회원가입을 위한 이메일 인증 프로세스에서 로딩 지연 상태를 명확하게 보여주기 위해 로딩 스피너 제작.`,
            ],
          },
        ],
      },
      {
        title: '접근 제한 페이지 처리',
        details: [
          `URL 직접 접근시 404 Page 처리.`,
          `React-Router-Dom의 Outlet 컴포넌트 활용하여 비로그인/로그인 유저의 접근 제한이 필요한 모든 페이지에 Redirect 적용.`,
        ],
      },
    ],
    troubleShooting: [
      {
        title: `[ Redux ‘non-serializable value’ 에러 해결 ]`,
        details: [
          {
            label: `문제 발생`,
            desc: `마이페이지 상세 내역 데이터를 바인딩하는 과정에서 Redux Store 상태에 직렬화할 수 없는 값이 포함되어 있다는 에러가 발생하였습니다.`,
          },
          {
            label: `원인`,
            desc: `상세 내역 데이터를 가공하기 위해 initialState 객체에 카테고리 별로 매핑함수를 저장해주었는데, 함수는 직렬화가 불가능한 값이기 때문에 발생한 에러였습니다.`,
          },
          {
            label: `해결`,
            desc: `직렬화 불가능한 매핑함수를 별도의 \`detailsInfo\` 데이터 객체에 정의하고, 활성화된 카테고리와 타이틀만 전역상태로 관리하도록 initialState를 수정하여 에러에 대응하였습니다.`,
          },
          {
            label: `결과`,
            desc: `실제 에러와 관계없이 기능 동작에는 문제가 없었지만,  안정성을 위해 직렬화 불가능한 값 저장은 지양해야한다는 리덕스의 특징을 새롭게 이해할 수 있었습니다. 또한 상세 내역 데이터 가공이 커스텀 훅 내에서 이루어도록 하여 복잡한 구조를 개선할 수 있었습니다.`,
          },
        ],
        referencesCode: [
          `\`\`\`js
// detailsInfo.js
  export const detailsInfo = {
    funding: {
      title: "나의 펀딩 내역",
      category: "funding",
      tableHeader: ["날짜", "펀딩명", "수량"],
      mapFunction: mapFundingDetails,
      detail: [],
    },
    orders: {
      title: "나의 주문 내역",
      category: "orders",
      tableHeader: ["날짜", "제품명", "수량", "금액"],
      mapFunction: mapOrderDetails,
      detail: [],
    },
    upcyclings: {
      title: "나의 펀딩 등록 내역",
      category: "upcyclings",
      tableHeader: ["날짜", "펀딩명", "펀딩기한"],
      mapFunction: mapUpcyclingDetails,
      detail: [],
    },
    sells: {
      title: "나의 제품 등록 내역",
      category: "sells",
      tableHeader: ["날짜", "제품명", "금액"],
      mapFunction: mapSellsDetails,
      detail: [],
    },
  };
  \`\`\``,
          `\`\`\`jsx
// useGetUserDetails.jsx
  import { useCallback, useState } from "react";
  import { detailsInfo } from "../datas/detailsInfo";

  const useGetUserDetails = () => {
    const [details, setDetails] = useState(detailsInfo);

    const getUserDetails = useCallback((category, data) => {
      setDetails((prev) => ({
        ...prev,
        [category]: {
          ...prev[category],
          detail: [...prev[category].mapFunction(data)],
        },
      }));
    }, []);

    return { details, getUserDetails };
  };

  export default useGetUserDetails;
  \`\`\``,
        ],
      },
    ],
    screen: [
      { imgUrl: '/image/project/ieun/main.webp', screenDesc: '메인 페이지' },
      { imgUrl: '/image/project/ieun/login.webp', screenDesc: '로그인 페이지' },
      { imgUrl: '/image/project/ieun/signup.webp', screenDesc: '회원가입 페이지' },
      { imgUrl: '/image/project/ieun/mypage.webp', screenDesc: '마이 페이지' },
      { imgUrl: '/image/project/ieun/edit-modal.webp', screenDesc: '마이 페이지 - 프로필 모달' },
      { imgUrl: '/image/project/ieun/funding.webp', screenDesc: '펀딩 페이지' },
      { imgUrl: '/image/project/ieun/store.webp', screenDesc: '스토어 페이지' },
      { imgUrl: '/image/project/ieun/create-funding.webp', screenDesc: '펀딩 글 생성 페이지' },
      { imgUrl: '/image/project/ieun/create-store.webp', screenDesc: '스토어 글 생성 페이지' },
    ],
  },
  {
    id: 2,
    thumbImg: '/image/project/portfolio/Portfolio.webp',
    link: {
      deploy: 'https://yejin-portfolio.vercel.app/',
      github: 'https://github.com/yejinzz/triP',
    },
    title: "Yejin's Portfolio",
    subTitle: '포트폴리오 웹사이트',
    period: '2024.01.22 - 진행중',
    stack: ['React', 'TypeScript', 'Vite', 'Styled-Components', 'Tailwind CSS', 'Gsap'],
    overview: `개인 포트폴리오 웹사이트 입니다. ‘GSAP ScrollTrigger’를 사용하여 웹 모션을 구현하였으며, TypeScript, Tailwind CSS 등 새로운 기술을 학습할 수 있는 좋은 경험이 되었습니다.`,
    team: '개인 프로젝트',
    contribs: [
      {
        title: '스크롤 이동 메뉴 구현',
        details: [
          {
            subDetail: `useRef를 활용한 useMoveScroll Custom Hook 구현.`,
            subDesc: [`특정 DOM 요소로 이동.`, `스크롤 위치를 감지하여 DOM에 해당하는 탭 메뉴 활성화.`],
          },
        ],
      },
      {
        title: 'GSAP ScrollTrigger 애니메이션 구현',
        details: [
          `타켓팅 요소를 배열 형태로 관리하는 \`useRefArray\` Custom Hook을 제작하여 Gsap 애니메이션 동작 제어 구현`,
        ],
      },
      {
        title: '성능 최적화',
        details: [
          {
            subDetail: `React Profiler 활용하여 불필요한 리렌더링 개선.`,
            subDesc: [`컴포넌트 렌더링 속도 \`25.5ms → 5.3ms\`로 단축`],
          },
          {
            subDetail: `Font Preload, 이미지 Webp 변환 및 Lazy Loading을 적용하여 초기 로딩 성능 최적화. `,
            subDesc: [`FCP \`5.1ms → 0.4ms\` / LCP \`6.7ms → 1.1ms\``],
          },
        ],
      },
      {
        title: 'Tailwind CSS + Styled-Components 적용',
        details: [
          `Tailwind CSS의 단점 보완을 위해 Styled-Components를 함께 사용 \`twin.macro\``,
          `Tailwind CSS를 도입하여 모바일 우선 접근 방식으로 반응형 작업.`,
        ],
      },
    ],
    troubleShooting: [
      {
        title: `[ 렌더링 최적화 ]`,
        details: [
          {
            label: `문제 발생`,
            desc: `프로젝트 상세 모달을 열면 ProjectItem 컴포넌트의 애니메이션이 여러 번 실행되는 문제가 발생하였습니다.`,
          },
          {
            label: `원인`,
            desc: `React Profiler를 활용하여 컴포넌트 렌더링 성능 측정한 결과, 모달 상태가 변경됨에 따라 모든 하위 컴포넌트가 리렌더링되어 useArrayRef 훅이 계속 호출되고 있었던 것이 원인이었습니다.`,
          },
          {
            label: `해결`,
            desc: `\`useCallback\` 훅과 \`react.memo\`를 사용하여 렌더링 최적화를 진행하였습니다. 메모이제이션 과정을 통해 불필요한 함수 생성을 방지하고, 상태가 변경되어도 하위 컴포넌트의 리렌더링이 발생하지 않도록 개선하였습니다.`,
          },
          {
            label: `결과`,
            desc: `Project 컴포넌트의 렌더링 속도를 \`25.5ms에서 5.3ms\`까지 단축하였고, projectItem의 리렌더링을 막아 해당 문제를 해결할 수 있었습니다.`,
          },
        ],
        referencesImg: [`/image/project/portfolio/reference1.webp`, `/image/project/portfolio/reference2.webp`],
      },
    ],
    screen: [
      { imgUrl: '/image/project/portfolio/home.webp', screenDesc: 'Home' },
      { imgUrl: '/image/project/portfolio/about.webp', screenDesc: 'About' },
      { imgUrl: '/image/project/portfolio/project.webp', screenDesc: 'Project' },
      { imgUrl: '/image/project/portfolio/project-modal.webp', screenDesc: 'Project - 상세 모달' },
      { imgUrl: '/image/project/portfolio/education.webp', screenDesc: 'Education' },
      { imgUrl: '/image/project/portfolio/contact.webp', screenDesc: 'Contact' },
    ],
  },
  {
    id: 3,
    thumbImg: '/image/project/triP/triP.webp',
    link: {
      deploy: 'https://web-trip-client-85phb42blv09cyua.sel5.cloudtype.app/',
      github: 'https://github.com/yejinzz/triP',
    },
    title: 'triP',
    subTitle: '국내 여행 일정 관리 서비스',
    period: '2024.03.05 - 2024.04.11',
    stack: ['Vite', 'React', 'Redux-Toolkit', 'Styled-Components', 'Axios', 'Node.js', 'Express', 'Mongo DB'],
    // detail
    overview: `여행 일정을 계획 / 관리할 수 있는 국내 여행 플래너입니다.\n ‘Kakao Map API’와 ‘Tour API’를 활용하였으며, \n 프론트엔드 개발부터 백엔드 서버 구축까지 개인으로 진행한 프로젝트 입니다.`,
    team: '개인 프로젝트',
    contribs: [
      {
        title: `여행 일정 생성 및 관리 기능 및 UI 구현`,
        details: [
          `여행지 별 장소 검색 기능`,
          `일자별 일정 추가 기능`,
          `\`react-beautiful-dnd\`를 이용한 일정 편집 DND 기능`,
          `지도상 마커 강조 및 장소 정보 Overlay`,
          `Polyline을 통한 일자별 여행 경로 표시 기능`,
        ],
      },
      {
        title: 'React-hook-form 도입',
        details: [`\`React-hook-form\`을 사용하여 유효성 검사와 더불어 복잡한 입력 폼을 단순하게 관리.`],
      },
      {
        title: 'JWT 기반 인증 구현',
        details: [
          `\`Axios Interceptor\`을 활용한 인증 Token 관리`,
          `Access Token 만료시 Refresh Token을 활용하여 자동 로그인 / 로그아웃 구현`,
          `서버단 Access Token 유효성 검사 미들웨어 구현`,
        ],
      },
      {
        title: 'Node JS 기반 서버 구축',
        details: [`mongoDB, mongoose를 이용한 데이터베이스 관리`, `RESTful API 설계`],
      },
    ],
    troubleShooting: [
      {
        title: `[ Axios interceptors을 활용한 인증 토큰 관리 ]`,
        details: [
          {
            label: `문제 발생`,
            desc: `새로고침 후에 이루어지는 모든 네트워크 요청에서 Access Token 재발급이 이루어지는 문제가 발생하였습니다.`,
          },
          {
            label: `원인`,
            desc: `새로고침 시 Axios Default Header 설정이 초기화되면서 요청 헤더에 Access Token이 담기지 않아 발생하는 문제였습니다.`,
          },
          {
            label: `해결`,
            desc: `Axios interceptors를 활용하여 해결하였습니다. Response interceptor를 추가하여 새로고침 후 재발급 된 토큰이 응답 헤더에 담겨올 경우,  Default Header를 재설정하도록 하였습니다. `,
          },
          {
            label: `결과`,
            desc: `Axios 인터셉터를 활용하여 인증 토큰을 관리가 용이해졌으며, 불필요한 토큰 재발급 문제를 해결할 수 있었습니다.`,
          },
        ],
      },
    ],
    screen: [
      { imgUrl: '/image/project/triP/main.webp', screenDesc: '메인 페이지' },
      { imgUrl: '/image/project/triP/login.webp', screenDesc: '로그인 페이지' },
      { imgUrl: '/image/project/triP/signup.webp', screenDesc: '회원가입 페이지' },
      { imgUrl: '/image/project/triP/planPage.webp', screenDesc: '일정 페이지' },
      { imgUrl: '/image/project/triP/myPage.webp', screenDesc: '마이 페이지' },
      { imgUrl: '/image/project/triP/editProfile.webp', screenDesc: '마이 페이지 - 프로필 수정' },
    ],
  },
];
