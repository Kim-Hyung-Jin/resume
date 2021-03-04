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
        '국내 최초 iOS 교통카드 앱 개발(BBIK, 레일플러스)',
        '교통카드 정산 서버 개발중...',
      ],
      skillKeywords: ['Swift', 'Kotlin', 'SpringBoot', 'MySQL'],
    },
    {
      title: '아이알링크',
      position: 'DevOps',
      startedAt: '2019-01',
      endedAt: '2019-08',
      descriptions: [
        'Node.js Socket 기반 모바일 녹취 솔루션 설계 및 개발',
        'Redis를 이용한 stickey-session 구현',
      ],
      skillKeywords: ['Node.js', 'MySQL', 'Redis', 'AWS'],
    },
    {
      title: '위즈디엔에스코리아',
      position: 'FullStack Developer',
      startedAt: '2018-07',
      endedAt: '2019-01',
      descriptions: [
        '빅데이터 기반(ElasticSearch)으로 사용자 이상 행위 감지 및 대응 시스템 개발',
        'PostgreSQL 쿼리 튜닝 & 리뉴얼(기존 대비 퍼포먼스 대폭 향상 - 인덱싱, 서브쿼리 제거 등)',
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
        '카페/블로그 바이럴 마케팅 자동화(기존 리소스 투입 절반으로 감소)',
        '포스기 데이터 기반의 대용량 마케팅 메세지 전송 기능 개발',
      ],
      skillKeywords: ['Python', 'Flask', 'C#', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
