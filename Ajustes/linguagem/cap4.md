# Revisão de linguagem: Capítulo 4 (Fluxos do Sistema), arquivo 14_3_Cap.tex

O que mais pesa no capítulo são os parágrafos que carregam muitas ideias de uma vez, com vários passos numerados, regras e exceções na mesma frase. Os piores são o parágrafo de validação do cadastro (linha 78), o da leitura pela aquisição (113), o da gravação pelo worker (136), o da execução do comando (259) e o da detecção do alarme (293). A solução quase sempre é a mesma: dividir em frases curtas, uma ideia por frase, e explicar em meia frase os termos que aparecem sem definição (fila, trava, qualidade, Agendador, detector, banda morta no histórico, interpretador). Quase não há palavras empoladas. O vocabulário já é bastante direto, e o ganho está no tamanho das frases. Há 43 sugestões, mais 2 marcas de "avaliar corte" e 2 observações de conteúdo no fim. Tabelas, legendas e figuras não foram alteradas, e os trechos já claros ficaram de fora.

---

## Fluxos do Sistema (abertura, linhas 23 a 52)

### 1. Linha 25: blocos e serviços numa só frase

Atual:
```latex
\par Os blocos correspondem aos serviços da arquitetura e têm as posições fixas da Figura~\ref{fig:fx_mapa}. O navegador e o equipamento de campo ficam fora do servidor. Dentro dele, em contêineres próprios, estão a aplicação Web, que entrega as telas, a \sigla{api}, que concentra as regras de funcionamento, o \emph{worker}, que retira tarefas das filas e grava no banco, a aquisição, que conversa com o equipamento, e o \emph{runtime} de scripts, que executa o código dos administradores. O PostgreSQL guarda os dados que precisam durar, e o Redis guarda o valor atual de cada tag, as filas e as travas e transporta a comunicação entre os serviços.
```
Sugestão:
```latex
\par Os blocos correspondem aos serviços da arquitetura e ficam sempre nas posições da Figura~\ref{fig:fx_mapa}. O navegador e o equipamento de campo ficam fora do servidor. Dentro dele, cada serviço roda em um contêiner próprio. A aplicação Web entrega as telas. A \sigla{api} concentra as regras de funcionamento. O \emph{worker} retira tarefas das filas, que são listas de tarefas esperando a vez, e grava no banco. A aquisição conversa com o equipamento. O \emph{runtime} de scripts executa o código dos administradores. O PostgreSQL guarda os dados que precisam durar. O Redis guarda o valor atual de cada tag, as filas e as travas, que impedem dois processos de fazer a mesma coisa ao mesmo tempo. Ele também transporta a comunicação entre os serviços.
```
Por quê: uma lista de sete serviços dentro de uma frase vira frases curtas, e fila e trava são explicadas na primeira vez.

### 2. Linha 52: legenda das figuras

Atual:
```latex
\par Em todas as figuras, a linha cheia indica o caminho normal, a tracejada indica uma resposta e a de traço e ponto indica um caminho alternativo, percorrido quando alguma peça falha. Os números entre parênteses seguem a ordem dos passos, e o mesmo número em dois trechos de linha indica um único passo que atravessa o Redis, como nas chamadas entre a \sigla{api} e a aquisição, que o Moleculer transporta por esse banco \cite{MOLECULER_DOCS,REDIS_DOCS}. Os passos alternativos recebem o número do passo normal e uma letra, como em (4b). Cada fluxo termina com o que acontece quando uma peça deixa de funcionar.
```
Sugestão:
```latex
\par Em todas as figuras, a linha cheia indica o caminho normal, a tracejada indica uma resposta e a de traço e ponto indica um caminho alternativo, percorrido quando alguma peça falha. Os números entre parênteses seguem a ordem dos passos. Quando o mesmo número aparece em dois trechos de linha, é um único passo que passa pelo Redis, como nas chamadas entre a \sigla{api} e a aquisição, que o Moleculer transporta por esse banco \cite{MOLECULER_DOCS,REDIS_DOCS}. Os passos alternativos levam o número do passo normal e uma letra, como em (4b). Cada fluxo termina com o que acontece quando uma peça deixa de funcionar.
```
Por quê: a segunda frase juntava a ordem dos passos e a regra do número repetido.

---

## Cadastro de uma Tag (linhas 56 a 88)

### 3. Linha 78: validação e gravação do cadastro

Atual:
```latex
\par O administrador abre a tela de tags de um dispositivo, entregue pela aplicação Web (1). Ao salvar o formulário, o navegador envia o pedido de criação à \sigla{api} (2), com o \emph{token} de acesso, a credencial digital que identifica o usuário. A \sigla{api} confere no Redis se a sessão é válida e quais permissões o usuário possui (3) e aplica as regras do cadastro: a combinação de tipo de registrador, tipo bruto e ordem de bytes precisa existir no protocolo Modbus, o tamanho da tag não pode passar do limite do dispositivo, e a retenção e o volume de histórico por dia não podem superar os limites configurados. Um endereço sobreposto ao de outra tag apenas gera um aviso. Aprovado o pedido, a \sigla{api} grava (4) em uma única transação, operação em que tudo é gravado ou nada é gravado, a tag, o mapeamento Modbus e uma linha no registro de mudanças do cadastro, com a nova versão de configuração da planta. Essa técnica, conhecida como \emph{outbox}, garante que nunca exista tag sem o registro da mudança, nem o contrário.
```
Sugestão:
```latex
\par O administrador abre a tela de tags de um dispositivo, entregue pela aplicação Web (1). Ao salvar o formulário, o navegador envia o pedido de criação à \sigla{api} (2), junto com o \emph{token} de acesso, a credencial digital que identifica o usuário. A \sigla{api} confere no Redis se a sessão é válida e quais permissões o usuário tem (3). Depois, aplica as regras do cadastro. A combinação de tipo de registrador, tipo bruto e ordem de bytes precisa existir no protocolo Modbus. O tamanho da tag não pode passar do limite do dispositivo. A retenção e o volume de histórico por dia não podem superar os limites configurados. Um endereço que se sobrepõe ao de outra tag apenas gera um aviso. Se o pedido é aprovado, a \sigla{api} grava a tag, o mapeamento Modbus e uma linha no registro de mudanças do cadastro, com a nova versão de configuração da planta (4). Tudo isso é gravado em uma única transação, ou seja, ou grava tudo ou não grava nada. Essa técnica, conhecida como \emph{outbox}, garante que nunca exista tag sem o registro da mudança, nem o contrário.
```
Por quê: o maior parágrafo do capítulo, com dois dois-pontos e uma explicação no meio da frase da gravação. Nada saiu.

### 4. Linha 80: evento e Agendador

Atual:
```latex
\par A \sigla{api} responde ao navegador (5) e publica o evento de mudança do cadastro (6), que informa a planta, a versão e os motivos da alteração. O Moleculer entrega o evento, pelo Redis, ao Agendador, que roda dentro da aquisição (7). Como a aquisição não tem banco de dados, o Agendador pede à \sigla{api} a configuração pronta do dispositivo (8), guarda-a no Redis e na memória e inclui a tag no ciclo do dispositivo. Se já existe uma tarefa periódica com o mesmo período, a tag entra no plano de leitura junto das demais. Se o período é novo, somente a tarefa afetada é recriada. A primeira leitura acontece no ciclo seguinte, e até lá a tela mostra a tag como sem dado.
```
Sugestão:
```latex
\par A \sigla{api} responde ao navegador (5) e publica o evento de mudança do cadastro (6), que informa a planta, a versão e os motivos da alteração. O Moleculer entrega o evento, pelo Redis, ao Agendador (7), a parte da aquisição que marca quando cada dispositivo deve ser lido. Como a aquisição não tem banco de dados, o Agendador pede à \sigla{api} a configuração pronta do dispositivo (8), guarda-a no Redis e na memória e inclui a tag no ciclo do dispositivo. Se já existe uma tarefa periódica com o mesmo período, a tag entra no plano de leitura junto com as demais. Se o período é novo, só a tarefa afetada é recriada. A primeira leitura acontece no ciclo seguinte, e até lá a tela mostra a tag como sem dado.
```
Por quê: o Agendador aparece pela primeira vez sem explicação (a definição vem do texto da linha 113).

### 5. Linha 84: exclusão e pastas

Atual:
```latex
\par A tag pertence para sempre ao dispositivo em que nasceu e pode ser colocada em uma pasta da árvore de pastas da planta, independente da lista de dispositivos, o que permite agrupar tags de dispositivos diferentes sem alterar a leitura. Seu identificador textual é único no sistema, e a exclusão exige que o administrador o digite para confirmar. A tag sai da lista na mesma hora, e suas leituras saem do banco depois, em segundo plano, para que a exclusão não mantenha uma única operação aberta sobre milhões de linhas.
```
Sugestão:
```latex
\par A tag fica sempre no dispositivo em que foi criada. Ela pode ser colocada em uma pasta da árvore de pastas da planta, que é independente da lista de dispositivos. Assim, é possível agrupar tags de dispositivos diferentes sem alterar a leitura. O identificador em texto da tag é único no sistema, e para excluir a tag o administrador precisa digitá-lo, como confirmação. A tag some da lista na mesma hora. Suas leituras são apagadas do banco depois, em segundo plano, para que a exclusão não deixe uma única operação aberta sobre milhões de linhas.
```
Por quê: "nasceu", "independente da lista" e "saem do banco" ficam concretos, e a frase única vira cinco.

