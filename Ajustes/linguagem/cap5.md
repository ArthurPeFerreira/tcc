# Revisão de linguagem, Capítulo 5 (Interface do Sistema), arquivo 14_4_Cap.tex

O capítulo já está em tom bom, com frases em geral curtas. O que mais pesa é: (1) parágrafos com várias ideias numa frase só, sobretudo no menu, na tela de eventos, no alarme, no reconhecimento, no comando de quatro fases e no último parágrafo; (2) frases que giram em torno de si mesmas ("O sucesso significa que o equipamento respondeu... que confere", "O Sinótico representa o processo por um desenho... equivalente moderno do esquema sinótico"); (3) palavras de texto técnico pesado ("translação", "intermitente", "regra de detalhe", "resolução de uma sequência"); (4) termos usados sem explicação na primeira vez (dispositivo de E/S, qualidade, banda morta). Há 30 sugestões, em ordem de aparição no texto. Há também uma marca de "avaliar corte" no fim. Legendas, figuras e `\todo` não foram revistos.

---

## Abertura do capítulo (linha 4)

### 1.
Atual:
```
\par Este capítulo descreve a interface como o operador e o administrador a utilizam: os princípios de projeto da interface homem-máquina (\sigla{ihm}), em especial os da norma \sigla{isa}-101, a estrutura geral da aplicação e cada grupo de telas, com o requisito que atende. Os nomes de menu e de campos são os que aparecem na interface.
```
Sugestão:
```
\par Este capítulo mostra a interface do sistema do ponto de vista de quem a usa, o operador e o administrador. Primeiro vêm os princípios da interface homem-máquina (\sigla{ihm}), em especial os da norma \sigla{isa}-101. Depois vêm a estrutura geral da aplicação e cada grupo de telas, com o requisito que ela atende. Os nomes de menu e de campos são os que aparecem na interface.
```
Por quê: uma frase com quatro itens separados por vírgula vira três frases curtas, sem perder nada.

## Princípios de interface adotados (linhas 8 a 16)

### 2.
Atual:
```
\par A interface segue as recomendações para supervisão de alto desempenho, que pedem telas sóbrias, nas quais a atenção do operador seja conduzida ao que está fora do normal \cite{ISA101_2015_HMI,ELIPSE_IHM_ALTA_PERFORMANCE}. Três princípios se repetem em todas as telas.
```
Sugestão:
```
\par A interface segue as recomendações para supervisão de alto desempenho. Elas pedem telas sóbrias, em que o operador percebe logo o que está fora do normal \cite{ISA101_2015_HMI,ELIPSE_IHM_ALTA_PERFORMANCE}. Três princípios se repetem em todas as telas.
```
Por quê: "a atenção seja conduzida" é passiva e abstrata, "o operador percebe logo" diz o mesmo.

### 3.
Atual:
```
\par O segundo é a cor apenas para a condição anormal: alarme, aviso, dado desatualizado e seleção do usuário. Os quatro níveis de alarme (Crítico, Alto, Médio e Baixo) têm cor, ícone e nome escrito, e a cor nunca é o único sinal \cite{ISA101_2015_HMI}. Valores com leitura falha ou velha são distinguidos por ícone, texto e itálico, nunca substituídos por zero.
```
Sugestão:
```
\par O segundo é usar cor apenas para a condição anormal: alarme, aviso, dado desatualizado e seleção do usuário. Os quatro níveis de alarme (Crítico, Alto, Médio e Baixo) têm cor, ícone e nome escrito, e a cor nunca é o único sinal \cite{ISA101_2015_HMI}. Um valor com leitura falha ou velha ganha ícone, texto e itálico, e nunca é trocado por zero.
```
Por quê: tira a voz passiva ("são distinguidos", "substituídos").

### 4.
Atual:
```
\par A consistência entre telas vem de um conjunto único de componentes visuais, desenvolvidos com React e Next.js \cite{REACT_DOCS,NEXTJS_DOCS}. Toda lista, formulário ou detalhe nasce do mesmo modelo, todas as funções podem ser executadas com o teclado e o vocabulário é único: ``Excluir'' apaga um registro, ``Cancelar'' muda um estado e ``Remover'' desfaz um vínculo.
```
Sugestão:
```
\par Para que as telas pareçam parte do mesmo sistema, todas usam um conjunto único de componentes visuais, feitos com React e Next.js \cite{REACT_DOCS,NEXTJS_DOCS}. Toda lista, formulário ou detalhe parte do mesmo modelo, todas as funções podem ser usadas pelo teclado e cada palavra tem sempre o mesmo sentido: ``Excluir'' apaga um registro, ``Cancelar'' muda um estado e ``Remover'' desfaz um vínculo.
```
Por quê: "consistência... vem de" é abstrato. "Vocabulário é único" fica mais claro como "cada palavra tem o mesmo sentido".

