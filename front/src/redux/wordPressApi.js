const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default async function obtenerDatosPosts() {
    // Inicializa un array para almacenar los datos de los posts
    let resultados = [];
    let macetas = [];
    let plantas = [];
    let varios = [];
  
    const response = await fetch(VITE_API_BASE_URL);
    const data = await response.json();
    
    // Expresión regular para extraer contenido entre <p> y </p>
    const regex = /<p>(.*?)<\/p>/;
  
    data.posts.forEach(post => {
      // Inicializa variables para cada post
      let id = post.ID;
      let title = post.title;
      let content = '';
      let category = '';
      let imgUrl = '';
      
      // Recorta la info de content
      const contentMatch = post.content.match(regex);
      if (contentMatch) {
        content = contentMatch[1];
      }

      // Obtiene la categoria de la imagen
      category = Object.keys(post.categories);
      if (category.length > 0) {
        category = post.categories[category[category.length-1]].name; // Usa el primer attachment ID
      }
      
      // Obtiene la URL de la imagen
      const idUrl = Object.keys(post.attachments);
      if (idUrl.length > 0) {
        imgUrl = post.attachments[idUrl[idUrl.length-1]].URL; // Usa el primer attachment ID
      }
      
      // Almacena los resultados
      resultados.push({
        id,
        title,
        content,
        imgUrl,
        category
      });
    });

    resultados.forEach(element => {
      switch (element.category) {
          case "macetas":
              macetas.push(element)
              break;
  
          case "plantas":
              plantas.push(element)
              break;
  
          case "varios":
              varios.push(element)
              break;
  
          default:
              console.log("Categoría no reconocida " + {element});
              break;
      }
  });


  
    return {macetas,plantas,varios};
}