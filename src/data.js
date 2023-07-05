import tour1 from './assets/images/tour-1.jpeg'
import tour2 from './assets/images/tour-2.jpeg'
import tour3 from './assets/images/tour-3.jpeg'
import tour4 from './assets/images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  {
    id: 1,
    href: 'https:facebook.com',
    target: '_blank',
    icon: 'fab fa-facebook',
  },
  {
    id: 2,
    href: 'https:twitter.com',
    icon: 'fab fa-twitter',
  },
  {
    id: 3,
    href: 'https:squarespace.com',
    icon: 'fab fa-squarespace',
  },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    days: 6,
    price: 'from $2100',
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    days: 11,
    price: 'from $1400',
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'hong kong',
    days: 8,
    price: 'from $5000',
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    days: 20,
    price: 'from $3300',
  },
]

export const copyright = [
  {
    id: 1,
    title: 'copyright © Backroads travel tours company',
    subTitle: 'all rights reserved.',
  },
]