## Estrutura geral da aplicação (linhas 20 a 36)

### 5.
Atual:
```
\par Toda tela depois do acesso fica dentro de uma moldura comum, mostrada na Figura~\ref{fig:cap4_casco}. À esquerda, o menu lateral lista apenas o que o cargo e as permissões permitem abrir (RF06). Na barra superior ficam o indicador de alarmes e o menu do usuário. O acesso é pelo navegador, sem instalação local (RNF12).
```
Sugestão:
```
\par Toda tela depois do acesso fica dentro de uma moldura comum, mostrada na Figura~\ref{fig:cap4_casco}. À esquerda, o menu lateral mostra só as telas que o cargo e as permissões do usuário permitem abrir (RF06). Na barra superior ficam o indicador de alarmes e o menu do usuário. O acesso é pelo navegador, sem instalar nada no computador (RNF12).
```
Por quê: troca "lista apenas o que... permitem abrir" por algo mais direto. Mudança pequena, avaliar se vale.

### 6.
Atual:
```
\par O menu segue a hierarquia de telas: primeiro os itens de supervisão, Mapa, Início, Dashboard, Sinótico, Lista de acompanhamento, Comandos, Alarmes e Linha do tempo, e depois os de configuração, exclusivos do administrador da instalação: Plantas, Usuários, Grupos, Imagens, Telas, Pastas de telas, Configuração de alarmes, Eventos e Scripts. Usuários é visível também ao supervisor, que gere somente operadores.
```
Sugestão:
```
\par O menu segue a hierarquia de telas. Primeiro vêm os itens de supervisão: Mapa, Início, Dashboard, Sinótico, Lista de acompanhamento, Comandos, Alarmes e Linha do tempo. Depois vêm os de configuração, exclusivos do administrador da instalação: Plantas, Usuários, Grupos, Imagens, Telas, Pastas de telas, Configuração de alarmes, Eventos e Scripts. O item Usuários também aparece para o supervisor, que gerencia apenas operadores.
```
Por quê: duas listas longas em uma frase só dificultam achar onde uma termina e a outra começa. "Gere" também pode ser lido como "gera".

### 7.
Atual:
```
\par As telas com valores ao vivo exibem uma faixa de estado da conexão, que avisa quando a rede oscila ou o serviço não responde, e o último valor continua na tela, marcado como desatualizado. Os valores são atualizados por \emph{polling} curto, com período único para todo o sistema, entre 1 e 10 s (RNF01).
```
Sugestão:
```
\par As telas com valores ao vivo mostram uma faixa que avisa quando a rede oscila ou o serviço não responde. Nesse caso, o último valor continua na tela, marcado como desatualizado. Os valores se atualizam porque a tela pergunta ao servidor de tempos em tempos (\emph{polling}), num intervalo único para todo o sistema, entre 1 e 10 s (RNF01).
```
Por quê: divide a frase longa em três e lembra o leitor do que é \emph{polling} em palavras comuns. O termo já foi definido no Capítulo 2, então a explicação curta aqui só reforça.

## Entrar e trocar a senha (linha 52)

### 8.
Atual:
```
\par O sistema não envia e-mail. O administrador cria o usuário e o sistema gera uma senha de uso único, mostrada uma só vez, válida por 24 horas. No primeiro acesso, a tela ``Trocar senha'' é a única que o servidor permite abrir até a troca ser concluída, e a nova senha deve ter no mínimo oito caracteres. A tela ``Meu perfil'' permite alterar depois os dados, a senha e o e-mail, e trocar a senha ou o e-mail encerra as demais sessões.
```
Sugestão:
```
\par O sistema não envia e-mail. O administrador cria o usuário e o sistema gera uma senha de uso único, mostrada uma só vez e válida por 24 horas. No primeiro acesso, o usuário só consegue abrir a tela ``Trocar senha'', e a nova senha deve ter no mínimo oito caracteres. Depois, a tela ``Meu perfil'' permite alterar os dados, a senha e o e-mail. Trocar a senha ou o e-mail encerra as outras sessões abertas.
```
Por quê: "a única que o servidor permite abrir até a troca ser concluída" é um caminho longo para dizer algo simples. Perde-se apenas o "até a troca ser concluída", que fica implícito em "no primeiro acesso".

