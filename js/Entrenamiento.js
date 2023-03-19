const brain = require('brain.js');
const fs = require('fs');
let lstm,serializado,valoracion=0;

// Función que toma la entrada del usuario y devuelve una respuesta del chatbot
function Entrenamiento() {


    const trainingData = [
        'tu nombre Mi nombre es Feelbot',
        'que sos Soy un chatbot',
        'que eres Un chatbot',
        'tus creadores Mis creadores son Franky Interiano, Karla Navarro y Gerardo Montoya',
        'fuiste creado Fui creado por Franky Interiano, Gerardo Montoya y Karla Navarro',
        'quien te entreno Gerardo Montoya me entreno con muchos datos.',
        'fuiste entrenado Si, con muchos datos para poder responderte esto.',
        'hola como estas Hola! es un gusto saludarte!',
        'hola Hola! es un gusto saludarte!',
        'tal estas Estoy bien, gracias por preguntar',
        'como estas Estoy bien, gracias por preguntar',
        'tu función  Mi función principal es ayudarte a resolver tus dudas o preguntas.',
        'tu nivel de inteligencia artificial Mi inteligencia artificial se basa en el aprendizaje profundo y la tecnología de procesamiento del lenguaje natural, realmente es muy basico.',
        'te llamas Me llamo Feelbot, ¿en qué puedo ayudarte hoy?',
        'tu objetivo  Mi objetivo principal es brindar un servicio útil y efectivo a los usuarios.',
        'dar un consejo Claro que sí, se feliz amigo mio',
        'puedo comunicarme contigo Puedes comunicarte conmigo a través de esta plataforma de chat en línea.',
        'eres humano No, soy un chatbot programado para ayudarte a resolver tus dudas o preguntas.',
        'tu conocimiento Mi conocimiento se basa en mi programación y el conjunto de datos de entrenamiento con el que fui entrenado.',
        'gracias por,  De nada, es un placer ayudarte.',
        'adios Hasta luego, Nos veremos pronto',
        'tienes sentimientos No cuento con la capacidad de sentir.',
        'nos vemos Hasta luego, Nos veremos pronto',
      ];
      
      

       lstm = new brain.recurrent.LSTM();
      const result = lstm.train(trainingData, {
        learningRate:0.008,
        logPeriod: 10,
        momentum: 0.1,
        iterations: 1500,
        log: details => console.log(details),
        errorThresh: 0.011
      });


    
      const run1 = lstm.run('como te llamas');
      console.log('YO:'+'como te llamas' + `\n`+"BOT:"+run1);
      const run2 = lstm.run('que tal estas');
      console.log('YO:'+'que tal estas' + `\n`+"BOT:"+run2);
      const run3 = lstm.run('que eres');
      console.log('YO:'+'que eres?' + `\n`+"BOT:"+run3);
      const run4 = lstm.run('cual es tu nivel de conocimiento?');
      console.log('YO:'+'cual es tu nivel de conocimiento?' + `\n`+"BOT:"+run4);


      

// Objeto JSON a escribir en el archivo
serializado= lstm.toJSON();

// Convertir el objeto JSON en una cadena
const jsonString = JSON.stringify(serializado);

// Escribir el JSON en el archivo
fs.writeFile('RNA.json', jsonString, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Archivo Rna.json guardado con éxito!');
});

      return lstm,serializado;
    }

Entrenamiento();