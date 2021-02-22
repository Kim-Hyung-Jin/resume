import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = "HyungJin Kim Resume";
const description = 'This is a simple web resume.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'photo.jpg',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'hyungjin',
        lastName: 'kim',
        username: 'jin',
        gender: 'male',
      },
    },
  },
};
