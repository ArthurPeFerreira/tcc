# Complemento: Monostori et al. (2016), leitura integral

Chave: `MONOSTORI2016_CPS_MANUFACTURING`. Leitura: inteira (1.957 linhas lidas em ordem. A lista de referências, páginas 23 a 28, só conferida por amostra). Páginas são as da folha do PDF (o manuscrito não tem numeração impressa). Três frases do TCC citam esta chave.

## Muda o relatório

1. `Capitulos\13_Introducao\13_1_Contextualizacao.tex`, linha 20: "Nesses sistemas, subsistemas computacionais cooperam entre si e permanecem integrados ao mundo físico e a seus processos, o que permite medir, controlar e analisar dados em tempo real por meio da rede, inclusive pela Internet".
   - Classificação antiga: A MAIS (p.1, p.5), com a ressalva de que "analisar em tempo real" não está na definição.
   - Classificação nova: OK, com ressalva leve.
   - Páginas: p.1, p.4, p.5.
   - Motivo: a leitura inteira achou a parte que faltava. Na p.4 os autores reproduzem o anúncio do workshop da NSF: o sensoriamento e a manipulação do mundo físico ocorrem localmente, "enquanto o controle e a observabilidade são habilitados de forma segura, confiável e em tempo real por uma rede virtual" (tradução). A p.1 dá "serviços de acesso e processamento de dados disponíveis na Internet" e "monitoradas, controladas, coordenadas e integradas por um núcleo de computação e comunicação" (tradução). A p.5 dá a aquisição de dados em tempo real e a análise (nível superior do CPPS: "gestão inteligente de dados, análise e capacidade computacional"). A ressalva que resta: "em tempo real" vem da citação da NSF e do componente inferior do CPPS, não da definição de CPS da p.1, e "medir" corresponde a "sensoriamento" e "observabilidade". Não há erro de sentido.

2. `Capitulos\13_Introducao\13_2_Justificativa.tex`, linha 7: "A conectividade, em especial sem fio, permite que dispositivos e sistemas ciber-físicos troquem dados com a nuvem" (com `STANKOVIC2014_IOT_RESEARCH_DIRECTIONS` e `MONOSTORI2016_CPS_MANUFACTURING`).
   - Classificação antiga: A MAIS (Monostori p.2-3: sem fio viabilizou manufatura de alta resolução, nuvem como técnica da IoT).
   - Classificação nova: A MAIS mantida, com o motivo ampliado.
   - Páginas: p.2, p.3, p.9, p.12.
   - Motivo: a leitura inteira achou duas passagens que aproximam a frase da nuvem e que o relatório não tinha. Na p.9 os autores dizem que a nuvem terá papel significativo nos CPPS, com o prognóstico que apoia "a aquisição, distribuição e uso de informação de máquinas e processos através de fronteiras espaciais" (tradução). Na p.12 o barramento de serviços de manufatura é oferecido "como serviço de nuvem" para ligar dispositivos de hardware inteligentes dentro e entre empresas (Projeto Virtual Fort Knox). Isso sustenta "dispositivos e CPS trocam dados com a nuvem", sem o "em especial sem fio". O artigo não liga a comunicação sem fio à nuvem (a p.3 só diz que a comunicação sem fio, as redes de sensores e a IoT viabilizaram sistemas de manufatura de alta resolução). O ajuste mínimo seria tirar "em especial sem fio" da frase, ou deixar o sem fio sustentado só por Stankovic, se ele o disser (ficha dele).

## Novos achados

1. `Capitulos\14_Desenvolvimento\14_1_Cap.tex`, linha 68: "a responsividade, a reação em tempo apropriado a mudanças" (`MONOSTORI2016_CPS_MANUFACTURING`). Classe: A MAIS leve. Monostori p.4 diz só "responsividade diante de mudanças internas e externas" (tradução). A expressão "em tempo apropriado" não consta. As outras duas características conferem: inteligência ("adquirir informação do entorno e agir de forma autônoma") e conectividade ("montar e usar conexões com os outros elementos, incluindo pessoas, para cooperar, e com o conhecimento e os serviços disponíveis na Internet"). O relatório antigo já avisava que as três características são ditas dos CPPS (p.4) e não de todo CPS. Leitura inteira confirma isso. A linha continua OK no essencial.

2. Mesma linha 68: "Herdeiros dos sistemas embarcados, acrescentam conectividade, autonomia e cooperação" está sem `\cite`. Monostori p.3 sustenta a origem nos sistemas embarcados ("a maioria dos pesquisadores aponta a origem dos CPS nos sistemas embarcados", tradução). "Acrescentam conectividade, autonomia e cooperação" é síntese do autor, apoiada pela p.4 (as três características). Classe: SEM CITAÇÃO leve, resolvida se o `\cite{MONOSTORI2016_CPS_MANUFACTURING}` do fim do parágrafo já cobrir a frase (cobre pela posição, mas fica distante).

