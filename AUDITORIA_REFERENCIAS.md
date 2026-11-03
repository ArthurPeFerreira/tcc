# Auditoria de referências do TCC (refeita em 01/11/2026)

Esta lista substitui a de 27/10. Foi conferida contra o texto de 01/11, com os capítulos salvos até as 19:47. Os números de linha valem para essa versão. Nenhum `.tex` nem o `.bib` foi alterado.

**Como foi feita.** Reli a introdução e os capítulos 2 a 8, com exceção do conteúdo interno das tabelas e figuras. As citações suspeitas foram buscadas no texto dos PDFs da pasta `Referencias/`, por palavra-chave. Essa busca mostra se o assunto aparece no PDF, mas não substitui a leitura do trecho. Cada referência nova foi confirmada por DOI (Crossref), ISBN (Open Library ou catálogo de biblioteca) ou link oficial. Confirmar que a obra existe não prova que ela diz o que o texto afirma: isso só se fecha com a obra na mão (regra 1).

**Decisão proposta:** **A** = usar referência que já está no `.bib`. **N** = acrescentar referência nova. **R** = reescrever ou tirar, ou tratar como decisão de projeto, pois não achei fonte adequada.

## 1. Citações que não sustentam a afirmação, e dois erros de conteúdo

| # | Onde | Afirmação | Problema | Proposta |
|---|------|-----------|----------|----------|
| 1 | `14_1:158` | "Cada serviço registra-se em um componente central de coordenação" | **Erro.** A documentação do Moleculer diz que cada nó mantém o próprio registro local de serviços | **R** corrigir para "cada nó mantém um registro local dos serviços disponíveis". MOLECULER_DOCS (página Registry) |
| 2 | `14_1:281` | Áreas *coils* e *input coils* | **Erro de nome.** A especificação usa *discrete inputs*. O dado vem do protocolo, e o guia citado não é a fonte primária | **R** trocar o nome + **N** Modbus Application Protocol V1.1b3 |
| 3 | `14_1:150` | Microsserviços diferem da SOA por serviços menores e com dados próprios | Colombo (2014) não usa a palavra microsserviços. Ele só cita o barramento (ESB) | **N** Dragoni et al. (2017) ou Newman (2015). Bigheti (2020) compara microsserviços e monolito, sem confirmação de que trate da SOA nesses termos |
| 4 | `14_1:243` | API REST como alternativa cada vez mais comum ao Modbus | Colombo (2014) não cita REST. A busca só achou fóruns e páginas de fabricante | **R** reescrever como "dispositivos que oferecem suas funções como serviços web" (Colombo) ou tirar |
| 5 | `14_1:241` | REST como forma de implementar serviços web | Pisching (2017) só menciona "WS-REST" em uma lista | **A** BIGHETI2020 (define REST) + **N** Fielding (2000) |
| 6 | `14_1:66` | Modems celulares e *gateways*, centenas de pontos remotos sem hardware proprietário | Colombo (2014) não fala de modems | **R** tirar o fim da frase e manter BIGHETI2020 e PISCHING2017 |
| 7 | `14_1:204` | Chave primária, chave estrangeira, integridade referencial | Mohamed (2014) não traz os termos "primary key" nem "foreign" | **N** Codd (1970) + Elmasri e Navathe |
| 8 | `14_1:257` | Bloqueio temporário após tentativas falhas | Cita Stouffer junto com a OWASP, mas Stouffer **alerta** que o bloqueio por senha errada pode travar o operador em um evento crítico | **A** deixar só OWASP_CHEATSHEETS nessa frase. A banca pode perguntar sobre o risco, que hoje o texto não comenta (ver a decisão 3 da seção 6) |
| 9 | `14_1:251` | Verificar no servidor, e não apenas na interface | A busca não achou isso em Stouffer | **A** OWASP_CHEATSHEETS (Authorization) para essa parte |
| 10 | `14_1:265` | Limites de tempo e de memória, laço infinito, ambiente novo a cada execução | Haas (2017) trata do projeto do WebAssembly. O PDF não está na pasta, e estes pontos precisam ser conferidos nele | **N** Wahbe et al. (1993) como apoio. Conferir Haas e, se não sustentar, **R** |
| 11 | `14_1:145` | "O Docker é a ferramenta de contêineres mais difundida" | Hoje, sem citação nessa frase, e a documentação do próprio Docker seria fonte interessada | **N** Bernstein (2014), citado pelo próprio NETTO2017, ou **R** tirar o "mais difundida" |
| 12 | `14_2:154` | Modelo de microsserviços "apontado pela literatura" para supervisórios modernos | Yadav (2020) não usa a palavra microsserviços. **Achado novo** | **A** trocar por BIGHETI2020, que propõe exatamente isso |
| 13 | `14_2:213` | Chave de idempotência e trava por tag | Stouffer não fala de idempotência | **N** Hohpe e Woolf (2003) ou Kleppmann (2017) |
| 14 | `14_2:209` | Identidade vem da sessão, nunca do navegador | Wali (2024) não trata de sessão (nenhuma ocorrência da palavra) | **A** OWASP_CHEATSHEETS (Authorization) |
| 15 | `14_2:317` | Cifra simétrica autenticada, chave de dados protegida por chave mestra | Stouffer só recomenda cifra e *hash* em termos gerais | **N** NIST SP 800-57 parte 1 rev. 5. Se o sistema usar AES-GCM, também NIST SP 800-38D |
| 16 | `15:4` | Custo afasta pequenas e médias empresas | Zanghi (2019) não trata disso | **A** tirar ZANGHI e manter PHUYAL2020 |

