import * as DiIcons from 'react-icons/di';
import * as SiIcons from 'react-icons/si';

const skills = [
    {
        title: 'Flutter Dev',
        link: 'https://flutter.dev/',
        icon: <DiIcons.DiFlutter />,
    },
    {
        title: 'NextJs',
        link: 'https://nextjs.org/',
        icon: <SiIcons.SiNextDotJs />,
    },
    {
        title: 'ReactJs',
        link: 'https://reactjs.org/',
        icon: <SiIcons.SiReact />,
    },
    {
        title: 'NodeJs',
        link: 'https://nodejs.org/en/',
        icon: <SiIcons.SiNodeDotJs />,
    },
    {
        title: 'TailwindCss',
        link: 'https://tailwindcss.com/',
        icon: <SiIcons.SiTailwindcss />,
    },
    {
        title: 'Bootstrap',
        link: 'https://getbootstrap.com/',
        icon: <SiIcons.SiBootstrap />,
    },
    {
        title: 'mySQL',
        link: 'https://www.mysql.com/',
        icon: <SiIcons.SiMysql />,
    },
    {
        title: 'Linux',
        link: 'https://www.linux.org/',
        icon: <SiIcons.SiLinux />,
    },
    {
        title: 'Git',
        link: 'https://git-scm.com/',
        icon: <SiIcons.SiGit />,
    },
    {
        title: 'Swagger',
        link: 'https://swagger.io/',
        icon: <SiIcons.SiSwagger />,
    },
    {
        title: 'Photoshop',
        link: 'https://www.adobe.com/products/photoshop.html',
        icon: <SiIcons.SiAdobephotoshop />,
    },
    {
        title: 'Illustrator',
        link: 'https://www.adobe.com/products/illustrator.html',
        icon: <SiIcons.SiAdobeillustrator />,
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
    mediaData
}

export default data