## Cadastro (linhas 84 a 112)

### 9.
Atual:
```
\par O cadastro segue a hierarquia planta, dispositivo de E/S e tag, com uma árvore de pastas de tags em cada planta (RF11). Só o administrador da instalação o edita, e toda alteração vale com o sistema em operação (RF10). A tela ``Plantas'' lista nome, \emph{slug} (identificador textual curto), coordenadas, quantidade de dispositivos e situação, e a exclusão exige digitar o \emph{slug}, já que apaga tudo o que a planta contém.
```
Sugestão:
```
\par O cadastro segue a hierarquia planta, dispositivo de E/S e tag, com uma árvore de pastas de tags em cada planta (RF11). A planta é a instalação, o dispositivo de E/S é a conexão com a origem dos dados, e a tag é cada ponto lido ou comandado. Só o administrador da instalação edita o cadastro, e toda alteração vale com o sistema em operação (RF10). A tela ``Plantas'' lista nome, \emph{slug} (identificador textual curto), coordenadas, quantidade de dispositivos e situação. A exclusão exige digitar o \emph{slug}, já que apaga tudo o que a planta contém.
```
Por quê: "dispositivo de E/S" aparece sem explicação neste capítulo. A definição acrescentada vem do vocabulário do projeto (conexão com a origem do dado). Se o Capítulo 3 já o define bem, a frase nova pode sair.

### 10.
Atual:
```
\par A tela de uma tag, na Figura~\ref{fig:cap4_tag}, é dividida em seções. ``Identificação'' recebe nome, \emph{slug}, pasta, tipo (analógica, digital, texto ou multiestado) e acesso. ``Mapeamento Modbus'' recebe o tipo de registrador, o endereço, o tipo bruto e a ordem de bytes. ``Escala e unidade'' define a conversão para a grandeza de engenharia. As demais definem o formato mostrado, o tempo de varredura com banda morta, o histórico, os eventos de alarme e os limites do comando (RF01 e RF02).
```
Sugestão:
```
\par A tela de uma tag, na Figura~\ref{fig:cap4_tag}, é dividida em seções. ``Identificação'' recebe nome, \emph{slug}, pasta, tipo (analógica, digital, texto ou multiestado) e acesso. ``Mapeamento Modbus'' diz onde o valor está no equipamento: tipo de registrador, endereço, tipo bruto e ordem de bytes. ``Escala e unidade'' converte o número bruto lido no equipamento para a grandeza de engenharia. As demais seções definem o formato mostrado, o tempo de varredura com banda morta, o histórico, os eventos de alarme e os limites do comando (RF01 e RF02).
```
Por quê: "recebe" e "define" repetidos cansam. Dizer para que serve cada seção ajuda o leigo. Fica a dúvida do "banda morta", que não é explicado aqui: avaliar acrescentar uma explicação curta, mas só com o significado exato no sistema (não afirmei nenhum).

### 11.
Atual:
```
\par Para cadastrar muitos pontos de uma vez, a ação ``Editar em grade'', na Figura~\ref{fig:cap4_grade}, apresenta as tags em uma tabela semelhante a uma planilha, que aceita colar blocos do Excel. Células com erro ficam em vermelho e com aviso em amarelo, e o salvamento é tudo ou nada. Três colunas mostram o valor ao vivo, a qualidade e a idade da leitura, o que permite conferir o mapeamento enquanto ele é digitado.
```
Sugestão:
```
\par Para cadastrar muitos pontos de uma vez, a ação ``Editar em grade'', na Figura~\ref{fig:cap4_grade}, mostra as tags numa tabela parecida com uma planilha, que aceita colar blocos copiados do Excel. Células com erro ficam em vermelho e células com aviso, em amarelo. O salvamento é tudo ou nada: ou salva todas as linhas, ou nenhuma. Três colunas mostram o valor ao vivo, a qualidade (se a leitura é confiável) e a idade da leitura, o que permite conferir o mapeamento enquanto ele é digitado.
```
Por quê: "qualidade" é usada em várias telas e nunca explicada. A explicação entre parênteses entra na primeira vez. Confirmar que "se a leitura é confiável" descreve bem o campo.

## Lista de acompanhamento (linha 116)

