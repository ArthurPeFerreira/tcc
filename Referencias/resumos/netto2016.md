# Netto et al. (2016), State machine replication in containers managed by Kubernetes

## Dados
- Autores: Hylson V. Netto, Lau Cheuk Lung, Miguel Correia, Aldelir Fernando Luiz, Luciana Moreira Sá de Souza (UFSC, IFC Blumenau, INESC-ID/Lisboa). Ano: 2016 (online dez/2016). Tipo: artigo de periódico, *Journal of Systems Architecture* (versão "article in press"), 7 páginas. DOI 10.1016/j.sysarc.2016.12.007.
- Chave no `.bib`: `NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES`. Arquivo: `Referencias\Netto, Hylson V. et al., 2016.pdf`.
- Lido: documento inteiro. Páginas impressas 1 a 7 = páginas do PDF 1 a 7.

## Do que trata (linguagem simples)
Propõe um jeito de fazer várias cópias (réplicas) de um serviço dentro de contêineres gerenciados pelo Kubernetes manterem o mesmo estado e executarem os pedidos na mesma ordem. Cria um protocolo chamado DORADO, que usa o armazenamento compartilhado do próprio Kubernetes (etcd) como memória compartilhada para combinar a ordem dos pedidos e escolher um líder. Testa o protocolo num grupo de quatro computadores, variando o número de réplicas (1 a 15) e de clientes (1 a 64) e medindo latência e vazão. A introdução e a seção 2 explicam o que são contêineres, o Docker e o Kubernetes, e é essa parte que interessa ao TCC. O protocolo em si (consenso, tolerância a falhas por queda) não tem relação com o sistema supervisório.

## Afirmações que dá para citar (com página)
- p.1: a virtualização trouxe o provisionamento rápido de recursos aos data centers e o modelo de pagamento por uso. Os serviços em data centers costumam ser chamados de computação em nuvem, definida pelo NIST como modelo de acesso à rede sob demanda a recursos computacionais que podem ser rapidamente provisionados e liberados.
- p.1: contêineres alocam recursos mais rápido que máquinas virtuais (citando Felter et al.). "Entre as implementações de contêineres, o Docker é provavelmente a mais adotada" (citando Peinl et al., 2016). Esta é a frase ("probably the most adopted") que sustenta, com cautela ("provavelmente"), a ideia de Docker como o mais difundido.
- p.1: o Kubernetes é um sistema de gerência de contêineres de código aberto, ligado à experiência do Borg (Google). Ele pode replicar contêineres para melhorar a disponibilidade; quando um contêiner falha, o Kubernetes o recria a partir de uma imagem predefinida, mas o estado do contêiner que falhou não é restaurado; aplicações podem usar volumes externos para guardar estado, mas é preciso protegê-los contra falhas e tratar concorrência.
- p.2: "Contêineres são máquinas virtuais (VM) instanciadas a partir de imagens estáticas." Contêineres são normalmente sem estado (stateless), no sentido de que o estado se perde quando são desligados. As imagens costumam ser pequenas, porque só guardam os arquivos que não existem no hospedeiro (sistema de arquivos em camadas, como AuFS), o que torna a criação mais rápida e o provisionamento mais eficiente que o de VMs tradicionais. Exemplo de gerenciador de contêineres: Docker.
- p.2: em ambientes de grande escala é essencial ter uma plataforma para gerenciar muitos contêineres; descrição da arquitetura do Kubernetes (nós, POD, proxy, kubelet, etcd, kubectl).
- p.2-3: a coordenação entre réplicas pode ser feita no nível da aplicação (Raft, BFT-SMaRt), mas isso aumenta o tamanho da imagem e a complexidade; propõe integrar a coordenação ao Kubernetes.
- p.3-4 (protocolo DORADO), p.4 (avaliação), p.5 (trabalhos relacionados), p.5-6 (conclusão): detalhes do protocolo, do experimento (cluster de 4 computadores, Kubernetes 1.1.7, latência maior com mais réplicas, RAM disk reduz latência) e comparação com Raft, Gaios, CRANE.

## O que a referência NÃO diz (e alguém poderia supor)
- Não diz que Docker é "a ferramenta de contêineres mais difundida" sem ressalva: diz "provavelmente a mais adotada", citando outro trabalho (Peinl et al.). Citar como "o mais difundido" é um pouco mais forte que o original.
- Não fala de Docker Compose, de sistemas supervisórios, de SCADA, de Modbus ou de segurança de contêineres (só menciona, no fim, que são necessárias camadas adicionais de segurança contra agentes maliciosos, p.5).
- Não afirma que a mesma imagem "executa de forma idêntica" em máquina local, servidor e nuvem; fala em imagem estática, criação rápida e contêiner sem estado. A portabilidade entre ambientes não é o tema do artigo.
- Não define "imagem" formalmente além de "imagens estáticas" e "arquivos que não existem no hospedeiro" (p.2).
- Raft, Paxos, etcd e Kubernetes aparecem em toda a seção 3 em diante; a decisão do autor do TCC é não citar nada disso no texto.

## Em que partes do TCC é citada
Introdução 13_1: linha 52; 13_2: linha 9. Cap. 2 (14_1): linhas 104 e 143. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`.
