# Stankovic (2014), Research Directions for the Internet of Things

## Dados
- Autor: John A. Stankovic (Univ. de Virgínia). Ano: 2014. Tipo: artigo convidado de periódico, *IEEE Internet of Things Journal* 1(1), p. 3-9. DOI 10.1109/JIOT.2014.2312291. O PDF da pasta é a "versão do autor" (manuscrito), de 7 páginas, numeradas 1 a 7 (não coincidem com as páginas 3-9 da revista; abaixo uso a página do PDF).
- Chave no `.bib`: `STANKOVIC2014_IOT_RESEARCH_DIRECTIONS`. Arquivo: `Referencias\Stankovic, 2014.pdf`.
- Lido: documento inteiro.

## Do que trata (linguagem simples)
É um artigo de visão. Diz que várias comunidades de pesquisa (Internet das Coisas, computação móvel, computação pervasiva, redes de sensores sem fio e sistemas ciberfísicos) estão se fundindo e que o "mundo inteligente" terá muitos sensores e atuadores conectados, a ponto de a "sensoriamento e atuação" virar um serviço público como eletricidade e água. Depois lista oito grandes temas de pesquisa em aberto: escala massiva, arquitetura e dependências, criação de conhecimento e big data, robustez, abertura, segurança, privacidade e humano no laço. Boa parte dos exemplos é de casa inteligente, saúde e cidades inteligentes. O artigo cita a "Internet Industrial" como forma de IoT numa única frase.

## Afirmações que dá para citar (com página do PDF)
- p.1: as comunidades de IoT, computação móvel, computação pervasiva, redes de sensores sem fio e sistemas ciberfísicos (CPS) pesquisavam com frequência de forma separada, mas há sobreposição crescente; definições estreitas de cada campo "não são mais apropriadas"; a visão de mundo inteligente envolve boa parte da ciência e engenharia da computação e da engenharia elétrica.
- p.1: visão: cidades e o mundo serão cobertos por sensoriamento e atuação, em muitos casos embutidos em "coisas"; plantas industriais estão se conectando à Internet (apenas "a ponta do iceberg"); a densidade da cobertura de sensores e atuadores levará a uma mudança qualitativa. Uma possibilidade é uma "utilidade global de sensoriamento e atuação" conectada à Internet, vista como infraestrutura integrada (sistemas de sistemas).
- p.2: "A Internet Industrial também é uma forma de IoT em que os dispositivos (coisas) são objetos em fábricas, centros de despacho, indústrias de processo etc." (única menção a contexto industrial).
- p.2: oito temas de pesquisa: escala massiva, arquitetura e dependências, criação de conhecimento e big data, robustez, abertura, segurança, privacidade e humano no laço.
- p.2: na escala massiva, trilhões de coisas na Internet levantam problemas de nomear, autenticar acesso, manter, proteger e usar; pergunta se o IPv6 bastará.
- p.2-3: arquitetura e dependências: aplicações de IoT compartilhando sensores e atuadores geram interferências ("systems-of-systems"), especialmente com atuadores; sugestão de uma arquitetura tipo loja de aplicativos; exemplos de conflito (gestão de energia versus cuidados de saúde em casa). Importante para aplicações críticas de segurança ou em que atuadores possam causar dano.
- p.3: big data: a coleta contínua de dados exige técnicas para transformar dados brutos em conhecimento; sem calibragem e transporte confiáveis, as inferências ficam erradas e, se acionam atuadores, causam problemas de segurança (safety); sugere acompanhar toda informação inferida com nível de confiança.
- p.3: robustez: com o tempo, a sincronização de relógios se deteriora (deriva dos relógios) e exige ressincronização periódica; também localização e outros parâmetros.
- p.4: abertura: sistemas antes fechados (carros, aviões) tornam-se abertos; abertura traz dificuldades de segurança e privacidade; menção a laços de controle que competem entre si; "o acesso remoto a fábricas ou produtos individuais é geralmente muito benéfico para a indústria", mas surgem preocupações de segurança, "especialmente se houver qualquer questão de segurança física envolvida".
- p.4-5: segurança: ataques são problema generalizado na Internet; para IoT agravam-se pela baixa capacidade dos dispositivos, acesso físico aos sensores e atuadores e abertura dos sistemas; falhas aleatórias são vulnerabilidades a explorar; sistema precisa operar e se recuperar durante ataques; dispositivos legados são difíceis de proteger.
- p.5: privacidade: políticas de privacidade por domínio, nova linguagem para expressá-las.
- p.5-6: humano no laço: quatro categorias (o humano controla diretamente; o sistema monitora passivamente; modelam-se parâmetros fisiológicos; híbridos). "Aplicações em que os humanos controlam diretamente o sistema usam principalmente controle supervisório": o processo roda de forma autônoma e o humano intervém quando necessário, tipicamente ajustando set points; ou o processo aceita um comando, executa de forma autônoma, reporta o resultado e aguarda novo comando (p.5).

## O que a referência NÃO diz (e alguém poderia supor)
- Não define "Internet das Coisas" em uma frase objetiva nem fornece uma definição formal ou cronologia (o termo é tratado como campo de pesquisa e como visão).
- Não trata de SCADA, supervisório, Modbus, protocolos industriais, nuvem industrial ou contêineres. Sistemas ciberfísicos são citados como comunidade de pesquisa, sem definição formal.
- Não fala de IIoT como sigla; usa "Industrial Internet" em uma frase.
- Não dá números, métricas nem resultados experimentais: é artigo de agenda de pesquisa.
- A menção a "controle supervisório" aparece na categoria "humano no laço" e não equivale à definição do supervisório SCADA.

## Em que partes do TCC é citada
Introdução 13_2: linha 7. Cap. 2 (14_1): linha 62. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`.