### 12.
Atual:
```
\par A Lista de acompanhamento serve para acompanhar poucos pontos de forma contínua, como as listas de observação dos supervisórios clássicos. É um conjunto de até 50 tags, de até 10 plantas, mantido pelo administrador e liberado a grupos, e o operador não pode alterá-lo, como mostra a Figura~\ref{fig:cap4_lista}.
```
Sugestão:
```
\par A Lista de acompanhamento serve para acompanhar poucos pontos de forma contínua, como as listas de observação dos supervisórios clássicos. Ela reúne até 50 tags, de até 10 plantas. O administrador monta a lista e a libera para grupos de usuários, e o operador não pode alterá-la, como mostra a Figura~\ref{fig:cap4_lista}.
```
Por quê: troca "mantido pelo administrador e liberado a grupos" (passiva) por quem faz o quê.

## Dashboard (linhas 144 e 146)

### 13.
Atual:
```
\par O painel de linha mostra até 12 tags. Até uma hora cada ponto é a leitura bruta, e em janelas maiores, de até dez anos, o gráfico usa médias de 1 min, 10 min, 30 min ou 6 h, com a faixa de mínimo e máximo, para que um pico curto não desapareça. A linha é interrompida onde falta dado. O painel de barra mostra, por intervalo, a média, o mínimo, o máximo, o volume ou o tempo ligado, e o medidor mostra o valor atual dentro de uma faixa.
```
Sugestão:
```
\par O painel de linha mostra até 12 tags. Em janelas de até uma hora, cada ponto é uma leitura gravada. Em janelas maiores, de até dez anos, o gráfico usa médias de 1 min, 10 min, 30 min ou 6 h, junto com a faixa entre o mínimo e o máximo, para que um pico curto não desapareça. Onde falta dado, a linha é interrompida. O painel de barra mostra, para cada intervalo, a média, o mínimo, o máximo, o volume ou o tempo ligado. O medidor mostra o valor atual dentro de uma faixa.
```
Por quê: "leitura bruta" confunde com "tipo bruto" da tag (outra coisa), e o próprio capítulo diz depois "leitura gravada". Frases mais curtas.

### 14.
Atual:
```
\par A montagem é feita na tela ``Montar dashboard'', em que o administrador cria seções e painéis, escolhe o tipo e as tags e ajusta faixas de cor e linhas de meta. Cada tela tem um rascunho e uma versão publicada, e o operador só vê a publicada. Montar telas sem alterar o código cumpre o requisito de incluí-las com o sistema em funcionamento (RF10).
```
Sugestão:
```
\par O administrador monta o dashboard na tela ``Montar dashboard'': cria seções e painéis, escolhe o tipo e as tags e ajusta faixas de cor e linhas de meta. Cada tela tem um rascunho e uma versão publicada, e o operador só vê a publicada. Como as telas são montadas sem mexer no código, é possível incluí-las com o sistema em funcionamento (RF10).
```
Por quê: tira a passiva "é feita" e o "cumpre o requisito de incluí-las".

## Sinótico (linhas 150 a 166)

### 15.
Atual:
```
\par O Sinótico representa o processo por um desenho vetorial animado pelos dados em tempo real, equivalente moderno do esquema sinótico das salas de controle (RF15). Ele tem uma face de execução, para o operador, e uma de edição, para o administrador.
```
Sugestão:
```
\par O Sinótico é um desenho do processo que se anima com os dados em tempo real. É a versão moderna do esquema sinótico das salas de controle (RF15). Ele tem duas faces: a de execução, para o operador, e a de edição, para o administrador.
```
Por quê: a frase original define "sinótico" por "esquema sinótico", e "desenho vetorial animado pelos dados" é pesado. Perde-se o termo "vetorial" (o desenho ser feito em vetores), que é detalhe técnico dispensável aqui.

### 16.
Atual:
```
\par Na aba ``Dados'', uma propriedade do objeto é ligada a uma tag, de forma simples, por tabela (valor ou faixa convertidos em texto ou cor) ou como comando, que abre o diálogo de comando. A aba ``Animações'' permite cor, visibilidade, preenchimento proporcional, rotação, translação e piscar. Um objeto com defeito aparece como ``Objeto inválido'', e o restante da tela continua funcionando.
```
Sugestão:
```
\par Na aba ``Dados'', o administrador liga uma propriedade do objeto a uma tag. A ligação pode ser simples, por tabela (um valor ou uma faixa vira texto ou cor) ou de comando (abre o diálogo de comando). A aba ``Animações'' oferece mudança de cor, visibilidade, preenchimento proporcional, rotação, deslocamento e piscar. Um objeto com defeito aparece como ``Objeto inválido'', e o restante da tela continua funcionando.
```
Por quê: a primeira frase tinha três jeitos de ligar misturados com a explicação de um deles. "Translação" vira "deslocamento". Não expliquei a ligação "simples" porque o texto original também não explica: avaliar uma frase curta sobre ela, se o autor souber o significado exato.

