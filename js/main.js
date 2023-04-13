let form = document.getElementById('formulario')
let caja = document.getElementById('caja')
let mensaje = document.getElementById('mensaje')
let descargarBtn = document.getElementById('descargarpdf');
form.addEventListener('click',(event)=>{
    event.preventDefault()
    let sexo = document.getElementById('sexo').value 
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
   
    if(peso!=='' && peso !== NaN && altura!=='' && altura!==NaN){
        let indice = peso / (altura * altura)
        let calculo = document.getElementById('result')
                
        sexo = sexo.toUpperCase()
        switch (sexo){
            case "M":
            if (indice < 20){
              resultado = "Peso inferior al normal.";
            }else 
                if (indice >= 20 && indice < 24){
                    resultado = "Peso Normal.";
                }else 
                    if (indice >= 24 && indice < 29){
                        resultado = "Peso superior al normal.";
                }else{
                    resultado = "Obesidad.";
                }  
                break
            case "H":
                
                if (indice < 21){
                    resultado = "Peso inferior al normal.";
                }else 
                    if (indice >= 21 && indice < 25){
                        resultado = "Peso Normal.";
                    }else 
                        if (indice >= 25 && indice < 30){
                            resultado = "Peso superior al normal.";
                    }else{
                        resultado = "Obesidad";
                    }		   
                break
            default:
                resultado = "No se ha podido calcular. No ha indicado h (hombre) o m (mujer).";
        }
        //result.innerHTML = indice
        //mensaje.innerHTML = resultado
        caja.innerHTML = `
                            <h3>Resultado IMC</h3>
                            <strong>IMC: ${indice}</strong><br>
                            <strong>Evaluación Clinica: ${resultado}</strong>
                         `
        
        // Guardar resultado en variable global
        window.indiceGlobal = indice;
        // Guardar resultado en variable global
        window.resultadoGlobal = resultado;
    }
})

descargarBtn.addEventListener('click', () => {
  const doc = new jsPDF();
  doc.setTextColor("#0000FF");
  doc.setFontSize(30);
  doc.setFontStyle("bold");
  const textLines = doc.splitTextToSize('Examen de IMC:\n'+ '\n' +'Su índice de masa corporal es:\n' + window.indiceGlobal + '\n' + '\nSu evaluación es:\n '+ window.resultadoGlobal, doc.internal.pageSize.width - 20);
  doc.text(textLines, 10, 10);
  doc.save('resultado.pdf');
});

/* Articulos dinamicos */ 
let post=[
    {
        title:'¿Cómo sé si soy obeso?',
        date : 'Publicado: ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY"),
        content:'De forma sencilla, la obesidad se puede determinar calculando el Índice de Masa Corporal – IMC. Este índice se divide en rangos de IMC, que luego indican tu grado de obesidad[1]. En 1832, Adolfhe Quételet fue el primero en aplicar las matemáticas al estudio del hombre, creando un índice que recibió su nombre y que años más tarde se conocería como Índice de Masa Corporal.' 
    },
    {
        title:'¿Causas de la obesidad?',
        date: 'Publicado: ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY"),
        content:'Si hay algo en lo que todas las fuentes de información están de común acuerdo es que la obesidad tiene un motivo: el comer en exceso. Entonces dirás, “¡pero como poco, no sé por qué engordo tanto!”.[1] Bueno, vayamos por partes. La comida es algo que no se mide simplemente por el peso, el tamaño o el sabor. Para controlar el peso, es importante comprender que cada alimento tiene una cantidad de calorías. '
    }
]
 //let article1 = document.getElementsByClassName('article1')
 let article1 = document.getElementById('article1')     
 let article2 = document.getElementById('article2')                     
 let texto =`   <style>
                    h3{
                        text-transform:uppercase;  
                        padding-top:5px;
                        padding-bottom:10px;  
                    }
                    p{
                        text-align:justify;
                        margin-right: 40px;
                        padding-top:10px;
                    }
                </style>
                <h3>${post[0].title}</h3>
                <span>${post[0].date}</span>
                <p>${post[0].content}</>

            `
let texto1 =
    `   <style>
            h3{
                text-transform:uppercase;  
                
            }
            p{
                text-align:justify;
                margin-right: 40px;
            }
        </style>
        <h3>${post[1].title}</h3>
        <span>${post[1].date}</span>
        <p>${post[1].content}</>
         `   
article1.innerHTML = texto
article2.innerHTML = texto1
//article1.innerText = texto
let fecha_otro = document.getElementById('date')
fecha_otro.innerHTML = 'Publicado: ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY")
let fecha_otro1 = document.getElementById('date1')
fecha_otro1.innerHTML = 'Publicado: ' + moment().date() + ' de ' + moment().format("MMMM") + ' Del año ' + moment().format("YYYY")

