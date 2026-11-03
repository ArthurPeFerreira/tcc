# Complemento: Khalid et al. (2024), chave `KHALID2024_IOT_SCADA_PHOTOVOLTAIC`

Leitura integral do PDF (1.574 linhas, 28 páginas). A ficha `khalid.md` foi reescrita. Páginas = página do PDF ("N of 28" impresso). Nenhum `.tex`, `.bib` nem `CLAUDE.md` foi alterado.

## Muda o relatório

Nenhum item de `01_REVISAO_DO_TEXTO.md` cita este documento (a chave não aparece em nenhum `\cite` de `Capitulos\` nem de `Texto.tex`, conferido por busca). Portanto nenhuma classificação muda.

Muda só o índice `00_INDICE.md`, linha da ficha `khalid.md`: a coluna "Leitura" passa de "resumo, introdução e conclusões" para "inteira (28 pp.)". Também vale registrar na linha que o PDF tem camada de texto duplicada, o que embaralha a extração em várias páginas.

## Novos achados

Nenhuma frase do texto cita este documento, então não há divergência de citação. Se um dia ele for citado, quatro cuidados saem da leitura inteira:
1. A latência "abaixo de 2 s por Wi-Fi e abaixo de 5 s por GSM" está só no resumo (p.1). O corpo não traz medição, e a Tabela 2 (p.4) lista "Delay 50~300 ms" para o sistema proposto. Os dois números não batem entre si. Não usar a latência como dado medido.
2. O consumo aparece como 3,462 W no resumo e na Tabela 6, e como "média de 3,39 W" no texto da Discussão (p.25).
3. As conclusões falam em "validação no mundo real" em área rural (p.26), mas os testes descritos são de laboratório, na Memorial University (p.19 a 21). A vila do Paquistão é só o cenário de projeto.
4. A "transferência segura, confiável e criptografada" por TCP/IP e HTTP (p.5) é afirmação dos autores, sem demonstração. A própria Conclusão manda a cibersegurança para trabalhos futuros (p.26). Não serve como fonte de segurança.

## Sustenta mais

Sugestões, sem alterar nada. "Cobre" diz o que o documento realmente traz, "não cobre" diz o que a frase do texto afirma e o documento não sustenta.

1. `13_Introducao\13_2_Justificativa.tex:5` e `15_Conclusão.tex:4` (hoje A MAIS contra Phuyal e Zanghi): "supervisórios convencionais exigem licenças proprietárias, hardware dedicado e infraestrutura local (ou equipamentos dedicados e instalação especializada), o que os afasta de pequenas e médias empresas".
   - Cobre: p.2, "sistemas proprietários usam componentes de um único fabricante, o que pode limitar a flexibilidade e trazer vulnerabilidades se o fornecedor falir" (tradução). p.25, o código aberto "elimina o ônus de licenças proprietárias caras" (tradução). p.25, os componentes de hardware são "facilmente acessíveis nos mercados locais" (tradução).
   - Não cobre: "hardware dedicado", "infraestrutura local", "instalação especializada" nem pequenas e médias empresas (o contexto é comunidade rural).
   - Uso possível: acrescentar Khalid como segunda fonte só para "licenças proprietárias custosas e dependência de um único fabricante".
2. `14_Desenvolvimento\14_2_Cap.tex:158` (hoje OK com Phuyal p.16): "código aberto reduz custo de licenciamento, tema recorrente na literatura de supervisórios acessíveis". A frase afirma que o tema é recorrente, e uma única fonte não mostra recorrência. Khalid (p.1, p.25) e Carballo (p.3 a 4) são mais duas fontes do mesmo tema, o que também atende a regra de diversificar fontes do `CLAUDE.md` 4.2.
3. `14_Desenvolvimento\14_1_Cap.tex:66` (hoje A MAIS contra Bangemann): "equipamentos de campo aos serviços em nuvem, inclusive por modems celulares e gateways, o que permite supervisionar centenas de pontos remotos sem hardware proprietário".
   - Cobre, em parte: p.9 (4.8) e p.16, o módulo SIM800L leva dados à internet pela rede celular (GPRS) em sistemas máquina a máquina, falando com o microcontrolador por UART com comandos AT. p.25, componentes comuns e baratos (CAD 35,52 no total).
   - Não cobre: "centenas de pontos". O sistema tem poucos sensores e o ambiente é de dezenas de pontos, no máximo. O texto continua precisando de outra fonte para o número.
4. `14_Desenvolvimento\14_1_Cap.tex:12` (hoje A MAIS contra Yadav, "processos contínuos e espalhados"): p.2, SCADA obtém dados de "instalações remotas" e emite comandos de controle limitados. Cobre o "espalhado" (distribuído), não "processos contínuos".
5. `14_Desenvolvimento\14_1_Cap.tex:62` e `:64` (IoT e convergência TA/TI): p.2, a plataforma IoT integra sensores inteligentes, CLPs, atuadores e IEDs de sistemas de controle industrial e redes SCADA. Sustenta a ideia de "IoT e SCADA se encontram" em linhas gerais. Não usa a expressão "convergência TA/TI".
6. `14_Desenvolvimento\14_6_Cap.tex:512` (parágrafo de comparação com a literatura, hoje com Phuyal e Abbas): Khalid poderia entrar como terceiro trabalho de baixo custo, com a ressalva de que ele só traz latência no resumo (item 1 de "Novos achados") e nenhuma medição de carga. Serve para dizer que os trabalhos de SCADA IoT de baixo custo reportam latência de segundos em microcontroladores, ao contrário do presente trabalho, que mede dezenas de milissegundos. Isso é comparação de ordem de grandeza, com métodos diferentes.
7. Frases SEM CITAÇÃO que este documento não ajuda: `14_1:241` a `:247` (HTTP, JSON, WebSockets), `14_1:279` (Modbus mais difundido), `14_1:204` e `:207` (SQL, agregados), `14_1:263` (sandbox), `14_3:78`, `14_3:115`, `14_3:372` a `:374` (outbox, disjuntor, idempotência), `14_6:116` a `:147` (Lighthouse). O HTTP de Khalid é o da conversa com a nuvem do Blynk (p.18) e o JSON é só uma troca serial entre Arduino e ESP-32 (p.18), nenhum dos dois define ou explica o conceito.

## Confirmado sem mudança

0 itens do relatório citam este documento. A ficha anterior estava certa no que dizia (dados, do que trata, afirmações p.1, p.2 e p.25 a 26), e a leitura inteira só acrescentou o miolo (arquitetura, bancada, SMS, tabela de custo) e as inconsistências internas.