### 17.
Atual:
```
\par Na execução, o operador abre o sinótico pelo menu, como mostra a Figura~\ref{fig:cap4_sinotico}. Cada objeto de valor exibe o dado formatado e uma marca de qualidade, e um selo de alarme aparece sobre a tag em alarme. Se não há valor para um objeto em 10 s, ele mostra um traço e ``Sem dado'', e o valor desenhado no editor nunca substitui o real. A lista ``Valores desta tela'' apresenta os mesmos dados em tabela, para quem não usa o desenho. Botões de comando abrem o diálogo de quatro fases, e botões de navegação levam a outras telas.
```
Sugestão:
```
\par Na execução, o operador abre o sinótico pelo menu, como mostra a Figura~\ref{fig:cap4_sinotico}. Cada objeto de valor mostra o dado formatado e uma marca de qualidade, e um selo de alarme aparece sobre a tag em alarme. Se um objeto fica 10 s sem valor, ele mostra um traço e ``Sem dado''. O valor que aparece no desenho durante a edição nunca toma o lugar do valor real. A lista ``Valores desta tela'' mostra os mesmos dados em tabela, para quem não usa o desenho. Botões de comando abrem o diálogo de quatro fases, e botões de navegação levam a outras telas.
```
Por quê: "Se não há valor para um objeto em 10 s" é ambíguo, e a frase que seguia carregava duas ideias. Confirmar se "ficar 10 s sem valor" é o que de fato ocorre.

## Mapa das plantas (linhas 180 e 192)

### 18.
Atual:
```
\par O Mapa é a visão geral do sistema, com um pino por planta com coordenada, como mostra a Figura~\ref{fig:cap4_mapa}. O pino de uma planta sem alarme é neutro, e o de uma planta com alarme assume a cor do mais grave e traz o nome do nível. Uma lista lateral repete todas as plantas. O clique abre um resumo com a quantidade de alarmes e o atalho ``Ver alarmes desta planta''.
```
Sugestão:
```
\par O Mapa é a visão geral do sistema, com um pino para cada planta que tem coordenada, como mostra a Figura~\ref{fig:cap4_mapa}. O pino de uma planta sem alarme é neutro. O pino de uma planta com alarme tem a cor do alarme mais grave e mostra o nome do nível. Uma lista lateral repete todas as plantas. Ao clicar num pino, abre-se um resumo com a quantidade de alarmes e o atalho ``Ver alarmes desta planta''.
```
Por quê: "um pino por planta com coordenada" e "assume a cor do mais grave" são secos e ambíguos ("o mais grave" o quê?).

### 19.
Atual:
```
\par O mapa de fundo vem de um serviço de terceiros, e por isso uma nota fixa informa o que é enviado a ele, e uma configuração abre o mapa sem fundo, sem chamada externa. Quem não pode ver alarmes enxerga pinos neutros, e o servidor nem envia esses dados (RF16).
```
Sugestão:
```
\par A imagem de fundo do mapa vem de um serviço de terceiros. Por isso, uma nota fixa na tela informa quais dados são enviados a ele, e uma configuração permite abrir o mapa sem imagem de fundo, sem nenhuma chamada externa. Quem não tem permissão para ver alarmes vê só pinos neutros, e o servidor nem envia os dados de alarme (RF16).
```
Por quê: uma frase com três "e" vira três frases. "Mapa de fundo" é estranho, "imagem de fundo do mapa" é direto.

## Alarmes e eventos (linhas 198 a 212)

### 20.
Atual:
```
\par A tela ``Eventos'' lista as condições, que podem ser de tag, compostas ou agendadas. O evento de tag compara a tag com um valor por um operador, com banda morta e atrasos de ativação e de retorno de 0 a 3600 s. O composto combina eventos com E, OU e NÃO, e o agendado dispara em horários definidos. Cada dispositivo Modbus traz três eventos de sistema, de falha de comunicação, de leitura e de escrita. Um evento, por si só, não gera registro nem aviso.
```
Sugestão:
```
\par A tela ``Eventos'' lista as condições, que podem ser de tag, compostas ou agendadas. O evento de tag compara o valor da tag com um valor de referência, por meio de um operador de comparação. Ele pode ter banda morta e atrasos de ativação e de retorno, de 0 a 3600 s. O evento composto combina outros eventos com E, OU e NÃO. O evento agendado dispara em horários definidos. Cada dispositivo Modbus traz três eventos de sistema: falha de comunicação, falha de leitura e falha de escrita. Um evento, por si só, não gera registro nem aviso.
```
Por quê: "compara a tag com um valor por um operador" é obscuro. Tirei os "e" que ligavam ideias diferentes. Falha de comunicação, de leitura e de escrita: confirmar que os três são falhas (o texto original diz "eventos de sistema, de falha de comunicação, de leitura e de escrita"). Banda morta e atrasos continuam sem explicação, avaliar.

