console.log("Olá pessoas!")
console.log("#ContruindoCRUDS")

const miniTwitter = {
    usuarios: [
        {
            usarname: "GustavoMorgado",
        }
    ],
    posts: [
        {
            id: 1,
            owner: "GustavoMorgado",
            content: "Meu primeiro tweet"
        }
    ]
};

function criaPost(dados) {
    miniTwitter.posts.push({
        id: miniTwitter.posts.length + 1,
        owner: dados.owner,
        content: dados.content
    })

}

criaPost({ owner: "GustavoMorgado", content: "Meu segundo tweet" })
//console.log(miniTwitter.posts)

function pegaPost() {
    return miniTwitter.posts
}



function atualizaContentePost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPost().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.content = novoConteudo
}

atualizaContentePost(1, "novo conteudo do post");
console.log(pegaPost());

function apagaPost(id) {
    const listaDePostsAtualizados =  pegaPost().filter((postAtual) => {
        return postAtual !== id;
    })
        miniTwitter.posts = listaDePostsAtualizados;
}

apagaPost(2)
console.log(pegaPost())