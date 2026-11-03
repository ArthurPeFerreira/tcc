# Revisão de linguagem, capítulo 3 (14_2_Cap.tex, Arquitetura e Requisitos do Sistema)

O capítulo é tecnicamente claro, mas o que mais pesa é a densidade: muitos parágrafos juntam três ou quatro ideias numa frase só, com orações encadeadas por vírgula ("..., que ..., e ..., de modo que ..."). Os pontos que mais pedem ajuda são a arquitetura (visão geral, Moleculer e filas), os serviços Worker, Aquisição e Runtime, e as seções Segurança e Redundância. Há também termos técnicos que aparecem sem explicação na primeira vez (fila, réplica, banda morta, migração, camadas). Total: 47 sugestões de reescrita e 1 trecho marcado como "avaliar corte". Nenhuma sugestão acrescenta afirmação nova, mas onde a simplificação perde algo isso está dito no "Por quê".

Nota geral: as tabelas de requisitos (RF e RNF) estão em linguagem de especificação e só tiveram ajustes pontuais (sugestões 5 e 6) e a célula da tabela de tecnologias (sugestão 12). Linhas citadas são aproximadas.

---

## Abertura do capítulo (linha 4)

### 1
**Atual:** Este capítulo especifica os requisitos da solução e apresenta a arquitetura que os atende: os requisitos funcionais e não funcionais, a arquitetura em contêineres, a validação de cada pilar do \sigla{scada}, os serviços e o modelo de dados. O caminho de cada dado e de cada comando é tratado no capítulo seguinte.

**Sugestão:**
```latex
\par Este capítulo mostra o que o sistema precisa fazer e como ele foi montado para isso. Apresenta os requisitos, a arquitetura em contêineres, a forma como a arquitetura atende a cada pilar do \sigla{scada}, os serviços e o modelo de dados. O caminho de cada dado e de cada comando fica para o capítulo seguinte.
```
**Por quê:** troca "especifica" e "validação" por verbos do dia a dia e tira a repetição de "requisitos".

## Requisitos (linhas 8 a 12 e 69)

### 2
**Atual:** Os requisitos funcionais descrevem o que a aplicação deve fazer, e os não funcionais estabelecem as qualidades e as restrições sob as quais ela opera. Boa parte deles deriva dos seis pilares de um sistema \sigla{scada}: aquisição e registro de dados, sincronismo de tempo, níveis de acesso, comando e controle, escalabilidade e redundância \cite{ZANGHI2019_SCADA_CONCEITOS}. Somam-se os próprios de uma solução web orientada a serviços, como o cadastro das instalações, os valores calculados, a visualização e os alarmes \cite{AHMED2011_EFFICIENT_WEB_SCADA}.

**Sugestão:**
```latex
\par Os requisitos funcionais dizem o que o sistema deve fazer. Os não funcionais dizem como ele deve se comportar, por exemplo em desempenho e em segurança. Boa parte deles vem dos seis pilares de um sistema \sigla{scada}: aquisição e registro de dados, sincronismo de tempo, níveis de acesso, comando e controle, escalabilidade e redundância \cite{ZANGHI2019_SCADA_CONCEITOS}. Outros vêm de ser uma solução web dividida em serviços, como o cadastro das instalações, os valores calculados, a visualização e os alarmes \cite{AHMED2011_EFFICIENT_WEB_SCADA}.
```
**Por quê:** "estabelecem as qualidades e as restrições sob as quais ela opera" e "Somam-se os próprios de" são abstratos. O exemplo "desempenho e segurança" só ilustra as categorias da tabela seguinte.

### 3
**Atual:** A Tabela~\ref{tab:requisitos_funcionais} apresenta os requisitos funcionais do sistema, com a indicação do pilar do \sigla{scada} ou da funcionalidade complementar que os origina.

**Sugestão:**
```latex
\par A Tabela~\ref{tab:requisitos_funcionais} lista os requisitos funcionais e indica, para cada um, o pilar do \sigla{scada} ou a funcionalidade complementar de onde ele vem.
```
**Por quê:** "os origina" soa pesado e a frase tinha dois complementos empilhados.

### 4
**Atual:** A Tabela~\ref{tab:requisitos_nao_funcionais} apresenta os requisitos não funcionais, agrupados por categoria de atributo de qualidade: desempenho, escalabilidade, disponibilidade, segurança, interoperabilidade, manutenibilidade, portabilidade e usabilidade.

**Sugestão:**
```latex
\par A Tabela~\ref{tab:requisitos_nao_funcionais} lista os requisitos não funcionais, agrupados por categoria: desempenho, escalabilidade, disponibilidade, segurança, interoperabilidade, manutenibilidade, portabilidade e usabilidade.
```
**Por quê:** "categoria de atributo de qualidade" é jargão de engenharia de software que não acrescenta nada aqui.

### 5 (célula da tabela, RNF03)
**Atual:** Os serviços possuem réplicas e filas que sobrevivem a falhas, e a memória de acesso rápido é reconstruída a partir do banco quando volta vazia, de modo que o sistema perde funções sem mostrar dado incorreto (degradação suave)

**Sugestão:**
```latex
Os serviços têm réplicas e filas que resistem a falhas. Se a memória de acesso rápido volta vazia, ela é refeita a partir do banco. Em caso de falha, o sistema perde funções, mas não mostra dado incorreto (degradação suave)
```
**Por quê:** três ideias numa frase só, ligadas por "de modo que". Se preferir manter a célula numa frase única por causa do formato da tabela, pode-se trocar só "possuem" por "têm" e "sobrevivem a" por "resistem a".

### 6 (célula da tabela, RNF08)
**Atual:** A comunicação com medidores e CLPs de fabricantes distintos se dá apenas por configuração Modbus

**Sugestão:**
```latex
A comunicação com medidores e CLPs de fabricantes diferentes é feita apenas por configuração Modbus
```
**Por quê:** "se dá" e "distintos" são mais formais do que o necessário.

## Arquitetura (linhas 114 a 158)

### 7
**Atual:** O sistema organiza-se em serviços executados em contêineres \emph{Docker} num servidor, conforme a Figura~\ref{fig:arquitetura_sistema}. O navegador do operador chega ao servidor por duas vias: a das telas, atendida pela aplicação web, e a dos dados e comandos, atendida pela \sigla{api}. Os dispositivos de campo ficam fora do servidor e só o serviço de aquisição fala com eles.

**Sugestão:**
```latex
\par O sistema é dividido em serviços, e cada um roda em seu contêiner \emph{Docker} num servidor, como mostra a Figura~\ref{fig:arquitetura_sistema}. O navegador do operador chega ao servidor por dois caminhos. Um busca as telas, e a aplicação web responde. O outro envia pedidos de dados e comandos, e a \sigla{api} responde. Os dispositivos de campo ficam fora do servidor, e só o serviço de aquisição fala com eles.
```
**Por quê:** "duas vias: a das telas, atendida por..., e a dos dados..., atendida por..." tem construção elíptica difícil de seguir. Separar em frases curtas deixa claro quem faz o quê.

