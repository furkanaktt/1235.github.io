// Resimlerin altındaki açıklamaları göstermek için JavaScript kodları
function showDescription(descriptionId) {
    var descriptions = document.querySelectorAll('.descriptions');
    descriptions.forEach(function(description) {
        description.style.opacity = '0'; // Önce tüm açıklamaların görünürlüğünü sıfırla
    });

    var targetDescription = document.getElementById(descriptionId);
    if (targetDescription) {
        targetDescription.style.opacity = '1'; // Hedef açıklamayı görünür hale getir
    }
}

// Bölümleri açıp kapatmak için JavaScript kodları
function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    var sections = document.querySelectorAll('section');

    sections.forEach(function(sec) {
        if (sec.id !== sectionId) {
            sec.style.display = 'none';
        }
    });

    var currentDisplay = section.style.display;

    if (currentDisplay === 'block' || currentDisplay === '') {
        section.style.display = 'none';
    } else {
        section.style.display = 'block';
    }
}

// Örnek olay dinleyicileri
document.addEventListener('DOMContentLoaded', function() {
    var avatar = document.querySelector('.avatar');
    avatar.addEventListener('click', function() {
        alert('Avatar resmine tıklandı!');
    });

    var headerButtons = document.querySelectorAll('.header-buttons a');
    headerButtons.forEach(function(button) {
        button.addEventListener('mouseover', function() {
            button.style.backgroundColor = 'red';
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = 'blue';
        });
    });

    var images = document.querySelectorAll('#images img');
    images.forEach(function(image) {
        image.addEventListener('dblclick', function() {
            alert('Resme çift tıklandı!');
        });
    });

    var links = document.querySelectorAll('#links a');
    links.forEach(function(link) {
        link.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Bağlantıya sağ tık menüsünü engelle
            alert('Bağlantıya sağ tıklandı!');
        });
    });
});
