document.addEventListener("DOMContentLoaded", () => {
    console.log("Dom carregat");

    //Part 1
    //Activitat1
    let boto = document.getElementById("submit-btn-1");
    boto.addEventListener("click", function (e) {
        e.preventDefault();
        let item = document.getElementById("item-input");
        item = item.value.trim();
        let quantitat = document.getElementById("quantitat-input");
        quantitat = quantitat.value

        if (item !== "") {
            let ulElement = document.getElementById("nevera").getElementsByTagName("ul")[0];
            let nouItem = document.createElement('li');
            nouItem.className = "element";
            nouItem.innerHTML = `
                <div class="numero">${quantitat}</div>
                <div class="text">${item}</div>
                <div><i class="fa-solid fa-trash-can"></i></div>
            `;
            ulElement.appendChild(nouItem);//Fi activitat1

            //activitat3 Eliminacio d'elements clicant a la icona

            //selecciona el segon fill (div de la icona) i el seu fill(i)
            let icona = nouItem.children[2].firstElementChild;
            icona.addEventListener("click", function (e) {
                //del i seleccionat va al pare(div) i despres al seu pare(li) 
                let liPare = e.target.parentNode.parentNode;
                liPare.remove();
                e.stopPropagation();
            });//Fi activitat3

            //Activitat2 inteoduir i treure la clase completada del DOM
            nouItem.addEventListener("click", function (e) {
                if (!e.target.classList.contains("fa-trash-can")) {//al clicar al li, div paperera no te efecte
                    if (this.classList.contains("completada")) {
                        this.classList.remove("completada");
                    } else {
                        this.classList.add("completada");
                    }
                }
            });
        }//fi activitat2

        document.getElementById("item-input").value = "";//vuida l'input item activitat1
    });

    //Activitat3 eliminar elements
    let ulElement = document.getElementById("nevera").getElementsByTagName("ul")[0];
    let elementos = ulElement.getElementsByTagName("li");
    let icona = elementos[0].lastElementChild.firstElementChild;//l'element li va al (div) i al seu fill (i)
    icona.addEventListener("click", function (e) {
        elementos[0].remove();
        e.stopPropagation();
    });//fi activitat3

    //Activitat2 introduir eliminar clase completada al element HTMl del DOM
    elementos[0].addEventListener("click", function (e) {
        if (!e.target.classList.contains("fa-trash-can")) {//al clicar al li, div paperera no te efecte
            if (this.classList.contains("completada")) {
                this.classList.remove("completada");
            } else {
                this.classList.add("completada");
            }
        }
    });//fi activitat2

});

//Part2
//Activitat4
$(function(){
    //Activitat4
    $('#submit-btn-2').click(function (e) {
        e.preventDefault();
        let valor = prompt("Escriu un recordatori");
        if (valor === "") {
            alert("Introdueix un text");
        } else if (valor) {
            $('ul:last').append(`<li><a href='#'><p>${valor}</p></a></li>`);
            
        }

    });
    //Activitat5
    //evita carregar la pagina amb el click al postit
    $('#nevera > div:last-child ul ').on('click', 'li a', function (e) {
        e.preventDefault();
        //fi Activitat5
        
        //Activitat6
        let currentLi = $(this).closest("li");
        let nextLi = currentLi.next("li");
        if (nextLi.length) {
            currentLi.insertAfter(nextLi);
        }

    });
    //Activitat7
    $('#nevera > div:last-child ul ').on('contextmenu', 'li a', function (e) {
        let currentLi = $(this).closest("li");
        if (currentLi) {
            e.preventDefault();
            currentLi.remove();
        }
    });
});