### 8
**Atual:** São cinco serviços de aplicação e dois de dados. A aplicação web, em Next.js, entrega apenas as telas \cite{NEXTJS_DOCS}. A \sigla{api}, em Fastify, concentra as regras de funcionamento, o cadastro, a autenticação e o acesso ao banco. O \emph{worker} retira tarefas de filas e as executa em segundo plano, como a gravação do histórico, a avaliação de eventos e o cálculo de valores derivados. A aquisição reúne o agendador, que decide o instante de cada leitura, e o cliente Modbus, que fala com o dispositivo. O \emph{runtime} de scripts executa, de forma isolada, o JavaScript escrito pelos usuários. O PostgreSQL guarda o que precisa durar, e o Redis guarda o que precisa ser rápido.

**Sugestão:**
```latex
\par São cinco serviços de aplicação e dois de dados. A aplicação web, em Next.js, entrega apenas as telas \cite{NEXTJS_DOCS}. A \sigla{api}, em Fastify, reúne as regras do sistema, o cadastro, o \emph{login} e o acesso ao banco. O \emph{worker} pega tarefas de filas, que são listas de tarefas à espera, e as executa em segundo plano, como gravar o histórico, avaliar eventos e calcular valores derivados. A aquisição tem duas partes: o agendador, que decide a hora de cada leitura, e o cliente Modbus, que fala com o dispositivo. O \emph{runtime} de scripts executa, de forma isolada, o JavaScript escrito pelos usuários. O PostgreSQL guarda o que precisa durar, e o Redis guarda o que precisa ser rápido.
```
**Por quê:** "fila" é usada aqui pela primeira vez neste capítulo sem explicação. "concentra as regras de funcionamento" e "autenticação" ficam mais diretos assim. A última frase já estava boa e foi mantida.

### 9
**Atual:** Os serviços se comunicam pelo Moleculer, um \emph{framework} de microsserviços que descobre os serviços disponíveis e distribui as chamadas entre eles \cite{MOLECULER_DOCS}, usando o Redis como transporte. O trabalho que pode ser feito depois e repetido em caso de falha passa por filas, também no Redis. Com isso, cada serviço fica pequeno e é possível criar réplicas sem que os demais precisem saber \cite{BIGHETI2020}. A arquitetura segue o modelo de microsserviços apontado pela literatura para os supervisórios modernos \cite{YADAV2020_SCADA_ARCHITECTURE_REVIEW}, e os contêineres facilitam a instalação e a replicação \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}.

**Sugestão:**
```latex
\par Os serviços conversam entre si pelo Moleculer, um \emph{framework} de microsserviços que encontra os serviços disponíveis e reparte os pedidos entre eles \cite{MOLECULER_DOCS}. As mensagens trafegam pelo Redis. O trabalho que pode esperar e ser repetido em caso de falha passa por filas, também no Redis. Com isso, cada serviço fica pequeno, e é possível criar cópias (réplicas) de um serviço sem que os outros precisem saber \cite{BIGHETI2020}. Esse modelo de microsserviços é o apontado pela literatura para os supervisórios modernos \cite{YADAV2020_SCADA_ARCHITECTURE_REVIEW}, e os contêineres facilitam a instalação e a cópia dos serviços \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}.
```
**Por quê:** "réplica" só é explicada bem mais adiante (em Escalabilidade). "usando o Redis como transporte" ficava solta no fim da primeira oração. "descobre" e "distribui as chamadas" ficaram em palavras mais comuns.

### 10
**Atual:** A aquisição e o \emph{runtime} de scripts não têm acesso ao banco nem às senhas dos armazenamentos: o primeiro recebe pronta a configuração de cada ponto e devolve o valor lido, e o segundo recebe o código e os valores e devolve o resultado. Se um deles fosse invadido, o invasor não alcançaria diretamente os dados, o que reduz os pontos de ataque justamente onde o sistema lida com o mundo externo, o campo e o código do usuário \cite{STOUFFER2015_NIST_ICS_SECURITY}.

**Sugestão:**
```latex
\par A aquisição e o \emph{runtime} de scripts não têm acesso ao banco nem às senhas de acesso aos armazenamentos de dados. A aquisição recebe pronta a configuração de cada ponto e devolve o valor lido. O \emph{runtime} recebe o código e os valores e devolve o resultado. Se um deles fosse invadido, o invasor não chegaria direto aos dados. Isso reduz as chances de ataque justamente onde o sistema lida com o mundo de fora, que são o campo e o código do usuário \cite{STOUFFER2015_NIST_ICS_SECURITY}.
```
**Por quê:** "senhas dos armazenamentos" é ambíguo (confirmar se o autor quer dizer "senhas do banco"). "reduz os pontos de ataque justamente onde..." ficou em duas frases curtas.

### 11
**Atual:** O código fica em um único repositório, e as descrições do formato dos dados ficam em um pacote que todos os serviços usam, de modo que tratam os dados da mesma forma. A Tabela~\ref{tab:cap3_tecnologias} resume as tecnologias de cada serviço, todas de código aberto, o que reduz o custo de licenciamento, tema recorrente na literatura sobre supervisórios acessíveis \cite{PHUYAL2020_COST_EFFICIENT_SCADA}.

**Sugestão:**
```latex
\par O código de todos os serviços fica em um único repositório. A descrição do formato dos dados fica num pacote usado por todos, para que cada serviço entenda os dados do mesmo jeito. A Tabela~\ref{tab:cap3_tecnologias} resume as tecnologias de cada serviço. Todas são de código aberto, o que reduz o custo de licenças, um assunto frequente na literatura sobre supervisórios acessíveis \cite{PHUYAL2020_COST_EFFICIENT_SCADA}.
```
**Por quê:** "licenciamento" e "de modo que tratam" são pesados. A frase final carregava três ideias.

### 12 (célula da Tabela de tecnologias, linha API)
**Atual:** Node.js, TypeScript, Fastify, biblioteca de acesso ao banco com mapeamento objeto-relacional tipado, Moleculer

**Sugestão:**
```latex
Node.js, TypeScript, Fastify, biblioteca de acesso ao banco que liga as tabelas ao código, Moleculer
```
**Por quê:** "mapeamento objeto-relacional tipado" é jargão e a mesma ideia já aparece explicada no texto da API. Perde-se o nome técnico do conceito (mapeamento objeto-relacional). Se o autor quiser mantê-lo, a explicação entre parênteses da sugestão 30 já o preserva no texto.

