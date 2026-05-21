# CLAUDE.md — Guia de Padrões do Projeto

Este arquivo documenta as convenções, padrões e regras de comportamento que **devem** ser seguidos ao trabalhar neste TCC.

---

## 0. Regra de comportamento fundamental

**Só faça uma alteração quando você tiver 95% de certeza de que ela está correta.** Caso não tenha, **faça perguntas ao usuário** até atingir esse nível de confiança. Use a ferramenta `AskUserQuestion` para perguntas estruturadas quando houver opções concretas; use texto livre quando precisar de esclarecimento aberto.

Aplicar essa regra em particular a:
- Mudanças em texto técnico (definições, números, fórmulas)
- Estrutura de capítulos/seções/labels
- Bibliografia (chaves, tipos de entrada, campos)
- TikZ/pgfplots (alterações podem quebrar o build)
- Renomeação de labels (quebra todas as referências `\ref{}`)

Quando estiver inseguro, **pergunte antes de editar**.

---

## 1. Visão geral do projeto

- **Tema:** Sistema supervisório web orientado a serviços (SCADA na nuvem) com aquisição via Modbus TCP/RTU, integração com IoT/IIoT/CPS/Indústria 4.0.
- **Idioma:** Português Brasileiro.
- **Norma bibliográfica:** ABNT (via `biblatex-abnt`).
- **Arquivo principal:** `Texto.tex` na raiz.
- **Diretório de trabalho:** `/home/arthur-ferreira/Desktop/TCC/`.

---


## 3. Estrutura de diretórios

```
TCC/
├── Texto.tex                       # entrada principal
├── Referencias.bib                 # bibliografia (biblatex)
├── CLAUDE.md                       # este arquivo
├── Configurações/
│   └── Commands.tex                # comandos customizados, pacotes
├── Capitulos/
│   ├── 01_Capa.tex … 12_Sumário.tex
│   ├── 13_Introducao/
│   │   ├── 13_1_Contextualizacao.tex
│   │   ├── 13_2_Justificativa.tex
│   │   ├── 13_3_Objetivos.tex
│   │   └── 13_4_Estrutura.tex
│   ├── 14_Desenvolvimento/
│   │   ├── 14_1_Cap.tex            # Conceitos e Tecnologias
│   │   ├── 14_2_Cap.tex            # Funcionamento
│   │   └── 14_3 a 14_6_Cap.tex     # ainda a desenvolver
│   ├── 15_Conclusão.tex
│   ├── 16_Cronograma.tex
│   └── 00_Referencias.tex          # \printbibliography
├── Imagens/
│   ├── Capa/
│   ├── Introducao/
│   │   ├── Contextualizacao/
│   │   └── Justificativa/
│   └── Desenvolvimento/            # convenção: CapN/ ↔ 14_N_Cap.tex
│       ├── Cap1/                   # figuras de 14_1_Cap.tex (Conceitos)
│       └── Cap2/                   # figuras de 14_2_Cap.tex (Funcionamento)
└── Referencias/                    # PDFs das referências (só leitura)
```

---

## 4. Convenções de LaTeX

### 4.1 Parágrafos e ênfase

- Cada parágrafo começa com `\par`.
- `\emph{...}` para termos estrangeiros (inglês) em itálico.
- `\textit{...}` também usado para termos técnicos estrangeiros (intercambiável com `\emph` nesse projeto).
- `\textbf{...}` para definições e termos sendo introduzidos.

### 4.2 Citações

- Parentética: `\cite{KEY}` ou `\cite{KEY1,KEY2}`
- Narrativa: `\textcite{KEY}` (ex.: "Para Pisching, ...")
- Com página: `\textcite[p.~N]{KEY}` (usar `~` para non-break space)

### 4.3 Aspas

- Usar `` `` (duas crases) para abrir e `'' ` (duas aspas simples) para fechar:
  ```latex
  ``texto entre aspas''
  ```

### 4.4 Travessões e hífens — REGRA RÍGIDA

- **NUNCA usar `---` (travessão LaTeX).** O usuário não quer travessões.
- Substituir parênteticos com vírgula: `texto, inserção, continuação` em vez de `texto --- inserção --- continuação`.
- Usar `-` (hífen) só para palavras compostas e formas conjugadas pronominais (`auto-organização`, `expandiu-se`).
- `~` para non-break space (em "p.~N", "Figura~\ref{...}", unidades em títulos).

