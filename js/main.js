const libros = [
  {
    id: 1,
    titulo: "A quién elijo?",
    subtitulo: "Entre dos amores",
    imagen: "../images/aquien.jpeg",
    descripcion:
      "Marixa regresa de un viaje con sus padres y al volver nada es lo mismo.Un chico nuevo llamado Luke entra a su liceo, pronto se enamorará de ella pero deberá enfrentarse a Ryan, el mejor amigo de Marixa, ya que él también siente amor por ella. Marixa por su parte encuentra en Sofía, su mejor amiga que debió mudarse lejos, una persona en quien confiar para contarle sus peripecias y aventuras a través de las redes sociales.",
    stock: false,
    warning: "../images/warning.svg",
  },
  {
    id: 2,
    titulo: "Un misterioso campamento",
    subtitulo: "",
    imagen: "../images/campamento.jpeg",
    descripcion:
      "Morena convence a sus padres de ir a un campamento para poder conocer nuevos amigos, pero de un momento a otro dos de sus amigos desaparecen...Ella y sus amigas van a tener que armar un plan para poder rescatarlos y también descubrir por qué los secuestraron.",
    stock: false,
    warning: "../images/warning.svg",
  },
  {
    id: 3,
    titulo: "El intercambio",
    subtitulo: "Un chico mentiroso",
    imagen: "../images/intercambio.jpeg",
    descripcion:
      "Emilia y su amiga obtienen una beca y viajan de intercambio a EE.UU. Allí, la protagonista conoce a un chico que aparenta ser el ideal para ella, ¿Pero, realmente es quien dice ser? ¿Y si le está ocultando algo? Viví este viaje junto a ella en otro país que te dará curiosidad por saber quien verdaderamente es Martin...",
    stock: true,
    paginaCompra:
      "https://articulo.mercadolibre.com.uy/MLU-618354957-intercambio-el-alfonsina-mesa-_JM",
  },
  {
    id: 4,
    titulo: "Supuestas Amistades",
    subtitulo: "¿Amigos o Desconocidos?",
    imagen: "../images/supuestas.jpeg",
    descripcion:
      "Leo, un chico Argentino, se muda a Uruguay y su vida cambia radicalmente.En una pequeña localidad de Florida, conoce a unos chicos que los considera sus amigos hasta que ellos le demuestran quienes son realmente.La verdad solo la sabe uno de ellos...",
    stock: true,
    paginaCompra:
      "https://articulo.mercadolibre.com.uy/MLU-664099560-supuestas-amistades-alfonsina-mesa-_JM",
  },
];

function mostrarInfoLibro(indice) {
  const libro = libros[indice - 1];
  localStorage.setItem("libroSeleccionado", JSON.stringify(libro));
  window.location.href = "segunda_pagina.html";
}

// Función para obtener la información del libro desde localStorage
function obtenerInfoLibro() {
  const libro = JSON.parse(localStorage.getItem("libroSeleccionado"));
  if (libro) {
    document.getElementById("libro-imagen").src = libro.imagen;
    document.getElementById("libro-nombre").textContent = libro.titulo;
    document.getElementById("libro-subtitulo").textContent = libro.subtitulo;
    document.getElementById("libro-descripcion").textContent =
      libro.descripcion;
    // document.getElementById("libro-stock").textContent = libro.stock;
  } else {
    // Manejar el caso en el que no haya información en localStorage
    console.error("No se encontró información del libro");
  }

  if (libro.stock) {
    // Si hay stock, muestra un mensaje y proporciona un enlace a la página de compra
    document.getElementById("libro-stock").textContent = "!Comprar!";
    document.getElementById("libro-stock").href = libro.paginaCompra;
    document.getElementById("libro-stock").style.display = "block";
    document.getElementById("libro-stock").classList.add("libro-stock");
  } else {
    // Si no hay stock, muestra un mensaje
    document.getElementById("sin-stock").textContent =
      "Actualmente no hay stock";
    document.getElementById("sin-stock").style.display = "block";
    document.getElementById("libro-stock").style.display = "none";
    document.getElementById("sin-stock").classList.add("libro-sin-stock");
  }
}

// Cambiar Iconos
function insta() {
  const iconoInstagram = document.getElementById("icon-insta");

  let iconoInsta = "../images/instagram-color.svg";

  iconoInstagram.addEventListener("mouseover", () => {
    iconoInstagram.src = iconoInsta;
  });

  iconoInstagram.addEventListener("mouseout", () => {
    iconoInstagram.src = "../images/instagram.svg";
  });
}
insta();

function face() {
  const iconoInstagram = document.getElementById("icon-face");

  let iconoInsta = "../images/face-color.svg";

  iconoInstagram.addEventListener("mouseover", () => {
    iconoInstagram.src = iconoInsta;
  });

  iconoInstagram.addEventListener("mouseout", () => {
    iconoInstagram.src = "../images/face.svg";
  });
}
face();

function twitter() {
  const iconoInstagram = document.getElementById("icon-twitter");

  let iconoInsta = "../images/twitter-color.svg";

  iconoInstagram.addEventListener("mouseover", () => {
    iconoInstagram.src = iconoInsta;
  });

  iconoInstagram.addEventListener("mouseout", () => {
    iconoInstagram.src = "../images/twitter.svg";
  });
}
twitter();

function mail() {
  const iconoInstagram = document.getElementById("icon-mail");

  let iconoInsta = "../images/mail-open.svg";

  iconoInstagram.addEventListener("mouseover", () => {
    iconoInstagram.src = iconoInsta;
  });

  iconoInstagram.addEventListener("mouseout", () => {
    iconoInstagram.src = "../images/mail-close.svg";
  });
}
mail();
