# Revisão de linguagem: Resumo, Abstract, Introdução e Conclusão

Arquivos lidos por inteiro: `Capitulos/06_Resumo.tex`, `Capitulos/06_Abstract.tex`, `Capitulos/13_Introducao/13_1` a `13_4` e `Capitulos/15_Conclusão.tex`. Nada foi editado. São 36 sugestões. O que mais pesa: (1) o Resumo é um bloco único de umas 330 palavras, com frases de três e quatro ideias e termos soltos (idempotência, sinótico, motor isolado); (2) na Introdução, os parágrafos do nível 0 a 4 da pirâmide e o da nuvem/SOA empilham muita coisa por frase e usam "notoriedade", "sustentado", "subsistemas computacionais"; (3) a Conclusão está boa de estrutura, mas várias frases usam termos de engenharia sem explicar (percentil 95, resumo irreversível, caixa preta, tetos por réplica, tolerar a queda). Os trechos já claros (Metodologia, parágrafo de abertura do Cap. 8 em parte, Objetivos 4 a 6) ficaram sem mexer.

Convenções que segui nas sugestões: `\cite`, `\sigla`, `\emph` e `\ref` nos mesmos lugares de sentido, sem `;`, sem travessão, sem negrito, sem código.

Observações fora do escopo da linguagem (não mexi): (a) o Resumo diz que "a validação combinou ... uma bancada" e a Conclusão (parágrafo 4 da abertura) diz que o sistema "foi exercitado por ... ensaios com equipamentos reais", mas a mesma Conclusão diz que os ensaios de bancada ainda dependem do autor. Vale alinhar quando os ensaios acontecerem. (b) O texto alterna "ponto" (Resumo) e "tag" (Conclusão) para a mesma coisa. (c) `13_4_Estrutura.tex` tem `\subsection{Metodologia}`, nome diferente do arquivo, só para conhecimento.

---

## Resumo (`06_Resumo.tex`, linha 9)

### 1. Parágrafo do resumo inteiro

Atual:

```latex
\par Os sistemas supervisórios (\emph{Supervisory Control and Data Acquisition}, SCADA) monitoram, supervisionam e controlam processos industriais em tempo real, reunindo em uma única interface a leitura das variáveis de campo, o registro histórico, a sinalização de alarmes e o envio de comandos aos equipamentos. Os sistemas convencionais, porém, exigem licenças proprietárias, hardware dedicado e instalação local especializada, o que os mantém fora do alcance de pequenas e médias empresas. Diante disso, este trabalho apresenta o desenvolvimento e a validação de um sistema supervisório web orientado a serviços, executado em contêineres Docker e acessado pelo navegador, sem instalação local. A arquitetura separa a interface web, a interface de programação de aplicações, os \emph{workers} de processamento em segundo plano, o serviço de aquisição Modbus e um motor isolado para a execução de código do usuário em JavaScript. O banco de dados relacional PostgreSQL guarda o cadastro e o histórico, e o Redis mantém o valor atual de cada ponto e as filas de trabalho, enquanto os serviços se comunicam por um barramento de mensagens (Moleculer). O acesso é controlado por cargo e por grupo de permissões, e o comando de equipamentos segue quatro fases, de seleção, verificação, confirmação e execução, com trava por ponto, idempotência e registro de auditoria. São revisados os conceitos de sistemas supervisórios, Indústria 4.0, computação em nuvem e contêineres que fundamentam a proposta, e os requisitos do sistema são validados contra a arquitetura. A validação combinou testes automatizados, campanhas de carga e uma bancada com controlador lógico programável TM221 e inversor de frequência ATV320. Os resultados medidos mostram a gravação do histórico de cerca de 9.400 linhas por segundo e a aquisição de até 9.750 pontos a cada 30 s por réplica do serviço de aquisição, além de 8 ms para aplicar um ciclo de valores no sinótico. Os requisitos de comando, de alarmes e de replicação ainda dependem de ensaios na bancada e de medidas com mais de uma réplica, e a implantação em um provedor de nuvem e em mais de um servidor fica como trabalho futuro.
```

Sugestão:

```latex
\par Os sistemas supervisórios (\emph{Supervisory Control and Data Acquisition}, SCADA) acompanham e controlam processos industriais em tempo real. Eles reúnem em uma só interface a leitura das variáveis de campo, o registro histórico, os alarmes e o envio de comandos aos equipamentos. Os sistemas convencionais, porém, exigem licenças proprietárias, equipamentos dedicados e instalação local especializada, o que os deixa fora do alcance de pequenas e médias empresas. Diante disso, este trabalho desenvolve e valida um sistema supervisório web, dividido em serviços, que roda em contêineres Docker e é acessado pelo navegador, sem instalação local. A arquitetura separa a interface web, a interface de programação de aplicações, os \emph{workers} que processam tarefas em segundo plano, o serviço de aquisição Modbus e um motor isolado que executa o código JavaScript escrito pelo usuário. O banco de dados PostgreSQL guarda o cadastro e o histórico. O Redis guarda o valor atual de cada ponto e as filas de trabalho. Os serviços se comunicam por um barramento de mensagens (Moleculer). O acesso é controlado por cargo e por grupo de permissões. O comando de equipamentos segue quatro fases, de seleção, verificação, confirmação e execução, com trava por ponto, proteção contra o envio repetido do mesmo comando e registro de auditoria. O trabalho revisa os conceitos de sistemas supervisórios, Indústria 4.0, computação em nuvem e contêineres e confere os requisitos do sistema contra a arquitetura. A validação combinou testes automatizados, testes de carga e uma bancada com controlador lógico programável TM221 e inversor de frequência ATV320. O sistema gravou o histórico a cerca de 9.400 linhas por segundo, leu até 9.750 pontos a cada 30 s por réplica do serviço de aquisição e levou 8 ms para aplicar um ciclo de valores no sinótico, a tela que representa o processo. Os requisitos de comando, de alarmes e de replicação ainda dependem de ensaios na bancada e de medidas com mais de uma réplica. A implantação em um provedor de nuvem e em mais de um servidor fica como trabalho futuro.
```