### 6. Linha 86: falhas do cadastro

Atual:
```latex
\par Quando a validação falha, o caminho termina no passo (4b): a \sigla{api} recusa o pedido com uma mensagem, e nada é gravado. Se outro usuário alterou a mesma tag antes, a versão não confere, o pedido é recusado por conflito e a tela oferece recarregar o formulário. Se o processo cai entre a gravação e a publicação do evento (6b), a mudança continua no \emph{outbox}, e uma verificação periódica publica o evento de novo. Além disso, a cada cinco minutos a réplica do Agendador que está à frente das demais (réplica líder) compara a versão do cadastro de cada planta e relê apenas as que mudaram. Um evento com versão anterior à conhecida é ignorado, o que impede que uma resposta atrasada traga de volta uma configuração antiga.
```
Sugestão:
```latex
\par Quando a validação falha, o caminho termina no passo (4b). A \sigla{api} recusa o pedido com uma mensagem, e nada é gravado. Se outro usuário alterou a mesma tag antes, a versão não confere, o pedido é recusado por conflito e a tela oferece recarregar o formulário. Se o processo cai entre a gravação e a publicação do evento (6b), a mudança continua registrada no \emph{outbox}, e uma verificação periódica publica o evento de novo. Além disso, a cada cinco minutos a réplica líder do Agendador, a cópia que coordena as demais, compara a versão do cadastro de cada planta e relê só as que mudaram. Um evento com versão mais antiga que a conhecida é ignorado, o que impede que uma resposta atrasada traga de volta uma configuração antiga.
```
Por quê: "à frente das demais" é vago. Confira se "a cópia que coordena as demais" descreve bem a réplica líder, porque é uma leitura minha do termo.

### 7. Linha 88: falha de peças no cadastro

Atual:
```latex
\par Sem a \sigla{api}, o Redis ou o banco, o cadastro não é possível, mas a leitura do campo continua, porque a aquisição mantém a última configuração recebida. Com a aquisição parada, o cadastro funciona normalmente, e ao voltar o Agendador compara as versões e atualiza as plantas que mudaram, sem perder nenhuma mudança.
```
Sugestão:
```latex
\par Se a \sigla{api}, o Redis ou o banco ficam fora do ar, o cadastro não é possível, mas a leitura do campo continua, porque a aquisição mantém a última configuração recebida. Se a aquisição para, o cadastro funciona normalmente. Quando ela volta, o Agendador compara as versões, atualiza as plantas que mudaram e não perde nenhuma mudança.
```
Por quê: "Sem a api, o Redis ou o banco" lê-se como lista de itens, e a mudança deixa a causa e o efeito claros. Veja também a observação de conteúdo 1 no fim.

---

## Do Campo ao Banco (linhas 92 a 144)

### 8. Linha 92: abertura do fluxo

Atual:
```latex
\par Este é o fluxo principal de um supervisório, da leitura no registrador do equipamento até o histórico no banco. São três etapas encadeadas por filas: a aquisição lê o equipamento e publica o resultado, o \emph{worker} atualiza o valor atual e grava o histórico, e rotinas periódicas calculam os resumos. As filas permitem aumentar a capacidade de cada etapa separadamente e impedem que a falha de uma derrube as outras \cite{BULLMQ_DOCS}. A Figura~\ref{fig:fx_campo_aquisicao} mostra a primeira etapa, e a Figura~\ref{fig:fx_campo_worker} mostra a segunda.
```
Sugestão:
```latex
\par Este é o fluxo principal de um supervisório, da leitura do equipamento até o histórico no banco. Ele tem três etapas ligadas por filas. Na primeira, a aquisição lê o equipamento e publica o resultado. Na segunda, o \emph{worker} atualiza o valor atual e grava o histórico. Na terceira, rotinas periódicas calculam os resumos. As filas permitem aumentar a capacidade de cada etapa separadamente e impedem que a falha de uma derrube as outras \cite{BULLMQ_DOCS}. A Figura~\ref{fig:fx_campo_aquisicao} mostra a primeira etapa, e a Figura~\ref{fig:fx_campo_worker} mostra a segunda.
```
Por quê: a lista de três etapas estava dentro de uma frase com dois-pontos. Perde só "no registrador", detalhe que a figura seguinte já mostra.

### 9. Linha 113: leitura pela aquisição

Atual:
```latex
\par Para cada dispositivo, uma tarefa periódica do Agendador, com defasagem fixa para espalhar as leituras no tempo, marca no Redis que o dispositivo deve ser lido (1). O Agendador chama então a ação de leitura da aquisição pelo Moleculer (2), com o plano de leitura, que reúne as tags na hora de ser lidas. Cada dispositivo fica fixo em uma réplica, e uma trava no Redis impede dois ciclos simultâneos no mesmo dispositivo. A aquisição agrupa os registradores contíguos em blocos e envia uma requisição Modbus por bloco ao \sigla{clp} (3) \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}, que responde com os registradores brutos (4). Para cada bloco, a aquisição carimba o instante da resposta, decodifica os bytes, aplica a escala de engenharia, atribui a qualidade e um número de sequência, que indica a ordem das leituras, e publica o resultado em duas filas do Redis, uma de histórico e outra de valor atual, chamada de ingestão (5). O carimbo acompanha o valor por todo o caminho, sem ser alterado.
```
Sugestão:
```latex
\par Para cada dispositivo, uma tarefa periódica do Agendador marca no Redis que o dispositivo deve ser lido (1). Essas tarefas têm uma defasagem fixa, para espalhar as leituras no tempo. O Agendador chama então a ação de leitura da aquisição pelo Moleculer (2), com o plano de leitura, que reúne as tags na hora de lê-las. Cada dispositivo fica fixo em uma réplica, e uma trava no Redis impede dois ciclos ao mesmo tempo no mesmo dispositivo. A aquisição agrupa os registradores vizinhos em blocos e envia uma requisição Modbus por bloco ao \sigla{clp} (3) \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}. O \sigla{clp} responde com os registradores brutos (4). Para cada bloco, a aquisição carimba o instante da resposta, decodifica os bytes e aplica a escala de engenharia. Depois, atribui a qualidade, que indica se o valor é confiável, e um número de sequência, que indica a ordem das leituras. Por fim, publica o resultado em duas filas do Redis, uma de histórico e outra de valor atual, chamada de ingestão (5). O carimbo acompanha o valor por todo o caminho, sem ser alterado.
```
Por quê: sete ações numa frase só. Dividir deixa a ordem dos passos visível, e "qualidade" ganha uma explicação curta. "Contíguos" virou "vizinhos".

### 10. Linha 115: falha de leitura

Atual:
```latex
\par Se o equipamento não responde no prazo, se a conexão falha ou se ele devolve uma exceção Modbus (4b), a aquisição publica as tags com qualidade ruim e o motivo da falha (5b), e o Agendador conta a falha no seu disjuntor, mecanismo que acompanha as falhas seguidas do dispositivo. Depois de um número configurável de ciclos falhos seguidos, por padrão três, o dispositivo passa a degradado, estado informado a cada sessenta segundos e que origina o evento de falha de comunicação. O primeiro ciclo bem-sucedido fecha o estado.
```
Sugestão:
```latex
\par O equipamento pode não responder no prazo, a conexão pode falhar ou ele pode devolver uma exceção Modbus, que é uma resposta de erro do protocolo (4b). Nesses casos, a aquisição publica as tags com qualidade ruim e o motivo da falha (5b). O Agendador conta a falha no seu disjuntor, mecanismo que acompanha as falhas seguidas de cada dispositivo. Depois de um número configurável de ciclos com falha seguidos, por padrão três, o dispositivo passa ao estado degradado. Esse estado é informado a cada sessenta segundos e gera o evento de falha de comunicação. O primeiro ciclo bem-sucedido encerra o estado.
```
Por quê: três condições de falha encadeadas com "se... se... se" e duas consequências na mesma frase.

### 11. Linha 117: leituras agrupadas

Atual:
```latex
\par Tags do mesmo dispositivo com períodos diferentes não geram pedidos separados: as que vencem juntas viram uma leitura só, de modo que doze tags com período de um segundo resultam em uma leitura por segundo. O comando de um operador passa na frente da leitura, e quando o serviço volta de uma queda não há rajada de leituras acumuladas. O trabalho vai para filas separadas por faixa de tempo de varredura, para que uma leitura rápida não espere por uma lenta. Aumentar a capacidade significa acrescentar réplicas, sem alterar o cadastro. A cada cinco minutos, a réplica líder confere o cadastro de todas as plantas e corrige o que divergir.
```
Sugestão:
```latex
\par Tags do mesmo dispositivo, mesmo com períodos diferentes, não geram pedidos separados quando chega a hora de lê-las ao mesmo tempo. Elas viram uma leitura só, de modo que doze tags com período de um segundo resultam em uma leitura por segundo. O comando de um operador passa na frente da leitura. Quando o serviço volta de uma queda, não há uma rajada de leituras acumuladas. O trabalho vai para filas separadas por faixa de tempo de varredura, para que uma leitura rápida não espere por uma lenta. Para aumentar a capacidade, basta acrescentar réplicas, sem alterar o cadastro. A cada cinco minutos, a réplica líder confere o cadastro de todas as plantas e corrige o que divergir.
```
Por quê: "as que vencem juntas" é jargão de agendador, e "viram uma leitura só" fica mais claro com "quando chega a hora de lê-las ao mesmo tempo".

### 12. Linha 136: gravação pelo worker

