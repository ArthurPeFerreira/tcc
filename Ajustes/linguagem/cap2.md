# Revisão de linguagem, Capítulo 2 (14_1_Cap.tex), da seção "Automação e Tecnologias da Indústria 4.0" até o fim

O que mais pesa neste trecho são os parágrafos longos que empilham várias ideias numa frase só (Indústria 4.0, microsserviços, Moleculer, filas, HTTP, Modbus) e as nominalizações e palavras de tom abstrato ("vetores de transformação", "sustentam", "viabiliza", "fundamenta", "expõe", "compõe o endereço"). A maior parte das sugestões é dividir frase, trocar verbo abstrato por verbo comum e explicar de passagem um termo que o leigo não conhece. Há 49 sugestões e 1 marcação de "avaliar corte". Nenhuma sugestão acrescenta afirmação nova. Onde a simplificação perde um detalhe, isso está dito no "Por quê". Trechos já claros (React, parte do Next.js, autenticação x autorização, ordem das figuras) não foram mexidos. Nenhuma citação foi movida de lugar além do necessário para acompanhar a frase que ela sustenta.

---

## Automação e Tecnologias da Indústria 4.0

### 1. Parágrafo de abertura (linha ~60)

Atual:
```latex
\par A automação industrial é o conjunto de tecnologias que substituem a intervenção humana direta por sistemas eletrônicos, mecânicos e computacionais capazes de medir, controlar e supervisionar variáveis físicas. A informática industrial aplica as tecnologias da informação a esse contexto, unindo a \sigla{ta}, voltada a tempo real, robustez e segurança operacional, à \sigla{ti}, voltada a interoperabilidade e segurança da informação. Essa convergência é um dos principais vetores de transformação da automação \cite{COLOMBO2014_STATE_ART_AUTOMATION} e conduz à Indústria 4.0 \cite{PISCHING2017,BIGHETI2020}.
```

Sugestão:
```latex
\par A automação industrial é o uso de sistemas eletrônicos, mecânicos e computacionais para medir, controlar e supervisionar grandezas físicas, no lugar da intervenção humana direta. A informática industrial aplica as tecnologias da informação a esse meio. Ela une a \sigla{ta}, voltada a tempo real, robustez e segurança operacional, à \sigla{ti}, voltada a interoperabilidade (a capacidade de sistemas diferentes trocarem dados) e segurança da informação. Essa união é uma das principais forças de mudança da automação \cite{COLOMBO2014_STATE_ART_AUTOMATION} e leva à Indústria 4.0 \cite{PISCHING2017,BIGHETI2020}.
```

Por quê: "vetores de transformação" é expressão típica de texto gerado e "conduz" é abstrato. O parêntese sobre interoperabilidade explica o termo na primeira vez. "Variáveis físicas" virou "grandezas físicas", que é a palavra usada na área.

### 2. Parágrafo da IoT (linha ~62)

Atual:
```latex
\par A \sigla{iot} é uma rede global que liga à internet objetos físicos e virtuais, com identidade digital própria, capazes de trocar informações sem intervenção humana \cite{PISCHING2017,BIGHETI2020}. Ela reúne tecnologias como a computação móvel, as redes de sensores sem fio e os sistemas ciber-físicos \cite{STANKOVIC2014_IOT_RESEARCH_DIRECTIONS}.
```

Sugestão:
```latex
\par A \sigla{iot} é uma rede global que liga objetos à internet. Cada objeto, físico ou virtual, tem identidade digital própria e troca informações sem intervenção humana \cite{PISCHING2017,BIGHETI2020}. Ela reúne tecnologias como a computação móvel, as redes de sensores sem fio e os sistemas ciber-físicos \cite{STANKOVIC2014_IOT_RESEARCH_DIRECTIONS}.
```

Por quê: a primeira frase tinha três qualificações penduradas em sequência. Dividida, a ideia central (rede que liga objetos à internet) aparece primeiro.

### 3. Parágrafo da IIoT (linha ~64)

Atual:
```latex
\par No ambiente industrial, esse paradigma recebe o nome de \sigla{iiot}, voltado a aumentar a eficiência e a agilidade das fábricas. A \sigla{iot} de consumo atende a usos casuais, enquanto a industrial opera com grande volume de dados e requisitos rígidos de tempo real, confiabilidade e segurança \cite{BIGHETI2020}. A expansão da \sigla{iot} leva os fabricantes a adotar tecnologias que sustentam a convergência \sigla{ta}/\sigla{ti} \cite{PISCHING2017}. À medida que os dispositivos de campo oferecem suas funções como serviços de rede, a pirâmide ISA-95 \cite{ISA95_2000_ENTERPRISE_CONTROL} tende a achatar-se em uma arquitetura plana baseada em serviços \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Sugestão:
```latex
\par Na indústria, a \sigla{iot} recebe o nome de \sigla{iiot} e busca tornar as fábricas mais eficientes e ágeis. A \sigla{iot} de consumo atende a usos casuais. A industrial lida com grande volume de dados e exige tempo real, confiabilidade e segurança \cite{BIGHETI2020}. Com a expansão da \sigla{iot}, os fabricantes passam a adotar tecnologias que aproximam a \sigla{ta} e a \sigla{ti} \cite{PISCHING2017}. À medida que os dispositivos de campo oferecem suas funções como serviços de rede, a pirâmide ISA-95 \cite{ISA95_2000_ENTERPRISE_CONTROL} tende a se achatar em uma arquitetura plana baseada em serviços \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Por quê: "esse paradigma", "sustentam a convergência" e "opera com requisitos rígidos" são abstratos. "Sustentam a convergência" virou "aproximam a TA e a TI", que é o mesmo sentido em palavras comuns. A pirâmide ISA-95 continua sem explicação (ver marcação de "avaliar corte" ao fim).

### 4. Parágrafo do M2M (linha ~66)

Atual:
```latex
\par A base desses conceitos é a troca direta de informações entre dispositivos, denominada \sigla{m2m}. Originada na telemetria industrial e nos primeiros sistemas \sigla{scada}, ela precede a \sigla{iot} e viabiliza a máquina inteligente, que coordena ações e reporta estados sem intervenção manual \cite{BIGHETI2020,PISCHING2017}. Apoia-se em protocolos que conectam os equipamentos de campo aos serviços em nuvem, inclusive por modems celulares e \emph{gateways}, o que permite supervisionar centenas de pontos remotos sem hardware proprietário em cada instalação \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Sugestão:
```latex
\par A base desses conceitos é a troca direta de informações entre dispositivos, chamada de \sigla{m2m}. Ela nasceu na telemetria industrial e nos primeiros sistemas \sigla{scada} e é anterior à \sigla{iot}. Com ela, uma máquina inteligente coordena ações e informa seu estado sem intervenção manual \cite{BIGHETI2020,PISCHING2017}. Para isso, usa protocolos que ligam os equipamentos de campo aos serviços em nuvem, inclusive por modems celulares e \emph{gateways}, equipamentos que fazem a ponte entre redes. Assim, é possível supervisionar centenas de pontos remotos sem hardware proprietário em cada instalação \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Por quê: "viabiliza", "reporta" e "apoia-se" trocados por verbos comuns, e o termo \emph{gateways} ganha uma explicação curta. Ganho: leitura mais direta. Perda: nenhuma.

### 5. Parágrafo dos CPS (linha ~68)

Atual:
```latex
\par Os \sigla{cps}, termo proposto em 2006 nos Estados Unidos, descrevem o acoplamento intensivo entre entidades computacionais e o mundo físico \cite{PISCHING2017}, como ilustra a Figura~\ref{fig:cps}. Herdeiros dos sistemas embarcados, acrescentam conectividade, autonomia e cooperação. Três características lhes são essenciais: a inteligência, que é adquirir informações e agir de forma autônoma, a conectividade com outros elementos, pessoas e serviços, e a responsividade, a reação em tempo apropriado a mudanças \cite{MONOSTORI2016_CPS_MANUFACTURING}.
```

