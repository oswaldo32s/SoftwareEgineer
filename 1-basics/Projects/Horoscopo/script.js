const numeroSuerte = Math.floor(Math.random()*100) + 1;

const frasesPositivas = ['¡Buenos días! En los momentos simples se esconden las mayores alegrías.',
'Si el día amanece lluvioso, haz que brille el sol con tu sonrisa. ¡Buenos días!',
'Hoy es un nuevo día. Incluso si lo hiciste mal ayer, hoy lo puedes hacer bien.',
'¡Buenos días! Este día es tuyo, no permitas que nadie te lo arruine.',
'¡Buenos días! Hay un camino a tus pies, tu alegría es el mejor equipaje para recorrerlo.',
'¡Buenos días! Cada día es una elección, elijamos ser felices.',
'Hoy es el día más bonito de mi vida, pero el de mañana será mucho mejor. ¡Que tengas un agradable día!',
'Lo ideal sería tener el corazón en la cabeza y el cerebro en el pecho. Así pensaríamos con amor y amaríamos con sabiduría.',
'Hoy tienes una misión: deja que tu sonrisa cambie el mundo.',
'Solo triunfa en el mundo quien se levanta y busca las circunstancias, y las crea si no las encuentra.',
'Ninguna persona, incluso aquellas que pareciera que lo lograron con facilidad, ha llegado a tener éxito sin trabajar duro']

const signos = ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis']

const recomendaciones = [
    'Hoy no es un buen dia para gastar, cuida tu dinero y solo gasta en lo necesario',
    'Evita a las personas negativas de tu entorno',
    'Hoy es un excelente dia para hacer ejercicio, aprovecha tu tiempo y cuida tu cuerpo',
    'Hoy es un día extraordinario porque sentirás que ya estás mucho más cerca de alcanzar tus sueños',
    'déjate llevar por tus ideales y permite que tus pensamientos no te limiten',
    'Se acercan grandes cambios en tu vida, preparate para lo mejor y para unas caidas muy fuertes que se acercan',
    'Acepta tus defectos (tal y como son) y sé indulgente con tus imperfecciones',
    'Si te sientes razonablemente segur@ de la estrategia que estás siguiendo ahora, sigue con ella',
    'Si empieza a parecerte que todo va mal, tienes razón en parte. Algo está fallando... pero tiene que ver con tu capacidad para entender qué es lo que motiva a cierta persona de la que dependes',
    'cambia de sentido y empieza a avanzar de nuevo',
    'El día de hoy te trae una señal de ánimo. No pierdas la esperanza. Está ocurriendo.',
    'Ha llegado el momento de reiniciarte. El éxito se acerca. La cuestión no es cómo se va a revelar. La cuestión es si estás o no preparada para manejarlo.',
    'Hoy tienes que ver (y solucionar) lo que está mal, para así volver a estar llena de energía.',
    'Si hoy llega a tu puerta un paquete de preocupaciones, niégate a aceptarlo.',
    'Antes de plantearte cómo vas a solucionar un problema concreto de tu mundo, tal vez debas preguntarte hasta qué punto deseas realmente que se resuelva',
    'Debes saber que no sólo hay alguien más en el mismo barco, sino que esa persona está preparada para emprender este reto y espera hacerlo contigo.',
    'Hay gente que se quedaría pasmada al descubrir algunas de las cosas que haces y algunas de las ideas que se te pasan por la cabeza.',
    'Estás buscando la mejor manera de manejar una situación complicada. Simplemente asegúrate de que no estás intentando adivinar lo que piensa otra persona.',
    'Haz lo que te parezca correcto a ti. En este caso, tú sabes lo que es mejor.',
    'No te vendría mal convencer a cierta persona de que comparta contigo su punto de vista. La tenacidad cortés asegurará el éxito.',
    'La presión de encontrarte en un escenario tan intenso debería preocuparte, y con toda la razón. No es momento de actuar primero y pensar después'
]

const horoscopo = () => {
    let nums = [];
    console.log(signos[Math.floor(Math.random()*signos.length)])
    console.log(`Tu numero de la suerte es: ${numeroSuerte}`)
    console.log(`La frase del dia para ti es: ${frasesPositivas[Math.floor(Math.random()*frasesPositivas.length)]}`)
    while (nums.length < 5) {
        let num = Math.floor(Math.random() *recomendaciones.length);
        if (!nums.includes(num)) {
          nums.push(num);
        }
      }
    console.log(`Esto es a lo que le tienes que prestar atencion:`)
    for(let i = 0; i < 5; i++){
        console.log(recomendaciones[nums[i]])
    }
}

horoscopo()