### Avaliar corte (linha 189)
**Trecho:** "Regras automáticas de verificação do código reforçam o isolamento: cada serviço só usa o que a sua camada permite, e as partes sensíveis, como o interpretador de scripts e a biblioteca de cifra, ficam restritas a um único lugar. Assim, a separação não depende apenas do cuidado de quem escreve o código."
**Motivo:** o isolamento entre serviços já foi explicado nos parágrafos acima e volta em Runtime de Scripts e Segurança entre os Serviços. O parágrafo também fala de "camada" antes de as camadas serem apresentadas (só aparecem em Serviços). Sem reescrita, a decisão é do autor.

## Validações dos Requisitos (linhas 195 a 229)

### 13 (Aquisição e Registro de Dados, linha 197)
**Atual:** As leituras (RF01 a RF03) são feitas pela aquisição, que conversa com os dispositivos de campo por Modbus \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}. Cada ponto é cadastrado como tag, com um tipo de dado (booleano, inteiro de 16 ou 32 bits, ponto flutuante, decimal codificado em binário ou texto), um período de varredura próprio, de cinco segundos por padrão, e a escala entre o valor bruto e a grandeza de engenharia. Redes seriais antigas são alcançadas por um \emph{gateway}, sem exigir porta serial no servidor.

**Sugestão:**
```latex
\par A aquisição faz as leituras (RF01 a RF03), conversando com os dispositivos de campo por Modbus \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}. Cada ponto é cadastrado como uma tag. A tag tem um tipo de dado (booleano, inteiro de 16 ou 32 bits, ponto flutuante, decimal codificado em binário ou texto), um período de varredura próprio, de cinco segundos por padrão, e uma escala que converte o valor bruto lido na grandeza de engenharia. Redes seriais antigas são alcançadas por um \emph{gateway}, e o servidor não precisa de porta serial.
```
**Por quê:** a segunda frase era uma lista longa pendurada em "com". Separar "o que é a tag" de "o que ela tem" ajuda a leitura. "a escala entre o valor bruto e a grandeza" ficou mais claro como "converte".

### 14 (linha 199)
**Atual:** O valor atual de cada tag fica no Redis, com um indicador de qualidade (bom, desatualizado, falha, desconhecido ou implausível), e as telas o consultam sem sobrecarregar o banco. O histórico é gravado no PostgreSQL, em uma tabela dividida por mês, com médias por minuto e por hora que aceleram os gráficos longos \cite{POSTGRESQL_DOCS}. A gravação passa por filas, de modo que um pico de leituras não a derruba, e uma banda morta configurável evita registrar variações sem significado.

**Sugestão:**
```latex
\par O valor atual de cada tag fica no Redis, junto com um indicador de qualidade (bom, desatualizado, falha, desconhecido ou implausível). As telas consultam esse valor sem sobrecarregar o banco. O histórico é gravado no PostgreSQL, em uma tabela dividida por mês, com médias por minuto e por hora que aceleram os gráficos longos \cite{POSTGRESQL_DOCS}. A gravação passa por filas, e assim um pico de leituras não a derruba. Uma banda morta configurável, que é uma faixa de variação pequena demais para valer o registro, evita gravar mudanças sem significado.
```
**Por quê:** "banda morta" é jargão que o leigo não conhece e aparece aqui pela primeira vez. A definição entre vírgulas é a explicação mínima, mas é uma interpretação do autor do texto: conferir se confere com o que o sistema faz.

### 15 (Sincronismo de Tempo, linha 203)
**Atual:** O sincronismo (RF04) vem do carimbo de tempo que a aquisição aplica ao ciclo de leitura. Todas as tags lidas no mesmo ciclo de um dispositivo recebem a mesma estampa, que indica o instante da amostragem e não o da transição do processo, como é próprio do \emph{polling}. O carimbo acompanha o valor até a tela sem ser alterado, o que garante a cronologia para a análise de ocorrências \cite{ZANGHI2019_SCADA_CONCEITOS}. Como todos os contêineres usam o relógio do mesmo servidor, a referência é comum, e com mais de um servidor o requisito passa a depender da sincronização entre as máquinas. Os instantes são guardados em UTC e convertidos para o fuso do usuário na exibição.

**Sugestão:**
```latex
\par O sincronismo (RF04) vem do carimbo de tempo que a aquisição coloca em cada ciclo de leitura. Todas as tags lidas no mesmo ciclo de um dispositivo recebem a mesma estampa. Ela indica o instante da leitura e não o da mudança no processo, como é próprio do \emph{polling}. O carimbo acompanha o valor até a tela sem ser alterado, o que garante a ordem cronológica na análise de ocorrências \cite{ZANGHI2019_SCADA_CONCEITOS}. Como todos os contêineres usam o relógio do mesmo servidor, a referência de tempo é única. Com mais de um servidor, o requisito passaria a depender de manter os relógios das máquinas sincronizados. Os instantes são guardados em UTC e convertidos para o fuso do usuário na exibição.
```
**Por quê:** "instante da amostragem e não o da transição do processo" ficou em palavras do dia a dia. "a cronologia" virou "a ordem cronológica". A frase dos contêineres foi dividida em duas.

### 16 (Níveis de Acesso, linha 207)
**Atual:** Nos níveis de acesso (RF05 e RF06), há quatro cargos fixos: o administrador do sistema, que cuida da plataforma, o administrador da instalação, que configura o sistema, o supervisor, que cuida dos usuários e dos operadores, e o operador, que supervisiona e comanda. Há também grupos de permissões, criados a partir de um catálogo de dez permissões, que se somam quando a pessoa está em mais de um grupo. Assim se aplica o menor privilégio, e quem não pode comandar vê os valores, mas não escreve no equipamento \cite{STOUFFER2015_NIST_ICS_SECURITY}.

**Sugestão:**
```latex
\par Nos níveis de acesso (RF05 e RF06), há quatro cargos fixos. O administrador do sistema cuida da plataforma. O administrador da instalação configura o sistema. O supervisor cuida dos usuários e dos operadores. O operador supervisiona e comanda. Há também grupos de permissões, montados a partir de um catálogo de dez permissões, que se somam quando a pessoa está em mais de um grupo. Assim se aplica o menor privilégio, ou seja, cada pessoa tem só o acesso de que precisa. Quem não pode comandar vê os valores, mas não escreve no equipamento \cite{STOUFFER2015_NIST_ICS_SECURITY}.
```
**Por quê:** a lista de quatro cargos, cada um com oração explicativa, estava numa frase só, com vírgulas demais. "menor privilégio" é explicado em palavras comuns.

### 17 (linha 209)
**Atual:** Ao entrar, o navegador recebe duas credenciais digitais, chamadas \emph{tokens}: a de acesso, de curta duração, e a de renovação. As senhas são guardadas apenas como resumo irreversível. A cada pedido, a API verifica o cargo e as permissões, lidos de um \emph{cache}, cópia em memória descartada a cada mudança, de modo que a alteração vale no pedido seguinte. A identidade vem sempre da sessão, nunca de um dado enviado pelo navegador, o que impede comandar pontos além do permitido \cite{WALI2024_CLOUD_SCADA_SECURITY}.

