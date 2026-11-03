# Pedrosa e Nogueira (2011), Computação em Nuvem

## Dados
- Autores: Paulo Henrique C. Pedrosa e Tiago Nogueira. Ano: 2011. Título: "Computação em Nuvem". Tipo: trabalho acadêmico de disciplina (artigo curto, sem periódico), 4 páginas, sem numeração impressa (uso a página do PDF).
- Chave no `.bib`: `PEDROSA2011_COMPUTACAO_NUVEM`. Arquivo: `Referencias\Pedrosa; Nogueira, 2011.pdf`.
- Lido: documento inteiro.

## Do que trata (linguagem simples)
Introdução à computação em nuvem. Define o conceito (usar aplicações e serviços de qualquer lugar, só com um terminal conectado, com a infraestrutura "escondida" em centros de dados), divide os participantes (provedor, desenvolvedor, usuário), lista cinco características (elasticidade, autoatendimento, cobrança por uso, amplo acesso pela rede, customização), as três camadas de serviço (IaaS, PaaS, SaaS), os quatro modelos de implementação (público, privado, comunidade, híbrido), exemplos comerciais, vantagens e desvantagens (segurança, escalabilidade, interoperabilidade, confiabilidade, disponibilidade). Boa parte é resumo de outras fontes (Henriques da Silva 2010, Buyya, NIST rascunho, Chirigati).

## Afirmações que dá para citar (com página do PDF)
- PDF p.1: nuvem é um modelo de computação que permite ao usuário acessar muitas aplicações e serviços em qualquer lugar, independente da plataforma, só com um terminal conectado; infraestrutura e recursos ficam "escondidos" e o usuário acessa uma interface padrão. Para isso aplicações e dados ficam em grandes centros de armazenamento (data centers) e são entregues como serviços pela internet.
- PDF p.1: três grupos de participantes: provedor de serviço (disponibiliza, gerencia, monitora a infraestrutura, garante nível de serviço e segurança), desenvolvedor, usuário final.
- PDF p.1-2: características: elasticidade e escalonamento (ilusão de recursos infinitos; recursos adicionais providos, possivelmente de forma automática, quando a demanda sobe e retidos quando cai); self-service (adquirir recursos sem intervenção humana); faturamento e medição por uso (cobrança por uso de baixa duração, por exemplo horas); amplo acesso à rede (mecanismos padrão para plataformas heterogêneas); customização.
- PDF p.1: convergência de tecnologias que permitem a nuvem: virtualização de hardware, tecnologias de internet (web 2.0, serviços web), gerenciamento de sistemas, computação distribuída.
- PDF p.2: três classes de serviço: IaaS (camada inferior; hardware virtualizado de computação, armazenamento e comunicação), PaaS (intermediária; ambiente para o desenvolvedor criar e implantar aplicações sem se preocupar com processadores e memória) e SaaS (superior; aplicações completas ao usuário final, via portais web).
- PDF p.2-3: modelos de implementação "público, privado, comunidade e híbrido". Público: disponível ao público em geral ou a grandes grupos industriais, implementado por um prestador que garante desempenho e segurança. Privado: operado exclusivamente para uma organização (gestão pela própria ou por terceiros). Comunidade: infraestrutura compartilhada por várias organizações com preocupações comuns (missão, requisitos de segurança, política, conformidade), podendo ser gerida por elas ou por terceiros, local ou remota. Híbrida: dois ou mais modelos, cada nuvem continua única, unidas por tecnologia proprietária ou padronizada para portabilidade de dados e aplicações; privada + pública permite ampliar recursos da privada reservando recursos da pública.
- PDF p.3: vantagens: acesso de qualquer lugar (com internet), pagamento pelo uso (sem desperdício), escalabilidade, menor risco de infraestrutura, confiabilidade dos provedores (cópias de segurança, criptografia, controle de acesso).
- PDF p.3-4: desvantagens: segurança (informação sai do local e fica em lugar físico incerto; privacidade e integridade; nuvens públicas mais expostas a ataques; exige criptografia, controle de acesso rigoroso e boa gestão de backup), escalabilidade (não trivial; depende de aplicação e dados flexíveis), interoperabilidade (poder levar programas e dados entre nuvens; faltam padrões), confiabilidade (relacionada a frequência e impacto das falhas, a dados permanecerem intactos com falha de servidores), disponibilidade (mesmo Gmail ficou fora do ar; depende da internet).

## O que a referência NÃO diz (e alguém poderia supor)
- Não usa "cinco características essenciais do NIST" como lista fechada igual ao NIST: lista elasticidade, self-service, medição por uso, amplo acesso e customização (p.1-2); não traz "pooling de recursos/multi-tenant" (isso está em Henriques da Silva 2010).
- Não fala de nuvem em contexto industrial, SCADA, contêineres, Docker ou orquestração.
- Não data a origem do termo "computação em nuvem" (isso está em Henriques da Silva 2010, p.2: palestra de Eric Schmidt em 2006).
- Não define "nuvem híbrida" como "on-premises + pública" de modo explícito: diz "dois ou mais modelos de implementação"; o exemplo é privada + pública.
- Não traz números, custos ou comparação quantitativa.

## Em que partes do TCC é citada
Introdução 13_2: linha 7. Cap. 2 (14_1): linhas 96, 98, 100. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`.