3. Mesma linha 68: "termo proposto em 2006 nos Estados Unidos" (hoje com `PISCHING2017`). Monostori p.3 confirma de forma independente: a noção de CPS "remonta a 2006", ao primeiro workshop da NSF sobre CPS, em Austin, Texas, em 16 e 17 de outubro. Nenhuma divergência, só mais uma fonte.

## Sustenta mais

(Sugestão, sem alterar nada.)

1. `13_1:7`, "a difusão da energia elétrica e a produção em massa baseada no modelo Fordista" (hoje `LASI_INDUSTRY_40`, A MAIS: "Fordista" não consta em Lasi nem em Pisching). Monostori p.6: "A primeira revolução industrial é atribuída ao primeiro tear mecânico, de 1764, a segunda à linha de montagem de Ford, de 1913, a terceira ao primeiro CLP, em 1968" (tradução). Sustenta "Fordista" (como linha de montagem de Ford) e a origem do CLP na terceira fase, que o texto diz na mesma linha. Atenção: o artigo data a segunda revolução pela linha de montagem, não pela energia elétrica.
2. `14_1:64`, "a pirâmide ISA-95 tende a achatar-se em uma arquitetura plana baseada em serviços" (hoje `COLOMBO2014_STATE_ART_AUTOMATION`, OK). Monostori p.5 apoia a ideia: "os CPPS rompem em parte com a pirâmide tradicional da automação". Os níveis de controle e de campo continuam, com CLPs perto dos processos, e nos níveis mais altos o funcionamento é mais descentralizado, com serviços distribuídos (Figura 5, título "Decomposição da hierarquia da automação com serviços distribuídos", tradução). Cuidado: o artigo não diz "achatar-se" nem "plana". Diz que parte da pirâmide continua.
3. `14_1:81`, princípios da Indústria 4.0 (hoje `PISCHING2017`, DIVERGE por "virtualização" e "operação em tempo real"). Monostori não traz lista de princípios, mas dá três objetivos (p.6): integração horizontal por redes de valor, integração digital ponta a ponta da engenharia e integração vertical com sistemas em rede. Para "tempo real" e "descentralização", dá apoio parcial: recursos "integrados como instâncias inteligentes, autoorganizadas, interempresas, em tempo real e otimizadas de forma autônoma" (p.6) e funcionamento "mais descentralizado" nos níveis altos (p.5). Não serve para "virtualização" nem "modularidade" (a "virtualização" do TCC vem de Hermann et al. via Pisching, com nota de rodapé).
4. `13_1:48`, níveis 3 e 4 da pirâmide (FONTE ERRADA: Bigheti não define). Monostori p.11 descreve a ISA-95 como padrão que define "qual informação deve ser trocada entre sistemas de vendas, finanças e logística e sistemas de produção, manutenção e qualidade" (tradução). Apoio fraco. Colombo p.2 e ISA-95 p.18-19 (já indicados no relatório) continuam melhores.
5. `13_2:3`, "processos industriais geram grande volume de dados" (A MAIS contra Zanghi). Monostori p.5 cita, entre os desafios dos CPPS, "lidar com grandes volumes e taxas de dados" (tradução). Apoio parcial, junto com Abbas p.3, que o relatório já indica.
6. Controle de acesso por cargos, se o capítulo 3 precisar de uma fonte de literatura geral: Monostori p.14 (SecurePLUGandWORK) diz que direitos de acesso e personalização são geridos "no nível do cargo" e cita "controle de acesso baseado em cargos" entre os componentes. É um projeto de plug-and-work com OPC UA, então só serve como exemplo, e o TCC não cita OPC UA. Nenhuma linha atual do relatório pede isso. Registrado só para consulta.
7. Nada em Monostori sustenta as frases de microsserviços (`14_1:150`, `14_2:154`), as de Modbus, de HTTP, de contêiner ou de polling. A SOA e o barramento de serviços de manufatura (p.11-12) são a parte mais próxima, mas tratam de MES/ERP e não de supervisório.

## Confirmado sem mudança

0 itens do relatório confirmados sem nenhuma mudança. Das 3 linhas do TCC que citam a chave: 1 mudou de classe (13_1:20), 1 manteve a classe com motivo ampliado (13_2:7) e 1 continua OK com um achado leve (14_1:68).

## Nota para o índice

A ficha `monostori.md` já foi reescrita. O texto de `00_INDICE.md` (linha 18, "parcial") e o de `01_REVISAO_DO_TEXTO.md` (lista "Não li inteiros", que cita Monostori páginas 1 a 6, e a linha final "Para Stouffer, Pisching, Bigheti, Abbas e Monostori: quem for citar uma página precisa conferir no PDF") ficam desatualizados: Monostori agora foi lido inteiro. Quem junta tudo é a sessão principal.
