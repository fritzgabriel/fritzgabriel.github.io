let lang = window.navigator.language;
window.addEventListener('load', redirect);

function redirect(){
  if (lang === "fr-FR" | lang === "fr-CH" | lang === "fr-CA" | lang === "fr-LU") {
    window.location.href = "./fr/index.html";
  } else {
    window.location.href = "./en/index.html";
  }
}