**Sugestão:**
```latex
\par Ao entrar, o navegador recebe duas credenciais digitais, chamadas \emph{tokens}: uma de acesso, de curta duração, e outra de renovação. As senhas são guardadas apenas como resumo irreversível, do qual não é possível recuperar a senha original. A cada pedido, a API confere o cargo e as permissões da pessoa. Ela os lê de um \emph{cache}, uma cópia em memória que é apagada a cada mudança, e por isso a alteração já vale no pedido seguinte. A identidade vem sempre da sessão e nunca de um dado enviado pelo navegador, o que impede comandar pontos além do permitido \cite{WALI2024_CLOUD_SCADA_SECURITY}.
```
**Por quê:** "resumo irreversível" ganha uma explicação curta. A terceira frase, com três orações aninhadas, foi dividida.

### 18 (Comando e Controle, linha 213)
**Atual:** O comando e o controle (RF07 a RF09) seguem as variantes da literatura \cite{ZANGHI2019_SCADA_CONCEITOS}: o comando instantâneo, que muda o estado de um equipamento, e o controle por valor de referência, que define um alvo, ambos executados como escrita Modbus pela aquisição. As quatro fases dividem-se entre a tela, que conduz o operador, a API, que verifica a permissão e guarda o registro, e a aquisição, que escreve. Cada comando tem uma chave de idempotência, identificador que impede a execução dupla, e uma trava por tag, que impede dois comandos simultâneos no mesmo ponto \cite{STOUFFER2015_NIST_ICS_SECURITY}.

**Sugestão:**
```latex
\par O comando e o controle (RF07 a RF09) seguem os dois tipos descritos na literatura \cite{ZANGHI2019_SCADA_CONCEITOS}. O comando instantâneo muda o estado de um equipamento. O controle por valor de referência define um alvo a ser atingido. Os dois são executados pela aquisição como escrita Modbus. As quatro fases se dividem entre a tela, que conduz o operador, a API, que verifica a permissão e guarda o registro, e a aquisição, que escreve. Cada comando tem uma chave de idempotência, um identificador que impede a execução em duplicidade, e uma trava por tag, que impede dois comandos ao mesmo tempo no mesmo ponto \cite{STOUFFER2015_NIST_ICS_SECURITY}.
```
**Por quê:** "as variantes da literatura" é vago. A primeira frase tinha duas definições mais uma explicação pendurada. A citação de ZANGHI foi mantida junto da afirmação que ela sustenta.

### 19 (linha 215)
**Atual:** O comando termina com a resposta do dispositivo, que já espelha o que foi aceito, sem releitura do ponto. Sem resposta no prazo, o comando falha, e quando o sistema perde o rastro, o estado é registrado como desconhecido, nunca como sucesso. Todo comando e todo reconhecimento de alarme ficam registrados com o autor e a origem. A escrita em hora marcada é feita por um evento agendado que dispara um script, com o nome do script registrado como origem.

**Sugestão:**
```latex
\par O comando termina quando o dispositivo responde, e essa resposta já repete o que ele aceitou, sem precisar reler o ponto. Se não houver resposta no prazo, o comando falha. Se o sistema perde o rastro do comando, o estado fica registrado como desconhecido, nunca como sucesso. Todo comando e todo reconhecimento de alarme são registrados com o autor e a origem. A escrita em hora marcada é feita por um evento agendado que dispara um script, e o nome do script fica registrado como origem.
```
**Por quê:** "espelha" e "perde o rastro" ficam mais claros com sujeito explícito. Cada situação de falha virou uma frase.

### 20 (Escalabilidade, linha 219)
**Atual:** A escalabilidade (RF10 e RNF02), ou seja, a capacidade de crescer, tem três frentes. Novos pontos, dispositivos e telas entram com o sistema em funcionamento, sem mexer no código. A aquisição e o \emph{worker} podem rodar em várias réplicas, isto é, cópias do mesmo serviço trabalhando juntas, e cada dispositivo fica sempre com a mesma réplica, para que leituras e escritas não se atropelem. A replicação em contêineres é um padrão consolidado para obter capacidade sob demanda \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}.

**Sugestão:**
```latex
\par A escalabilidade (RF10 e RNF02), ou seja, a capacidade de crescer, tem três frentes. Novos pontos, dispositivos e telas entram com o sistema em funcionamento, sem mexer no código. A aquisição e o \emph{worker} podem rodar em várias réplicas, isto é, cópias do mesmo serviço trabalhando juntas. Cada dispositivo fica sempre com a mesma réplica, para que leituras e escritas não se atropelem. Copiar serviços em contêineres é um padrão consolidado para obter capacidade sob demanda \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}.
```
**Por quê:** frase longa dividida em duas. Observação: o parágrafo anuncia "três frentes" mas só traz duas (a terceira, os dados, vem no parágrafo seguinte). Vale o autor decidir se deixa assim ou diz "a terceira frente está nos dados".

### 21 (linha 221)
**Atual:** Nos dados, o PostgreSQL cresce dividindo o histórico por mês, com retenção configurável, e o Redis tem um limite de memória e recusa novas escritas em vez de descartar dados em silêncio. Isso evita o limite de pontos comum nos supervisórios comerciais, embora o teto dependa da capacidade da máquina.

**Sugestão:**
```latex
\par Nos dados, o PostgreSQL cresce dividindo o histórico por mês, com tempo de guarda configurável. O Redis tem um limite de memória e, ao chegar nele, recusa novas escritas em vez de apagar dados sem avisar. Isso evita o limite de pontos comum nos supervisórios comerciais, embora o teto real dependa da capacidade da máquina.
```
**Por quê:** "retenção" e "descartar dados em silêncio" ficam em palavras comuns. A segunda oração foi separada para mostrar a sequência (chega ao limite, recusa).

### 22 (Redundância, linha 225)
**Atual:** A redundância (RNF03) apoia-se nas réplicas e nas filas, que sobrevivem a falhas \cite{ZANGHI2019_SCADA_CONCEITOS}. Cada réplica da aquisição e do \emph{worker} retira trabalho das mesmas filas, de modo que a perda de uma é absorvida pelas demais, e a aplicação web e a API também rodam em duas réplicas. Os trabalhos que falham são repetidos com espera controlada, os que esgotam as tentativas ficam guardados para inspeção, e o histórico tolera pausas curtas do banco. As travas de comando têm prazo de validade, de modo que a queda de uma cópia nunca as deixa presas.

**Sugestão:**
```latex
\par A redundância (RNF03) se apoia nas réplicas e nas filas, que resistem a falhas \cite{ZANGHI2019_SCADA_CONCEITOS}. Cada réplica da aquisição e do \emph{worker} pega trabalho das mesmas filas. Se uma cai, as outras assumem. A aplicação web e a API também rodam em duas réplicas. Um trabalho que falha é repetido, com espera entre as tentativas. Se esgota as tentativas, fica guardado para ser examinado. O histórico tolera pausas curtas do banco. As travas de comando têm prazo de validade, e por isso a queda de uma cópia nunca as deixa presas.
```
**Por quê:** o parágrafo empilhava quatro mecanismos em três frases longas. "a perda de uma é absorvida pelas demais" (passiva) virou "se uma cai, as outras assumem".

