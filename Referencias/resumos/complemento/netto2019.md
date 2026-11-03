# Complemento: Netto et al. (2019), chave `NETTO2019_RAFT_KUBERNETES`

Leitura integral do PDF (942 linhas, 22 páginas). A ficha `netto2019.md` foi reescrita. Páginas = página do PDF, que é a impressa mais 1 (a página 1 é a folha de rosto da editora). Nenhum `.tex`, `.bib` nem `CLAUDE.md` foi alterado.

## Muda o relatório

Nenhum item de `01_REVISAO_DO_TEXTO.md` cita este documento (a chave não aparece em nenhum `\cite` de `Capitulos\` nem de `Texto.tex`, conferido por busca). Nenhuma classificação muda.

Muda só o índice `00_INDICE.md`, linha da ficha `netto2019.md`: a coluna "Leitura" passa de "resumo, discussão e conclusões" para "inteira (22 pp.)".

## Novos achados

Nenhuma frase do texto cita este documento. Duas correções à ficha anterior:
1. A ficha dizia que o PDF "tem espaçamento de palavras quebrado na extração (palavras coladas)". Na extração desta leitura (pdftotext com layout) o texto saiu limpo. Não há problema de extração.
2. A ficha dava "p.19-20 (conclusões)". A Conclusão (seção 7) está só na página 19 do PDF (impressa 18). A página 20 já é de notas e referências.

## Sustenta mais

Sugestões, sem alterar nada. **Ressalva geral e importante:** o `CLAUDE.md` do TCC diz que `NETTO2019_RAFT_KUBERNETES` saiu junto com o Raft e que Kubernetes, orquestradores, Raft, Paxos, etcd e replicação de máquinas de estados ficam fora do texto. Todo o conteúdo de interesse abaixo está também em Netto (2016) e Netto (2017), que são citáveis. Por isso a recomendação é não citar o artigo de 2019, e usar a lista só para saber que ele confirma o que os outros dois já dizem.

1. `14_Desenvolvimento\14_1_Cap.tex:145` (SEM CITAÇÃO): "O Docker é a ferramenta de contêineres mais difundida". Netto2019 diz "provavelmente o mais usado" (PDF 3, impressa 2) e "se tornou a implementação de contêiner mais popular" (PDF 5, impressa 4) (tradução). Mesma fonte do mesmo grupo e mesmo nível de força que Netto2016 p.1 e Netto2017 p.2, que o relatório já indica para essa frase. Não acrescenta nada.
2. `14_Desenvolvimento\14_1_Cap.tex:104` (A MAIS contra Netto2016, "forte isolamento entre VMs, mas cada uma carrega o custo de um SO inteiro"): PDF 19 (impressa 18, 6.2), "VMs tradicionais exigem muito mais recursos (memória e CPU) que contêineres" porque cada VM tem sistema operacional próprio e vários contêineres rodam no mesmo (tradução). PDF 2 e 3, a virtualização ajuda a construir aplicações confiáveis porque mantém cada VM isolada das outras. Cobre a frase inteira. Netto2017 p.3 (já indicado) cobre igualmente.
3. `14_Desenvolvimento\14_2_Cap.tex:219` (A MAIS contra Netto2017, "replicação em contêineres é um padrão consolidado para obter capacidade sob demanda"): Netto2019 diz que o Kubernetes replica contêineres para melhorar a disponibilidade (PDF 3), que a disponibilidade é "tipicamente alcançada com replicação" (PDF 10) e que, no modelo de pagar pelo uso, muitos contêineres pequenos podem operar no mesmo nó e consumir menos recursos (PDF 19). Cobre "replicar para disponibilidade" e "contêineres pequenos usam menos recursos". Não cobre "padrão consolidado" nem "capacidade sob demanda por replicação". A frase precisa ser reescrita para "replicação para disponibilidade", independente da fonte.
4. `14_Desenvolvimento\14_2_Cap.tex:225` (A MAIS contra Zanghi, "redundância apoia-se nas réplicas e nas filas, que sobrevivem a falhas"): Netto2019 PDF 10 e PDF 17 a 18 mostram que réplicas mascaram a falha de uma delas (no Raft, pela votação em quórum). Cobre "réplicas", não "filas".
5. `14_Desenvolvimento\14_1_Cap.tex:143` (OK com Netto2016 e Netto2017, "o que está em memória ou disco se perde ao encerrar, salvo volumes externos"): Netto2019 PDF 3 e PDF 5 repetem as duas partes (o estado do contêiner falho não é restaurado, volumes externos precisam ser protegidos). Só confirmação.
6. `13_Introducao\13_1_Contextualizacao.tex:52` e `13_2_Justificativa.tex:9` (SEM CITAÇÃO e A MAIS, "executa da mesma forma em um computador local, em um servidor ou em um provedor de nuvem" e "poderia ir a um provedor de nuvem sem alteração de código"): **o artigo não sustenta.** Ele não fala de portabilidade entre ambientes, e o próprio KRaft precisou de duas modificações no código para rodar no Kubernetes (PDF 8, impressa 7). Essa frase precisa de Docker docs ou de outra fonte.
7. Cuidado inverso, para `14_Desenvolvimento\14_2_Cap.tex:156` e `14_1_Cap.tex:106` (isolamento de serviços em contêineres, hoje OK com Stouffer e Netto2017): Netto2019 PDF 10 (impressa 9) diz que "problemas de segurança são frequentemente apontados como ponto fraco para hospedar aplicações em contêineres" e cita propostas para melhorar o isolamento (SCONE, Atomic/SELinux) (tradução). Não é erro do texto, mas é a resposta pronta caso a banca pergunte se contêiner isola de verdade.
8. Frases SEM CITAÇÃO que este documento não ajuda: tudo de filas, bancos, Modbus, HTTP, sandbox, outbox, disjuntor, Lighthouse. O artigo não toca nesses assuntos.

## Confirmado sem mudança

0 itens do relatório citam este documento.