Por quê: frases de três e quatro ideias viraram frases curtas, "idempotência" ganhou palavras comuns e "sinótico" foi explicado. Perde: "idempotência" some como termo (o Cap. 4 continua usando). "Campanhas de carga" virou "testes de carga". "Avaliar corte": as frases sobre PostgreSQL, Redis e Moleculer são detalhe de arquitetura para um resumo, deixei como estão.

---

## Abstract (`06_Abstract.tex`, linha 9)

### 2. Acompanhar a nova redação do Resumo em inglês

Atual: parágrafo inteiro da linha 9 (começa em "Supervisory control and data acquisition (SCADA) systems monitor, supervise and control industrial processes in real time, bringing together..." e termina em "...is left as future work."). Só precisa mudar se a sugestão 1 for aplicada.

Sugestão:

```latex
\par Supervisory control and data acquisition (SCADA) systems monitor and control industrial processes in real time. They bring together in a single interface the reading of field variables, historical logging, alarms and the sending of commands to the equipment. Conventional systems, however, require proprietary licenses, dedicated equipment and specialized local installation, which keeps them out of reach for small and medium-sized enterprises. In view of this, this work develops and validates a service-oriented web supervisory system that runs in Docker containers and is accessed through the browser, with no local installation. The architecture separates the web interface, the application programming interface, the workers that process tasks in the background, the Modbus acquisition service and an isolated engine that runs JavaScript code written by the user. The PostgreSQL database stores the registry and the history. Redis keeps the current value of each point and the work queues. The services communicate through a message bus (Moleculer). Access is controlled by role and by permission group. Commanding of equipment follows four phases, namely selection, verification, confirmation and execution, with a lock per point, protection against the same command being sent twice, and an audit record. The work reviews the concepts of supervisory systems, Industry 4.0, cloud computing and containers, and checks the system requirements against the architecture. The validation combined automated tests, load tests and a test bench with a TM221 programmable logic controller and an ATV320 variable frequency drive. The system wrote history at about 9,400 rows per second, read up to 9,750 points every 30 s per replica of the acquisition service, and took 8 ms to apply one cycle of values in the synoptic screen, the screen that represents the process. The requirements for commanding, alarms and replication still depend on bench trials and on measurements with more than one replica. Deployment on a cloud provider and on more than one server is left as future work.
```

Por quê: segue as mesmas frases curtas do Resumo, para os dois textos dizerem a mesma coisa.

---

## Introdução, Contextualização (`13_1_Contextualizacao.tex`)

### 3. Pirâmide de automação (linha 48)

Atual:

```latex
\par A Figura~\ref{fig:piramide_automacao} organiza a automação na Indústria 4.0 em forma de pirâmide, distribuída em cinco níveis. No nível 0 está o processo físico de produção, com elementos como motores, bombas e tanques. No nível 1, o sensoriamento e a atuação, realizados por sensores, transmissores e válvulas. O nível 2 reúne o monitoramento, a supervisão e o controle, camada em que se encontram os controladores lógicos programáveis (CLPs), os sistemas supervisórios (\sigla{scada}) e as interfaces homem-máquina (\sigla{ihm}), responsáveis por acompanhar e comandar o processo em tempo real e por se comunicar com o nível 1 \cite{COLOMBO2014_STATE_ART_AUTOMATION}. O nível 3 corresponde às operações de manufatura e ao controle da produção. No topo, o nível 4 abrange o planejamento de negócios e a logística \cite{BIGHETI2020}.
```

Sugestão:

```latex
\par A Figura~\ref{fig:piramide_automacao} resume a automação na Indústria 4.0 em uma pirâmide de cinco níveis. O nível 0 é o processo físico de produção, com motores, bombas e tanques. O nível 1 é o sensoriamento e a atuação, feitos por sensores, transmissores e válvulas. O nível 2 reúne o monitoramento, a supervisão e o controle. Nele ficam os controladores lógicos programáveis (CLPs), os sistemas supervisórios (\sigla{scada}) e as interfaces homem-máquina (\sigla{ihm}), que acompanham e comandam o processo em tempo real e se comunicam com o nível 1 \cite{COLOMBO2014_STATE_ART_AUTOMATION}. O nível 3 trata das operações de manufatura e do controle da produção. No topo, o nível 4 cuida do planejamento de negócios e da logística \cite{BIGHETI2020}.
```

Por quê: a frase do nível 2 tinha "camada em que se encontram ... responsáveis por ... e por se comunicar"; agora são três frases curtas. Nenhuma informação perdida.

### 4. Nuvem e SOA (linha 50)

Atual:

```latex
\par Recentemente, as camadas do nível 2 ao nível 4 ganharam notoriedade: serviços antes restritos à planta passaram a ser oferecidos em nuvem e compartilhados entre sistemas e usuários, em geral segundo a \sigla{soa} \cite{COLOMBO2014_STATE_ART_AUTOMATION,AHMED2011_EFFICIENT_WEB_SCADA}. Esse movimento é sustentado pela Indústria 4.0, com o avanço dos protocolos de comunicação e de telemetria, a popularização do software e a interconexão de máquinas e sistemas \cite{LASI_INDUSTRY_40,PISCHING2017,BIGHETI2020}.
```

