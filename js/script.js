function initMap() {
    // Coordenadas de Blumenau
    var blumenau = { lat: -26.9194, lng: -49.0661 };
    // Locais dos eventos
    var locaisEventos = [
        { lat: -26.91547869578762, lng: -49.08467250306902, titulo: 'oktoberfest', descricao: 'A maior festa que temos em Blmenau' },
        { lat: -26.9153365269023, lng: -49.084748622113445, titulo: 'cãominhada', descricao: 'um dos pouucas eventos para voc~e participar junto ao seu pet' },
        { lat: -26.91288697441228, lng: -49.067752074233404, titulo: 'Révellion', descricao: '“Será com toda certeza um grande espetáculo para blumenauenses e turistas.o révellion de blumenau é um maximo ' }
    ];
    // Criação do mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: blumenau
    });
    // Adicionando marcadores no mapa
    locaisEventos.forEach(function (evento) {
        var marker = new google.maps.Marker({
            position: { lat: evento.lat, lng: evento.lng },
            map: map,
            title: evento.titulo
        });
        var infowindow = new google.maps.InfoWindow({
            content: '<h5>' + evento.titulo + '</h5><p>' + evento.descricao + '</p>'
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });
}

-26.91547869578762, -49.08470995729517