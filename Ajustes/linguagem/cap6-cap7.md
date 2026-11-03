# Revisão de linguagem: Capítulo 6 (Bancada de Teste) e Capítulo 7 (Resultados)

Arquivos: `Capitulos\14_Desenvolvimento\14_5_Cap.tex` e `14_6_Cap.tex`.

O que mais pesa. No Capítulo 6, o texto fala de CLP, inversor, Modbus, registrador, palavra e bit como se o leitor já os conhecesse, e usa a palavra "servidor" para duas coisas (o computador do supervisório e o papel do CLP no Modbus), o que confunde. As frases que descrevem a comunicação e o programa do CLP juntam três ou quatro ideias e usam substantivos no lugar de verbos ("publicação dos resultados", "transfere e traz"). No Capítulo 7, o que mais pesa é o vocabulário de medição sem explicação na primeira vez (mediana, teto, degrau de carga, hospedeiro, vazão, réplica) e as descrições dos ensaios E1 a E6, onde uma frase só carrega de quatro a seis verificações. Também há uma inconsistência de termo: "switch" no Capítulo 6 e "comutador" no ensaio E5. Há 51 sugestões e 2 trechos marcados como "avaliar corte". Não revi tabelas (só os parágrafos), legendas, `\todo` nem citações. Nada foi alterado nos arquivos `.tex`.

---

# Capítulo 6: Bancada de Teste (14_5_Cap.tex)

## Objetivo e Visão Geral

### 1. (linha 10)

Atual:

```latex
\par A bancada submete o sistema a um cenário realista, com um controlador lógico programável (\sigla{clp}), um inversor de frequência e um motor elétrico em funcionamento. O processo é simples: ligar, desligar e mudar a velocidade do motor, que fornece grandezas elétricas reais, como frequência, corrente e tensão.
```

Sugestão:

```latex
\par A bancada é a montagem usada para testar o sistema com equipamentos reais. Ela tem um controlador lógico programável (\sigla{clp}), um inversor de frequência, que é o equipamento que controla a velocidade do motor, e um motor elétrico. O que se faz com ela é simples: ligar o motor, desligá-lo e mudar a sua velocidade. Com isso, o motor produz valores elétricos reais, como frequência, corrente e tensão.
```

Por quê: é o primeiro parágrafo do capítulo. "Submete a um cenário realista" é abstrato, e o "que" da segunda frase parece se referir ao motor, não ao processo.

### 2. (linha 12)

Atual:

```latex
\par O supervisório lê essas grandezas e o estado do motor, exibe-os em telas e gráficos, sinaliza alarmes e permite ligar e desligar o motor e alterar a referência de frequência. Na demonstração, os professores acessam o sistema por um tablet, pelo navegador, e operam o motor. A Figura~\ref{fig:cap6_bancada_montada} reserva o espaço para a foto da bancada.
```

Sugestão:

```latex
\par O supervisório lê esses valores e o estado do motor e os mostra em telas e gráficos. Ele também avisa quando há alarme e permite ligar e desligar o motor e escolher a frequência desejada, chamada de referência. Na demonstração, os professores acessam o sistema pelo navegador de um tablet e operam o motor. A Figura~\ref{fig:cap6_bancada_montada} reserva o espaço para a foto da bancada.
```

Por quê: uma frase com seis verbos vira três, e "referência de frequência" é explicada na primeira vez.

## Equipamentos Utilizados

### 3. (linha 60)

Atual:

```latex
\par O Modicon TM221CE40T é um controlador compacto programado no EcoStruxure Machine Expert Basic, com uma porta Ethernet e uma porta serial, SL1, configurável para Modbus \cite{SCHNEIDER_TM221_HARDWARE_GUIDE,SCHNEIDER_MACHINE_EXPERT_BASIC}. Pela porta Ethernet, ele responde a requisições Modbus na porta 502, como servidor, e pela serial consulta o inversor como mestre.
```

Sugestão:

```latex
\par O Modicon TM221CE40T é um controlador compacto, programado no EcoStruxure Machine Expert Basic. Ele tem uma porta Ethernet e uma porta serial, a SL1, que pode ser configurada para Modbus \cite{SCHNEIDER_TM221_HARDWARE_GUIDE,SCHNEIDER_MACHINE_EXPERT_BASIC}. Pela porta Ethernet, ele atua como servidor Modbus, isto é, responde aos pedidos que recebe na porta 502. Pela serial, atua como mestre, isto é, é ele quem faz os pedidos ao inversor.
```

Por quê: explica "servidor" e "mestre" em palavras comuns na primeira vez e separa as ideias em frases curtas.

### 4. (linha 64)

Atual:

```latex
\par O Altivar ATV320 é um inversor que converte a tensão de alimentação em tensão trifásica de frequência e amplitude variáveis, controlando a velocidade do motor. Ele tem uma porta Modbus serial em conector RJ45, por onde recebe comandos e referências e informa o estado e as medições \cite{SCHNEIDER_ATV320_MODBUS_MANUAL,SCHNEIDER_ATV320_PROGRAMMING_MANUAL}. A frequência ajustada determina a rotação do motor.
```

Sugestão:

```latex
\par O Altivar ATV320 é um inversor de frequência. Ele recebe a tensão de alimentação e a transforma em uma tensão trifásica cuja frequência pode ser ajustada, e é essa frequência que define a velocidade do motor. Pela porta Modbus serial, em conector RJ45, ele recebe comandos e referências e informa o seu estado e as suas medições \cite{SCHNEIDER_ATV320_MODBUS_MANUAL,SCHNEIDER_ATV320_PROGRAMMING_MANUAL}.
```

Por quê: a ideia "a frequência define a rotação" sobe para junto da explicação do inversor. Perde-se só "amplitude variável", que não é usada no resto do capítulo.

## Arquitetura de Comunicação

### 5. (linha 68)

Atual:

```latex
\par A comunicação tem dois segmentos independentes. No primeiro, a aquisição consulta o \sigla{clp} por Modbus, pela rede Ethernet \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}. No segundo, o \sigla{clp} consulta o inversor por Modbus, em um enlace serial \sigla{rs485} \cite{MODBUS_SERIAL_SPEC}. O \sigla{clp} é, portanto, servidor para o supervisório e mestre para o inversor, organização encontrada em instalações reais.
```

Sugestão:

```latex
\par A comunicação tem duas partes independentes. Na primeira, a aquisição, que é a parte do supervisório que lê os equipamentos, consulta o \sigla{clp} por Modbus, pela rede Ethernet \cite{MODBUS_TCP_IMPLEMENTATION_GUIDE}. Na segunda, o \sigla{clp} consulta o inversor por Modbus, por uma ligação serial \sigla{rs485} \cite{MODBUS_SERIAL_SPEC}. Assim, o \sigla{clp} responde ao supervisório e consulta o inversor, arranjo que também existe em instalações reais.
```

Por quê: troca "segmentos" e "enlace" por palavras comuns e troca a conclusão em jargão ("servidor para... mestre para...") por um verbo para cada papel. Mantive a aquisição como no texto, só com uma explicação curta.

### 6. (linha 70)

Atual:

```latex
\par Na topologia da Figura~\ref{fig:cap6_topologia}, o servidor envia requisições Modbus ao \sigla{clp} pelo switch da rede local (1 e 2), e o \sigla{clp} responde com os valores em palavras e bits de memória. Em paralelo, o \sigla{clp} comanda o inversor por Modbus em \sigla{rs485} (3), e o inversor alimenta o motor (4).
```

Sugestão:

```latex
\par Na Figura~\ref{fig:cap6_topologia}, o computador que executa o supervisório, o servidor, envia requisições Modbus ao \sigla{clp} pelo switch da rede local (1 e 2). O \sigla{clp} responde com os valores guardados em sua memória. Ao mesmo tempo, o \sigla{clp} envia comandos ao inversor, por Modbus em \sigla{rs485} (3), e o inversor alimenta o motor (4).
```

Por quê: aqui "servidor" é o computador, enquanto na frase anterior "servidor" era o papel do CLP. Chamar o computador de "o computador que executa o supervisório" na primeira vez desfaz a confusão. "Topologia" e "palavras e bits" saem.

