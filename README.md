# Sistema de Preservação Digital

Este é um sistema completo de front-end e back-end para cadastro, visualização, filtragem e simulação da preservação de documentos digitais.

## 🛠 Tecnologias Utilizadas

- **Front-end:** Next.js 13 com App Router (React + TailwindCSS)
- **Back-end:** NestJS + Prisma + PostgreSQL
- **Autenticação:** JWT
- **Persistência:** Docker (para banco de dados PostgreSQL)
- **Simulação de Preservação:** Lógica baseada no fluxo do Archivematica

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js](https://nodejs.org/) (v18 ou superior)

---

### 🔧 Subindo os containers com Docker

1. No diretório do projeto (onde está o `docker-compose.yml`), execute:

```bash
docker-compose up -d --build
Isso irá subir os serviços de banco de dados PostgreSQL utilizados pelo sistema.

📦 Back-end
Acesse a pasta back-end:

cd back-end

Instale as dependências:
npm install

Execute as migrações do banco com Prisma:

npx prisma migrate dev

Inicie o servidor:

npm run start


💻 Front-end
Acesse a pasta front-end:

cd front-end

Instale as dependências:

npm install
Rode o projeto:

npm run dev


⚠️ Sobre o Archivematica
Durante o desenvolvimento, a integração direta com o Archivematica não foi possível por incompatibilidades de ambiente, especialmente no uso de containers e restrições em ambientes como o Google Cloud Shell, que foram testados sem sucesso.

✅ Simulação de Preservação
Como alternativa, foi implementado um mecanismo de simulação, que simula o comportamento do Archivematica ao preservar um documento:

A cada envio de documento, o sistema:

Gera um sipId aleatório (como o Archivematica faria).

Define aleatoriamente um status de preservação: Preservado, Iniciada ou Falha.

Atualiza o documento com esses valores para simular a resposta do processo de preservação.

Essa lógica está implementada no serviço do NestJS (DocumentService.ts) e pode ser adaptada facilmente no futuro para se conectar com o Archivematica real via API REST.

🧪 Funcionalidades
Cadastro e autenticação de usuários

Upload e simulação de preservação de documentos

Filtros por metadados e datas

Visualização detalhada de cada documento

Download de documentos preservados

Ações protegidas com autenticação JWT

📝 Considerações Finais
Este projeto foi desenvolvido com o objetivo de demonstrar um fluxo completo de preservação digital, com possibilidade de integração futura ao Archivematica real.

Se desejar testar a integração real com o Archivematica, será necessário um ambiente compatível com seus serviços (Linux bare-metal ou VM dedicada com Docker completo).