### 21.
Atual:
```
\par O alarme é um objeto separado, na tela da Figura~\ref{fig:cap4_alarme_config}, com descrição, um dos quatro níveis, ícone, planta e de um a vinte eventos que o abrem. Assim, vários eventos podem acionar o mesmo alarme e um evento pode acionar vários alarmes. O sistema não cria alarmes sozinho: para ver uma falha de comunicação como alarme, liga-se um alarme comum ao evento de sistema (RF17).
```
Sugestão:
```
\par O alarme é cadastrado separado do evento, na tela da Figura~\ref{fig:cap4_alarme_config}. Ele tem descrição, um dos quatro níveis, ícone, planta e de um a vinte eventos que o abrem. Assim, vários eventos podem acionar o mesmo alarme, e um evento pode acionar vários alarmes. O sistema não cria alarmes sozinho. Para ver uma falha de comunicação como alarme, basta ligar um alarme comum ao evento de sistema correspondente (RF17).
```
Por quê: "objeto separado" é abstrato. Separa a ideia em frases curtas.

### 22.
Atual:
```
\par Na operação, a tela ``Alarmes'', na Figura~\ref{fig:cap4_alarmes}, tem as abas ``Ativos'' e ``Histórico''. A primeira lista nível, descrição, planta, origens, instante de ativação, estado e quem reconheceu, e a segunda traz as ocorrências fechadas, com duração, motivo e filtros. A ação ``Reconhecer'' abre um diálogo com comentário opcional, e ``Reconhecer todos'' pede confirmação. O reconhecimento se refere à ocorrência que a pessoa viu, de modo que um novo disparo não é reconhecido em uma tela velha, e o registro guarda quem reconheceu e quando (RNF05).
```
Sugestão:
```
\par Na operação, a tela ``Alarmes'', na Figura~\ref{fig:cap4_alarmes}, tem as abas ``Ativos'' e ``Histórico''. A primeira lista nível, descrição, planta, origens, instante de ativação, estado e quem reconheceu. A segunda traz as ocorrências já encerradas, com duração, motivo e filtros. A ação ``Reconhecer'' abre um diálogo com comentário opcional, e ``Reconhecer todos'' pede confirmação. O reconhecimento vale só para a ocorrência que a pessoa viu. Assim, se o alarme disparar de novo enquanto a tela está desatualizada, o novo disparo não é reconhecido por engano. O registro guarda quem reconheceu e quando (RNF05).
```
Por quê: a última frase original, "se refere... de modo que... em uma tela velha", é a mais difícil do capítulo. Quebrada em três, dá para ler de uma vez.

## Linha do tempo (linha 238)

### 23.
Atual:
```
\par Cada origem só aparece para quem tem a permissão correspondente. Um aviso informa que a ordem é a do registro do sistema e não a do relógio do equipamento, pois a tela não promete a resolução de uma sequência de eventos com carimbo do equipamento. Esse recurso atende à consulta cronológica (RF18), e a tela de comandos completa a rastreabilidade das ações (RNF05).
```
Sugestão:
```
\par Cada origem só aparece para quem tem a permissão correspondente. Um aviso na tela informa que a ordem das linhas é a do registro no sistema, e não a do relógio do equipamento. Por isso, a tela não serve para reconstruir a sequência exata de eventos pela hora que o equipamento marcou. A Linha do tempo atende à consulta em ordem cronológica (RF18), e a tela de comandos completa a rastreabilidade das ações (RNF05).
```
Por quê: "não promete a resolução de uma sequência de eventos com carimbo do equipamento" é pesado. Mantive a ideia (sem afirmar nada novo).

## Histórico e tendência (linha 254)

