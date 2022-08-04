
/*Visualiizar imagen*/

$("#imagen").change(function () {
    let imagen = this.files[0];

    if (imagen["type"] != "image/jpeg" && imagen["type"] != "image/png") {
        $("#imagen").val("");
        $(".previous").attr("src", "../Content/img/img_logo/TuLogo.png");
        alert("Debe subir una imagen en formato jpeg o png");
    } else if (imagen["size"] > 20000000) {
        $("#imagen").val("");
        $(".previous").attr("src", "../Content/img/img_logo/TuLogo.png");
        alert("La imagen debe tener como maximo 3 MB");
    } else {
        var datosImagen = new FileReader;
        datosImagen.readAsDataURL(imagen);
        $(datosImagen).on("load", function (event) {
            var rutaImagen = event.target.result;
            $(".previous").attr("src", rutaImagen);
        })
    }
})