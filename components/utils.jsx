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
        title: "Varsitymart",
        banners: [
            {
                url: baseUrl + "/varsitymart/cover.png",
                alt: "Varsitymart cover"
            },
        ],
        url: "https://www.varsitymart.co/home",
        details: "Official website for Varsitymart. An innovative e-commerce platform designed to revolutionize online shopping in Tanzania. This project, a collaborative effort with my friend, focuses on creating a seamless and efficient user experience while providing unique features tailored to the local market. Created with [Vite React](https://vitejs.dev/), and [TailwindCSS](https://tailwindcss.com/)",
    },
    {
        title: "Drips4Geeks",
        banners: [
            {
                url: baseUrl + "/drips4Geeks/cover.png",
                alt: "Drips4Geeks cover"
            },
        ],
        url: "https://www.drips4geeks.store/",
        details: "Official website for Drips4Geeks Store. This is an online store where every geek can find their style. Created with [NextJS](https://nextjs.org/docs), [Shadcn UI](https://ui.shadcn.com/docs), and [TailwindCSS](https://tailwindcss.com/)",
    },
    // {
    //     title: "Subcode Africa",
    //     banners: [
    //         {
    //             url: baseUrl + "/subcode/cover.png",
    //             alt: "subcode cover"
    //         },
    //     ],
    //     url: "https://www.subcode.africa/",
    //     details: "Official website for Subcode Africa. A company based on providing digital solutions using design and code. Created with [NextJS](https://nextjs.org/docs) and [TailwindCSS](https://tailwindcss.com/)",
    // },
    // {
    //     title: "Tanzania Internet Summit",
    //     banners: [
    //         {
    //             url: baseUrl + "/tanzaniaInternetSummit/cover.jpg",
    //             alt: "tanzania internet summit cover"
    //         },
    //     ],
    //     url: "https://summit.eadevs.com/",
    //     details: "This is the official website for Tanzania Internet Summit. An event organized by Tanzania Internet Service Providers (TISPA). Created with [NextJS](https://nextjs.org/docs) and [TailwindCSS](https://tailwindcss.com/)",
    // },
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
        title: "All Wheels Experience",
        banners: [
            {
                url: baseUrl + "/travelExperience/cover.png",
                alt: "all wheels experience cover"
            },
            {
                url: baseUrl + "/travelExperience/first.png",
                alt: "all wheels experience website banner"
            }
        ],
        url: "https://allwheelsexperience.com",
        details: "Official website for *All Wheels Experience*. A company which focus on providing tourist with services when visiting national parks in Tanzania. Created with [ReactJS](https://reactjs.org/)",
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