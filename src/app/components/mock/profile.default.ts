import { Profile } from "./profile.interface";

export const DEFAULT_PROFILE: Profile = {
    username: 'Default',
    profilePicture: 'https://cdn.midjourney.com/44b81a1d-faec-40df-9048-29425ba28b6c/0_3.png',
    bannerImage: 'https://cdn.midjourney.com/caf96bba-da6d-4916-9191-324a26e93adf/0_0.png',
    imageGallery: [
      { id: 1, url: 'https://cdn.midjourney.com/113456d5-8164-43b3-8c25-2ddb19900ada/0_2.png', tags: ['fantasy'] },
      { id: 2, url: 'https://cdn.midjourney.com/8ef04ba5-e6b4-472e-a50b-c61795d500b8/0_3.png', tags: ['girl'] },
    ],
    description: 'Default Description',
  };
  