Atual:
```latex
\par A segunda etapa é feita pelo \emph{worker} da família de filas do sistema, que retira as leituras da fila de ingestão (1) e grava o valor atual no Redis, com a qualidade e o carimbo (2). A gravação é atômica, ou seja, acontece de uma só vez, e usa o número de sequência, e nunca o relógio, para decidir se a leitura é mais nova, de modo que uma leitura atrasada jamais sobrescreve um valor recente. Esse número combina uma época, iniciada pelo relógio do Redis e que só cresce, e um contador, e por isso a ordem não depende dos relógios das réplicas. Em seguida, o \emph{worker} retira as leituras da fila de histórico e decide, no Redis, se cada uma deve ser gravada (3), conforme o modo da tag: não gravar, gravar toda leitura, ou gravar quando o valor muda além da banda morta e, além disso, periodicamente. A decisão atômica evita duplicar uma linha quando duas réplicas processam a mesma tag. Por fim, o \emph{worker} insere a linha (4) na tabela de leituras, dividida em partes por mês (partições), criadas com antecedência de três meses \cite{POSTGRESQL_DOCS}.
```
Sugestão:
```latex
\par A segunda etapa é feita pelo \emph{worker} da família de filas do sistema. Ele retira as leituras da fila de ingestão (1) e grava o valor atual no Redis, com a qualidade e o carimbo (2). A gravação é atômica, ou seja, acontece de uma só vez. Para saber se uma leitura é mais nova, ela usa o número de sequência, e nunca o relógio, e por isso uma leitura atrasada jamais sobrescreve um valor recente. Esse número combina uma época, que começa pelo relógio do Redis e só cresce, com um contador. Assim, a ordem não depende dos relógios das réplicas. Em seguida, o \emph{worker} retira as leituras da fila de histórico e decide, no Redis, se cada uma deve ser gravada (3). A decisão depende do modo da tag, que pode ser não gravar, gravar toda leitura, ou gravar quando o valor muda além da banda morta, que é a variação pequena demais para valer uma nova linha, e também periodicamente. Como a decisão é atômica, duas réplicas que processam a mesma tag não duplicam a linha. Por fim, o \emph{worker} insere a linha (4) na tabela de leituras, dividida em partes por mês (partições), criadas com três meses de antecedência \cite{POSTGRESQL_DOCS}.
```
Por quê: oito ideias em uma só passagem, e "banda morta" aparece sem explicação (no alarme ela só é explicada bem depois).

### 13. Linha 138: resumos

Atual:
```latex
\par Tarefas executadas a cada minuto calculam os resumos (5). Para cada tag analógica, a tarefa calcula, em \sigla{sql} e no próprio banco, a média ponderada no tempo, o mínimo, o máximo, a contagem e a cobertura de cada intervalo. O resumo de um minuto só existe para tags com período menor que sessenta segundos, e o de uma hora existe para toda tag analógica com histórico. O mínimo e o máximo acompanham a média porque ela sozinha esconde picos curtos. Uma leitura atrasada dispara o recálculo apenas da faixa afetada. A cada trinta segundos, o último valor bom de cada tag é copiado para uma tabela do banco, chamada de espelho, que repõe os valores no Redis caso ele volte vazio.
```
Sugestão:
```latex
\par Tarefas que rodam a cada minuto calculam os resumos (5). Para cada tag analógica, a tarefa calcula, no próprio banco e em \sigla{sql}, a média ponderada no tempo, em que cada valor conta pelo tempo que durou, o mínimo, o máximo, a contagem e a cobertura de cada intervalo. O resumo de um minuto só existe para tags com período menor que sessenta segundos. O resumo de uma hora existe para toda tag analógica com histórico. O mínimo e o máximo acompanham a média porque só a média esconde picos curtos. Quando chega uma leitura atrasada, só a faixa afetada é recalculada. A cada trinta segundos, o último valor bom de cada tag é copiado para uma tabela do banco, o espelho. Se o Redis voltar vazio, o espelho repõe os valores.
```
Por quê: explica "média ponderada no tempo" em meia frase e separa as regras de um minuto e de uma hora.

### 14. Linha 142: caminho alternativo do worker

Atual:
```latex
\par No caminho alternativo, o \emph{worker} recebe a leitura de qualidade ruim (1), mantém o valor e o carimbo anteriores e registra o motivo e desde quando o problema dura (2b). A tela segue com o último valor e, depois de três períodos sem leitura nova, o identifica como desatualizado. Uma leitura com dado inválido vai para uma fila separada, a fila de mortos, para análise. Uma falha passageira do banco ou da rede apenas faz o trabalho ser repetido com espera crescente, sem perder a leitura.
```
Sugestão:
```latex
\par No caminho alternativo, o \emph{worker} recebe a leitura de qualidade ruim (1), mantém o valor e o carimbo anteriores e registra o motivo e desde quando o problema dura (2b). A tela segue mostrando o último valor e, depois de três períodos sem leitura nova, o identifica como desatualizado. Uma leitura com dado inválido vai para uma fila separada, a fila de mortos, para análise. Se o banco ou a rede falham por pouco tempo, o trabalho é repetido com espera crescente, sem perder a leitura.
```
Por quê: a última frase estava em voz de objeto ("faz o trabalho ser repetido"). Ajuste pequeno.

### 15. Linha 144: falhas no fluxo

Atual:
```latex
\par Se o \emph{worker} para, as leituras se acumulam nas filas e são processadas na ordem quando ele volta. Se o Redis cai, a aquisição não publica nem obtém a trava, o ciclo se perde e, ao voltar, o Agendador retoma o ritmo normal. Se o Redis volta vazio, uma rotina refaz o valor atual a partir do espelho, marcado como desatualizado até a próxima leitura. Se o banco fica indisponível, os trabalhos de histórico esperam e tentam de novo, o valor atual segue no Redis, mas a tela de valores informa indisponibilidade. Se a fila de histórico passa de metade da memória do Redis, o trabalho mais antigo que três minutos é descartado, proteção para não esgotar a memória.
```
Sugestão:
```latex
\par Se o \emph{worker} para, as leituras se acumulam nas filas e são processadas na ordem quando ele volta. Se o Redis cai, a aquisição não publica nem obtém a trava, o ciclo se perde e, ao voltar, o Agendador retoma o ritmo normal. Se o Redis volta vazio, uma rotina refaz o valor atual a partir do espelho. Esses valores ficam marcados como desatualizados até a próxima leitura. Se o banco fica indisponível, os trabalhos de histórico esperam e tentam de novo. O valor atual segue no Redis, mas a tela de valores informa indisponibilidade. Se a fila de histórico passa de metade da memória do Redis, os trabalhos com mais de três minutos de espera são descartados, para não esgotar a memória.
```
Por quê: "marcado" ficava sem sujeito claro, e a frase do banco misturava três efeitos. Atenção: "trabalho mais antigo que três minutos" vira "trabalhos com mais de três minutos de espera", leitura minha. Confirme.

---

## Do Banco à Tela em Tempo Real (linhas 148 a 175)

### 16. Linha 148: polling

Atual:
```latex
\par A tela obtém o valor atual por \emph{polling} curto, em vez de manter uma conexão permanente, o que simplifica a recuperação de falhas. Em um período configurável entre um e dez segundos, ela pergunta os valores das tags da planta aberta, e a resposta vem apenas do Redis, sem consultar o banco nem o equipamento, como resume a Figura~\ref{fig:fx_polling}.
```
Sugestão:
```latex
\par A tela obtém o valor atual por \emph{polling} curto, isto é, perguntando de tempos em tempos, em vez de manter uma conexão sempre aberta. Isso simplifica a recuperação de falhas. A cada período configurável, entre um e dez segundos, a tela pergunta os valores das tags da planta aberta. A resposta vem só do Redis, sem consultar o banco nem o equipamento, como resume a Figura~\ref{fig:fx_polling}.
```
Por quê: explica o termo na hora e separa o motivo da escolha do funcionamento.

### 17. Linha 167: pedido de valores

Atual:
```latex
\par A tela envia o pedido à \sigla{api} (1), com o \emph{token} de acesso e a identificação da última resposta. A \sigla{api} verifica a assinatura do \emph{token} e confere no Redis se a sessão não foi revogada e quais são as permissões do usuário (2). Essas permissões ficam em uma cópia de acesso rápido (\emph{cache}), apagada sempre que o cargo, o grupo ou o vínculo do usuário muda, de modo que a alteração vale já no pedido seguinte. A \sigla{api} lê do Redis, em lote, o valor atual de cada tag (3) e define sua qualidade: boa, desatualizada, com falha, sem dado, implausível ou sem acesso. Se nada mudou, a resposta é vazia. Caso contrário, a \sigla{api} devolve os valores (4), e a tela atualiza o que mudou.
```
Sugestão:
```latex
\par A tela envia o pedido à \sigla{api} (1), com o \emph{token} de acesso e a identificação da última resposta recebida. A \sigla{api} verifica a assinatura do \emph{token} e confere no Redis se a sessão não foi revogada e quais são as permissões do usuário (2). Essas permissões ficam guardadas em uma cópia de acesso rápido (\emph{cache}). A cópia é apagada sempre que muda o cargo, o grupo ou o vínculo do usuário, e assim a mudança já vale no pedido seguinte. Depois, a \sigla{api} lê do Redis, de uma só vez, o valor atual de cada tag (3) e define a qualidade de cada um: boa, desatualizada, com falha, sem dado, implausível ou sem acesso. Se nada mudou desde a última resposta, a resposta vem vazia. Se mudou, a \sigla{api} devolve os valores (4), e a tela atualiza só o que mudou.
```
Por quê: a frase sobre o cache tinha uma oração dentro da outra ("apagada sempre que... de modo que..."). A de lote também ficou mais direta.

