let span = document.querySelector("#valorTotal")
let carrinho = []

function products(arr) {

    // resultSection(arr)

    let ul = document.querySelector("ul")

    arr.forEach((element) => {

        let li = document.createElement("li")
        let imagem = document.createElement("img")
        let h3 = document.createElement("h3")
        let span = document.createElement("span")
        let ol = document.createElement("ol")
        let li2 = document.createElement("li")
        let p2 = document.createElement("p")
        let div = document.createElement("div")
        let p = document.createElement("p")
        let button = document.createElement("button")

        imagem.src = element.img
        h3.innerText = element.nome
        span.innerText = element.secao
        p2.innerText = element.componentes
        p.innerText = `R$ ${element.preco}`
        button.innerText = "Comprar"
        button.setAttribute("id", element.id)

        div.append(p, button)
        li2.appendChild(p2)
        ol.appendChild(li2)
        li.append(imagem, h3, span, ol, div)
        ul.appendChild(li)

        button.addEventListener("click", (e) => {

            const id = e.target.id

            let click = arr.find(element => {
                return element.id == id
            })
            carrinho.push(click)

            addAoCarrinho(carrinho)
        })
    });
}
products(produtos)


function btnFilter(arr, idBtn, nomeSecao) {

    let btn = document.querySelector(idBtn)
    let ul = document.querySelector("ul")
    let span = document.querySelector("#valorTotal")

    btn.addEventListener("click", () => {

        let lista = []

        ul.innerHTML = ""

        arr.forEach((element) => {

            if (nomeSecao === element.secao) {

                let li = document.createElement("li")
                let imagem = document.createElement("img")
                let h3 = document.createElement("h3")
                let span = document.createElement("span")
                let ol = document.createElement("ol")
                let li2 = document.createElement("li")
                let p2 = document.createElement("p")
                let div = document.createElement("div")
                let p = document.createElement("p")
                let button = document.createElement("button")

                imagem.src = element.img
                h3.innerText = element.nome
                span.innerText = element.secao
                p2.innerText = element.componentes
                p.innerText = `R$ ${element.preco}`
                button.innerText = "Comprar"
                button.setAttribute("id", element.id)

                div.append(p, button)
                li2.appendChild(p2)
                ol.appendChild(li2)
                li.append(imagem, h3, span, ol, div)
                ul.appendChild(li)

                lista.push(element)
            }
            else if (nomeSecao === "Todos") {

                let li = document.createElement("li")
                let imagem = document.createElement("img")
                let h3 = document.createElement("h3")
                let span = document.createElement("span")
                let ol = document.createElement("ol")
                let li2 = document.createElement("li")
                let p2 = document.createElement("p")
                let div = document.createElement("div")
                let p = document.createElement("p")
                let button = document.createElement("button")

                imagem.src = element.img
                h3.innerText = element.nome
                span.innerText = element.secao
                p2.innerText = element.componentes
                p.innerText = `R$ ${element.preco}`
                button.innerText = "Comprar"
                button.setAttribute("id", element.id)

                div.append(p, button)
                li2.appendChild(p2)
                ol.appendChild(li2)
                li.append(imagem, h3, span, ol, div)
                ul.appendChild(li)

                lista.push(element)
            }
        });
        // resultSection(lista)
    })
}
btnFilter(produtos, "#btn1", "Todos")
btnFilter(produtos, "#btn2", "Hortifruti")
btnFilter(produtos, "#btn3", "Panificadora")
btnFilter(produtos, "#btn4", "Laticínios")


function resultSection(arr) {

    let resultado = arr.reduce((acc, act) => {
        return Number(acc) + Number(act.preco)
    }, 0)
    return resultado
}

function search(arr) {

    let ul = document.querySelector("ul")
    let input = document.querySelector(".campoBuscaPorNome")
    let button = document.querySelector("#btn5")

    button.addEventListener("click", () => {

        ul.innerHTML = ""

        let searchList = arr.filter(element => {

            return input.value == element.nome.toLowerCase() || input.value == element.secao.toLowerCase() || input.value == element.categoria.toLowerCase()
        })
        products(searchList)
    })
}
search(produtos)


function addAoCarrinho(arr) {

    let ul = document.querySelector(".ulCarrinho")
    let divQT = document.querySelector("#quantidadeTotal")

    ul.innerHTML = ""

    if (carrinho.length === 0) {

        let p = document.createElement("p")

        p.innerText = "Carrinho vazio"
        p.setAttribute("id", "carrinhoVazio")

        ul.appendChild(p)

        divQT.innerHTML = ""
    }
    else {

        divQT.innerHTML = ""

        let div1 = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let div2 = document.createElement("div")
        let p3 = document.createElement("p")
        let p4 = document.createElement("p")

        div1.setAttribute("id", "quantidade")
        div2.setAttribute("id", "total")
        p1.innerText = "Quantidade"
        p2.innerText = carrinho.length
        p3.innerText = "Total"
        p4.innerText = `R$ ${resultSection(carrinho)}.00`

        div2.append(p3, p4)
        div1.append(p1, p2)
        divQT.append(div1, div2)
    }

    arr.forEach(element => {

        let li = document.createElement("li")
        let imagem = document.createElement("img")
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        let span = document.createElement("span")
        let p = document.createElement("p")
        let button = document.createElement("button")

        imagem.src = element.img
        h3.innerText = element.nome
        span.innerText = element.secao
        p.innerText = `R$ ${element.preco}`
        button.innerText = "Remover"
        button.setAttribute("id", element.id)

        div.append(h3, span, p)
        li.append(imagem, div, button)
        ul.appendChild(li)

        button.addEventListener("click", (e) => {

            const id = e.target.id
            console.log(id)

            let newArr = arr.filter(element => {

                return element.id != id
            });
            carrinho = newArr

            addAoCarrinho(newArr)
        })

    });
}
