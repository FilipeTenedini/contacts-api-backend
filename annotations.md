# Annotations to recall.


#### ESLint
    - Instalar extensão ESLint
    - Instalalar pacote npm i eslint -D
    - npm init @eslint/config
        - se quiser usar o yarn, depois de configurar é só rodar um comandinho no final "yarn"

#### EditorConfig
    - Instalar a extensão EditorConfig
    - clica com botão direito na pasta raíz do projeto
    - generate .editorConfig
    - trim_trailing_whitespace = true para remover espaços em branco
    - indent_size = 2 para 2 espaços ao tabular

#### to start nodemon server
    - npm install -D nodemon
    - Passar o caminho relativo até o arquivo binário da biblioteca nodemon que fica em .bin da node_modules.
        - ./node_modules/.bin/nodemon src/index.js
            - esse caminho todo pode ser substituido por npx nodemon src/index.js / Após o npx, o nome do arquivo binário. Dessa forma ele já sabe que está dentro da pasta .bin
        - comando rs faz dar um restar no server caso ele não atualize

#### add "dev" to package.json
    - adicionei um script pra inicializar o server com nodemon de forma mais fácil
  ```
    "scripts": {
        "dev": "nodemon src/index.js"
    },
  ```

#### install express
  - npm i express

#### Desativei a regra class-methods-use-this
  - fui em eslintrc.cjs em rules e adicionei o nome que o vscode estava me dando com propriedade off "class-methods-use-this": "off"