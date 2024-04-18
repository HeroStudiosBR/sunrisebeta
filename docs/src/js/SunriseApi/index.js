//Variables
var Posts = {
  all_posts: [
    {
      link_name: "post-name",
      category: "addons",
      title: "Post incrivel meu",
      icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      description_resume: "Simples",
      description: "Descriçao auto mode",
    },
    {
        link_name: "post-name",
        category: "addons",
        title: "Items Plus",
        icon: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        description_resume: "Mais Items para seu jgoo",
        description: "Descriçao auto mode",
    },
    {
        link_name: "post-name",
        category: "textures",
        title: "Minecraft Enchache",
        icon: "../../images/pack_icon.png",
        description_resume: "Melhore o visual do seu jogo",
        description: "Descriçao auto mode",
    },
    {
        link_name: "post-name",
        category: "games",
        title: "Lost Caves",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXbyLvTsuIde58Q20O__YkT8Ry6ASkZKrfJQ&usqp=CAU",
        description_resume: "Aventure-se nas cavernas profundas",
        description: "Descriçao auto mode",
    }
  ]
}
//Functions
function GeneratePosts(postId, categoryName){
    let PostCategory = document.getElementById(postId).getElementsByClassName("list")[0]
    firebase.firestore().collection("Posts").get().then(result =>{
        result.docs.forEach(doc=>{
           let postData = doc.data()
           if(postData.category == categoryName){
            let postButton = document.createElement("button")
            let title = document.createElement("p")
            let desc = document.createElement("p")
            let icon = document.createElement("img")
            title.className = "content_title"
            desc.className = "content_desc"
            icon.className = "content_icon"
            postButton.className = "content_button"
            icon.src = postData.icon
            title.textContent = postData.title
            desc.textContent = postData.summary
            postButton.appendChild(icon)
            postButton.appendChild(title)
            postButton.appendChild(desc)
            PostCategory.appendChild(postButton)
            postButton.addEventListener("click", function(){
              location.href = "project#"+postData.id
            })
           }
        })
    })
}
//Start
GeneratePosts("addons-newer", "addons")
GeneratePosts("textures-newer", "textures")
GeneratePosts("games-newer", "games")