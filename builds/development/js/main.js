console.log("success");
// Wait for Dom to be ready before listening for file loadings.
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('file').addEventListener('change', loadFile);
});
function loadFile(evt) {
    var selFile = evt.target.files[0];
    var reader = new FileReader();
    reader.readAsArrayBuffer(selFile);
    // Callback because file reading is async
    reader.onloadend = function (e) {
        console.log(e.total);
    };
}

//# sourceMappingURL=main.js.map
