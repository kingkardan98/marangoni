function construct(id, fornArray) {
    let blackKey = './MATERIAL/key.png';
    let greenKey = './MATERIAL/key required.png';

    let Body = document.querySelector(id);
    for (i in fornArray) {
        // Creating the square first.
        let fornSquare = document.createElement('div');
        fornSquare.classList.add('catalogue');

        // Setting the id for later reference.
        fornSquare.id = fornArray[i].name;

        // Creating the link that sends the user to the relative page.
        let fornLink = document.createElement('a');
        fornLink.href = fornArray[i].url;
        fornLink.target = '_blank';

        // Creting the link's text.
        let fornName = document.createElement('p');
        fornName.innerHTML = fornArray[i].name;
        fornName.classList.add('catalogueName');

        // Wrapping the text inside the link.
        fornLink.appendChild(fornName);
        fornSquare.appendChild(fornLink);

        // Creating the logo.
        let fornLogo = document.createElement('img');
        fornLogo.src = fornArray[i].src;
        fornLogo.className += 'catalogueImage';
        fornSquare.appendChild(fornLogo);

        // Creating and appending the key icon.
        // This creates an alert with the credentials.
        let passImg = document.createElement('img');

        // Checking for the password, if it's needed or not.
        if (fornArray[i].passwordBool == true) {
            // If so, fix in place the passwords for the specific website, and append those to the alert.
            let passButton = document.createElement('a');
            let username = fornArray[i].username;
            let password = fornArray[i].password;
            passButton.addEventListener('click', () => {
                alert(`Username: ${username}\nPassword: ${password}`);
            })

            // Use the green key icon, and append it.
            passImg.src = greenKey;
            passImg.className += "password required";
            passButton.appendChild(passImg);
            fornSquare.appendChild(passButton);
        } else {
            // No link, just black key.
            passImg.src = blackKey;
            passImg.className += 'password';
            fornSquare.appendChild(passImg);
        }

        Body.appendChild(fornSquare);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Search bar definitions.
    const icon = document.querySelector(".icon");
    const search = document.querySelector(".search");
        icon.onclick = function () {
        search.classList.toggle("active");
    };

    // We define the Fornitore class.
    const Fornitore = class {
        constructor(category, name, url, src, passwordBool, username, password, tags) {
          this.category = category;
          this.name = name;
          this.url = url;
          this.src = src;
          this.passwordBool = passwordBool;
          this.username = username;
          this.password = password;
          this.tags = tags
        }
    };

    // Let's dig in deep and add every Fornitore.
    // AUTO
    let pelloni = new Fornitore('Auto', 'Pelloni', 'http://93.55.121.253/boa/login.php4', './LOGOS/pelloni.png', true, 'marangoni265', 'marangoni265', []);
    pelloni.tags = ['auto', 'pelloni', 'molle', 'filtri', 'ruote', 'pastiglie', 'distribuzione', 'catena', "pelloni ricambi","pelloni","ricambi","pelloni parts","parts pelloni","ricambi pelloni","p","pe","pel","pell","pelloni r","pelloni ri","pelloni ric","pelloni rica","pelloni ricam","pelloni ricamb"];
    let tecdoc = new Fornitore('Auto', 'TecDoc', 'https://web.tecalliance.net/tecdocsw/it/home', './LOGOS/tecdoc.png', true, '136695u8', 'marangoni', []);
    tecdoc.tags = ['auto', 'tecdoc', 'ricambi', 'targa', 'telaio', 'ricerca', "tecdoc","tec doc","tecdoc parts","tecdoc catalog","tecdoc database","t","te","tec","tecd","tecdo","tecdoc p","tecdoc pa","tecdoc par","tecdoc part"];
    let filtercenter = new Fornitore('Auto', 'FilterCenter', 'https://ecommerce.filtercenter.com/', './LOGOS/filter center.jpg', true, 'C0657', '00500801204', []);
    filtercenter.tags = ['filter', 'center', 'filtercenter', 'filtri', "filter center","filter center parts","center filters","filters center","f","fi","fil","filt","filte","filter","c","ce","cen","cent","cente","center"];

    const fornitoriAuto = [
        pelloni,
        tecdoc,
        filtercenter,
    ];

    fornitoriAuto.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    let microfiches = new Fornitore('Moto', 'Microfiches', 'https://it.microfiches.net/', './LOGOS/microfiches.png', false, '', '', []);
    microfiches.tags = ['microfiches', 'esplosi', 'tavole', "microfiches","microfiche","micro fiches","microfilm fiches","m","mi","mic","micr","micro","microf","microfi","microfic","microfich"];

    const fornitoriMoto = [
        microfiches
    ];

    fornitoriMoto.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    const fornitoriBici = [];

    fornitoriBici.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    const fornitoriGomme = [];

    fornitoriGomme.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    const fornitoriOlio = [];

    fornitoriOlio.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    // This is the correct way to concatenate arrays in JS.
    const fornitori = fornitoriAuto.concat(fornitoriMoto).concat(fornitoriBici).concat(fornitoriGomme).concat(fornitoriOlio);

    construct('#auto', fornitoriAuto);
    construct('#moto', fornitoriMoto);
    construct('#bici', fornitoriBici);
    construct('#gomme', fornitoriGomme);
    construct('#olio', fornitoriOlio);

    let input = document.querySelector('#mysearch');

    input.addEventListener('keyup', () => {
        // We gather the input, and split it in an array to create a more manageable search.
        let inputText = input.value;
        let inputArray = inputText.split(" ");

        if (inputText == "") {
            // If the input is empty, unhide all.
            for (j in fornitori) {
                let squareId = `#${fornitori[j].name}`;
                let square = document.querySelector(squareId);
                if (square.classList.contains('hidden')) {
                    square.classList.remove('hidden');
                }
            }
        } else {
            // For every word in input, and for every square on the grid, we check for the tags.
            for (i in inputArray) {
                for (j in fornitori) {
                    // We first isolate the words of the input.
                    let searchTag = inputArray[i];

                    // And define the square outside the local scopes.
                    let squareId = `#${fornitori[j].name}`;
                    let square = document.querySelector(squareId);

                    // Then the tags.
                    let tags = fornitori[j].tags;
                    if (!(tags.includes(searchTag))) {
                        // I should regather the square from the name.
                        square.classList.add('hidden');
                    } else {
                        // This ensures that if the input is changed, changes are reverted.
                        if (square.classList.contains('hidden')) {
                            square.classList.remove('hidden');
                        }
                    }
                }
            }
        }
    })
})