### 4.5 Decimais e unidades

- Decimal **vírgula** em português: `6{,}25` (o `{,}` evita espaço extra do LaTeX em modo matemático).
- Unidades com thin space no texto: `4\,mA`, `0\,bar`, `10\,V`.
- **NUNCA usar `\,` em títulos de seção** (hyperref reclama). Trocar por `~`: `4 a 20~mA`.

### 4.6 Referências cruzadas

- `Figura~\ref{fig:nome}` (não "Fig." nem só "\ref")
- `Tabela~\ref{tab:nome}`
- `Equação~\ref{eq:nome}` ou `Equações~\ref{eq:a} e~\ref{eq:b}`
- `Subseção~\ref{sec:nome}`

---

## 5. Padrões de figuras

### 5.1 Imagem externa (PNG/JPEG)

```latex
\begin{figure}[H]
    \centering
    \caption{Título da figura}
    \centering
    \includegraphics[width=0.7\textwidth]{Imagens/Path/file.png}
    \centering
    \vspace{0.2cm} \\
    Fonte: ...
    \label{fig:nome}
\end{figure}
```

### 5.2 TikZ

```latex
\begin{figure}[H]
    \centering
    \caption{Título}
    \label{fig:nome}
    \vspace{0.4cm}
    \begin{tikzpicture}[...]
        ...
    \end{tikzpicture}
    \vspace{0.2cm} \\
    Fonte: ...
\end{figure}
```

### 5.3 Atribuição de fonte (REGRA RÍGIDA)

- **Figura/tabela do autor (sem fonte externa):** `Fonte: Autor.`
- **Baseada em obra externa (TikZ inspirado em conceito de artigo):** `Fonte: Elaborado pelo autor com base em \textcite{REF}.`
- **Reprodução direta com citação (extraída de artigo):** `Fonte: \textcite[p.~N]{REF}.`
- **Adaptação visível de obra externa:** `Fonte: Adaptado de \textcite{REF}.`

### 5.4 Convenção de tamanho `\includegraphics`

Escolher `width` com base na proporção da imagem:
- Quase quadrada (largura ≈ altura): `width=0.55\textwidth`
- Retangular wide (largura > altura): `width=0.7\textwidth` a `width=0.85\textwidth`
- Retangular tall (altura > largura): `width=0.4\textwidth` a `width=0.5\textwidth`

---

## 6. Bibliografia (`Referencias.bib`)

### 6.1 Convenção de chaves

`SOBRENOME[+SOBRENOME2]_ANO_TITULO_CURTO` em CAIXA ALTA, separadores `_`:
- `STANKOVIC2014_IOT_RESEARCH_DIRECTIONS`
- `SALVADOR2019_AQUISICAO_REDUNDANCIA`
- `MODBUS_TCP_IMPLEMENTATION_GUIDE`

### 6.2 Tipos de entrada usados

| Tipo BibLaTeX     | Quando usar                                                  |
| ----------------- | ------------------------------------------------------------ |
| `@article`        | Artigo de revista/periódico (Springer, IEEE, CIRP, etc.)     |
| `@thesis`         | Tese de doutorado ou TCC (com campo `type`)                  |
| `@incollection`   | Capítulo de livro                                            |
| `@techreport`     | Nota técnica institucional                                   |
| `@manual`         | Especificação/norma (Modbus Organization, ISA, IEC)          |
| `@online`         | Artigo web (Elipse KB, blog, página institucional)           |
| `@unpublished`    | Trabalho não publicado                                       |

### 6.3 Campos obrigatórios para `@online`

```bibtex
@online{KEY,
  author       = {Sobrenome, Nome},
  title        = {Título do artigo},
  organization = {Nome da Organização},
  date         = {YYYY-MM-DD},
  url          = {https://...},
  urldate      = {YYYY-MM-DD},  % data de acesso
  note         = {Atualizado em DD mmm. AAAA}  % opcional
}
```

---

## 7. Convenções de equações

### 7.1 Comando `\myequation` (definido em `Configurações/Commands.tex`)

**Sempre usar `\myequation` para equações principais** que devem aparecer na Lista de Equações. O comando tem 4 argumentos:

