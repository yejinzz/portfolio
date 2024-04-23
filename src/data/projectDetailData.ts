export const projectDetailData = [
  {
    id: 1,
    name: 'Ieun',
    subTitle: '업사이클링 중개 서비스',
    overview:
      '利 이로울 이 / 隱 숨을 은\n‘이은’은 사용하지 않는 자재를 펀딩 받아 새로운 용도로 활용하거나, 판매할 수 있도록 도와주는 업사이클링 중개 서비스입니다.\n‘숨어있는 것들로 세상을 이롭게’ , ‘펀딩 이용자와 업사이클러의 연결고리’ 라는 두 가지 의미를 담고 있습니다.',
    period: '2023.06.28 - 2023.07.24',
    team: '팀 프로젝트 ( 프론트엔드 3명 , 백엔드 3명 ) ',
    stack: ['React', 'Redux-Toolkit', 'styled-components', 'Axios', 'MUI'],
    featinfo: ['로그인, 회원가입, 유저 페이지 담당', '공통 컴포넌트 작업', '반응형 웹 구현', '웹 표준 / 접근성 고려'],
    parts: [
      {
        title: '회원가입, 로그인, 유저 페이지 담당',
        description:
          '회원가입, 로그인, 로그아웃, 유저 정보, 인증 토큰 관리 등 회원 전반적인 기능을 개발하였습니다. \n이메일 인증 프로세스에서 발생하는 로딩 지연 상태를 사용자에게 명확하게 보여주기 위해 로딩 스피너 애니메이션을 도입하였습니다. 이를 통해 사용자가 느낄 수 있는 불편함을 최소화함으로써 사용자 경험을 개선하였습니다.',
      },
      {
        title: '반응형 웹 구현',
        description:
          '다양한 디바이스 사이즈를 고려하여 프로젝트 전반적인 반응형 웹을 구현했습니다.\n 메인페이지 배너에 ScrollTrigger을 활용하여 가로 스크롤 효과를 적용하였지만, 모바일 사용자에게 불편함을 초래한다는 판단하에 \n 모바일 화면에서는 스와이프 기능을 도입하여 반응형을 구현했습니다.',
      },
      {
        title: 'Redux-Toolkit 으로 마이그레이션',
        description:
          '기존 Prop Drilling을 방지하고자 하는 목적으로 Context API를 사용해 전역상태를 관리했었는데, 프로젝트 규모가 커짐에 따라 Context API 사용은 부적절하다고 판단하였습니다. 이후 Redux-Toolkit으로 마이그레이션을 진행하였고, 불필요한 리렌더링을 방지하여 성능 이슈를 해결하는 이점을 얻었습니다. ',
      },
      {
        title: 'Custom Hooks를 활용해 비즈니스 로직과 재사용 로직 분리',
        description:
          '유효성 검증 로직들을 객체로 분리하고, `useErrHandler` 커스텀 훅을 사용해 해당 필드 입력값에 대한 오류메세지를 처리하도록 구현하여 재사용성을 높였습니다.',
      },
      {
        title: '리팩토링을 통해 코드개선',
        description:
          '대규모 리팩토링을 진행하며 기존에 중복되는 코드들을 고차함수를 활용해 개선하는 등 코드의 가독성을 높히고 유지보수성을 향상시켰습니다.',
      },
      {
        title: 'Axios의 instance 기능을 활용한 네트워크 요청 모듈화',
        description:
          '회원가입/로그인 제작 시 Axios의 instance 기능을 활용해 네트워크 요청 모듈화하고 공용 헤더나 주소를 관리하였습니다.',
      },
      {
        title: '웹 표준 / 접근성 고려 및 퍼블리싱',
        description:
          '웹 표준을 준수하며 꼼꼼한 시멘틱 마크업을 합니다.\n\n또한 요구사항에 따라 slick slider와 같은 외부 라이브러리를 활용해 동적인 화면을 보여줬습니다. 간단한 토글 버튼과 같은 작업에는 JQuery를 사용해 구현했습니다.',
      },
    ],
    imgUrl: [
      '/image/project/ieun/Ieun.png',
      '/image/project/ieun/main.png',
      '/image/project/ieun/login.png',
      '/image/project/ieun/signup.png',
      '/image/project/ieun/mypage.png',
      '/image/project/ieun/funding.png',
      '/image/project/ieun/store.png',
      '/image/project/ieun/create-funding.png',
      '/image/project/ieun/create-store.png',
      '/image/project/ieun/edit-modal.png',
    ],
  },
  {
    id: 2,
    name: "Yejin's Portfolio",
    subTitle: '포트폴리오 웹사이트',
    overview:
      '利 이로울 이 / 隱 숨을 은\n‘이은’은 사용하지 않는 자재를 펀딩 받아 새로운 용도로 활용하거나, 판매할 수 있도록 도와주는 업사이클링 중개 서비스입니다.\n‘숨어있는 것들로 세상을 이롭게’ , ‘펀딩 이용자와 업사이클러의 연결고리’ 라는 두 가지 의미를 담고 있습니다.',
    period: '2023.06.28 - 2023.07.24',
    team: '팀 프로젝트 ( 프론트엔드 3명 , 백엔드 3명 ) ',
    stack: ['React', 'Redux-Toolkit', 'Styled-Components', 'Tailwind CSS', 'Gsap'],
    featinfo: ['로그인, 회원가입, 유저 페이지 담당', '공통 컴포넌트 작업', '반응형 웹 구현', '웹 표준 / 접근성 고려'],
    parts: [
      {
        title: '회원가입, 로그인, 유저 페이지 담당',
        description:
          '회원가입, 로그인, 로그아웃, 유저 정보, 인증 토큰 관리 등 회원 전반적인 기능을 개발하였습니다. \n이메일 인증 프로세스에서 발생하는 로딩 지연 상태를 사용자에게 명확하게 보여주기 위해 로딩 스피너 애니메이션을 도입하였습니다. 이를 통해 사용자가 느낄 수 있는 불편함을 최소화함으로써 사용자 경험을 개선하였습니다.',
      },
      {
        title: '반응형 웹 구현',
        description:
          '다양한 디바이스 사이즈를 고려하여 프로젝트 전반적인 반응형 웹을 구현했습니다.\n 메인페이지 배너에 ScrollTrigger을 활용하여 가로 스크롤 효과를 적용하였지만, 모바일 사용자에게 불편함을 초래한다는 판단하에 \n 모바일 화면에서는 스와이프 기능을 도입하여 반응형을 구현했습니다.',
      },
      {
        title: 'Redux-Toolkit 으로 마이그레이션',
        description:
          '기존 Prop Drilling을 방지하고자 하는 목적으로 Context API를 사용해 전역상태를 관리했었는데, 프로젝트 규모가 커짐에 따라 Context API 사용은 부적절하다고 판단하였습니다. 이후 Redux-Toolkit으로 마이그레이션을 진행하였고, 불필요한 리렌더링을 방지하여 성능 이슈를 해결하는 이점을 얻었습니다. ',
      },
      {
        title: 'Custom Hooks를 활용해 비즈니스 로직과 재사용 로직 분리',
        description:
          '유효성 검증 로직들을 객체로 분리하고, `useErrHandler` 커스텀 훅을 사용해 해당 필드 입력값에 대한 오류메세지를 처리하도록 구현하여 재사용성을 높였습니다.',
      },
      {
        title: '리팩토링을 통해 코드개선',
        description:
          '대규모 리팩토링을 진행하며 기존에 중복되는 코드들을 고차함수를 활용해 개선하는 등 코드의 가독성을 높히고 유지보수성을 향상시켰습니다.',
      },
      {
        title: 'Axios의 instance 기능을 활용한 네트워크 요청 모듈화',
        description:
          '회원가입/로그인 제작 시 Axios의 instance 기능을 활용해 네트워크 요청 모듈화하고 공용 헤더나 주소를 관리하였습니다.',
      },
      {
        title: '웹 표준 / 접근성 고려 및 퍼블리싱',
        description:
          '웹 표준을 준수하며 꼼꼼한 시멘틱 마크업을 합니다.\n\n또한 요구사항에 따라 slick slider와 같은 외부 라이브러리를 활용해 동적인 화면을 보여줬습니다. 간단한 토글 버튼과 같은 작업에는 JQuery를 사용해 구현했습니다.',
      },
    ],
    imgUrl: [
      '/image/project/ieun/Ieun.png',
      '/image/project/ieun/main.png',
      '/image/project/ieun/login.png',
      '/image/project/ieun/signup.png',
      '/image/project/ieun/mypage.png',
      '/image/project/ieun/funding.png',
      '/image/project/ieun/store.png',
      '/image/project/ieun/create-funding.png',
      '/image/project/ieun/create-store.png',
      '/image/project/ieun/edit-modal.png',
    ],
  },
];

// imgUrl: ['/image/project/portfolio/main.png'],
