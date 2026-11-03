# Índice das fichas de referências

Fichas feitas em 02/11/2026 e reescritas depois da leitura inteira dos documentos que antes estavam em parte. A coluna "Leitura" diz quanto do documento foi lido (detalhes em cada ficha). O relatório da conferência do texto é `01_REVISAO_DO_TEXTO.md`, que já incorpora os achados da pasta `complemento\`.

## PDFs da pasta `Referencias`

| Ficha | Chave no `.bib` | Arquivo | Citada no texto? | Leitura |
|---|---|---|---|---|
| `abbas.md` | AHMED2011_EFFICIENT_WEB_SCADA | Abbas, 2011.pdf | sim (6 vezes) | inteira (170 pp.), menos a lista de referências, o resumo em árabe e os valores dos gráficos de CPU e tráfego |
| `bangemann.md` | COLOMBO2014_STATE_ART_AUTOMATION | Bangemann et al., 2014.pdf | sim (11) | inteira (27 pp., pré-impressão) |
| `bigheti.md` | BIGHETI2020 | Bigheti, 2020.pdf | sim (17) | inteira (146 pp.), menos a lista de referências (p.126-133, só por busca) |
| `carballo.md` | CARBALLO2024_MODERN_SCADA_OPCUA | Carballo et al., 2024 (não citado).pdf | **não** | inteira (17 pp.), figuras não abertas |
| `henriques.md` | HENRIQUES2010_CLOUD_COMPUTING_TCC | Henriques da Silva, 2010.pdf | sim (4) | inteira |
| `isa95.md` | ISA95_2000_ENTERPRISE_CONTROL | International Society of Automation, 2000.pdf | sim (1) | inteira (142 pp.), com alguns rótulos de figuras de fluxo embaralhados na extração |
| `khalid.md` | KHALID2024_IOT_SCADA_PHOTOVOLTAIC | Khalid et al., 2024.pdf | **não** | inteira (28 pp.), com a camada de texto duplicada embaralhando a extração em várias páginas |
| `lasi.md` | LASI_INDUSTRY_40 | Lasi et al., 2014.pdf | sim (5) | inteira |
| `mohamed.md` | MOHAMED2014_RELATIONAL_VS_NOSQL | Mohamed; Altrafi; Ismail, 2014.pdf | sim (2) | inteira |
| `monostori.md` | MONOSTORI2016_CPS_MANUFACTURING | Monostori et al., 2016.pdf | sim (3) | inteira (28 pp.), lista de referências só por amostra |
| `netto2019.md` | NETTO2019_RAFT_KUBERNETES | Netto et al., 2019 (não citado).pdf | **não** | inteira (22 pp.) |
| `netto2016.md` | NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES | Netto, Hylson V. et al., 2016.pdf | sim (4) | inteira |
| `netto2017.md` | NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES | Netto, Hylson Vescovi et al., 2017.pdf | sim (8) | inteira |
| `pedrosa.md` | PEDROSA2011_COMPUTACAO_NUVEM | Pedrosa; Nogueira, 2011.pdf | sim (4) | inteira |
| `phuyal.md` | PHUYAL2020_COST_EFFICIENT_SCADA | Phuyal et al., 2020.pdf | sim (5) | inteira |
| `pisching.md` | PISCHING2017 | Pisching, 2017.pdf | sim (12) | inteira (189 pp.), lista de referências só por palavra-chave |
| `stankovic.md` | STANKOVIC2014_IOT_RESEARCH_DIRECTIONS | Stankovic, 2014.pdf | sim (2) | inteira |
| `stouffer.md` | STOUFFER2015_NIST_ICS_SECURITY | Stouffer et al., 2015.pdf | sim (12) | inteira (248 pp.), Tabela G-1 embaralhada na extração e figuras não vistas. Documento retirado pelo NIST em 28/09/2023 |
| `wali.md` | WALI2024_CLOUD_SCADA_SECURITY | Wali; Alshehry, 2024.pdf | sim (2) | inteira (menos a lista de referências) |
| `yadav.md` | YADAV2020_SCADA_ARCHITECTURE_REVIEW | Yadav; Paul, 2020.pdf | sim (5) | inteira (29 pp.), lista de referências só por amostra |
| `zanghi.md` | ZANGHI2019_SCADA_CONCEITOS | Zanghi, 2019.pdf | sim (19) | inteira |

Os 21 PDFs têm texto extraível (nenhum precisou de OCR). O PDF de Netto et al. (2017) tem um rodapé de fonte não extraível, sem efeito no conteúdo.

## Fontes de `sites.txt` e documentação online

| Ficha | Chave no `.bib` | Fonte | Citada no texto? | Leitura |
|---|---|---|---|---|
| `elipse-ihm.md` | ELIPSE_IHM_ALTA_PERFORMANCE | kb.elipse.com.br, IHMs de alta performance | sim (5) | ficha por resumo automático. A página foi relida em texto bruto (`complemento\docs-online.md`) |
| `elipse-aquisicao-redundancia.md` | sem chave | kb.elipse.com.br, aquisição de dados críticos e redundância | não | resumo automático |
| `elipse-outras-paginas.md` | sem chave | kb.elipse.com.br, boas práticas E3, melhores práticas E3, EPM Processor, virtualização | não | resumo automático |
| `wef-davos2016.md` | WEF_DAVOS_2016_THEME | weforum.org | não | **não lida** (erro 403) |
| `modbus-tcp.md` | MODBUS_TCP_IMPLEMENTATION_GUIDE | modbus.org, Messaging on TCP/IP | sim (7) | parcial (46 pp.: sumário, p.2, 5-8 e busca, mais seções conferidas no texto bruto). Link do `.bib` e de `sites.txt` dá 404, usei o link novo |
| `modbus-serial.md` | MODBUS_SERIAL_SPEC | modbus.org, over Serial Line | sim (2) | parcial (44 pp.: sumário, p.5, 7 e 12 e busca). Link antigo dá 404, usei o link novo |
| `docs-online.md` | MOLECULER_DOCS, BULLMQ_DOCS, OWASP_CHEATSHEETS, DOCKER_DOCS (e lista do que não consultei) | páginas de documentação | sim | texto bruto (`curl`) de Moleculer, BullMQ, OWASP, Docker, PostgreSQL, Redis, Next.js, Fastify, Node.js, TypeScript e React, mais Haas no PDF público do autor. Frase a frase em `complemento\docs-online.md` |

## Citadas no texto e sem PDF na pasta

- Normas e manuais, conteúdo não lido (só páginas públicas, metadados e, para a ISA-101, o sumário público de 9 páginas): ISA101_2015_HMI (8 citações), ISA182_2016_ALARM (1), SCHNEIDER_ATV320_MODBUS_MANUAL (3), SCHNEIDER_ATV320_PROGRAMMING_MANUAL (1), SCHNEIDER_TM221_HARDWARE_GUIDE (1), SCHNEIDER_MACHINE_EXPERT_BASIC (2). A URL do `.bib` dos manuais é a página inicial `se.com/br/pt`.
- Artigo: HAAS2017_WEBASSEMBLY (2), lido no PDF público do autor (fora da pasta `Referencias`).
- Documentação online (sem ficha própria, ver `docs-online.md`): POSTGRESQL_DOCS (5), REDIS_DOCS (7), NEXTJS_DOCS (7), MOLECULER_DOCS (5), DOCKER_DOCS (3), FASTIFY_DOCS (2), NODEJS_DOCS (1), TYPESCRIPT_DOCS (1), BULLMQ_DOCS (5), REACT_DOCS (2), OWASP_CHEATSHEETS (6).
- Modbus: os dois guias não estão na pasta, usei cópias baixadas do site (fora de `Referencias`).

## PDFs nunca citados

Khalid et al. (2024), Carballo et al. (2024) e Netto et al. (2019), os três lidos por inteiro. A auditoria de 01/11 não listava Khalid como sem citação. Recomendação do relatório: não citar Netto (2019), e citar Carballo só com a ressalva de que o miolo é OPC UA.

## Complementos da leitura inteira

| Pasta | Conteúdo | Situação |
|---|---|---|
| `complemento\` | onze arquivos com os achados da leitura inteira, um por documento: `stouffer.md`, `pisching.md`, `bigheti.md`, `abbas.md`, `isa95.md`, `monostori.md`, `yadav.md`, `khalid.md`, `carballo.md`, `netto2019.md` e `docs-online.md` (documentação online, frase a frase) | já incorporados ao `01_REVISAO_DO_TEXTO.md`. Não é preciso abri-los para saber o que vale |

## Chaves do `.bib` sem citação e sem arquivo (18 entradas, nenhuma aparece em `\cite`)

WEF_DAVOS_2016_THEME, GAUSHELL_DARLINGTON_1987_SUPERVISORY_CONTROL_DATA_ACQUISITION, CARBALLO2024_MODERN_SCADA_OPCUA (com PDF), KHALID2024_IOT_SCADA_PHOTOVOLTAIC (com PDF), NETTO2019_RAFT_KUBERNETES (com PDF), DRIZZLE_DOCS, ECHARTS_DOCS, QUICKJS_DOCS, WASMTIME_DOCS, WEBASSEMBLY_SPEC, KUBERNETES_DOCS, ZOD_DOCS, ARGON2_RFC9106, JWT_RFC7519, ONGARO2014_RAFT, CHONG2006_MULTITENANT, LEAFLET_DOCS, OPENSTREETMAP_DOCS. (Só as três primeiras marcadas "com PDF" têm arquivo, as demais não têm arquivo e não são citadas.)

## Observações sobre o `.bib`

- A chave `AHMED2011_EFFICIENT_WEB_SCADA` tem autor "Abbas, Hosny Ahmed" e o PDF se chama "Abbas, 2011", o texto de `\cite` imprime "Abbas" (o PDF diz "Hosny Ahmed Abbas Ahmed" e a Phuyal cita como "Ahmed"). A chave `COLOMBO2014_STATE_ART_AUTOMATION` é um capítulo cujos autores são Bangemann et al. (Colombo é editor), a citação no texto sai como Bangemann.
- Os links dos dois guias Modbus no `.bib` e em `sites.txt` dão 404 (novos: `https://www.modbus.org/file/secure/messagingimplementationguide.pdf` e `https://www.modbus.org/file/secure/modbusoverserial.pdf`). As versões lidas são 1.0b (24/10/2006) e 1.02 (20/12/2006), o `.bib` diz 2012 para as duas.
- O PDF de Bangemann é a pré-impressão (27 páginas) e não coincide com as páginas 23 a 47 do livro, que o `.bib` informa: para citar com página, é preciso o livro.
- O PDF de Stankovic é a versão do autor (7 páginas), não as páginas 3 a 9 da revista.
