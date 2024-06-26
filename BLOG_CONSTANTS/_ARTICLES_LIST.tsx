import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { DINIZ } from "./_BLOG_SETUP";

// main article list to display all atricles
/**
 * Example article object
 * 
 {
    path: '/pages/tutorial/tutorial/women-power',
    featureArticle: true,
    preview: {
        // the author object you created in _BLOG_SETUP file
        author: MAYUR,
        date: "March 03 2022",
        articleTitle: "How to setup this plog template",
        tags: "demo, blog setup",
        thumbnail: "/images/tutorials/demo-image.jpg",
        shortIntro: "These are the steps to setup your blog",
    },
    seo: {
        title: "These are the steps to setup your blog",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        keywords: "demo, blog setup",
        ogImage: "/images/tutorials/demo-image.jpg",
        twitterHandle: "@mayur_nalwala",
    }
}
 */

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/tutorial/women-power.tsx",
    featureArticle: true,
    preview: {
      author: DINIZ,
      date: "10 junho 2024",
      articleTitle: "Empoderamento das Mulheres no Século 21: Um Caminho para a Igualdade",
      tags: "empoderamento, mulheres",
      thumbnail: "/public/imp_assets/tutorials/girl-power-example.jpg",
      shortIntro: "Explorando os Progressos e Desafios na Educação, Mercado de Trabalho e Representação Política",
      category: "Empoderamento",
    },
    seo: {
      title: "Empoderamento das Mulheres no Século 21: Um Caminho para a Igualdade",
      description: "Explorando os Progressos e Desafios na Educação, Mercado de Trabalho e Representação Política",
      keywords: "empoderamento, mulheres",
      ogImage: "/public/imp_assets/tutorials/girl-power-example.jpg",
      author: DINIZ.name,
    },
  },
  {
    path: "/pages/tutorial/violencia-de-genero.tsx",
    featureArticle: true,
    preview: {
      author: DINIZ,
      date: "12 Junho 2024",
      articleTitle: "Violência de Gênero: Entendendo e Combatendo um Problema Global",
      tags: "direitos humanos, violência de gênero",
      thumbnail: "/public/imp_assets/tutorials/violencia-de-genero-1.jpg",
      shortIntro:
        "Entendendo as Causas, Impactos e Estratégias para Combater a Violência de Gêner",
      category: "Violência contra mulheres",
    },
    seo: {
      keywords:
        "violência de gênero, direitos humanos, igualdade de gênero, violência contra mulheres, violência doméstica, violência sexual, empoderamento feminino, combate à violência de gênero, políticas públicas, saúde mental",
      ogImage: "/public/imp_assets/tutorials/violencia-de-genero-1.jpg",
    },
  },
  {
    path: "/pages/tutorial/equidade-de-genero.tsx",
    featureArticle: true,
    preview: {
      author: DINIZ,
      date: "13 Junho 2024",
      articleTitle: "Equidade de Gênero: Um Caminho para a Igualdade",
      tags: "equidade de gênero, igualdade de gênero, direitos humanos, direitos das mulheres",
      thumbnail: "/public/imp_assets/tutorials/equidade-genero.png",
      shortIntro:
        "Entenda as causas, impactos e estratégias para alcançar a equidade de gênero e promover uma sociedade mais justa e igualitária.",
      category: "Direitos Humanos",
    },
    seo: {
      ogImage: "/public/imp_assets/tutorials/equidade-genero.png",
    },
  },
  
  {
    path: "/pages/tutorial/saude-reprodutiva.tsx",
    preview: {
      author: DINIZ,
      date: "20 Junho 2024",
      articleTitle: "Saúde Reprodutiva da Mulher: Importância e Cuidados Essenciais",
      tags: "saúde reprodutiva, direitos reprodutivos, saúde da mulher, cuidados reprodutivos, métodos contraceptivos, prevenção de DSTs, bem-estar feminino, ginecologia",
      thumbnail: "/public/imp_assets/tutorials/saude-mulher.png",
      shortIntro: "Este artigo aborda a saúde reprodutiva da mulher, destacando sua importância e os cuidados essenciais para garantir bem-estar e qualidade de vida.",
      category: "Saúde",
    },
    seo: {
      title: "Saúde Reprodutiva da Mulher: Importância e Cuidados Essenciais",
      description: "Este artigo aborda a saúde reprodutiva da mulher, destacando sua importância e os cuidados essenciais para garantir bem-estar e qualidade de vida.",
      keywords: "saúde reprodutiva, direitos reprodutivos, saúde da mulher, cuidados reprodutivos, métodos contraceptivos, prevenção de DSTs, bem-estar feminino, ginecologia",
      ogImage: "/public/imp_assets/tutorials/saude-mulher.png",
      author: DINIZ.name,
    },
},

  {
    path: "/pages/tutorial/saude-mental-maes.tsx",
    preview: {
      author: DINIZ,
      date: "18 Junho 2024",
      articleTitle: "Saúde Mental das Mães: Desafios e Estratégias de Apoio",
      tags: "saúde mental, maternidade, apoio materno, bem-estar emocional, saúde reprodutiva",
      thumbnail: "/public/imp_assets/tutorials/saude-maes.png",
      shortIntro:
        "Este artigo aborda os desafios enfrentados pela saúde mental das mães e discute estratégias importantes para oferecer o apoio necessário.",
      category: "Saúde",
    },
    seo: {
      keywords:
        "saúde mental materna, maternidade, apoio emocional materno, estratégias de apoio materno, bem-estar materno",
      ogImage: "/public/imp_assets/tutorials/saude-maes.png",
    },
  },
  {
    path: "/pages/tutorial/liderança-feminina.tsx",
    preview: {
      author: DINIZ,
      date: "22 Junho 2024",
      articleTitle: "Liderança Feminina: Desafios e Inspirações",
      tags: "iderança feminina, igualdade de gênero, empoderamento feminino",
      thumbnail: "/public/imp_assets/tutorials/lideranca.png",
      shortIntro:
        "Explore neste artigo a importância da liderança feminina, os desafios enfrentados pelas mulheres líderes e as inspirações que moldam um futuro mais igualitário.",
      category: "Mercado de trabalho",
    },
    seo: {
      keywords:
        "liderança feminina, igualdade de gênero, empoderamento feminino, mercado de trabalho",
      ogImage: "/public/imp_assets/tutorials/lideranca.png",
    },
  },
  {
    path: "/pages/tutorial/mulheres-na-ciencia.tsx",
    preview: {
      author: DINIZ,
      date: "25 Junho 2024",
      articleTitle: "Mulheres na Ciência: Contribuições, Desafios e Avanços",
      tags: "mulheres na ciencia, contribuições, desafios, avanços",
      thumbnail: "/public/imp_assets/tutorials/mulheres-ciencia.png",
      shortIntro: "Este artigo explora o papel crucial das mulheres na ciência, destacando suas contribuições significativas, os desafios enfrentados e os avanços alcançados ao longo dos anos.",
      category: "Ciência",
    },
    seo: {
      keywords: "mulheres na ciencia, contribuições, desafios, avanços",
      ogImage: "/public/imp_assets/tutorials/mulheres-ciencia.png",
    },
  },
  
  
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