Sugestão:

```latex
\par Nos últimos anos, os níveis 2 a 4 ganharam destaque. Serviços que antes ficavam restritos à planta passaram a ser oferecidos em nuvem, isto é, em computadores remotos acessados pela Internet, e compartilhados entre sistemas e usuários. Em geral, isso segue a arquitetura orientada a serviços (\sigla{soa}), em que o sistema é dividido em partes independentes \cite{COLOMBO2014_STATE_ART_AUTOMATION,AHMED2011_EFFICIENT_WEB_SCADA}. Esse movimento acontece com a Indústria 4.0, que trouxe protocolos de comunicação e de telemetria mais avançados, software mais popular e máquinas e sistemas mais interligados \cite{LASI_INDUSTRY_40,PISCHING2017,BIGHETI2020}.
```

Por quê: tira "notoriedade" e "sustentado", quebra a frase e explica "nuvem" e "SOA" na primeira vez. Acrescenta duas explicações curtas (nuvem e partes independentes), que são definições, não fatos novos. "Sustentado pela" virou "acontece com", um pouco mais fraco na causa.

### 5. Contêineres (linha 52)

Atual:

```latex
\par Esses serviços se apoiam hoje em contêineres. Um contêiner empacota uma aplicação com suas dependências e a executa de forma isolada, o que permite dividir um sistema em serviços independentes \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES,NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}, e executa da mesma forma em um computador local, em um servidor ou em um provedor de nuvem.
```

Sugestão:

```latex
\par Esses serviços hoje costumam usar contêineres. Um contêiner reúne uma aplicação e tudo de que ela precisa para funcionar (as suas dependências) e a executa isolada das demais. Isso permite dividir um sistema em serviços independentes \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES,NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}. O mesmo contêiner roda do mesmo jeito em um computador local, em um servidor ou em um provedor de nuvem.
```

Por quê: a última oração ("e executa") ficava sem sujeito claro, e "empacota ... dependências" é jargão.

### 6. Parágrafo da indústria (linha 5)

Atual:

```latex
\par A indústria é o setor da economia dedicado à produção de bens materiais, apoiado em trabalho humano, energia e equipamentos de alto valor agregado. Ao longo de sua evolução, sucessivos saltos tecnológicos redefiniram processos, produtos e formas de organização do trabalho, as chamadas "revoluções industriais" \cite{LASI_INDUSTRY_40}.
```

Sugestão:

```latex
\par A indústria é o setor da economia que produz bens materiais, com trabalho humano, energia e equipamentos de alto valor. Ao longo do tempo, grandes saltos tecnológicos mudaram os processos, os produtos e o modo de organizar o trabalho. Esses saltos são chamados de ``revoluções industriais'' \cite{LASI_INDUSTRY_40}.
```

Por quê: "dedicado à produção... apoiado em" e "redefiniram ... formas de organização" ficam mais diretos. Troquei "alto valor agregado" por "alto valor", que perde o sentido econômico exato. As aspas do original usam `"`, a sugestão usa a convenção do CLAUDE.md (`` e '').

### 7. Revoluções industriais (linha 7)

Atual:

```latex
\par A Figura~\ref{fig:revolucoes_industriais} resume essa linha do tempo. Na primeira fase, destaca-se a mecanização da produção, na segunda, a difusão da energia elétrica e a produção em massa baseada no modelo Fordista e na terceira fase, a digitalização \cite{LASI_INDUSTRY_40}. Foi nessa fase que a introdução da tecnologia da informação, da automação e da eletrônica impulsionou o início da automação dos processos produtivos. Surgiram então os controladores lógicos programáveis (CLPs), os Controladores Numéricos Computadorizados (CNCs) e os robôs \cite{PISCHING2017}. Essas tecnologias tornaram-se essenciais para as indústrias que buscam maior eficiência e qualidade com menores custos e prazos. Sua adoção contribui diretamente para o aumento da produtividade \cite{BIGHETI2020}.
```

Sugestão:

```latex
\par A Figura~\ref{fig:revolucoes_industriais} resume essa linha do tempo. Na primeira fase, o destaque é a mecanização da produção. Na segunda, são a energia elétrica e a produção em massa do modelo fordista. Na terceira, é a digitalização \cite{LASI_INDUSTRY_40}. Nessa terceira fase, a tecnologia da informação, a automação e a eletrônica deram início à automação dos processos produtivos. Surgiram então os controladores lógicos programáveis (CLPs), os controladores numéricos computadorizados (CNCs) e os robôs \cite{PISCHING2017}. Essas tecnologias se tornaram essenciais para as indústrias que buscam mais eficiência e qualidade, com menos custo e menos prazo. Seu uso aumenta diretamente a produtividade \cite{BIGHETI2020}.
```

Por quê: a frase das três fases era uma só, com vírgulas demais, e "Foi nessa fase que ... impulsionou o início" tinha duas ideias de início. Minúsculas em "fordista" e "controladores numéricos computadorizados" seguem o uso comum. "Contribui diretamente para o aumento" virou "aumenta diretamente", um pouco mais forte, confira se a fonte sustenta.

### 8. Quarta fase (linha 20)

Atual:

