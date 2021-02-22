import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'BBIK iOS App',
      startedAt: '2019-10',
      where: 'TelCuOn',
      descriptions: [
        { content: '대한민국 최초의 iOS기반 앱 교통카드', weight: 'MEDIUM' },
        {
          content: '교통 카드 모듈 개발',
          weight: 'MEDIUM',
        },
        // {
        //   content: '교통카드 관련 서버 개발',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     { content: '설계, 개발, 유지보수' },
        //   ],
        // },
      ],
    },
    {
      title: 'BBIK Android App',
      startedAt: '2019-12',
      endedAt: '2020-03',
      where: 'TelCuOn',
      descriptions: [
        { content: '앱 기반 교통카드', weight: 'MEDIUM' },
        { content: '설계, 개발', weight: 'MEDIUM' },
        {
          content: '교통 카드 모듈 개발',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '교통카드 서버',
      startedAt: '2020-08',
      where: 'TelCuOn',
      descriptions: [{ content: '설계, 개발, 유지보수', weight: 'MEDIUM' }],
    },
  ],
};

export default project;