## 2. Afirmações sem referência

### Introdução

| # | Onde | Afirmação | Proposta |
|---|------|-----------|----------|
| 17 | `13_1`, 1º parágrafo | Definição de indústria como setor da economia | **R** não achei fonte. Sugiro abrir pela evolução tecnológica (Lasi) |
| 18 | `13_1`, parágrafo dos contêineres, final | O contêiner executa da mesma forma no computador local, no servidor e na nuvem | **A** NETTO2016 + **N** Bernstein (2014). A citação atual para antes desse trecho |
| 19 | `13_2`, 1º parágrafo | Saneamento, transporte e energia, instalações espalhadas, telemetria | **A** STOUFFER2015, que descreve ativos geograficamente dispersos |

### Capítulo 2

| # | Onde | Afirmação | Proposta |
|---|------|-----------|----------|
| 20 | `14_1:60` | Definições de automação industrial e informática industrial, TA e TI | **N** Groover (2008) para a automação. Para TA e TI, conferir em Colombo |
| 21 | `14_1:96` | Cinco características da nuvem, modelos pública, privada, comunitária e híbrida | **A** HENRIQUES2010 para as características e a híbrida. "Comunitária" não apareceu na busca em Henriques nem em Pedrosa. **N** Mell e Grance (2011), a definição do NIST, cobre tudo |
| 22 | `14_1:143` | A mesma imagem executa de forma idêntica, dados perdidos sem volumes externos | **A** NETTO2017 (volumes) e NETTO2016 (sem estado). Para a portabilidade, **N** Bernstein (2014) |
| 23 | `14_1:150`, 1ª frase | Definição de microsserviços | **N** Lewis e Fowler (2014) ou Dragoni et al. (2017) |
| 24 | `14_1:162-166` | Filas, entrega repetida, idempotência, *backoff*, mensagens mortas | Hoje só BULLMQ_DOCS, cujo nome saiu do texto mas continuaria nas Referências. **N** Hohpe e Woolf (2003) + Kleppmann (2017) |
| 25 | `14_1:202-204` | Relacional adequado a sistemas que exigem coerência, SQL como linguagem padrão | **N** Elmasri e Navathe. O "adequado" é julgamento e precisa ser conferido nessa obra |
| 26 | `14_1:207`, final | Tabelas de agregados (médias por minuto e hora) | **N** candidatas: Jensen et al. (2017) e Gray et al. (1997), a conferir. Se não servirem, **R** levar ao Cap. 3 como decisão de projeto |
| 27 | `14_1:219`, final | Cálculos longos travam o fluxo e devem ir para processos separados | **A** NODEJS_DOCS. **N** opcional: Tilkov e Vinoski (2010) |
| 28 | `14_1:221`, final | Tipos só na compilação, validar dados externos na execução | **A** TYPESCRIPT_DOCS + **N** Bierman et al. (2014) |
| 29 | `14_1:225`, final | Esquema compartilhado mantém servidor e navegador de acordo | **R** não achei fonte. Levar ao Cap. 3 como decisão de projeto |
| 30 | `14_1:241` | HTTP, cliente e servidor, métodos | **N** RFC 9110 + Fielding (2000) |
| 31 | `14_1:243` | JSON | **N** RFC 8259 |
| 32 | `14_1:245` | Sem estado, códigos de resposta | **N** RFC 9110 + Fielding (2000). O `/v1` fica sem fonte: **R** levar ao Cap. 3 como decisão |
| 33 | `14_1:247` | WebSockets, *polling* e seus custos | **N** RFC 6455 + RFC 6202 |
| 34 | `14_1:255` | Rotação do token de renovação | Já cita OWASP. **N** opcional: RFC 9700 |
| 35 | `14_1:259` | RBAC e menor privilégio | Stouffer sustenta. **N** recomendada: Sandhu et al. (1996) e Saltzer e Schroeder (1975), as fontes originais |
| 36 | `14_1:263` | Riscos do código de terceiros, *sandbox*, técnicas | **N** Saltzer e Schroeder (1975) + Wahbe et al. (1993) |
| 37 | `14_1:283` | Parâmetros de uma leitura Modbus | **N** Modbus Application Protocol V1.1b3 |
| 38 | `14_1:285` | Valores de 32 e 64 bits, ordem de bytes varia entre fabricantes | **R** a busca só achou fóruns. Sugiro dizer que o protocolo define apenas o registrador de 16 bits e citar a especificação |
| 39 | `14_1:287` | Tempo de ciclo, idade da informação, agrupar registradores | **A** MODBUS_SERIAL_SPEC e o guia de mensagens, que tratam da transação. O raciocínio do ciclo é dedução do autor e precisa ser conferido |

