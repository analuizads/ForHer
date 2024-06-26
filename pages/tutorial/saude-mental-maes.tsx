/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";

const SaudeMentalDasMaes = () => {
    return (
        <PageLayout home>
            <section className={"container pt-20 md:pt-10"}>
                <Text className="!md:text-5xl" title>
                    Saúde Mental das Mães: Desafios e Estratégias de Apoio
                </Text>
                <hr className="my-5" />
                <Text p>
                    Este artigo aborda os desafios enfrentados pela saúde mental das mães e discute estratégias importantes para oferecer o apoio necessário.
                    A maternidade é uma jornada única, mas também pode ser desafiadora emocionalmente, afetando profundamente o bem-estar mental das mães.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    Desafios na Saúde Mental das Mães
                </Text>
                <Text p>
                    A maternidade pode causar uma variedade de desafios mentais, incluindo depressão pós-parto, ansiedade, estresse e exaustão emocional. 
                    Estes problemas podem ser exacerbados por mudanças hormonais, falta de sono adequado e o peso das responsabilidades parentais.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    Estratégias de Apoio
                </Text>
                <List type="disc" className="mt-5">
                    <li>
                        Promover um ambiente de apoio e compreensão, incentivando a comunicação aberta sobre questões de saúde mental.
                    </li>
                    <li>
                        Oferecer acesso a recursos como grupos de apoio, terapia especializada e informações educativas sobre saúde mental materna.
                    </li>
                    <li>
                        Incentivar práticas de autocuidado que priorizem o bem-estar mental, como descanso adequado, alimentação saudável e atividades que reduzam o estresse.
                    </li>
                </List>

                <Seperator />

                <Text p>
                    Apoiar a saúde mental das mães é fundamental não apenas para o seu bem-estar individual, mas também para o desenvolvimento saudável de suas famílias. Ao reconhecer os desafios enfrentados e implementar estratégias de apoio eficazes, podemos ajudar as mães a prosperarem em sua jornada de maternidade.
                </Text>
            </section>

            <section>
                <div className="container px-3">
                    <Text subtitle className="mt-10 md:text">
                        Recursos Adicionais
                    </Text>
                    <Text p>
                        Para mais informações sobre saúde mental materna, consulte os seguintes recursos:
                    </Text>
                    <List type="disc" className="mt-5">
                        <li><LinkTo href="https://www.who.int/mental_health/maternal-child/maternal_mental_health/en/" passHref>Organização Mundial da Saúde (OMS) - Saúde Mental Materna</LinkTo></li>
                        <li><LinkTo href="https://www.postpartum.net/" passHref>Postpartum Support International (PSI) - Suporte pós-parto</LinkTo></li>
                    </List>
                </div>
            </section>

        </PageLayout>
    );
};

export default SaudeMentalDasMaes;