Sugestão:
```latex
\par Os \sigla{cps}, termo proposto em 2006 nos Estados Unidos, descrevem a ligação intensa entre computação e mundo físico \cite{PISCHING2017}, como ilustra a Figura~\ref{fig:cps}. Eles vêm dos sistemas embarcados e acrescentam conectividade, autonomia e cooperação. Três características são essenciais: a inteligência, que é obter informações e agir de forma autônoma, a conectividade com outros elementos, pessoas e serviços, e a responsividade, que é reagir a mudanças no tempo adequado \cite{MONOSTORI2016_CPS_MANUFACTURING}.
```

Por quê: "acoplamento intensivo entre entidades computacionais" e "herdeiros" são rebuscados. Mesma ideia, palavras de uso comum.

### 6. Parágrafo da Indústria 4.0 (linha ~81)

Atual:
```latex
\par A Indústria 4.0 nasce da demanda por produtos personalizados e de produção descentralizada e do avanço da automação e da digitalização \cite{LASI_INDUSTRY_40}. É um conjunto de tecnologias coordenadas, habilitadas por \sigla{cps}, \sigla{iiot}, computação em nuvem, redes sem fio e uso massivo de dados, cujo conceito-síntese é a fábrica inteligente \cite{BIGHETI2020}. Seus princípios são a interoperabilidade, a virtualização, a descentralização, a operação em tempo real, a orientação a serviços e a modularidade \cite{PISCHING2017}. Nesse contexto, o \sigla{scada} deixa de ser um sistema fechado de supervisão local e passa a um nó de uma rede de serviços \cite{COLOMBO2014_STATE_ART_AUTOMATION}. A Figura~\ref{fig:venn_iot_iiot_cps_i40} sintetiza essas relações: a \sigla{iot} como universo mais amplo, a \sigla{iiot} na interseção com o domínio industrial, os \sigla{cps} como forte acoplamento entre computação e mundo físico, e a Indústria 4.0 na interseção entre \sigla{iiot} e \sigla{cps}.
```

Sugestão:
```latex
\par A Indústria 4.0 nasce da demanda por produtos personalizados e por produção descentralizada, e do avanço da automação e da digitalização \cite{LASI_INDUSTRY_40}. Ela reúne tecnologias que trabalham de forma coordenada, como \sigla{cps}, \sigla{iiot}, computação em nuvem, redes sem fio e uso massivo de dados. Seu conceito central é a fábrica inteligente \cite{BIGHETI2020}. Seus princípios são a interoperabilidade, a virtualização, a descentralização, a operação em tempo real, a orientação a serviços e a modularidade \cite{PISCHING2017}. Nesse contexto, o \sigla{scada} deixa de ser um sistema fechado de supervisão local e passa a ser um ponto (nó) de uma rede de serviços \cite{COLOMBO2014_STATE_ART_AUTOMATION}. A Figura~\ref{fig:venn_iot_iiot_cps_i40} resume essas relações. A \sigla{iot} é o universo mais amplo. A \sigla{iiot} fica na interseção com o domínio industrial. Os \sigla{cps} são o forte acoplamento entre computação e mundo físico. A Indústria 4.0 fica na interseção entre \sigla{iiot} e \sigla{cps}.
```

Por quê: parágrafo de cinco ideias dividido em frases curtas, "habilitadas por" e "conceito-síntese" trocados por palavras comuns, e a descrição da figura virou frases separadas. Observação: os seis princípios seguem sem explicação, o que um leigo vai sentir. Explicá-los exigiria conteúdo novo, então não foi feito aqui.

---

## Computação em Nuvem

### 7. Definição de nuvem (linha ~96)

Atual:
```latex
\par A Computação em Nuvem é um modelo em que dados e aplicações ficam em grandes centros de processamento, oferecidos como serviços pela internet \cite{HENRIQUES2010_CLOUD_COMPUTING_TCC}. Em vez de manter a própria infraestrutura, o usuário contrata de um provedor a capacidade de que necessita, que se apresenta como praticamente ilimitada e é fornecida conforme a necessidade \cite{PEDROSA2011_COMPUTACAO_NUVEM}. Uma nuvem reúne cinco características: contratar recursos sozinho e na hora, acessar tudo pela rede, compartilhar recursos entre vários usuários, aumentar ou reduzir a capacidade com rapidez e medir o consumo. Ela pode ser pública, privada, comunitária ou híbrida.
```

Sugestão:
```latex
\par A Computação em Nuvem é um modelo em que dados e aplicações ficam em grandes centros de processamento e são oferecidos como serviços pela internet \cite{HENRIQUES2010_CLOUD_COMPUTING_TCC}. Em vez de manter a própria infraestrutura, o usuário contrata de um provedor a capacidade de que precisa. Essa capacidade parece ilimitada e é fornecida conforme a necessidade \cite{PEDROSA2011_COMPUTACAO_NUVEM}. Uma nuvem tem cinco características: o usuário contrata recursos sozinho e na hora, acessa tudo pela rede, divide os recursos com outros usuários, aumenta ou reduz a capacidade com rapidez e paga pelo que consome. Ela pode ser pública, privada, comunitária ou híbrida.
```

Por quê: o trecho "que se apresenta como... e é fornecida" estava com o sujeito perdido. As cinco características agora têm sujeito claro. "Medir o consumo" virou "paga pelo que consome", que acrescenta a ideia de cobrança embutida no termo "medir"; se o autor preferir ficar estrito, manter "tem o consumo medido". As quatro formas (pública, privada etc.) seguem sem explicação.

### 8. Vantagens e desafios (linha ~100)

Atual:
```latex
\par As principais vantagens são a mobilidade de acesso, a dispensa de infraestrutura própria e a facilidade de ajustar a capacidade, e os desafios são a segurança dos dados, a migração entre provedores e a garantia de disponibilidade \cite{HENRIQUES2010_CLOUD_COMPUTING_TCC,PEDROSA2011_COMPUTACAO_NUVEM}. Na Indústria 4.0, a nuvem conecta produtos, máquinas, sensores e serviços, e o \sigla{scada}, antes restrito a salas de controle locais, passa a ser mais um ponto de uma rede distribuída de serviços \cite{BIGHETI2020,PISCHING2017}.
```

Sugestão:
```latex
\par As principais vantagens são poder acessar de qualquer lugar, não precisar de infraestrutura própria e ajustar a capacidade com facilidade. Os desafios são a segurança dos dados, a migração entre provedores e a garantia de disponibilidade \cite{HENRIQUES2010_CLOUD_COMPUTING_TCC,PEDROSA2011_COMPUTACAO_NUVEM}. Na Indústria 4.0, a nuvem conecta produtos, máquinas, sensores e serviços. O \sigla{scada}, antes restrito a salas de controle locais, passa a ser mais um ponto de uma rede distribuída de serviços \cite{BIGHETI2020,PISCHING2017}.
```

Por quê: vantagens e desafios estavam na mesma frase, e "mobilidade de acesso" e "dispensa de infraestrutura" são nominalizações.

---

## Contêineres e Docker

### 9. Virtualização (linha ~104)

Atual:
```latex
\par A virtualização oferece um ambiente virtual sobre os recursos físicos de um computador, para melhorar seu aproveitamento. Na forma tradicional, usa máquinas virtuais, cada uma com um sistema operacional completo, chamado de convidado, sob o controle de um hipervisor \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}. Esse modelo oferece forte isolamento entre as máquinas virtuais, mas cada uma carrega o custo de um sistema operacional inteiro \cite{NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}.
```

Sugestão:
```latex
\par A virtualização cria um ambiente virtual sobre os recursos físicos de um computador, para aproveitá-los melhor. Na forma tradicional, ela usa máquinas virtuais. Cada uma tem um sistema operacional completo, chamado de convidado, e todas ficam sob o controle de um programa chamado hipervisor \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}. Esse modelo isola bem as máquinas virtuais entre si, mas cada uma carrega o custo de um sistema operacional inteiro \cite{NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}.
```

