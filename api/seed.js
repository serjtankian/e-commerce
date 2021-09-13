const { VideoGames, Categories, User } = require("./models/index");

let games = [
  {
    name: "Grand Theft Auto V",
    released: "2013-09-17",
    image:
      "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    rating: 4,
    platforms: ["Pc", "Playstation", "Xbox"],
    price: 25,
    description:
      "Grand Theft Auto V es el juego de mundo abierto más grande, más dinámico y más diverso jamás creado. Combina la historia y la jugabilidad de un modo nuevo, mientras los jugadores entran y salen repetidamente de las vidas de los tres personajes principales.",
    categories: ["Action", "Shooter"],
    stock: 10,
  },
  {
    name: "The Witcher 3: Wild Hunt",
    released: "2015-05-18",
    image:
      "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    rating: 4,
    platforms: ["PlayStation", "PC", "Xbox", "Nintendo"],
    price: 40,
    description:
      "Justo en el momento en el que la guerra se propaga por los Reinos del Norte, aceptas el contrato más desafiante de tu vida: rastrear a la Niña de la profecía, un arma viviente que puede alterar el mundo tal y como lo conocemos.",
    categories: ["Fantasy", "Adventure"],
    stock: 10,
  },
  {
    name: "Portal 2",
    released: "2011-04-18",
    image:
      "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "Linux", "Apple Macintosh"],
    price: 10,
    description:
      "Portal 2 continúa con esa fórmula ganadora consistente en una innovadora mecánica de juego, historia y música que condujeron al Portal original a ganar más de 70 galardones y lo convirtieron en un nuevo mito de la industria.",
    categories: ["Logic", "Adventure"],
    stock: 10,
  },
  {
    name: "Tomb Raider (2013)",
    released: "2013-03-05",
    image:
      "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg",
    rating: 4,
    platforms: ["Pc", "Playstation", "Xbox"],
    price: 15,
    description:
      "Tomb Raider relata la historia del origen de Lara Croft y su transformación de una joven chica a una endurecida superviviente.",

    categories: ["Action", "Drama", "Adventure"],
    stock: 10,
  },
  {
    name: "The Elder Scrolls V: Skyrim",
    released: "2011-11-11",
    image:
      "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
    rating: 4,
    platforms: ["PlayStation", "Pc", "Xbox", "Nintendo"],
    price: 45,
    description:
      "The Elder Scrolls V: Skyrim es un videojuego de rol de acción del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks. ",

    categories: ["Action", "History", "Fantasy"],
    stock: 10,
  },
  {
    name: "Left 4 Dead 2",
    released: "2009-11-17",
    image:
      "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    rating: 4,
    platforms: ["Pc", "Xbox"],
    price: 10,
    description:
      "Ambientado en el apocalipsis zombi, Left 4 Dead 2 (L4D2) es la esperadísima secuela del galardonado Left 4 Dead, el juego cooperativo número 1 de 2008. Este FPS cooperativo de acción terrorífica lleva a tus amigos y a ti a través de ciudades, pantanos y cementerios del Profundo Sur de EE. UU.",
    categories: ["Horror", "Shooter", "Zombies"],
    stock: 10,
  },
  {
    name: "Counter-Strike: Global Offensive",
    released: "2012-08-21",
    image:
      "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    rating: 3,
    platforms: ["Pc", "PlayStation", "Xbox"],
    price: 15,
    description:
      "Counter-Strike: Global Offensive (CS:GO) amplía el juego de acción por equipos del que fue pionera la franquicia cuando salió hace 19 años. CS:GO trae nuevos mapas, personajes, armas y modos de juego, y ofrece versiones actualizadas del contenido clásico de CS",
    categories: ["Strategy", "Shooter"],
    stock: 10,
  },
  {
    name: "Portal",
    released: "2007-10-09",
    image:
      "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox", "Android", "Linux"],
    price: 12,
    description:
      "Portal™ es la nueva aventura para un solo jugador de Valve. Ambientado en los misteriosos laboratorios de Aperture Science, Portal ha sido calificado como uno de los juegos más innovadores de los últimos tiempos y ofrece incontables horas de rompecabezas nunca vistos.",
    categories: ["Logic", "Adventure"],
    stock: 10,
  },
  {
    name: "Borderlands 2",
    released: "2012-09-18",
    image:
      "https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "Apple Macintosh"],
    price: 40,
    description:
      "The Ultimate Vault Hunter’s Upgrade lets you get the most out of the Borderlands 2 experience",
    categories: ["Shooter", "Action"],
    stock: 10,
  },
  {
    name: "BioShock Infinite",
    released: "2013-03-26",
    image:
      "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "Linux", "Nintendo"],
    price: 20,
    description:
      "En deuda con las personas equivocadas, con su vida en juego, veterano de la Caballería de los EE. UU. Y ahora arma contratada, Booker DeWitt solo tiene una oportunidad para hacer borrón y cuenta nueva. Debe rescatar a Elizabeth, una misteriosa niña encarcelada desde la infancia y encerrada en la ciudad voladora de Columbia.",
    categories: ["Shooter", "Action", "Gore"],
    stock: 10,
  },
  {
    name: "Life is Strange",
    released: "2015-01-29",
    image:
      "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg",
    rating: 4,
    platforms: [
      "Pc",
      "PlayStation",
      "Xbox",
      "iOS",
      "Android",
      "Apple Macintosh",
      "Linux",
    ],
    price: 28,
    description:
      "Life is Strange es un juego de aventuras episódico galardonado y aclamado por la crítica que permite al jugador rebobinar el tiempo y afectar el pasado, el presente y el futuro.",
    categories: ["Adventure", "Strategy"],
    stock: 10,
  },
  {
    name: "Red Dead Redemption 2",
    released: "2018-10-26",
    image:
      "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
    rating: 5,
    platforms: ["Pc", "PlayStation", "Xbox"],
    price: 60,
    description:
      "Con más de 175 premios al Juego del año y más de 250 valoraciones perfectas, Red Dead Redemption 2 es la épica historia de Arthur Morgan y la banda de Van der Linde, que huyen por Estados Unidos en los albores del siglo XX.",
    categories: ["Adventure", "CowBoy"],
    stock: 10,
  },
  {
    name: "BioShock",
    released: "2007-08-21",
    image:
      "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg",
    rating: 4,
    platforms: ["Pc", "PlayStation", "Xbox", "iOS", "Apple Macintosh"],
    price: 25,
    description:
      "BioShock es un juego de disparos diferente a todos los que hayas jugado, cargado de armas y tácticas nunca antes vistas. Tendrás un arsenal completo a tu disposición, desde simples revólveres hasta lanzagranadas y lanzadores de productos químicos, pero también te verás obligado a modificar genéticamente tu ADN para crear armas aún más letales.",
    categories: ["Shooter", "RolePlay"],
    stock: 10,
  },
  {
    name: "Half-Life 2",
    released: "2004-11-16",
    image:
      "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
    rating: 4,
    platforms: [
      "Pc",
      "PlayStation",
      "Xbox",
      "iOS",
      "Apple Macintosh",
      "Android",
      "Linux",
    ],
    price: 13,
    description:
      "HALF-LIFE supone un impacto en la industria de juegos gracias a su combinación de acción frenética y narración continua y absorbente. El título debut de Valve fue galardonado con más de 50 premios, que sentaron las bases para que luego se convirtiera en *El mejor juego para PC de la historia*.",
    categories: ["Sci-Fi", "Zombies"],
    stock: 10,
  },
  {
    name: "Limbo",
    released: "2010-07-21",
    image:
      "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
    rating: 4,
    platforms: [
      "PC",
      "PlayStation",
      "Xbox",
      "iOS",
      "Android",
      "Apple Macintosh",
      "Linux",
      "Nintendo",
    ],
    price: 10,
    description:
      "Inseguro del destino de su hermana, un niño ingresa al LIMBO.",
    categories: ["Logic", "Adventure"],
    stock: 10,
  },
  {
    name: "Team Fortress 2",
    released: "2007-10-10",
    image:
      "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg",
    rating: 3,
    platforms: ["PC", "Apple Macintosh", "Linux"],
    price: 20,
    description:
      "Nueve clases distintas proporcionan una amplia gama de habilidades tácticas y personalidades. Constantemente actualizado con nuevos modos de juego, mapas, equipo y, lo más importante, ¡sombreros!",
    categories: ["Shooter", "Action"],
    stock: 10,
  },
  {
    name: "DOOM (2016)",
    released: "2016-05-13",
    image:
      "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg",
    rating: 5,
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo"],
    price: 20,
    description:
      "En 2016, la saga volvió a lo más alto con un shooter moderno, brutalmente divertido y de endiablada dificultad que obtuvo el premio al mejor juego de acción del año en los Video Game Awards. Demonios implacables, armas devastadoras y una movilidad frenética y fluida son los cimientos de un intenso sistema de combate en primera persona que tendrás que dominar para abrirte paso por las profundidades del infierno.",
    categories: ["Action"],
    stock: 10,
  },
  {
    name: "Fallout 4",
    released: "2015-11-09",
    image:
      "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 20,
    description:
      "Bethesda Game Studios, los galardonados creadores de Fallout 3 y The Elder Scrolls V: Skyrim, te dan la bienvenida al mundo de Fallout 4, su juego más ambicioso hasta la fecha y la próxima generación de juegos de mundo abierto.",
    categories: ["Post-Apocaliptic"],
    stock: 10,
  },
  {
    name: "PAYDAY 2",
    released: "2013-08-13",
    image:
      "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
    rating: 4,
    platforms: ["PC", "Xbox", "Linux"],
    price: 10,
    description:
      "Videojuego de acción en primera persona donde el objetivo es cometer todo tipo de delitos: atraco a bancos o joyerías, secuestros, tráfico de drogas... ",
    categories: ["Action", "Shooter"],
    stock: 10,
  },
  {
    name: "Destiny 2",
    released: "2017-09-06",
    image:
      "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg",
    rating: 4,
    platforms: ["PC", "PlayStation", "Xbox", "Web"],
    price: 60,
    description:
      "'Destiny 2' es la secuela de conocidísimo MMORPG de Activision y Bungie, el cual viene a dar continuación a los hechos ocurridos en su antecesor centrándose en la historia de los Guardianes, unos guerreros encargados de preservar el Universo de las amenazas que puedan suponer la destrucción más absoluta.",
    categories: ["Action", "Shooter"],
    stock: 10,
  },
];

let categories = [
  "Action",
  "Adventure",
  "Shooter",
  "RolePlay",
  "Sci-Fi",
  "Horror",
  "Post-Apocaliptic",
  "Logic",
  "Zombies",
  "CowBoy",
  "Strategy",
  "History",
  "Gore",
  "Fantasy",
  "Drama",
];

categories.forEach((category) => {
  Categories.create({ name: category });
});

games.forEach(async (game) => {
  let {
    name,
    released,
    image,
    rating,
    platforms,
    price,
    description,
    categories,
    stock,
  } = game;
  VideoGames.findOrCreate({
    where: { name: game.name },
    defaults: {
      name,
      released,
      image,
      rating,
      platforms,
      price,
      description,
      stock,
    },
  })
    .then((vg) => {
      categories.forEach((cat) => {
        Categories.findOne({
          where: {name: cat}
        }).then(catego=> {
          vg[0].addCategory(catego)
        })
      });
    })
    .catch((e) => console.log(e));
});


User.create({name: "Pepe Perez", email:"pepe@gmail.com", password: "1234", isAdmin: "SAdmin"})