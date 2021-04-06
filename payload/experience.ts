import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'TelCuOn',
      position: 'FullStack Developer',
      startedAt: '2019-08',
      descriptions: [
        '레거시 시스템 개선',
        '- MSA 전환',
        '- 로그 시스템 리뉴얼(기존 로그 트래킹이 어려운 점을 개선)',
        '- SQL 위주의 로직들을 ORM으로 전환 (MyBatis -> JPA)',
        'DDD 아키텍쳐 기반의 교통카드 서버 아키텍쳐 설계 및 개발',
        '- TDD 방법론을 적용한 프로젝트 리딩',
        '- 오픈 뱅킹을 활용한 교통카드 충전 및 잔액 환불 자동화 시스템 개발',
        '- 신규 교통카드 서버 개발',
        'NFC 기반의 플라스틱 교통카드 SDK 개발(iOS/Android)',
        '- 앱에서 플라스틱 교통카드 충전 및 내역 조회, 잔액조회 등의 기능 개발',
        'BBIK 모바일 앱(교통카드 앱) 개발 및 유지보수',
        '- 국내 최초 iOS 교통카드 앱',
        '- 아키텍쳐 리팩터링 (클린 아키텍쳐를 기반으로 한 지속적인 개선 시도중)',
        '레일 플러스 앱 개발',
        '- 코레일 앱을 연동한 기차권 구매 등 연동 기능 개발',
        '- 교통 카드 충전을 위한 제로페이 결제 시스템 연동 개발',
        '사내 업무 프로세스 및 협업 시스템 개선',
        '- 개발자 협업툴 ClickUp 도입 적극 추진(기존의 협업 트러블 해결)',
        '- 개발자&디자이너 협업툴 Zeplin 도입 적극 추진',
      ],
      skillKeywords: ['SpringBoot', 'Kotlin', 'Swift', 'MySQL'],
    },
    {
      title: '아이알링크',
      position: 'DevOps',
      startedAt: '2019-01',
      endedAt: '2019-08',
      descriptions: [
        'Node.js 기반 모바일-웹 녹취 솔루션 설계 및 개발',
        '- Socket.io를 이용한 실시간 연락처, 문자메시지, 통화내역 웹-모바일 간 데이터 동기화',
        '- Aws S3 SignedUrl을 이용한 음성 파일 업로드&다운로드 시스템 구축',
        '- AWS를 이용한 신규 솔루션 인프라 구축',
        '- Redis의 pub-sub 모델 기반 다중 인스턴스간 sticky-session 구현',
      ],
      skillKeywords: ['Node.js', 'MySQL', 'Redis', 'AWS'],
    },
    {
      title: '위즈디엔에스코리아',
      position: 'FullStack Developer',
      startedAt: '2018-07',
      endedAt: '2019-01',
      descriptions: [
        '빅데이터 기반 개인정보 보안 이상 행위 감지 솔루션 ',
        '- 위험 행위 탐지(ElasticSearch) 및 대응 시스템 개발',
        '- HMAC 기반 데이터 무결성 검증',
        '- 솔루션 맞춤 ElasticSearch 플러그인 개발',
        '- 위험 행위 탐지 페이지 개발 (Vue.js)',
        '기존 솔루션 성능 개선',
        '- PostgreSQL 쿼리 튜닝 & 리뉴얼(기존 대비 퍼포먼스 대폭 향상 - 인덱싱, 서브쿼리 제거 등)',
        '영업 상담 및 계약 진행 관리 페이지 제작 (Vue.js)',
      ],
      skillKeywords: ['Kotlin', 'SpringBoot', 'PostgreSQL', 'ElasticSearch', 'Vue.js'],
    },

    {
      title: '가우미디어',
      position: 'FullStack Developer',
      startedAt: '2017-05',
      endedAt: '2018-07',
      descriptions: [
        '바이럴 마케팅 업무 관련 직원 일감 자동 분배 및 모니터링 시스템 구축',
        '바이럴 마케팅 일부 업무 자동화 전환 -> 기존 대비 리소스 2/3 감소',
        '포스기 데이터 기반 마케팅 메시지 전송 프로그램 리뉴얼',
        '- 디비 리모델링 후 마이그레이션 (기존 성능 문제)',
        '- 고객 포스기에서 작동하는 구조 -> 고객 요청후 서버에서 작동하는 구조 (고객 이탈률 대폭 감소)',
        '- 포스기가 아닌 모바일에서 메세지 전송 요청 기능 개발',
        '기존 국내 호스팅 업체 -> AWS 마이그레이션',
      ],
      skillKeywords: ['Python', 'Flask', 'C#', 'MySQL', 'AWS'],
    },
  ],
};

export default experience;
