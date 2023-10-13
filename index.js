function hideRow(row) {
    row.classList.add('hidden');
}

function unhideRow(row) {
    row.classList.remove('hidden');
}

function checkRow(row) {
    let allHidden = true;
    // Since the first child of the row is the title, we start from i = 1
    let catalogues = row.querySelectorAll('.catalogue');
    for (let i = 0; i < catalogues.length; i++) {
        if (!catalogues[i].classList.contains('hidden')) {
            allHidden = false;
        }
    }

    // If after the check allHidden = true, no catalogues have been found.
    if (allHidden) {
        row.classList.add('hidden');
    } else {
        row.classList.remove('hidden');
    }
}

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
            // Use the green key icon, and append it.
            passImg.src = greenKey;
            passImg.className += "password required";
            fornSquare.appendChild(passImg);
        } else {
            // No link, just black key.
            passImg.src = blackKey;
            passImg.className += 'password';
            fornSquare.appendChild(passImg);
        }

        Body.appendChild(fornSquare);
    }
}

function tagGen(array) {
    let tags = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j <= array[i].length; j++) {
            let stringToAppend = array[i].substring(0, j);
            if (!tags.includes(stringToAppend)) {
                tags.push(stringToAppend);
            }
        }
    }
    return tags;
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
          this.tags = tags
        }
    };

    // Let's dig in deep and add every Fornitore.

    /* #region Auto */
    // PELLONI
    let pelloni = new Fornitore('Auto', 'Pelloni', 'http://93.55.121.253/boa/login.php4', './LOGOS/pelloni.png', true, []);
    pelloni.tags = tagGen(['pelloni', 'auto', 'molle', 'pastiglie', 'barre', 'filtro', 'olio', 'aria', 'abitacolo', 'tergicristallo', 'febi', 'wix', 'brembo', 'trasmissione','ricambi']);

    // TECDOC
    let tecdoc = new Fornitore('Auto', 'TecDoc', 'https://web.tecalliance.net/tecdocsw/it/home', './LOGOS/tecdoc.png', true, '136695u8', []);
    tecdoc.tags = tagGen(['auto', 'tecdoc', 'ricambi', 'targa', 'telaio', 'ricerca']);

    // FILTERCENTER
    let filtercenter = new Fornitore('Auto', 'FilterCenter', 'https://ecommerce.filtercenter.com/', './LOGOS/filter center.jpg', true, []);
    filtercenter.tags = tagGen(['filter', 'center', 'filtercenter', 'filtri']);

    // BREMBO
    let bremboAuto = new Fornitore('Auto', 'Brembo', 'https://www.bremboparts.com/europe/it', 'https://www.bremboparts.com/images/logo.svg', false, []);
    bremboAuto.tags = tagGen(['brembo', 'configuratore', 'auto', 'pastiglie', 'dischi']);

    const fornitoriAuto = [
        pelloni,
        tecdoc,
        filtercenter,
        bremboAuto,
    ];

    fornitoriAuto.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Moto */

    // MICROFICHES - Esplosi
    let microfiches = new Fornitore('Moto', 'Microfiches', 'https://it.microfiches.net/', './LOGOS/microfiches.png', false, []);
    microfiches.tags = tagGen(['microfiches', 'esplosi', 'tavole']);

    // SBS - Configuratore pastiglie
    let sbs = new Fornitore('Moto', 'SBS', 'https://www.sbs.dk/', './LOGOS/sbs.png', false, []);
    sbs.tags = tagGen(['sbs', 'configuratore', 'pastiglie', 'moto']);
    const fornitoriMoto = [
        microfiches,
        sbs
    ];

    fornitoriMoto.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Bici */
    const fornitoriBici = [];

    fornitoriBici.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Gomme */

    const fornitoriGomme = [];

    fornitoriGomme.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Olio */

    let castrol = new Fornitore('Olio', 'Castrol', 'https://www.castrol.com/it_it/italy/home/car-engine-oil-and-fluids/motor-oil-and-fluids-finder.html', 'https://www.castrol.com/apps/settings/wcm/designs/refresh/castrol/images/reignite/logo.svg', false, [])
    castrol.tags = tagGen(['castrol', 'olio', 'configuratore', 'auto', 'moto']);

    const fornitoriOlio = [
        castrol,
    ];

    fornitoriOlio.sort(function sortForn(fornA, fornB) {
        if (fornA.name > fornB.name) {
            return 1;
        } else if (fornA.name < fornB.name) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

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

        // Right here, we put the listener for the row.
        let rows = document.querySelectorAll('.row');
        rows.forEach((row) => {
            checkRow(row);
        });
    })
})