import HOME from "../public/images/home.jpg"
import ABOUT from "../public/images/about.jpg"
import PORTFOLIO from "../public/images/portfolio.jpg"
import PATH2 from "../public/images/path2.jpg"
import PATH3 from "../public/images/path3.jpg"
import SERVICE from "../public/images/architecture.jpg"
import SERVICE2 from "../public/images/interior.jpg"
import SERVICE3 from "../public/images/construction.jpg"
import PROJECT from "../public/images/project1.jpg"
import PROJECT2 from "../public/images/project2.jpg"
import PROJECT3 from "../public/images/project3.jpg"
import PROJECT4 from "../public/images/architecture.jpg"
import PROJECT5 from "../public/images/project5.jpg"
import PROJECT6 from "../public/images/project6.jpg"
import PROJECT7 from "../public/images/about.jpg"
import PROJECT8 from "../public/images/construction.jpg"
import PROJECT9 from "../public/images/solarhouse.jpg"
import CEO from "../public/images/ceo.jpg"
import WOMAN from "../public/images/woman.jpg"

export const swiperSettings = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    300: {
      slidesPerView: 1
    },

    400: {
      slidesPerView: 1.3
    },

    530: {
      slidesPerView: 1.6
    },
    630: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    760: {
      slidesPerView: 2.2,
      spaceBetween: 10
    },

    830: {
      slidesPerView: 2.5,
      spaceBetween: 10
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1130: {
      slidesPerView: 3.5,
      spaceBetween: 10
    },
    1280: {
      slidesPerView: 4
    },

    1400: {
      slidesPerView: 4.3
    },

  }
}

export const swiper2Settings = {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    390: {
      slidesPerView: 1.5
    },

    420: {
      slidesPerView: 1.5
    },

    530: {
      slidesPerView: 2
    },
    650: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },

    760: {
      slidesPerView: 2.7,
      spaceBetween: 10
    },
    860: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    1000: {
      slidesPerView: 3.5,
      spaceBetween: 10
    },
    1130: {
      slidesPerView: 4,
      spaceBetween: 10
    },
    1280: {
      slidesPerView: 4.5,
      spaceBetween: 10
    }
  }
}

export const sidebarcontent = [
  {
    id: 1,
    name: "HOME",
    href: "/",
    image: HOME
  },
  {
    id: 2,
    name: "PORTFOLIO",
    href: "/portfolio",
    image: PORTFOLIO
  },
  {
    id: 3,
    name: "ABOUT",
    href: "/about",
    image: ABOUT
  }
]

export const numbersData = [
  {
    id: 1,
    name: "PROJECTS COMPLETED",
    number: "20",
    text: "Cabric's projects encompass meticulously crafted 3D architectural plans for both bungalow and duplex structures that reflect a harmonious blend of aesthetics, functionality and sustainability."
  },
  {
    id: 2,
    name: "YEARS OF EXPERIENCE",
    number: "05",
    text: "Founded by Tarh Brice in 2018, CABRIC ENGINEERING is led by Tarh Brice, Forghab Christopher and Celine Dione."
  },
  {
    id: 3,
    name: "AWARDS AND RECOGNITIONS",
    number: "10",
    text: "These accolades are a testament to our dedication while practicing architecture, as we document and discuss our reflections on architecture, culture and arts through publications, academic seminars and presentations."
  }

]

export const pathRightData = [
  {
    id: 1,
    name: "MISSION",
    image: PATH2,
    text: "Our commitment to eco-friendly practices is at the heart of our mission.",
    delay: "0.7s"
  }, 

  {
    id: 2,
    name: "VALUES",
    image: PATH3,
    text: "Central to our values is our unwavering commitment to environmental responsibility.",
    delay: "1.3s"
  }
]

export const serviceCardData = [
  {
    id: 1,
    subtitle: "PUBLIC & RESIDENTIAL",
    title: "ARCHITECTURE",
    image: SERVICE
  },

  {
    id: 2,
    subtitle: "RESIDENTIAL",
    title: "INTERIOR",
    image: SERVICE2
  },

  {
    id: 3,
    subtitle: "RESIDENTIAL",
    title: "CONSTRUCTION",
    image: SERVICE3
  }
] 