### 18. Linha 171: componente único

Atual:
```latex
\par A lista de acompanhamento, o sinótico, o medidor do painel e a grade de tags do cadastro usam a mesma consulta e o mesmo componente de exibição, de modo que a qualidade aparece da mesma forma em qualquer lugar. Para que a tela não abra vazia, a primeira resposta pode vir junto com a página. A grade de tags mostra também a idade do valor, o que permite conferir um mapeamento recém-cadastrado sem sair do cadastro.
```
Sugestão:
```latex
\par A lista de acompanhamento, o sinótico, o medidor do painel e a grade de tags do cadastro usam a mesma consulta e o mesmo componente de exibição. Por isso, a qualidade aparece da mesma forma em qualquer lugar. A primeira resposta pode vir junto com a página, para que a tela não abra vazia. A grade de tags mostra também a idade do valor, o que permite conferir um mapeamento recém-cadastrado sem sair do cadastro.
```
Por quê: troca a ordem para a causa vir antes do efeito. Se "sinótico" (tela com o desenho do processo e os valores ao vivo) ainda não foi explicado antes, vale uma meia frase na primeira ocorrência do trabalho.

---

## Histórico e Tendência (linhas 179 a 209)

### 19. Linha 179: abertura

Atual:
```latex
\par A consulta ao histórico alimenta os gráficos de tendência. O desafio é entregar rapidamente janelas de alguns minutos a dez anos sem que uma consulta mal dimensionada prejudique as telas e os comandos. Para isso, o sistema escolhe, pelo tamanho da janela, entre a leitura bruta e os resumos já calculados, como mostra a Figura~\ref{fig:fx_tendencia}.
```
Sugestão:
```latex
\par A consulta ao histórico alimenta os gráficos de tendência. O desafio é responder rápido a janelas de tempo que vão de alguns minutos a dez anos, sem que uma consulta pesada prejudique as telas e os comandos. Para isso, o sistema escolhe, conforme o tamanho da janela, entre as leituras brutas e os resumos já calculados, como mostra a Figura~\ref{fig:fx_tendencia}.
```
Por quê: "mal dimensionada" e "entregar rapidamente janelas" ficam mais diretos.

### 20. Linha 199: pedido de tendência

Atual:
```latex
\par A tela envia o pedido de tendência (1), com até doze tags e o intervalo desejado, e a \sigla{api} confere no Redis a sessão, as permissões e a cota de trinta consultas pesadas por minuto para cada usuário (2). O detalhe depende da janela: até uma hora, as leituras brutas, até um dia, a média de um minuto, até sete dias, a de dez minutos, até trinta e um dias, a de trinta minutos, e acima disso a de seis horas. Toda média vem com o mínimo e o máximo do intervalo, para que um pico de poucos segundos não desapareça. A \sigla{api} procura a resposta no \emph{cache} de tendência (3), que só guarda janelas já fechadas, com fim anterior a trinta minutos, séries pequenas e consultas que levaram mais de trezentos milissegundos, e apenas enquanto o Redis tem folga de memória.
```
Sugestão:
```latex
\par A tela envia o pedido de tendência (1), com até doze tags e o intervalo desejado. A \sigla{api} confere no Redis a sessão, as permissões e a cota de trinta consultas pesadas por minuto para cada usuário (2). O nível de detalhe depende do tamanho da janela. Até uma hora, vêm as leituras brutas. Até um dia, a média de um minuto. Até sete dias, a de dez minutos. Até trinta e um dias, a de trinta minutos. Acima disso, a de seis horas. Toda média vem com o mínimo e o máximo do intervalo, para que um pico de poucos segundos não desapareça. Depois, a \sigla{api} procura a resposta no \emph{cache} de tendência (3). Esse \emph{cache} só guarda janelas já fechadas, com fim anterior a trinta minutos, séries pequenas e consultas que levaram mais de trezentos milissegundos, e só funciona enquanto o Redis tem folga de memória.
```
Por quê: a lista de faixas de janela, cheia de vírgulas, vira frases curtas que se leem como tabela.

### 21. Linha 203: atualização da tela

Atual:
```latex
\par Depois da primeira carga, a tela pede apenas o trecho novo, com recarga completa a cada quinze minutos. Só o painel visível atualiza, e a página respeita um limite de pedidos por minuto, com prioridade para o clique do usuário. Para a leitura bruta página por página, a \sigla{api} devolve um marcador de posição assinado (cursor), que só vale para a tag e o usuário da consulta.
```
Sugestão:
```latex
\par Depois da primeira carga, a tela pede só o trecho novo e recarrega tudo a cada quinze minutos. Apenas o painel que está visível é atualizado. A página respeita um limite de pedidos por minuto e dá prioridade ao clique do usuário. Quando a leitura bruta é entregue página por página, a \sigla{api} devolve um marcador de posição assinado (cursor), que só vale para a tag e o usuário daquela consulta.
```
Por quê: quatro ideias em duas frases viram quatro frases curtas.

### 22. Linha 205: tipos de gráfico

Atual:
```latex
\par O painel oferece três gráficos: linha, barra e medidor. O de linha mostra a leitura bruta até uma hora e as médias acima disso, com a faixa entre o mínimo e o máximo, e a linha se interrompe onde falta dado. O de barra apresenta, por intervalo, a média, o mínimo, o máximo, o volume ou o tempo ligado. O medidor mostra o valor atual, pelo fluxo anterior. A página tem um limite próprio de vinte pedidos por minuto, para que um painel cheio não esgote a cota do usuário.
```
Sugestão:
```latex
\par O painel oferece três gráficos: linha, barra e medidor. O de linha mostra a leitura bruta até uma hora e as médias acima disso, com a faixa entre o mínimo e o máximo. A linha se interrompe onde falta dado. O de barra apresenta, por intervalo, a média, o mínimo, o máximo, o volume ou o tempo ligado. O medidor mostra o valor atual, obtido como no fluxo anterior. A página tem um limite próprio de vinte pedidos por minuto, para que um painel cheio não esgote a cota do usuário.
```
Por quê: "pelo fluxo anterior" é vago e o final da frase do gráfico de linha estava colado por vírgula. Veja também a marca de "avaliar corte" 1 (limite repetido).

### 23. Linha 207: teto de retenção

Atual:
```latex
\par Há um teto de retenção de até dez anos, e nenhuma consulta devolve dado mais antigo que ele. Se o teto é reduzido, a mudança vale na hora, antes do apagamento noturno, e a tela de administração mostra antes o impacto, com o número de tags e o intervalo de dados perdidos, e pede uma confirmação digitada.
```
Sugestão:
```latex
\par O sistema tem um teto de retenção, de até dez anos, e nenhuma consulta devolve dado mais antigo que ele. Se o teto é reduzido, a mudança vale na hora, antes do apagamento noturno. Antes de confirmar, a tela de administração mostra o impacto, com o número de tags afetadas e o intervalo de dados que será perdido, e pede uma confirmação digitada.
```
Por quê: "teto de até dez anos" soava contraditório, e a ordem dos acontecimentos fica na ordem em que ocorrem. Veja também a marca de "avaliar corte" 2.

### 24. Linha 209: recusas e falhas da consulta

Atual:
```latex
\par Um pedido grande demais é recusado, nunca cortado em silêncio, assim como a agregação que o tipo da tag não possui, como a média de uma tag digital. Se as conexões pesadas estão ocupadas ou se falta o Redis, a resposta é de indisponibilidade. Sem o banco, não há histórico a devolver. Em nenhum caso a consulta altera dado, e sua falha não prejudica a exibição dos valores atuais, que têm caminho próprio.
```
Sugestão:
```latex
\par Um pedido grande demais é recusado, e nunca cortado em silêncio. O mesmo vale para um cálculo de resumo que o tipo da tag não permite, como a média de uma tag digital. Se as conexões pesadas estão ocupadas ou o Redis está fora do ar, a resposta é de indisponibilidade. Sem o banco, não há histórico a devolver. A consulta nunca altera dados, e a falha dela não prejudica a exibição dos valores atuais, que têm caminho próprio.
```
Por quê: "assim como a agregação que o tipo da tag não possui" era a frase mais difícil do trecho. "Agregação" vira "cálculo de resumo".

---

## Comando em Quatro Fases (linhas 213 a 267)

### 25. Linha 232: verificação