### 7. (linha 100)

Atual:

```latex
\par No segmento Ethernet, as palavras (\texttt{\%MW}) e os bits de memória (\texttt{\%M}) são acessíveis pelos mesmos endereços numéricos, contados a partir de zero: \texttt{\%MW0} é o registrador de retenção de endereço 0 e \texttt{\%M0} é a bobina de endereço 0 \cite{SCHNEIDER_MACHINE_EXPERT_BASIC}.
```

Sugestão:

```latex
\par Pela rede Ethernet, as posições de memória do \sigla{clp} aparecem com endereços contados a partir de zero. As palavras de memória (\texttt{\%MW}), que guardam números, viram registradores de retenção, e os bits de memória (\texttt{\%M}), que guardam ligado ou desligado, viram bobinas. Assim, \texttt{\%MW0} é o registrador de retenção de endereço 0 e \texttt{\%M0} é a bobina de endereço 0 \cite{SCHNEIDER_MACHINE_EXPERT_BASIC}.
```

Por quê: explica palavra, bit, registrador de retenção e bobina em palavras comuns. Os termos continuam todos no texto.

### 8. (linha 104)

Atual:

```latex
\par No segmento serial, o \sigla{clp} usa os blocos \texttt{READ\_VAR} e \texttt{WRITE\_VAR} para ler e escrever registradores do inversor, com a porta SL1 configurada como mestre. A ligação é feita por par trançado entre os conectores RJ45 (Figura~\ref{fig:cap6_foto_rs485}).
```

Sugestão:

```latex
\par Na ligação serial, o \sigla{clp} lê e escreve os registradores do inversor com os blocos \texttt{READ\_VAR} e \texttt{WRITE\_VAR}, e a porta SL1 está configurada como mestre. Os dois equipamentos são ligados por um cabo de par trançado, entre os conectores RJ45 (Figura~\ref{fig:cap6_foto_rs485}).
```

Por quê: o sujeito passa a ser o CLP, e a voz passiva ("é feita") sai. Ganho pequeno, trecho já bastante claro.

## Configuração do Inversor ATV320

### 9. (linha 119)

Atual:

```latex
\par O inversor precisa aceitar o comando e a referência pela comunicação Modbus, em vez dos terminais ou do painel. A Tabela~\ref{tab:cap6_params_atv320} lista os valores propostos.
```

Sugestão:

```latex
\par Para ser controlado pelo supervisório, o inversor precisa receber o comando (ligar ou desligar) e a referência de frequência pela comunicação Modbus, e não pelos terminais nem pelo painel do próprio inversor. A Tabela~\ref{tab:cap6_params_atv320} lista os valores propostos.
```

Por quê: diz para que serve a configuração e o que são "comando" e "referência".

### 10. (linha 158)

Atual:

```latex
\par O \sigla{clp} interage com o inversor pelos registradores \texttt{CMD} (palavra de controle), \texttt{LFR} (referência de frequência), \texttt{RFR} (frequência de saída), \texttt{LCR} (corrente do motor), a tensão de saída e \texttt{ETA} (palavra de estado) \cite{SCHNEIDER_ATV320_MODBUS_MANUAL}, conforme a Tabela~\ref{tab:cap6_registradores_atv320}. Para reduzir as transações, os registradores consecutivos de estado, frequência e corrente são lidos em uma única consulta, e a palavra de controle e a referência são escritas em uma única requisição.
```

Sugestão:

```latex
\par O \sigla{clp} conversa com o inversor por meio de registradores, que são posições de memória do inversor, cada uma com o seu endereço. São usados os registradores \texttt{CMD} (palavra de controle), \texttt{LFR} (referência de frequência), \texttt{ETA} (palavra de estado), \texttt{RFR} (frequência de saída) e \texttt{LCR} (corrente do motor), além do que traz a tensão de saída \cite{SCHNEIDER_ATV320_MODBUS_MANUAL}, como mostra a Tabela~\ref{tab:cap6_registradores_atv320}. Para trocar menos mensagens, o \sigla{clp} lê de uma vez só os registradores vizinhos de estado, frequência e corrente, e escreve de uma vez só a palavra de controle e a referência.
```

Por quê: explica "registrador" antes de listar nomes e troca "transações" e "única requisição" por uma forma direta. A ordem da lista passa a seguir a da tabela.

## Programa do Controlador

### 11. (linha 213)

Atual:

```latex
\par O programa do \sigla{clp} executa, a cada ciclo, a comunicação com o inversor, a lógica de comando e a publicação dos resultados, como mostra a Figura~\ref{fig:cap6_blocos_clp}.
```

Sugestão:

```latex
\par A cada ciclo, isto é, a cada repetição do programa, o \sigla{clp} conversa com o inversor, executa a lógica de comando e coloca os resultados na memória de leitura, como mostra a Figura~\ref{fig:cap6_blocos_clp}.
```

Por quê: três substantivos ("a comunicação", "a lógica", "a publicação") viram verbos, e "ciclo" é explicado.

### 12. (linha 241)

Atual:

```latex
\par O supervisório escreve o comando e a referência na memória do controlador (1), e a lógica de comando decide o que enviar ao inversor (2). O bloco de comunicação transfere a palavra de controle e a referência e traz o estado, a frequência, a corrente e a tensão (3), publicados nas posições de leitura (4).
```

Sugestão:

```latex
\par O supervisório escreve o comando e a referência na memória do controlador (1). A lógica de comando decide o que enviar ao inversor (2). O bloco de comunicação envia ao inversor a palavra de controle e a referência e recebe dele o estado, a frequência, a corrente e a tensão (3). Esses valores são colocados nas posições de leitura (4).
```

Por quê: um passo por frase, na ordem dos números da figura, e "transfere e traz" fica claro como "envia e recebe".

### 13. (linha 243)

Atual:

```latex
\par A partida só é efetivada sem falha ativa e com a comunicação serial íntegra. Se o inversor deixa de responder por um número configurável de ciclos, o \sigla{clp} ativa um bit de falha e envia o comando de parada, o que evita que um erro de comunicação deixe o motor funcionando sem supervisão.
```

Sugestão:

```latex
\par O motor só parte se não houver falha ativa e se a comunicação serial estiver funcionando. Se o inversor deixar de responder por um número de ciclos que pode ser configurado, o \sigla{clp} liga o bit de falha (um sinal de ligado ou desligado) e manda o inversor parar. Assim, um defeito na comunicação não deixa o motor funcionando sem supervisão.
```

Por quê: sai a voz passiva ("é efetivada") e "íntegra", e "o que evita" vira uma frase com sujeito claro.

### 14. (linha 245)

Atual:

```latex
\par A Tabela~\ref{tab:cap6_memoria_clp} reúne o mapa de memória proposto. Os valores analógicos são inteiros em décimos de unidade, o que evita ponto flutuante, e o supervisório reconstrói o valor de engenharia por uma escala linear.
```

Sugestão:

```latex
\par A Tabela~\ref{tab:cap6_memoria_clp} reúne o mapa de memória proposto, isto é, o que fica guardado em cada endereço. Os valores medidos são guardados como números inteiros, em décimos de unidade. Isso evita números com vírgula (ponto flutuante) na memória do \sigla{clp}. O supervisório converte o valor para a unidade real por uma conta de proporção simples, a escala linear.
```

Por quê: "analógicos", "ponto flutuante", "valor de engenharia" e "escala linear" aparecem juntos sem explicação. Fica a ideia, em passos curtos.

## Configuração no Supervisório

### 15. (linhas 288 e 290)

Atual:

```latex
\par O cadastro no supervisório é feito pela interface web, sem alteração de código.

\par A planta recebe o nome da bancada e as coordenadas do local. O dispositivo corresponde ao \sigla{clp}, com protocolo Modbus, endereço \sigla{ip} na rede local, porta 502 e o identificador de unidade (\emph{unit ID}) do controlador, como resume a Tabela~\ref{tab:cap6_cadastro}.
```

Sugestão:

