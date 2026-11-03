# Elipse Software (Goetz), Metodologia para Desenvolvimento de IHMs de Alta Performance Visual

## Dados
- Autor: Helcker Ferrarezi Goetz. Publicado em 25/03/2019, atualizado em 09/05/2023 (datas da página). Tipo: artigo da base de conhecimento (Elipse Knowledgebase), página web.
- Chave no `.bib`: `ELIPSE_IHM_ALTA_PERFORMANCE`. Fonte: `Referencias\sites.txt`, https://kb.elipse.com.br/metodologia-para-desenvolvimento-de-ihms-de-alta-performance-visual/. Sem PDF.
- Leitura: a página foi lida por ferramenta de busca na web que devolve um resumo gerado por um modelo (não o texto bruto). As afirmações abaixo vêm desse resumo; documento web não tem páginas; frases literais não foram conferidas.

## Do que trata (linguagem simples)
Guia de como desenhar telas de operação (IHM) que ajudem o operador a perceber o que está errado: cores discretas, fundo neutro, mostrar o valor com contexto (faixa normal e limites de alarme), alarmes diferenciados por cor e forma, hierarquia visual, evitar animações decorativas e 3D. Cita casos de acidentes em que falhas de interface contribuíram (BP Texas City 2005; voo 605 da Indian Airlines 1990), consciência situacional e a norma NBR ISO 9241-11 para definir usabilidade.

## Afirmações que dá para citar
- Cores: usar cores discretas na tela como um todo, evitar gradientes, reservar cores chamativas para estados críticos e de maior relevância; não usar cor para destacar estados normais (uma bomba ligada não deve ser vermelha ou verde); limitar equipamentos a três cores.
- Fundo: não usar branco nem preto, e sim tons neutros intermediários (cinza claro ou escuro); fundo claro serve a visualizações curtas (mais fadiga em longa exposição), fundo escuro a uso prolongado.
- Quantidades: dado bruto transmite só a percepção do valor; para contexto, indicar faixas de operação normal e limites de alarme em gráficos, radar ou barras (bargraphs); usar gráficos de tendência para projetar; preferir comprimentos de linha a áreas.
- Alarmes: um indicador específico por severidade (alta, média, baixa), diferenciados por cor e por forma para atender daltônicos; testar a interface em tons de cinza; usar pisca só para alarmes não reconhecidos.
- Hierarquia visual por tamanho de objeto; agrupar objetos por forma envolvente; evitar animações decorativas; preferir layout plano 2D; 3D só em telas de apresentação ou navegação.

## O que a referência NÃO diz
- **Não cita a ISA-101** em nenhum trecho nem nas referências (a única norma citada é a NBR ISO 9241-11). Em 14_1 (linhas 271 a 275) e 14_4 (linha 8) o TCC cita a ISA-101 junto com esta fonte; o que cabe a esta fonte é cores, fundo e valores com contexto.
- Não traz tabela padronizada de cores para alarmes.
- Não descreve hierarquia de telas em quatro níveis (visão geral, área, detalhe, configuração); fala de hierarquia visual por tamanho de objeto.
- Não recomenda tema claro: recomenda fundo cinza neutro, claro ou escuro conforme o tempo de uso.

## Em que partes do TCC é citada
Cap. 2 (14_1): linhas 21, 273, 275. Cap. 5 (14_4): linha 8. Conclusão (15): linha 14.
