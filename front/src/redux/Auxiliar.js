//https://developer.wordpress.com/docs/api/

export default async function obtenerDatosPosts() {
    // Inicializa un array para almacenar los datos de los posts
    let resultados = [];
  
    const response = await fetch('https://public-api.wordpress.com/rest/v1.1/sites/ecoplantascomar.wordpress.com/posts/');
    const data = await response.json();
    
    // Expresión regular para extraer contenido entre <p> y </p>
    const regex = /<p>(.*?)<\/p>/;
  
    data.posts.forEach(post => {
      // Inicializa variables para cada post
      let id = post.ID;
      let title = post.title;
      let content = '';
      let imgUrl = '';
      
      // Recorta la info de content
      const contentMatch = post.content.match(regex);
      if (contentMatch) {
        content = contentMatch[1];
      }
      
      // Obtiene la URL de la imagen
      const idUrl = Object.keys(post.attachments);
      if (idUrl.length > 0) {
        imgUrl = post.attachments[idUrl[0]].URL; // Usa el primer attachment ID
      }
      
      // Almacena los resultados
      resultados.push({
        id,
        title,
        content,
        imgUrl
      });
    });
  
    return resultados;
}