window.onload = function () {
    //const block = document.getElementsByClassName("col-minus");
    // block[0].style.backgroundColor = "yellow";
    // //block[0].style.display = 'none';
    // block[0].style.left = "107px";


        //Находит кол td
    let num_td = document.getElementById('table').rows[0].cells.length;
    console.log("num of td = ", num_td);
        //Находит tr
    let num_tr = document.getElementById('table').rows.length;
    console.log("num of tr = ", num_tr);


    //                      col-plus
    let colplus = document.getElementsByClassName("col-plus");

    colplus[0].onclick = function () {
        let table = document.getElementById("table");
        let tr = document.createElement("tr");

        for(let i = 1; i<=num_td; i++){
            tr.appendChild(document.createElement("td"));
        }
        table.appendChild(tr);

        num_tr = document.getElementById('table').rows.length;
        num_td = document.getElementById('table').rows[0].cells.length;
        console.log("num of tr = ", num_tr);
        if(num_tr > 1){

            document.getElementsByClassName("row-minus")[0].style.cssText = "display:inline-block;";
        }

    }

//                                  row-plus


    let rowplus = document.getElementsByClassName("row-plus");

    rowplus[0].onclick = function () {
        const tr = document.getElementsByTagName("tr");

        for(let i = 0;i < num_tr; i++){
            tr[i].appendChild(document.createElement("td"));
        }
        num_tr = document.getElementById('table').rows.length;
        num_td = document.getElementById('table').rows[0].cells.length;
        console.log("num of td = ", num_td);
        console.log("num of tr = ", num_tr);
        if(num_td > 1){

            document.getElementsByClassName("col-minus")[0].style.cssText = "display:inline-block;";
        }



    }

//              Удаление елементов
//              minus col

    let colminus = document.getElementsByClassName("col-minus");

    colminus[0].onclick = function () {
        let tr = document.getElementsByTagName("tr");
        for(let i = 0; i < num_tr; i++) {
            console.log((tr[i].cells[0]).remove());
        }


        num_tr = document.getElementById('table').rows.length;
        num_td = document.getElementById('table').rows[0].cells.length;
        console.log("num of tr = ", num_tr);
        if(num_td == 1){

            document.getElementsByClassName("col-minus")[0].style.cssText = "display:none;";
        }

    }



//              minus row
    const rowminus = document.getElementsByClassName("row-minus");
    rowminus[0].onclick = function () {
        let tr_remove = document.getElementsByTagName("tr");
        tr_remove[0].remove();

        num_tr = document.getElementById('table').rows.length;
        num_td = document.getElementById('table').rows[0].cells.length;
        if(num_tr == 1){

            document.getElementsByClassName("row-minus")[0].style.cssText = "display:none;";
        }
        console.log("num of tr = ", num_tr);
    }


}