```latex
\par Atualmente, vive-se a quarta fase, a chamada Indústria 4.0, baseada na indústria inteligente, na \sigla{iot} e nos \sigla{cps} \cite{BIGHETI2020}. Nesses sistemas, subsistemas computacionais cooperam entre si e permanecem integrados ao mundo físico e a seus processos, o que permite medir, controlar e analisar dados em tempo real por meio da rede, inclusive pela Internet \cite{MONOSTORI2016_CPS_MANUFACTURING}.
```

Sugestão:

```latex
\par Hoje vivemos a quarta fase, a chamada Indústria 4.0, baseada na indústria inteligente, na \sigla{iot} e nos \sigla{cps} \cite{BIGHETI2020}. Nesses sistemas, partes computacionais trabalham juntas e ligadas ao mundo físico e a seus processos. Isso permite medir, controlar e analisar dados em tempo real pela rede, inclusive pela Internet \cite{MONOSTORI2016_CPS_MANUFACTURING}.
```

Por quê: "subsistemas computacionais cooperam entre si e permanecem integrados" é abstrato, e a segunda frase carregava duas ideias. Se preferir manter o impessoal, "Atualmente, vive-se" também funciona.

### 9. Fecho da contextualização (linha 54)

Atual:

```latex
\par Nesse cenário, este trabalho propõe, implementa e valida um sistema supervisório web orientado a serviços, que disponibiliza pelo navegador funcionalidades antes restritas ao ambiente físico da planta \cite{COLOMBO2014_STATE_ART_AUTOMATION}. O sistema é executado em contêineres num servidor, e a mesma arquitetura poderia ser levada a um provedor de nuvem. Alinhada à Indústria 4.0 \cite{BIGHETI2020}, a proposta torna o monitoramento e a supervisão acessíveis e compartilháveis entre sistemas e usuários.
```

Sugestão:

```latex
\par Nesse cenário, este trabalho propõe, implementa e valida um sistema supervisório web, dividido em serviços. Pelo navegador, ele oferece funções que antes só existiam na planta \cite{COLOMBO2014_STATE_ART_AUTOMATION}. O sistema roda em contêineres num servidor, e a mesma arquitetura poderia ser levada a um provedor de nuvem. Seguindo a Indústria 4.0 \cite{BIGHETI2020}, a proposta deixa o monitoramento e a supervisão ao alcance de outros sistemas e de mais usuários.
```

Por quê: "disponibiliza funcionalidades antes restritas ao ambiente físico" e "acessíveis e compartilháveis entre sistemas e usuários" ficam mais diretas. "Compartilháveis" virou "ao alcance de outros sistemas e de mais usuários", mesma ideia.

---

## Introdução, Justificativa (`13_2_Justificativa.tex`)

### 10. Supervisão remota (linha 3)

Atual:

```latex
\par Os processos industriais geram grande volume de dados, apresentados ao operador por um software de supervisão, por meio de uma interface homem-máquina (\sigla{ihm}), que converte leituras de campo em telas, tendências e alarmes \cite{ZANGHI2019_SCADA_CONCEITOS}. Com computadores mais capazes, protocolos melhores e a integração com a Internet, consolidou-se a supervisão remota. Em setores como saneamento, transporte e energia, com instalações espalhadas, ganham peso a telemetria e o controle à distância. Uma arquitetura típica de \sigla{scada} integra os equipamentos de campo, como CLPs, aos módulos de monitoramento e controle e centraliza a visualização para o operador \cite{AHMED2011_EFFICIENT_WEB_SCADA}.
```

Sugestão:

```latex
\par Os processos industriais geram muitos dados. Um software de supervisão os apresenta ao operador por meio de uma interface homem-máquina (\sigla{ihm}), que transforma as leituras de campo em telas, gráficos de tendência e alarmes \cite{ZANGHI2019_SCADA_CONCEITOS}. Com computadores mais capazes, protocolos melhores e a ligação com a Internet, passou a ser comum supervisionar à distância. Em setores como saneamento, transporte e energia, com instalações espalhadas, a telemetria (medição à distância) e o controle remoto ganham peso. Um \sigla{scada} típico liga os equipamentos de campo, como CLPs, aos módulos de monitoramento e controle e reúne a visualização em um só lugar para o operador \cite{AHMED2011_EFFICIENT_WEB_SCADA}.
```

Por quê: a primeira frase tinha três "por meio de/ que" encadeados, "consolidou-se" e "integra ... centraliza" são mais abstratos que o necessário, e "telemetria" ganhou uma explicação curta.

### 11. Custo dos convencionais (linha 5)

Atual:

```latex
\par Os supervisórios convencionais costumam exigir licenças proprietárias, hardware dedicado e infraestrutura local, o que os mantém fora do alcance de pequenas e médias empresas \cite{PHUYAL2020_COST_EFFICIENT_SCADA}. Oferecer a supervisão como um serviço web, acessado pelo navegador, reduz esse investimento e amplia o monitoramento a instalações dispersas, com menos deslocamentos e resposta mais ágil a ocorrências \cite{AHMED2011_EFFICIENT_WEB_SCADA}.
```

Sugestão:

```latex
\par Os supervisórios convencionais costumam exigir licenças proprietárias, equipamentos dedicados e estrutura local, o que os deixa fora do alcance de pequenas e médias empresas \cite{PHUYAL2020_COST_EFFICIENT_SCADA}. Oferecer a supervisão como um serviço web, acessado pelo navegador, reduz esse investimento. Também permite monitorar instalações distantes, com menos viagens e resposta mais rápida a ocorrências \cite{AHMED2011_EFFICIENT_WEB_SCADA}.
```

Por quê: divide a segunda frase em duas e troca "hardware", "dispersas" e "deslocamentos" por palavras mais comuns.

### 12. Nuvem (linha 7)