### 24.
Atual:
```
\par O detalhe segue a janela: até uma hora, a leitura gravada, até um dia, a média por minuto, até sete dias, a de dez minutos, até 31 dias, a de trinta minutos, e acima disso a de seis horas, sempre com o mínimo e o máximo do intervalo. Onde falta dado, a linha é interrompida, e a lacuna é a própria evidência de uma falha de leitura. O gráfico reflete o que foi realmente guardado conforme o modo de cada tag (RF02 e RF16).
```
Sugestão:
```
\par O nível de detalhe depende do período mostrado. Até uma hora, o gráfico usa a leitura gravada. Até um dia, usa a média por minuto. Até sete dias, a média de dez minutos. Até 31 dias, a de trinta minutos. Acima disso, a de seis horas. Em todos os casos aparecem também o mínimo e o máximo do intervalo. Onde falta dado, a linha é interrompida, e essa lacuna é a própria evidência de uma falha de leitura. O gráfico mostra o que foi realmente guardado, conforme o modo de cada tag (RF02 e RF16).
```
Por quê: a lista dentro de uma frase só, separada por vírgulas, é difícil de seguir. Em frases curtas vira uma tabela em prosa. "Modo de cada tag" continua obscuro: confirmar se é o modo de gravação do histórico e, se for, dizer assim.

## Variável meta e scripts (linhas 258 a 262)

### 25.
Atual:
```
\par O administrador pode escrever pequenos programas em JavaScript que calculam valores e reagem a eventos, executados em um ambiente isolado, sem rede, arquivos ou segredos e com limites de tempo e de memória. O editor é o mesmo nos dois usos, a variável meta e o script.
```
Sugestão:
```
\par O administrador pode escrever pequenos programas em JavaScript que calculam valores e reagem a eventos. Eles rodam em um ambiente isolado, sem acesso a rede, arquivos ou segredos, e com limites de tempo e de memória. O editor é o mesmo para os dois usos, a variável meta e o script.
```
Por quê: separa o que o programa faz de onde ele roda.

### 26.
Atual:
```
\par A variável meta é uma tag de um dispositivo interno calculada a partir de outras tags da mesma planta. A tela da tag mostra o gatilho, por leitura nova ou por tempo, e a ação ``Editar código''. O script, configurado na tela ``Scripts'', é ligado a eventos, para rodar na ativação, no retorno ou nos dois, e pode ler e escrever em tags e habilitar ou desabilitar tags e dispositivos. A escrita em hora marcada se obtém com um evento agendado, e todo comando de script é registrado com o nome dele.
```
Sugestão:
```
\par A variável meta é uma tag de um dispositivo interno, cujo valor é calculado a partir de outras tags da mesma planta. A tela da tag mostra o gatilho, que pode ser uma leitura nova ou o tempo, e a ação ``Editar código''. O script é configurado na tela ``Scripts'' e ligado a eventos. Ele pode rodar na ativação do evento, no retorno ou nos dois casos. O script pode ler e escrever em tags e habilitar ou desabilitar tags e dispositivos. Para escrever em hora marcada, usa-se um evento agendado. Todo comando enviado por script é registrado com o nome do script.
```
Por quê: a ambiguidade "uma tag de um dispositivo interno calculada a partir de..." (quem é calculado?) some. Passivas e "se obtém com" saem.

### 27.
Atual:
```
\par O editor de código, na Figura~\ref{fig:cap4_editor_codigo}, tem realce de sintaxe, numeração de linhas e um painel ``Referência'' com as funções disponíveis. O botão ``Testar'' analisa o código sem executá-lo e mostra quais tags ele lê, e a área ``Simular'' mostra o que o script faria sem escrever nada. A tela de scripts exibe a ``Última execução'' e a ``Última falha'', mantida mesmo depois de um sucesso, para que um defeito intermitente não passe despercebido.
```
Sugestão:
```
\par O editor de código, na Figura~\ref{fig:cap4_editor_codigo}, tem realce de sintaxe, numeração de linhas e um painel ``Referência'' com as funções disponíveis. O botão ``Testar'' analisa o código sem executá-lo e mostra quais tags ele lê. A área ``Simular'' mostra o que o script faria, sem escrever nada. A tela de scripts mostra a ``Última execução'' e a ``Última falha''. A falha continua visível mesmo depois de uma execução bem-sucedida, para que um defeito que aparece de vez em quando não passe despercebido.
```
Por quê: "intermitente" vira "de vez em quando". A frase final, com uma oração pendurada ("mantida mesmo depois de um sucesso"), ganha sujeito próprio.

## Diálogo de comando de quatro fases (linhas 276 a 288)