```latex
\myequation{<corpo da equação>}{<label>}{<descrição na lista>}{<unidade>}
```

- `#1` — corpo da equação (sem `\begin{equation}`)
- `#2` — label, no formato `eq:nome_descritivo`
- `#3` — descrição que aparece na Lista de Equações
- `#4` — unidade de medida exibida em colchetes ao lado da equação

Exemplo:

```latex
\myequation{y = a \cdot x + b}{eq:reta_linearizacao}{Equação geral da linearização do sensor}{\text{u.e.}}
```

Resultado renderizado: `y = a·x + b   [u.e.]` (com número automático e entrada na Lista de Equações).

### 7.2 Quando usar `\begin{equation}` direto

Apenas para **etapas intermediárias de derivação** ou **exemplos numéricos** que não precisam aparecer na Lista de Equações (e que não comportam uma unidade simples no padrão `\myequation`, como sistemas com `\begin{cases}`):

```latex
\begin{equation}
    \begin{cases}
        y_\text{min} = a \cdot x_\text{min} + b \\
        y_\text{max} = a \cdot x_\text{max} + b
    \end{cases}
    \label{eq:sistema_linearizacao}
\end{equation}
```

### 7.3 Sintaxe de modo matemático

- Multiplicação: `\cdot`
- Texto em modo matemático: `\text{...}`
- Subscritos descritivos: `x_\text{min}`, `y_\text{max}`
- Frações: `\frac{}{}` em vez de `/`
- Cases: `\begin{cases} ... \end{cases}` (do amsmath)
- Decimal vírgula: `6{,}25`
- Notação científica: `6{,}25 \times 10^{-4}`

---

## 8. Pacotes LaTeX disponíveis

Carregados em `Texto.tex` (não precisa importar de novo):

- `babel` (pt-brazil) — idioma
- `inputenc`/`fontenc` — codificação
- `amsmath`, `amssymb` — matemática
- `graphicx` — figuras
- `tikz` (sem `shapes.geometric`!), `pgfplots` (compat=1.18), `circuitikz` — desenhos
- `tabularx`, `multirow`, `array` — tabelas
- `subfig`, `caption`, `float` — legendas e [H]
- `csquotes`, `ulem` — texto
- `siunitx` — unidades (raramente usado, preferimos `\,`)
- `hyperref` — links e bookmarks PDF
- `biblatex` com estilo `abnt`
- `listings` — código
- `todonotes`, `gensymb`
- `tocloft` — sumário customizado

### 8.1 Pitfalls conhecidos do TikZ neste projeto

- **`shapes.geometric` NÃO está carregada.** Não usar `trapezium`, `cylinder`, `diamond` etc. Desenhar com `\fill` + `\draw` em paths poligonais.
- **`xticklabel style={/pgf/number format/.cd, ...}` vaza escopo** e quebra com erro `I do not know the key '/pgf/number format/at'`. Usar em vez disso:
  ```latex
  xticklabel={\pgfmathprintnumber[fixed, 1000 sep={}]{\tick}},
  ```
- **`\,` em títulos de seção** gera warning do hyperref. Usar `~` em vez.

### 8.2 Comandos customizados (em `Configurações/Commands.tex`)

- `\myequation{<corpo>}{<label>}{<descrição>}{<unidade>}` — equação numerada que entra na Lista de Equações (ver Seção 7.1).
- `\perthousand` — símbolo de permilagem (‰), funciona em modo texto e em modo matemático.

### 8.3 Estilo de código (listings) pré-configurado

O pacote `listings` já tem estilo definido em `Configurações/Commands.tex` (não precisa redefinir):

- Fonte: `\ttfamily\footnotesize`
- Palavras-chave: **azul negrito**
- Comentários: *marrom itálico*
- Strings: **vermelho**
- Numeração de linha à esquerda, fonte `\tiny\color{gray}`
- Moldura simples (`frame=single`)
- Quebra automática de linhas longas (`breaklines=true`)
- Tab size 4

Uso típico:

```latex
\begin{lstlisting}[language=Python, caption={Descrição do trecho}, label={lst:nome}]
código aqui
\end{lstlisting}
```

### 8.4 Configuração siunitx (ABNT)