Atual:

```latex
\par A computação em nuvem oferece armazenamento, processamento, bancos de dados e aplicações como serviços remotos \cite{PEDROSA2011_COMPUTACAO_NUVEM}, com capacidade sob demanda, o que reduz o investimento local \cite{HENRIQUES2010_CLOUD_COMPUTING_TCC}. A conectividade, em especial sem fio, permite que dispositivos e sistemas ciber-físicos troquem dados com a nuvem \cite{STANKOVIC2014_IOT_RESEARCH_DIRECTIONS,MONOSTORI2016_CPS_MANUFACTURING}.
```

Sugestão:

```latex
\par A computação em nuvem oferece armazenamento, processamento, bancos de dados e aplicações como serviços acessados à distância \cite{PEDROSA2011_COMPUTACAO_NUVEM}. A capacidade é usada conforme a necessidade, o que reduz o investimento local \cite{HENRIQUES2010_CLOUD_COMPUTING_TCC}. Com a conectividade, em especial a sem fio, dispositivos e sistemas ciber-físicos trocam dados com a nuvem \cite{STANKOVIC2014_IOT_RESEARCH_DIRECTIONS,MONOSTORI2016_CPS_MANUFACTURING}.
```

Por quê: "sob demanda" e "serviços remotos" viram palavras do dia a dia, e cada citação ficou na oração que sustenta.

### 13. Nuvem como possibilidade (linha 9)

Atual:

```latex
\par Neste trabalho, a nuvem é uma possibilidade de aplicação, e não a forma de implantação adotada. O sistema roda em contêineres num servidor, o que dispensa contratos de hospedagem e mantém baixo o custo, requisito central para pequenas e médias empresas. Como cada serviço é um contêiner independente, a solução poderia ir a um provedor de nuvem sem alteração de código \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES,NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}, e o acesso pelo navegador dispensa instalar programas nos computadores dos usuários.
```

Sugestão:

```latex
\par Neste trabalho, a nuvem é uma possibilidade, e não o que foi adotado. O sistema roda em contêineres num servidor, o que dispensa contratos de hospedagem e mantém o custo baixo, algo essencial para pequenas e médias empresas. Como cada serviço é um contêiner independente, a solução poderia ir para um provedor de nuvem sem mudar o código \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES,NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}. Além disso, como o acesso é pelo navegador, não é preciso instalar programas nos computadores dos usuários.
```

Por quê: "forma de implantação adotada" e "requisito central" são mais duros que o necessário, e a última oração virou frase própria.

---

## Introdução, Objetivos (`13_3_Objetivos.tex`)

### 14. Frase de abertura (linha 3)

Atual:

```latex
\par A seguir são apresentados os objetivos gerais e específicos deste Trabalho de Conclusão de Curso.
```

Sugestão:

```latex
\par A seguir estão o objetivo geral e os objetivos específicos deste Trabalho de Conclusão de Curso.
```

Por quê: há um objetivo geral só, e a voz passiva sai.

### 15. Objetivo geral (linha 7)

Atual:

```latex
\par Desenvolver e validar um sistema supervisório web com arquitetura orientada a serviços em contêineres, capaz de apoiar o monitoramento, o comando e a supervisão de processos industriais, com serviços bem definidos, reutilizáveis e acessíveis pelo navegador.
```

Sugestão:

```latex
\par Desenvolver e validar um sistema supervisório web, dividido em serviços que rodam em contêineres, para monitorar, comandar e supervisionar processos industriais. Cada serviço deve ter uma função bem definida e poder ser reutilizado, e o acesso deve ser feito pelo navegador.
```

Por quê: a frase tinha uma cadeia de "com ... capaz de ... com ...". Mesma ideia, em duas frases.

### 16. Objetivo específico 2 (linha 13)

Atual:

```latex
    \item Especificar os requisitos funcionais e não funcionais e projetar a arquitetura de serviços em contêineres, com a separação entre interface web, API, serviços de aquisição, filas de trabalho e armazenamento de dados.
```

Sugestão:

```latex
    \item Definir o que o sistema deve fazer (requisitos funcionais) e como deve se comportar (requisitos não funcionais), e projetar a arquitetura em serviços e contêineres, que separa a interface web, a API, a aquisição de dados, as filas de trabalho e o armazenamento.
```

Por quê: explica os dois tipos de requisito para o leigo. As explicações entre parênteses são as definições usuais. "Serviços de aquisição" virou "a aquisição de dados".

### 17. Objetivo específico 3 (linha 14)

Atual:

```latex
    \item Implementar a aquisição de dados via Modbus, com agendamento das leituras e escritas, e o registro do valor atual e do histórico das variáveis.
```

Sugestão:

```latex
    \item Implementar a coleta de dados pelo protocolo Modbus, com leituras e escritas agendadas, e o registro do valor atual e do histórico de cada variável.
```

Por quê: "agendamento das leituras e escritas" e "via" ficam mais diretos.

### 18. Objetivo específico 7 (linha 18)

Atual:

```latex
    \item Validar o sistema em uma bancada de teste com um controlador lógico programável (CLP) e um inversor de frequência, e medir seu desempenho frente ao volume de dados esperado.
```

Sugestão:

```latex
    \item Validar o sistema em uma bancada de teste com um controlador lógico programável (CLP) e um inversor de frequência, e medir seu desempenho com o volume de dados esperado.
```

Por quê: só troca "frente ao" por "com o". Pode deixar como está se preferir, a frase já é clara.

---

## Introdução, Metodologia (`13_4_Estrutura.tex`)

