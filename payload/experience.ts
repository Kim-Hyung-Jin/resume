import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'TelCuOn',
      position: 'FullStack Developer',
      startedAt: '2019-08',
      descriptions: [
        'NFC 기반 플라스틱 교통카드 모듈 개발(iOS/Android)',
        '국내 최초 iOS 교통카드 앱 개발',
        '교통카드 유틸리티 서버 개발',
      ],
      skillKeywords: ['Swift', 'Kotlin', 'SpringBoot', 'MySQL'],
    },
    {
      title: '아이알링크',
      position: 'DevOps',
      startedAt: '2019-01',
      endedAt: '2019-08',
      descriptions: [
        'Node.js Socket.io 기반 모바일 녹취 솔루션',
        'Redis를 이용한 stickey-session 구현'
      ],
      skillKeywords: ['Node.js', 'MySQL', 'Redis', 'AWS'],
    },
    {
      title: '위즈디엔에스코리아',
      position: 'FullStack Developer',
      startedAt: '2018-07',
      endedAt: '2019-01',
      descriptions: [
        '빅데이터 기반으로 사용자 이상 행위 감지 시스템 개발 (Black Suite 7 행동기반 추적)',
        'PostgreSQL 쿼리 튜닝 (기존 대비 퍼포먼스 대폭 향상 - 인덱싱, 서브쿼리 제거 등)',
        'ISEC 2019 컨퍼런스 웹 설문조사 제작 및 관리 페이지 (Vue.js 기반)',
      ],
      skillKeywords: ['Kotlin', 'SpringBoot', 'PostgreSQL', 'ElasticSearch', 'Vue.js'],
    },

    {
      title: '가우미디어',
      position: 'FullStack Developer',
      startedAt: '2017-05',
      endedAt: '2018-07',
      descriptions: [
        '바이럴 마케팅 자동화(기존 리소스 투입 절반으로 감소)',
        '포스기 데이터 기반의 마케팅 메세지 전송 기능 개발'
      ],
      skillKeywords: ['Python', 'Flask', 'Kotlin', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
