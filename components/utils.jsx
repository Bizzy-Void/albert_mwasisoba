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
        title: "This website",
        banners: [
            {
                url: baseUrl + "/portfolio/cover.png",
                alt: "a.me cover"
            },
            {
                url: baseUrl + "/portfolio/first.png",
                alt: "a.me website banner"
            }
        ],
        details: "This personal portfolio website. Created with [NextJS](https://nextjs.org/)",
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
        details: "Official website for *The Travel Experience*. A company which focus on providing tourist with services when visiting national parks in Tanzania. Created with [ReactJS](https://reactjs.org/)",
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