### Capítulos 3 a 7

| # | Onde | Afirmação | Proposta |
|---|------|-----------|----------|
| 40 | `14_2:221` | "Limite de pontos comum nos supervisórios comerciais" | **R** não achei fonte. **Achado novo** |
| 41 | `14_2:233` | Quatro camadas (domínio, aplicação, infraestrutura, apresentação) | **N** Evans (2003) |
| 42 | `14_2:287` | Falta de dado tão visível quanto um limite ultrapassado | **R** tratar como decisão de projeto, ou **A** ISA101 se a norma sustentar |
| 43 | `14_2:319` | Invasão de uma peça não dá acesso ao conjunto | Wali cita segmentação. **A** STOUFFER2015 (defesa em profundidade) reforça |
| 44 | `14_3:78` | "Essa técnica, conhecida como *outbox*" | **N** Richardson (2018). **Achado novo** |
| 45 | `14_3:115` | Disjuntor que acompanha falhas seguidas | **N** Nygard (2018). **Achado novo** |
| 46 | `14_3:92`, `14_3:142` | Filas separam etapas, fila de mortos | **N** Hohpe e Woolf (2003), no lugar de BULLMQ_DOCS |
| 47 | `14_3:374` | Falha fechada: na dúvida, bloquear | **N** Saltzer e Schroeder (1975, *fail-safe defaults*). **Achado novo** |
| 48 | `14_4:16` | Funções executáveis com o teclado | **N** WCAG 2.2 |
| 49 | `14_4:116`, `14_4:150` | Listas de observação dos supervisórios clássicos, esquema sinótico das salas de controle | **R** tirar a comparação, ou conferir em Zanghi. **Achado novo** |
| 50 | `14_5:68` | CLP como intermediário, "organização encontrada em instalações reais" | **R** tirar o final, ou conferir em Stouffer, que descreve equipamentos consultados por outro. **Achado novo** |
| 51 | `14_6:116` | Lighthouse, alvo de 2,5 s (LCP) e limite de 0,1 (CLS) | **N** Lighthouse e Web Vitals. **Achado novo** |
| 52 | `14_6:143` | Diretrizes WCAG | **N** WCAG 2.2. **Achado novo** |
| 53 | `14_6:147` | Tarefa acima de 50 ms | **N** W3C Long Tasks API. **Achado novo** |

As descrições do próprio sistema (fluxos, telas, medições e ensaios) não precisam de citação externa, porque a fonte é o próprio trabalho. As medições precisam dos registros do autor, e as que faltam já estão marcadas como `\todo`.

## 3. Itens da lista de 27/10 que saíram

