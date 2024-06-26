/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const GenderViolence = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Violência de Gênero: Entendendo e Combatendo um Problema Global
                </Text>
                <Image className="my-5" src="/public/imp_assets/violencia-de-genero.jpg" alt="Violência de Gênero" />
                <Text subtitle className="mt-10">
                    Introdução
                </Text>
                <Text p>
                    A violência de gênero é uma violação grave dos direitos humanos e uma das formas mais prevalentes de violência no mundo. Esta violência afeta desproporcionalmente mulheres e meninas, mas também pode atingir homens e pessoas de diversas identidades de gênero. Ela pode assumir muitas formas, incluindo violência física, sexual, psicológica e econômica.
                </Text>
                <Seperator />
                <Text subtitle className="mt-10">
                    Tipos de Violência de Gênero
                </Text>
                <Text p>
                    A violência de gênero se manifesta de várias maneiras. Aqui estão alguns dos tipos mais comuns:
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li><b>Violência Doméstica:</b> Inclui abuso físico, emocional, psicológico e econômico dentro de casa.</li>
                    <li><b>Violência Sexual:</b> Qualquer ato sexual forçado ou não consensual.</li>
                    <li><b>Assédio Sexual:</b> Comentários, gestos ou contatos físicos de natureza sexual que são indesejados.</li>
                    <li><b>Mutilação Genital Feminina:</b> Práticas tradicionais que envolvem a remoção parcial ou total dos órgãos genitais externos femininos.</li>
                    <li><b>Casamento Infantil:</b> O casamento de crianças menores de 18 anos, frequentemente contra a sua vontade.</li>
                    <li><b>Violência Econômica:</b> Controle das finanças ou recursos econômicos de uma pessoa, limitando sua independência.</li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    Causas da Violência de Gênero
                </Text>
                <Text p>
                    A violência de gênero é profundamente enraizada em desigualdades históricas e estruturais entre os gêneros. As causas incluem:
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li><b>Normas Sociais e Culturais:</b> Crenças e expectativas culturais que perpetuam a desigualdade de gênero.</li>
                    <li><b>Desigualdade de Poder:</b> Desigualdade de poder entre homens e mulheres nas esferas privada e pública.</li>
                    <li><b>Discriminação Econômica:</b> Desigualdade no acesso a recursos econômicos e oportunidades.</li>
                    <li><b>Falta de Educação:</b> Baixos níveis de educação e conscientização sobre direitos e igualdade.</li>
                    <li><b>Impunidade:</b> Falta de responsabilização e punição adequada para os perpetradores de violência.</li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    Impactos da Violência de Gênero
                </Text>
                <Text p>
                    Os impactos da violência de gênero são profundos e de longo alcance, afetando indivíduos, famílias, comunidades e sociedades inteiras. Alguns dos impactos incluem:
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li><b>Saúde Física e Mental:</b> Lesões, problemas de saúde mental, doenças sexualmente transmissíveis e outras condições de saúde.</li>
                    <li><b>Impactos Econômicos:</b> Perda de produtividade, custos médicos e legais, e redução da capacidade de trabalho.</li>
                    <li><b>Desintegração Familiar:</b> Efeitos negativos sobre crianças e famílias, incluindo ciclos intergeracionais de violência.</li>
                    <li><b>Exclusão Social:</b> Isolamento e estigmatização das vítimas.</li>
                    <li><b>Obstáculos ao Desenvolvimento:</b> Limitação do potencial de desenvolvimento econômico e social de comunidades e nações.</li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    Combatendo a Violência de Gênero
                </Text>
                <Text p>
                    Abordar a violência de gênero requer uma abordagem multifacetada, envolvendo indivíduos, comunidades, governos e organizações internacionais. Algumas estratégias eficazes incluem:
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li><b>Educação e Conscientização:</b> Programas de educação que promovam a igualdade de gênero e desafiem normas prejudiciais.</li>
                    <li><b>Empoderamento das Vítimas:</b> Apoio às vítimas através de serviços de saúde, apoio psicológico e legal.</li>
                    <li><b>Legislação e Políticas:</b> Implementação e reforço de leis que protejam contra a violência de gênero e punam os perpetradores.</li>
                    <li><b>Engajamento Comunitário:</b> Envolvimento de líderes comunitários e homens na luta contra a violência de gênero.</li>
                    <li><b>Investimento em Serviços de Apoio:</b> Recursos adequados para abrigos, linhas de apoio e serviços de saúde.</li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    Conclusão
                </Text>
                <Text p>
                    A violência de gênero é um problema global urgente que exige ação imediata e sustentada. Somente através da colaboração e do compromisso de todos os setores da sociedade podemos erradicar essa forma de violência e criar um mundo mais justo e seguro para todos.
                </Text>
            </div>
        </PageLayout>
    )
}

export default GenderViolence;