Por quê: o hipervisor aparecia sem explicação e a segunda frase misturava três ideias. "Oferece forte isolamento" virou "isola bem".

### 10. Contêiner (linha ~106)

Atual:
```latex
\par O contêiner é uma alternativa mais leve: compartilha o núcleo do sistema hospedeiro e isola os seus processos dos demais, com um gerenciador que controla o uso dos recursos \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}. A ideia se difundiu com o Linux, cujo núcleo oferece o isolamento e a limitação de processador e memória \cite{DOCKER_DOCS}. A Figura~\ref{fig:cap2_vm_conteiner} compara os dois modelos.
```

Sugestão:
```latex
\par O contêiner é uma alternativa mais leve. Ele compartilha o núcleo do sistema operacional do computador, o hospedeiro, e mantém os seus processos isolados dos demais. Um gerenciador controla o uso dos recursos \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}. A ideia se difundiu com o Linux, cujo núcleo permite esse isolamento e também limitar o uso de processador e memória \cite{DOCKER_DOCS}. A Figura~\ref{fig:cap2_vm_conteiner} compara os dois modelos.
```

Por quê: a frase com dois pontos e três orações penduradas foi dividida, e "sistema hospedeiro" ganhou o significado na primeira vez.

### 11. Imagem do contêiner (linha ~143)

Atual:
```latex
\par Sem inicializar um sistema operacional, o contêiner é criado muito mais rápido que uma máquina virtual \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}. Ele nasce de uma imagem, pacote imutável com a aplicação, suas bibliotecas e dependências, normalmente em camadas \cite{NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}. A mesma imagem executa de forma idêntica no computador do desenvolvedor ou em um servidor. Em contrapartida, tudo o que o contêiner tem em memória ou em disco se perde quando ele é encerrado, a menos que seja gravado em volumes externos.
```

Sugestão:
```latex
\par Como não precisa iniciar um sistema operacional, o contêiner é criado muito mais rápido que uma máquina virtual \cite{NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES}. Ele nasce de uma imagem, um pacote que não muda e reúne a aplicação e tudo de que ela depende, em geral organizado em camadas \cite{NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES}. A mesma imagem funciona do mesmo jeito no computador do desenvolvedor e em um servidor. Em contrapartida, o que o contêiner guarda em memória ou em disco se perde quando ele é encerrado, a menos que seja gravado em volumes externos, áreas de armazenamento fora do contêiner.
```

Por quê: "imutável", "executa de forma idêntica" e "volumes externos" ficaram em palavras comuns. "Bibliotecas e dependências" virou "tudo de que ela depende", que cobre os dois sem perder nada.

### 12. Docker (linha ~145)

Atual:
```latex
\par O Docker é a ferramenta de contêineres mais difundida. Ele oferece o formato de imagem, o arquivo de receita que descreve sua construção, o registro onde as imagens são distribuídas e o motor que executa os contêineres. O Docker Compose descreve em um único arquivo os contêineres de uma aplicação, suas redes e seus volumes, o que permite iniciar todo o conjunto com um comando \cite{DOCKER_DOCS}.
```

Sugestão:
```latex
\par O Docker é a ferramenta de contêineres mais difundida. Ele oferece o formato de imagem, o arquivo de receita que descreve como construí-la, o registro onde as imagens são distribuídas e o motor que executa os contêineres. O Docker Compose descreve em um único arquivo os contêineres de uma aplicação, suas redes e seus volumes. Com isso, todo o conjunto inicia com um comando \cite{DOCKER_DOCS}.
```

Por quê: "descreve sua construção" ficava ambíguo (construção de quê). Última frase dividida.

---

## Microsserviços

### 13. Definição de microsserviços (linha ~150)

Atual:
```latex
\par Os microsserviços organizam um sistema como um conjunto de serviços, programas pequenos e autônomos que podem ser instalados separadamente, cada um cuidando de uma parte delimitada e comunicando-se por protocolos leves, como APIs \sigla{http}/\sigla{rest} ou troca de mensagens. O estilo herda da \sigla{soa}, que organiza as funcionalidades como serviços publicados e usados sob demanda \cite{PISCHING2017}, mas adota serviços menores, com dados próprios, em vez de serviços grandes ligados por um barramento central \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Sugestão:
```latex
\par Os microsserviços organizam um sistema como um conjunto de serviços. Cada serviço é um programa pequeno e autônomo, que pode ser instalado separadamente e cuida de uma parte delimitada do sistema. Os serviços se comunicam por protocolos leves, como APIs \sigla{http}/\sigla{rest} (interfaces que um programa oferece para ser usado por outro) ou troca de mensagens. O estilo vem da \sigla{soa}, que organiza as funcionalidades como serviços publicados e usados sob demanda \cite{PISCHING2017}, mas usa serviços menores, com dados próprios, em vez de serviços grandes ligados por um barramento central \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Por quê: era uma frase de seis ideias. O parêntese sobre API só é necessário se a sigla ainda não foi explicada na Introdução. Conferir antes de colar.

### 14. Vantagens do modelo (linha ~152)

Atual:
```latex
\par Esse modelo supera limitações do monolito, programa único em que só é possível aumentar a capacidade do todo. Suas vantagens são a instalação separada de cada serviço, o aumento de capacidade só onde há gargalo e a liberdade para cada serviço usar a linguagem e o banco mais adequados \cite{BIGHETI2020}.
```

Sugestão:
```latex
\par Esse modelo supera limitações do monolito, um programa único em que só se pode aumentar a capacidade do todo. Suas vantagens são instalar cada serviço separadamente, aumentar a capacidade só onde há gargalo e deixar cada serviço usar a linguagem e o banco mais adequados \cite{BIGHETI2020}.
```

Por quê: três nominalizações ("instalação", "aumento", "liberdade") viraram verbos. Texto já era razoável, ganho pequeno.

---

## Moleculer

### 15. O que é o Moleculer (linha ~156)

Atual:
```latex
\par O Moleculer é uma ferramenta para construir microsserviços em Node.js, que reúne em uma biblioteca leve o necessário para que os serviços se localizem na rede, dividam a carga e continuem operando diante de falhas \cite{MOLECULER_DOCS}.
```

Sugestão:
```latex
\par O Moleculer é uma ferramenta para construir microsserviços em Node.js. Ele é leve e traz o necessário para que os serviços se encontrem na rede, dividam o trabalho e continuem funcionando quando algo falha \cite{MOLECULER_DOCS}.
```

Por quê: "continuem operando diante de falhas" e "dividam a carga" são mais formais do que precisam. Node.js só é explicado duas subseções depois, e o leitor leigo pode estranhar. Se o autor quiser, trocar "em Node.js" por "em Node.js (ambiente que roda JavaScript fora do navegador)".

### 16. Como os serviços conversam (linha ~158)

Atual:
```latex
\par Cada serviço expõe operações que outros podem chamar remotamente e envia avisos quando algo relevante acontece. Cada serviço registra-se em um componente central de coordenação, responsável por localizar automaticamente os serviços disponíveis e encaminhar cada chamada à cópia mais adequada \cite{MOLECULER_DOCS}. Quando uma cópia falha, a chamada vai para outra ou recebe uma resposta alternativa, evitando que a falha se propague, capacidade alinhada às arquiteturas de microsserviços da Indústria 4.0 \cite{BIGHETI2020}.
```

Sugestão:
```latex
\par Cada serviço oferece operações que os outros podem chamar à distância e envia avisos quando algo importante acontece. Todos se registram em um componente central de coordenação, que localiza sozinho os serviços disponíveis e encaminha cada chamada à cópia mais adequada \cite{MOLECULER_DOCS}. Se uma cópia falha, a chamada vai para outra ou recebe uma resposta alternativa. Assim a falha não se espalha, o que combina com as arquiteturas de microsserviços da Indústria 4.0 \cite{BIGHETI2020}.
```