```latex
\par Para que o supervisório conheça a bancada, ela é cadastrada pela interface web, sem mexer no código.

\par No cadastro, a planta (o local supervisionado) recebe o nome da bancada e as coordenadas do local. O dispositivo é o \sigla{clp}, e os dados dele são o protocolo Modbus, o endereço \sigla{ip} na rede local, a porta 502 e o identificador de unidade (\emph{unit ID}), que é o número do controlador no Modbus, como resume a Tabela~\ref{tab:cap6_cadastro}.
```

Por quê: diz o que é o cadastro e o que é "planta" e "identificador de unidade" na primeira vez. Fica apenas a lista dos dados do dispositivo, em vez de "corresponde... com...".

### 16. (linha 323)

Atual:

```latex
\par Cada tag traz o mapeamento Modbus, o tipo bruto, a escala e o período de varredura. Como os valores são inteiros em décimos, a escala linear leva, por exemplo, o intervalo bruto de 0 a 500 ao de 0 a 50 hertz, na frequência. A Tabela~\ref{tab:cap6_tags} apresenta as sete tags previstas.
```

Sugestão:

```latex
\par Cada tag, isto é, cada valor acompanhado pelo supervisório, traz quatro dados. O primeiro é o mapeamento Modbus, que diz em que endereço do \sigla{clp} o valor está. O segundo é o tipo bruto, o tipo do número guardado no \sigla{clp}. O terceiro é a escala, e o quarto é o período de varredura, o intervalo entre uma leitura e a seguinte. Como os valores são inteiros em décimos, a escala converte, na frequência, o intervalo bruto de 0 a 500 em 0 a 50 hertz. A Tabela~\ref{tab:cap6_tags} apresenta as sete tags previstas.
```

Por quê: explica tag, mapeamento, tipo bruto e período de varredura. "A escala linear leva... ao de" vira "converte... em".

### 17. (linha 358)

Atual:

```latex
\par As tags de comando liga/desliga e de referência aceitam escrita, sempre pelo comando em quatro fases. Como o comando é bem-sucedido com a resposta do controlador, sem releitura, a confirmação do efeito real vem da leitura posterior do estado do motor e da frequência.
```

Sugestão:

```latex
\par As tags de comando liga/desliga e de referência aceitam escrita, e a escrita sempre passa pelo comando em quatro fases. O comando é dado como bem-sucedido quando o controlador responde, sem ler o valor de volta. Por isso, para saber se o motor reagiu de fato, olha-se a leitura seguinte do estado do motor e da frequência.
```

Por quê: a frase longa com "como... a confirmação... vem de" vira três passos de causa e efeito.

### 18. (linha 360)

Atual:

```latex
\par Um alarme de corrente alta é configurado sobre a corrente do motor, com limite [A CONFIRMAR] e banda morta, para evitar disparos repetidos, e o evento de falha de comunicação do dispositivo pode ser ligado a um alarme comum.
```

Sugestão:

```latex
\par Um alarme de corrente alta é configurado sobre a corrente do motor, com limite [A CONFIRMAR] e banda morta. A banda morta é uma folga em torno do limite, que evita que o alarme dispare várias vezes quando a corrente oscila perto dele. O evento de falha de comunicação do dispositivo também pode ser ligado a um alarme comum.
```

Por quê: explica "banda morta" e separa as duas ideias do alarme.

### 19. (linha 364)

Atual:

```latex
\par O sinótico representa o motor por um símbolo cuja cor indica a marcha e de onde se abre o diálogo de comando, com a frequência, a corrente e a tensão em indicadores. O \emph{dashboard} reúne um gráfico da frequência e da corrente, um medidor e o estado do motor, e a lista de acompanhamento mostra as sete tags. A Figura~\ref{fig:cap6_telas_movi} reserva o espaço para essas telas.
```

Sugestão:

```latex
\par O sinótico é a tela com o desenho da instalação. Nela, o motor é um símbolo cuja cor indica se ele está em marcha, e é a partir desse símbolo que se abre o diálogo de comando. A frequência, a corrente e a tensão aparecem em indicadores. O \emph{dashboard}, um painel com gráficos e indicadores, reúne um gráfico da frequência e da corrente, um medidor e o estado do motor. A lista de acompanhamento mostra as sete tags. A Figura~\ref{fig:cap6_telas_movi} reserva o espaço para essas telas.
```

Por quê: a primeira frase tinha um "cuja... e de onde... com..." difícil de seguir. Fica uma ideia por frase, com sinótico e dashboard explicados em poucas palavras. Mantive "diálogo de comando" para seguir o termo dos outros capítulos (conferir).

## Roteiro de Ensaios

### 20. (linha 379)

Atual:

```latex
\par Seis ensaios exercitam, em sequência, a leitura contínua com o motor desligado, a partida e a parada pelo supervisório, o alarme de corrente alta e seu reconhecimento, a perda e o retorno de comunicação e a troca da referência de frequência. Cada um é detalhado no capítulo seguinte.
```

Sugestão:

```latex
\par O roteiro tem seis ensaios, feitos em sequência. Eles testam a leitura contínua com o motor desligado, a partida e a parada pelo supervisório, o alarme de corrente alta e seu reconhecimento, a perda e o retorno da comunicação e a troca da referência de frequência. Cada um é detalhado no capítulo seguinte.
```

Por quê: "exercitam" é palavra de texto gerado. Trocada por "testam", e a contagem fica numa frase própria.

---

# Capítulo 7: Resultados (14_6_Cap.tex)

## Abertura do capítulo

### 21. (linha 15)

Atual:

```latex
\par Este capítulo apresenta os resultados e discute até que ponto confirmam os requisitos. A avaliação combina as medidas de desempenho com o sistema completo em contêineres, o ensaio de aquisição contra um servidor Modbus de teste e os ensaios na bancada com o inversor de frequência.
```

Sugestão:

```latex
\par Este capítulo apresenta os resultados dos testes e discute se eles confirmam os requisitos do sistema. Os testes são de três tipos. O primeiro mede o desempenho do sistema completo, rodando em contêineres. O segundo testa a aquisição contra um servidor Modbus de teste. O terceiro reúne os ensaios na bancada, com o inversor de frequência.
```

Por quê: "combina as medidas... com o sistema... o ensaio... e os ensaios" é uma lista difícil de separar. Fica um tipo de teste por frase.

## Ambiente de ensaio

### 22. (linha 19)

Atual:

```latex
\par As medidas foram obtidas no computador do autor, que fez o papel de servidor. Todos os processos executaram em contêineres \emph{Docker} \cite{DOCKER_DOCS}, com limites de processamento e de memória que reproduzem os recursos planejados, de modo que o teto medido seja o de um contêiner pequeno e não o da máquina inteira. O \emph{PostgreSQL} \cite{POSTGRESQL_DOCS} na versão 18 e o \emph{Redis} \cite{REDIS_DOCS} na versão 8 também executaram em contêineres. A Tabela~\ref{tab:cap7_ambiente} resume o equipamento e as versões, e a Tabela~\ref{tab:cap7_limites} lista os limites.
```

Sugestão:

```latex
\par As medidas foram feitas no computador do autor, que funcionou como servidor. Todos os processos rodaram em contêineres \emph{Docker} \cite{DOCKER_DOCS}, cada um com um limite de processamento e de memória igual ao planejado. Assim, o teto medido, que é o máximo que o sistema sustenta, é o de um contêiner pequeno e não o da máquina inteira. O \emph{PostgreSQL} \cite{POSTGRESQL_DOCS} (versão 18) e o \emph{Redis} \cite{REDIS_DOCS} (versão 8) também rodaram em contêineres. A Tabela~\ref{tab:cap7_ambiente} resume o equipamento e as versões, e a Tabela~\ref{tab:cap7_limites} lista os limites.
```

Por quê: "executaram" vira "rodaram", "de modo que o teto medido seja" vira "Assim, o teto... é", e "teto" é explicado na primeira vez.

### 23. (linha 81)

Atual:

```latex
\par A soma dos limites é de 3,5 \emph{vCPU} e 4,5\,GiB. Um contêiner de 0,25 \emph{vCPU} para por alguns milissegundos ao esgotar sua cota de processamento, o que aparece no percentil 95, valor abaixo do qual ficam 95\,\% das medidas, e é uma característica do ambiente e não do código.
```