### 19. Revisão bibliográfica (linha 5)

Atual:

```latex
\par A revisão bibliográfica abrange automação e informática industrial, sistemas supervisórios (\sigla{scada}), Indústria~4.0, \sigla{iot} e \sigla{cps}, além de \sigla{soa}, contêineres, computação em nuvem, bancos de dados, filas de trabalho e o protocolo Modbus, apresentados no Capítulo~2.
```

Sugestão:

```latex
\par O Capítulo~2 traz a revisão bibliográfica, que trata de automação e informática industrial, sistemas supervisórios (\sigla{scada}), Indústria~4.0, \sigla{iot} e \sigla{cps}, além de \sigla{soa}, contêineres, computação em nuvem, bancos de dados, filas de trabalho e o protocolo Modbus.
```

Por quê: começa pelo capítulo, como os parágrafos seguintes, e a lista deixa de ficar presa a um "apresentados" no fim.

### 20. Capítulo 3 (linha 7)

Atual:

```latex
\par O Capítulo~3 especifica os requisitos funcionais e não funcionais e a arquitetura, com a divisão em serviços em contêineres e a separação entre interface, API, aquisição e armazenamento.
```

Sugestão:

```latex
\par O Capítulo~3 define os requisitos funcionais e não funcionais e apresenta a arquitetura, dividida em serviços em contêineres que separam interface, API, aquisição e armazenamento.
```

Por quê: tira "com a divisão ... e a separação", duas nominalizações seguidas.

### 21. Capítulos de validação e conclusão (linha 13)

Atual:

```latex
\par Na validação, o Capítulo~6 descreve a bancada de teste, com um \sigla{clp} e um inversor de frequência, e o Capítulo~7 apresenta os resultados, as medições de desempenho e a qualidade do software, confrontados com os requisitos. O Capítulo~8 reúne as conclusões e as perspectivas de evolução.
```

Sugestão:

```latex
\par Para a validação, o Capítulo~6 descreve a bancada de teste, com um \sigla{clp} e um inversor de frequência. O Capítulo~7 apresenta os resultados, as medições de desempenho e a qualidade do software, e os compara com os requisitos. O Capítulo~8 reúne as conclusões e as perspectivas de evolução.
```

Por quê: "confrontados com" pendurado no fim vira "os compara com", e a frase longa é dividida.

---

## Conclusão (`15_Conclusão.tex`)

### 22. Abertura (linha 4)

Atual:

```latex
\par Os supervisórios convencionais exigem licenças proprietárias, equipamentos dedicados e instalação especializada, o que os afasta de pequenas e médias empresas \cite{ZANGHI2019_SCADA_CONCEITOS,PHUYAL2020_COST_EFFICIENT_SCADA}. A resposta proposta foi um supervisório web orientado a serviços, em contêineres, acessado pelo navegador. O objetivo geral foi atendido na medida descrita a seguir: o sistema foi construído por inteiro, executa em um único servidor e foi exercitado por testes automatizados, por campanhas de carga e por ensaios com equipamentos reais.
```

Sugestão:

```latex
\par Os supervisórios convencionais exigem licenças proprietárias, equipamentos dedicados e instalação especializada, o que os afasta de pequenas e médias empresas \cite{ZANGHI2019_SCADA_CONCEITOS,PHUYAL2020_COST_EFFICIENT_SCADA}. A resposta proposta foi um supervisório web, dividido em serviços, que roda em contêineres e é acessado pelo navegador. O objetivo geral foi atendido nos limites descritos a seguir. O sistema foi construído por inteiro, roda em um único servidor e foi posto à prova por testes automatizados, testes de carga e ensaios com equipamentos reais.
```

Por quê: "atendido na medida descrita a seguir: ..." misturava resultado e lista. Veja a observação (a) no topo sobre "ensaios com equipamentos reais".

### 23. Segundo objetivo (linha 10)

Atual:

```latex
\par O segundo era especificar os requisitos e projetar a arquitetura. O Capítulo~3 fixou dezoito requisitos funcionais e doze não funcionais e mostrou como cada módulo de um supervisório é atendido pela interface web, pela \sigla{api}, pelos \emph{workers}, pela aquisição, pelo motor de scripts, pelo PostgreSQL e pelo Redis.
```

Sugestão:

```latex
\par O segundo era definir os requisitos e projetar a arquitetura. O Capítulo~3 definiu dezoito requisitos funcionais e doze não funcionais. Também mostrou qual parte do sistema cumpre cada módulo de um supervisório: a interface web, a \sigla{api}, os \emph{workers}, a aquisição, o motor de scripts, o PostgreSQL ou o Redis.
```

Por quê: a frase tinha uma lista de sete "pelo/pela" ligada a "atendido". Fica mais direta. "Fixou" virou "definiu".

### 24. Terceiro objetivo (linha 12)

Atual:

```latex
\par O terceiro era implementar a aquisição via Modbus, com o registro do valor atual e do histórico. O Capítulo~4 descreveu o caminho do dado, e no Capítulo~7 o ensaio de capacidade com o simulador Modbus sustentou até 9.750 tags a 30 s por réplica, com a gravação do histórico em cerca de 9.400 linhas por segundo.
```

Sugestão:

```latex
\par O terceiro era implementar a coleta de dados pelo Modbus, com o registro do valor atual e do histórico. O Capítulo~4 descreveu o caminho do dado. No ensaio de capacidade do Capítulo~7, feito com um simulador Modbus, o sistema leu até 9.750 tags a cada 30 s por réplica e gravou o histórico a cerca de 9.400 linhas por segundo.
```

