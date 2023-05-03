const express = require("express");
const app = express();

// Configurar el motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

const habilidades = [
  "Python",
  "Excel",
  "Java",
  "JavaScript",
  "Vue",
  "React",
  "Django",
  "PHP",
  "Laravel",
];
const topicos = [
  "Inicio",
  "Habilidades",
  "Portafolio",
  "Contáctame",
  "Eduardo Hinojosa",
];
const grados = ["Desarrollador", "Analista de Datos", "Diseñador"];
const imagenes = [
  "https://logos-download.com/wp-content/uploads/2016/10/Python_logo_icon.png",
  "https://1000marcas.net/wp-content/uploads/2020/12/Microsoft-Excel-Logo.jpg",
  "https://thumbs.dreamstime.com/b/logotipo-de-java-127575473.jpg",
  "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
  "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
  "https://cdn.iconscout.com/icon/free/png-256/free-django-2-282855.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
];

const texto = [
  "Python es uno de mis lenguajes de programación favoritos. Lo he utilizado en una variedad de proyectos, desde análisis de datos hasta desarrollo web.",
  "Excel es otra herramienta que utilizo con frecuencia en mi trabajo diario para análisis de datos, cálculo de presupuestos entre otros.",
  "Java es otro lenguaje de programación que conozco bien. He utilizado Java para desarrollar aplicaciones empresariales, aplicaciones de escritorio y aplicaciones móviles.",
  "JavaScript es un lenguaje esencial para el desarrollo web, y lo he utilizado en muchos de mis proyectos. Me encanta la capacidad de JavaScript para crear aplicaciones interactivas y dinámicas.",
  "En cuanto a Vue, es un framework de JavaScript moderno y fácil de aprender. He utilizado Vue para crear aplicaciones web complejas y sitios web interactivos. Con Vue, puedo crear interfaces de usuario atractivas y altamente personalizables.",
  "React es otro framework popular de JavaScript que he utilizado en proyectos web. Me gusta la forma en que React organiza el código y la facilidad con la que se pueden crear componentes reutilizables. He utilizado React para crear aplicaciones web interactivas, interfaces de usuario y mucho más.",
  "Django es otro framework que conozco bien, y lo he utilizado para crear aplicaciones web de alto nivel con Python. Me encanta la facilidad con la que se puede crear una aplicación web completa en Django, desde la base de datos hasta la interfaz de usuario.",
  "En cuanto a PHP, es un lenguaje de programación popular para el desarrollo web. Lo he utilizado para crear sitios web y aplicaciones web dinámicas",
  "También he utilizado el framework Laravel para desarrollar aplicaciones web complejas y escalables. Laravel es uno de los frameworks de PHP más populares y ofrece una gran cantidad de herramientas para acelerar el desarrollo web."
];

app.get("/", (req, res) => {
  res.render("index", { habilidades, topicos, grados, imagenes, texto });
});

app.listen(3000, () => {
  console.log("Aplicación web dinámica ejecutándose en el puerto 3000");
});