O texto mudou e estes pontos não existem mais: "centrais estratégicas de análise de dados", QuickJS compilado para WebAssembly, Argon2 (RFC 9106 e Biryukov), comprimento contra área em gráficos (Cleveland e McGill), eventos enviados pelo servidor (WHATWG), boas práticas de banco, o cálculo de tempo do Modbus serial, RS-485 no Cap. 2 e separação de funções no RBAC.

Conferi de novo e estas citações estão em ordem: Phuyal sobre código aberto e licenças (`14_2:158`), Ahmed sobre tempo de resposta, processador e tráfego (`14_6:512`), e Pisching sobre o termo CPS de 2006 (`14_1:68`).

## 4. Problemas nas referências que já existem

- **Manuais da Schneider.** As quatro entradas apontam para a página inicial `se.com/br/pt`, os PDFs não estão na pasta, e o Cap. 6 tem vários `\todo` pedindo para confirmar dados neles. Hoje esses dados não estão verificados.
- **Modbus.** Os dois links do `.bib` davam 404 em 27/10. Os novos respondem como PDF: `https://www.modbus.org/file/secure/messagingimplementationguide.pdf` e `https://www.modbus.org/file/secure/modbusoverserial.pdf`.
- **Sem PDF na pasta:** ISA101_2015_HMI, ISA182_2016_ALARM, HAAS2017_WEBASSEMBLY, as especificações Modbus e os manuais da Schneider. A ISA-101 sustenta oito citações, sem que o texto delas tenha sido conferido.
- **Entradas sem uso (17):** ARGON2_RFC9106, CARBALLO2024, CHONG2006, DRIZZLE_DOCS, ECHARTS_DOCS, GAUSHELL_DARLINGTON_1987, JWT_RFC7519, KUBERNETES_DOCS, LEAFLET_DOCS, NETTO2019_RAFT, ONGARO2014_RAFT, OPENSTREETMAP_DOCS, QUICKJS_DOCS, WASMTIME_DOCS, WEBASSEMBLY_SPEC, WEF_DAVOS_2016, ZOD_DOCS. Não aparecem nas Referências, e podem sair do `.bib`.
- **Possível conflito com a decisão "sem nomes".** O Cap. 7 ainda nomeia Lighthouse e ProtoProbe. Se saírem, os itens 51 e 53 mudam de forma.

## 5. Referências novas confirmadas

