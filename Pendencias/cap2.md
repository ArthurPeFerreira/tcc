# Pendências do capítulo 2 (Conceitos e tecnologias)

## Siglas (colar em `Configurações/Commands.tex`)

```latex
\newsigla{smr}{SMR}{State Machine Replication}{replicação de máquinas de estados}
\newsigla*{jwt}{JWT}{JSON Web Token}{}
\newsigla*{rbac}{RBAC}{Role-Based Access Control}{controle de acesso baseado em cargos}
```

Siglas já existentes e usadas: scada, rf, ta, ti, iot, iiot, m2m, cps, soa, ttl, ram, sql, http, rest, json, tcp, ihm.

## Referências (colar em `Referencias.bib`)

As três chaves do orientador (`NETTO2016_STATE_MACHINE_REPLICATION_KUBERNETES`, `NETTO2017_COORDENACAO_CONTAINERS_KUBERNETES`, `NETTO2019_RAFT_KUBERNETES`) são citadas, mas não estavam no `.bib` no momento da escrita. Conferir se o agente da base as registrou.

Conferir URLs, datas de acesso e dados bibliográficos antes de fechar (as entradas abaixo foram escritas de memória e não foram verificadas na fonte).

```bibtex
@online{DOCKER_DOCS,
  author       = {{Docker Inc.}},
  title        = {Docker Documentation},
  organization = {Docker Inc.},
  url          = {https://docs.docker.com/},
  urldate      = {2026-10-16}
}

@online{KUBERNETES_DOCS,
  author       = {{The Kubernetes Authors}},
  title        = {Kubernetes Documentation},
  organization = {Cloud Native Computing Foundation},
  url          = {https://kubernetes.io/docs/},
  urldate      = {2026-10-16}
}

@inproceedings{ONGARO2014_RAFT,
  author    = {Ongaro, Diego and Ousterhout, John},
  title     = {In Search of an Understandable Consensus Algorithm},
  booktitle = {Proceedings of the USENIX Annual Technical Conference},
  year      = {2014},
  pages     = {305--319},
  publisher = {USENIX Association}
}

@online{BULLMQ_DOCS,
  author       = {{Taskforce.sh Inc.}},
  title        = {BullMQ Documentation},
  organization = {Taskforce.sh},
  url          = {https://docs.bullmq.io/},
  urldate      = {2026-10-16}
}

@online{NODEJS_DOCS,
  author       = {{OpenJS Foundation}},
  title        = {Node.js Documentation},
  organization = {OpenJS Foundation},
  url          = {https://nodejs.org/docs/latest/api/},
  urldate      = {2026-10-16}
}

@online{TYPESCRIPT_DOCS,
  author       = {{Microsoft}},
  title        = {TypeScript Documentation},
  organization = {Microsoft},
  url          = {https://www.typescriptlang.org/docs/},
  urldate      = {2026-10-16}
}

@online{FASTIFY_DOCS,
  author       = {{OpenJS Foundation}},
  title        = {Fastify Documentation},
  organization = {Fastify},
  url          = {https://fastify.dev/docs/latest/},
  urldate      = {2026-10-16}
}

@online{ZOD_DOCS,
  author       = {Colin McDonnell},
  title        = {Zod Documentation},
  organization = {Zod},
  url          = {https://zod.dev/},
  urldate      = {2026-10-16}
}

@online{REACT_DOCS,
  author       = {{Meta Platforms}},
  title        = {React Documentation},
  organization = {Meta Platforms},
  url          = {https://react.dev/},
  urldate      = {2026-10-16}
}

@techreport{RFC9106_ARGON2,
  author      = {Biryukov, Alex and Dinu, Daniel and Khovratovich, Dmitry and Josefsson, Simon},
  title       = {Argon2 Memory-Hard Function for Password Hashing and Proof-of-Work Applications},
  type        = {RFC},
  number      = {9106},
  institution = {Internet Engineering Task Force},
  year        = {2021},
  url         = {https://www.rfc-editor.org/rfc/rfc9106},
  urldate     = {2026-10-16}
}

@techreport{RFC7519_JWT,
  author      = {Jones, Michael and Bradley, John and Sakimura, Nat},
  title       = {JSON Web Token (JWT)},
  type        = {RFC},
  number      = {7519},
  institution = {Internet Engineering Task Force},
  year        = {2015},
  url         = {https://www.rfc-editor.org/rfc/rfc7519},
  urldate     = {2026-10-16}
}

@online{OWASP_CHEATSHEETS,
  author       = {{OWASP Foundation}},
  title        = {OWASP Cheat Sheet Series: Session Management, JSON Web Token e Authentication},
  organization = {OWASP Foundation},
  url          = {https://cheatsheetseries.owasp.org/},
  urldate      = {2026-10-16}
}

@online{WEBASSEMBLY_SPEC,
  author       = {{World Wide Web Consortium}},
  title        = {WebAssembly Core Specification},
  organization = {W3C},
  url          = {https://webassembly.github.io/spec/core/},
  urldate      = {2026-10-16}
}

@inproceedings{HAAS2017_WEBASSEMBLY,
  author    = {Haas, Andreas and Rossberg, Andreas and Schuff, Derek L. and Titzer, Ben L. and Holman, Michael and Gohman, Dan and Wagner, Luke and Zakai, Alon and Bastien, J. F.},
  title     = {Bringing the Web up to Speed with WebAssembly},
  booktitle = {Proceedings of the 38th ACM SIGPLAN Conference on Programming Language Design and Implementation},
  year      = {2017},
  pages     = {185--200},
  doi       = {10.1145/3062341.3062363}
}

@online{QUICKJS_DOCS,
  author       = {Bellard, Fabrice and Gordon, Charlie},
  title        = {QuickJS Javascript Engine},
  url          = {https://bellard.org/quickjs/},
  urldate      = {2026-10-16}
}

@online{WASMTIME_DOCS,
  author       = {{Bytecode Alliance}},
  title        = {Wasmtime Documentation},
  organization = {Bytecode Alliance},
  url          = {https://docs.wasmtime.dev/},
  urldate      = {2026-10-16}
}

@online{ISA101_2015_HMI,
  author       = {{International Society of Automation}},
  title        = {ANSI/ISA-101.01-2015: Human Machine Interfaces for Process Automation Systems},
  organization = {ISA},
  year         = {2015},
  url          = {https://www.isa.org/standards-and-publications/isa-standards/isa-standards-committees/isa101},
  urldate      = {2026-10-16}
}

@online{CHONG2006_MULTITENANT,
  author       = {Chong, Frederick and Carraro, Gianpaolo},
  title        = {Architecture Strategies for Catching the Long Tail},
  organization = {Microsoft MSDN},
  year         = {2006},
  urldate      = {2026-10-16},
  note         = {Conferir título exato e URL antes de fechar. Alternativa: Chong, Carraro e Wolter, Multi-Tenant Data Architecture, Microsoft, 2006}
}
```

## Pontos para o autor conferir

- Toda a conta do tempo de transação Modbus RTU (33 bytes, 363 bits, cerca de 46 ms a 9600 bit/s) é cálculo próprio, sem citação. Conferir se a bancada usa a mesma taxa.
- A seção de IHM cita o `ISA101_2015_HMI` para a hierarquia de telas e para as diretrizes gerais. O resumo do artigo da Elipse (`ELIPSE_IHM_ALTA_PERFORMANCE`) trata de cores, indicadores analógicos e layouts, mas não de níveis de navegação.
- `CHONG2006_MULTITENANT` precisa de verificação: as três estratégias de multi-inquilino (banco compartilhado e tabelas compartilhadas, esquemas separados, banco por cliente) são conhecidas, mas a entrada bibliográfica foi escrita de memória.
