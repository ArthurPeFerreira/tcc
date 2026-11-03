# Modbus Organization, Modbus over Serial Line Specification and Implementation Guide V1.02

## Dados
- Autor: Modbus Organization. Versão 1.02, 20/dez/2006 (o `.bib` diz 2012). 44 páginas; "N/44" é a página do PDF.
- Chave no `.bib`: `MODBUS_SERIAL_SPEC`. Sem PDF na pasta `Referencias`. O link do `.bib` e de `sites.txt` dá 404; usei `https://www.modbus.org/file/secure/modbusoverserial.pdf` e extraí o texto com `pypdf` (cópia na pasta temporária da ferramenta, não em `Referencias\`).
- Leitura: sumário e páginas 5, 7 e 12, mais busca de palavras-chave. O documento inteiro **não** foi lido.

## Do que trata
Especificação do Modbus em linha serial: protocolo mestre-escravos, modos de transmissão RTU e ASCII, camada física (RS485, RS232), formato dos caracteres, endereçamento e classes de implementação.

## Afirmações que dá para citar (página do PDF)
- p.5: a camada física pode usar RS485 e RS232; a interface de dois fios TIA/EIA-485 é a mais comum, e a de quatro fios pode ser implementada como opção.
- p.7: protocolo mestre-escravos; apenas um mestre por vez no barramento e de um a no máximo 247 escravos; toda comunicação é iniciada pelo mestre; cada escravo tem endereço único de 1 a 247; em difusão (broadcast) o mestre fala com todos e não há resposta.
- p.12 (modo RTU): 11 bits por byte: 1 de início, 8 de dados, 1 de paridade e 1 de parada. Paridade par é exigida, outros modos (ímpar, sem paridade) podem ser usados; recomenda-se suportar também sem paridade; o modo padrão deve ser paridade par; sem paridade exige 2 bits de parada. Logo o formato padrão é 8E1.

## O que NÃO diz
- Não trata de Modbus sobre TCP/IP (outro documento).
- Não fala do papel duplo do CLP (servidor para o supervisório, mestre para o inversor).

## Em que partes do TCC é citada
Cap. 6 (14_5): linhas 68 e 140.
