const continentDivs = document.querySelectorAll('.continent');

continentDivs.forEach(continent => {
    continent.addEventListener('click', () => {
        const continentName = continent.getAttribute('data-continent');
        window.location.href = `${continentName}.html`; // Kıtanın sayfasına yönlendirme
    });
});

document.querySelectorAll('.continent').forEach(continent => {
    continent.addEventListener('click', () => {
        alert("You selected " + continent.dataset.continent + "!");
        // İleri düzeyde, burada kıta ile ilgili yeni bir sayfa veya içerik yüklenebilir.
    });
});
