import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '다양한 스타트업에서 백엔드/프론트엔드 개발자로 경험을 쌓았습니다. Kotlin, Node.js, Python, Swift 등 다양한 언어를 통해 서비스를 기획부터 운영한 경험이 있습니다. 유연한 변화와 확장에 용이한 아키텍처를 만들기 위해 노력 중입니다. 새로운 기술 도입, 설계를 할때 항상 트레이드 오프를 생각하고 주어진 서비스에서 최선의 선택을 하려합니다. 좋은 소프트웨어를 만들기 위해서는 개발적인 부분도 중요하지만 커뮤니케이션을 통해 고객의 니즈를 파악하는 것이 중요하다고 생각합니다.',
    '최근에는 DDD, BDD, 클린아키텍처에 관심을 가지고 개인 프로젝트를 진행 중입니다.',
  ],
  sign: 'HyungJin Kim',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: '2022-02-22',
};

export default introduce;