### 23 (linha 227)
**Atual:** O ponto mais sensível é o Redis, que concentra o valor atual, as filas e o transporte entre serviços, e por isso seu conteúdo pode ser recuperado. Quando ele volta vazio, a ausência de um marcador, o \emph{boot-marker}, aciona uma rotina que recoloca o valor de cada tag a partir da última leitura no banco, agenda de novo as tarefas periódicas e refaz o estado dos alarmes. Enquanto isso, as funções que dependem dele respondem que estão indisponíveis, e os valores recolocados ficam marcados como desatualizados até a próxima leitura.

**Sugestão:**
```latex
\par O ponto mais sensível é o Redis, que concentra o valor atual, as filas e o transporte entre serviços. Por isso, seu conteúdo pode ser recuperado. Quando ele volta vazio, o sistema percebe a falta de um marcador, o \emph{boot-marker}, e aciona uma rotina de recuperação. A rotina recoloca o valor de cada tag a partir da última leitura guardada no banco, agenda de novo as tarefas periódicas e refaz o estado dos alarmes. Enquanto isso, as funções que dependem do Redis respondem que estão indisponíveis, e os valores recolocados ficam marcados como desatualizados até a próxima leitura.
```
**Por quê:** "a ausência de um marcador aciona uma rotina" é uma construção abstrata. Dizer que o sistema percebe a falta e aciona a rotina é a mesma ideia, mais direta.

### 24 (linha 229)
**Atual:** A replicação do PostgreSQL com comutação automática e a execução em mais de uma máquina ficam como evolução. Como os contêineres não guardam dados importantes dentro de si, isso não exige mudança no código, apenas na forma de instalá-los.

**Sugestão:**
```latex
\par Copiar o PostgreSQL, com troca automática para a cópia reserva, e rodar o sistema em mais de uma máquina ficam como evolução. Como os contêineres não guardam dados importantes dentro de si, isso não exige mudar o código, só a forma de instalá-los.
```
**Por quê:** "replicação" e "comutação automática" são nominalizações. Perde-se um pouco da precisão técnica de "comutação" (failover), mas a ideia é a mesma.

## Serviços (linhas 233 a 317)

### 25 (linha 233)
**Atual:** Cada serviço fica em seu contêiner e pode ser iniciado e parado separadamente, segundo o modelo de microsserviços para sistemas industriais \cite{BIGHETI2020}, o que permite aumentar a capacidade só onde é preciso e impede que a falha de um derrube os outros. Dentro de cada serviço de aplicação, o código segue quatro camadas, domínio, aplicação, infraestrutura e apresentação. A Tabela~\ref{tab:conteineres} resume a função de cada contêiner e o que ele pode acessar.

**Sugestão:**
```latex
\par Cada serviço fica em seu contêiner e pode ser iniciado e parado separadamente, como prevê o modelo de microsserviços para sistemas industriais \cite{BIGHETI2020}. Isso permite aumentar a capacidade só onde é preciso e impede que a falha de um serviço derrube os outros. Dentro de cada serviço de aplicação, o código é dividido em quatro camadas: domínio, aplicação, infraestrutura e apresentação. A Tabela~\ref{tab:conteineres} resume a função de cada contêiner e o que ele pode acessar.
```
**Por quê:** a primeira frase tinha uma consequência dupla pendurada em "o que permite". Observação: as quatro camadas não são explicadas em nenhum lugar do capítulo. Para o leigo, uma frase curta dizendo o que cada camada guarda ajudaria, mas isso seria conteúdo novo e fica a critério do autor.

### 26 (Web, linha 268)
**Atual:** A aplicação web é desenvolvida em Next.js com React e entrega apenas as telas \cite{NEXTJS_DOCS}, sem banco de dados e sem regras de funcionamento. Depois de carregada, o navegador chama a API diretamente, com o token do usuário, por endereços que começam em \texttt{/v1}.

**Sugestão:**
```latex
\par A aplicação web é feita em Next.js com React e entrega apenas as telas \cite{NEXTJS_DOCS}. Ela não tem banco de dados nem regras de funcionamento. Depois que a tela carrega, o navegador chama a API diretamente, com o token do usuário, em endereços que começam por \texttt{/v1}.
```
**Por quê:** "Depois de carregada" tinha sujeito trocado (a aplicação, e não o navegador, é que carrega). Frases mais curtas.

### 27 (linha 270)
**Atual:** As telas de tempo real funcionam por \emph{polling} curto, com período único de um a dez segundos, definido pelo administrador do sistema, e uma falha gera aviso de conexão e nova tentativa. A interface usa um conjunto próprio de componentes, com tema claro e textos em português.

**Sugestão:**
```latex
\par As telas de tempo real funcionam por \emph{polling} curto, isto é, perguntam o valor ao servidor de tempos em tempos. O período é o mesmo para todas as telas, entre um e dez segundos, e é definido pelo administrador do sistema. Se a consulta falha, a tela avisa que a conexão caiu e tenta de novo. A interface usa um conjunto próprio de componentes, com tema claro e textos em português.
```
**Por quê:** "período único" ficava ambíguo (único valor para todas as telas). A frase única foi dividida e "polling" ganhou uma explicação curta.

### 28 (API, linha 274)
**Atual:** A \sigla{api} é o centro do sistema, desenvolvida em Node.js com o \emph{framework} Fastify. Todo endereço começa por \texttt{/v1}, que indica a versão: uma mudança incompatível gera uma nova versão, o que protege quem usa a antiga. Antes de atender um pedido, a API confere o formato dos dados, descrito em um esquema compartilhado com a interface. Ela faz o \emph{login}, a renovação de sessão e a verificação de permissões, o cadastro, as consultas ao histórico, a gestão de usuários, a edição de telas, scripts e eventos e o envio dos comandos.

**Sugestão:**
```latex
\par A \sigla{api} é o centro do sistema e é feita em Node.js com o \emph{framework} Fastify. Todo endereço começa por \texttt{/v1}, que indica a versão. Quando uma mudança não é compatível com a anterior, nasce uma nova versão, e quem usa a antiga continua protegido. Antes de atender um pedido, a API confere o formato dos dados, descrito em um esquema que ela divide com a interface. A API cuida do \emph{login}, da renovação da sessão, das permissões, do cadastro, das consultas ao histórico, dos usuários, da edição de telas, scripts e eventos e do envio dos comandos.
```
**Por quê:** "gera uma nova versão, o que protege quem usa a antiga" foi desdobrado em causa e efeito. A lista final ficou como "cuida de", sem os substantivos "gestão", "verificação" e "renovação".