Atual:
```latex
\par Na verificação, o navegador envia à \sigla{api} a tag, o valor e uma chave de idempotência (1). A \sigla{api} lê no Redis o cargo e as permissões do usuário, confere a permissão de comando e as janelas de limite de comandos, por usuário e por usuário e tag (2). A tag precisa permitir escrita, o dispositivo precisa estar habilitado, e a \sigla{api} pergunta ao Agendador, pela aquisição, o estado de comunicação do dispositivo (3). Na dúvida, a verificação bloqueia: sem a certeza de que o equipamento se comunica, o comando é recusado. Por fim, o tipo e a faixa do valor são conferidos. Aprovado o pedido, a \sigla{api} grava o comando como verificado (4) e devolve ao navegador (5) um \emph{token} de confirmação com validade de cento e vinte segundos. Repetir o pedido com a mesma chave devolve o mesmo \emph{token}, o que impede dois comandos por um duplo clique.
```
Sugestão:
```latex
\par Na verificação, o navegador envia à \sigla{api} a tag, o valor e uma chave de idempotência, um código que identifica o pedido (1). A \sigla{api} lê no Redis o cargo e as permissões do usuário e confere a permissão de comando e os limites de comandos por janela de tempo, por usuário e por usuário e tag (2). A tag precisa permitir escrita, e o dispositivo precisa estar habilitado. A \sigla{api} também pergunta ao Agendador, pela aquisição, se o dispositivo está se comunicando (3). Na dúvida, a verificação bloqueia: sem a certeza de que o equipamento se comunica, o comando é recusado. Por fim, confere o tipo e a faixa do valor. Se tudo está certo, a \sigla{api} grava o comando como verificado (4) e devolve ao navegador um \emph{token} de confirmação, válido por cento e vinte segundos (5). Se o mesmo pedido é repetido com a mesma chave, volta o mesmo \emph{token}, e assim um duplo clique não gera dois comandos.
```
Por quê: "chave de idempotência" ganha definição na primeira vez, e as exigências e as consequências ficam separadas.

### 26. Linha 234: confirmação

Atual:
```latex
\par Na confirmação, o operador revisa o resumo e confirma, e o navegador envia o \emph{token} à \sigla{api} (6). Só quem emitiu o comando pode confirmá-lo. A \sigla{api} confere o \emph{token} no Redis (7) e relê a permissão diretamente do banco, e não do \emph{cache}, de modo que uma permissão retirada nos últimos instantes já impede a confirmação (8). O comando passa a confirmado, e a resposta chega ao diálogo (9). Regras de unicidade no banco garantem no máximo um comando em andamento por tag, e uma rotina que roda a cada dez segundos fecha os comandos cujo prazo venceu.
```
Sugestão:
```latex
\par Na confirmação, o operador revisa o resumo e confirma, e o navegador envia o \emph{token} à \sigla{api} (6). Só quem emitiu o comando pode confirmá-lo. A \sigla{api} confere o \emph{token} no Redis (7) e relê a permissão direto no banco, e não no \emph{cache}. Assim, uma permissão retirada nos últimos instantes já impede a confirmação (8). O comando passa a confirmado, e a resposta chega ao diálogo (9). O banco tem regras que garantem no máximo um comando em andamento por tag. Uma rotina que roda a cada dez segundos fecha os comandos cujo prazo venceu.
```
Por quê: "regras de unicidade" fica mais natural como "O banco tem regras que garantem...".

### 27. Linha 259: execução

Atual:
```latex
\par Na execução, a \sigla{api} confere tudo mais uma vez (1), obtém no Redis a trava da tag, com validade de trinta e cinco segundos (2), e chama a ação de escrita da aquisição pelo Moleculer (3), sem fila e sem nova tentativa automática. A aquisição obtém no Redis a trava do dispositivo (4). O comando tem prioridade sobre as escritas automáticas e a leitura periódica, e nenhum byte é enviado depois de vinte e cinco segundos da chegada do pedido, para que o quadro não alcance o equipamento depois de a \sigla{api} ter desistido. A aquisição envia a escrita ao \sigla{clp} (5), e o sucesso é a resposta normal do equipamento, que repete o pedido enviado (6) e é conferida contra o endereço e o valor. Não há releitura do ponto. A aquisição publica o valor escrito como valor atual, e a próxima leitura periódica o corrige se o equipamento não o reteve. Em seguida, devolve o resultado à \sigla{api} (7) e deixa no Redis uma marca com o resultado, válida por uma hora. A \sigla{api} fecha o comando como executado, grava as transições e a auditoria (8), e o diálogo mostra que o equipamento confirmou a escrita (9).
```
Sugestão:
```latex
\par Na execução, a \sigla{api} confere tudo mais uma vez (1) e obtém no Redis a trava da tag, com validade de trinta e cinco segundos (2). Em seguida, chama a ação de escrita da aquisição pelo Moleculer (3), sem fila e sem nova tentativa automática. A aquisição obtém no Redis a trava do dispositivo (4). O comando tem prioridade sobre as escritas automáticas e sobre a leitura periódica. Nenhum byte é enviado depois de vinte e cinco segundos da chegada do pedido, para que o pedido de escrita não chegue ao equipamento quando a \sigla{api} já desistiu. A aquisição envia a escrita ao \sigla{clp} (5), que responde repetindo o pedido recebido (6). Essa resposta é conferida contra o endereço e o valor enviados, e é ela que indica o sucesso. O ponto não é lido de novo. A aquisição publica o valor escrito como valor atual, e a próxima leitura periódica o corrige se o equipamento não o guardou. Depois, devolve o resultado à \sigla{api} (7) e deixa no Redis uma marca com o resultado, válida por uma hora. A \sigla{api} fecha o comando como executado, grava as transições e a auditoria (8), e o diálogo mostra que o equipamento confirmou a escrita (9).
```
Por quê: era um dos parágrafos mais carregados do capítulo. "Quadro" (termo de protocolo) virou "pedido de escrita", e "reteve" virou "guardou".

### 28. Linha 261: auditoria

Atual:
```latex
\par A auditoria guarda quem emitiu o comando, o valor, quando ocorreu cada transição e o resultado, com uma cópia do nome da pessoa, da tag, da planta e do dispositivo. Regras automáticas do banco (gatilhos) impedem apagar ou alterar um comando já registrado.
```
Sugestão:
```latex
\par A auditoria guarda quem emitiu o comando, o valor, o momento de cada transição e o resultado. Guarda também uma cópia do nome da pessoa, da tag, da planta e do dispositivo. Regras automáticas do banco (gatilhos) impedem apagar ou alterar um comando já registrado.
```
Por quê: o "com uma cópia" ficava pendurado no fim de uma lista longa.

### 29. Linha 263: outras origens de escrita

Atual:
```latex
\par Além do usuário, o sistema aceita duas origens de escrita: o componente de conteúdo de uma tela, que passa por uma conferência e não pode pular a confirmação, e o script. A escrita em hora marcada é feita por um evento agendado que aciona um script, registrado como origem. Ela usa o mesmo executor da fase de execução, cede ao comando do operador e não tem limite de frequência próprio, de modo que evitar repetições sem fim é responsabilidade de quem escreve o script. A tag interna, que não tem equipamento, recebe o valor diretamente do sistema, sem passar pela aquisição.
```
Sugestão:
```latex
\par Além do usuário, o sistema aceita mais duas origens de escrita: o componente de conteúdo de uma tela e o script. O componente passa por uma conferência e não pode pular a confirmação. A escrita em hora marcada é feita por um evento agendado que aciona um script, e o script fica registrado como origem. Ela usa o mesmo executor da fase de execução e cede ao comando do operador. Não há limite de frequência próprio, e por isso quem escreve o script é responsável por evitar repetições sem fim. A tag interna não tem equipamento, e o sistema grava o valor dela diretamente, sem passar pela aquisição.
```
Por quê: "registrado como origem" tinha um sujeito ambíguo, e o fim da penúltima frase pedia releitura. A frase "não pode pular a confirmação" mantém o sentido original, mas confira se vale só para o componente, como ficou.

### 30. Linha 265: desfechos alternativos

Atual:
```latex
\par Há dois desfechos alternativos. Se o equipamento responde com exceção, com uma repetição que não confere ou não responde no prazo (6b), a escrita é tratada como falha, a mensagem pede que o operador confira o valor do ponto, e o comando não é repetido de forma automática. A falha também sinaliza o evento de falha de escrita do dispositivo. O segundo desfecho ocorre quando o próprio sistema perde o rastro, por exemplo, se a resposta da aquisição não chega à \sigla{api} (7b). A \sigla{api} consulta a marca de resultado no Redis e, se ela não existe, grava que a escrita foi abandonada, para que um pedido atrasado não escreva. O comando é fechado como sem confirmação do equipamento, e a tag fica bloqueada por trinta e cinco segundos.
```
Sugestão:
```latex
\par Há dois desfechos alternativos. No primeiro, o equipamento responde com uma exceção, devolve uma repetição que não confere com o pedido ou não responde no prazo (6b). A escrita é tratada como falha, a mensagem pede que o operador confira o valor do ponto, e o comando não é repetido automaticamente. A falha também ativa o evento de falha de escrita do dispositivo. No segundo, o próprio sistema perde o rastro do comando, por exemplo, quando a resposta da aquisição não chega à \sigla{api} (7b). Nesse caso, a \sigla{api} consulta a marca de resultado no Redis. Se a marca não existe, a \sigla{api} registra que a escrita foi abandonada, para que um pedido atrasado não escreva. O comando é fechado como sem confirmação do equipamento, e a tag fica bloqueada por trinta e cinco segundos.
```
Por quê: "O segundo desfecho" aparecia sem "o primeiro" explícito, e "sinaliza o evento" é pouco claro.

---

## Alarme (linhas 271 a 301)

### 31. Linha 271: o que é um alarme

