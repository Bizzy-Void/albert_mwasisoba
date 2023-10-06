import { DiFlutter } from 'react-icons/di';
import { 
    SiNextdotjs,
     SiReact,
    SiNodedotjs,
    SiTailwindcss,
    SiBootstrap,
    SiMysql,
    SiLinux,
    SiGit,
    SiSwagger,
    SiAdobephotoshop,
    SiAdobeillustrator,
    SiFlutter,
} from 'react-icons/si';

const baseUrl = "https://albizzy.github.io/portfolio-assets/images"

const skills = [
    
    {
        title: 'Flutter',
        link: 'https://nextjs.org/',
        icon: <SiFlutter />,
    },
    {
        title: 'NextJs',
        link: 'https://nextjs.org/',
        icon: <SiNextdotjs />,
    },
    {
        title: 'ReactJs',
        link: 'https://reactjs.org/',
        icon: <SiReact />,
    },
    {
        title: 'NodeJs',
        link: 'https://nodejs.org/en/',
        icon: <SiNodedotjs />,
    },
    {
        title: 'TailwindCss',
        link: 'https://tailwindcss.com/',
        icon: <SiTailwindcss />,
    },
    {
        title: 'Bootstrap',
        link: 'https://getbootstrap.com/',
        icon: <SiBootstrap />,
    },
    {
        title: 'mySQL',
        link: 'https://www.mysql.com/',
        icon: <SiMysql />,
    },
    {
        title: 'Linux',
        link: 'https://www.linux.org/',
        icon: <SiLinux />,
    },
    {
        title: 'Git',
        link: 'https://git-scm.com/',
        icon: <SiGit />,
    },
    {
        title: 'Swagger API',
        link: 'https://swagger.io/',
        icon: <SiSwagger />,
    },
    {
        title: 'Photoshop',
        link: 'https://www.adobe.com/products/photoshop.html',
        icon: <SiAdobephotoshop />,
    },
    {
        title: 'Illustrator',
        link: 'https://www.adobe.com/products/illustrator.html',
        icon: <SiAdobeillustrator />,
    },
]

const navRoutes = [
    {
        title: 'About',
        path: '/about',
    },
    {
        title: 'Works',
        path: '/works',
    },
    {
        title: 'Skills',
        path: '/skills',
    },
    {
        title: 'Contact',
        path: '/contact',
    }
]

const aboutMe = {
    bio: "Software developer and Graphics designer working productively in dynamic environments. Fluent in Javascript and Dart. Focused on achieving project goals with an efficient and minimalistic approach.",
    hobbies: "drawing,photography,music,video games",
};

const mediaData = {
    email: "albertmwasisoba@gmail.com",
    medias: [
        {
            title: "Github",
            link: "https://github.com/albizzy",
        },
        {
            title: "Behance",
            link: "https://www.behance.net/albertmwasisoba",
        },
        {
            title: "Twitter",
            link: "https://twitter.com/iambizzy19"
        }
    ]
}

const works = [
    {
        title: "Subcode Africa",
        banners: [
            {
                url: baseUrl + "/subcode/cover.png",
                alt: "subcode cover"
            },
        ],
        url: "http://subcode.africa/",
        details: "Official website for Subcode Africa. A company based on providing digital solutions using design and code. Created with [HTML5](https://en.wikipedia.org/wiki/HTML5#:~:text=Article%20Talk,Web%20Consortium%20(W3C)%20recommendation.),[TailwindCSS](https://tailwindcss.com/) and VanillaJS",
    },
    {
        title: "This website",
        banners: [
            {
                url: baseUrl + "/portfolio/cover1.png",
                alt: "a.me cover"
            },
            {
                url: baseUrl + "/portfolio/first.png",
                alt: "a.me website banner"
            }
        ],
        url: "https://www.albertmwasisoba.me/",
        details: "This is my personal portfolio website. Created with [NextJS](https://nextjs.org/)",
    },
    {
        title: "Travel Experience",
        banners: [
            {
                url: baseUrl + "/travelExperience/cover.png",
                alt: "a.me cover"
            },
            {
                url: baseUrl + "/travelExperience/first.png",
                alt: "a.me website banner"
            }
        ],
        url: "https://travelexperience-two.vercel.app/home",
        details: "Official website for *The Travel Experience*. A company which focus on providing tourist with services when visiting national parks in Tanzania. Created with [ReactJS](https://reactjs.org/)",
    },
    {
        title: "Graphic designs",
        banners: [
            {
                url: baseUrl + "/graphicsDesign/cover.png",
                alt: "graphic designs cover"
            },
            {
                url: baseUrl + "/graphicsDesign/first.png",
                alt: "logo banner"
            },
            {
                url: baseUrl + "/graphicsDesign/second.png",
                alt: "posters banner"
            },
        ],
        url: null,
        details: "Collection of some graphic designs I have done for various clients for the past few years.",
    },
]

const data = {
    skills,
    navRoutes,
    mediaData,
    aboutMe,
    works,
}

export default data