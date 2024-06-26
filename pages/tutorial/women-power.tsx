/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, Image, Seperator, Slider } from "../../src/components";

const EmpowermentOfWomen = () => {
    return (
        <PageLayout home>
            <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
                <Text title className="text-3xl">
                    Empoderamento das Mulheres no Século 21
                </Text>
                <hr className="mt-5" />
                <Text subtitle className="mt-10">
                    A Jornada Contínua para a Igualdade de Gênero
                </Text>
                <Text p className="mt-5">
                    O empoderamento das mulheres tem sido uma questão central nas discussões sobre igualdade de gênero e direitos humanos no século 21. Apesar dos avanços significativos, muitas mulheres ainda enfrentam desafios em diversas áreas, incluindo o local de trabalho, a educação e a participação política. Este artigo explora as principais áreas de progresso e os obstáculos que permanecem.
                </Text>
                <Seperator dots />
                <Text subtitle className="mt-10">
                    Avanços na Educação
                </Text>
                <Text p>
                    A educação é uma ferramenta poderosa para o empoderamento. Nos últimos anos, a taxa de alfabetização feminina aumentou significativamente em muitas partes do mundo. Iniciativas globais têm se concentrado em garantir que meninas e mulheres tenham acesso à educação de qualidade, desde o ensino fundamental até o superior.
                </Text>
                <Image className="my-4" src="/public/imp_assets/empowerment/education.jpg" alt="Women in Education" size={ImageSize.DEFAULT} />
                <Seperator />
                <Text subtitle className="mt-10">
                    Participação no Mercado de Trabalho
                </Text>
                <Text p>
                    A participação das mulheres no mercado de trabalho também cresceu. No entanto, ainda há uma disparidade salarial significativa entre homens e mulheres. Além disso, muitas mulheres enfrentam discriminação e falta de oportunidades de crescimento em suas carreiras. Políticas de igualdade salarial e programas de mentoria são essenciais para superar esses desafios.
                </Text>
                <Image className="my-4" src="/public/imp_assets/empowerment/workplace.jpg" alt="Women in Workplace" size={ImageSize.DEFAULT} />
                <Seperator />
                <Text subtitle className="mt-10">
                    Representação Política
                </Text>
                <Text p>
                    A representação feminina na política tem visto um aumento, mas ainda está longe de ser igualitária. Mulheres em posições de liderança política podem inspirar mudanças significativas em políticas públicas e na percepção social sobre o papel das mulheres na sociedade.
                </Text>
                <Image className="my-4" src="/public/imp_assets/empowerment/politics.jpg" alt="Women in Politics" size={ImageSize.DEFAULT} />
                <Seperator />
                <Text subtitle className="mt-10">
                    Desafios Remanescentes
                </Text>
                <Text p>
                    Apesar dos avanços, muitos desafios ainda precisam ser enfrentados. A violência de gênero, a discriminação e a falta de acesso a serviços de saúde adequados são problemas persistentes. Abordar esses problemas requer esforços coordenados de governos, organizações não-governamentais e da sociedade civil.
                </Text>
                <Image className="my-4" src="/public/imp_assets/empowerment/challenges.jpg" alt="Challenges for Women" size={ImageSize.DEFAULT} />
                <Seperator />
                <Text p>
                    O empoderamento das mulheres é essencial para o desenvolvimento sustentável e para a criação de uma sociedade mais justa e equitativa. Continuar a promover a educação, igualdade no trabalho, representação política e enfrentar os desafios persistentes são passos cruciais para alcançar a verdadeira igualdade de gênero no século 21.
                </Text>
            </div>
        </PageLayout>
    )
}

export default EmpowermentOfWomen;