Atual:
```latex
\par O alarme transforma uma condição do processo em um aviso que exige a atenção de uma pessoa. A condição é um evento da tag, formado por um comparador: a tag, um operador (maior, menor, igual, diferente, dentro ou fora da faixa, entre outros), o valor de referência e uma banda morta opcional, que evita que um valor oscilando em torno do limite abra e feche o alarme a cada leitura. Cada evento tem atrasos de ativação e de retorno, de zero a uma hora. O alarme liga um ou mais eventos a um de quatro níveis fixos, Crítico, Alto, Médio e Baixo, como mostra a Figura~\ref{fig:fx_alarme}.
```
Sugestão:
```latex
\par O alarme transforma uma condição do processo em um aviso que chama a atenção de uma pessoa. A condição é um evento da tag, definido por um comparador. O comparador reúne a tag, um operador (maior, menor, igual, diferente, dentro ou fora da faixa, entre outros), o valor de referência e, se for preciso, uma banda morta. A banda morta evita que um valor oscilando em torno do limite abra e feche o alarme a cada leitura. Cada evento tem um atraso para ativar e outro para voltar ao normal, de zero a uma hora. O alarme liga um ou mais eventos a um de quatro níveis fixos: Crítico, Alto, Médio e Baixo, como mostra a Figura~\ref{fig:fx_alarme}.
```
Por quê: a segunda frase carregava a definição de evento, de comparador e de banda morta ao mesmo tempo.

### 32. Linha 293: detecção do alarme

Atual:
```latex
\par A leitura é publicada pela aquisição na fila de ingestão (1) e retirada pelo \emph{worker} (2), que, depois de gravar o valor atual, avalia os eventos da tag. A avaliação é feita por um pequeno programa executado de uma só vez dentro do Redis, que guarda o estado de cada detector (3), compara o valor com o limite, aplica a banda morta e os atrasos e usa o número de sequência para decidir se houve transição, de modo que a mesma leitura processada por duas réplicas não gera dois alarmes. Havendo transição, o \emph{worker} a registra numa fila de pendências no Redis e a grava no banco (4), abrindo, atualizando ou fechando a ocorrência do alarme, que é o episódio do disparo ao fechamento. A ocorrência combina estar ativa ou normalizada com estar reconhecida ou não, e há no máximo uma aberta por alarme. Por fim, o \emph{worker} soma um à versão do sumário de alarmes no Redis (5).
```
Sugestão:
```latex
\par A aquisição publica a leitura na fila de ingestão (1), e o \emph{worker} a retira (2). Depois de gravar o valor atual, o \emph{worker} avalia os eventos da tag. Quem avalia é um pequeno programa que roda de uma só vez dentro do Redis. Ele guarda o estado de cada detector, a rotina que vigia um evento (3), compara o valor com o limite, aplica a banda morta e os atrasos e usa o número de sequência para decidir se houve transição. Assim, a mesma leitura processada por duas réplicas não gera dois alarmes. Quando há transição, o \emph{worker} a anota numa fila de pendências no Redis e a grava no banco (4). Essa gravação abre, atualiza ou fecha a ocorrência do alarme, que é o episódio entre o disparo e o fechamento. A ocorrência pode estar ativa ou normalizada e, ao mesmo tempo, reconhecida ou não, e há no máximo uma aberta por alarme. Por fim, o \emph{worker} soma um à versão do sumário de alarmes no Redis (5).
```
Por quê: um dos parágrafos mais densos, com cinco etapas e duas definições entrelaçadas. "Detector" ganha uma explicação curta.

### 33. Linha 295: sinalização e reconhecimento

Atual:
```latex
\par A sinalização usa o mesmo \emph{polling} das demais telas. A moldura da aplicação, presente em todas as páginas, pergunta periodicamente o sumário de alarmes (6), e a \sigla{api} o lê no Redis (7), recalculando-o a partir do banco se a versão mudou. O indicador exibe o nível mais grave não reconhecido e a quantidade de ocorrências. Durante uma avalanche de alarmes, a versão sobe em média uma vez por segundo, para que centenas de ocorrências não gerem centenas de recálculos. O operador reconhece uma ocorrência na página de alarmes (8), e o pedido leva a revisão vista na tela, para que um novo disparo não seja reconhecido por um clique sobre a tela antiga. A \sigla{api} relê as permissões no banco e grava o reconhecimento, com o nome da pessoa e um comentário opcional (9). Se outro evento do mesmo alarme se ativa depois, a ocorrência volta a não reconhecida.
```
Sugestão:
```latex
\par A sinalização usa o mesmo \emph{polling} das demais telas. A moldura da aplicação, a parte fixa que aparece em todas as páginas, pergunta periodicamente o sumário de alarmes (6), e a \sigla{api} o lê no Redis (7). Se a versão mudou, a \sigla{api} o recalcula a partir do banco. O indicador mostra o nível mais grave entre os alarmes não reconhecidos e a quantidade de ocorrências. Numa avalanche de alarmes, a versão sobe em média uma vez por segundo, para que centenas de ocorrências não gerem centenas de recálculos. O operador reconhece uma ocorrência na página de alarmes (8). O pedido leva a revisão que ele viu na tela, para que um novo disparo não seja reconhecido por um clique sobre a tela antiga. A \sigla{api} relê as permissões no banco e grava o reconhecimento, com o nome da pessoa e um comentário opcional (9). Se outro evento do mesmo alarme se ativa depois, a ocorrência volta a não reconhecida.
```
Por quê: frases longas com gerúndio ("recalculando-o") e "moldura" sem explicação.

### 34. Linha 297: composto, agendado e de sistema

Atual:
```latex
\par O evento composto combina outros eventos com os operadores E, OU e NÃO, e o evento agendado dispara em horários definidos, ambos pelo mesmo caminho. Os eventos de sistema do dispositivo, falha de comunicação, de leitura e de escrita, são criados automaticamente com o dispositivo Modbus e alimentam a linha do tempo. A tag mostra um selo com o contador de ocorrências abertas, e a planta no mapa mostra um pino com a cor da pior ocorrência.
```
Sugestão:
```latex
\par O evento composto combina outros eventos com os operadores E, OU e NÃO. O evento agendado dispara em horários definidos. Os dois seguem o mesmo caminho. Os eventos de sistema do dispositivo (falha de comunicação, de leitura e de escrita) são criados automaticamente junto com o dispositivo Modbus e alimentam a linha do tempo. A tag mostra um selo com o contador de ocorrências abertas, e a planta no mapa mostra um pino com a cor da pior ocorrência.
```
Por quê: "ambos pelo mesmo caminho" ficava longe do que descrevia.

### 35. Linha 301: falhas do alarme

Atual:
```latex
\par Com o Redis fora, a avaliação para e o trabalho de ingestão é repetido. Se ele volta vazio, a rotina de reconstrução refaz o estado dos detectores a partir do banco. Com o banco indisponível, as transições ficam pendentes até ele voltar. Com o \emph{worker} parado, nenhum alarme novo é detectado, e a fila preserva as leituras. O sistema não cria alarme de sistema automaticamente, e o integrador pode ligar um alarme comum aos eventos do dispositivo.
```
Sugestão:
```latex
\par Com o Redis fora do ar, a avaliação para e o trabalho de ingestão é repetido. Se o Redis volta vazio, a rotina de reconstrução refaz o estado dos detectores a partir do banco. Com o banco indisponível, as transições ficam pendentes até ele voltar. Com o \emph{worker} parado, nenhum alarme novo é detectado, e a fila preserva as leituras. O sistema não cria alarmes por conta própria. Quem configura o sistema pode ligar um alarme comum aos eventos do dispositivo.
```
Por quê: "Se ele volta" tinha referente ambíguo, e "alarme de sistema automaticamente" repetia a palavra "sistema". Se preferir manter "integrador", troque "Quem configura o sistema" por "O integrador".

---

## Variável Meta (linhas 305 a 336)

### 36. Linha 305: o que é e por que isolar

Atual:
```latex
\par A variável meta é uma tag cujo valor vem de um cálculo escrito pelo administrador sobre outras tags da mesma planta, como uma diferença de pressões ou um volume por hora. Ela tem histórico, tela e alarme como qualquer tag, mas depende de um código que não faz parte do sistema, o que exige isolamento. O código, em JavaScript, roda em um interpretador isolado, em um processo sem banco, rede, arquivo nem segredo, como mostra a Figura~\ref{fig:fx_meta}.
```
Sugestão:
```latex
\par A variável meta é uma tag cujo valor vem de um cálculo escrito pelo administrador sobre outras tags da mesma planta, como uma diferença de pressões ou um volume por hora. Ela tem histórico, tela e alarme como qualquer tag. A diferença é que o cálculo é um código escrito pelo administrador, e não faz parte do sistema, por isso precisa rodar isolado. O código, em JavaScript, é executado por um interpretador, o programa que lê e executa o código, dentro de um processo sem acesso a banco, rede, arquivo nem segredo, como mostra a Figura~\ref{fig:fx_meta}.
```
Por quê: "depende de um código que não faz parte do sistema, o que exige isolamento" era abstrato, e "interpretador" ganha uma explicação curta.

### 37. Linha 326: quando a variável é recalculada

Atual:
```latex
\par A variável é recalculada a cada leitura nova de uma tag que o código lê, em horários definidos, ou ao ser criada, editada ou habilitada. No gatilho por leitura, a aquisição publica a leitura na fila de ingestão (1), e o \emph{worker} do sistema a retira (2), consulta o mapa de dependências, que informa quais variáveis meta leem aquela tag, e coloca um conjunto de cálculos, chamado de onda, na fila própria (3). Um lote de leituras gera uma onda só, e uma meta que depende de outra espera o valor novo dela. No gatilho por tempo, uma verificação por minuto cria a onda.
```
Sugestão:
```latex
\par A variável é recalculada em três casos: quando chega uma leitura nova de uma tag que o código lê, em horários definidos, ou quando a variável é criada, editada ou habilitada. No gatilho por leitura, a aquisição publica a leitura na fila de ingestão (1), e o \emph{worker} do sistema a retira (2). Ele consulta o mapa de dependências, que diz quais variáveis meta leem aquela tag, e coloca na fila própria um conjunto de cálculos, chamado de onda (3). Um lote de leituras gera uma onda só. Uma meta que depende de outra espera o valor novo dela. No gatilho por tempo, uma verificação a cada minuto cria a onda.
```
Por quê: a lista de gatilhos fica anunciada, e o sujeito "o worker" não se perde no meio de uma sequência de verbos.