Sugestão:

```latex
\par A soma dos limites é de 3,5 \emph{vCPU} e 4,5\,GiB. Um contêiner de 0,25 \emph{vCPU}, isto é, um quarto de um processador virtual, para por alguns milissegundos quando gasta toda a sua cota de processamento. Esse efeito aparece no percentil 95, o valor abaixo do qual ficam 95\,\% das medidas, e vem do ambiente, não do código.
```

Por quê: explica a unidade na primeira vez e divide a frase de três cláusulas encadeadas ("o que aparece... e é...").

### 24. (linha 83)

Atual:

```latex
\par Cada degrau de carga roda dois ciclos de aquecimento, descartados, e doze ciclos medidos. Ele é sustentado quando pelo menos 99\,\% das leituras foram atendidas, o atraso no percentil 95 ficou abaixo de 20\,\% do período de varredura, as filas não cresceram na segunda metade da janela, nenhum contêiner reiniciou e o Redis ficou abaixo de 70\,\% da memória máxima. O teto é o maior degrau sustentado antes do primeiro reprovado.
```

Sugestão:

```latex
\par Nos testes de carga, a carga aumenta aos poucos, em degraus. Em cada degrau, os dois primeiros ciclos servem de aquecimento e são descartados, e os doze seguintes são medidos. O degrau é considerado sustentado quando cinco condições são cumpridas. Pelo menos 99\,\% das leituras foram atendidas. O atraso no percentil 95 ficou abaixo de 20\,\% do período de varredura. As filas não cresceram na segunda metade da medição. Nenhum contêiner reiniciou. E o \emph{Redis} ficou abaixo de 70\,\% da memória máxima. O teto é o maior degrau sustentado antes do primeiro que falhou.
```

Por quê: "degrau de carga" não era explicado, e cinco critérios numa frase só ficam difíceis de conferir. Em lista de frases, cada critério se vê.

### 25. (linha 85)

Atual:

```latex
\par A carga, o simulador de \sigla{clp}, o navegador e os contêineres dividem o mesmo computador, que executava também outras atividades, sem atraso de rede entre os contêineres. Os números, portanto, são de ordem de grandeza e valem como teto do servidor com equipamento que responde de imediato, e não como previsão para uma planta com modems lentos.
```

Sugestão:

```latex
\par O programa que gera a carga, o simulador de \sigla{clp}, o navegador e os contêineres usam o mesmo computador, que também executava outras atividades. Entre os contêineres, não há atraso de rede. Por isso, os números mostram apenas uma ordem de grandeza. Eles valem como o máximo do servidor com um equipamento que responde na hora, e não como previsão para uma planta com modems lentos.
```

Por quê: "A carga... dividem o computador" não faz sentido literal, e "ordem de grandeza" e "de imediato" ficam mais diretos.

## Medidas de desempenho já realizadas: Custo da autenticação

### 26. (linha 91)

Atual:

```latex
\par As senhas são guardadas como resumo irreversível, com um cálculo propositalmente custoso para dificultar ataques por força bruta \cite{OWASP_CHEATSHEETS}. Em 30 amostras, o cálculo do resumo teve mediana de 24,2 ms e percentil 95 de 26,2 ms, e a verificação teve mediana de 23,9 ms e percentil 95 de 26,8 ms. O custo é imperceptível para o usuário e caro o bastante para tornar impraticável a tentativa em massa de senhas contra um banco vazado (RNF04), como reúne a Tabela~\ref{tab:cap7_infra}.
```

Sugestão:

```latex
\par O sistema não guarda a senha em si, e sim um resumo dela, de onde não se consegue recuperar a senha original. O cálculo desse resumo é propositalmente lento, para dificultar ataques que testam muitas senhas até acertar \cite{OWASP_CHEATSHEETS}. Em 30 amostras, calcular o resumo levou 24,2 ms na mediana (o valor do meio das medidas) e 26,2 ms no percentil 95. Verificar uma senha levou 23,9 ms na mediana e 26,8 ms no percentil 95. Para quem usa o sistema, esse tempo passa despercebido. Para quem tentasse testar senhas em massa depois de um vazamento do banco, ele torna o ataque impraticável (RNF04). A Tabela~\ref{tab:cap7_infra} reúne as medidas.
```

Por quê: explica "resumo irreversível" e "mediana", separa as duas medidas em duas frases e tira a frase final de 40 palavras.

## Desempenho das telas

### 27. (linha 116)

Atual:

```latex
\par O desempenho das telas foi medido com o \emph{Lighthouse} em modo de celular, com rede e processador limitados, sobre a versão de produção e uma cópia isolada do sistema. Foram três execuções em cada tela, o sinótico, a lista de alarmes e o dashboard, e a Tabela~\ref{tab:cap7_lighthouse} apresenta a mediana, com o piso adotado como limite de regressão. O \emph{Largest Contentful Paint}, tempo até o maior elemento aparecer, ficou entre 1,25 e 1,51 s, abaixo do alvo de 2,5 s, e o deslocamento de \emph{layout} acumulado ficou muito abaixo do limite de 0,1. O tempo total de bloqueio da \emph{thread} principal foi maior no dashboard por causa do desenho dos gráficos.
```

Sugestão:

```latex
\par O desempenho das telas foi medido com o \emph{Lighthouse}, em modo de celular, com rede e processador limitados. A medição usou a versão de produção do sistema, em uma cópia isolada. Cada uma das três telas, o sinótico, a lista de alarmes e o \emph{dashboard}, foi medida três vezes. A Tabela~\ref{tab:cap7_lighthouse} apresenta a mediana, junto do piso adotado como limite: se uma nota ficar abaixo do piso, houve piora no desempenho da tela. O \emph{Largest Contentful Paint}, o tempo até o maior elemento aparecer, ficou entre 1,25 e 1,51 s, abaixo do alvo de 2,5 s. O deslocamento de \emph{layout} acumulado, que mede quanto a tela se mexe enquanto carrega, ficou muito abaixo do limite de 0,1. O tempo total de bloqueio da \emph{thread} principal, isto é, o tempo em que a tela fica sem responder ao usuário, foi maior no \emph{dashboard}, por causa do desenho dos gráficos.
```

Por quê: "limite de regressão" vira "se a nota cair abaixo do piso, houve piora", e as duas métricas que não eram explicadas passam a ser.

### 28. (linha 143)

Atual:

```latex
\par A acessibilidade em 100 indica que o teste automático não encontrou violação das diretrizes \sigla{wcag}, o que não substitui a conferência com leitor de tela, que ficou como risco aceito. A pontuação de \emph{SEO} em 54 é esperada, porque a área com login é marcada como não indexável. As medidas apoiam os requisitos RNF12, RF14 e RF15.
```

Sugestão:

```latex
\par A nota 100 em acessibilidade indica que o teste automático não encontrou violação das diretrizes \sigla{wcag}. Esse teste não substitui a conferência com leitor de tela, que ficou como risco aceito. A nota de \emph{SEO}, que mede a facilidade de a página ser encontrada em buscadores, é 54, e isso é esperado, porque a área com login é marcada para não ser indexada pelos buscadores. As medidas apoiam os requisitos RNF12, RF14 e RF15.
```

Por quê: o "o que não substitui" (que se refere a quê?) vira frase própria, e "SEO" e "não indexável" são explicados.

### 29. (linha 147)

Atual:

```latex
\par Mediu-se também o custo de atualizar um sinótico com 200 objetos, 120 vínculos e 506 nós gráficos, aberto por 60 s com dez tags mudando a cada ciclo. Nenhuma tarefa de mais de 50 ms foi registrada. O tempo para aplicar um ciclo de valores teve mediana de 6 ms e percentil 95 de 8 ms, abaixo dos 16 ms de um quadro a 60 quadros por segundo, o que sustenta os requisitos RNF01 e RF15.
```

Sugestão:

