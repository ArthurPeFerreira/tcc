# Henriques da Silva (2010), Um estudo sobre os benefícios e os riscos de segurança na utilização de Cloud Computing

## Dados
- Autor: Fabrício Rodrigues Henriques da Silva (Centro Universitário Augusto Motta, UNISUAM-RJ; orientação do prof. Ricardo de Souza Alencar). Ano: 2010. Tipo: artigo científico de conclusão de curso de graduação em Ciência da Computação, 15 páginas. Numeração impressa = página do PDF.
- Chave no `.bib`: `HENRIQUES2010_CLOUD_COMPUTING_TCC`. Arquivo: `Referencias\Henriques da Silva, 2010.pdf`.
- Lido: documento inteiro.

## Do que trata (linguagem simples)
Apresenta computação em nuvem de forma resumida: o que é, as características essenciais (self-service sob demanda, amplo acesso à rede, agrupamento de recursos, elasticidade rápida, serviço medido), os modelos de serviço (SaaS, PaaS, IaaS), os de implantação (privado, público, comunidade, híbrido), os papéis (provedor, desenvolvedor, usuário final) e a escalabilidade. Mostra benefícios (aplicações possíveis, redução de custos por alocação conforme a demanda) e dedica uma seção à segurança, citando os sete riscos de Gartner (via Brodkin, 2008). Apoia-se muito no rascunho do NIST (Mell e Grance, 2009) e em Chirigati (2009).

## Afirmações que dá para citar (com página)
- p.2: o termo "computação em nuvem" surgiu em 2006, em palestra de Eric Schmidt (Google) sobre como a empresa gerenciava seus data centers (atribuído a Taurion, 2009).
- p.2: a nuvem representa a Internet ou a infraestrutura de comunicação entre componentes, baseada em abstração; cada parte é provida como serviço, normalmente alocada em data centers com hardware compartilhado (atribuído a Machado et al., 2009). Modelo emergente que move dados e aplicações para grandes centros de armazenamento; baseia-se em virtualização e pay-per-use (Chirigati, 2009).
- p.2-3: o usuário só precisa de um computador conectado; processamento e armazenamento ficam na rede ("terminal burro"). A nuvem é uma camada conceitual que esconde a infraestrutura e oferece uma interface padrão.
- p.3: é evolução da "Utility Computing" (recursos como mercadoria, por provedores especializados, a baixo custo unitário).
- p.4-5: cinco características essenciais (atribuídas a Mell et al., 2009): self-service sob demanda (adquirir recursos sem interação humana com o provedor), amplo acesso à rede (plataformas heterogêneas), pooling de recursos (modelo multi-tenant, recursos atribuídos dinamicamente, cliente sem controle da localização exata), elasticidade rápida (recursos adquiridos e liberados rapidamente, às vezes automaticamente; a virtualização ajuda), serviço medido (uso monitorado, controlado e reportado; SLA).
- p.6: SaaS (aplicações completas, camada mais alta), PaaS (plataforma para desenvolver, testar e implantar aplicações), IaaS (servidores, roteadores, armazenamento; API para administração da infraestrutura; provê base para SaaS e PaaS).
- p.7-8: modelos de implantação (Mell et al., 2009; Chirigati, 2009): privado (exclusivo de um usuário, infraestrutura pertence a ele), público (executado por terceiros, aplicações de vários usuários misturadas), comunidade (compartilhada por várias organizações com preocupações comuns, gerida por elas ou por terceiro, local ou remota), híbrido (composição de pública e privada; privada amplia recursos reservando na pública; mantém níveis de serviço em flutuações; tarefas periódicas).
- p.8-9: os papéis (provedor, desenvolvedor, usuário final); escalabilidade horizontal (conectar e integrar várias nuvens) e vertical (aumentar capacidade dos nós) (Chirigati, 2009).
- p.9-10: aplicações indicadas para a nuvem (Armbrust et al., 2009): aplicações móveis interativas (menciona Internet of Things aumentando a produção de dados), processamento paralelo em lote, análise de dados, computação intensiva, ampliação sob demanda do data center corporativo.
- p.10-11: redução de custos: recursos locais ficam subutilizados; na nuvem a elasticidade acompanha a demanda (Figura 4).
- p.11-13: segurança é uma das maiores preocupações; 53% de profissionais de segurança das mil maiores empresas americanas estavam "muito preocupados" (INFO Online, 2009); sete riscos de Gartner/Brodkin (2008): acesso privilegiado, conformidade com regulamentos, localização dos dados, segregação dos dados, recuperação de dados, apoio à investigação, viabilidade em longo prazo.
- p.14: conclusão: nuvem é tendência de crescimento; pontos ainda não maduros, sobretudo segurança e confiabilidade.

## O que a referência NÃO diz (e alguém poderia supor)
- Não apresenta definição própria: quase tudo é repassado de outras fontes (Mell et al., Chirigati, Machado et al., Taurion). Ao citar, o conteúdo é de segunda mão.
- Não fala de nuvem para SCADA/automação industrial, de contêineres, de Docker ou de orquestração.
- Não trata de "nuvem híbrida" como mistura de infraestrutura local e nuvem pública de forma explícita (descreve privada + pública).
- Os números de custo/benefício da Figura 4 são ilustrativos (gráficos conceituais), sem dados medidos.
- O texto descreve "multi-tenant" apenas como característica do pooling (p.4), sem tratar de implementação.

## Em que partes do TCC é citada
Introdução 13_2: linha 7. Cap. 2 (14_1): linhas 96, 98, 100. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`. Nota para a auditoria anterior: o modelo "comunidade" aparece sim neste PDF (p.7) e no de Pedrosa e Nogueira (p.2-3).
