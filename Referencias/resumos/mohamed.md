# Mohamed, Altrafi e Ismail (2014), Relational vs. NoSQL Databases: A Survey

## Dados
- Autores: Mohamed A. Mohamed, Obay G. Altrafi, Mohammed O. Ismail (Univ. de Cartum, Sudão). Ano: 2014. Título: "Relational vs. NoSQL Databases: A Survey". Tipo: artigo de revisão, *International Journal of Computer and Information Technology* 3(3), p. 598-601. 4 páginas.
- Chave no `.bib`: `MOHAMED2014_RELATIONAL_VS_NOSQL`. Arquivo: `Referencias\Mohamed; Altrafi; Ismail, 2014.pdf`.
- Lido: documento inteiro. Página impressa 598 = PDF 1, 599 = 2, 600 = 3, 601 = 4.

## Do que trata (linguagem simples)
Compara banco de dados relacional (tabelas, SQL) com bancos NoSQL (sem tabelas fixas) em vários aspectos: confiabilidade das transações, modelo de dados, escalabilidade, nuvem, grandes volumes, armazém de dados, complexidade, recuperação de falhas e segurança. A conclusão é que o NoSQL nasceu para escalar na web e dar alta disponibilidade, mas é menos maduro e mais fraco em segurança; o relacional garante transações confiáveis. O trabalho é uma revisão simples, com poucas fontes de apoio.

## Afirmações que dá para citar (com página)
- p.598 [PDF 1]: o banco relacional (modelo relacional) foi concebido há mais de 30 anos, principalmente para processamento de dados de negócio, e se tornou a melhor opção para guardar informações como registros financeiros e dados pessoais. As novas exigências da web 2.0 (muito dado, alta disponibilidade e escalabilidade) trouxeram desafios ao relacional e levaram à adoção de bancos NoSQL.
- p.598 [1]: ACID = atomicidade, consistência, isolamento e durabilidade (definições de cada propriedade). BASE (basicamente disponível, estado leve, consistência eventual) foca disponibilidade permanente; p.599 [2]: BASE é o oposto de ACID e os NoSQL ficam entre ACID e BASE. Exemplo: em banco (financeiro) a consistência eventual não serve.
- p.599 [2]: teorema CAP (Brewer): só dois entre consistência, disponibilidade e tolerância a partição podem ser garantidos ao mesmo tempo num sistema distribuído.
- p.599 [2]: bancos relacionais garantem alta confiabilidade transacional porque suportam ACID plenamente; os NoSQL variam entre BASE e ACID.
- p.599 [2]: modelo relacional baseado em conjuntos matemáticos: dados em relações (tabelas), tuplas (linhas), atributos (colunas), com esquema bem definido; as linhas de um conjunto têm a mesma estrutura. NoSQL usa chave-valor, grafo, documento; geralmente sem esquema.
- p.599-600 [2-3]: escalabilidade do relacional depende de escala vertical (mais hardware), cara e limitada; horizontal é pouco suportada. NoSQL se baseia em escala horizontal.
- p.600 [3]: o relacional é descrito como pouco adequado a ambientes de nuvem (afirmação do artigo) e NoSQL como melhor solução para banco em nuvem.
- p.600 [3]: relacionais são usados em armazém de dados (data warehouse); NoSQL não foi projetado para isso.
- p.600 [3]: complexidade: no relacional é preciso converter dados em tabelas; quando não cabem, a estrutura fica complexa e lenta.
- p.600 [3]: recuperação de falhas no relacional por gerenciador de recuperação com arquivos de log e algoritmo ARIES, garantindo atomicidade e durabilidade; NoSQL, por replicação.
- p.600-601 [3-4]: segurança (Tabela I): relacionais têm mecanismos de autenticação, integridade (ACID), confidencialidade (criptografia), auditoria e comunicação segura por SSL; vários NoSQL não trazem autenticação, auditoria nem comunicação segura por padrão.
- p.601 [4]: conclusão: NoSQL ainda "fresco" e sem maturidade plena; relacionais cobrem bem segurança.

## O que a referência NÃO diz (e alguém poderia supor)
- Os termos "chave primária" e "chave estrangeira" (nem "primary key"/"foreign key") não aparecem; "integridade referencial" também não. O artigo fala de integridade de dados via ACID.
- Não afirma que SQL é "a linguagem padrão" dos bancos relacionais de forma explícita; só diz que o termo NoSQL foi usado para relacionais que omitem o uso de SQL (p.598), e menciona SQL injection como ameaça (p.600).
- Não trata de séries temporais, dados de SCADA, agregações por minuto/hora, particionamento de tabelas, PostgreSQL, Redis ou cache.
- Não afirma que o modelo relacional é "adequado a sistemas que exigem coerência" nessas palavras, embora diga que ACID dá alta confiabilidade transacional (p.599) e use o exemplo do banco financeiro (p.599).
- Não diz que o relacional é inadequado à nuvem de forma neutra: o artigo faz essa afirmação, mas de forma ampla e sem fonte; um banco relacional em contêiner não é discutido.

## Em que partes do TCC é citada
Cap. 2 (14_1): linhas 202 e 204. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`.