Por quê: "expõe", "remotamente" e "capacidade alinhada às arquiteturas" são abstratos, e o fim da frase penduraria uma ideia que se lia como continuação da anterior.

---

## Filas de Mensagens e Processamento Assíncrono

### 17. Definição de fila (linha ~162)

Atual:
```latex
\par Uma fila de mensagens separa quem pede um trabalho, o produtor, de quem o executa, o consumidor, frequentemente chamado de \emph{worker}. A tarefa, ou \emph{job}, fica na fila até haver capacidade, e o produtor segue adiante sem esperar o resultado, em processamento assíncrono \cite{BULLMQ_DOCS}.
```

Sugestão:
```latex
\par Uma fila de mensagens separa quem pede um trabalho, o produtor, de quem o executa, o consumidor, muitas vezes chamado de \emph{worker}. A tarefa (\emph{job}) espera na fila até haver capacidade de executá-la. Enquanto isso, o produtor segue adiante sem esperar o resultado. Esse jeito de trabalhar é o processamento assíncrono \cite{BULLMQ_DOCS}.
```

Por quê: o termo "processamento assíncrono" entrava pendurado no fim; agora é nomeado depois de descrito, como o leigo precisa.

### 18. Para que serve a fila (linha ~164)

Atual:
```latex
\par A fila absorve picos de demanda, permite aumentar a capacidade acrescentando consumidores, isola falhas, pois o consumidor parado não impede o registro de novas tarefas, e tira do caminho de um pedido feito na tela os trabalhos demorados \cite{BULLMQ_DOCS}.
```

Sugestão:
```latex
\par A fila traz quatro vantagens. Ela absorve picos de demanda. Permite aumentar a capacidade acrescentando consumidores. Isola falhas, porque um consumidor parado não impede o registro de novas tarefas. E tira do caminho de um pedido feito na tela os trabalhos demorados \cite{BULLMQ_DOCS}.
```

Por quê: quatro ideias numa frase, com uma explicação no meio. Contadas e separadas, ficam fáceis de seguir.

### 19. Idempotência e tentativas (linha ~166)

Atual:
```latex
\par Como a fila pode entregar a mesma tarefa mais de uma vez, seu tratamento deve ser idempotente, isto é, executá-lo duas vezes produz o mesmo resultado que uma. Quando o tratamento falha, a fila repete a tarefa um número limitado de vezes, com espera crescente (\emph{backoff}). Falhas que não se resolvem repetindo, como um dado inválido, levam a tarefa a uma fila de mensagens mortas (\emph{dead-letter}), para análise \cite{BULLMQ_DOCS}. A Figura~\ref{fig:cap2_fila} resume o fluxo.
```

Sugestão:
```latex
\par A fila pode entregar a mesma tarefa mais de uma vez. Por isso o tratamento da tarefa deve ser idempotente, isto é, executá-la duas vezes deve dar o mesmo resultado que executá-la uma. Quando o tratamento falha, a fila repete a tarefa um número limitado de vezes, esperando um pouco mais a cada tentativa (\emph{backoff}). Falhas que repetir não resolve, como um dado inválido, mandam a tarefa para uma fila de mensagens mortas (\emph{dead-letter}), onde ela fica guardada para análise \cite{BULLMQ_DOCS}. A Figura~\ref{fig:cap2_fila} resume o fluxo.
```

Por quê: o "seu... executá-lo" tinha referência confusa (de quem é o tratamento). Causa e consequência agora vêm em frases separadas.

### 20. Bibliotecas de fila e Redis (linha ~198)

Atual:
```latex
\par Bibliotecas de filas para Node.js guardam o estado no Redis e oferecem repetição com \emph{backoff}, tarefas periódicas, prioridades, limites de tarefas e remoção automática de tarefas concluídas \cite{BULLMQ_DOCS}. Como todo o estado fica no Redis, recomenda-se a configuração que recusa novas escritas, em vez de remover dados, quando a memória se esgota \cite{REDIS_DOCS}.
```

Sugestão:
```latex
\par Bibliotecas de filas para Node.js guardam todo o seu estado no Redis. Elas oferecem repetição com \emph{backoff}, tarefas periódicas, prioridades, limites de tarefas e remoção automática das tarefas concluídas \cite{BULLMQ_DOCS}. Como a fila depende só do Redis, recomenda-se configurá-lo para recusar novas escritas, em vez de apagar dados, quando a memória acaba \cite{REDIS_DOCS}.
```

Por quê: "a configuração que recusa novas escritas" era um substantivo pesado. Agora é uma ação ("configurá-lo para recusar"). Atenção: o Redis só é explicado na subseção seguinte; considerar uma frase de ponte se o autor quiser.

---

## Banco de Dados

### 21. Banco relacional e NoSQL (linha ~202)

Atual:
```latex
\par O banco de dados armazena, organiza e recupera informações de forma persistente. O modelo relacional estrutura os dados em tabelas com formato definido (esquema) e relações explícitas, e o NoSQL atende a cenários em que o formato varia muito \cite{MOHAMED2014_RELATIONAL_VS_NOSQL}. Por preservar a integridade dos dados, o relacional é o adequado a sistemas que exigem coerência e consultas elaboradas.
```

Sugestão:
```latex
\par O banco de dados guarda, organiza e recupera informações de forma permanente (persistente). O modelo relacional organiza os dados em tabelas com formato definido (esquema) e relações explícitas. O NoSQL atende a casos em que o formato dos dados varia muito \cite{MOHAMED2014_RELATIONAL_VS_NOSQL}. Como preserva a integridade dos dados, o modelo relacional é o mais adequado a sistemas que exigem coerência e consultas elaboradas.
```

Por quê: dois modelos diferentes estavam numa frase com uma vírgula só. "Cenários" e "persistente" trocados ou explicados. "Integridade dos dados" continua sem explicação neste ponto, mas aparece definida no parágrafo seguinte.

### 22. PostgreSQL e chaves (linha ~204)

Atual:
```latex
\par Bancos como o PostgreSQL organizam os dados em tabelas de linhas e colunas, com uma chave primária que identifica cada registro e chaves estrangeiras que ligam tabelas, garantindo a integridade referencial, isto é, que uma relação nunca aponte para um registro inexistente \cite{MOHAMED2014_RELATIONAL_VS_NOSQL}. A linguagem de consulta padrão é o \sigla{sql} (\emph{Structured Query Language}).
```

Sugestão:
```latex
\par Bancos como o PostgreSQL guardam os dados em tabelas de linhas e colunas. Uma chave primária identifica cada registro, e chaves estrangeiras ligam as tabelas. Isso garante a integridade referencial, isto é, que uma relação nunca aponte para um registro que não existe \cite{MOHAMED2014_RELATIONAL_VS_NOSQL}. A linguagem de consulta padrão é o \sigla{sql} (\emph{Structured Query Language}).
```

Por quê: o gerúndio "garantindo" ligava coisas demais. Separando, o leitor entende primeiro as chaves e depois o que elas garantem.

### 23. Particionamento (linha ~207)

Atual:
```latex
\par O particionamento divide uma tabela muito grande em partes menores, segundo um critério como o intervalo de tempo, com uma partição por mês, por exemplo. O banco ignora as partições que não podem conter os registros pedidos, técnica denominada poda de partições, e remover dados antigos descartando uma partição inteira é muito mais rápido que apagar milhões de linhas \cite{POSTGRESQL_DOCS}. É usual manter também tabelas de agregados, como médias por minuto ou por hora, que exibem longos períodos sem percorrer os registros brutos.
```

Sugestão:
```latex
\par O particionamento divide uma tabela muito grande em partes menores, seguindo um critério como o tempo, por exemplo uma partição por mês. Na consulta, o banco ignora as partições que não podem conter os registros pedidos, o que se chama poda de partições. Remover dados antigos também fica mais rápido, pois basta descartar uma partição inteira em vez de apagar milhões de linhas \cite{POSTGRESQL_DOCS}. Também é comum manter tabelas de agregados, como médias por minuto ou por hora. Com elas, é possível mostrar longos períodos sem percorrer os registros brutos.
```

