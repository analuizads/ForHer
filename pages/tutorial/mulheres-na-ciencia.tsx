import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const MulheresNaCiencia = () => {
    return (
        <PageLayout home>
            <section className={"container pt-20 md:pt-10"}>
                <Text className="!md:text-5xl" title>
                    Mulheres na Ciência: Contribuições, Desafios e Avanços
                </Text>
                <hr className="my-5" />
                <Text p>
                    Este artigo explora o papel crucial das mulheres na ciência, destacando suas contribuições significativas, os desafios enfrentados e os avanços alcançados ao longo dos anos. A participação das mulheres na ciência não apenas enriquece o campo acadêmico, mas também promove inovação e progresso social.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    Importância da Participação Feminina na Ciência
                </Text>
                <Text p>
                    A inclusão de mulheres na ciência é fundamental para ampliar a diversidade de perspectivas e abordagens, essenciais para resolver os complexos desafios contemporâneos. A diversidade de gênero promove a criatividade e impulsiona descobertas científicas significativas.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    Desafios Enfrentados por Mulheres Cientistas
                </Text>
                <List type="disc" className="mt-5">
                    <li>
                        <b>Equidade de Oportunidades:</b> As mulheres frequentemente enfrentam barreiras estruturais e culturais que limitam seu avanço na carreira científica. Promover políticas inclusivas e oportunidades equitativas é essencial para superar esses obstáculos.
                    </li>
                    <li>
                        <b>Viés de Gênero:</b> Estereótipos e preconceitos persistentes afetam a percepção e o reconhecimento das realizações das mulheres cientistas. Combater esses preconceitos é crucial para garantir um ambiente científico justo e inclusivo.
                    </li>
                    <li>
                        <b>Equilíbrio entre Trabalho e Vida Pessoal:</b> Muitas vezes, as mulheres enfrentam desafios adicionais na gestão do equilíbrio entre carreira e vida pessoal. Apoiar políticas que promovam flexibilidade e suporte para as necessidades familiares é fundamental para reter talentos femininos na ciência.
                    </li>
                </List>
                <Seperator />
                <Text p>
                    Reconhecer e celebrar as contribuições das mulheres na ciência não apenas inspira futuras gerações, mas também é crucial para construir um futuro científico mais inclusivo e inovador. O apoio contínuo à igualdade de gênero na ciência é essencial para criar um ambiente onde todas as pessoas possam prosperar e contribuir plenamente com seus talentos e paixões.
                </Text>
            </section>
            <section>
                <div className="container px-3">
                    <Text subtitle className="mt-10 md:text">
                        Recursos Adicionais
                    </Text>
                    <Text p>
                        Para mais informações sobre mulheres na ciência, explore os seguintes recursos:
                    </Text>
                    <List type="disc" className="mt-5">
                        <li><LinkTo href="https://pt.wikipedia.org/wiki/Cientistas" passHref>Wikipedia - Cientistas</LinkTo></li>
                        <li><LinkTo href="https://www.nature.com/women-in-science/" passHref>Nature - Women in Science</LinkTo></li>
                    </List>
                </div>
            </section>
        </PageLayout>
    )
}

export default MulheresNaCiencia;
