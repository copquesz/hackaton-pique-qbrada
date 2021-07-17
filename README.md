# PiqueQbrada

Projeto desenvolvido para um hackaton realizado pela Abracorp em parceria com a Universidade São Judas Tadeu utilizando HTML, CSS e Angular 11.2.3.

## Ilustrações
| Home | Sobre | Calendário | Blog | Blog Detalhe |
 | --- | --- | --- | --- | --- |
 | ![Home](/src/assets/images/build/1.png) | ![Sobre](/src/assets/images/build/2.png) | ![Calendário](/src/assets/images/build/3.png) | ![Blog](/src/assets/images/build/4.png) | ![Blog Detalhe](/src/assets/images/build/5.png)

## Rodando Localmente
Execute `ng serve` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem. 

Execute `ng generate component-name` para gerar um novo componente. Você também pode usar `ng generate Directive | pipe | service | class | guard | interface | enum | module`. 

## Estrutura
Utilizado design pattern Core, Shared, Features;
- `src\app\@core`: Módulo de modelos e serviços para fake back-end;
- `src\app\@pages`: Componente que buildam a view;
- `src\app\@shared`: Componentes e funcionalidades compartilhadas;
- `src\assets`: Arquivos estáticos como fontes, imagens, bibliotecas de terceiros;
- `package.json`: Gerenciador de Dependências;
- `tsconfig.json`: Configuração de Typescript;
- `angular.json`: Configuração Angular Frameworks;
- `tslint.json`: Configuração de Rules e Style Guide.

## Rotas
- `/home`
- `/sobre`
- `calendario`
- `blog`
- `divulgacoes`

## Build
Execute `ng build` para construir o projeto. Os artefatos de construção serão armazenados no diretório `dist/`. Use o sinalizador `--prod` para uma construção de produção. 


## Documentação

Para obter mais ajuda sobre o Angular CLI, use `ng help` ou confira a página [Angular CLI](https://angular.io/cli). 