### 29 (linha 276)
**Atual:** Além do \emph{worker}, a API é o único serviço que fala com o banco, por uma biblioteca que traduz as tabelas para o código (mapeamento objeto-relacional tipado). Ela usa o Redis para ler o valor atual e controlar limites e travas, e o Moleculer para chamar a aquisição e o \emph{runtime}. Nenhuma tarefa de fundo roda junto dela, para que um trabalho pesado não atrase as telas: o que precisa ser executado depois ou repetido vai para uma fila, a cargo do \emph{worker}.

**Sugestão:**
```latex
\par Além do \emph{worker}, a API é o único serviço que fala com o banco, por meio de uma biblioteca que liga as tabelas ao código (mapeamento objeto-relacional tipado). Ela usa o Redis para ler o valor atual e controlar limites e travas, e usa o Moleculer para chamar a aquisição e o \emph{runtime}. Nenhuma tarefa de fundo roda junto com a API, para que um trabalho pesado não atrase as telas. O que precisa ser feito depois ou repetido vai para uma fila, e o \emph{worker} cuida dele.
```
**Por quê:** "traduz as tabelas para o código" já é a explicação, e o termo técnico fica entre parênteses. A última frase tinha dois pontos e uma expressão nominal ("a cargo do").

## Worker (linhas 280 e 281)

### 30
**Atual:** O \emph{worker} usa o mesmo código da API, mas não atende pedidos do navegador: apenas retira tarefas das filas. Em um único contêiner, um programa supervisor mantém um processo para cada família de filas, com a credencial daquela família. A família \emph{sistema} grava o histórico, atualiza o valor atual e as médias, avalia os eventos, dispara os agendados e executa as rotinas de acerto e as varreduras de manutenção. A família \emph{interno} calcula as tags internas e as variáveis meta, pedindo a avaliação de scripts ao \emph{runtime}.

**Sugestão:**
```latex
\par O \emph{worker} usa o mesmo código da API, mas não atende pedidos do navegador. Ele só pega tarefas das filas. Num único contêiner, um programa supervisor mantém um processo para cada família de filas, cada um com a credencial da sua família. A família \emph{sistema} grava o histórico, atualiza o valor atual e as médias, avalia os eventos e dispara os agendados. Ela também executa as rotinas de acerto e as varreduras de manutenção. A família \emph{interno} calcula as tags internas e as variáveis meta e pede ao \emph{runtime} a avaliação dos scripts.
```
**Por quê:** a lista de seis funções da família "sistema" estava em uma frase só. "apenas retira tarefas das filas" ficou como frase própria.

### 31
**Atual:** Assim, cada tipo de trabalho pode ter sua capacidade aumentada separadamente, e a lentidão de uma família não atrasa a outra. O \emph{worker} não fala com o campo. As famílias são isoladas por processo e não por contêiner, o que simplifica a operação, mas faz com que compartilhem o disco e as permissões do contêiner.

**Sugestão:**
```latex
\par Assim, cada tipo de trabalho pode crescer separadamente, e a lentidão de uma família não atrasa a outra. O \emph{worker} não fala com o campo. As famílias são separadas por processo, e não por contêiner. Isso simplifica a operação, mas as famílias passam a dividir o disco e as permissões do contêiner.
```
**Por quê:** "ter sua capacidade aumentada" é voz passiva desnecessária. A última frase tinha "o que... mas faz com que" encadeados.

## Aquisição (linhas 285 a 289)

### 32
**Atual:** A aquisição é a fronteira com o campo e o único componente que conversa em Modbus. Ela roda em Node, sem banco de dados, e reúne duas funções. O agendador decide o instante de cada leitura, agrupa as tags de um dispositivo em uma rodada para reduzir o tráfego e não inicia um ciclo enquanto o anterior não terminar. O cliente Modbus monta o quadro, valida a resposta e os códigos de erro, decodifica os registradores, aplicando a ordem de bytes e a escala, e produz o valor na unidade de engenharia \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}.

**Sugestão:**
```latex
\par A aquisição faz a ligação com o campo e é o único componente que fala Modbus. Ela roda em Node, sem banco de dados, e tem duas funções. O agendador decide a hora de cada leitura. Ele agrupa as tags de um dispositivo numa mesma rodada, para reduzir o tráfego, e só começa um ciclo quando o anterior terminou. O cliente Modbus monta o quadro de pedido, que é a mensagem Modbus enviada ao dispositivo, confere a resposta e os códigos de erro e decodifica os registradores, aplicando a ordem dos bytes e a escala. No fim, entrega o valor na unidade de engenharia \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}.
```
**Por quê:** "é a fronteira com o campo" é figurado. "quadro" e "valida" foram explicados ou trocados por "confere". As duas funções foram separadas em frases curtas.

### 33
**Atual:** Ela recebe pronta a configuração de cada dispositivo e pode rodar em réplicas, com cada dispositivo fixo em uma delas. A trava por dispositivo, no Redis, dá ao comando prioridade sobre a leitura periódica. As falhas de comunicação são contadas por dispositivo, com tempo limite e número de tentativas configuráveis. Quando uma leitura falha, o último valor é mantido e marcado como desatualizado, e a ocorrência alimenta os eventos do dispositivo, pois, em um \sigla{scada}, a ausência de um dado precisa ser tão visível quanto um limite ultrapassado.

**Sugestão:**
```latex
\par Ela recebe pronta a configuração de cada dispositivo e pode rodar em réplicas, e cada dispositivo fica sempre com a mesma réplica. Uma trava por dispositivo, guardada no Redis, dá ao comando prioridade sobre a leitura periódica. As falhas de comunicação são contadas por dispositivo, e o tempo limite e o número de tentativas são configuráveis. Quando uma leitura falha, o último valor é mantido e marcado como desatualizado, e a falha gera eventos do dispositivo. Isso importa porque, em um \sigla{scada}, a falta de um dado precisa ser tão visível quanto um limite ultrapassado.
```
**Por quê:** a última frase tinha três ideias e uma justificativa ("pois"). "a ocorrência alimenta os eventos" virou "a falha gera eventos". "ausência" virou "falta".

### 34
**Atual:** Os resultados saem como mensagens, que o \emph{worker} transforma em histórico, valor atual e eventos, e as escritas de comando chegam pelo Moleculer. A aquisição não guarda dados, não decide permissões e não executa scripts, o que facilita replicá-la, testá-la e acrescentar outros protocolos industriais sem alterar o restante.

**Sugestão:**
```latex
\par A aquisição envia os resultados das leituras como mensagens, e o \emph{worker} os transforma em histórico, valor atual e eventos. As escritas de comando chegam à aquisição pelo Moleculer. A aquisição não guarda dados, não decide permissões e não executa scripts. Por isso é mais fácil copiá-la, testá-la e acrescentar outros protocolos industriais sem alterar o restante.
```
**Por quê:** o sujeito de "saem como mensagens" estava implícito. Dividir deixa claro o caminho de ida (resultados) e o de volta (comandos).