Por quê: "sustentou até 9.750 tags a 30 s ... com a gravação ... em" era difícil de ler. "Leu" no lugar de "sustentou": confira se "leu" cobre o que o ensaio mediu.

### 25. Quarto objetivo (linha 14)

Atual:

```latex
\par O quarto era a interface de supervisão, apresentada no Capítulo~5, com um conjunto único de componentes, guiada pelos princípios de interfaces para automação \cite{ISA101_2015_HMI,ELIPSE_IHM_ALTA_PERFORMANCE}. Os 8 ms, no percentil 95, para aplicar um ciclo de valores no sinótico indicam que ela acompanha o processo sem sobrecarregar o navegador.
```

Sugestão:

```latex
\par O quarto era a interface de supervisão, apresentada no Capítulo~5. Ela usa um conjunto único de componentes e segue princípios de interfaces para automação \cite{ISA101_2015_HMI,ELIPSE_IHM_ALTA_PERFORMANCE}. Em 95\,\% das medidas, aplicar um ciclo de valores no sinótico levou até 8 ms, o que indica que a interface acompanha o processo sem sobrecarregar o navegador.
```

Por quê: "percentil 95" vira palavras comuns e "guiada por" vira "segue".

### 26. Quinto objetivo (linha 16)

Atual:

```latex
\par O quinto era o comando em quatro fases, implementado com trava por tag, idempotência e auditoria, com o sucesso definido pela resposta do controlador. Os testes automatizados exercitam a cadeia, mas a validação com o equipamento real depende dos ensaios de bancada, e por isso o requisito está parcialmente atendido.
```

Sugestão:

```latex
\par O quinto era o comando em quatro fases. Ele foi implementado com trava por tag, proteção contra o envio repetido do mesmo comando (idempotência) e auditoria, e só conta como bem-sucedido quando o controlador responde. Os testes automatizados exercitam toda a cadeia, mas a validação com o equipamento real depende dos ensaios de bancada. Por isso, o requisito está parcialmente atendido.
```

Por quê: "idempotência" ganha explicação e a frase de três ideias é dividida. "Trava por tag" fica como no texto, pois o Cap. 4 explica; aqui o leigo pode não saber, avalie acrescentar "(um comando por vez em cada tag)" se o Cap. 4 confirmar.

### 27. Sexto objetivo (linha 18)

Atual:

```latex
\par O sexto era o controle de acesso, com quatro cargos fixos e grupos de permissões. As senhas são guardadas apenas como resumo irreversível, com custo de cerca de 24 ms por verificação, e o controle de acesso foi coberto por testes e por um teste de segurança de caixa preta \cite{OWASP_CHEATSHEETS}.
```

Sugestão:

```latex
\par O sexto era o controle de acesso, com quatro cargos fixos e grupos de permissões. As senhas são guardadas só na forma de um resumo que não permite recuperar a senha original, e conferir uma senha leva cerca de 24 ms. O controle de acesso foi coberto por testes e por um teste de segurança de caixa preta \cite{OWASP_CHEATSHEETS}, em que o sistema é atacado sem acesso ao código.
```

Por quê: "resumo irreversível" e "custo de ... por verificação" são jargão. A explicação da caixa preta é a definição usual. O `\cite` está onde estava, ao fim da oração sobre o teste.

### 28. Sétimo objetivo (linha 20)

Atual:

```latex
\par O sétimo era validar o sistema em uma bancada com um \sigla{clp} e um inversor de frequência. O Capítulo~6 descreveu a bancada, com um \sigla{clp} TM221 e um inversor ATV320, e o roteiro de seis ensaios, e o Capítulo~7 mostrou que a arquitetura cumpre o proposto na escala medida. Os ensaios de bancada ainda dependem da execução pelo autor.
```

Sugestão:

```latex
\par O sétimo era validar o sistema em uma bancada com um \sigla{clp} e um inversor de frequência. O Capítulo~6 descreveu a bancada, com um \sigla{clp} TM221 e um inversor ATV320, e o roteiro de seis ensaios. O Capítulo~7 mostrou que a arquitetura cumpre o que foi proposto, na escala medida. Os ensaios de bancada ainda precisam ser executados pelo autor.
```

Por quê: divide a frase com dois "e" encadeados e troca "dependem da execução pelo autor" por um verbo direto.

### 29. Contribuições 1 e 2 (linha 24)

Atual:

```latex
\par A primeira contribuição é um supervisório completo, de código próprio, executável em um computador comum. A segunda é o comando em quatro fases com garantias verificáveis por teste.
```

Sugestão:

```latex
\par A primeira contribuição é um supervisório completo, de código próprio, que roda em um computador comum. A segunda é o comando em quatro fases, cujas garantias podem ser conferidas por teste.
```

Por quê: troca "executável" e "verificáveis" por formas mais naturais.

### 30. Contribuições 3 e 4 (linha 26)

Atual:

```latex
\par A terceira é a execução isolada do código do usuário, em um interpretador sem rede, arquivos ou segredos \cite{HAAS2017_WEBASSEMBLY}. A quarta é a documentação quantitativa do sistema em recursos modestos, com tetos por réplica e análise dos gargalos, base para dimensionar uma implantação.
```

Sugestão:

```latex
\par A terceira é a execução isolada do código escrito pelo usuário, em um ambiente sem acesso à rede, a arquivos ou a senhas e chaves \cite{HAAS2017_WEBASSEMBLY}. A quarta é a medição documentada do sistema em recursos modestos, com o limite que cada réplica suporta e a análise dos gargalos. Esses números servem de base para dimensionar uma instalação.
```

