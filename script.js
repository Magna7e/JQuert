

$(document).ready(function(){
    //componente, elemento, evento o accion//
    $("p").click(function(){
     $(this).hide();
    });

   $("#boton1").click(function(){
       $("p").show();
    });
});

function traerinfo(){
    $.ajax ({
        url: "https://jsonplaceholder.typicode.com/posts",
    type: "GET",
    datatype: "json",
    success:function(respuesta){
        //*console.log(respuesta);

        /*for (let i=0;i<respuesta.length;i++){
        $("#resultado").append("<h2>"+respuesta[i].title+"</h2><br>");
    }*/
generarTabla(respuesta); 

    }   
    });
}

function generarTabla() {
 let miTabla="<table>";
 miTabla+="<tr>";
 miTabla+="<th>Title</th>";
 miTabla+="<tr>Body</th>";
 miTabla+="</tr>";
 for (let i=0;i<items.length;i++){
    miTabla+="<tr>";
    miTabla+="<td>items[i].title+</td>"; 
    miTabla+="<td>items[i].body+</td>";
    miTabla+="</tr>";    
 }
 miTabla+="<table>"
 $("#resultado").happend(miTabla);
}