export const portfolioContentData = [
  {
    id: 1,
    name: "THE URBAN OASIS",
    category: "RESIDENTIAL",
    location: "Mvoumagomi, Cameroon",
    year: 2022,
    image: PROJECT,
    image2: PROJECT2,
    image3: PROJECT3
  },
  {
    id: 2,
    name: "THE CAYAN MESEUM",
    category: "PUBLIC",
    location: "Douala, Cameroon",
    year: 2020,
    image: PROJECT4,
    image2: PROJECT5,
    image3: PROJECT6
  },
  {
    id: 3,
    name: "SOLO'S ACCOMODATION",
    category: "RESIDENTIAL",
    location: "Los Angeles, US",
    year: 2023,
    image: PROJECT7,
    image2: PROJECT8,
    image3: PROJECT9
  },
  {
    id: 4,
    name: "THE SWISS RESIDENCE",
    category: "RESIDENTIAL",
    location: "Djamena, Tchad",
    year: 2022,
    image: PROJECT,
    image2: PROJECT2,
    image3: PROJECT3
  },
  {
    id: 5,
    name: "Zanzibar Playcs",
    category: "PUBLIC",
    location: "Zanzibar, Tanzania",
    year: 2020,
    image: PROJECT4,
    image2: PROJECT5,
    image3: PROJECT6
  },
]

export const teamData = [
  {
    id: 1,
    name: "TARH BRICE",
    image: CEO,
    post: "Founder & CEO"
  },
  {
    id: 2,
    name: "TARH BRICE",
    image: CEO,
    post: "Founder & CEO"
  },
  {
    id: 3,
    name: "TARH BRICE",
    image: CEO,
    post: "Founder & CEO"
  },
  {
    id: 4,
    name: "TARH BRICE",
    image: CEO,
    post: "Founder & CEO"
  },
  {
    id: 5,
    name: "TARH BRICE",
    image: CEO,
    post: "Founder & CEO"
  },
  {
    id: 6,
    name: "TARH BRICE",
    image: CEO,
    post: "Founder & CEO"
  },

]

export const AwardsData = [
  {
    id: 1,
    award: "The Tierra Firma Trophy",
    giver: "International Soceity Of Sustainable Architecture",
    year: 2023,
    image: SERVICE,
  },
  {
    id: 2,
    award: "The Tierra Firma Trophy",
    giver: "International Soceity Of Sustainable Architecture",
    year: 2020,
    image: SERVICE,
  },
  {
    id: 3,
    award: "The Tierra Firma Trophy",
    giver: "International Soceity Of Sustainable Architecture",
    year: 2021,
    image: SERVICE,
  },
  {
    id: 4,
    award: "The Tierra Firma Trophy",
    giver: "International Soceity Of Sustainable Architecture",
    year: 2019,
    image: SERVICE,
  },
  {
    id: 5,
    award: "The Tierra Firma Trophy",
    giver: "International Soceity Of Sustainable Architecture",
    year: 2022,
    image: SERVICE,
  },
  {
    id: 6,
    award: "The Tierra Firma Trophy",
    giver: "International Soceity Of Sustainable Architecture",
    year: 2023,
    image: SERVICE,
  }
]

export const testimonialsData = [
  {
    id: 1,
    name: "CHE SARAH",
    image: WOMAN,
    project: PROJECT,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  },
  {
    id: 2,
    name: "CHE SARAH",
    image: CEO,
    project: PROJECT2,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  },
  {
    id: 3,
    name: "CHE SARAH",
    image: WOMAN,
    project: PROJECT3,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  },
  {
    id: 4,
    name: "CHE SARAH",
    image: CEO,
    project: PROJECT4,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  },
  {
    id: 5,
    name: "CHE SARAH",
    image: WOMAN,
    project: PROJECT5,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  },
  {
    id: 6,
    name: "CHE SARAH",
    image: CEO,
    project: PROJECT6,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  },
  {
    id: 7,
    name: "CHE SARAH",
    image: WOMAN,
    project: PROJECT,
    testimonial: "Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision. Working with Cabric Engineering, was a delightful experience. Their team took the time to understand my vision."
  }
]

