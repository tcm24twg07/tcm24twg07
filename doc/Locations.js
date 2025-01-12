document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('locationTable');
    const featuredImage = document.getElementById('featuredImage');
    const featuredCaption = document.getElementById('featuredCaption');

    // Load XML file
    fetch('locations.xml')
        .then(response => {
            if (!response.ok) throw new Error('Failed to load XML');
            return response.text();
        })
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, 'application/xml');
            const films = xml.getElementsByTagName('film');

            Array.from(films).forEach(film => {
                const row = document.createElement('tr');

                // Film/Series Name
                const name = film.getElementsByTagName('name')[0].textContent;
                const cellName = document.createElement('td');
                cellName.textContent = name;
                row.appendChild(cellName);

                // Location Name
                const location = film.getElementsByTagName('location')[0].textContent;
                const cellLocation = document.createElement('td');
                cellLocation.textContent = location;
                row.appendChild(cellLocation);

                // Nearby Spots
                const spots = film.getElementsByTagName('description')[0].textContent;
                const cellSpots = document.createElement('td');
                cellSpots.textContent = spots;
                row.appendChild(cellSpots);

                // Image
                const image = film.getElementsByTagName('image')[0].textContent;
                const cellImage = document.createElement('td');
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imgElement.alt = `${name} location`;
                imgElement.style.cursor = 'pointer';
                imgElement.addEventListener('click', () => {
                    featuredImage.src = image;
                    featuredCaption.textContent = `${name} - ${location}`;
                });
                cellImage.appendChild(imgElement);
                row.appendChild(cellImage);

                tableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            const errorRow = document.createElement('tr');
            errorRow.innerHTML = `<td colspan="4">Error loading data. <a href="locations.xml" download>Download XML</a></td>`;
            tableBody.appendChild(errorRow);
        });
});