| Referência | Confirmação | Itens |
|-----------|-------------|-------|
| BERNSTEIN, D. Containers and Cloud: From LXC to Docker to Kubernetes. *IEEE Cloud Computing*, v. 1, n. 3, p. 81-84, 2014. | doi:10.1109/MCC.2014.51 | 11, 18, 22 |
| BIERMAN, G.; ABADI, M.; TORGERSEN, M. Understanding TypeScript. ECOOP 2014, LNCS, p. 257-281. | doi:10.1007/978-3-662-44202-9_11 | 28 |
| CODD, E. F. A relational model of data for large shared data banks. *Communications of the ACM*, v. 13, n. 6, p. 377-387, 1970. | doi:10.1145/362384.362685 | 7 |
| DRAGONI, N. et al. Microservices: Yesterday, Today, and Tomorrow. In: *Present and Ulterior Software Engineering*. Springer, 2017, p. 195-216. | doi:10.1007/978-3-319-67425-4_12 | 3, 23 |
| DWORKIN, M. NIST SP 800-38D. 2007. | doi:10.6028/NIST.SP.800-38D | 15 |
| ELMASRI, R.; NAVATHE, S. B. *Sistemas de banco de dados*. 6. ed. São Paulo: Pearson, 2011. | ISBN 978-85-7936-085-5 (catálogo de biblioteca, conferir na folha de rosto) | 7, 25 |
| EVANS, E. *Domain-Driven Design*. Addison-Wesley. | ISBN 978-0321125217 | 41 |
| FIELDING, R. T. *Architectural Styles and the Design of Network-based Software Architectures*. Tese, University of California, Irvine, 2000. | https://ics.uci.edu/~fielding/pubs/dissertation/top.htm | 5, 30, 32 |
| GOOGLE. Lighthouse overview. | https://developer.chrome.com/docs/lighthouse/overview | 51 |
| GOOGLE. Web Vitals. | https://web.dev/articles/vitals | 51 |
| GRAY, J. et al. Data Cube. *Data Mining and Knowledge Discovery*, v. 1, n. 1, p. 29-53, 1997. | doi:10.1023/A:1009726021843 | 26 |
| GROOVER, M. P. *Automation, Production Systems, and Computer-Integrated Manufacturing*. 3. ed. Prentice Hall, 2008. | ISBN 978-0132393218 | 20 |
| HOHPE, G.; WOOLF, B. *Enterprise Integration Patterns*. Addison-Wesley. | ISBN 978-0321200686 | 13, 24, 46 |
| JENSEN, S. K.; PEDERSEN, T. B.; THOMSEN, C. Time Series Management Systems: A Survey. *IEEE TKDE*, v. 29, n. 11, p. 2581-2600, 2017. | doi:10.1109/TKDE.2017.2740932 | 26 |
| KLEPPMANN, M. *Designing Data-Intensive Applications*. O'Reilly, 2017. | ISBN 978-1449373320 | 13, 24 |
| LEWIS, J.; FOWLER, M. Microservices. 2014. | https://martinfowler.com/articles/microservices.html | 23 |
| MELL, P.; GRANCE, T. *The NIST Definition of Cloud Computing*. NIST SP 800-145, 2011. | doi:10.6028/NIST.SP.800-145 | 21 |
| MODBUS ORGANIZATION. *Modbus Application Protocol Specification V1.1b3*. 2012. | https://www.modbus.org/file/secure/modbusprotocolspecification.pdf | 2, 37 |
| NEWMAN, S. *Building Microservices*. O'Reilly, 2015. | ISBN 978-1491950357 | 3 |
| NIST SP 800-57 Part 1 Rev. 5. 2020. | https://csrc.nist.gov/pubs/sp/800/57/pt1/r5/final | 15 |
| NYGARD, M. T. *Release It!* 2. ed. Pragmatic Bookshelf, 2018. | ISBN 978-1680502398 | 45 |
| RFC 6202 (Loreto et al., 2011). | doi:10.17487/RFC6202 | 33 |
| RFC 6455 (Fette; Melnikov, 2011). | doi:10.17487/RFC6455 | 33 |
| RFC 8259 (JSON, 2017). | doi:10.17487/RFC8259 | 31 |
| RFC 9110 (HTTP Semantics, 2022). | doi:10.17487/RFC9110 | 30, 32 |
| RFC 9700 (Lodderstedt et al., 2025). | doi:10.17487/RFC9700 | 34 |
| RICHARDSON, C. *Microservices Patterns*. Manning, 2018. | ISBN 978-1617294549 | 44 |
| SALTZER, J. H.; SCHROEDER, M. D. The protection of information in computer systems. *Proceedings of the IEEE*, v. 63, n. 9, p. 1278-1308, 1975. | doi:10.1109/PROC.1975.9939 | 35, 36, 47 |
| SANDHU, R. S. et al. Role-based access control models. *Computer*, v. 29, n. 2, p. 38-47, 1996. | doi:10.1109/2.485845 | 35 |
| TILKOV, S.; VINOSKI, S. Node.js. *IEEE Internet Computing*, v. 14, n. 6, p. 80-83, 2010. | doi:10.1109/MIC.2010.145 | 27 |
| W3C. *Long Tasks API*. | https://www.w3.org/TR/longtasks-1/ | 53 |
| W3C. *WCAG 2.2*. 2023. | https://www.w3.org/TR/WCAG22/ | 48, 52 |
| WAHBE, R. et al. Efficient software-based fault isolation. ACM SOSP, p. 203-216, 1993. | doi:10.1145/168619.168635 | 10, 36 |

## 6. Decisões do Arthur

1. Aprovar os itens **A** e os dois erros (1 e 2). Isso não exige obra nova.
2. Conseguir as obras **N** que quiser usar. Os artigos e RFCs mais úteis, por cobrirem vários itens, são Hohpe e Woolf, Saltzer e Schroeder, Fielding, RFC 9110, Bernstein, Elmasri e Navathe e a especificação Modbus.
3. Decidir os itens **R**, e se o texto deve comentar o risco do item 8, já que o sistema bloqueia o acesso após cinco erros.

A regra do CLAUDE.md de 01/11 pede que cada fonte apareça uma vez por parágrafo e que não se cite a cada frase. As propostas acima serão aplicadas nesse formato, por parágrafo.
