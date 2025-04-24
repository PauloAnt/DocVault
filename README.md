# 📂 Sistema de Preservacao Digital

---

## 🛠 Tecnologias Utilizadas

- **Front-end:** Next.js 13 (App Router) + React + TailwindCSS  
- **Back-end:** NestJS + Prisma + PostgreSQL  
- **Autenticação:** JWT  
- **Persistência:** Docker (PostgreSQL)  
- **Simulação de Preservação:** Lógica baseada no fluxo do Archivematica  

---

## 🚀 Como Executar o Projeto

### ⚙️ Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js (v18+)](https://nodejs.org/)

### 🔧 Subindo os containers com Docker

No diretório raiz do projeto (onde está o `docker-compose.yml`), execute:

```bash
docker-compose up -d --build
```

Isso iniciará os serviços, incluindo o banco de dados PostgreSQL.

---

## 📦 Back-end

1. Acesse a pasta do back-end:
    ```bash
    cd back-end
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute as migrações do banco de dados:
    ```bash
    npx prisma migrate dev
    ```

4. Inicie o servidor:
    ```bash
    npm run start
    ```

---

## 💻 Front-end

1. Acesse a pasta do front-end:
    ```bash
    cd front-end
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Rode o projeto:
    ```bash
    npm run dev
    ```

---

## ✅ Simulação de Preservação

Como a integração com o **Archivematica** não foi possível devido a incompatibilidades de ambiente, foi implementado um **mecanismo de simulação**:

A cada envio de documento:
- Um `sipId` aleatório é gerado (como o Archivematica faria).
- Um **status de preservação** é definido aleatoriamente: `Preservado`, `Iniciada` ou `Falha`.
- O documento é atualizado com esses dados, simulando o comportamento real.

> A lógica está implementada no `DocumentService.ts` (NestJS) e pode ser facilmente adaptada para uma integração real via API REST.

---

## 🧚‍♂️ Funcionalidades

- Cadastro e autenticação de usuários  
- Upload de documentos com simulação de preservação  
- Filtros por metadados e datas  
- Visualização detalhada de documentos  
- Download de documentos preservados  
- Ações protegidas por autenticação JWT  

---

## ⚠️ Considerações sobre o Archivematica

> A integração direta com o Archivematica requer um ambiente compatível (ex: Linux bare-metal ou VM com Docker completo). Ambientes testados como Google Cloud Shell apresentaram restrições.

---

## 📝 Considerações Finais

Este projeto tem como objetivo demonstrar um **fluxo completo de preservação digital**, com possibilidade futura de **integração real com o Archivematica**.

