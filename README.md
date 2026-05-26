# BiblioSystem — Sistema de Biblioteca (React + Vite)

Descrição
----------------
Este é o front-end do BiblioSystem: uma interface leve para gerenciar empréstimos, reservas e perfil de usuários de uma biblioteca. O projeto usa React com Vite para desenvolvimento rápido e build otimizado.

Pré-requisitos
--------------
- Node.js (recomendado >= 18)
- npm (ou yarn/pnpm se preferir)

Instalação
----------
1. Clone o repositório:

```bash
git clone https://github.com/MateusC2/P.I-DSM-FRONT.git
cd P.I-DSM-FRONT
```

2. Instale dependências:

```bash
npm install
```

Scripts úteis
-------------
- Iniciar em desenvolvimento (HMR):

```bash
npm run dev
```

Arquitetura e estilos
---------------------
- O projeto é baseado em páginas e componentes dentro de `src/`.
- Para simplificar o deploy e evitar dependências externas, os estilos foram consolidados: as regras globais e tokens (variáveis CSS) ficam em `src/App.jsx` (inseridas via um bloco `<style>`), e os estilos específicos de cada componente/página foram adicionados ao próprio arquivo `.jsx` no final do componente. Isso significa que não há mais arquivos `.css` externos no repositório.


Dicas rápidas
---------------
- Porta padrão do Vite: abra http://localhost:5173 após `npm run dev`.


 Link de Deploy
-----------------
- Vercel: https://pi-dsm.vercel.app/login

Autores
-------
- [@MateusC2](https://github.com/MateusC2)