### 38. Linha 328: cálculo no runtime

Atual:
```latex
\par O \emph{worker} da família de cálculos internos retira a onda. Como os scripts não acessam o banco, ele busca antes os dados de que o código precisa: o valor atual, no Redis, e até quinhentos pontos das tags consultadas por série, no banco (4). Os dados seguem com o código em um único lote ao \emph{runtime}, por um canal exclusivo do Moleculer (5). Para cada cálculo, o \emph{runtime} cria uma cópia nova do interpretador, sem rede, arquivo ou segredo, com limites de tempo, memória, recursão e saída. O resultado de cada meta volta com o valor ou o erro (6).
```
Sugestão:
```latex
\par O \emph{worker} da família de cálculos internos retira a onda. Como os scripts não acessam o banco, ele busca antes os dados de que o código precisa. Do Redis, busca o valor atual. Do banco, busca até quinhentos pontos das tags consultadas como série (4). Os dados seguem junto com o código, em um único lote, para o \emph{runtime}, por um canal exclusivo do Moleculer (5). Para cada cálculo, o \emph{runtime} cria uma cópia nova do interpretador, sem rede, arquivo ou segredo, e com limites de tempo, memória, recursão e saída. O resultado de cada meta volta com o valor ou com o erro (6).
```
Por quê: separa o que vem do Redis do que vem do banco, que estava numa só frase com dois-pontos.

### 39. Linha 330: validação e qualidade

Atual:
```latex
\par O \emph{worker} valida o que veio, porque o servidor nunca confia em dado do ambiente isolado, e o publica como leitura da tag interna (7), pelo mesmo caminho das leituras do equipamento. A qualidade da meta é a pior entre as tags que ela lê, e uma entrada desatualizada ou com falha impede o cálculo, sem nunca virar zero por omissão. Quando o administrador salva o código, o \emph{runtime} analisa sua estrutura, sem executá-lo, e descobre quais tags ele usa, e o salvamento é recusado se esse ambiente estiver indisponível.
```
Sugestão:
```latex
\par O \emph{worker} valida o que veio, porque o servidor nunca confia em dado vindo do ambiente isolado. Depois, publica o resultado como leitura da tag interna (7), pelo mesmo caminho das leituras do equipamento. A qualidade da meta é a pior entre as qualidades das tags que ela lê. Se uma entrada está desatualizada ou com falha, o cálculo não roda, e a entrada nunca vira zero por omissão. Quando o administrador salva o código, o \emph{runtime} analisa sua estrutura, sem executá-lo, e descobre quais tags ele usa. Se esse ambiente está indisponível, o salvamento é recusado.
```
Por quê: três ideias com "e" encadeado na primeira frase e duas na última.

### 40. Linha 332: outros usos do ambiente isolado

Atual:
```latex
\par O mesmo ambiente executa a tag interna gerada, como a rampa e o valor aleatório usados em testes, o script de dispositivo e de evento, que pode escrever em tags, e o componente de conteúdo do sinótico, recalculado em um ritmo configurado. Em todos os casos, o ambiente isolado recebe os dados e devolve um resultado, e quem escreve em banco, em fila ou no equipamento é sempre a \sigla{api} ou o \emph{worker}, depois de validar o que voltou.
```
Sugestão:
```latex
\par O mesmo ambiente executa outras coisas: a tag interna gerada (como a rampa e o valor aleatório usados em testes), o script de dispositivo e de evento, que pode escrever em tags, e o componente de conteúdo do sinótico, recalculado em um ritmo configurado. Em todos os casos, o ambiente isolado só recebe dados e devolve um resultado. Quem escreve no banco, na fila ou no equipamento é sempre a \sigla{api} ou o \emph{worker}, depois de validar o que voltou.
```
Por quê: a lista fica anunciada, e a regra final vira duas frases.

### 41. Linhas 334 e 336: falhas do cálculo

Atual:
```latex
\par Se o código ultrapassa um limite, gera um erro ou divide por zero (6b), apenas aquela meta recebe erro, as demais do lote seguem, e o \emph{worker} publica a qualidade ruim em vez de um valor.

\par Se o \emph{runtime} cai, nenhuma meta é calculada, a fila repete a onda e a variável fica com o último valor, mostrado como desatualizado. As demais tags, seus alarmes e os comandos não dependem dele. Uma falha no interpretador compromete, no pior caso, apenas esse serviço. Esse risco foi aceito, e as medidas para reduzi-lo são a ausência de credenciais, a reciclagem do processo hospedeiro e a validação do resultado.
```
Sugestão:
```latex
\par Se o código ultrapassa um limite, gera um erro ou divide por zero (6b), apenas aquela meta recebe o erro, e as demais do lote seguem normalmente. Nesse caso, o \emph{worker} publica qualidade ruim, em vez de um valor.

\par Se o \emph{runtime} cai, nenhuma meta é calculada, a fila repete a onda e a variável fica com o último valor, mostrado como desatualizado. As demais tags, seus alarmes e os comandos não dependem dele. Uma falha no interpretador compromete, no pior caso, apenas esse serviço. Esse risco foi aceito. Para reduzi-lo, o serviço não tem credenciais, o processo que hospeda o interpretador é reciclado, ou seja, encerrado e recriado de tempos em tempos, e o resultado é sempre validado.
```
Por quê: a lista final de três medidas usava substantivos abstratos ("ausência de credenciais", "reciclagem do processo hospedeiro"). Confira se "de tempos em tempos" descreve bem a reciclagem. Se a regra é por número de usos e não por tempo, troque por "periodicamente".

---

## Login e Sessão (linhas 340 a 368)

### 42. Linhas 340 e 360: login

Atual:
```latex
\par O login estabelece quem é o usuário e quais permissões ele possui, informação de que dependem todas as demais funções da \sigla{api}, como mostra a Figura~\ref{fig:fx_login}.
```
Sugestão:
```latex
\par O login define quem é o usuário e quais permissões ele tem. Todas as demais funções da \sigla{api} dependem dessa informação, como mostra a Figura~\ref{fig:fx_login}.
```
Por quê: "informação de que dependem todas" é construção invertida.

Atual:
```latex
\par O usuário abre a página de login, entregue pela aplicação Web (1), e o navegador envia e-mail e senha à \sigla{api} (2). A \sigla{api} aplica os limites de tentativas no Redis (3), lê o usuário no banco e confere a senha, guardada apenas como resumo irreversível (4). A resposta é a mesma para e-mail inexistente e senha errada, para não revelar quais e-mails têm conta. Em caso de sucesso, a \sigla{api} cria a sessão no banco e devolve ao navegador o \emph{token} de acesso, com validade de quinze minutos, e a credencial de renovação (5), seguindo as boas práticas de segurança \cite{OWASP_CHEATSHEETS}.
```
Sugestão:
```latex
\par O usuário abre a página de login, entregue pela aplicação Web (1), e o navegador envia e-mail e senha à \sigla{api} (2). A \sigla{api} aplica no Redis os limites de tentativas (3), lê o usuário no banco e confere a senha (4). A senha é guardada apenas como um resumo irreversível, que não permite recuperar o texto original. A resposta é a mesma quando o e-mail não existe e quando a senha está errada, para não revelar quais e-mails têm conta. Se o login dá certo, a \sigla{api} cria a sessão no banco e devolve ao navegador o \emph{token} de acesso, válido por quinze minutos, e a credencial de renovação (5), seguindo as boas práticas de segurança \cite{OWASP_CHEATSHEETS}.
```
Por quê: "resumo irreversível" ganha uma explicação em palavras comuns, e a frase longa do passo (4) fica dividida.

### 43. Linhas 362 a 368: sessão, primeiro acesso, cargos e bloqueios

Atual (362):
```latex
\par A partir daí, cada pedido leva o \emph{token}, e a \sigla{api} verifica a sessão e as permissões. A sessão dura no máximo doze horas e expira com oito horas sem uso, e dez minutos antes do fim a tela avisa e pede a senha. Se a sessão acaba, a tela exibe um bloqueio informando que os alarmes não estão sendo monitorados e emite um som, sem apagar o conteúdo. Quando o \emph{token} vence, o navegador pede a renovação (6), e a \sigla{api} troca a credencial por uma nova.
```
Sugestão:
```latex
\par A partir daí, cada pedido leva o \emph{token}, e a \sigla{api} verifica a sessão e as permissões. A sessão dura no máximo doze horas e expira depois de oito horas sem uso. Dez minutos antes do fim, a tela avisa e pede a senha. Se a sessão acaba, a tela mostra um bloqueio que informa que os alarmes não estão sendo monitorados e emite um som, sem apagar o conteúdo. Quando o \emph{token} vence, o navegador pede a renovação (6), e a \sigla{api} troca a credencial por uma nova.
```
Por quê: duas regras de tempo diferentes estavam coladas por "e".

