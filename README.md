# ⏳ Comodo - Gerenciador de Tempo

## 📝 Sobre o Projeto

O **Comodo** é uma aplicação web desenvolvida para auxiliar no gerenciamento de tempo e produtividade. Com um sistema de **timer**, permite aos usuários adicionar projetos e acompanhar suas atividades em diferentes estados, garantindo um melhor controle sobre as tarefas realizadas.

## 🚀 Funcionalidades

- **⏱ Timer para Projetos:**
  - Adicione projetos e defina um tempo para trabalhar neles.
  - Controle o progresso dos projetos com um **timer dinâmico**.
- **📊 Estados dos Projetos:**
  - **Em andamento**: Projetos que ainda estão sendo trabalhados.
  - **Concluído**: Projetos finalizados com sucesso.
  - **Interrompido**: Projetos pausados ou cancelados.
- **📜 Página de Histórico:**
  - Consulte a lista de projetos concluídos ou interrompidos.
  - Veja detalhes sobre a duração de cada atividade e o status final.

## 🛠️ Tecnologias Utilizadas

- **React** + **TypeScript** para a interface interativa.
- **Styled Components** para estilização moderna.
- **Context API** para gerenciamento de estado global.
- **React Hook Form + Zod** para validação de formulários.

## 📸 Capturas de Tela
![Foto da Página Inicial](https://github.com/Matheus1415/ignite-timer/blob/main/timer.png)
![Foto da Página de historico de atividades](https://github.com/Matheus1415/ignite-timer/blob/main/history.png)

## 📁 Estrutura do Projeto

```bash
src/
├── @types/                   # Definições de tipos para estilização e outros.
├── assets/                   # Imagens, ícones e outros recursos estáticos.
├── components/               # Componentes reutilizáveis da aplicação.
├── contexts/                 # Context API para gerenciamento global de estados.
│   ├── CyclesContext.tsx     # Contexto para ciclos de trabalho.
├── layouts/                  # Layouts padrões da aplicação.
│   ├── DefaultLayout/        # Layout padrão usado nas páginas.
│   │   ├── index.tsx         # Componente principal do layout.
│   │   ├── styles.ts         # Estilos do layout.
├── pages/                    # Páginas principais da aplicação.
│   ├── Home/                 # Página inicial do app.
│   │   ├── index.tsx         # Componente principal da Home.
│   │   ├── styles.ts         # Estilos da Home.
├── reducers/                 # Reducers para controle do estado da aplicação.
│   ├── cycles/               # Reducer e actions para ciclos.
│   │   ├── actions.ts        # Ações relacionadas aos ciclos.
│   │   ├── reducer.ts        # Redutor para ciclos.
├── styles/                   # Estilos globais e temas.
│   ├── global.ts             # Estilos globais do app.
│   ├── themes/               # Temas da aplicação.
│   │   ├── default.ts        # Tema padrão.
├── App.tsx                   # Componente principal da aplicação.
├── main.tsx                  # Ponto de entrada do React.
├── vite.config.ts 

```

## 📦 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Matheus1415/ignite-timer.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o projeto:
   ```bash
   npm run dev
   ```

Agora o aplicativo estará rodando em `http://localhost:5173/` (ou outra porta configurada).
