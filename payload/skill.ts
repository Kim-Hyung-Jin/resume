import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Node.js',
      // level: 3,
    },
    {
      title: 'SpringBoot',
    },
    {
      title: 'AWS',
    },
    {
      title: 'Kotlin',
      // level: 3,
    },
    {
      title: 'Python',
      // level: 2,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      // level: 2,
    },
    {
      title: 'ElasticSearch',
      // level: 2,
    },
    {
      title: 'Redis',
      // level: 2,
    },
    {
      title: 'Cassandra',
      // level: 1,
    },
    {
      title: 'Kafka',
      // level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Android(Kotlin)',
      // level: 2,
    },
    {
      title: 'iOS(Swift)',
      // level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'Vim',
    },
    {
      title: 'ClickUp',
    },
    {
      title: 'Git',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Kubernetes',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