### 28.
Atual:
```
\par O comando é a única ação da interface que escreve no equipamento e passa por um diálogo próprio, usado pela Lista de acompanhamento e pelo Sinótico, com uma barra de etapas, como mostra a Figura~\ref{fig:cap4_comando}. Na ``Seleção'', o operador escolhe ``Ligada (1)'' ou ``Desligada (0)'' ou digita o novo valor. Na ``Verificação'', o servidor confere a tag, o dispositivo, a faixa e a permissão, e o comando recebe um código de 120 s ligado ao que o operador viu. Na ``Confirmação'', o operador revê o resumo e confirma, e o servidor confere a permissão de novo. Na ``Execução'', o comando é enviado ao equipamento e o diálogo mostra o resultado (RF07 e RF09).
```
Sugestão:
```
\par O comando é a única ação da interface que escreve no equipamento, e por isso passa por um diálogo próprio. Esse diálogo é usado pela Lista de acompanhamento e pelo Sinótico e tem uma barra de etapas, como mostra a Figura~\ref{fig:cap4_comando}. Na ``Seleção'', o operador escolhe ``Ligada (1)'' ou ``Desligada (0)'', ou digita o novo valor. Na ``Verificação'', o servidor confere a tag, o dispositivo, a faixa de valores permitida e a permissão, e o comando recebe um código válido por 120 s, ligado ao que o operador viu. Na ``Confirmação'', o operador revê o resumo e confirma, e o servidor confere a permissão de novo. Na ``Execução'', o comando é enviado ao equipamento e o diálogo mostra o resultado (RF07 e RF09).
```
Por quê: a primeira frase tinha seis ideias. O "por isso" é uma ligação lógica leve, que o próprio texto sugere. Confirmar se "faixa" é a faixa de valores permitidos na tag.

### 29.
Atual:
```
\par O sucesso significa que o equipamento respondeu à escrita com uma resposta que confere com o pedido. Se ele não responde ou responde com erro, o diálogo informa a falha e o motivo. Se o sistema perde o rastro da escrita, a mensagem pede que se confira a lista de comandos antes de repetir, e a tag fica bloqueada por 35 s para evitar uma segunda escrita sobreposta. Esses cuidados correspondem às travas e à auditoria do requisito de segurança (RNF05).
```
Sugestão:
```
\par O comando é considerado bem-sucedido quando o equipamento responde à escrita com uma resposta igual ao pedido enviado. Se ele não responde ou responde com erro, o diálogo informa a falha e o motivo. Se o sistema perde o rastro da escrita, ou seja, não sabe se ela chegou ao equipamento, a mensagem pede que se confira a lista de comandos antes de repetir. A tag fica bloqueada por 35 s, para que duas escritas não se sobreponham. Esses cuidados atendem às travas e à auditoria exigidas pelo requisito de segurança (RNF05).
```
Por quê: "o sucesso significa... resposta que confere" repete "resposta". "Perde o rastro" ganha uma explicação curta que não acrescenta fato novo.

## Síntese (linha 342)

### 30.
Atual:
```
\par O conjunto mostra que a mesma interface atende a quatro perfis de uso. O administrador do sistema e o administrador da instalação configuram o sistema e montam as telas. O supervisor gerencia operadores, e o operador acompanha o processo e emite comandos conforme as permissões do seu grupo. Essa separação, somada aos princípios de fundo neutro, de cor apenas para o anormal e de hierarquia de telas, mantém a interface sóbria para quem opera e completa para quem configura, tudo acessível por navegador e com atualização em tempo real a partir dos dados do processo.
```
Sugestão:
```
\par A mesma interface atende a quatro perfis de uso. O administrador do sistema e o administrador da instalação configuram o sistema e montam as telas. O supervisor gerencia operadores, e o operador acompanha o processo e emite comandos conforme as permissões do seu grupo. Essa separação, somada aos princípios de fundo neutro, cor apenas para o anormal e hierarquia de telas, deixa a interface sóbria para quem opera e completa para quem configura. Tudo é acessível pelo navegador e se atualiza em tempo real com os dados do processo.
```
Por quê: a última frase junta cinco ideias. Divide em duas e tira "O conjunto mostra que", que não acrescenta nada.

---

## Avaliar corte (sem reescrita)

- Linha 144 (Dashboard, escala de médias por janela) e linha 254 (Histórico e tendência) descrevem a mesma regra de detalhe do gráfico. A seção do Dashboard poderia só remeter ao gráfico de tendência, ou a seção 254 poderia ficar como única descrição. Decisão do autor.

## Trechos já claros, sem sugestão

Linhas 10, 14, 34, 40, 56, 58, 70, 86, 112, 128, 132, 146 (exceto a sugestão 14), 152, 192 (exceto 19), 196, 226, 242, 290 e 294.
