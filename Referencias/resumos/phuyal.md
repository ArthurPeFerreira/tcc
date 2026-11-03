# Phuyal et al. (2020), Design and Implementation of Cost Efficient SCADA System for Industrial Automation

## Dados
- Autores: Sudip Phuyal, Diwakar Bista, Jan Izykowski, Rabindra Bista (Kathmandu University, Nepal; Wroclaw University of Science and Technology, Polônia). Ano: 2020. Tipo: artigo de periódico, *International Journal of Engineering and Manufacturing* 10(2), p. 15-28. DOI 10.5815/ijem.2020.02.02. 14 páginas no PDF.
- Chave no `.bib`: `PHUYAL2020_COST_EFFICIENT_SCADA`. Arquivo: `Referencias\Phuyal et al., 2020.pdf`.
- Lido: documento inteiro. Conversão de páginas: página impressa = página do PDF + 14 (PDF 1 = p.15). Abaixo uso a impressa, com a do PDF entre colchetes.

## Do que trata (linguagem simples)
Os autores argumentam que o SCADA comercial é caro e fora do alcance de pequenas e médias indústrias, e propõem um SCADA próprio, feito em C# (Windows, Visual Studio 2013), que conversa por Modbus (via RS-485 entre o CLP e os inversores de frequência, e rede Ethernet entre o computador e o CLP) com um CLP Schneider M221 e com inversores de frequência (VFD), controlando motores de máquinas de uma fábrica de macarrão em Banepa, Nepal. O programa também envia dados a um servidor de IoT (hospedado temporariamente no Google Firebase) e há um aplicativo Android. A tela principal mostra, por motor, frequência e velocidade ajustadas, frequência de saída, corrente, tensão do barramento CC e sentido de giro. Concluem que o sistema funcionou e que custa muito menos que um produto comercial (sem medir o custo em números).

## Afirmações que dá para citar (com página)
- p.15 [1] (resumo): o custo de implantar SCADA é elevado e "não está ao alcance" de pequenas e médias indústrias; um SCADA customizado reduz custo de software.
- p.16 [2]: SCADA é a integração de componentes de software e hardware para supervisão e controle de processos, remotamente ou localmente; o crescimento do uso é limitado, para pequenas e médias indústrias, pelos custos altos; reduzir o custo (inclusive com ferramentas de código aberto) amplia o acesso; a personalização também é possível.
- p.17 [3]: "a maior complexidade" do SCADA para pequena e média indústria é o custo de instalação e a compatibilidade do sistema; um SCADA deve ter segurança, visualização, controle de parâmetros, tratamento automático do processo e sistema de alertas.
- p.17 [3]: trabalhos relacionados: SCADA web de baixo custo (Aghenta e Iqbal, Mercurio et al.), Alihussein (teste de meios de comunicação, concluindo que RS-485 é mais fácil de interligar em ambiente industrial), Ahmed [9] (SCADA web em tempo real em interface web dinâmica; ver ficha de Abbas 2011), outros com Arduino, Zigbee, STM32, OpenSCADA e OPC UA.
- p.18 [4]: sistema proposto em C#, comunicação com a nuvem IoT por protocolo de internet com criptografia ponta a ponta; acesso por celular após login com chave de API pré-compartilhada e senha; operação em múltiplos dispositivos; dados de operação gravados na nuvem; relatórios. O CLP liga-se ao inversor por Modbus em RS-485; o CLP e o computador SCADA ficam na mesma rede local por Ethernet.
- p.19-20 [5-6]: testes em fábrica (Himalayan Snacks and Noodles, Banepa); software controla três estações de máquinas, expansível; a tela principal mostra estado da conexão do CLP e do servidor IoT, IP local; para cada motor, frequência e velocidade ajustadas e monitoradas (frequência de saída, corrente de saída, tensão do barramento CC, sentido de giro); é possível aumentar/diminuir a velocidade por botões, e configurar IP (192.168.1.4) e porta (502) do CLP.
- p.21-22 [7-8]: lógica de comando em XOR entre botoeira local e SCADA; os inversores comunicam em RS-485 em paralelo com endereços de dispositivo 1, 2 e 3; leitura ou escrita por mensagens a cada dispositivo.
- p.23 [9]: servidor IoT temporariamente no Google Firebase para testes, acesso por chave de API e senha; aplicativo Android.
- p.24 [10]: Tabela 1: aquisição de dados de corrente e tensão de dois motores em função da frequência (10 a 50 Hz). Mobile permite ver dados, mudar parâmetros e ligar/desligar máquinas de forma remota.
- p.25 [11]: conclusão: o sistema de baixo custo funcionou em planta; "pode ser implantado facilmente em pequenas e médias indústrias" com investimento muito baixo comparado a produtos comerciais; redução de mão de obra e de tempo de decisão; futura inclusão de alertas por SMS.

## O que a referência NÃO diz (e alguém poderia supor)
- Não quantifica o custo (nenhum valor em dinheiro, nenhuma comparação numérica com produtos comerciais).
- Não é uma arquitetura de microsserviços, nem usa contêineres, nem banco relacional/Redis; é uma aplicação de desktop em C#. Não diz nada sobre código aberto "licenças" no sentido que uma citação sobre licenças exigiria, além de mencionar que ferramentas open source reduzem custo (p.16) e trabalhos relacionados usando OpenSCADA.
- Não trata de cargos/níveis de acesso, alarmes configuráveis, histórico em banco de dados nem escalabilidade.
- Não detalha o servidor IoT (hospedado "temporariamente" no Firebase).
- A palavra "Modbus" aparece com RS-485 e Ethernet, sem distinguir variantes; não é guia do protocolo.
- O texto cita "comparável aos softwares pagos" (p.16), mas não mostra comparação de desempenho.

## Em que partes do TCC é citada
Introdução 13_2: linha 5. Cap. 2 (14_1): linha 10. Cap. 3 (14_2): linha 158. Cap. 7 (14_6): linha 512. Conclusão (15): linha 4. Nota: o bench do trabalho (CLP Schneider M221 e inversor) é parecido com a bancada do TCC; vale conferir se a similaridade entra no texto como contraponto.
