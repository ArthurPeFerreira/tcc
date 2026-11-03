# Zanghi (2019), Sistemas SCADA: Conceitos

## Dados
- Autor: Eric Zanghi (INESC TEC, Porto). Ano: 2019. Título: "Sistemas SCADA: Conceitos". Tipo: nota técnica (série Proteção e Comunicação de Sistemas Elétricos de Potência, PROTCOM), 9 páginas.
- Chave no `.bib`: `ZANGHI2019_SCADA_CONCEITOS`. Arquivo: `Referencias\Zanghi, 2019.pdf`.
- Lido: documento inteiro (9 páginas, texto extraído sem problemas). A numeração impressa "Pag N de 9" coincide com a página do PDF.

## Do que trata (linguagem simples)
O texto explica o que é um sistema SCADA, voltado a quem trabalha com automação de subestações de energia. Diz que SCADA ("Supervisory Control and Data Acquisition") são programas que coletam e guardam dados de um processo para supervisioná-lo e controlá-lo, e que a palavra "sistema SCADA" cobre o programa supervisório, os dispositivos de campo e a rede. Depois percorre oito conceitos: software e sistema SCADA, aquisição e registro de dados, sincronismo de tempo, níveis de operação (três níveis de supervisão numa rede elétrica), comando e controle (com as quatro fases do telecomando), escalabilidade, integrabilidade e redundância. Todos os exemplos são do setor elétrico (subestações, relés, disjuntores, transformadores, GPS). Não há nada sobre web, nuvem, contêineres ou segurança cibernética.

## Afirmações que dá para citar (com página)
- p.1: SCADA vem de "Supervisory Control and Data Acquisition"; são programas capazes de coletar e armazenar dados de um processo para supervisão e consequente controle. Os SCADA são altamente customizáveis e cada aplicação pede configuração e interface de operação próprias.
- p.1: com a digitalização dos sistemas elétricos nos anos 1990, os SCADA foram fundamentais; supervisão de subestações nasceu da necessidade de operar equipamentos remotos e de difícil acesso e do perigo de operadores perto dos painéis convencionais.
- p.1-2: no início da digitalização o custo de software e hardware era alto, e caiu com a evolução de processadores, periféricos e dos próprios SCADA. Na p.2: SCADA substituiu a supervisão por matrizes luminosas ("anunciadores de alarmes", lâmpadas em painéis) e mostradores analógicos; métodos clássicos duraram até os anos 2000.
- p.2: um "sistema SCADA" = software supervisório + rede de dispositivos que fornecem dados e recebem os comandos (conjunto de software, hardware e rede, Figura 3).
- p.3: o software SCADA armazena e trata os dados coletados pelos IEDs e os disponibiliza visualmente (supervisão). Há elementos de rede (switches Ethernet, conversores serial/TCP).
- p.3: a aquisição é "o primeiro grande desafio"; a abordagem inicial era cabeamento longo até a sala de controle (solução cara, ainda a principal). IEDs montados em painéis adquirem os dados do campo (TCs, TPs, disjuntores, sensores) e os entregam digitalizados ao SCADA. Unidades Terminais Remotas (UTR) ficam perto do equipamento e encurtam cabos; ligam-se por rede Ethernet ou serial (a serial "em desuso").
- p.4: IEDs convertem sinais analógicos e digitais em formato binário e enviam ao supervisório; têm funções autônomas de controle e proteção e funcionam sem o supervisório.
- p.4: os pontos adquiridos são chamados TAGs (etiqueta); são os pontos armazenados no banco de dados do supervisório. Podem ser digitais (entrada DI, saída DO, memória DM, calculados internamente) ou analógicos (AI, AO, AM); digitais guardam estados de um bit; analógicos "usualmente" números de até 16 bits.
- p.4: armazenar as informações relevantes é função básica do SCADA; dados são guardados para análise a posteriori, em gráficos históricos ou sequências de eventos digitais.
- p.4: sincronismo de tempo: todo dado deve ter registro de tempo de origem (time stamp), principalmente para analisar faltas; sincronização por receptores GPS ligados a IEDs e SCADA, precisão de pelo menos 1 ms.
- p.4-6: três níveis de operação em sistema elétrico (nível 1 sala de painéis, nível 2 subestação, nível 3 centro de operação; também cita o nível 0 dos equipamentos de pátio). Os supervisórios dos três níveis diferem em funcionalidades e custo. O nível 1 é mais simples, pode rodar em computador ou IHM e dispensa redundância. O nível 2 fica na subestação, é redundante. O nível 3 (centro de operação, EMS/DMS) agrega várias subestações e tem funções especiais (estimação de estado, análise preditiva de alarmes, fluxo de potência).
- p.6: comando e controle: ações são telecomando/telecontrole; o software deve prever três tipos: telecomando instantâneo, telecontrole (controle no tempo, ex.: set point de tap de transformador) e telecomando/telecontrole programado (agendado por condições; o software deve registrar o momento da ação).
- p.6: "todo o processamento dos telecomandos" deve ter quatro fases: seleção (o operador escolhe o equipamento), verificação (intertravamentos etc.), confirmação (pelo operador), execução (pelo SCADA rumo ao IED). SCADAs de energia verificam a confirmação de que o IED aceitou e processou; em falha de execução o sistema deve gerar alarme.
- p.6: escalabilidade: instalações se expandem; o SCADA precisa permitir aumento de pontos no banco de dados e novas telas; licenças com pontos e telas ilimitados são comuns, mas de custo bastante elevado; a escalabilidade deve ser analisada para o orçamento. O hardware do sistema também deve permitir acrescentar dispositivos.
- p.6-7: integrabilidade: a integração se faz pela comunicação de dados com protocolos; os dispositivos devem ser integráveis ao software SCADA e este a outros softwares (ex.: nível 2 distribui dados ao nível 3).
- p.7-8: redundância: acréscimo de um elemento idêntico que assume em caso de falha, o mais transparente possível; usada em SCADA, IEDs e switches; "apesar do alto custo", atinge alta confiabilidade. Exemplos da Fig. 8: estações de operação, modems, switches em anel, unidades de aquisição e controle (UAC).