Por quê: "interpretador" e "segredos" ficam em palavras comuns. "Documentação quantitativa" vira "medição documentada", "tetos" vira "limite que cada réplica suporta" e a última oração solta vira frase. "Implantação" virou "instalação" (mesmo sentido aqui). "Segredos" foi para "senhas e chaves", um pouco mais específico.

### 31. Limitações, medidas (linha 30)

Atual:

```latex
\par As medidas vêm de um único computador compartilhado e variaram até 50\,\% entre execuções, sendo ordens de grandeza e não garantias. A carga veio de simuladores rápidos, e modems e redes industriais reduzem o teto prático. O efeito de réplicas não foi medido, e a redundância entre servidores não foi implantada.
```

Sugestão:

```latex
\par As medidas vêm de um único computador compartilhado e variaram até 50\,\% entre execuções. Por isso, valem como ordem de grandeza, e não como garantia. A carga veio de simuladores rápidos, e modems e redes industriais reduzem o máximo que se alcança na prática. O efeito de usar várias réplicas não foi medido, e a redundância entre servidores não foi implantada.
```

Por quê: o gerúndio "sendo ordens de grandeza" fica como frase própria, e "teto prático" ganha palavras comuns.

### 32. Limitações, requisitos parciais (linha 32)

Atual:

```latex
\par Seis requisitos estão parcialmente atendidos. RF07, RF09, RF17 e RNF01 dependem dos ensaios com a bancada, e RNF02 e RNF03 dependem de medidas com mais de uma réplica e de ensaio de queda de réplica.
```

Sugestão:

```latex
\par Seis requisitos estão parcialmente atendidos. RF07, RF09, RF17 e RNF01 dependem dos ensaios com a bancada. RNF02 e RNF03 dependem de medidas com mais de uma réplica e de um ensaio em que uma réplica é desligada.
```

Por quê: divide a frase e troca "ensaio de queda de réplica" pela descrição. Se "queda" no texto significa falha e não desligamento de propósito, ajuste.

### 33. Limitações, pontos a melhorar (linha 34)

Atual:

```latex
\par A capacidade do contêiner de \emph{workers}, abaixo do piso planejado, permanece como ponto a melhorar, e parte da avaliação de qualidade se apoia em contagens de arquivos de teste, e não em cobertura medida de ponta a ponta.
```

Sugestão:

```latex
\par A capacidade do contêiner dos \emph{workers} ficou abaixo do mínimo planejado e continua como ponto a melhorar. Além disso, parte da avaliação de qualidade se apoia na contagem de arquivos de teste, e não na cobertura medida de ponta a ponta.
```

Por quê: duas ideias na mesma frase, agora separadas. "Piso planejado" virou "mínimo planejado".

### 34. Trabalhos futuros, caminho principal (linha 40)

Atual:

```latex
\par O principal caminho é levar o sistema a um provedor de nuvem e a mais de um servidor, sem alterar o código, o que permitiria medir o efeito das réplicas e tolerar a queda do servidor que hoje guarda o banco e o Redis, avaliada com injeção de falhas.
```

Sugestão:

```latex
\par O principal caminho é levar o sistema a um provedor de nuvem e a mais de um servidor, sem alterar o código. Isso permitiria medir o efeito das réplicas e manter o sistema funcionando se cair o servidor que hoje guarda o banco e o Redis. Essa tolerância seria avaliada derrubando servidores de propósito (injeção de falhas).
```

Por quê: "tolerar a queda ... avaliada com injeção de falhas" tinha três ideias em uma oração. Mantém o conteúdo, com explicação do termo.

### 35. Trabalhos futuros, outras evoluções (linha 43)

Atual:

```latex
\par A arquitetura da aquisição também abre espaço para outros protocolos industriais. Ficam ainda como evolução relatórios, notificações por canais externos, restrição de acesso por planta, um aplicativo móvel e os ensaios de bancada com cargas mais variadas e redes de campo.
```

Sugestão:

```latex
\par A arquitetura da aquisição também permite incluir outros protocolos industriais. Outras evoluções possíveis são relatórios, notificações por canais externos, limite de acesso por planta (cada usuário veria só determinadas instalações), um aplicativo móvel e ensaios de bancada com cargas mais variadas e redes de campo.
```

Por quê: "abre espaço" e "ficam como evolução" viram verbos diretos, e "planta" ganha uma explicação curta. Há duas linhas em branco antes deste parágrafo (linhas 41 e 42), que podem ser reduzidas a uma.

### 36. Fechamento (linha 45)

Atual:

```latex
\par O trabalho entrega uma base funcional e verificável para um supervisório web acessível a empresas que não podem arcar com a solução tradicional, e a arquitetura em contêineres permite evoluí-la sem reescrever o que já foi construído.
```

Sugestão:

```latex
\par O trabalho entrega uma base que funciona e pode ser verificada, para um supervisório web ao alcance de empresas que não podem pagar a solução tradicional. A arquitetura em contêineres permite evoluir essa base sem reescrever o que já foi construído.
```

Por quê: "funcional e verificável" e "arcar com" ficam mais comuns, e a frase longa é dividida em duas.

---

## Sem sugestão (já claros)

Metodologia: parágrafos das linhas 3, 9 e 11 de `13_4_Estrutura.tex`. Objetivos específicos 1, 4, 5 e 6 de `13_3_Objetivos.tex` (o 1 usa "embasar", aceitável). Conclusão: parágrafo do primeiro objetivo (linha 8) e parágrafo "Fechar esta seção" (linha 36) é `\todo`, não revisado.
