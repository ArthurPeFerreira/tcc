# Documentação online citada no texto (sem PDF na pasta, fora de `sites.txt`)

Estas fontes estão no `Referencias.bib` como `@online` ou `@manual` e são citadas no texto, mas não há arquivo na pasta `Referencias\` nem linha em `sites.txt`. Atualizado em 02/11/2026.

## Como foi lido agora

Na primeira conferência só quatro páginas tinham sido consultadas, por uma ferramenta que devolve um resumo gerado por modelo. Nesta rodada cada página foi baixada com `curl -sL` e convertida em texto bruto, e as afirmações abaixo vêm desse texto. As frases do TCC, com arquivo, linha, classe antiga e classe nova, estão em `complemento\docs-online.md`. Onde uma página recusou o acesso, está dito. Nenhum `.tex` nem o `.bib` foi alterado.

O que não mudou da conferência anterior e continua certo: as quatro páginas lidas antes (Moleculer Registry, BullMQ retentativas, OWASP Password Storage e Docker visão geral) foram relidas em texto bruto e as conclusões se mantêm. O que mudou: BullMQ, OWASP e Docker agora têm mais páginas lidas, e as outras fontes online foram lidas pela primeira vez.

## Lidas em texto bruto

### Moleculer
- Chave `MOLECULER_DOCS`. URL do `.bib`: https://moleculer.services/docs/0.14/ (funciona, 200). A página traz o aviso de que a versão 0.14 chegou ao fim de vida e não é mais mantida.
- Páginas conferidas: https://moleculer.services/docs/0.14/ , /registry.html , /balancing.html , /fault-tolerance.html , /networking.html e https://moleculer.services/ (página inicial).
- Afirma: framework de microsserviços para Node.js. Registro e descoberta dinâmica: cada nó anuncia a presença e constrói o próprio registro local de serviços, e nós que caem são removidos. Arquitetura sem mestre, todos os nós iguais. Balanceamento de carga entre as instâncias de um serviço (round robin e outras estratégias). Tolerância a falhas embutida: disjuntor (desligado por padrão), nova tentativa com backoff exponencial, tempo limite, bulkhead e resposta alternativa (fallback). Transportadores embutidos, incluindo Redis, que exige o módulo ioredis.
- Consequência: a frase do TCC que fala em componente central de coordenação diverge da fonte. A página inicial atual do site descreve os mesmos recursos para a versão vigente.

### BullMQ
- Chave `BULLMQ_DOCS`. URL do `.bib`: https://docs.bullmq.io/ (200).
- Páginas conferidas: https://docs.bullmq.io/ , /guide/introduction , /guide/retrying-failing-jobs , /guide/jobs/retrying-job , /patterns/idempotent-jobs , /patterns/stop-retrying-jobs , /guide/workers/stalled-jobs , /guide/going-to-production , /guide/queues/auto-removal-of-jobs , /guide/job-schedulers/ , /guide/jobs/prioritized , /guide/rate-limiting , /guide/parallelism-and-concurrency , /guide/architecture e outras. Três endereços tentados deram 404 (readme-1, what-is-bullmq, guide/dead-letter-queue).
- Afirma: fila distribuída de jobs e mensagens, que serve para suavizar picos, tirar trabalho pesado dos servidores web e orquestrar serviços. Entrega pelo menos uma vez, por isso os processadores devem ser idempotentes. Escala adicionando workers. `attempts` maior que 1 liga as repetições, com backoff fixo ou exponencial, e sem backoff a repetição é imediata. `UnrecoverableError` manda o job ao conjunto de falhos sem repetir. Job parado (stalled) volta à fila. Jobs repetíveis por Job Schedulers, prioridades, limitação de taxa, remoção automática de concluídos e falhos. Armazenamento padrão no Redis, com PostgreSQL como alternativa nas versões atuais. Na página Going to production: o `maxmemory-policy` deve ser `noeviction`, e é a única configuração que garante o comportamento correto das filas.
- Não encontrei em nenhuma página: fila de mensagens mortas (dead-letter).

### OWASP Cheat Sheet Series
- Chave `OWASP_CHEATSHEETS`. URL do `.bib`: https://cheatsheetseries.owasp.org/ (200).
- Páginas conferidas: Password_Storage_Cheat_Sheet, Authentication_Cheat_Sheet, Session_Management_Cheat_Sheet, OAuth2_Cheat_Sheet, Authorization_Cheat_Sheet, Cryptographic_Storage_Cheat_Sheet, Input_Validation_Cheat_Sheet (todas em https://cheatsheetseries.owasp.org/cheatsheets/). A folha JSON_Web_Token_for_Java deu 404.
- Afirma: senha nunca em texto puro, hash lento com sal único, Argon2id primeira escolha (mínimo 19 MiB, 2 iterações, paralelismo 1). Autenticação: bloqueio de conta por tentativas, com o aviso de que ele pode virar negação de serviço contra outros usuários, e mensagem de erro genérica para evitar enumeração de usuários. Sessão: expiração imposta no servidor e invalidação no servidor. OAuth 2.0: refresh token com rotação, isto é, emitir um novo e invalidar o antigo na hora para detectar replay. Autorização: validar a permissão em toda requisição e dar o menor privilégio. Armazenamento criptográfico: chave de dados (DEK) protegida por chave de cifra de chaves (KEK) em outro lugar.

### Docker
- Chave `DOCKER_DOCS`. URL do `.bib`: https://docs.docker.com/ (200).
- Páginas conferidas: /get-started/docker-overview/ , /get-started/docker-concepts/the-basics/what-is-a-container/ , .../what-is-an-image/ , /engine/containers/resource_constraints/ , /compose/intro/compose-application-model/ .
- Afirma: ambiente fracamente isolado chamado contêiner. Imagem somente leitura, em camadas, criada por um Dockerfile. Registro (Docker Hub). Contêineres rodam em laptop, data center e provedores de nuvem, e o mesmo contêiner funciona do mesmo modo em todos. Isolamento por namespaces do núcleo Linux. Limites de memória e CPU pelas opções do `docker run`. Compose: um arquivo YAML define serviços, redes e volumes e um comando cria e inicia tudo. Contêineres compartilham o mesmo núcleo, diferente das máquinas virtuais.
- Não afirma: que o Docker seja a ferramenta mais difundida.

### PostgreSQL
- Chave `POSTGRESQL_DOCS`. URL do `.bib`: https://www.postgresql.org/docs/current/ (200). Hoje current é a versão 18, e a 19 aparece como release candidate. Para fixar a versão, usar /docs/18/.
- Páginas conferidas: /docs/current/ddl-partitioning.html , /ddl-constraints.html , /tutorial-fk.html e https://www.postgresql.org/about/ .
- Afirma: sistema de banco de dados objeto-relacional de código aberto. Particionamento por intervalo, poda de partições, e descartar ou desanexar uma partição é muito mais rápido que apagar em massa e evita o custo de VACUUM. Exemplo de uma partição por mês, com remoção do mês mais antigo. Chave primária como identificador único e chave estrangeira mantendo a integridade referencial.

### Redis
- Chave `REDIS_DOCS`. URL do `.bib`: https://redis.io/docs/latest/ (200).
- Páginas conferidas: /develop/get-started/ , /develop/data-types/ , /develop/data-types/lists/ , /develop/pubsub/ , /develop/programmability/eval-intro/ , /develop/using-commands/transactions/ , /develop/reference/eviction/ , /operate/oss_and_stack/management/persistence/ , /operate/oss_and_stack/management/optimization/latency/ , /commands/expire/ , /commands/incr/ , /develop/clients/patterns/distributed-locks/ .
- Afirma: armazenamento de estruturas de dados em memória (Redis Open Source). Persistência por RDB e AOF. Timeout de chave com EXPIRE. Pub/Sub. Listas, conjuntos e outras estruturas. Scripts Lua executados de forma atômica, bloqueando o servidor durante a execução. Padrão de trava distribuída e de limitador de taxa. Política `noeviction`: devolve erro ao tentar gravar dado novo e as leituras continuam.
- Não encontrei: a promessa de resposta em menos de um milissegundo (a página de latência traz só uma medida de exemplo de 0,115 ms), nem a recomendação de `noeviction` para filas (essa está no BullMQ).

### Next.js
- Chave `NEXTJS_DOCS`. URL do `.bib`: https://nextjs.org/docs (200).
- Páginas conferidas: /docs , /docs/app/getting-started/server-and-client-components , /layouts-and-pages , /linking-and-navigating , /project-structure , /docs/app/guides/lazy-loading , e do Pages Router: /rendering , /client-side-rendering , /server-side-rendering , /static-site-generation .
- Afirma: framework React para aplicações web full-stack. Roteamento por sistema de arquivos. Páginas e layouts são Server Components por padrão e Client Components entram com estado, eventos e APIs do navegador. Na renderização no cliente há uma demora inicial até o JavaScript executar. Geração estática no build e renderização no servidor a cada requisição, com escolha por página. Divisão automática de código dos Server Components.
- Atenção: as páginas de renderização lidas são do Pages Router.

### Fastify
- Chave `FASTIFY_DOCS`. URL do `.bib`: https://fastify.dev/docs/latest/ (200).
- Páginas conferidas: https://fastify.dev/ , /docs/latest/Guides/Getting-Started/ , /Reference/Hooks/ , /Reference/Validation-and-Serialization/ , /Reference/Type-Providers/ , /Reference/Plugins/ , /Reference/TypeScript/ .
- Afirma: framework rápido e de baixo overhead para Node.js, com arquitetura de plugins e encapsulamento. Hooks no ciclo de requisição e resposta, com autenticação como exemplo de uso. Validação e serialização por JSON Schema, esquema compilado em função, erro de validação com status 400. Type Providers inferem tipos TypeScript a partir do esquema.

### Node.js
- Chave `NODEJS_DOCS`. URL do `.bib`: https://nodejs.org/docs/latest/api/ (200), que é só o índice da API.
- Páginas conferidas: https://nodejs.org/en/about , /learn/getting-started/introduction-to-nodejs , /learn/asynchronous-work/dont-block-the-event-loop , /overview-of-blocking-vs-non-blocking , /event-loop-timers-and-nexttick .
- Afirma: runtime JavaScript assíncrono e orientado a eventos, em um processo, sem thread por requisição, com E/S não bloqueante. Tarefas complexas devem sair do Event Loop para um Worker Pool próprio, feito com Child Process ou Cluster.

### TypeScript
- Chave `TYPESCRIPT_DOCS`. URL do `.bib`: https://www.typescriptlang.org/docs/ (200).
- Páginas conferidas: /docs/handbook/2/basic-types.html , /typescript-in-5-minutes.html , /intro.html .
- Afirma: camada de tipos sobre o JavaScript, verificador estático e compilador `tsc` que gera JavaScript comum. Os tipos são apagados na compilação. O compilador infere tipos, e é melhor não anotar quando a inferência já resolve.

### React
- Chave `REACT_DOCS`. URL do `.bib`: https://react.dev/ (200).
- Páginas conferidas: https://react.dev/ , /learn , /learn/your-first-component , /learn/reacting-to-input-with-state , /learn/render-and-commit , /learn/thinking-in-react .
- Afirma: biblioteca para interfaces de usuário feitas de componentes, com interface declarativa por estado. Nas re-renderizações o React altera só os nós do DOM em que houve diferença. Para um app completo recomenda um framework como o Next.js.

### Elipse, IHM de alta performance visual
- Chave `ELIPSE_IHM_ALTA_PERFORMANCE`. URL do `.bib`: https://kb.elipse.com.br/metodologia-para-desenvolvimento-de-ihms-de-alta-performance-visual/ (200). Texto bruto lido, autor Helcker Ferrarezi Goetz, publicada em 25/03/2019 e atualizada em 09/05/2023.
- Afirma: cores discretas para a tela toda, cores chamativas só para estados críticos, sem gradientes. Não usar fundo branco nem preto, e sim cinzas intermediários, para poder representar objetos mais claros e mais escuros que o fundo. Não usar cor para enfatizar estado normal. Mostrar valores com contexto (limites de alarme em charts, radar e bargraphs) e usar gráfico de tendência para projeção. Alarmes por severidade diferenciados por cor e forma, para daltonismo, com teste em tons de cinza. Hierarquia visual por tamanho de objeto. Evitar animações decorativas e 3D. Cita a norma NBR ISO 9241-11 e não cita a ISA-101.
- As outras cinco páginas da Elipse em `sites.txt` respondem 200 e não têm chave no `.bib`. Não são citadas no texto.

### Guias Modbus (PDF oficiais)
- Chaves `MODBUS_TCP_IMPLEMENTATION_GUIDE` e `MODBUS_SERIAL_SPEC`. As duas URLs do `.bib` e de `sites.txt` dão **404**. Links novos que entregam os PDF: https://www.modbus.org/file/secure/messagingimplementationguide.pdf e https://www.modbus.org/file/secure/modbusoverserial.pdf .
- Lidos em texto bruto (`pdftotext`). Guia TCP versão 1.0b, 24/10/2006, 46 páginas numeradas. Guia serial versão 1.02, 20/12/2006.
- Afirmam: modelo cliente/servidor com Request, Indication, Response e Confirmation. Porta 502 e campos do cabeçalho em big-endian. Quatro áreas de dados: Discretes Input, Coils, Input Registers e Holding Registers. O cliente monta o ADU com o cabeçalho MBAP, verifica a resposta e trata a exceção (código de função mais 80H). Serial: mestre e escravos, um mestre por vez, até 247 escravos, RS485 de dois fios mais comum, modo RTU com byte de 11 bits e paridade par como padrão.

## Sem leitura do conteúdo (só a existência foi confirmada)

- **ISA-101.01-2015** (`ISA101_2015_HMI`): norma paga. Confirmei a página do produto na isa.org, o comunicado da ISA de 22/08/2019 e um trecho público de 9 páginas com sumário e introdução, hospedado por terceiro. Sabe-se o escopo e que há seção de hierarquia de telas com exemplos dos níveis 1 a 4. Conteúdo das cláusulas não lido.
- **ISA-18.2-2016** (`ISA182_2016_ALARM`): norma paga. Só a página do produto na isa.org, que descreve requisitos e boas práticas de gestão de alarmes.
- **Schneider** (`SCHNEIDER_*`): a URL do `.bib` é a página inicial do fabricante, que recusa o curl (403). Página de download do ATV320 Modbus: https://www.se.com/br/pt/download/document/NVE41308 (documento NVE41308, versão 01, 31/03/2016, só metadados). Outros números de documento, vistos só em buscas: NVE41295 (programação do ATV320), EIO0000003297 (programação do M221), EIO0000003313 (hardware do M221, cópia de terceiro). Conteúdo dos manuais não lido.
- **Haas et al. (2017)** (`HAAS2017_WEBASSEMBLY`): o DOI no `.bib` leva à ACM, que recusa o curl (403). Há um PDF público do autor em people.mpi-sws.org/~rossberg/papers, que li em texto bruto. Afirma: WebAssembly como bytecode portátil, com execução segura, memória linear separada do código e da pilha, importação de funções do hospedeiro, tratamento de esgotamento de memória. Não trata de interpretador dentro da máquina virtual, limite de tempo, arquivos nem rede.
- **Fórum Econômico Mundial** (`WEF_DAVOS_2016_THEME`): https://www.weforum.org/stories/2015/11/what-is-the-theme-of-davos-2016/ dá 403 ao curl. A chave não é citada em nenhum capítulo atual.

## Em que partes do TCC é citada

Ver `complemento\docs-online.md` (frase por frase) e `01_REVISAO_DO_TEXTO.md` (visão geral).
