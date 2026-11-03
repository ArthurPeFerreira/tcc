# Netto et al. (2017), Coordenação de Containers no Kubernetes: Uma Abordagem Baseada em Serviço

## Dados
- Autores: Hylson Vescovi Netto, Caio Pereira Oliveira, Aldelir Fernando Luiz, Lau Cheuk Lung, Luciana de Oliveira Rech, José Roque Betiol Júnior (UFSC e IFC Blumenau). Ano: 2017. Tipo: artigo de simpósio, SBRC (Simpósio Brasileiro de Redes de Computadores e Sistemas Distribuídos), 14 páginas no PDF, sem numeração impressa (uso a página do PDF).
- Chave no `.bib`: `NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES`. Arquivo: `Referencias\Netto, Hylson Vescovi et al., 2017.pdf`.
- Lido: documento inteiro. Observação técnica: o PDF tem um cabeçalho de rodapé com fonte não extraível (símbolos); o texto principal foi extraído normalmente.

## Do que trata (linguagem simples)
Propõe uma arquitetura chamada CAIUS para manter o estado de aplicações replicadas em contêineres do Kubernetes: uma camada de coordenação, separada da aplicação ("como serviço"), ordena os pedidos que alteram estado usando o protocolo Raft e depois os entrega às réplicas da aplicação. Leituras podem ir direto à aplicação. Faz experimentos num cluster de quatro computadores com 16 clientes escritores e 256 leitores. A parte que interessa ao TCC é a seção 2, que revisa virtualização por contêineres (origem, diferença para máquina virtual, estado perdido ao encerrar, necessidade de gerenciador) e a seção 3.1/4.1 que mencionam Docker como implementação. O resto (Raft, consistência forte e eventual) não tem relação com o supervisório.

## Afirmações que dá para citar (com página do PDF)
- p.1 (introdução): computação em nuvem [Mell e Grance 2011] cresce e leva ao uso extensivo da virtualização para o provisionamento dinâmico de recursos; um dos motivos de adoção é o isolamento das cargas de trabalho e algum controle sobre os recursos provisionados.
- p.2: a virtualização baseada em contêineres lança instâncias isoladas umas das outras na mesma instância do sistema operacional, cada contêiner com sua própria abstração de recursos; não precisa de sistema operacional separado nem de monitor de máquinas virtuais. "Uma das implementações mais populares na atualidade é o Docker" (citando Bernstein 2014), extensão do LXC.
- p.2: a implementação nativa do Docker não provê gerenciamento/orquestração/integração dos contêineres num cluster; o Kubernetes (criado por engenheiros do Borg, Google, no âmbito da CNCF) controla o ciclo de vida de contêineres num cluster; replica contêineres para melhorar a disponibilidade; contêiner com falha é recriado, mas o estado da aplicação não é recuperado; isso pode ser feito com volumes externos, desde que protegidos contra falhas e com controle de acesso concorrente.
- p.2: virtualização é a abstração dos recursos físicos de um sistema para criar ambiente computacional virtual que melhora o aproveitamento dos recursos.
- p.3: origem: a virtualização baseada em contêineres surgiu no FreeBSD (extensão do chroot, "jail"); a Sun incorporou ao Solaris como "zone". Semelhante às tecnologias tradicionais (VMware, Xen) por permitir que aplicações rodem isoladas no mesmo sistema; mas a virtualização tradicional exige um sistema operacional completo (convidado) em cada VM, enquanto o contêiner compartilha o núcleo (kernel) do hospedeiro e isola os processos. Contêineres virtualizam o próprio sistema operacional em vez do hardware.
- p.3: contêineres têm maior dinamicidade no ciclo de vida (basta iniciar ou destruir processos num espaço isolado); instanciação e provisionamento de recursos são bem mais rápidos que em VMs; ganham também por portabilidade e uso racional de recursos (consome recursos só quando uma instância é lançada).
- p.3: "um contêiner é caracterizado como uma máquina virtual sem estado, uma vez que as imagens pelas quais instanciam-se os contêineres são estáticas"; quando o contêiner é encerrado, perde-se o estado dele e das aplicações que rodavam nele.
- p.4: as implementações atuais de contêineres (exemplos: Docker, Shifter) não têm suporte para gerenciar instâncias em cluster; Kubernetes administra o ciclo de vida; funções: controle de admissão, balanceamento de recursos, descoberta de serviços entre contêineres, publicação de serviço, balanceamento de carga. Arquitetura (nós, POD, firewall, proxy, kubelet, etcd, kubectl) e distribuição por Round Robin.
- p.5: etcd guarda o estado do cluster; o estado da aplicação no contêiner não é preservado ao ser desativado.
- p.6-9: arquitetura CAIUS (coordenação por serviço, Raft, fila de requisições, threads por réplica) e exemplo de passos numerados do pedido (1 a 7) da Figura 3 (formato de texto que percorre os passos de um diagrama).
- p.10-11: ambiente de teste (cluster com 4 microcomputadores, Docker, Kubernetes 1.1.7, aplicação "logger"); resultados (latência média ~39 a 43 ms para escritores).
- p.13: conclusão: a virtualização em nível de sistema (contêineres) é tendência nos provedores de nuvem; sobrecarga do Raft em Docker/Kubernetes ~17,4% frente a máquina física (de Oliveira et al. 2016).

## O que a referência NÃO diz (e alguém poderia supor)
- Não diz que o Docker é "o mais difundido": diz "uma das implementações mais populares" (p.2).
- Não diz que a mesma imagem executa de forma idêntica em qualquer ambiente; fala de imagens estáticas e portabilidade (p.3), sem detalhar "do computador ao servidor ao provedor de nuvem".
- Não menciona Docker Compose, "volumes nomeados" de forma específica (só volumes externos, p.2), nem sistemas supervisórios, SCADA ou Modbus.
- Não trata de segurança de contêineres.
- O artigo é sobre replicação de estado com Raft/Kubernetes; a decisão do autor do TCC é não citar Kubernetes, Raft e orquestradores no texto, então só a parte de definição de virtualização/contêiner/imagem é aproveitável.
- A "imagem" é definida só como "estática", sem uma definição formal (conjunto de camadas/arquivos) nesta fonte; a descrição em camadas aparece em Netto 2016 (p.2).

## Em que partes do TCC é citada
Introdução 13_1: linha 52; 13_2: linha 9. Cap. 2 (14_1): linhas 104, 106, 140, 143. Cap. 3 (14_2): linhas 154 e 219. Resultado da conferência: ver `01_REVISAO_DO_TEXTO.md`.
