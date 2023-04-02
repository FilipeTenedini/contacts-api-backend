Esse repositório foi feito com o intuito de documentar minha primeira criação de uma API utilizando NodeJs e Express.

- [ ] NodeJs
- [ ] Express
- [ ] ESLint
- [ ] Singleton Pattern

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

