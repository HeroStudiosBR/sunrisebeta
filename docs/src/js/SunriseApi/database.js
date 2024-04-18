function SendProjectToFirebase(ProjectStructure, ProjectFileButton){

    if(ProjectFileButton){
        let File = ProjectFileButton.files[0]
        let StorageRef = firebase.storage().ref()
        let FileRef = StorageRef.child(File.name)
        firebase.firestore().collection("Posts").add(ProjectStructure).then(result=>{
            let UploadTask = FileRef.put(File)
            UploadTask.on("state_changed", (snapshot)=>{
            },(error)=>{},()=>{
                firebase.firestore().collection("Posts").doc(result.id).update({id: result.id})
                UploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                    firebase.firestore().collection("Posts").doc(result.id).update({file_path: downloadURL})
                    location.href = "../"
                });
                
            })
        })
    }
}