function nomeUsuario (nome) {
    return("Eu sou " + nome);
}

function idadeUsuario (idade) {
    return(`Tenho ${idade} anos`);
}

function localizacaoUsuario (cidade, estado) {
    return(`E resido em ${cidade} - ${estado}`);
}

console.log(nomeUsuario("Klecianny Melo"));

console.log(idadeUsuario(27));

console.log(localizacaoUsuario("Garanhuns", "Pernambuco"));

const cadastroUsuario = {
    chave: function() {
        // código da função
    }
};

const cadastroUsuario = {
    nomeUsuario: function(nome) {
        return("Eu sou " + nome);
    }
};

const cadastroUsuario = {
    nomeUsuario: (nome) => {
        return("Eu sou " + nome);
    }
};

console.log(cadastroUsuario.nomeUsuario("Klecianny Melo"));

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

console.log(cadastroUsuario.nomeUsuario("Klecianny Melo"));
console.log(cadastroUsuario.idadeUsuario("27"));
console.log(cadastroUsuario.localizacaoUsuario("Garanhuns", "Pernambuco"));

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

cadastroUsuario.cadastroCompleto("Klecianny Melo", 27, "Garanhuns", "Pernambuco");