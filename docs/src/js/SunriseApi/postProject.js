///Variables
var Categories = {
    "addons": "Add-Ons",
    "textures": "Resource Packs",
    "games": "Games"
}
var converter = new showdown.Converter();
var LinkArray = location.href.split("/")

var SummaryText = document.getElementById("summary")
var TitleText = document.getElementById("title")
var DescriptionText = document.getElementById("preview-description-text")
var IconImage = document.getElementById("icon-image")
var CategoryName = document.getElementById("category")
var DownloadFile = document.getElementById("download-project-button")
///Events

firebase.firestore().collection("Posts").doc(LinkArray[LinkArray.length-1].replace("#", "")).get().then(result=>{
   let PostData = result.data()
   if(PostData){
    var markdownText = PostData.description;
    var htmlText = converter.makeHtml(markdownText);
    SummaryText.innerHTML = PostData.summary
    DescriptionText.innerHTML = htmlText;
    TitleText.innerHTML = PostData.title;
    CategoryName.innerHTML = Categories[PostData.category];
    IconImage.src = PostData.icon;
    DownloadFile.addEventListener("click", ()=>{
        window.location.href = PostData.file_path
    })
   }
   
})