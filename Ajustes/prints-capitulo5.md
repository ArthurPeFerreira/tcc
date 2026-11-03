# Prints do Capítulo 5: o que conferir

As 17 figuras estão em `Imagens/Desenvolvimento/Cap5/` e entraram em `14_4_Cap.tex`. Os `\todo` de captura saíram. O texto dos parágrafos não foi alterado. Mudei só cinco legendas, para dizerem o que a imagem mostra.

## Legendas alteradas

| Figura | Antes | Agora |
|---|---|---|
| `fig:cap4_usuarios` | Tela de usuários com cargos e situações | Tela de usuários com o diálogo da senha de uso único |
| `fig:cap4_sinotico` | Sinótico em execução com valores ao vivo e objeto em alarme | Sinótico em execução com valores ao vivo, selos de alarme e a lista de valores da tela |
| `fig:cap4_linha_tempo` | Linha do tempo de alarmes, comandos e eventos de dispositivo | Linha do tempo com eventos de alarme e de dispositivo |
| `fig:cap4_editor_codigo` | Editor de código da variável meta e do script | Editor de código da variável meta com o resultado do botão Testar |
| `fig:cap4_comando` | Diálogo de comando nas fases de confirmação e resultado | Diálogo de comando nas fases de confirmação (acima) e de resultado (abaixo) |

## Onde o texto diverge da tela

O capítulo diz que os nomes são os da interface. Nestes pontos, não são. Não mexi: é decisão sua.

1. **Menu (linha 32).** O texto cita "Início" entre os itens de supervisão. O menu da captura não tem esse item: vai de Mapa para Dashboard.
2. **Lista do sinótico (linha 154 em diante, parágrafo "Na execução").** O texto chama de "Valores desta tela". A tela mostra "Informações desta tela" (`runtime-info-list.tsx`).
3. **Lista de acompanhamento (parágrafo "Cada linha mostra").** O texto diz que a linha mostra planta, valor, qualidade e idade. A captura mostra as colunas Tag, Valor, Hora da leitura e Gráfico. A planta aparece dentro do nome da tag. Qualidade e Idade existem na grade de tags, não nesta lista.
4. **Botão Testar (parágrafo "O editor de código").** O texto diz que Testar analisa o código sem executá-lo. A captura mostra "Resultado: 48.8875", um valor calculado, junto da tag lida. Vale reler essa frase.
5. **Tendência (parágrafo antes da Figura de tendência).** O texto diz "aberta por Ver gráfico". A captura é o painel "Gráfico" abaixo da lista, com a tag marcada na coluna Gráfico, porque é nele que se escolhe a janela de 7 dias.
6. **Comando pelo sinótico (parágrafo do comando).** O texto diz que o diálogo é usado pela Lista e pelo Sinótico. O sistema permite isso, mas o sinótico usado na captura não tem botão de comando. Por isso o comando da figura saiu da Lista "Subestação".

## O que as imagens mostram e convém saber antes de mostrar ao professor

- **Os dados são de demonstração, não da bancada.** As plantas (Booster, Climatização, ETA, Subestação) rodam com o ProtoProbe simulando o CLP. Nenhum parágrafo do Capítulo 5 diz que são da bancada, mas o capítulo também não diz que são simulados. Avalie se quer uma frase avisando.
- **O nome do produto foi trocado só na captura.** A interface real mostra o nome do produto, e as imagens mostram "Supervisório". O e-mail do usuário Demo também foi trocado, e o seu nome e e-mail aparecem como "Ana Administradora".
- **Sinótico: a bomba aparece como "Parada"**, com corrente, potência e velocidade de bomba em operação. Isso vem da simulação. A legenda não afirma que o motor está ligado.
- **Sinótico: a lista aberta cobre parte do painel do inversor.** Existe `sinotico-booster-limpo.png`, a mesma tela sem a lista.
- **Sinótico: o selo Crítico não aparece nessa tela.** Aparecem Médio e Alto.
- **Linha do tempo:** as linhas visíveis são de alarme e de dispositivo. Nenhum comando aparece nas primeiras 100 linhas, por isso a legenda mudou. As falhas de comunicação são de 02/11, de quando o ProtoProbe estava desligado.
- **Grade de tags:** não há célula com erro ou aviso. O texto descreve esse comportamento, mas a figura não o mostra.
- **Usuários:** o diálogo mostra uma senha de uso único real, de usuário de exemplo, no ambiente local.
- **Mapa:** nenhuma planta aparece em "Sem coordenada", porque todas têm coordenada.

## O que ficou criado no cliente de demonstração

- Três usuários de exemplo: Carla Supervisora, João Operador e Maria Operadora.
- Dois comandos reais no disjuntor 291-1, ligar e desligar. Ele voltou a 0, como estava.
- Nenhum grupo, alarme ou tag foi salvo ou alterado.

## Arquivos extras na pasta, fora do texto

`sinotico-booster-limpo.png`, `editor-codigo-referencia.png` (aba Referência, que não abre junto com a aba Código) e `usuarios-pre.png`.
