/**These are necessary imports / components for the page */
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";

const SaudeReprodutiva = () => {

    return (
        <PageLayout home>
            <section className={"container pt-20 md:pt-10"}>
                <Text className="!md:text-5xl" title>
                    Saúde Reprodutiva da Mulher: Importância e Cuidados Essenciais
                </Text>
                <hr className="my-5" />
                <Text p>
                    Este artigo aborda a saúde reprodutiva da mulher, destacando sua importância e os cuidados essenciais para garantir bem-estar e qualidade de vida. 
                    Saúde reprodutiva é um direito fundamental e envolve uma série de aspectos, desde a saúde física até o bem-estar emocional e social.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    O que é Saúde Reprodutiva?
                </Text>
                <Text p>
                    Saúde reprodutiva refere-se a um estado de completo bem-estar físico, mental e social em todos os assuntos relacionados ao sistema reprodutivo. 
                    Isso significa que as pessoas são capazes de ter uma vida sexual satisfatória e segura, a capacidade de se reproduzir e a liberdade de decidir se, quando e com que frequência fazer isso.
                </Text>

                <Text subtitle className="mt-10 md:text">
                    Principais Cuidados com a Saúde Reprodutiva
                </Text>
                <List type="disc" className="mt-5">
                    <li>
                        <b>Consultas Regulares ao Ginecologista</b><br />
                        Realizar consultas regulares ao ginecologista é fundamental para a prevenção e detecção precoce de doenças.
                    </li>
                    <li>
                        <b>Uso de Métodos Contraceptivos</b><br />
                        Escolher e usar métodos contraceptivos adequados é essencial para a saúde reprodutiva e para a prevenção de gravidezes não planejadas.
                    </li>
                    <li>
                        <b>Prevenção de Doenças Sexualmente Transmissíveis (DSTs)</b><br />
                        O uso de preservativos e a realização de exames periódicos ajudam na prevenção e tratamento de DSTs.
                    </li>
                    <li>
                        <b>Saúde Mental e Bem-Estar</b><br />
                        Cuidar da saúde mental é igualmente importante, pois fatores emocionais e psicológicos têm um grande impacto na saúde reprodutiva.
                    </li>
                </List>
                <Seperator />
                <Text p>
                    A saúde reprodutiva da mulher é um aspecto vital para a saúde geral e o bem-estar. É importante promover a educação, o acesso a serviços de saúde de qualidade e a adoção de práticas saudáveis para garantir que todas as mulheres possam exercer seus direitos reprodutivos com segurança e dignidade.
                </Text>
            </section>
            <section>
                <div className="container px-3">
                    <Text subtitle className="mt-10 md:text">
                        Recursos Adicionais
                    </Text>
                    <Text p>
                        Para mais informações sobre saúde reprodutiva, confira os seguintes recursos:
                    </Text>
                    <List type="disc" className="mt-5">
                        <li><LinkTo href="https://www.who.int/health-topics/sexual-health#tab=tab_1" passHref>Organização Mundial da Saúde (OMS) - Saúde Sexual e Reprodutiva</LinkTo></li>
                        <li><LinkTo href="https://www.unfpa.org/reproductive-health" passHref>Fundo de População das Nações Unidas (UNFPA) - Saúde Reprodutiva</LinkTo></li>
                    </List>
                </div>
            </section>
        </PageLayout>
    )
}

export default SaudeReprodutiva;