`siunitx` está configurado para ABNT em `Configurações/Commands.tex`:

- Separador decimal: vírgula
- Separador de milhar: ponto, aplicado **a partir de 4 dígitos** (`1000` fica sem separador; `10000` vira `10.000`)
- `per-mode = symbol` (unidades por símbolo, ex.: `m/s` em vez de `m·s⁻¹`)
- `detect-weight` e `detect-family` ligados (segue a fonte do contexto)

Convenção do projeto: usar `\,unidade` inline (`4\,mA`, `0\,bar`) como padrão. Reservar `\SI{}{}` para casos em que a formatação automática do siunitx agregue valor (ex.: muitos algarismos significativos ou unidades compostas).

---

## 9. Estrutura semântica dos capítulos

### Capítulo 14_1 (Conceitos)
1. **Sistema SCADA** (com Zanghi 2019)
   - Aquisição e Registro, Sincronismo, Níveis, Comando, Escalabilidade, Redundância
2. **Ajuste para Escala de Engenharia e Linearização de Sensores** (autoral, com equações)
3. **Internet das Coisas (IoT)** — Stankovic 2014, Pisching, Bigheti
4. **Internet Industrial das Coisas (IIoT)** — Bigheti, Pisching
5. **Sistemas Ciber-Físicos (CPS)** — Monostori 2016, Pisching, Bigheti
6. **Indústria 4.0** — Lasi 2014, Pisching, Bigheti, Colombo 2014

### Capítulo 14_2 (Funcionamento)
- Arquitetura do sistema, aquisição via Modbus, Modbus TCP, Modbus RTU

---

## 10. Bibliografia

A lista completa de referências está em `Referencias.bib` (chaves prontas para `\cite{}` e `\textcite{}`). Para consultar o conteúdo conceitual de cada referência, os PDFs originais estão em `Referencias/`.

**Antes de adicionar conteúdo que precise de citação:**
1. Conferir `Referencias.bib` se a referência já existe (`grep KEY Referencias.bib` ou ler o arquivo).
2. Se existir, usar a chave; se não, criar nova entrada seguindo as convenções da Seção 6.
3. Para conteúdo conceitual ainda não citado, consultar primeiro os PDFs em `Referencias/` antes de buscar fontes novas.

---

## 11. Pasta de PDFs de referência

`/home/arthur-ferreira/Desktop/TCC/Referencias/` contém PDFs originais — **somente leitura para extração de conteúdo conceitual**. **Nunca extrair figuras** desses PDFs para o documento (questão de direitos autorais). Se o autor extrair figuras, ele coloca em `Imagens/Desenvolvimento/CapN/` e me passa o caminho.

---

## 12. Sobre conteúdo autoral vs. baseado em fontes

- Conteúdo técnico geral (matemática elementar, conceitos clássicos) **não precisa** de citação.
- Conceitos atribuíveis a um autor específico, definições formais, citações de termos cunhados: **precisam** de citação.
- Figuras conceituais inspiradas em diagramas de artigos: TikZ próprio com `Fonte: Elaborado pelo autor com base em \textcite{...}`.

---

## 13. Diretivas de estilo do usuário (preferências observadas)

- Texto técnico denso, mas em prosa acadêmica fluida (não bullet-only).
- Usa muito `\par` para iniciar parágrafos.
- Aprecia exemplos numéricos completos (calcula tudo passo a passo).
- Aprecia gráficos em pgfplots para ilustrar relações matemáticas.
- Vai recompilar manualmente após cada mudança (compartilha o log no chat).
- **Não** quer travessões (`---`).
- **Não** quer reprodução de figuras dos PDFs originais — usa TikZ ou extrações próprias.
- Quando a fonte é dele, prefere `Fonte: Autor.` (curto), não `Fonte: Elaborado pelo autor.`.

---

## 14. Fluxo de trabalho recomendado

1. **Antes de editar**, ler a seção alvo com `Read` para confirmar contexto.
2. Se houver qualquer ambiguidade, **perguntar antes** (regra dos 95%).
3. Aplicar mudanças via `Edit` com âncoras únicas suficientes.
4. Compilar com a sequência adequada.
5. Reportar o resultado: páginas, warnings relevantes, erros.
6. Nunca silenciar erros — sempre investigar a causa raiz no log.
