///Variables
var converter = new showdown.Converter();
var SummaryTextArea = document.getElementById("create-summary-text")
var DescriptionTextArea = document.getElementById("create-description-text")
var TitleTextArea = document.getElementById("create-title-text")
var DescriptionPreview = document.getElementById("preview-description-text")
var DescriptionPreviewCheckbox = document.getElementById("desc-preview-checkbox")
var IconPreview = document.getElementById("icon-image")
var IconUploadButton = document.getElementById("icon-upload-button")
var FileUploadButton = document.getElementById("file-upload-button")
var UploadButton = document.getElementById("upload-project-button")
///Events
UploadButton.addEventListener("click", function(){
    SendProjectToFirebase({
        title: TitleTextArea.value,
        icon: IconPreview.src,
        summary: SummaryTextArea.value,
        description: DescriptionTextArea.value,
        category: "addons",
        id: "none",
        file_path: ""
    }, FileUploadButton)
    
})
IconUploadButton.addEventListener("change", function(){
    const file = IconUploadButton.files[0]
    if(file){
        const reader = new FileReader();
        reader.addEventListener("load", function(e){
            const readerTarget = e.target
            IconPreview.src = readerTarget.result;
        })
        reader.readAsDataURL(file)
    }else{
        IconPreview.src = "images/pack_icon.png"
    }
})
DescriptionPreviewCheckbox.addEventListener("input", function(){
    DescriptionPreview.style.display = DescriptionPreviewCheckbox.checked == true ? "block" : "none"
    DescriptionTextArea.style.display = DescriptionPreviewCheckbox.checked == false ? "block" : "none"
})
DescriptionPreviewCheckbox.addEventListener("input", function(){
    DescriptionPreview.style.display = DescriptionPreviewCheckbox.checked == true ? "block" : "none"
    DescriptionTextArea.style.display = DescriptionPreviewCheckbox.checked == false ? "block" : "none"
})
DescriptionTextArea.addEventListener('input', function () {
    var markdownText = DescriptionTextArea.value;
    var htmlText = converter.makeHtml(markdownText);
    DescriptionPreview.innerHTML = htmlText;
});
SummaryTextArea.addEventListener("input", function(){
    let maxLines = SummaryTextArea.rows
    let text = SummaryTextArea.value.split("\n")
    if(text.length > maxLines){
        SummaryTextArea.value = text.slice(0, maxLines).join("\n")
    }
})