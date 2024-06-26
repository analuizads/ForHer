/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const EquidadeDeGenero = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-5 md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Equidade de Gênero: Um Caminho para a Igualdade
                </Text>
                <hr />
                <Text subtitle className="mt-10">
                    Entendendo a Equidade de Gênero
                </Text>
                <Text p>
                    A equidade de gênero é um princípio fundamental que visa garantir que todas as pessoas, independentemente de seu gênero, tenham as mesmas oportunidades, direitos e condições para desenvolver plenamente suas capacidades e tomar decisões livremente. A equidade de gênero não é apenas uma questão de justiça social, mas também uma necessidade para o desenvolvimento sustentável e o bem-estar de todas as sociedades.
                </Text>
                <Seperator />
                <Text subtitle className="mt-10">
                    Por que a Equidade de Gênero é Importante?
                </Text>
                <Text p>
                    A equidade de gênero é crucial para a construção de uma sociedade mais justa e inclusiva. Ela contribui para a redução da pobreza, promove o crescimento econômico, melhora os resultados de saúde e educação, e fortalece a coesão social. Além disso, a equidade de gênero é essencial para a realização dos direitos humanos e a eliminação de todas as formas de discriminação e violência contra as mulheres e meninas.
                </Text>
                <Image className="my-5" src="/public/imp_assets/articles/equidade-de-genero.png" alt="Equidade de Gênero" caption="Promover a equidade de gênero é fundamental para o desenvolvimento sustentável." size={ImageSize.DEFAULT} />
                <Seperator />
                <Text subtitle className="mt-10">
                    Desafios para Alcançar a Equidade de Gênero
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li>
                        <b>Discriminação de Gênero:</b> Muitas mulheres enfrentam discriminação em diversas áreas, como no local de trabalho, na educação e na política.
                    </li>
                    <li>
                        <b>Violência de Gênero:</b> A violência contra as mulheres é uma das formas mais graves de violação dos direitos humanos.
                    </li>
                    <li>
                        <b>Desigualdade Salarial:</b> As mulheres frequentemente recebem salários mais baixos que os homens para trabalhos equivalentes.
                    </li>
                    <li>
                        <b>Desigualdade de Oportunidades:</b> As mulheres muitas vezes têm menos acesso a oportunidades de crescimento e desenvolvimento profissional.
                    </li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    Estratégias para Promover a Equidade de Gênero
                </Text>
                <List type={ListType.disc} className="mt-5">
                    <li>
                        <b>Educação e Conscientização:</b> Promover a educação sobre igualdade de gênero desde cedo e conscientizar sobre os direitos das mulheres.
                    </li>
                    <li>
                        <b>Políticas Públicas:</b> Implementar políticas que promovam a igualdade de gênero no local de trabalho, na política e na sociedade em geral.
                    </li>
                    <li>
                        <b>Empoderamento Econômico:</b> Apoiar o empoderamento econômico das mulheres através de programas de microcrédito, formação profissional e acesso a recursos financeiros.
                    </li>
                    <li>
                        <b>Combate à Violência de Gênero:</b> Estabelecer leis rigorosas e serviços de apoio para vítimas de violência de gênero.
                    </li>
                </List>
                <Seperator />
                <Text subtitle className="mt-10">
                    Conclusão
                </Text>
                <Text p>
                    A equidade de gênero é uma meta alcançável que requer esforços contínuos e colaborativos de todos os setores da sociedade. Ao promover a equidade de gênero, não só criamos uma sociedade mais justa e igualitária, mas também fortalecemos a base para um futuro mais próspero e sustentável para todos.
                </Text>
            </div>
        </PageLayout>
    )
}

export default EquidadeDeGenero