Por quê: duas vantagens diferentes (poda e remoção rápida) estavam coladas por "e". Separadas, cada uma é uma ideia simples. "Exibem longos períodos" trocado por "é possível mostrar".

---

## Redis

### 24. O que é o Redis (linha ~211)

Atual:
```latex
\par O \emph{Redis} é um armazenamento de dados em memória, de código aberto, muito rápido, em que cada valor é encontrado por um nome, a chave. Ele mantém os dados em uso na memória \sigla{ram} e responde a leituras e escritas em menos de um milissegundo \cite{REDIS_DOCS}.
```

Sugestão:
```latex
\par O \emph{Redis} é um armazenamento de dados de código aberto, muito rápido, que guarda tudo na memória. Cada valor é encontrado por um nome, a chave. Como mantém os dados em uso na memória \sigla{ram}, ele responde a leituras e escritas em menos de um milissegundo \cite{REDIS_DOCS}.
```

Por quê: a primeira frase tinha quatro adjetivos encadeados. A relação causa e efeito (memória, logo rápido) agora está dita.

### 25. Recursos do Redis (linha ~213)

Atual:
```latex
\par Ele pode gravar os dados em disco, apaga as chaves depois de um tempo de vida (\sigla{ttl}) e troca mensagens entre processos por um mecanismo publicador-assinante (Pub/Sub). É muito usado como cópia de acesso rápido (\emph{cache}) e como canal de eventos \cite{REDIS_DOCS}.
```

Sugestão:
```latex
\par Ele também pode gravar os dados em disco e apagar as chaves depois de um tempo de vida (\sigla{ttl}). Além disso, troca mensagens entre processos pelo mecanismo publicador-assinante (Pub/Sub). É muito usado como \emph{cache}, uma cópia de acesso rápido, e como canal de eventos \cite{REDIS_DOCS}.
```

Por quê: três verbos em tempos misturados ("pode gravar", "apaga", "troca"). Agora as funções estão em ordem e o \emph{cache} aparece com a explicação ao lado.

### 26. Operações atômicas e Lua (linha ~215)

Atual:
```latex
\par O Redis oferece listas, conjuntos e outras estruturas, com operações atômicas, que acontecem de uma só vez, e executa pequenos programas em Lua sem interferência de outros clientes. Por isso serve para guardar o valor mais recente de uma informação, limitar pedidos por tempo, criar travas distribuídas e apoiar filas \cite{REDIS_DOCS}.
```

Sugestão:
```latex
\par O Redis oferece listas, conjuntos e outras estruturas, com operações atômicas, que acontecem de uma só vez. Também executa pequenos programas, escritos na linguagem Lua, sem interferência de outros clientes. Por isso serve para guardar o valor mais recente de uma informação, limitar o número de pedidos por tempo, criar travas compartilhadas entre processos e apoiar filas \cite{REDIS_DOCS}.
```

Por quê: duas capacidades separadas, e Lua passa a ser identificada como linguagem. "Travas distribuídas" virou "travas compartilhadas entre processos", que é uma leitura mais simples e pode soar menos exata; se o autor preferir o termo técnico, manter "travas distribuídas".

---

## Node.js, TypeScript e Fastify

### 27. Node.js (linha ~219)

Atual:
```latex
\par O Node.js permite rodar JavaScript fora do navegador. Seu modelo é orientado a eventos, com operações de entrada e saída que não travam o programa (não bloqueantes): um único fluxo de execução atende muitas conexões, pois, enquanto uma operação de rede ou de disco aguarda, atende outros pedidos \cite{NODEJS_DOCS}. Em contrapartida, cálculos longos travam esse fluxo e devem ir para processos separados.
```

Sugestão:
```latex
\par O Node.js permite rodar JavaScript fora do navegador. Ele funciona por eventos e não trava o programa nas operações de entrada e saída. Por isso um único fluxo de execução atende muitas conexões: enquanto uma operação de rede ou de disco espera, ele atende outros pedidos \cite{NODEJS_DOCS}. Em contrapartida, cálculos longos travam esse fluxo e devem ir para processos separados.
```

Por quê: o parêntese "(não bloqueantes)" e a construção "pois, enquanto..., atende" estavam pesados. Perde-se o termo "não bloqueante", que é o nome técnico. Se o autor quiser mantê-lo, acrescentar "(operações não bloqueantes)" depois de "saída".

### 28. TypeScript (linha ~221)

Atual:
```latex
\par O TypeScript é uma extensão do JavaScript em que o programador declara o tipo de cada dado. O compilador verifica a coerência dos tipos e gera JavaScript comum, de modo que erros são detectados no desenvolvimento \cite{TYPESCRIPT_DOCS}. Como os tipos só existem na compilação, dados que chegam de fora do programa precisam ser validados na execução.
```

Sugestão:
```latex
\par O TypeScript é uma extensão do JavaScript em que o programador declara o tipo de cada dado. O compilador confere se os tipos são coerentes e gera JavaScript comum, então os erros aparecem durante o desenvolvimento \cite{TYPESCRIPT_DOCS}. Como os tipos só existem na compilação, os dados que chegam de fora do programa precisam ser validados durante a execução.
```

Por quê: voz passiva ("são detectados") e "verifica a coerência" trocadas por forma ativa. Mudança pequena.

### 29. Fastify (linha ~223)

Atual:
```latex
\par O Fastify é um \emph{framework} web para Node.js de baixo custo de processamento por pedido, organizado em módulos (\emph{plugins}). Ele permite inserir rotinas próprias (\emph{hooks}) nas etapas de cada pedido, como a autenticação e a validação, e descrever o formato do pedido e da resposta por esquemas \cite{FASTIFY_DOCS}.
```

Sugestão:
```latex
\par O Fastify é um \emph{framework} web para Node.js, isto é, uma estrutura pronta para construir aplicações. Ele gasta pouco processamento a cada pedido e é organizado em módulos (\emph{plugins}). Permite inserir rotinas próprias (\emph{hooks}) nas etapas de cada pedido, como a autenticação e a validação. Também permite descrever por esquemas o formato do pedido e da resposta \cite{FASTIFY_DOCS}.
```

Por quê: "de baixo custo de processamento por pedido" é nominalização longa. O termo \emph{framework} aparece aqui pela primeira vez no capítulo e ganhou a explicação. Conferir se não foi explicado antes na Introdução.

### 30. Validação por esquema (linha ~225)

Atual:
```latex
\par A validação por esquema descreve a estrutura que os dados devem ter e rejeita o que não a respeita, e uma única descrição pode servir na execução e na compilação \cite{FASTIFY_DOCS}. Compartilhado entre servidor e navegador, o esquema mantém os dois de acordo sobre o formato das mensagens.
```

Sugestão:
```latex
\par Na validação por esquema, descreve-se a estrutura que os dados devem ter, e o que não a respeita é rejeitado. A mesma descrição serve para a execução e para a compilação \cite{FASTIFY_DOCS}. Se o esquema for compartilhado entre servidor e navegador, os dois concordam sobre o formato das mensagens.
```

Por quê: a primeira frase tinha duas ideias (o que a validação faz e a dupla utilidade da descrição). A segunda tinha o sujeito deslocado ("Compartilhado..., o esquema mantém os dois").

---

## React e Next.js

### 31. Componentes no servidor e no navegador (linha ~237)

Atual:
```latex
\par O \emph{framework} distingue os componentes que executam no servidor dos que executam no navegador, necessários quando há interação \cite{NEXTJS_DOCS}. Isso permite usar o Next.js só para as telas, enquanto as regras de funcionamento, a autenticação e o acesso aos dados ficam em uma API separada, que o navegador consulta por pedidos HTTP.
```

Sugestão:
```latex
\par O \emph{framework} separa os componentes que rodam no servidor dos que rodam no navegador, que são necessários quando há interação com o usuário \cite{NEXTJS_DOCS}. Assim, o Next.js pode cuidar só das telas. As regras de funcionamento, a autenticação e o acesso aos dados ficam em uma API separada, que o navegador consulta por pedidos HTTP.
```