## O que a referência NÃO diz (e alguém poderia supor)
- Nada sobre SCADA web, em nuvem, microsserviços, contêineres, HTTP/REST, bancos relacionais, Redis, filas ou segurança de acesso/cargos/autenticação.
- Não fala em "níveis de acesso por cargo" de usuários (o que chama "níveis de operação" são níveis da hierarquia física: sala de painéis, subestação, centro de operação). Quem lê "níveis" no texto do TCC e supõe permissão de usuário está errado.
- Não define "tag" de forma geral além dos pontos digitais/analógicos de SCADA elétrico; não fala de tags calculadas por scripts, variáveis meta ou de comando com intertravamento de permissão.
- Não trata de Modbus (cita só "protocolos de comunicação" genericamente, p.7) nem do modelo cliente-servidor.
- A tolerância de 1 ms de sincronismo e o GPS são do contexto de subestações; não é requisito geral de SCADA.
- Não afirma que o custo de licença afasta pequenas e médias empresas (diz que licenças ilimitadas são caras, p.6, e que o custo de software e hardware já foi alto, p.1).
- As quatro fases do comando são descritas como o processamento de telecomandos de sistemas de energia; o texto não diz que valem para qualquer SCADA.
- Os "exemplos" (disjuntor, relé, UTR, IED) são do setor elétrico; a regra do autor do TCC é evitar esses exemplos na seção genérica.

## Em que partes do TCC é citada
Introdução: 13_2 linha 3. Cap. 2 (14_1): linhas 8, 10 (duas vezes), 25, 29, 33, 39, 43, 45, 49, 54, 56. Cap. 3 (14_2): linhas 8, 193, 203, 213, 225. Conclusão (15): linha 4. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`.
