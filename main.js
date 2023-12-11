let lista_botones_dis=[];
let lista_botones_aum=[];
let lista_resultado=[];
let contador_global=0;




const botones_disminucion=document.getElementsByClassName('bi bi-dash-square');

const botones_aumento=document.getElementsByClassName('bi bi-plus-square');

const contador_html=document.querySelector('.sumatoria_carrito');

const resultado_productos1=document.querySelector('.producto_1_sumatoria');
const resultado_productos2=document.querySelector('.producto_2_sumatoria');
const resultado_productos3=document.querySelector('.producto_3_sumatoria');
const resultado_productos4=document.querySelector('.producto_4_sumatoria');
const resultado_productos5=document.querySelector('.producto_5_sumatoria');

for (let i = 0; i < 5; i++) {
    if(i==0){
        lista_resultado.push(resultado_productos1);
        
    }
    if(i==1){
        lista_resultado.push(resultado_productos2);
        
        
    }
    if(i==2){
        lista_resultado.push(resultado_productos3);
        
    }if(i==3){
        lista_resultado.push(resultado_productos4);
        
    }
    if(i==4){
        lista_resultado.push(resultado_productos5);
        
    }
}


    

for (let i = 0; i < botones_disminucion.length; i++) {
    lista_botones_dis.push(botones_disminucion[i]);
    
}



for (let i = 0; i < botones_aumento.length; i++) {
    lista_botones_aum.push(botones_aumento[i]);
    
}
let variable1=0;
let variable2=0;
let variable3=0;
let variable4=0;
let variable5=0;

const rellenar=(x,y)=>{

    for (let i = 0; i < 1000; i++) {
        

        if(i==x){
        
            return x*y;
            x=null;
            y=null;

        }
        
    }
    
}




let respuesta;




lista_botones_aum.forEach((item,index)=>{



    item.addEventListener('click',()=>{

      //  lista_resultado.forEach((item,index)=>{

        

        if(index==0 ){
            
            
            variable1++;
            respuesta=rellenar(variable1,45);
            lista_resultado[index].textContent=respuesta;
            respuesta=null;
        
           


        }else if(index==1 ){

            
            variable2++;
            respuesta=rellenar(variable2,2342);
            lista_resultado[index].textContent=respuesta;
            respuesta=null;
            

        }
        else if(index==2 ){
            
            

            variable3++;
            respuesta=rellenar(variable3,45);
            lista_resultado[index].textContent=respuesta;
            respuesta=null;

            
        }
        else if(index==3 ){
            
            
            variable4++;
            respuesta=rellenar(variable4,340);
            lista_resultado[index].textContent=respuesta;
            respuesta=null;

           
        }
        else if(index==4 ){
            
            
            variable5++;
            respuesta=rellenar(variable5,100);
            lista_resultado[index].textContent=respuesta;
            respuesta=null;

           
        }

       contador_global=variable1+variable2+variable3+variable4+variable5;

       contador_html.textContent=contador_global;
       

       
  //  })
    })
});



lista_botones_dis.forEach((item,index)=>{


    item.addEventListener('click',()=>{

        if(index==0){
            
            variable1--;
            if(variable1>-1){
                
                respuesta=rellenar(variable1,45);
                lista_resultado[index].textContent=respuesta;
                respuesta=null;
            }
            
                 

        }else if(index==1){

            variable2--;
            if (variable2>-1) {

                respuesta=rellenar(variable2,2342);
                lista_resultado[index].textContent=respuesta;
                respuesta=null;
            }
            

        }
        else if(index==2){
            

            variable3--;
            if (variable3>-1) {

                respuesta=rellenar(variable3,45);
                lista_resultado[index].textContent=respuesta;
                respuesta=null;
            }
            
            
        }
        else if(index==3){
            

            variable4--;
            if (variable4>-1) {

                respuesta=rellenar(variable4,340);
                lista_resultado[index].textContent=respuesta;
                respuesta=null;
            }
            
            
        }
        else if(index==4){
            
            variable5--;
            if (variable5>-1) {
                
                respuesta=rellenar(variable5,100);
                lista_resultado[index].textContent=respuesta;
                respuesta=null;
            }
            
        }

        contador_global=variable1+variable2+variable3+variable4+variable5;

        if(contador_global <= -1){
            contador_global= 0
        
        
        }

        contador_html.textContent=contador_global;
        

    })


});







