window.onload = ()=>{
    //CARGAR JSON
    let arrayElem=[];

    var xobj= new XMLHttpRequest();
    xobj.overrideMimeType("aplication/json");
    xobj.open('GET','./js/PeriodicTableJSON.json',true);
    xobj.onreadystatechange=function(){
        if(xobj.readyState == 4 && xobj.status=='200'){
            let json=JSON.parse (xobj.responseText);
            arrayElem=json.elements;
            let todo="";
            arrayElem.forEach(element => {
                todo+=`<li id="${element.name}" class="hydrogen" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" 
                data-name="${element.symbol}"
                data-descr="el elemento escencial">
                
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`
            });
            document.getElementsByClassName('periodic-table')[0].innerHTML=todo;
            arrayElem.forEach(element => {
                todo+=`<li id="${element.name}" 
                class="hydrogen" 
                data-id="${arrayElem.indexOf(element)+1}" 
                data-sim="${element.symbol}" 
                data-name="Hidrogeno"
                data-descr="el elemento escencial">
                
                <abbr title="${element.name}">${element.symbol}</abbr>
            </li>`
            });
        }
    }
    xobj.send(null);


    //CREAR EVENTOS
    let elem= document.getElementsByTagName('li');
    for(let x=0;x<elem.length;x++){
        elem[x].addEventListener('click',(e)=>{
            let nom=elem[x].getAttribute("data-name")
            let des=elem[x].getAttribute("data-descr")
            let sim=elem[x].getAttribute("data-sim")
            document.getElementById("txtElemento").innerText=nom
            document.getElementById("txtDescrip").innerText=des
            document.getElementById("txtSimbolo").innerText=sim
        });
    };
}