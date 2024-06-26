import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub} from "react-icons/ai";

export const DINIZ: IAuthor = {
    name: "Ana Luiza",
    designation: "Estudante",
    bio: "Estudante de Engenharia de Computação na PUC Minas",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/analuizads'
        },
    ]
}



export const WEBSITE_NAME: string = 'For Her';
export const WEBSITE_URL: string = '/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // logo: {
    //     type: LogoType.IMAGE,
    //     logo: '/images/logo.png',
    //     logoLight: '/images/logo-light.png'
    // },
    logo: {
        type: LogoType.TEXT,
        logo: 'ForHer',
    },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/analuizads/ForHer',
            newTab: true
        },

    ],
    // sideNavLinks are the links which appear when open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/analuizads/ForHer',
            newTab: true
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "For Her",
    description: "O For Her é um site que tem como objetivo promover a igualdade de gênero e o empoderamento das mulheres. O projeto será desenvolvido como parte de um trabalho da disciplina de Engenharia de Software.",
    keywords: "Blog, blog setup, typescript, nextjs typescript, react js blog template, responsive blog template",
    url: WEBSITE_URL,
    author: `${DINIZ.name}`,
    ogImage: '/public/images/og-image.jpg'
}
