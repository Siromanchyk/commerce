import type { IEmployeer } from "./IEmployeer"

export const employees: IEmployeer[] = [
  {
    fullName: 'Tom Cruise',
    position: 'Founder & Chairman',
    socials: [
      {
        icon: 'pi pi-twitter',
        url: 'https://x.com/',
      },
      {
        icon: 'pi pi-instagram',
        url: 'https://www.instagram.com/',
      },
      {
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/',
      }
    ],
    img: new URL('./assets/images/employeers/cruise.png', import.meta.url).href, 
  },
  {
    fullName: 'Emma Watson',
    position: 'Managing Director',
    socials: [
      {
        icon: 'pi pi-twitter',
        url: 'https://x.com/',
      },
      {
        icon: 'pi pi-instagram',
        url: 'https://www.instagram.com/',
      },
      {
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/',
      }
    ],
    img: new URL('./assets/images/employeers/wotson.png', import.meta.url).href,
  },
  {
    fullName: 'Will Smith',
    position: 'Product Designer',
    socials: [
      {
        icon: 'pi pi-twitter',
        url: 'https://x.com/',
      },
      {
        icon: 'pi pi-instagram',
        url: 'https://www.instagram.com/',
      },
      {
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/',
      }
    ],
    img: new URL('./assets/images/employeers/smith.png', import.meta.url).href,
  },
  {
    fullName: 'Emma Watson # 2',
    position: 'Managing Director',
    socials: [
      {
        icon: 'pi pi-twitter',
        url: 'https://x.com/',
      },
      {
        icon: 'pi pi-instagram',
        url: 'https://www.instagram.com/',
      },
      {
        icon: 'pi pi-linkedin',
        url: 'https://www.linkedin.com/',
      }
    ],
    img: new URL('./assets/images/employeers/wotson.png', import.meta.url).href,
  },
]