## Runtime de Scripts (linhas 293 e 295)

### 35
**Atual:** O \emph{runtime} executa o JavaScript dos usuários, presente na variável meta, no script de um evento, no componente de conteúdo do sinótico e na tag interna gerada. Deixar o usuário escrever código em um sistema industrial exige isolamento forte. Por isso, cada avaliação roda em uma cópia nova de um interpretador, em um ambiente fechado (\emph{sandbox}), em um processo hospedeiro que é reciclado. O código não acessa rede, arquivos nem segredos, e cada execução tem limites de tempo, memória, recursão e saída.

**Sugestão:**
```latex
\par O \emph{runtime} executa o JavaScript escrito pelos usuários na variável meta, no script de um evento, no componente de conteúdo do sinótico e na tag interna gerada. Deixar o usuário escrever código num sistema industrial exige um isolamento forte. Por isso, cada avaliação roda numa cópia nova de um interpretador, dentro de um ambiente fechado (\emph{sandbox}), em um processo hospedeiro que é reiniciado de tempos em tempos. O código não acessa a rede, os arquivos nem os segredos, e cada execução tem limites de tempo, de memória, de recursão e de saída.
```
**Por quê:** "presente na" ligado a "JavaScript dos usuários" ficava ambíguo. "reciclado" virou "reiniciado de tempos em tempos" (conferir se descreve bem o que o sistema faz: perde-se um pouco da precisão técnica de "reciclar").

### 36
**Atual:** O serviço tem contêiner próprio, sem credencial de banco nem chave de cifra: a API ou o \emph{worker} leem o banco e enviam os valores no pedido. A conta dele no Redis tem o mínimo de permissões, e um limite global de execuções simultâneas impede que um script lento ocupe o serviço inteiro. Assim, mesmo que um script malicioso escape do interpretador, não alcança o banco, a rede interna nem os comandos de escrita do campo.

**Sugestão:**
```latex
\par O serviço tem contêiner próprio, sem credencial de banco nem chave de cifra. Quem lê o banco é a API ou o \emph{worker}, que enviam os valores junto com o pedido. A conta do serviço no Redis tem só as permissões mínimas, e um limite global de execuções ao mesmo tempo impede que um script lento ocupe o serviço inteiro. Assim, mesmo que um script malicioso escape do interpretador, ele não alcança o banco, a rede interna nem os comandos de escrita no campo.
```
**Por quê:** o sujeito de "não alcança" era implícito e distante. Também sai o encadeamento por dois pontos.

## PostgreSQL (linhas 299 e 301)

### 37
**Atual:** O PostgreSQL é um banco relacional de código aberto, com bom suporte a particionamento e a consultas em janelas de tempo \cite{POSTGRESQL_DOCS}, e guarda os usuários, as sessões, o cadastro, o histórico, os alarmes, as telas, os scripts e os grupos de permissões.

**Sugestão:**
```latex
\par O PostgreSQL é um banco de dados relacional de código aberto, com bom suporte a dividir tabelas grandes (particionamento) e a consultas por intervalo de tempo \cite{POSTGRESQL_DOCS}. Nele ficam os usuários, as sessões, o cadastro, o histórico, os alarmes, as telas, os scripts e os grupos de permissões.
```
**Por quê:** "particionamento" ganha uma explicação e a frase, que juntava definição e lista de conteúdo, foi dividida em duas.

### 38
**Atual:** As conexões são separadas por finalidade, de modo que a gravação de leituras, as telas e as consultas pesadas não as disputam. As mudanças na estrutura do banco são feitas por migrações, roteiros de alteração compatíveis com a versão anterior do código e ensaiados antes da aplicação. O histórico é dividido por mês, com retenção configurável, e cada consulta nova nasce com o índice que a atende.

**Sugestão:**
```latex
\par As conexões ao banco são separadas por finalidade, para que a gravação de leituras, as telas e as consultas pesadas não disputem as mesmas conexões. As mudanças na estrutura do banco são feitas por migrações, que são roteiros de alteração compatíveis com a versão anterior do código e testados antes de valerem. O histórico é dividido por mês, com tempo de guarda configurável, e cada consulta nova já nasce com o índice que a atende.
```
**Por quê:** "as disputam" tinha o pronome longe do substantivo. "ensaiados antes da aplicação" virou "testados antes de valerem". Perde-se a ideia de "ensaio" como etapa específica, mas a leitura fica mais direta.

## Redis (linhas 305 e 307)

### 39
**Atual:** O Redis é um armazenamento de dados em memória \cite{REDIS_DOCS} com várias funções. Como memória de acesso rápido (\emph{cache}), mantém o valor atual de cada tag. Guarda os trabalhos das filas, transporta a comunicação do Moleculer e guarda os contadores de limites, as travas distribuídas e a lista de sessões revogadas.

**Sugestão:**
```latex
\par O Redis é um armazenamento de dados em memória \cite{REDIS_DOCS} e tem várias funções. Como memória de acesso rápido (\emph{cache}), mantém o valor atual de cada tag. Também guarda os trabalhos das filas, transporta a comunicação do Moleculer e guarda os contadores de limite, as travas compartilhadas entre os serviços e a lista de sessões canceladas.
```
**Por quê:** "travas distribuídas" e "sessões revogadas" são jargão. "Guarda... guarda" repetia o verbo.

### 40
**Atual:** Os contadores e as travas têm prazo de validade. Já o último valor de cada tag não expira, e por isso o Redis é reconstruído do banco quando volta vazio. Ele só é acessível pela rede interna, e cada serviço tem uma conta com permissões próprias.

**Sugestão:**
```latex
\par Os contadores e as travas têm prazo de validade. O último valor de cada tag não expira, mas, se o Redis voltar vazio, ele é refeito a partir do banco. O Redis só é acessível pela rede interna, e cada serviço tem uma conta com permissões próprias.
```
**Por quê:** "e por isso" ligava duas ideias sem relação causal clara (não expirar não é a razão de reconstruir). A sugestão mantém os mesmos fatos com um "mas, se" mais natural. Conferir se o autor concorda com essa leitura.

## Comunicação Moleculer e Filas (linhas 311 e 313)

### 41
**Atual:** O Moleculer usa o Redis como transporte \cite{MOLECULER_DOCS} e é por ele que a API pede uma escrita à aquisição, que a aquisição entrega os resultados das leituras e que a API e o \emph{worker} pedem a avaliação de scripts. Ele encontra os serviços automaticamente, distribui as chamadas entre as réplicas, aplica tempo limite e impede que uma falha se propague.

