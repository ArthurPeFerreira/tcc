# Complemento: Carballo et al. (2024), chave `CARBALLO2024_MODERN_SCADA_OPCUA`

Leitura integral do PDF (805 linhas, 17 páginas). A ficha `carballo.md` foi reescrita. Páginas = página do PDF ("N of 17" impresso). Nenhum `.tex`, `.bib` nem `CLAUDE.md` foi alterado.

## Muda o relatório

Nenhum item de `01_REVISAO_DO_TEXTO.md` cita este documento (a chave não aparece em nenhum `\cite`, conferido por busca em `Capitulos\` e `Texto.tex`). Nenhuma classificação muda.

Muda só o índice `00_INDICE.md`, linha da ficha `carballo.md`: a coluna "Leitura" passa de "resumo, introdução e conclusões" para "inteira (17 pp.)".

## Novos achados

Nenhuma frase do texto cita este documento. Duas correções à ficha anterior que a leitura inteira trouxe:
1. A ficha anterior atribuía à seção de Conclusões (p.16) a ideia de integrar SCADA em nuvem com computação de borda. Ela está no fim da Discussão (final da p.15 e início da p.16). As Conclusões (p.16) só falam de IA, outras usinas, controle do receptor, armazenamento e estratégia de ponto de mira.
2. O resumo da ficha anterior dizia que a interface é "feita em Python com PySide6". Confirmado, e a leitura mostrou que é um aplicativo de computador, não web (p.7 a 8). Isso importa se alguém quiser citar este artigo como exemplo de "supervisório web": não é.

Observação sobre a lista de referências do próprio Carballo: ele cita Khalid et al. (2024) como [13] (SCADA livre de baixo custo, p.3 a 4) e Wali e Alshehry (2024) como [12] (ameaças a SCADA em nuvem, p.3), duas fontes que o TCC também usa ou tem.

## Sustenta mais

Sugestões, sem alterar nada. Uma ressalva geral: o título e o miolo do artigo são sobre OPC UA, que o `CLAUDE.md` do TCC manda deixar fora. Citar o artigo nas frases abaixo não obriga a escrever OPC UA, mas a banca pode abrir a referência e achar o OPC UA. Decisão do autor.

1. `14_Desenvolvimento\14_1_Cap.tex:39` (hoje DIVERGE contra Zanghi): "Os níveis de acesso definem o que cada pessoa pode acompanhar e comandar" e, na mesma linha, "cada pessoa recebe um cargo, com apenas as permissões de que precisa" (cita Stouffer, OK). Também `14_1:25`, `14_2:8`, `14_2:193`, em que "níveis de acesso" é atribuído a Zanghi e a leitura de Zanghi mostrou que ele trata de níveis de operação (hierarquia de supervisão).
   - Cobre, e bem: p.11, "sistema de controle de permissão do usuário para restringir as ações de cada usuário", com três níveis: convidado (só consulta dados), operação (ações de rotina, como mandar heliostatos seguir o sol) e configuração (acesso total, inclusive configuração) (tradução). p.12, as opções da janela de cada heliostato são habilitadas ou desabilitadas conforme o nível do usuário. p.14, o chefe de operação aprovou o controle por permissão "com ações restritas bloqueadas conforme os cargos dos usuários" (tradução).
   - Não cobre: "classicamente organizados por instalação" (a frase de Zanghi sobre isso era justamente o problema), grupos de permissões, catálogo de permissões, nem o menor privilégio como princípio.
   - Uso possível: trocar Zanghi por Carballo (ou somar a Stouffer) como exemplo de supervisório real que limita o que cada usuário faz por nível de permissão.
2. `14_Desenvolvimento\14_2_Cap.tex:207` (hoje OK com Stouffer): "quem não pode comandar vê os valores, mas não escreve". Carballo p.11: o nível convidado "só permite consultar dados". É um exemplo concreto do mesmo efeito.
3. `14_Desenvolvimento\14_2_Cap.tex:215` e `14_3_Cap.tex:261` (sem citação, não estavam no relatório): "Todo comando e todo reconhecimento de alarme ficam registrados com o autor e a origem", e o registro de auditoria dos comandos (RF09, RNF05). Carballo p.12: o console registra as ações dos operadores no formato data, hora, usuário, nível de permissão, comando ou ação e opções, e grava tudo em arquivo de log. É um exemplo de supervisório que registra quem fez o quê. Não cobre a imutabilidade do registro nem a cópia do nome.
4. `14_Desenvolvimento\14_2_Cap.tex:287` (frase sem citação, não estava no relatório): "A trava por dispositivo, no Redis, dá ao comando prioridade sobre a leitura periódica". Carballo p.7: quando chega um comando por assinatura, a thread de polling daquela linha para a consulta periódica, envia o comando ao controle local e depois retoma o polling. Mesmo princípio de que o comando interrompe a leitura cíclica. Não cobre a trava distribuída nem o Redis.
5. `14_Desenvolvimento\14_1_Cap.tex:283` a `:287` (SEM CITAÇÃO, "ciclo de polling" Modbus): Carballo p.6 a 7 descreve o gateway que consulta os controles locais por Modbus, com os 300 heliostatos em 16 linhas seriais RS-232 independentes e 16 threads em paralelo, cada uma consultando em sequência os heliostatos da sua linha. p.14: o estado de cada heliostato é atualizado em menos de 2 s com carga total (duas semanas de teste). Cobre a ideia de polling sequencial por canal e de paralelizar canais. Não traz a fórmula do ciclo como soma dos tempos de transação nem a idade do dado de até um ciclo. Serve como exemplo, não como definição.
6. `14_Desenvolvimento\14_1_Cap.tex:81` (hoje A MAIS contra Bangemann, "o SCADA ... passa a um nó de uma rede de serviços"): Carballo p.5 a 6, a interface SCADA é um entre vários clientes (outros scripts, heliostatos inteligentes, gateway) de um servidor central, com assinatura de eventos, e o OPC UA tem "arquitetura orientada a serviços" que dá modularidade (p.5). Cobre em parte a imagem do SCADA como cliente de uma rede de serviços. Mantém o problema de falar de OPC UA.
7. `14_Desenvolvimento\14_1_Cap.tex:243` (hoje A MAIS contra Bangemann, "expor dispositivos de campo por APIs REST é alternativa cada vez mais comum ao Modbus"): Carballo não fala de REST. Só sustenta a versão mais fraca de que dispositivos Modbus legados podem ser integrados a uma arquitetura moderna por um gateway (p.5 a 7). Não recomendo usar para esta frase.
8. `14_Desenvolvimento\14_4_Cap.tex:142` (SEM CITAÇÃO, sinótico como "equivalente moderno do esquema sinótico das salas de controle") e `:110` (SEM CITAÇÃO, "listas de observação dos supervisórios clássicos"): Carballo p.9 mostra um diagrama em escala do campo em que cada heliostato é um botão colorido pelo estado, com legenda de cores e contagem por estado (p.9 a 10), e p.10 tem listas predefinidas de heliostatos (criar, apagar, carregar) que p.14 elogia. São aproximações: o diagrama é uma representação do processo animada por estado (parecido com sinótico), e a lista é para selecionar e comandar vários, não para acompanhar poucos pontos. Cobertura fraca.
9. `14_Desenvolvimento\14_6_Cap.tex:512` (parágrafo de comparação com a literatura): Carballo dá números de um SCADA em produção para comparar em ordem de grandeza: atualização do estado de 300 dispositivos em menos de 2 s (p.14), latência média do servidor de 100 ms com 300 clientes de dispositivo (p.14), latência da malha Wi-Fi abaixo de 100 ms e perda abaixo de 0,1% (p.13), teste de estabilidade de 72 h (p.14), duas semanas sob carga total do gateway (p.14). É a comparação mais próxima do que o capítulo de Resultados faz. Ressalva: as medidas dele são do campo real, com métodos diferentes dos do TCC.
10. `13_Introducao\13_2_Justificativa.tex:5` e `14_Desenvolvimento\14_2_Cap.tex:158` (custo e código aberto): p.3 a 4, o surgimento de SCADA livre e de IoT "democratizou o acesso" a monitoramento e controle avançados, com hardware barato e atualização contínua por comunidades. Segunda fonte, junto com Khalid, para o tema do código aberto e do custo. Não fala de PME.
11. `14_Desenvolvimento\14_1_Cap.tex:12` (hoje A MAIS contra Yadav): p.3, SCADA é "parte essencial das plantas do setor de energia" para geração, transmissão e distribuição, com aquisição de dados, supervisão e controle em tempo real. Cobre o uso em energia, que o texto já lista.
12. Segurança: p.3, a maior conectividade e integração "expõem os SCADA a ataques cibernéticos, o que exige medidas de segurança robustas" (tradução), citando Wali e Alshehry. Já temos Wali, então não acrescenta fonte nova.

## Confirmado sem mudança

0 itens do relatório citam este documento.
