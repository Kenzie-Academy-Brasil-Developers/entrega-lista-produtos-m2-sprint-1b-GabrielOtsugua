let span = document.querySelector("#valorTotal")

function products(arr) {

    resultSection(arr)

    let ul = document.querySelector("ul")

    arr.forEach((element) => {

        let li = document.createElement("li")
        let imagem = document.createElement("img")
        let h3 = document.createElement("h3")
        let span = document.createElement("span")
        let p = document.createElement("p")

        imagem.src = element.img
        h3.innerText = element.nome
        span.innerText = element.categoria
        p.innerText = `R$ ${element.preco},00`

        li.append(imagem, h3, span, p)
        ul.appendChild(li)
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
                let p = document.createElement("p")

                imagem.src = element.img
                h3.innerText = element.nome
                span.innerText = element.categoria
                p.innerText = `R$ ${element.preco},00`

                li.append(imagem, h3, span, p)
                ul.appendChild(li)

                lista.push(element)
            }
            else if (nomeSecao === "Todos") {

                let li = document.createElement("li")
                let imagem = document.createElement("img")
                let h3 = document.createElement("h3")
                let span = document.createElement("span")
                let p = document.createElement("p")

                imagem.src = element.img
                h3.innerText = element.nome
                span.innerText = element.categoria
                p.innerText = `R$ ${element.preco},00`

                li.append(imagem, h3, span, p)
                ul.appendChild(li)

                lista.push(element)
            }
        });
        resultSection(lista)
    })
}
btnFilter(produtos, "#btn1", "Todos")
btnFilter(produtos, "#btn2", "Hortifruti")
btnFilter(produtos, "#btn3", "Panificadora")
btnFilter(produtos, "#btn4", "Laticínio")


function resultSection(arr) {

    let resultado = arr.reduce((acc, act) => {
        return acc + act.preco
    }, 0)

    return span.innerText = `R$ ${resultado},00`
}


function search() {

    let ul = document.querySelector("ul")
    let input = document.querySelector(".campoBuscaPorNome")
    let button = document.querySelector("#btn5")
    
    button.addEventListener("click", () => {

        ul.innerHTML = ""

        let searchList = produtos.filter(element => {
            
            return input.value == element.nome
        })
        products(searchList)
    })
}
search()