**Sugestão:**
```latex
\par O Moleculer usa o Redis como transporte \cite{MOLECULER_DOCS}. É por ele que a API pede uma escrita à aquisição, que a aquisição entrega os resultados das leituras e que a API e o \emph{worker} pedem a avaliação de scripts. Ele encontra os serviços sozinho, reparte as chamadas entre as réplicas, aplica um tempo limite e evita que a falha de um serviço se espalhe para os outros.
```
**Por quê:** "é por ele que... que... que..." com três "que" seguidos fica difícil de ler. A pausa depois da citação ajuda.

### 42
**Atual:** O trabalho sem resposta imediata passa por filas, que limitam as tarefas simultâneas, descartam os trabalhos de histórico excedentes quando a memória do Redis passa de um limiar e guardam por um tempo os que falharam. Cada tarefa deve ser idempotente, isto é, repeti-la não produz efeito duplicado. O Moleculer cobre a chamada que espera resposta, e as filas cobrem o trabalho que precisa sobreviver a falhas.

**Sugestão:**
```latex
\par O trabalho que não precisa de resposta imediata passa por filas. As filas limitam quantas tarefas rodam ao mesmo tempo, descartam os trabalhos de histórico que passam do limite quando a memória do Redis ultrapassa um nível definido e guardam por um tempo os trabalhos que falharam. Cada tarefa deve ser idempotente, isto é, repeti-la não produz efeito duplicado. Em resumo, o Moleculer cuida da chamada que espera resposta, e as filas cuidam do trabalho que precisa sobreviver a falhas.
```
**Por quê:** a primeira frase, com "que... descartam... e guardam... os que falharam", era uma das mais pesadas do capítulo. "limiar" virou "nível definido". "cobre" virou "cuida de".

## Segurança entre os Serviços (linhas 317 e 319)

### 43
**Atual:** Na entrada, a API limita o número de pedidos por usuário e por endereço, com limites mais rígidos para o \emph{login} e as consultas pesadas, e bloqueia temporariamente o acesso após tentativas malsucedidas. Os segredos que o sistema precisa ler de volta são guardados com cifra simétrica autenticada, com a chave de dados protegida por uma chave mestra. Já as senhas e as chaves de acesso ficam apenas como resumo irreversível \cite{STOUFFER2015_NIST_ICS_SECURITY}.

**Sugestão:**
```latex
\par Na entrada, a API limita o número de pedidos por usuário e por endereço. Os limites são mais rígidos para o \emph{login} e para as consultas pesadas. Depois de tentativas de acesso malsucedidas, o acesso é bloqueado por um tempo. Os segredos que o sistema precisa ler de volta são guardados cifrados, e a chave que os protege fica, por sua vez, protegida por uma chave mestra. As senhas e as chaves de acesso, ao contrário, ficam apenas como resumo irreversível \cite{STOUFFER2015_NIST_ICS_SECURITY}.
```
**Por quê:** a frase de abertura tinha limite, endereço, login, consultas e bloqueio. "cifra simétrica autenticada" foi trocada por "cifrados", o que perde o detalhe do tipo de cifra. Se o autor quiser manter, pode escrever "guardados cifrados (cifra simétrica autenticada)".

### 44
**Atual:** Cada contêiner recebe somente a configuração de que precisa, a comunicação pelo Moleculer confere a identidade de quem chama, e as contas do Redis restringem o que cada serviço pode executar. A ideia é que a invasão de uma peça não dê acesso ao conjunto, requisito central em sistemas de controle conectados a redes corporativas e à internet \cite{WALI2024_CLOUD_SCADA_SECURITY}.

**Sugestão:**
```latex
\par Cada contêiner recebe só a configuração de que precisa. A comunicação pelo Moleculer confere quem está chamando, e as contas do Redis limitam o que cada serviço pode fazer. A ideia é que a invasão de uma peça não dê acesso ao conjunto, algo essencial em sistemas de controle ligados a redes corporativas e à internet \cite{WALI2024_CLOUD_SCADA_SECURITY}.
```
**Por quê:** três medidas separadas por vírgula viraram duas frases. "restringem o que cada serviço pode executar" e "requisito central" ficaram em palavras mais simples.

## Modelo de Dados (linhas 354 a 358)

### 45
**Atual:** O cadastro tem três níveis. A planta é a instalação física, com nome, identificador textual e coordenadas para o mapa. O dispositivo de E/S é a origem do dado, um equipamento Modbus ou um dispositivo interno, que gera valores calculados ou simulados. A tag é a variável monitorada ou comandada e traz o endereço do registrador, o tipo de dado, a ordem de bytes, a escala, o período de varredura e a banda morta. Uma árvore de pastas própria de cada planta organiza as tags para a visualização, e uma pasta pode reunir tags de dispositivos diferentes.

**Sugestão:**
```latex
\par O cadastro tem três níveis. A planta é a instalação física, com nome, identificador em texto e coordenadas para o mapa. O dispositivo de E/S é a origem do dado: um equipamento Modbus ou um dispositivo interno, que gera valores calculados ou simulados. A tag é a variável monitorada ou comandada e traz o endereço do registrador, o tipo de dado, a ordem de bytes, a escala, o período de varredura e a banda morta. Cada planta tem uma árvore de pastas própria, que organiza as tags para a visualização, e uma pasta pode reunir tags de dispositivos diferentes.
```
**Por quê:** só pequenos ajustes: dois pontos no lugar da vírgula ambígua depois de "origem do dado" e a última frase com sujeito mais claro. O parágrafo já estava bom.

### 46
**Atual:** As leituras formam a maior tabela do sistema, dividida por mês, e as partições futuras são criadas por tarefas de manutenção. Para períodos longos, há médias por minuto, usadas quando o período de varredura é inferior a sessenta segundos, e por hora. O banco guarda também alarmes, eventos, telas, listas de acompanhamento, scripts, variáveis meta, grupos e o registro de comandos, com a cópia do nome de quem os emitiu.

**Sugestão:**
```latex
\par As leituras formam a maior tabela do sistema e são divididas por mês. Tarefas de manutenção criam as divisões dos meses futuros. Para períodos longos, há médias por minuto, usadas quando o período de varredura é menor que sessenta segundos, e médias por hora. O banco guarda também alarmes, eventos, telas, listas de acompanhamento, scripts, variáveis meta, grupos e o registro de comandos, com uma cópia do nome de quem os emitiu.
```
**Por quê:** "partições futuras são criadas por tarefas" é voz passiva e usa "partição", que não foi explicada. "dividida por mês" já introduz a ideia.

### 47
**Atual:** A exclusão de registros do cadastro é definitiva, e em vez de excluir é possível desabilitar um item.

**Sugestão:**
```latex
\par Excluir um registro do cadastro é definitivo. Em vez de excluir, é possível desabilitar o item.
```
**Por quê:** a nominalização "A exclusão de registros... é definitiva" virou verbo, e duas ideias viraram duas frases.

---

Resumo: 47 sugestões de reescrita e 1 trecho marcado como "avaliar corte" (linha 189).