```latex
\par Mediu-se também quanto custa manter atualizado um sinótico grande, com 200 objetos, 120 vínculos e 506 nós gráficos. A tela ficou aberta por 60 s, com dez tags mudando a cada ciclo. Nenhuma tarefa durou mais de 50 ms. Aplicar um ciclo de valores levou 6 ms na mediana e 8 ms no percentil 95. Isso é menos que os 16 ms de um quadro a 60 quadros por segundo, o que sustenta os requisitos RNF01 e RF15.
```

Por quê: frases mais curtas e sujeito claro ("a tela ficou aberta"). Mantive "vínculos" e "nós gráficos" como estão, porque os termos vêm do Capítulo 5.

## Motor de scripts isolado

### 30. (linha 151)

Atual:

```latex
\par Variáveis derivadas, scripts e componentes de conteúdo executam em um motor isolado, como exige o RNF06. Com o programa que executa o motor (hospedeiro) já em funcionamento, em um contêiner de 0,25 \emph{vCPU}, o custo fixo de uma avaliação foi de 3,1 ms na mediana para a variável derivada, 3,5 ms para o script e 3,3 ms para o componente. O percentil 95 ficou entre 46 e 56 ms e o 99 entre 58 e 60 ms, valores que correspondem à pausa da cota de processador. O motor anterior, em \emph{Python}, custava cerca de 34 ms por avaliação, o que justificou a troca.
```

Sugestão:

```latex
\par As variáveis derivadas, os \emph{scripts} e os componentes de conteúdo rodam em um motor isolado do resto do sistema, como exige o RNF06. A medida foi feita com o programa que roda o motor (o hospedeiro) já ligado, em um contêiner de 0,25 \emph{vCPU}. Nessas condições, cada avaliação, isto é, cada execução de um cálculo ou \emph{script}, teve um custo fixo de 3,1 ms na mediana para a variável derivada, 3,5 ms para o \emph{script} e 3,3 ms para o componente. O percentil 95 ficou entre 46 e 56 ms, e o percentil 99, entre 58 e 60 ms. Esses valores maiores correspondem às pausas do contêiner por falta de cota de processador. O motor anterior, em \emph{Python}, custava cerca de 34 ms por avaliação, o que justificou a troca.
```

Por quê: "avaliação" e "custo fixo" ganham explicação, e "valores que correspondem à pausa da cota" fica mais direto. A frase sobre o Python está em "Avaliar corte", no fim.

### 31. (linha 153)

Atual:

```latex
\par Um hospedeiro de 0,25 \emph{vCPU} sustentou de 144 a 149 avaliações por segundo, e quatro chegaram a 353. Por \emph{vCPU}, isso equivale a uma faixa de 380 a 590 avaliações por segundo, com ruído de cerca de 50\,\% entre execuções. O agrupamento em lote aumentou a vazão, como mostra a Figura~\ref{fig:cap7_lote}: com lote de 25, chegou-se em média a 545 avaliações por segundo, cerca de 3,7 vezes a de uma por vez.
```

Sugestão:

```latex
\par Um hospedeiro de 0,25 \emph{vCPU} sustentou de 144 a 149 avaliações por segundo, e quatro hospedeiros chegaram a 353. Para um processador inteiro (1 \emph{vCPU}), isso equivale a uma faixa de 380 a 590 avaliações por segundo, e o resultado variou cerca de 50\,\% de uma execução para outra. Agrupar as avaliações em lotes aumentou o número de avaliações por segundo, como mostra a Figura~\ref{fig:cap7_lote}. Com lotes de 25, a média foi de 545 avaliações por segundo, cerca de 3,7 vezes o valor obtido com uma avaliação por vez.
```

Por quê: "vazão", "ruído" e "agrupamento" viram palavras comuns, e o fim da frase (que tinha dois pontos e uma comparação "a de uma por vez") fica separado. Conferir se "quatro" são quatro hospedeiros, como entendi.

### 32. (linha 180)

Atual:

```latex
\par O hospedeiro usou 17\,MiB de memória residente, e o contêiner dos scripts teve pico de 166\,MiB dos 512\,MiB permitidos. No contêiner de \emph{workers}, o pico foi de 435\,MiB, ou 85\,\% do limite, o mais apertado de todos, e a API chegou a 340\,MiB.
```

Sugestão:

```latex
\par O hospedeiro usou 17\,MiB de memória. O contêiner dos \emph{scripts} chegou a um pico de 166\,MiB, dos 512\,MiB permitidos. O contêiner dos \emph{workers}, que são os processos que executam as tarefas em segundo plano, chegou a 435\,MiB, ou 85\,\% do limite, o uso mais próximo do limite entre todos. A API chegou a 340\,MiB.
```

Por quê: uma ideia por frase, e "worker" explicado. Sai "residente", que é um detalhe de medição (a medida continua a mesma, só deixa de ser nomeada assim). "Mais apertado" vira "mais próximo do limite".

### 33. (linha 182)

Atual:

```latex
\par A Tabela~\ref{tab:cap7_meta} traz o teto sustentado de variáveis derivadas, chamadas de metas, e de tags internas geradas, comparado com o piso planejado. As metas liam duas tags e foram avaliadas de 1,2 a 1,85 vezes por ciclo, e as tags internas foram geradas em lotes de 25 por dispositivo. O primeiro recurso a saturar foi sempre o contêiner de \emph{workers}, e não o motor de scripts. As metas ficaram abaixo do piso a 5 e a 30 s e no piso a 10 s, e as tags internas ficaram abaixo do piso nas três faixas, o que levou a uma especificação dedicada à capacidade das filas de ingestão e de histórico.
```

Sugestão:

```latex
\par A Tabela~\ref{tab:cap7_meta} mostra o teto sustentado de variáveis derivadas, chamadas de metas, e de tags internas geradas, comparado com o piso planejado, que é o mínimo que se pretendia atingir. As metas liam duas tags e foram avaliadas de 1,2 a 1,85 vezes por ciclo. As tags internas foram geradas em lotes de 25 por dispositivo. O primeiro recurso a chegar ao limite foi sempre o contêiner de \emph{workers}, e não o motor de \emph{scripts}. As metas ficaram abaixo do piso nos períodos de 5 e de 30 s e no piso no período de 10 s. As tags internas ficaram abaixo do piso nos três períodos. Por isso, foi criada uma especificação dedicada à capacidade das filas de entrada de dados e de histórico.
```

Por quê: "saturar", "faixas" e "ingestão" saem, e o fim da frase (que misturava resultado e consequência) vira duas frases. Conferir se "piso planejado" é de fato o mínimo pretendido.

## Gravação do histórico

### 34. (linha 215)

Atual:

```latex
\par O histórico é gravado por uma fila própria, em lotes, numa tabela dividida por mês. O teste de carga mediu de 186 a 235 trabalhos por segundo com 40 linhas cada, ou 7.430 a 9.400 linhas por segundo, a um custo de 1,8 a 2,7 ms de processador por trabalho. A decisão de gravar, no \emph{Redis}, custou 16,4 \textmu s por chamada e 2,3\,\% do processador do \emph{Redis} a 1.000 leituras por segundo. A retirada de 200.000 linhas pelo expurgo levou 1,6 s, ou 125 mil linhas por segundo. Isso sustenta o RF02 com folga em relação à taxa de leitura da aquisição.
```

Sugestão:

```latex
\par O histórico é gravado por uma fila própria, em lotes, em uma tabela dividida por mês. No teste de carga, o sistema processou de 186 a 235 trabalhos por segundo, cada um com 40 linhas, o que dá de 7.430 a 9.400 linhas por segundo. Cada trabalho, isto é, cada pacote de leituras a gravar, custou de 1,8 a 2,7 ms de processador. Decidir se uma leitura deve ser gravada, decisão tomada no \emph{Redis}, custou 16,4 \textmu s por chamada e 2,3\,\% do processador do \emph{Redis} a 1.000 leituras por segundo. O expurgo, que apaga o histórico antigo, retirou 200.000 linhas em 1,6 s, ou 125 mil linhas por segundo. Esses números sustentam o RF02 com folga em relação à taxa de leitura da aquisição.
```

Por quê: o trecho tem três medidas diferentes em sequência, e "trabalho" e "expurgo" não eram explicados. Passa a haver uma medida por frase.

### 35. (linha 217)

Atual:

```latex
\par Outro teste manteve leituras contínuas por 10 minutos e conferiu que nenhuma tag ficava desatualizada na leitura final. Três execuções seguidas passaram, em 639, 652 e 636 s, o que confirma o RF03.
```

Sugestão:

```latex
\par Outro teste manteve as leituras contínuas por 10 minutos e, no final, conferiu se alguma tag estava desatualizada. Nenhuma estava. O teste foi repetido três vezes seguidas, e todas passaram, com duração de 639, 652 e 636 s, o que confirma o RF03.
```

Por quê: "conferiu que nenhuma tag ficava desatualizada" é mais claro como "conferiu se alguma estava. Nenhuma estava".

## Aquisição e ensaio com o simulador: Capacidade de leitura Modbus

### 36. (linha 223)

Atual:

```latex
\par A capacidade foi medida com um simulador Modbus que emula milhares de \sigla{clp} virtuais, cada um com 25 tags lidas em cinco requisições por ciclo. A Tabela~\ref{tab:cap7_aquisicao} resume o teto de uma réplica da aquisição, com 0,25 \emph{vCPU}, em três períodos de varredura. O limite veio da soma do processador da aquisição e do Redis, ambos perto de 100\,\%, e não do banco. O teto foi praticamente o mesmo em 10 e em 30 s, entre 250 e 325 tags por segundo, o que confirma que o limite é de processamento e não do ciclo.
```

Sugestão:

```latex
\par A capacidade foi medida com um simulador Modbus, que imita milhares de \sigla{clp} virtuais. Cada \sigla{clp} virtual tinha 25 tags, lidas em cinco requisições por ciclo. A Tabela~\ref{tab:cap7_aquisicao} resume o teto de uma réplica da aquisição, isto é, de uma cópia do serviço de aquisição, com 0,25 \emph{vCPU}, em três períodos de varredura. O limite veio da soma do uso de processador da aquisição e do \emph{Redis}, ambos perto de 100\,\%, e não do banco de dados. Nos períodos de 10 e de 30 s, o teto foi praticamente o mesmo, cerca de 325 tags por segundo. Isso confirma que o limite é a capacidade de processamento, e não o tempo do ciclo.
```

Por quê: explica "réplica" (como pede o CLAUDE.md) e divide a frase final. Atenção ao dado: o texto original diz "entre 250 e 325", mas a Tabela traz 325 nos períodos de 10 e de 30 s (o 250 é do período de 5 s). Usei o valor da tabela. Conferir.

### 37. (linha 248)

Atual:

```latex
\par A Figura~\ref{fig:cap7_aquisicao} compara esses tetos com rodadas anteriores, com uma única requisição por \sigla{clp} e ciclo. Passar de uma para cinco requisições reduziu o teto de 2.000 para 1.250 tags a 5 s, queda de 37\,\%, e de 4.000 para 3.250 a 10 s, queda de 19\,\%, porque cada ida e volta Modbus tem um tempo fixo. Em equipamentos reais, o tempo de resposta do \emph{modem} e da rede se soma a cada requisição, e o teto prático será menor. O RF01 fica confirmado em carga. O efeito de uma segunda réplica não foi medido, de modo que o uso de várias réplicas (RNF02) é sustentado pela arquitetura, e o total deve crescer com o número de réplicas até o \emph{Redis} passar a ser o limite.
```

Sugestão:

```latex
\par A Figura~\ref{fig:cap7_aquisicao} compara esses tetos com os de rodadas anteriores, em que cada \sigla{clp} recebia uma única requisição por ciclo. Passar de uma para cinco requisições reduziu o teto de 2.000 para 1.250 tags a 5 s, uma queda de 37\,\%, e de 4.000 para 3.250 tags a 10 s, uma queda de 19\,\%. Isso acontece porque cada ida e volta de uma requisição Modbus tem um tempo fixo. Em equipamentos reais, o tempo de resposta do \emph{modem} e da rede se soma ao de cada requisição, e o teto prático será menor. O RF01 fica confirmado em carga. Não se mediu o efeito de uma segunda réplica. Por isso, o uso de várias réplicas (RNF02) se apoia na arquitetura. O total deve crescer com o número de réplicas, até que o \emph{Redis} se torne o limite.
```

Por quê: o parágrafo tem 8 cláusulas encadeadas com vírgulas. Agora cada causa e cada limitação ficam numa frase.

## Ensaio ponta a ponta com o servidor de teste

### 38. (linha 278)

Atual:

```latex
\par Para validar a cadeia completa, o autor usou o ProtoProbe, um servidor Modbus de teste na porta 502, com identificador de escravo 1 e 2.500 registradores de retenção de 16 bits. Cadastraram-se, pela interface, uma planta, um dispositivo, uma tag no endereço 7, lida de 1 em 1 s, um dispositivo interno com uma tag gravável, um evento que compara a tag lida com um limite e um \emph{script} que copia o valor para a tag interna. Nenhuma função de escrita Modbus foi usada nessa prova.
```

Sugestão:

```latex
\par Para validar o caminho completo, o autor usou o ProtoProbe, um servidor Modbus de teste que responde na porta 502, com identificador de escravo 1 e 2.500 registradores de retenção de 16 bits. Pela interface, foram cadastrados uma planta, um dispositivo e uma tag no endereço 7, lida a cada 1 s. Foram cadastrados também um dispositivo interno, criado dentro do próprio sistema, com uma tag em que o sistema pode escrever, um evento que compara a tag lida com um limite e um \emph{script} que copia o valor para a tag interna. Nessa prova, nenhuma função de escrita Modbus foi usada.
```

Por quê: a lista de seis itens separada por vírgulas vira duas frases, e "gravável" vira "em que o sistema pode escrever". Conferir se o dispositivo interno é mesmo descrito assim no Capítulo 3.

### 39. (linha 280)

Atual:

```latex
\par O valor 12.314, mantido no endereço 7, chegou ao valor atual com qualidade boa. O evento disparou, o \emph{script} executou no contêiner isolado em 13 a 87 ms e gravou a tag interna com o mesmo valor, sem falha. Movendo o limite do evento, o \emph{script} executou nas duas transições. A prova mostra que a leitura Modbus, o valor atual, o detector de eventos, o motor de scripts e a escrita em tag interna funcionam em sequência, sem código específico do equipamento (RNF08).
```

Sugestão:

```latex
\par O valor 12.314 foi mantido no endereço 7 e chegou ao sistema como valor atual da tag, com qualidade boa, isto é, como uma leitura válida. O evento disparou, e o \emph{script} rodou no contêiner isolado, em 13 a 87 ms, e gravou o mesmo valor na tag interna, sem falha. Ao mover o limite do evento, o \emph{script} rodou nas duas transições. Essa prova mostra que a leitura Modbus, o valor atual, o detector de eventos, o motor de \emph{scripts} e a escrita na tag interna funcionam em sequência, sem nenhum código feito para esse equipamento (RNF08).
```

Por quê: "chegou ao valor atual com qualidade boa" não diz o que chegou nem onde. A frase com três ações separadas por vírgula ("disparou, executou e gravou") passa a ter sujeitos claros. Conferir o sentido de "qualidade boa" no Capítulo 3.

### 40. (linha 282)

Atual:

```latex
\par O ensaio de carga contra o ProtoProbe cadastra um número crescente de tags, com períodos de 1 e de 5 s, e confere se as leituras gravadas coincidem com o esperado, se o valor atual acompanha as mudanças e se a lista de acompanhamento exibe o valor com o atraso previsto. A Tabela~\ref{tab:cap7_protoprobe} reserva o espaço para os resultados.
```

Sugestão:

```latex
\par No ensaio de carga contra o ProtoProbe, o número de tags cadastradas aumenta aos poucos, com períodos de 1 e de 5 s. O ensaio confere três coisas: se as leituras gravadas são as esperadas, se o valor atual acompanha as mudanças e se a lista de acompanhamento mostra o valor com o atraso previsto. A Tabela~\ref{tab:cap7_protoprobe} reserva o espaço para os resultados.
```

Por quê: três verificações numa frase só ganham um "três coisas" que anuncia a lista.