Por quê: "distingue" e "executam" trocados por verbos mais diretos. "Enquanto" ligava duas ideias que ficam melhor em frases separadas. Os demais parágrafos de React e Next.js estão claros e não foram mexidos.

---

## HTTP, API REST e JSON

### 32. HTTP e REST (linha ~241)

Atual:
```latex
\par O protocolo \sigla{http} (\emph{Hypertext Transfer Protocol}) é a forma como os programas trocam informações na web: o cliente faz um pedido a um endereço (\sigla{url}), e o servidor devolve os dados e um código que indica o resultado. O padrão \sigla{rest} (\emph{Representational State Transfer}) organiza APIs web de forma simples, com um método do \sigla{http} para cada operação, como GET para consultar, POST para criar, PUT para atualizar e DELETE para remover. Ele é uma das maneiras de implementar serviços web, recomendados para concretizar a \sigla{soa} \cite{PISCHING2017}.
```

Sugestão:
```latex
\par O protocolo \sigla{http} (\emph{Hypertext Transfer Protocol}) é a forma como os programas trocam informações na web: o cliente faz um pedido a um endereço (\sigla{url}), e o servidor devolve os dados e um código que indica o resultado. O padrão \sigla{rest} (\emph{Representational State Transfer}) é um jeito simples de organizar APIs web. Cada operação usa um método do \sigla{http}, como GET para consultar, POST para criar, PUT para atualizar e DELETE para remover. Ele é uma das formas de implementar serviços web, que são recomendados para concretizar a \sigla{soa} \cite{PISCHING2017}.
```

Por quê: a segunda frase juntava definição e exemplo de métodos. "Recomendados para concretizar" ainda é formal, mas a ideia depende da citação e foi mantida.

### 33. JSON e APIs REST na indústria (linha ~243)

