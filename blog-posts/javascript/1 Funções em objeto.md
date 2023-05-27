# Um guia prático para unificar funções em objetos com JavaScript

Para iniciar vamos criar o arquivo JavaScript `cadastroUsuario.js`, onde vamos escrever funções para coleta de informações pessoais de um usuário:

```
function nomeUsuario (nome) {
    return("Eu sou " + nome);
}

function idadeUsuario (idade) {
    return(`Tenho ${idade} anos`);
}

function localizacaoUsuario (cidade, estado) {
    return(`E resido em ${cidade} - ${estado}`);
}
```

Agora podemos imprimir na tela as informações do usuário:

```
console.log(nomeUsuario("Klecianny Melo"));

console.log(idadeUsuario(27));

console.log(localizacaoUsuario("Garanhuns", "Pernambuco"));
```

Até agora nosso arquivo possui 3 funções distintas e por questão de organização e otimização do código podemos unificar as funções em um objeto e acessar cada uma delas separadamente. Primeiro vamos criar um objeto:

```
const cadastroUsuario= {};
```

Podemos atribuir uma função dentro chave do objeto da seguinte maneira:

```
const cadastroUsuario = {
  chave: function() {
    // código da função
  }
};
```

No exemplo acima criamos a chave "chave" com o valor sendo uma função anônima. Podemos substituir o nome "chave" pelo nome descritivo da função que estamos desenvolvendo e escrever o código da função dento das chaves `{}`.

Vamos escrever a função `nomeUsuario` dentro do objeto `cadastroUsuario`:

```
const cadastroUsuario = {
  nomeUsuario: function(nome) {
    return("Eu sou " + nome);
  }
};
```

Uma outra forma de representar uma função é utilizando a sintaxe de seta (arrow function):

```
const cadastroUsuario = {
  nomeUsuario: (nome) => {
    return("Eu sou " + nome);
  }
};
```

A estrutura utilizada para definir a função é: `() => {}`.

Após atribuir a função á chave do objeto, podemos utilizá-la com a sintaxe: `objeto.chave()`

```
console.log(cadastroUsuario.nomeUsuario("Klecianny Melo"));
```

Agora, vamos adicionar as funções `idadeUsuario` e `LocalizacaoUsuario` ao objeto `cadastroUsuario`:

```
const cadastroUsuario = {
    nomeUsuario: (nome) => {
        return("Eu sou " + nome);
    },

    idadeUsuario: (idade) => {
        return(`Tenho ${idade} anos`);
    },

    localizacaoUsuario: (cidade, estado) => {
        return(`E resido em ${cidade} - ${estado}`);
    },
};
```

Após unificar todas as funções no objeto `cadastroUsuario`, podemos utilizá-las separadamente:

```
console.log(cadastroUsuario.nomeUsuario("Klecianny Melo"));
console.log(cadastroUsuario.idadeUsuario("27"));
console.log(cadastroUsuario.localizacaoUsuario("Garanhuns", "Pernambuco"));
```

Agora vamos exebir o cadastro completo do usuário na quarta função: `cadastroCompleto`, onde vamos utilizar todas as 3 funções anteriores, assim, cada função fica com uma única responssabilidade no nosso código:

```
const cadastroUsuario = {
    nomeUsuario: (nome) => {
        return("Eu sou " + nome);
    },

    idadeUsuario: (idade) => {
        return(`Tenho ${idade} anos`);
    },

    localizacaoUsuario: (cidade, estado) => {
        return(`E resido em ${cidade} - ${estado}`);
    },

    cadastroCompleto: (nome, idade, cidade, estado) => {
        const resultado = `${cadastroUsuario.nomeUsuario(nome)} ${cadastroUsuario.idadeUsuario(idade)} ${cadastroUsuario.localizacaoUsuario(cidade, estado)}`;

        console.log(resultado);
    },
};
```

Agora podemos acessar a função `cadastroCompleto` passando todas as informações do usuário:

```
cadastroUsuario.cadastroCompleto("Klecianny Melo", 27, "Garanhuns", "Pernambuco");
```

No post de hoje aprendemos sobre organizar funções em um objeto e como desenvolver funções com uma única responsabilidade no código para mantermos nosso desenvolvimento limpo.

Se você gostou deste post, compartilhe-o com seus amigos e colegas! Deixe um comentário abaixo com suas opiniões e sugestões.

Além disso, não se esqueça de acompanhar meu conteúdo em várias redes sociais: Confira meu portfólio em [Potfólio](https://kleciannymelo.vercel.app/), conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/kecbm/), explore meus projetos no [GitHub](https://github.com/Kecbm), siga-me no [Twitter](https://twitter.com/Kecbm), acompanhe minha jornada no [Instagram](https://www.instagram.com/kecbm/), e junte-se a mim no [Strava](https://www.strava.com/athletes/kecbm) para ver minhas atividades esportivas. 

Estou esperando por você!