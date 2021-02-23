import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/photo.jpg';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'HyungJin Kim',
    small: '(김형진)',
  },
  contact: [
    {
      title: 'jeenz93@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: '010-2691-1111',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com',
      link: 'https://github.com/Kim-Hyung-Jin?tab=repositories',
      icon: faGithub,
    },
    // {
    //   link: 'https://www.linkedin.com/in/hyung-jin-kim-428a71181/',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '부재중 시, 문자나 메일로 연락부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