export const portfolioGalleryData = [
  {
    id: 1,
    name: "INNS INNOVATION HUB",
    image: PROJECT,
    width: 350,
    height: 450,
    year: 2022
  },
  {
    id: 2,
    name: "INNS INNOVATION HUB",
    image: PROJECT2,
    width: 500,
    height: 400,
    year: 2023
  },
  {
    id: 3,
    name: "INNS INNOVATION HUB",
    image: PROJECT3,
    width: 300,
    height: 250,
    year: 2020
  },
  {
    id: 4,
    name: "INNS INNOVATION HUB",
    image: PROJECT4,
    width: 450,
    height: 350,
    year: 2023
  },
  {
    id: 5,
    name: "INNS INNOVATION HUB",
    image: PROJECT5,
    width: 470,
    height: 500,
    year: 2019
  },
  {
    id: 6,
    name: "INNS INNOVATION HUB",
    image: PROJECT6,
    width: 1500,
    height: 500,
    year: 2022
  },
  {
    id: 7,
    name: "INNS INNOVATION HUB",
    image: PROJECT7,
    width: 350,
    height: 500,
    year: 2023
  },
  {
    id: 8,
    name: "INNS INNOVATION HUB",
    image: PROJECT8,
    width: 465,
    height: 250,
    year: 2023
  },
  {
    id: 9,
    name: "INNS INNOVATION HUB",
    image: PROJECT9,
    width: 275,
    height: 500,
    year: 2021
  },
  {
    id: 10,
    name: "INNS INNOVATION HUB",
    image: PROJECT,
    width: 450,
    height: 350,
    year: 2022
  },

]

export const AboutAboutData = [
  {
    name: "OUR GOAL",
    text: "At CaBric Engineering, our foremost goal is to revolutionalise the world of architecture and construction by embraxing a holistic approach that marries sustainability, aesthetics and resilience. At CaBric Engineering, our foremost goal is to revolutionalise the world of architecture and construction by embraxing a holistic approach that marries."
  },
  {
    name: "OUR VALUES",
    text: "At CaBric Engineering, our foremost goal is to revolutionalise the world of architecture and construction by embraxing a holistic approach that marries sustainability, aesthetics and resilience. At CaBric Engineering, our foremost goal is to revolutionalise the world of architecture and construction by embraxing a holistic approach that marries."
  },
  {
    name: "OUR MISSION",
    text: "At CaBric Engineering, our foremost goal is to revolutionalise the world of architecture and construction by embraxing a holistic approach that marries sustainability, aesthetics and resilience. At CaBric Engineering, our foremost goal is to revolutionalise the world of architecture and construction by embraxing a holistic approach that marries."
  }

]

export const MoreProjectsData = [
  {
    name: "ORDEUS MESEUM",
    image: PROJECT,
    link: "/"
  },
  {
    name: "ORDEUS MESEUM",
    image: PROJECT2,
    link: "/"
  },
  {
    name: "ORDEUS MESEUM",
    image: PROJECT3,
    link: "/"
  },
  {
    name: "ORDEUS MESEUM",
    image: PROJECT4,
    link: "/"
  },
  {
    name: "ORDEUS MESEUM",
    image: PROJECT5,
    link: "/"
  },
  {
    name: "ORDEUS MESEUM",
    image: PROJECT6,
    link: "/"
  },
  {
    name: "ORDEUS MESEUM",
    image: PROJECT7,
    link: "/"
  },
]

export const svgData = [
  {
    name: "Bedroom",
    width: 116,
    height: 20,
    path: "M1 1L17.5 19H115.5"
  },
  {
    name: "Living Room",
    width: 102,
    height: 36,
    path: "M1 35L32 0.5H101.5"
  },
  {
    name: "Dining Room",
    width: 86,
    height: 2,
    path: "M0 1H86"
  },
  {
    name: "Laundry",
    width: 48,
    height: 29,
    path: "M47.5 28L1 1"
  },
  {
    name: "Kitchen",
    width: 124,
    height: 29,
    path: "M123.5 1L94 28H0"
  }
]