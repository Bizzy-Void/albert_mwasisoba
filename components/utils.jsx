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
} from 'react-icons/si';

const skills = [
    {
        title: 'Flutter Dev',
        link: 'https://flutter.dev/',
        icon: <DiFlutter />,
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
        title: 'Swagger',
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
    bio: "I am a software developer, and a graphics designer working productively in dynamic environments. Fluent in Javascript, Dart, Typescript and Python. Proud team worker focused on achieving project goals with an efficient and minimalistic approach.",
    hobbies: "drawing,video games,music,photography,reading",
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

const data = {
    skills,
    navRoutes,
    mediaData,
    aboutMe,
}

export default data