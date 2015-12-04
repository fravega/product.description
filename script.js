$(function() {
	function CKupdate() {
		CKEDITOR.instances.descripcion.setData("")
		CKEDITOR.instances.imagen.setData("")
		CKEDITOR.instances.sonido.setData("")
		CKEDITOR.instances.conectividad.setData("")
		CKEDITOR.instances.caracteristicas.setData("")
		CKEDITOR.instances.dimensiones.setData("")
	}

	CKEDITOR.on('instanceReady', function(ev) {
		ev.editor.on('paste', function(evt) {
			evt.data['html'] = '<!--class="Mso"-->' + evt.data['html'];
		}, null, null, 9);
	});

	CKEDITOR.replace('descripcion');
	CKEDITOR.replace('imagen');
	CKEDITOR.replace('sonido');
	CKEDITOR.replace('conectividad');
	CKEDITOR.replace('caracteristicas');
	CKEDITOR.replace('dimensiones');

	CKupdate();

	$("nav#sub-menu ul li").on("click", function() {
		if ($(this).attr("rel") != "html") {
			$('li[rel="html"]').hide();
		}
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var _rel = "div[rel='" + $(this).attr("rel") + "']";
		$(_rel).siblings("div").hide();
		$(_rel).show();
	});

	$("#generar").on("click", function() {
		$('li[rel="html"]').show();
		$('li[rel="html"]').trigger("click");
		var descripcion = CKEDITOR.instances.descripcion.getData();
		var imagen = CKEDITOR.instances.imagen.getData();
		var sonido = CKEDITOR.instances.sonido.getData();
		var conectividad = CKEDITOR.instances.conectividad.getData();
		var caracteristicas = CKEDITOR.instances.caracteristicas.getData();
		var dimensiones = CKEDITOR.instances.dimensiones.getData();
		var _descripcion = "<div class='descripcion'><h2><i class='fa fa-file-text-o'></i> Descripción</h2>" + descripcion + "</div>";
		var _imagen = "<div class='imagen'><h2><i class='fa fa-picture-o'></i> Imagen</h2><div class='image'></div><div class='text'>" + imagen + "</div></div>";
		var _sonido = "<div class='sonido'><h2><i class='fa fa-music'></i> Sonido</h2><div class='text'>" + sonido + "</div><div class='image'></div></div>";
		var _conectividad = "<div class='conectividad'><h2><i class='fa fa-wifi'></i> Conectividad</h2><div class='image'></div><div class='text'>" + conectividad + "</div></div>";
		var _caracteristicas = "<div class='caracteristicas'><h2><i class='fa fa-star'></i> Características especiales</h2>" + caracteristicas + "</div>";
		var _dimensiones = "<div class='dimensiones'><h2><i class='fa fa-arrows-alt'></i> Dimensiones</h2>" + dimensiones + "</div>";
		$('div[rel="html"] textarea').text(_descripcion + _imagen + _sonido + _conectividad + _caracteristicas + _dimensiones);
	});
	$("#clean").on("click", function() {
		$('li[rel="html"]').hide();
		$('li[rel="descripcion"]').trigger("click");
		CKupdate();
	});
});