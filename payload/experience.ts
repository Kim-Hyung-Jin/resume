import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'TelCuOn',
      position: 'FullStack Developer',
      startedAt: '2019-08',
      descriptions: [
        'iOS 교통카드 앱, 모듈 개발',
        'Android 교통카드 앱, 모듈 개발',
        '교통카드 유틸리티 서버 개발',
      ],
      skillKeywords: ['Swift', 'Kotlin', 'SpringBoot', 'MySQL'],
    },
    {
      title: '아이알링크',
      position: 'DevOps',
      startedAt: '2019-01',
      endedAt: '2019-08',
      descriptions: ['Cellering Pro 버전 서버 개발', 'Cellering Pro AWS Infra'],
      skillKeywords: ['Node.js', 'MySQL', 'Redis', 'AWS'],
    },
    {
      title: '위즈디엔에스코리아',
      position: 'FullStack Developer',
      startedAt: '2018-07',
      endedAt: '2019-01',
      descriptions: [
        'Black Suite 7 Major Update 행동기반 추적 기능 담당',
        'PostgreSQL 쿼리 전체적으로 튜닝',
        'ISEC 2019 컨퍼런스 웹 설문조사 제작 및 관리 페이지',
      ],
      skillKeywords: ['Kotlin', 'SpringBoot', 'MySQL', 'ElasticSearch', 'Vue.js'],
    },

    {
      title: '가우미디어',
      position: 'FullStack Developer',
      startedAt: '2017-05',
      endedAt: '2018-07',
      descriptions: ['바이럴 마케팅 회사 내부 시스템 자동화', '바이럴 마케팅 고객 관리용 앱 제작'],
      skillKeywords: ['Python', 'Flask', 'Kotlin', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