Atual:
```latex
\par Os dados costumam vir no formato \sigla{json} (\emph{JavaScript Object Notation}), um texto leve, fácil de ler por pessoas e máquinas. Em sistemas industriais, expor os dispositivos de campo por APIs \sigla{rest} é uma alternativa cada vez mais comum ao uso direto do Modbus e aproxima o chão de fábrica dos sistemas de gestão \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Sugestão:
```latex
\par Os dados costumam vir no formato \sigla{json} (\emph{JavaScript Object Notation}), um texto leve, fácil de ler por pessoas e máquinas. Nos sistemas industriais, é cada vez mais comum oferecer os dispositivos de campo por APIs \sigla{rest}, em vez de usar o Modbus diretamente. Isso aproxima o chão de fábrica dos sistemas de gestão \cite{COLOMBO2014_STATE_ART_AUTOMATION}.
```

Por quê: "expor... é uma alternativa cada vez mais comum ao uso direto" era uma frase de sujeito longo. Invertida, o fato vem primeiro.

### 34. HTTP sem memória e códigos (linha ~245)

Atual:
```latex
\par O \sigla{http} não guarda informação de um pedido para o outro, de modo que cada pedido leva o necessário para ser atendido, como a credencial do usuário. Os códigos de resposta 2xx indicam sucesso, os 4xx erro do cliente, como falta de autenticação (401) ou de permissão (403), e os 5xx erro do servidor. Para evoluir sem quebrar quem já usa a API, a versão compõe o endereço, como em \texttt{/v1}.
```

Sugestão:
```latex
\par O \sigla{http} não guarda informação de um pedido para o outro. Por isso cada pedido leva tudo de que precisa para ser atendido, como a credencial do usuário. Os códigos de resposta 2xx indicam sucesso, os 4xx indicam erro do cliente, como falta de autenticação (401) ou de permissão (403), e os 5xx indicam erro do servidor. Para a API poder evoluir sem quebrar quem já a usa, a versão faz parte do endereço, como em \texttt{/v1}.
```

Por quê: "a versão compõe o endereço" é empolado. A repetição de "indicam" deixa a lista de códigos mais fácil de ler.

### 35. Acompanhar dados que mudam (linha ~247)

Atual:
```latex
\par Para acompanhar um dado que muda com o tempo, o servidor pode enviar as atualizações por uma conexão sempre aberta, como as \emph{WebSockets}, ou o navegador pode consultá-lo em intervalos curtos, técnica denominada \emph{polling}. O \emph{polling} é mais simples e funciona em qualquer infraestrutura \sigla{http}, ao custo de mais pedidos e de um atraso que não pode ser menor que o intervalo de consulta.
```

Sugestão:
```latex
\par Para acompanhar um dado que muda com o tempo, há duas opções. O servidor pode enviar as atualizações por uma conexão que fica sempre aberta, como as \emph{WebSockets}. Ou o navegador pode consultar o dado em intervalos curtos, técnica chamada \emph{polling}. O \emph{polling} é mais simples e funciona em qualquer infraestrutura \sigla{http}. Em troca, gera mais pedidos e tem um atraso que não pode ser menor que o intervalo de consulta.
```

Por quê: as duas opções estavam numa frase com "ou" no meio. Anunciar "duas opções" e separar torna a comparação imediata.

---

## Autenticação e Controle de Acesso

### 36. Senha (linha ~253)

Atual:
```latex
\par A senha nunca é guardada em texto legível, apenas como um resumo irreversível, de modo que não pode ser recuperada nem por quem acessa o banco, e o cálculo desse resumo é propositalmente custoso, para dificultar ataques de força bruta \cite{OWASP_CHEATSHEETS}.
```

Sugestão:
```latex
\par A senha nunca é guardada em texto legível. Guarda-se apenas um resumo dela, que não pode ser revertido, então nem quem acessa o banco consegue recuperá-la. O cálculo desse resumo é propositalmente custoso, para dificultar ataques de força bruta, que testam senhas até acertar \cite{OWASP_CHEATSHEETS}.
```

Por quê: uma frase longa com três ideias virou três. "Força bruta" ganhou explicação curta ("testam senhas até acertar"), o que é a definição corrente do termo.

### 37. Tokens (linha ~255)

Atual:
```latex
\par Após a autenticação, o sistema reconhece os pedidos seguintes por tokens, credenciais digitais assinadas que o navegador apresenta a cada pedido. O token de acesso dura poucos minutos, o que limita o dano de um vazamento, e um token de renovação, de vida mais longa, obtém novos tokens de acesso e é substituído a cada renovação. O reaparecimento de um token já substituído indica cópia por terceiros, e a sessão deve ser encerrada \cite{OWASP_CHEATSHEETS}.
```

Sugestão:
```latex
\par Depois do login, o sistema reconhece os pedidos seguintes por tokens, credenciais digitais assinadas que o navegador apresenta a cada pedido. O token de acesso dura poucos minutos, o que limita o dano de um vazamento. Um token de renovação, de vida mais longa, serve para obter novos tokens de acesso e é trocado por um novo a cada renovação. Se um token já trocado aparecer de novo, isso indica que foi copiado por terceiros, e a sessão deve ser encerrada \cite{OWASP_CHEATSHEETS}.
```

Por quê: "Após a autenticação" e "reaparecimento" são formais. A parte do token de renovação, que tinha quatro ações numa frase, foi organizada em ordem de acontecimento.

### 38. Medidas complementares (linha ~257)

Atual:
```latex
\par Complementam o conjunto o bloqueio temporário após tentativas falhas, as mensagens de erro idênticas para usuário inexistente e senha incorreta e a revogação de sessões \cite{OWASP_CHEATSHEETS,STOUFFER2015_NIST_ICS_SECURITY}.
```

Sugestão:
```latex
\par Outras medidas completam a proteção: o bloqueio temporário depois de tentativas falhas, a mesma mensagem de erro para usuário inexistente e para senha incorreta, e a possibilidade de cancelar (revogar) sessões \cite{OWASP_CHEATSHEETS,STOUFFER2015_NIST_ICS_SECURITY}.
```

Por quê: "Complementam o conjunto" é inversão de sujeito sem ganho. Sem o ponto e vírgula, mantendo os dois-pontos. Não foi explicado por que a mensagem igual protege (evita revelar quais usuários existem), porque isso seria conteúdo novo.

### 39. RBAC (linha ~259)

Atual:
```latex
\par O controle de acesso baseado em cargos (\emph{Role-Based Access Control}, \sigla{rbac}) organiza as permissões em cargos, como administrador, supervisor e operador, em vez de atribuí-las a cada usuário, o que simplifica a administração e reduz erros. Cada cargo deve seguir o princípio do menor privilégio, em que o usuário recebe somente as permissões necessárias ao seu trabalho \cite{STOUFFER2015_NIST_ICS_SECURITY}.
```

Sugestão:
```latex
\par No controle de acesso baseado em cargos (\emph{Role-Based Access Control}, \sigla{rbac}), as permissões ficam agrupadas em cargos, como administrador, supervisor e operador, e não são dadas a cada usuário. Isso simplifica a administração e reduz erros. Cada cargo deve seguir o princípio do menor privilégio: o usuário recebe só as permissões de que precisa para o seu trabalho \cite{STOUFFER2015_NIST_ICS_SECURITY}.
```

Por quê: "organiza as permissões em cargos... em vez de atribuí-las" ficava longa. Agora é afirmação, consequência e princípio, em três passos.

---

## Execução Isolada de Código

### 40. Por que isolar e o que é sandbox (linha ~263)

Atual:
```latex
\par Às vezes um sistema precisa executar código escrito por seus usuários, como fórmulas e regras de cálculo. Fazer isso com as permissões da aplicação é arriscado, porque o programa pode consumir todo o processador ou a memória, entrar em laço infinito, ler arquivos ou obter segredos. A execução isolada, ou \emph{sandbox}, é um ambiente restrito em que o código roda com permissões e recursos limitados, por processos com poucas permissões, contêineres, máquinas virtuais ou interpretadores embutidos.
```

Sugestão:
```latex
\par Às vezes um sistema precisa executar código escrito por seus usuários, como fórmulas e regras de cálculo. Rodar esse código com as permissões da aplicação é arriscado, porque ele pode consumir todo o processador ou a memória, entrar em laço infinito, ler arquivos ou obter segredos. A execução isolada, ou \emph{sandbox}, evita esse risco. É um ambiente restrito em que o código roda com permissões e recursos limitados. Pode ser feita com processos de poucas permissões, contêineres, máquinas virtuais ou interpretadores embutidos.
```

Por quê: "Fazer isso" tinha referência vaga. A última frase, com a lista de formas de isolar, foi separada da definição.

### 41. Técnica de isolamento (linha ~265)

Atual:
```latex
\par Uma técnica é executar o código em um interpretador pequeno, dentro de uma máquina virtual em que ele só acessa a própria memória, isolada da memória do programa que o executa, o hospedeiro. O código só alcança arquivos, rede ou relógio pelas funções que o hospedeiro liberar, e há limites de memória e de tempo, de modo que um laço infinito não trava o sistema. Criar um ambiente novo a cada execução evita que os dados de uma passem para a seguinte \cite{HAAS2017_WEBASSEMBLY}.
```

Sugestão:
```latex
\par Uma técnica é executar o código em um interpretador pequeno, dentro de uma máquina virtual. Ali ele só acessa a própria memória, separada da memória do programa que o executa, o hospedeiro. Arquivos, rede e relógio só ficam ao alcance do código pelas funções que o hospedeiro liberar. Com limites de memória e de tempo, um laço infinito não trava o sistema. Criar um ambiente novo a cada execução evita que os dados de uma passem para a seguinte \cite{HAAS2017_WEBASSEMBLY}.
```

Por quê: a primeira frase encaixava quatro orações. "Só alcança... pelas funções que liberar" foi invertida para ficar mais direta.

---

## Interfaces de Alto Desempenho para Operação

### 42. IHM e ISA-101 (linha ~271)

Atual:
```latex
\par A interface homem-máquina (\sigla{ihm}) é o meio pelo qual o operador enxerga o processo e age sobre ele. Telas com excesso de cores e animações dificultam perceber situações anormais e aumentam a fadiga e a chance de erro. A norma ISA-101 estabelece diretrizes para essas interfaces e fundamenta a chamada IHM de alto desempenho \cite{ISA101_2015_HMI}.
```

Sugestão:
```latex
\par A interface homem-máquina (\sigla{ihm}) é o meio pelo qual o operador enxerga o processo e age sobre ele. Telas com excesso de cores e animações dificultam notar situações anormais, cansam mais e aumentam a chance de erro. A norma ISA-101 define diretrizes para essas interfaces e é a base da chamada IHM de alto desempenho \cite{ISA101_2015_HMI}.
```

Por quê: "fundamenta" é típico de texto gerado, e "aumentam a fadiga" fica mais natural como "cansam mais". Mudança pequena.

### 43. Cores e alarmes (linha ~273)

Atual:
```latex
\par As telas devem usar cores discretas sobre fundos de tons intermediários de cinza, e cores chamativas ficam reservadas às condições anormais \cite{ELIPSE_IHM_ALTA_PERFORMANCE}. Os alarmes têm indicadores diferenciados também pela forma, para atender pessoas com daltonismo \cite{ISA101_2015_HMI}.
```

Sugestão:
```latex
\par As telas devem usar cores discretas sobre fundos em tons médios de cinza, e as cores chamativas ficam reservadas às condições anormais \cite{ELIPSE_IHM_ALTA_PERFORMANCE}. Os alarmes se distinguem também pela forma, e não só pela cor, para que pessoas com daltonismo possam reconhecê-los \cite{ISA101_2015_HMI}.
```

Por quê: "indicadores diferenciados" e "atender pessoas com daltonismo" eram vagos. "Não só pela cor" explicita o que a frase já quer dizer. Se o autor achar que acrescenta, pode manter a original.

### 44. Valores em contexto e hierarquia (linha ~275)

Atual:
```latex
\par Os valores devem aparecer em contexto, com indicadores como barras, que mostram a posição em relação à faixa normal e aos limites de alarme, e os gráficos de tendência permitem projetar o comportamento da variável \cite{ELIPSE_IHM_ALTA_PERFORMANCE}. As telas seguem uma hierarquia, da visão geral de uma área às de detalhe e de diagnóstico, para que o operador perceba rapidamente onde está o problema \cite{ISA101_2015_HMI}.
```

Sugestão:
```latex
\par Os valores devem aparecer em contexto. Indicadores como barras mostram onde o valor está em relação à faixa normal e aos limites de alarme, e os gráficos de tendência ajudam a prever o comportamento da variável \cite{ELIPSE_IHM_ALTA_PERFORMANCE}. As telas seguem uma hierarquia, da visão geral de uma área até as telas de detalhe e de diagnóstico, para que o operador veja logo onde está o problema \cite{ISA101_2015_HMI}.
```

Por quê: a primeira frase tinha três ideias e uma subordinada no meio. "Projetar o comportamento" virou "prever", que é o sentido de "projetar para frente".

---

## Protocolo Modbus

### 45. Modelo cliente e servidor (linha ~279)

Atual:
```latex
\par O Modbus é um dos protocolos de comunicação mais difundidos na automação industrial. Segue o modelo de requisição e resposta entre um cliente, que faz os pedidos, e um ou mais servidores, que são os dispositivos de campo, tradicionalmente chamados de \emph{master} e \emph{slaves}. Em um sistema de supervisão, o cliente envia pedidos para ler ou escrever valores no dispositivo, e este responde com os dados solicitados ou com um código de erro quando a operação não é permitida \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}.
```

Sugestão:
```latex
\par O Modbus é um dos protocolos de comunicação mais usados na automação industrial. Ele funciona por requisição e resposta. O cliente, tradicionalmente chamado de \emph{master}, faz os pedidos. Um ou mais servidores, tradicionalmente chamados de \emph{slaves}, respondem, e eles são os dispositivos de campo. Em um sistema de supervisão, o cliente envia pedidos para ler ou escrever valores no dispositivo. O dispositivo responde com os dados pedidos ou, se a operação não for permitida, com um código de erro \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}.
```

Por quê: na original, "tradicionalmente chamados de master e slaves" ficava longe de quem é quem. Aqui cada nome fica ao lado do papel certo. "Mais difundidos" virou "mais usados". Mantida a palavra "requisição", que o CLAUDE.md preserva para o Modbus.

### 46. Áreas de memória (linha ~281)

Atual:
```latex
\par Os dados de um dispositivo Modbus ficam organizados em quatro áreas de memória: \emph{coils} e \emph{input coils}, para estados do tipo booleano, e \emph{holding registers} e \emph{input registers}, para valores numéricos de 16 bits. Cada operação é identificada por um código de função, havendo funções específicas para ler ou escrever em cada uma dessas áreas \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}.
```

Sugestão:
```latex
\par Os dados de um dispositivo Modbus ficam em quatro áreas de memória. As \emph{coils} e as \emph{input coils} guardam estados do tipo ligado ou desligado (booleano). Os \emph{holding registers} e os \emph{input registers} guardam valores numéricos de 16 bits. Cada operação tem um código de função, e há funções específicas para ler ou escrever em cada área \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}.
```

Por quê: a lista com dois pares de nomes em inglês dentro de uma frase com dois-pontos era difícil de ler. Separando por tipo de dado, o leitor associa cada área ao que ela guarda.

### 47. Parâmetros da tag Modbus (linha ~283)

Atual:
```latex
\par Para que um valor de processo seja lido corretamente, é preciso configurar, para cada ponto, alguns parâmetros definidos pelo próprio protocolo, que indicam onde o dado se encontra no dispositivo: o endereço do dispositivo, que identifica o equipamento, o código de função, que define a área de memória e a operação, o endereço inicial e a quantidade de registradores a serem lidos. Esses parâmetros formam a base da configuração de uma tag Modbus e permitem que um mesmo software de aquisição se comunique com medidores e controladores de fabricantes diferentes apenas alterando a configuração, sem mudar o código.
```

Sugestão:
```latex
\par Para ler um valor de processo corretamente, é preciso configurar alguns parâmetros em cada ponto. Eles são definidos pelo próprio protocolo e indicam onde o dado está no dispositivo. São eles o endereço do dispositivo, que identifica o equipamento, o código de função, que define a área de memória e a operação, o endereço inicial e a quantidade de registradores (posições de memória de 16 bits) a ler. Esses parâmetros são a base da configuração de uma tag Modbus. Com eles, o mesmo software de aquisição conversa com medidores e controladores de fabricantes diferentes só mudando a configuração, sem mudar o código.
```

Por quê: a primeira frase tinha uma oração dentro de outra dentro de uma lista. Foi dividida em três passos (o que configurar, de onde vêm os parâmetros, quais são). O parêntese sobre registrador evita que o leigo tropece na palavra.

### 48. Tipo de dado e ordem dos bytes (linha ~285)

Atual:
```latex
\par Além desses parâmetros do protocolo, é preciso atenção especial à forma como o dado chega, pois é nesse ponto que surgem as maiores diferenças entre fabricantes. Cada registrador Modbus tem apenas 16 bits, mas muitos valores ocupam mais espaço: um inteiro de 32 bits ou um número de ponto flutuante usam dois registradores, e um valor de 64 bits, quatro. É necessário, portanto, configurar corretamente o tipo de dado bruto e a ordem em que esses registradores e seus bytes são combinados, a chamada ordem de bytes e de palavras, que varia de um fabricante para outro e, se interpretada de forma errada, produz um valor incorreto. Por fim, quando aplicável, configuram-se os fatores de escala que convertem o valor bruto em uma grandeza de engenharia.
```

Sugestão:
```latex
\par Além desses parâmetros, é preciso cuidar da forma como o dado chega, pois é aí que os fabricantes mais diferem. Cada registrador Modbus tem só 16 bits, mas muitos valores precisam de mais espaço. Um inteiro de 32 bits ou um número com vírgula (ponto flutuante) usa dois registradores, e um valor de 64 bits usa quatro. Por isso é preciso configurar o tipo do dado bruto e a ordem em que os registradores e seus bytes são combinados, chamada de ordem de bytes e de palavras. Essa ordem muda de um fabricante para outro e, se for interpretada errado, o valor sai incorreto. Por fim, quando for o caso, configuram-se os fatores de escala, que convertem o valor bruto em uma grandeza de engenharia.
```

Por quê: "É necessário, portanto" e a oração longa sobre a ordem foram quebrados. O leitor leigo ganha "número com vírgula" ao lado de "ponto flutuante".

### 49. Desempenho da aquisição (linha ~287)

Atual:
```latex
\par O desempenho de uma aquisição Modbus é limitado pelo tempo de resposta e pelo atraso do ciclo de \emph{polling}. Como o cliente envia um pedido e aguarda a resposta antes do pedido seguinte, o tempo total de um ciclo sobre vários dispositivos é aproximadamente a soma dos tempos de cada transação, e uma leitura só reflete o estado do processo no instante em que foi realizada, de modo que a informação exibida ao operador tem idade de até um ciclo completo. Cada transação soma o tempo de transmissão do pedido e da resposta, o tempo de processamento no dispositivo e o atraso do meio de comunicação. Por isso o período de leitura de cada ponto deve ser compatível com a capacidade do meio de comunicação, e agrupar registradores contíguos em uma única requisição reduz a sobrecarga por valor lido.
```

Sugestão:
```latex
\par O desempenho de uma aquisição Modbus é limitado pelo tempo de resposta e pela duração do ciclo de \emph{polling}. O cliente envia um pedido e espera a resposta antes de enviar o próximo. Por isso o tempo de um ciclo sobre vários dispositivos é aproximadamente a soma dos tempos de cada transação. Além disso, cada leitura só mostra o estado do processo no instante em que foi feita, então a informação que o operador vê pode ter a idade de um ciclo completo. Cada transação soma o tempo de transmissão do pedido e da resposta, o tempo de processamento no dispositivo e o atraso do meio de comunicação. Assim, o período de leitura de cada ponto deve ser compatível com a capacidade do meio de comunicação. Agrupar registradores vizinhos em uma única requisição reduz o custo por valor lido.
```

Por quê: era o parágrafo mais pesado do capítulo, com uma frase de mais de 70 palavras. Dividida na ordem do raciocínio (espera, soma, idade da leitura, composição da transação, consequências). "Contíguos" virou "vizinhos". Mantida "requisição" por ser Modbus. Não há perda de informação.

---

## Marcação de "avaliar corte" (sem reescrita)

- Linha ~64, última frase do parágrafo da IIoT, sobre a pirâmide ISA-95 que "tende a achatar-se em uma arquitetura plana baseada em serviços". A pirâmide não é explicada em nenhum ponto deste capítulo (o CLAUDE.md já tirou MES e ERP da descrição dela), e o leitor leigo não tem como entender o que está achatando. Avaliar se a frase fica ou se vale uma explicação curta da pirâmide.

---

## Observações gerais para o autor

- Termos que o leigo ainda vai sentir faltar, mas que exigiriam conteúdo novo e por isso não entraram: os seis princípios da Indústria 4.0, as quatro formas de nuvem (pública, privada, comunitária e híbrida) e a razão da mensagem de erro igual para usuário inexistente e senha incorreta.
- Os parênteses explicativos propostos (interoperabilidade, gateway, API, framework, volume, registrador, força bruta) são curtos e podem ser aceitos ou recusados um a um. Antes de colar os de API e framework, conferir se a Introdução já os explicou.
- Subseções que estavam claras e não receberam sugestão: React (primeiro parágrafo), Next.js (geração de páginas e roteamento), abertura de Autenticação, figuras e legendas.
