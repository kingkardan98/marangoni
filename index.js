document.addEventListener('DOMContentLoaded', () => {
    const icon = document.querySelector(".icon");
    const search = document.querySelector(".search");
        icon.onclick = function () {
        search.classList.toggle("active");
    };

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

    let pelloni = new Fornitore('Auto', 'Pelloni', 'http://93.55.121.253/boa/login.php4', './LOGOS/pelloni.png', true, 'marangoni265', 'marangoni265', []);
    pelloni.tags = ['auto', 'pelloni', 'molle', 'filtri', 'ruote', 'pastiglie', 'distribuzione', 'catena'];
    let tecdoc = new Fornitore('Auto', 'TecDoc', 'https://web.tecalliance.net/tecdocsw/it/home', './LOGOS/tecdoc.png', true, '136695u7 / 136695u8', 'marangoni', []);
    tecdoc.tags = ['auto', 'tecdoc', 'ricambi', 'targa', 'telaio', 'ricerca'];
    const fornitoriAuto = [
        pelloni,
        tecdoc,
    ];

    const fornitoriMoto = [];
    const fornitoriBici = [];
    const fornitoriGomme = [];
    const fornitoriOlio = [];

    const fornitori = fornitoriAuto + fornitoriMoto + fornitoriBici + fornitoriGomme + fornitoriOlio;

    let blackKey = './MATERIAL/key.png';
    let greenKey = './MATERIAL/key required.png';

    let autoBody = document.querySelector('#auto');
    for (i in fornitoriAuto) {
        // Creating the square first.
        let fornSquare = document.createElement('div');
        fornSquare.classList.add('catalogue');

        // Setting the id for later reference.
        fornSquare.id = fornitoriAuto[i].name;

        // Creating the link that sends the user to the relative page.
        let fornLink = document.createElement('a');
        fornLink.href = fornitoriAuto[i].url;
        fornLink.target = '_blank';

        // Creting the link's text.
        let fornName = document.createElement('p');
        fornName.innerHTML = fornitoriAuto[i].name;
        fornName.classList.add('catalogueName');

        // Wrapping the text inside the link.
        fornLink.appendChild(fornName);
        fornSquare.appendChild(fornLink);

        // Creating the logo.
        let fornLogo = document.createElement('img');
        fornLogo.src = fornitoriAuto[i].src;
        fornLogo.className += 'catalogueImage';
        fornSquare.appendChild(fornLogo);

        // Creating and appending the key icon.
        // This creates an alert with the credentials.
        let passImg = document.createElement('img');

        // Checking for the password, if it's needed or not.
        if (fornitoriAuto[i].passwordBool == true) {
            // If so, fix in place the passwords for the specific website, and append those to the alert.
            let passButton = document.createElement('a');
            let username = fornitoriAuto[i].username;
            let password = fornitoriAuto[i].password;
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

        autoBody.appendChild(fornSquare);
    }

    let input = document.querySelector('#mysearch');
    input.addEventListener('change', () => {
        let inputText = input.value;
        let inputArray = inputText.split(" ");
        for (i in inputArray) {
            for (j in fornitori) {
                if (!fornitori[j].tags.includes(inputArray[i])) {
                    // I should regather the square from the name.
                    let squareToHide = document.querySelector(`#${fornitori[j].name}`);
                    squareToHide.classList.add = 'hidden';
                } 
            }
        }
    })
})