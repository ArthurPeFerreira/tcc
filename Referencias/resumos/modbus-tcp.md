# Modbus Organization, Modbus Messaging on TCP/IP Implementation Guide V1.0b

## Dados
- Autor: Modbus Organization. Versão 1.0b, 24/out/2006 (o `.bib` diz 2012). 46 páginas; a numeração "N/46" é a página do PDF.
- Chave no `.bib`: `MODBUS_TCP_IMPLEMENTATION_GUIDE`. Sem PDF na pasta `Referencias`. O link do `.bib` e de `sites.txt` (modbus.org/docs/...) dá erro 404. Baixei o documento pelo link novo `https://www.modbus.org/file/secure/messagingimplementationguide.pdf` e extraí o texto com `pypdf`. A cópia local ficou na pasta temporária da ferramenta, **não** em `Referencias\`.
- Leitura: sumário e páginas 2, 5-8 e busca por palavra-chave. O documento inteiro (46 páginas) **não** foi lido; as seções 4.2 a 4.4 (gerência de conexões TCP e uso da pilha TCP/IP) foram só varridas.

## Do que trata
Guia de implementação do Modbus sobre TCP/IP (Ethernet). Descreve o modelo cliente/servidor em quatro tipos de mensagem entre dispositivos numa rede Ethernet TCP/IP, o formato da unidade de dados de aplicação (ADU), o cabeçalho MBAP, os códigos de função e a arquitetura de componentes (cliente, servidor, gateway), mais gerência de conexões TCP.

## Afirmações que dá para citar (página do PDF)
- p.2: o serviço de mensagens Modbus oferece comunicação cliente/servidor entre dispositivos numa rede Ethernet TCP/IP, baseada em quatro tipos de mensagem.
- p.5-6: o cabeçalho MBAP inclui um identificador de unidade (Unit Identifier) de um byte; as ADU Modbus/TCP são enviadas por TCP à porta registrada 502; os campos são codificados em big-endian (p.6).
- p.8: o modelo de dados tem quatro blocos: Discretes Input (1 bit, só leitura), Coils (1 bit, leitura e escrita), Input Registers (palavra de 16 bits, só leitura) e Holding Registers (palavra de 16 bits, leitura e escrita).
- p.6: os códigos de função padrão estão descritos no Modbus Application Protocol Specification.

## O que NÃO diz
- Não usa "input coils": o bloco de 1 bit só de leitura chama-se **Discretes Input** (p.8). O TCC (14_1 linha 281) escreve "coils e input coils".
- Não trata de valores de 32 ou 64 bits nem de ordem de bytes ou palavras dos dados (a única menção é a codificação big-endian dos campos do cabeçalho); a afirmação do TCC (14_1 linha 285) de que a ordem varia entre fabricantes não vem desta fonte.
- Não traz análise de tempo de ciclo de polling nem recomendação de agrupar registradores (a busca não retornou trecho).
- É específico de Modbus sobre TCP/IP; regras da linha serial estão em outro documento.
- Usa cliente/servidor como terminologia principal (p.2), não master/slave.

## Em que partes do TCC é citada
Cap. 2 (14_1): linhas 279, 281. Cap. 3 (14_2): linhas 197, 285. Cap. 4 (14_3): linha 113. Cap. 5 (14_4): linha 86. Cap. 6 (14_5): linha 68.
