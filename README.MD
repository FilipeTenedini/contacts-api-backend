Esse repositório foi feito com o intuito de documentar minha primeira criação de uma API utilizando NodeJs e Express.

- [ ] NodeJs
- [ ] Express
- [ ] ESLint
- [ ] Singleton Pattern
- [ ] Repository Pattern

<details>
<summary>
Convenção de nomeclatura para métodos do controller.
</summary>

Algumas opções de nomeação de métodos com base no verbo HTTP correspondente à ação REST que estão realizando:

- ####Para o verbo HTTP GET:

index() - para lidar com requisições HTTP GET na rota raiz do recurso
show() - para lidar com requisições HTTP GET para recuperar um recurso específico
list() - para lidar com requisições HTTP GET para recuperar uma lista de recursos
Para o verbo HTTP POST:

create() - para lidar com requisições HTTP POST para criar um novo recurso
Para o verbo HTTP PUT/PATCH:

update() - para lidar com requisições HTTP PUT/PATCH para atualizar um recurso existente


- Para o verbo HTTP DELETE:

destroy() - para lidar com requisições HTTP DELETE para deletar um recurso existente
Além disso, alguns frameworks podem oferecer opções adicionais, como por exemplo:

Para o verbo HTTP POST, em algumas convenções, o método pode ser nomeado como store() em vez de create().
Para o verbo HTTP PUT/PATCH, em algumas convenções, o método pode ser nomeado como edit() em vez de update(). Isso é comum em frameworks como Ruby on Rails, por exemplo.

</details>

<details>
<summary>
Repository Pattern
</summary>
- O Repository Pattern diz que precisamos ter uma camada de abstração de acesso ao Data Source
- Ou seja, nosso controller não tem acesso ao nosso Data Source.
  - O Controller conhece o Repository e o Repository fala com o Data Source.
    - Controller < -- > Repository < -- > Data Source

Exemplo de uso:
O controller chama a função create do Repository e ele é que vai saber se vai buscar a informação em um banco de dados, eum mock ou seja lá o que for que usaremos, não é responsabilidade do Controller saber disso. No Controller será executado dessa forma, por exemplo:
```jsx
Repository.create();
```

Neste projeto utilizamos método assíncrono dentro do Repository, porém, na promise só retornamos o Resolve, sem reject.
Por que?
Porque a regra de negócio ela NUNCA vai ficar dentro do Repository. A gente nunca téra uma condicional dentro do Repository, por exemplo. Não importa pra ele, quem irá tratar isso é o Controller. A unica finalidade do Repository é acessar o Data Source. Não importa por exemplo, usando banco de dados, saber se a conexão está estabelecida ou não tá, quem irá tratar isso é o Controller.
</details>