Atual (364):
```latex
\par O primeiro acesso, ou qualquer acesso com senha de uso único, obriga a troca de senha, e o servidor impõe essa obrigação em todas as funções. A saída do sistema funciona mesmo com o \emph{token} vencido ou com o Redis fora do ar, para que o próximo operador de um terminal não entre como o anterior.
```
Sugestão:
```latex
\par No primeiro acesso, ou em qualquer acesso com senha de uso único, o usuário precisa trocar a senha, e o servidor cobra essa troca em todas as funções. Sair do sistema funciona mesmo com o \emph{token} vencido ou com o Redis fora do ar, para que o próximo operador de um terminal não entre com a sessão do anterior.
```
Por quê: "obriga a troca" e "impõe essa obrigação" repetem a ideia, e "entre como o anterior" ficava ambíguo.

Atual (366):
```latex
\par Há quatro cargos fixos: o administrador do sistema, o administrador da instalação, que configura o sistema, o supervisor, que faz o que o operador faz e gerencia operadores, e o operador. O administrador da instalação cria grupos com permissões de um catálogo fixo de dez, e quem pertence a vários grupos soma as permissões. Como o \emph{token} não carrega permissões, uma mudança de cargo ou de grupo vale no pedido seguinte. O supervisor só coloca um operador em um grupo cujas permissões ele mesmo possui, e nenhum grupo concede as ações reservadas aos administradores, como configurar alarmes e escrever scripts.
```
Sugestão:
```latex
\par Há quatro cargos fixos: o administrador do sistema, o administrador da instalação, o supervisor e o operador. O administrador da instalação configura o sistema. O supervisor faz o que o operador faz e também gerencia operadores. O administrador da instalação cria grupos, com permissões tiradas de uma lista fixa de dez, e quem pertence a vários grupos soma as permissões. Como o \emph{token} não carrega permissões, uma mudança de cargo ou de grupo vale no pedido seguinte. O supervisor só pode colocar um operador em um grupo cujas permissões ele mesmo tem. Nenhum grupo concede as ações reservadas aos administradores, como configurar alarmes e escrever scripts.
```
Por quê: a lista de cargos tinha apostos no meio e era difícil de acompanhar.

Atual (368):
```latex
\par Cinco senhas erradas bloqueiam o e-mail por quinze minutos. Se uma credencial de renovação já trocada reaparece (7b), o sistema entende que ela pode ter sido copiada e derruba a sessão inteira. Ao ultrapassar o máximo de sessões de um usuário, o login revoga a mais antiga. Com o Redis fora do ar, o login, a renovação e as demais funções respondem que o serviço está indisponível, porque o sistema prefere negar o acesso a aceitar uma sessão que pode ter sido encerrada. Com o banco indisponível, ninguém entra, e as sessões abertas só continuam enquanto as permissões estiverem no \emph{cache}.
```
Sugestão:
```latex
\par Cinco senhas erradas bloqueiam o e-mail por quinze minutos. Se uma credencial de renovação que já foi trocada aparece de novo (7b), o sistema entende que ela pode ter sido copiada e encerra a sessão inteira. Quando o usuário passa do número máximo de sessões, o login encerra a mais antiga. Com o Redis fora do ar, o login, a renovação e as demais funções respondem que o serviço está indisponível. O sistema prefere negar o acesso a aceitar uma sessão que pode já ter sido encerrada. Com o banco indisponível, ninguém consegue entrar, e as sessões abertas continuam só enquanto as permissões estiverem no \emph{cache}.
```
Por quê: "reaparece", "derruba" e "revoga" ficam mais comuns, e o motivo da negação ganha uma frase própria.

---

## Garantias Comuns aos Fluxos (linhas 372 a 374)

### 44. Linha 374: terceiro ao quinto cuidado

Atual:
```latex
\par O terceiro cuidado é a falha fechada, em que, na dúvida, o sistema bloqueia a ação, aplicada onde o erro seria mais caro. O comando é recusado quando falta o Redis ou a confirmação de que o equipamento se comunica, as funções que exigem login respondem indisponibilidade quando o Redis cai, e um valor que não pôde ser renovado nunca é apresentado como bom. O quarto é a durabilidade do trabalho, que não se perde em uma falha, garantia obtida pelas filas duráveis, pelo \emph{outbox} do cadastro, pela fila de pendências do alarme e pelas novas tentativas com espera. O quinto é a releitura da permissão onde a decisão é irreversível, no banco e não no \emph{cache}, o que vale para a confirmação do comando e para o reconhecimento do alarme. A Tabela~\ref{tab:fx_garantias} associa cada garantia ao mecanismo que a sustenta e aos fluxos em que ela aparece.
```
Sugestão:
```latex
\par O terceiro cuidado é a falha fechada: na dúvida, o sistema bloqueia a ação, e isso vale onde o erro seria mais caro. O comando é recusado quando falta o Redis ou a confirmação de que o equipamento se comunica. As funções que exigem login respondem indisponibilidade quando o Redis cai. Um valor que não pôde ser renovado nunca é apresentado como bom. O quarto é a durabilidade do trabalho, que não se perde em uma falha. Ela vem das filas duráveis, do \emph{outbox} do cadastro, da fila de pendências do alarme e das novas tentativas com espera. O quinto é reler a permissão onde a decisão não tem volta, direto no banco e não no \emph{cache}, o que vale para a confirmação do comando e para o reconhecimento do alarme. A Tabela~\ref{tab:fx_garantias} associa cada garantia ao mecanismo que a sustenta e aos fluxos em que ela aparece.
```
Por quê: a frase do terceiro cuidado era a mais difícil do trecho ("em que, na dúvida, o sistema bloqueia a ação, aplicada onde..."), e "irreversível" fica mais comum como "não tem volta".

---

## Resumo dos Fluxos (linhas 444 a 479)

### 45. Linha 444: mecanismos de comunicação

Atual:
```latex
\par A Tabela~\ref{tab:fx_resumo_fluxos} reúne os oito fluxos, os blocos que cada um percorre e o que transporta o trabalho entre eles. A comunicação entre os serviços usa dois mecanismos: a chamada do Moleculer, quando o solicitante precisa da resposta, como no comando, e a fila, quando o trabalho pode esperar e não pode ser perdido, como no histórico. Entre o navegador e a \sigla{api}, o transporte é o \sigla{http} com dados em \sigla{json}.
```
Sugestão:
```latex
\par A Tabela~\ref{tab:fx_resumo_fluxos} reúne os oito fluxos, os blocos que cada um percorre e o que transporta o trabalho entre eles. A comunicação entre os serviços usa dois mecanismos. O primeiro é a chamada do Moleculer, usada quando quem pede precisa da resposta, como no comando. O segundo é a fila, usada quando o trabalho pode esperar e não pode ser perdido, como no histórico. Entre o navegador e a \sigla{api}, o transporte é o \sigla{http} com dados em \sigla{json}.
```
Por quê: "solicitante" vira "quem pede", e os dois mecanismos ficam em frases separadas.

### 46. Linha 479: fecho do capítulo

Atual:
```latex
\par O que precisa de resposta imediata passa pela \sigla{api}, que sempre confere a sessão e a permissão. O que não pode se perder passa por uma fila e é processado por um \emph{worker} idempotente. O valor atual fica no Redis e o histórico no PostgreSQL, de modo que a tela em tempo real nunca consulta o banco. Em cada fluxo, a falha de uma peça leva à recusa do pedido, à repetição do trabalho ou à marcação do valor como desatualizado, sem produzir um dado falso.
```
Sugestão:
```latex
\par O que precisa de resposta imediata passa pela \sigla{api}, que sempre confere a sessão e a permissão. O que não pode se perder passa por uma fila e é processado por um \emph{worker} idempotente, que pode repetir o trabalho sem duplicar o efeito. O valor atual fica no Redis e o histórico no PostgreSQL, de modo que a tela em tempo real nunca consulta o banco. Em cada fluxo, a falha de uma peça leva à recusa do pedido, à repetição do trabalho ou à marcação do valor como desatualizado, e nunca a um dado falso.
```
Por quê: "idempotente" aparece sem explicação neste ponto, e o final da última frase fica mais direto.

---

## Avaliar corte (sem reescrever)

1. Linha 205, última frase ("A página tem um limite próprio de vinte pedidos por minuto, para que um painel cheio não esgote a cota do usuário."). Repete o limite de pedidos por minuto já dito na linha 203 ("a página respeita um limite de pedidos por minuto, com prioridade para o clique do usuário"). Dá para manter só uma das duas, juntando o número de vinte na linha 203.
2. Linha 207, frase sobre redução do teto de retenção. O mesmo assunto (consultas que deixam de devolver dado antigo na hora e apagamento na noite seguinte) já aparece na linha 140. Avaliar se o capítulo precisa dizer isso nos dois fluxos.

## Observações de conteúdo (fora do escopo de linguagem, para o autor conferir)

1. Linha 88 diz que, sem a api, o Redis ou o banco, "a leitura do campo continua". Mas a linha 144 diz que, se o Redis cai, "a aquisição não publica nem obtém a trava, o ciclo se perde". As duas afirmações parecem se contradizer no caso do Redis.
2. Linha 140: "O corte de cada tag é o maior entre a retenção configurada nela e o teto do sistema". Como o teto é o limite máximo e nenhuma consulta devolve dado mais antigo que ele (linha 207), talvez seja "o menor". Conferir com o código.

Total: 46 itens numerados (43 sugestões de reescrita, algumas com mais de um trecho, e as marcas de avaliar corte listadas à parte).