## Resultados da bancada

### 41. (linha 313)

Atual:

```latex
\par A bancada reúne um \sigla{clp} que atua como servidor Modbus, um inversor de frequência que aciona um motor real, comandado pelo \sigla{clp} por rede serial \cite{SCHNEIDER_ATV320_MODBUS_MANUAL}, e o servidor do sistema. Os ensaios E1 a E6, na Tabela~\ref{tab:cap7_ensaios}, percorrem a operação do motor, que os professores repetem pelo tablet na demonstração. Duas medidas interessam: o tempo entre a confirmação do comando e a resposta do equipamento, que mede a latência do caminho de escrita, e o atraso do supervisório, entre uma mudança no equipamento e sua exibição na tela, limitado pela soma do período de varredura, do período de atualização da tela e de uma margem de processamento (RNF01).
```

Sugestão:

```latex
\par A bancada tem um \sigla{clp}, que atua como servidor Modbus, um inversor de frequência, que aciona um motor real e é comandado pelo \sigla{clp} por rede serial \cite{SCHNEIDER_ATV320_MODBUS_MANUAL}, e o servidor do sistema. Os ensaios E1 a E6, listados na Tabela~\ref{tab:cap7_ensaios}, percorrem a operação do motor, a mesma que os professores repetem pelo tablet na demonstração. Duas medidas interessam. A primeira é o tempo entre a confirmação do comando e a resposta do equipamento, que mede a demora do caminho de escrita (a latência). A segunda é o atraso do supervisório, o tempo entre uma mudança no equipamento e a sua exibição na tela. Esse atraso tem um limite, dado pela soma do período de varredura, do período de atualização da tela e de uma margem de processamento (RNF01).
```

Por quê: o parágrafo repete a descrição da bancada do capítulo anterior em uma frase com três "que". As duas medidas passam a ser apresentadas uma por frase, com "latência" explicada.

### 42. Ensaio E1 (linha 346)

Atual:

```latex
\par \emph{Ensaio E1.} Com o motor parado, as grandezas não variam, o que isola o desempenho da aquisição. O ensaio mantém as tags em leitura contínua e confere se o histórico não perde amostras, se o carimbo de tempo é monotônico e espaçado pelo período configurado, com variação de poucos milissegundos, e se a lista de acompanhamento atrasa no máximo o período de varredura mais o de atualização da tela. Espera-se uma taxa de entrega próxima de 100\,\% e nenhum alarme.
```

Sugestão:

```latex
\par \emph{Ensaio E1.} Com o motor parado, os valores não mudam. Assim, o ensaio avalia só o desempenho da aquisição. As tags ficam em leitura contínua, e confere-se o seguinte. O histórico não pode perder amostras. O carimbo de tempo precisa sempre crescer e ficar espaçado pelo período configurado, com variação de poucos milissegundos. E a lista de acompanhamento pode atrasar, no máximo, o período de varredura mais o de atualização da tela. Espera-se uma taxa de entrega próxima de 100\,\% e nenhum alarme.
```

Por quê: "monotônico" vira "sempre crescer", e as três verificações ficam em frases separadas.

### 43. Ensaio E2 (linha 348)

Atual:

```latex
\par \emph{Ensaio E2.} O operador define a referência de 40 hertz e envia o comando de partida pelas quatro fases. O sistema escreve a ordem em um registrador do \sigla{clp}, que a repassa ao inversor. O ensaio mede o tempo entre a confirmação e a resposta do \sigla{clp}, em que o comando é dado como concluído, e o tempo até a frequência começar a subir na tela. Espera-se a resposta em dezenas de milissegundos, bem abaixo do limite de 30 s do comando, que a trava por tag impeça um segundo comando simultâneo e que o comando fique registrado com o operador, a tag, o valor e o instante.
```

Sugestão:

```latex
\par \emph{Ensaio E2.} O operador define a referência de 40 hertz e envia o comando de partida pelas quatro fases. O sistema escreve a ordem em um registrador do \sigla{clp}, e o \sigla{clp} a repassa ao inversor. O ensaio mede dois tempos. O primeiro vai da confirmação até a resposta do \sigla{clp}, momento em que o comando é dado como concluído. O segundo vai dali até a frequência começar a subir na tela. Espera-se que a resposta do \sigla{clp} venha em dezenas de milissegundos, bem abaixo do limite de 30 s do comando. Espera-se também que a trava por tag, que permite um comando por vez em cada tag, impeça um segundo comando ao mesmo tempo e que o comando fique registrado com o operador, a tag, o valor e o instante.
```

Por quê: o "que" da segunda frase não deixa claro quem repassa, e a última frase tinha três expectativas ligadas por vírgulas.

### 44. Ensaio E3 (linha 350)

Atual:

```latex
\par \emph{Ensaio E3.} A ordem de parada segue o mesmo caminho, e a frequência desce pela rampa de desaceleração. Espera-se o mesmo tempo de comando do E2, que a tela acompanhe a frequência até zero e que a leitura continue sem perda, sem alarme de comunicação, o que separa o efeito do processo do efeito do sistema.
```

Sugestão:

```latex
\par \emph{Ensaio E3.} A ordem de parada segue o mesmo caminho, e a frequência desce pela rampa de desaceleração, isto é, de forma gradual até zero. Espera-se o mesmo tempo de comando do E2 e que a tela acompanhe a frequência até zero. Espera-se também que a leitura continue sem perda e sem alarme de comunicação. Isso mostra que a variação vem do processo, e não de um problema do sistema.
```

Por quê: o "o que separa o efeito do processo do efeito do sistema" era abstrato. Mantive o sentido que entendi, mas conferir se é isso mesmo que se quis dizer.

### 45. Ensaio E4 (linha 352)

Atual:

```latex
\par \emph{Ensaio E4.} Com o motor ligado, a corrente cruza o limite configurado [A CONFIRMAR] do alarme de corrente alta, e o detector cria uma ocorrência. O ensaio mede o tempo entre o cruzamento e a exibição no indicador de alarmes, que deve ser da ordem do atraso do supervisório. O operador reconhece o alarme, e confere-se que o registro guarda o nome e o instante. Parado o motor, a corrente cai abaixo do limite, descontada a banda morta, e o alarme retorna ao normal. Espera-se um alarme único por cruzamento e a sequência correta na linha do tempo.
```

Sugestão:

```latex
\par \emph{Ensaio E4.} Com o motor ligado, a corrente passa do limite configurado [A CONFIRMAR] para o alarme de corrente alta, e o detector cria uma ocorrência de alarme. O ensaio mede o tempo entre a corrente passar do limite e o alarme aparecer no indicador de alarmes. Esse tempo deve ser da ordem do atraso do supervisório. Depois, o operador reconhece o alarme, e confere-se se o registro guarda o nome de quem reconheceu e o instante. Em seguida, o motor é parado, e a corrente cai abaixo do limite, descontada a banda morta. O alarme então volta ao normal. Espera-se um único alarme por cruzamento do limite e a sequência correta na linha do tempo.
```

Por quê: "cruza o limite" e "cruzamento" ficam como "passa do limite", e o "que deve ser" (que se referia ao tempo, longe dele) ganha frase própria.

### 46. Ensaio E5 (linha 354)

Atual:

```latex
\par \emph{Ensaio E5.} A comunicação é interrompida desconectando o cabo Ethernet entre o comutador e o \sigla{clp}, e depois restabelecida. Durante a falha, o \sigla{clp} continua executando o programa. O sistema marca o valor como desatualizado depois de três períodos de varredura, mantendo o último valor e o carimbo, e o dispositivo passa a degradado depois de três ciclos falhos. Com o cabo de volta, o primeiro ciclo bem-sucedido fecha o estado, sem rajada de leituras acumuladas. O ensaio mede o tempo até a marcação de desatualizado e o tempo até a volta à qualidade boa e confere que não há lacuna preenchida no histórico, pois a lacuna é a evidência da falha.
```

Sugestão:

```latex
\par \emph{Ensaio E5.} Para simular a falha, desconecta-se o cabo Ethernet entre o switch e o \sigla{clp}, e depois o cabo é reconectado. Durante a falha, o \sigla{clp} continua executando o programa. Depois de três períodos de varredura sem resposta, o sistema marca o valor como desatualizado e mantém o último valor e o carimbo de tempo. Depois de três ciclos com falha, o dispositivo passa ao estado degradado. Quando o cabo volta, o primeiro ciclo bem-sucedido encerra esse estado, sem receber de uma vez as leituras acumuladas. O ensaio mede o tempo até a marcação de desatualizado e o tempo até a volta à qualidade boa. Confere também que o histórico não preenche o intervalo da falha, pois a lacuna é a evidência de que houve falha.
```

Por quê: o parágrafo passa de 100 palavras e mistura procedimento, comportamento esperado e medidas. Aqui estão em ordem. Também troco "comutador" por "switch", que é o termo do Capítulo 6 (usar um só em todo o trabalho).

### 47. Ensaio E6 (linha 356)

Atual:

```latex
\par \emph{Ensaio E6.} Com o motor a 40 hertz, o operador altera a referência para 30 hertz pelo mesmo comando. O ensaio mede o tempo até a resposta do \sigla{clp} e até a frequência atingir a referência, e confere que um segundo comando imediato é recusado pela trava por tag e que o reenvio com a mesma chave de idempotência não cria uma segunda escrita.
```

Sugestão:

```latex
\par \emph{Ensaio E6.} Com o motor a 40 hertz, o operador altera a referência para 30 hertz pelo mesmo comando. O ensaio mede o tempo até a resposta do \sigla{clp} e o tempo até a frequência chegar à referência. Confere também duas coisas. Um segundo comando logo em seguida deve ser recusado pela trava por tag. E o reenvio do comando com a mesma chave de idempotência, que identifica o pedido como o mesmo, não pode criar uma segunda escrita.
```

Por quê: explica "chave de idempotência" e separa as duas verificações.

## Validação dos requisitos

### 48. (linha 421)

Atual:

```latex
\par A Tabela~\ref{tab:cap7_requisitos} confronta cada requisito com a evidência disponível. É atendido o requisito com medida realizada ou teste automatizado, e parcialmente atendido o que depende da bancada ou de uma medida ainda não feita, caso dos requisitos de comando, de alarmes e de atraso, que dependem dos ensaios E1 a E6. Nenhum requisito ficou sem evidência.
```

Sugestão:

```latex
\par A Tabela~\ref{tab:cap7_requisitos} confronta cada requisito com a evidência disponível. Um requisito é considerado atendido quando há uma medida realizada ou um teste automatizado. É considerado parcialmente atendido quando depende da bancada ou de uma medida que ainda não foi feita. É o caso dos requisitos de comando, de alarmes e de atraso, que dependem dos ensaios E1 a E6. Nenhum requisito ficou sem evidência.
```

Por quê: a inversão "É atendido o requisito com... e parcialmente atendido o que..." obriga a reler. A ordem direta é mais simples.

## Qualidade de software

### 49. (linha 502)

Atual:

```latex
\par A qualidade do código faz parte do resultado, porque um supervisório que mexe em equipamentos precisa ser verificável. O repositório reúne cerca de 3.600 arquivos de teste, dos quais cerca de 3.000 são unitários, mais de 600 são de integração, com o banco e o Redis reais, e 17 são de carga. O código das camadas de domínio e de aplicação tem cobertura exigida de 100\,\% de linhas e de ramos.
```

Sugestão:

```latex
\par A qualidade do código também faz parte do resultado, porque um supervisório que comanda equipamentos precisa poder ser verificado. O repositório tem cerca de 3.600 arquivos de teste. Cerca de 3.000 são testes unitários, que verificam cada parte isolada. Mais de 600 são testes de integração, que usam o banco de dados e o \emph{Redis} reais, e 17 são testes de carga. Nas camadas de domínio e de aplicação, o código precisa ter cobertura de 100\,\% das linhas e dos ramos, isto é, todas as linhas e todos os caminhos possíveis devem ser executados pelos testes.
```

Por quê: "unitários", "de integração" e "cobertura" ganham uma explicação curta, e a lista que se desfazia no meio da frase fica em frases separadas.

### 50. (linha 504)

Atual:

```latex
\par Verificações automáticas rodam sobre o repositório inteiro e reprovam violações de projeto, como uma camada que depende de outra fora da ordem permitida ou um arquivo sem teste. O fim de cada lote de trabalho executa a análise estática, a verificação de tipos, os testes, a auditoria de dependências, um teste de segurança do tipo caixa preta e uma revisão independente do código. Esse roteiro é executado localmente, pois ainda não há integração contínua em servidor.
```

Sugestão:

```latex
\par Verificações automáticas examinam o repositório inteiro e reprovam o que foge das regras do projeto, como uma camada que depende de outra fora da ordem permitida ou um arquivo sem teste. No fim de cada lote de trabalho, rodam a análise estática do código, a verificação de tipos, os testes, a auditoria das dependências, um teste de segurança do tipo caixa preta, que ataca o sistema sem conhecer o código, e uma revisão independente do código. Esse roteiro roda no computador do autor, porque ainda não há integração contínua em um servidor.
```

Por quê: "reprovam violações de projeto" e "o fim... executa" são abstratos e passam a ter sujeito claro. "Caixa preta" é explicada.

## Limitações e comparação com a literatura

### 51. (linha 512)

Atual:

```latex
\par O \sigla{scada} de baixo custo desenvolvido em C\# com um \sigla{clp} comercial e testado em uma planta de alimentos valida o funcionamento em campo, mas não relata latência nem vazão do software \cite{PHUYAL2020_COST_EFFICIENT_SCADA}. O presente trabalho segue a mesma motivação e acrescenta uma avaliação quantitativa, ainda que em laboratório. Já a dissertação sobre um supervisório baseado na web compara tempo de resposta, carga de processador e tráfego de rede \cite{AHMED2011_EFFICIENT_WEB_SCADA}. A diferença aqui é a arquitetura, que separa a aquisição, o \emph{cache} e o histórico em contêineres independentes e torna cada gargalo mensurável isoladamente.
```

Sugestão:

```latex
\par Um \sigla{scada} de baixo custo, feito em C\# com um \sigla{clp} comercial e testado em uma planta de alimentos, mostra que o sistema funciona em campo, mas não informa a latência nem a quantidade de dados que o software processa por segundo \cite{PHUYAL2020_COST_EFFICIENT_SCADA}. Este trabalho tem a mesma motivação e acrescenta uma avaliação com números, ainda que feita em laboratório. Já a dissertação sobre um supervisório baseado na web compara o tempo de resposta, o uso de processador e o tráfego de rede \cite{AHMED2011_EFFICIENT_WEB_SCADA}. A diferença aqui está na arquitetura, que separa a aquisição, o \emph{cache} e o histórico em contêineres independentes. Com isso, cada ponto que limita o desempenho (gargalo) pode ser medido separadamente.
```

Por quê: "valida", "relata", "avaliação quantitativa" e "mensurável isoladamente" viram palavras mais comuns, e a última frase, que tinha dois verbos ligados por "e", fica em duas.

---

# Avaliar corte (sem reescrita)

A. Capítulo 7, linha 151, última frase: "O motor anterior, em \emph{Python}, custava cerca de 34 ms por avaliação, o que justificou a troca." O CLAUDE.md pede para não citar o que o sistema não usa. Esse trecho conta a história do motor, e o leitor da banca pode perguntar por que se falou de Python.

B. Capítulo 7, linha 215, frase sobre o Redis: "A decisão de gravar, no \emph{Redis}, custou 16,4 \textmu s por chamada e 2,3\,\% do processador do \emph{Redis} a 1.000 leituras por segundo." É um detalhe interno de uma medida muito fina, que um leitor de automação dificilmente usa para decidir algo. O RF02 já fica sustentado pelas medidas de linhas por segundo.

---

# Resumo

Relatório gravado em `C:\Users\Arthur Ferreira\Desktop\Latex\TCC\Ajustes\linguagem\cap6-cap7.md`.

Sugestões: 51 (20 no Capítulo 6, 31 no Capítulo 7), mais 2 trechos em "avaliar corte".
