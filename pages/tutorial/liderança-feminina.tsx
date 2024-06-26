import { PageLayout, Text, List, LinkTo, Seperator } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";

const LiderancaFeminina = () => {
    return (
        <PageLayout home>
            <section className={"container pt-20 md:pt-10"}>
                <Text className="!md:text-5xl" title>
                    Liderança Feminina: Desafios, Conquistas e Impacto Social
                </Text>
                <hr className="my-5" />
                <Text p>
                    Este artigo explora a importância da liderança feminina nos dias atuais, destacando os desafios enfrentados pelas mulheres em posições de liderança, suas conquistas e o impacto positivo na sociedade.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    O Papel da Liderança Feminina
                </Text>
                <Text p>
                    A liderança feminina não se limita apenas à representação numérica, mas também envolve a promoção da diversidade, inclusão e perspectivas únicas que contribuem para decisões mais equilibradas e inclusivas.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    Desafios Enfrentados
                </Text>
                <List type="disc" className="mt-5">
                    <li>
                        <b>Viés de Gênero e Estereótipos</b><br />
                        As mulheres frequentemente enfrentam estereótipos de que não são tão capazes quanto seus colegas masculinos em papéis de liderança.
                    </li>
                    <li>
                        <b>Desequilíbrio na Representação</b><br />
                        A falta de representação equitativa em cargos de liderança é um desafio persistente em muitas organizações.
                    </li>
                    <li>
                        <b>Equilíbrio Entre Trabalho e Vida Pessoal</b><br />
                        A gestão eficaz do equilíbrio entre trabalho e vida pessoal é crucial para mulheres em posições de liderança.
                    </li>
                </List>
                <Seperator />
                <Text p>
                    Promover e apoiar a liderança feminina não apenas fortalece as organizações, mas também contribui para um futuro mais inclusivo e igualitário para todos.
                </Text>
            </section>
            <section>
                <Text subtitle className="mt-10 md:text">
                    Recursos Adicionais
                </Text>
                <Text p>
                    Para mais informações sobre liderança feminina, confira os seguintes recursos:
                </Text>
                <List type="disc" className="mt-5">
                    <li><LinkTo href="https://www.womenleadershipmagazine.com/" passHref>Women Leadership Magazine - Revista de Liderança Feminina</LinkTo></li>
                    <li><LinkTo href="https://leanin.org/" passHref>Lean In - Organização de Empoderamento Feminino</LinkTo></li>
                </List>
            </section>
        </PageLayout>
    )
}

export default LiderancaFeminina;
