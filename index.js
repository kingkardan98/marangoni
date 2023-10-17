/* #region Aux functions */

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
        // j starts at 1 so it doesn't append empty strings
        for (let j = 1; j <= array[i].length; j++) {
            let stringToAppend = array[i].substring(0, j);
            if (!tags.includes(stringToAppend)) {
                tags.push(stringToAppend);
            }
        }
    }
    return tags;
}

/* #endregion */

document.addEventListener('DOMContentLoaded', () => {    /* #region Search bar */
    // Search bar definitions.
    const icon = document.querySelector(".icon");
    const search = document.querySelector(".search");
        icon.onclick = function () {
        search.classList.toggle("active");
    };
    /* #endregion */

    /* #region Class definition */
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
    /* #endregion */

    // Let's dig in deep and add every Fornitore.

    /* #region Auto */
    // PELLONI - Ricambi auto
    let pelloni = new Fornitore('Auto', 'Pelloni', 'http://93.55.121.253/boa/login.php4', './LOGOS/pelloni.png', true, []);
    let pelloniCommon = tagGen(['auto', 'molle', 'pastiglie', 'barre', 'filtro', 'filtri', 'olio', 'aria', 'abitacolo', 'tergicristallo', 'febi', 'wix', 'brembo', 'trasmissione','ricambi']);
    pelloni.tags = pelloniCommon.concat(tagGen(['pelloni', 'additivi']));

    // TECDOC - Ricerca ricambi auto
    let tecdoc = new Fornitore('Auto', 'TecDoc', 'https://web.tecalliance.net/tecdocsw/it/home', './LOGOS/tecdoc.png', true, '136695u8', []);
    tecdoc.tags = tagGen(['auto', 'tecdoc', 'ricambi', 'targa', 'telaio', 'ricerca']);

    // FILTERCENTER - Ricambi filtri di ogni tipo
    let filtercenter = new Fornitore('Auto', 'FilterCenter', 'https://ecommerce.filtercenter.com/', './LOGOS/filter center.jpg', true, []);
    filtercenter.tags = tagGen(['auto', 'filter', 'center', 'filtercenter', 'filtri']);

    // BREMBO - Sistemi frenanti per auto, moto e veicoli commerciali
    let bremboAuto = new Fornitore('Auto', 'Brembo', 'https://www.bremboparts.com/europe/it', 'https://i.pinimg.com/736x/b7/5f/77/b75f7752c77c78b22f55c29917b51c45.jpg', false, []);
    bremboAuto.tags = tagGen(['brembo', 'configuratore', 'auto', 'pastiglie', 'dischi']);

    //CO.RA - Fornitore auto di barre, tappeti, liquidi ed accessori auto generici
    let cora = new Fornitore('Auto', 'CORA', 'https://coraweb.coraitaly.com/dbweb/login.phtml', 'https://www.coraitaly.com/images/2019/11/13/logo-cora.png', true, []);
    cora.tags = tagGen(['auto', 'cora', 'raffreddamento', 'paraflu', 'tappeti', 'barre', 'portasci', 'barre', 'portatutto', 'thule', 'menabo', 'prealpina', 'accessori', 'profumatori', 'lampadine', 'pile', 'duracell']);

    // CoopersFiamm - Configuratore filtri auto Coopers Fiamm
    let coopersFiammFilters = new Fornitore('Auto', 'CoopersFiaam', 'https://www.sogefifilterdivision.com/catalogues/FO/scripts/accueil.php?zone=FR&catalogue=CPF&lang=IT', 'https://i.ebayimg.com/images/g/3oQAAOSwUKFkjao~/s-l400.png', false, []);
    coopersFiammFilters.tags = tagGen(['auto', 'coopersfiaam', 'fiaam', 'coopersfiamm', 'fiamm', 'filtri', 'aria', 'olio', 'abitacolo', 'antiparticolato', 'configuratore']);

    // Aldo Romeo - Fornitore Bosch e ricambi auto specifici
    let aldoRomeo = new Fornitore('Auto', 'AldoRomeo', 'https://aldoromeo.blusys.it/indx.php?p=Login&z=000626&o=access', 'https://www.aldoromeospa.it/wp-content/uploads/2021/06/cropped-aldo-romeo-fav-192x192.png', true, []);
    aldoRomeo.tags = tagGen(['aldo romeo', 'romeo', 'bosch', 'auto', 'additivi'].concat(coopersFiammFilters.tags));

    // Kuhner - Alternatori e motori avviamento per auto e veicoli commerciali
    let kuhner = new Fornitore('Auto', 'Kühner', 'https://ecomm.daseurope.com', 'https://www.kuhner.it/img/logo.png', true, []);
    kuhner.tags = tagGen(['auto', 'kuhner', 'kühner', 'motorini avviamento', 'avviamento', 'starter', 'alternatori']);

    // LAMPA - Accessori di qualsiasi tipo di veicolo, usato per lo più per auto
    let lampa = new Fornitore('Auto', 'Lampa', 'https://b2b.lampa.it', 'https://www.lampa.it/images/logo.png', true, []);
    lampa.tags = tagGen(['auto', 'lampa', 'accessori', 'moto', 'camion', 'interni']);

    // DRA - Ricambi di carrozzeria per auto e furgoni
    let dra = new Fornitore('Auto', 'DRA', 'https://ecomm.drasrl.eu/', 'https://ecomm.drasrl.eu/img/dra-2.png', true, []);
    dra.tags = tagGen(['auto', 'dra', 'specchi', 'vetreria', 'fanali', 'carrozzeria', 'parafanghi', 'alzacristalli', 'lamierato']);

    // RHIAG - Ricambi auto, come pelloni
    let rhiag = new Fornitore('Auto', 'Rhiag', 'https://ecommerce.rhiag.com/ne/jsp/neLandingPage.jsp?out=', 'https://www.incasgroup.com/wp-content/uploads/2018/01/Rhiag_logo.png', true, []);
    rhiag.tags = pelloniCommon.concat(tagGen(['rhiag']));

    // TOPCAR - Rivenditore perlopiù di additivi e tergi classic
    let topcar = new Fornitore('Auto', 'TopCar', 'https://topcaritalia.blusys.it/indx.php?p=Login&z=001602&o=access', 'https://topcaritalia.blusys.it//images/customers/001602/logo-admin.png?_t=20231014', true, []);
    topcar.tags = tagGen(['auto', 'topcar', 'tergicristallo', 'tergicristalli', 'classic', 'additivi']);

    // JAPAN PARTS - Configuratore parti auto giapponesi
    let japanparts = new Fornitore('Auto', 'JapanParts', 'https://www.japanparts.it/it/#search-products', 'https://www.japanparts.it/assets/img/test.png', false, []);
    japanparts.tags = tagGen(['auto', 'japan', 'parts', 'giapponese', 'giapponesi']);

    const fornitoriAuto = [
        pelloni,
        tecdoc,
        filtercenter,
        bremboAuto,
        cora,
        coopersFiammFilters,
        aldoRomeo,
        kuhner,
        lampa,
        dra,
        rhiag,
        topcar,
        japanparts
    ];

    fornitoriAuto.sort(function sortForn(fornA, fornB) {
        if (fornA.name.toUpperCase() > fornB.name.toUpperCase()) {
            return 1;
        } else if (fornA.name.toUpperCase() < fornB.name.toUpperCase()) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Moto */

    // ARROW - Marmitte Moto
    let arrow = new Fornitore('Moto', 'Arrow', 'https://www.arrow.it/it/', 'https://www.arrow.it/img/newSite/ArrowLogoBlack_Base_600px.svg', false, []);
    arrow.tags = tagGen(['moto', 'arrow', 'marmitta', 'marmitte', 'silenziatore', 'silenziatori']);

    // ONE - Carene moto
    let oneCamamoto = new Fornitore('Moto', 'ONE-Camamoto', 'https://www.one-italia.com/wec/#main', 'https://www.one-italia.com/images/logo-one-italia-head.png', true, []);
    oneCamamoto.tags = tagGen(['moto', 'one', 'camamoto', 'onecamamoto', 'carena', 'carene']);

    // SIFAM - Ricambi vari per moto
    let sifam = new Fornitore('Moto', 'Sifam', 'https://www.sifam.it/v2/', 'https://www.sifam.it/v2/logo-sifam.png', true, []);
    sifam.tags = tagGen(['moto', 'sifam', 'ricambio', 'economico']);

    // MENTASTI - Paraoli e ricambi in gomma
    let mentasti = new Fornitore('Moto', 'Mentasti', './MATERIAL/Sandro-Mentasti-catalogogenerale.pdf#page=5', 'https://www.mentasti.com/wp-content/uploads/2020/03/logo-piccolo.jpg', false, []);
    mentasti.tags = tagGen(['moto', 'mentasti', 'gomma', 'manopola', 'manopole', 'soffietto', 'soffietti']);

    // R.TECH - Fornitore paramani, 
    let rtech = new Fornitore('Moto', 'RaceTech', 'https://www.rtechmx.com/', 'https://www.rtechmx.com/pub/media/logo/stores/1/logo-rtech-ok.png', false, []);
    rtech.tags = tagGen(['moto', 'racetech', 'rtech', 'paramani', 'tappi', 'tappo', 'serbatoio', 'scarico', 'olio', 'tanica', 'taniche']);

    // ATHENA - Fornitore gomme e paraoli di diverso tipo
    let athena = new Fornitore('Moto', 'Athena', 'https://www.athena.eu/it-it/', 'https://www.athena.eu/images/logo-169.ff3a50f0.svg', true, []);
    athena.tags = tagGen(['moto', 'athena', 'paraolio', 'paraoli', 'biella', 'bielle', 'pistoni', 'pistone', 'guarnizione', 'guarnizioni', 'motore', 'carter', 'soffietto', 'soffietti']);

    // MICROFICHES - Esplosi
    let microfiches = new Fornitore('Moto', 'Microfiches', 'https://it.microfiches.net/', './LOGOS/microfiches.png', false, []);
    microfiches.tags = tagGen(['moto', 'microfiches', 'esplosi', 'tavole']);

    // SBS - Configuratore pastiglie Swedish Braking System
    let sbs = new Fornitore('Moto', 'SBS', 'https://www.sbs.dk/', './LOGOS/sbs.png', false, []);
    sbs.tags = tagGen(['sbs', 'configuratore', 'pastiglie', 'moto']);

    // MOTORQUALITY - Fornitore e configuratore sistemi frenanti Brembo
    let motorquality = new Fornitore('Moto', 'Motorquality', 'https://products.motorquality.it/it/moto', 'https://cdn.worldvectorlogo.com/logos/motor-quality.svg', false, []);
    motorquality.tags = tagGen(['moto', 'brembo', 'pastiglie', 'dischi', 'kit', 'tubi', 'freno', 'configuratore']);

    // OGNIBENE - Sistemi di trasmissione per moto
    let ognibene = new Fornitore('Moto', 'Ognibene', 'https://www.ognibenechaintech.com/moto', 'https://scontent-fco2-1.xx.fbcdn.net/v/t39.30808-1/311479524_653373452902395_8221949212302286621_n.jpg?stp=dst-jpg_p480x480&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=og3EQcH33UYAX9oc2me&_nc_ht=scontent-fco2-1.xx&oh=00_AfCyKsoiOVtpPo9t2jq0zsouxmIeggJiRU1lKXUR5GbAJA&oe=652E7CC7', false, []);
    ognibene.tags = tagGen(['moto', 'trasmissione', 'corona', 'catena', 'pignone', 'kit', 'did']);

    // HIFLOFILTRO - Configuratore filtri moto
    let hiflo = new Fornitore('Moto', 'HifloFiltro', 'http://www.hiflofiltro.com/catalogue', 'http://www.hiflofiltro.com/fileadmin/res/hf-logo.jpg', false, []);
    hiflo.tags = tagGen(['moto', 'filtro', 'filtri', 'aria', 'olio', 'hiflo', 'configuratore']);

    // Bergamaschi - B2B articoli moto di ogni tipo (candele, filtri, pastiglie, dischi, sospensioni)
    let bergamaschi = new Fornitore('Moto', 'Bergamaschi', 'https://auth.bergamaschi.com/oauth2/authorize?client_id=c1026e6e-56d7-48a4-b71b-35cb979faa6d&redirect_uri=https%3A%2F%2Fb2b.bergamaschi.com%2Flogin&response_type=token&response_mode=form_post&state=aG9tZQ==', './MATERIAL/bergamaschi.jpeg', true, []);
    let commonTags = tagGen(['moto', 'ngk', 'hiflo', 'ferodo', 'cinghia', 'frizione', 'pastiglie', 'leve', 'candele', 'motorino', 'avviamento', 'disco', 'freno', 'targa', 'sospensioni', 'statore', 'ricambi', 'batterie', 'yuasa']);
    bergamaschi.tags = commonTags.concat(tagGen(['bergamaschi']));

    // LARSSON - come bergamaschi, spedizione rapida
    let larsson = new Fornitore('Moto', 'Larsson', 'https://www.larsson-italia.it/index.html', 'https://www.larsson-italia.it/_assets/105a231517144252ffbbcffd53700136/Images/Defaults/larsson_logo_800_pixels.png', true, []);
    larsson.tags = commonTags.concat(tagGen(['larsson']));

    // MOTOCROSS MARKETING - articoli per moto da cross
    let motocrossMarketing = new Fornitore('Moto', 'MotocrossMarketing', 'https://www.motocrossmarketing.com/login.asp', 'https://www.motocrossmarketing.com/img/motocrossmarketing.png', true, []);
    motocrossMarketing.tags = tagGen(['moto', 'motocross marketing', 'marketing', 'leve', 'lana', 'di', 'roccia', 'vetro', 'fermacopertone', 'bloccacopertone', 'cavo', 'frizione', 'acceleratore', 'freno', 'bottone', 'spugna']);

    // Malossi - Articoli Malossi: molle, massette, frizione, multivar, filtri
    let malossi = new Fornitore('Moto', 'Malossi', 'https://www.malossicommerce.com/Account/Login?ReturnUrl=%2F', 'https://upload.wikimedia.org/wikipedia/it/c/c8/Malossi.logo.jpg', true, []);
    malossi.tags = tagGen(['moto', 'malossi', 'massette', 'pistoni', 'gruppo termico', 'multivar', 'frizione', 'cilindro', 'filtro rosso', 'rosso', 'conico', 'filtri']);

    // SPARK PLUG CROSS REFERENCE - Tool di conversione per candele di diverse marche
    let sparkPlug = new Fornitore('Moto', 'SparkPlug', 'https://www.sparkplug-crossreference.com/', 'https://seeklogo.com/images/N/ngk-logo-93069CD40C-seeklogo.com.png', false, []);
    sparkPlug.tags = tagGen(['moto', 'candele', 'confronto', 'ngk']);

    // BRAKING - Configuratore sistemi frenanti moto
    let braking = new Fornitore('Moto', 'Braking', 'https://catalogue.braking.com/catalogue/intro.php', 'https://www.braking.com/pub/media/theme_options/default/brakingLogoRosso.jpg', false, []);
    braking.tags = tagGen(['moto', 'braking', 'dischi', 'pastiglie', 'configuratore']);

    // Dell'Orto - Ricambi specifici per carburatori Dell'Orto
    let dellOrto = new Fornitore('Moto', "DellOrto", 'http://ricambi.dellorto.it/login', 'http://ricambi.dellorto.it/images/logo.png', true, []);
    dellOrto.tags = tagGen(['moto', "dell'orto", 'orto', 'carburatore', 'getto', 'kit', 'gigler', 'spillo', 'guarnizioni', 'starter', 'mb', 'galleggiante', 'ricambi']);

    // SGR - Ricambi aftermarket per moto
    let sgr = new Fornitore('Moto', 'SGR', 'https://www.sgr-it.com/it/login.html', 'https://www.sgr-it.com/images/sgrlogo.jpg', true, []);
    sgr.tags = tagGen(['moto', 'aftermarket', 'sgr', 'leve', 'cinghia', 'batteria al litio', 'litio', 'pastiglie', 'sbs', 'cavo', 'trasmissione', 'tachimetro', 'filtro', 'filtri', 'ducati', 'supersprox']);
    
    // INNTECK - Ricambi moto
    let innteck = new Fornitore('Moto', 'Innteck', 'https://www.innteckshop.it/index.php?pg=prodotti&cr=1', 'https://www.innteckshop.it/media/immagini/innteck.svg?v=1', true, []);
    innteck.tags = tagGen(['moto', 'innteck', 'kit', 'paraolio', 'skf', 'tenuta', 'forcella', 'motorex']);
    
    // WRS - Ricerca e rivendita ricambi moto, sistemi frenanti
    let wrs = new Fornitore('Moto', 'WRS', 'https://www.wrs.it/it/login?back=my-account', 'https://www.wrs.it//img/wrs-logo-1525446047.jpg', true, []);
    wrs.tags = tagGen(['moto', 'wrs', 'scarico', 'disco', 'freno', 'pastiglie', 'sospensioni']);

    // GILPI - Ricambi originali Piaggio, KTM e altro
    let gilpi = new Fornitore('Moto', 'Gilpi', 'https://www.gilpi.it/mio-account/', 'https://www.antoniobeccaria.it/wp-content/uploads/2021/02/Logo_GILPI-150x150.png', true, []);
    gilpi.tags = tagGen(['moto', 'gilpi', 'piaggio', 'ktm', 'bmw', 'originale', 'ricambi']);

    // NRTeam - Ricambi più che altro per cross
    let nrteam = new Fornitore('Moto', 'NRTeam', 'https://www.nrteam.it/', 'https://www.nrteam.it/images/top/NRTEAM-logo.png?1', true, []);
    nrteam.tags = tagGen(['moto', 'nrteam', 'paracolpi', 'paramani', 'contatore', 'mousse', 'sfiato', 'forcella', 'cuffia']);

    // MOTORPARTS - Rivenditore da cui ci riforniamo per di più di Top Performance
    let motorparts = new Fornitore('Moto', 'Motorparts', 'https://www.motorparts.it/', 'https://www.motorparts.it/gimg/Motorparts_logo.svg', true, []);
    motorparts.tags = tagGen(['moto', 'motorparts', 'top performance', 'performance', 'pompa', 'acqua', 'minarelli', 'h2o', 'H2O']);

    // PARTS EUROPE - Rivenditore
    let partsEurope = new Fornitore('Moto', 'PartsEurope', 'https://www.partseurope.eu/en/', 'https://www.partseurope.eu/build/assets/all/images/logo/default.4de3584e.png', true, []);
    partsEurope.tags = tagGen(['moto', 'parts europe', 'europe', 'ricambi', 'configuratore', 'accessori', 'fanaleria', 'motore', 'carrozzeria', 'freno', 'disco', 'pastiglie']);

    // PBR - Corone, catene, pignoni specialistici
    let pbr = new Fornitore('Moto', 'PBR', 'https://www.pbr.it/configuratore', 'https://www.pbr.it/themes/renovate/images/logo.png', false, []);
    pbr.tags = tagGen(['moto', 'pbr', 'sprockets', 'corona', 'corone', 'catena', 'catene', 'pignone', 'pignoni']);

    // Leovince - Marmitte moto
    let leovince = new Fornitore('Moto', 'Leovince', 'https://www.leovince.com/it-it/your-bike', 'https://www.leovince.com/img/logo.svg', false, []);
    leovince.tags = tagGen(['moto', 'leovince', 'marmitta', 'marmitte', 'silenziatore', 'silenziatori']);

    // Giannelli - marmitte moto
    let giannelli = new Fornitore('Moto', 'Giannelli', 'https://www.giannelli.com/it/', 'https://www.giannelli.com/img/logo.png', false, []);
    giannelli.tags = tagGen(['moto', 'giannelli', 'marmitta', 'marmitte', 'silenziatore', 'silenziatori']);

    // MIVV - Marmitte moto
    let mivv = new Fornitore('Moto', 'MIVV', 'https://mivv.com/', 'https://mivv.com/wp-content/themes/mivv/img/logo-mivv.png', false, []);
    mivv.tags = tagGen(['moto', 'mivv', 'miw', 'marmitta', 'marmitte', 'silenziatore', 'silenziatori']);

    // AKRAPOVIC - Marmitte moto
    let akrapovic = new Fornitore('Moto', 'Akrapovic', 'http://www.akrapovic.it/scarichi-per-moto', 'https://logowik.com/content/uploads/images/akrapovic2649.jpg', false, []);
    akrapovic.tags = tagGen(['moto', 'akrapovic', 'miw', 'marmitta', 'marmitte', 'silenziatore', 'silenziatori']);

    const fornitoriMoto = [
        arrow,
        leovince,
        giannelli,
        mivv,
        akrapovic,
        microfiches,
        sbs,
        motorquality,
        ognibene,
        hiflo,
        bergamaschi,
        larsson,
        motocrossMarketing,
        malossi,
        sparkPlug,
        braking,
        dellOrto,
        sgr,
        innteck,
        wrs,
        gilpi,
        nrteam,
        motorparts,
        partsEurope,
        pbr,
        athena,
        rtech,
        oneCamamoto,
        sifam,
        mentasti
    ];

    fornitoriMoto.sort(function sortForn(fornA, fornB) {
        if (fornA.name.toUpperCase() > fornB.name.toUpperCase()) {
            return 1;
        } else if (fornA.name.toUpperCase() < fornB.name.toUpperCase()) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Bici */
    // BRN - Fornitore Bernardi, maggior parte degli articoli da bici
    let brn = new Fornitore('Bici', 'Bernanrdi', 'https://www.ordinibernardi.it/Account/Login.aspx?ReturnUrl=%2f', 'https://brn.it/wp-content/uploads/2022/12/000000029-1.jpg', true, []);
    brn.tags = tagGen(['bici', 'copertoni', 'ruote', 'raggi', 'accessori', 'camere', "d'aria", 'aria', 'cestini', 'portapacchi', 'portacesto', 'parafango']);

    // RMS - Fornitore di maggioranza di biciclette e alcuni articoli piaggio
    let rms = new Fornitore('Bici', 'RMS', 'https://login.rms.it/it/login', 'https://login.rms.it/assets/images/loghi/it/logo-RMS.svg', true, []);
    rms.tags = tagGen(['bici', 'rms', 'ruote', 'ruota', 'cerchio', 'cerchi', 'piaggio', 'vespa', 'ricambi', 'ricambio']);

    const fornitoriBici = [
        brn,
        rms
    ];

    fornitoriBici.sort(function sortForn(fornA, fornB) {
        if (fornA.name.toUpperCase() > fornB.name.toUpperCase()) {
            return 1;
        } else if (fornA.name.toUpperCase() < fornB.name.toUpperCase()) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Gomme */

    // CARLINI - Fornitore della maggiore di pneumatici
    let carlini = new Fornitore('Gomme', 'Carlini', 'https://b2b.carlinigomme.com', 'https://b2b.carlinigomme.com/content/files/LOGO%20CARLINI%20LIVE2.jpg', true, []);
    carlini.tags = tagGen(['gomme', 'carlini', 'pneumatici', "camere d'aria", 'aria', "camera d'aria", 'michelin']);

    // PMT - Fornitore di pneumatici da moto
    let pmt = new Fornitore('Gomme', 'PMT', 'https://business.pmt-tyres.it/il-mio-account/', 'https://business.pmt-tyres.it/wp-content/uploads/2021/07/logo_PMT_sito_business-1-300x57.png', true, []);
    pmt.tags = tagGen(['moto', 'gomma', 'gomme', 'pneumatico', 'pneumatici']);

    const fornitoriGomme = [
        carlini,
        pmt
    ];

    fornitoriGomme.sort(function sortForn(fornA, fornB) {
        if (fornA.name.toUpperCase() > fornB.name.toUpperCase()) {
            return 1;
        } else if (fornA.name.toUpperCase() < fornB.name.toUpperCase()) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Olio */

    let castrol = new Fornitore('Olio', 'Castrol', 'https://www.castrol.com/it_it/italy/home/car-engine-oil-and-fluids/motor-oil-and-fluids-finder.html', 'https://seeklogo.com/images/C/castrol-logo-FE5807D6DC-seeklogo.com.png', false, [])
    castrol.tags = tagGen(['castrol', 'olio', 'configuratore', 'auto', 'moto']);

    let motul = new Fornitore('Olio', 'Motul', 'https://www.motul.com/cz/en/lubricants?category_id=4null', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Motul_logo.svg/2560px-Motul_logo.svg.png', false, []);
    motul.tags = castrol.tags;

    const fornitoriOlio = [
        castrol,
        motul
    ];

    fornitoriOlio.sort(function sortForn(fornA, fornB) {
        if (fornA.name.toUpperCase() > fornB.name.toUpperCase()) {
            return 1;
        } else if (fornA.name.toUpperCase() < fornB.name.toUpperCase()) {
            return -1;
        }

        return 0;
    });

    /* #endregion */

    /* #region Page construction */
    // This is the correct way to concatenate arrays in JS.
    const fornitori = fornitoriAuto.concat(fornitoriMoto).concat(fornitoriBici).concat(fornitoriGomme).concat(fornitoriOlio);

    construct('#auto', fornitoriAuto);
    construct('#moto', fornitoriMoto);
    construct('#bici', fornitoriBici);
    construct('#gomme', fornitoriGomme);
    construct('#olio', fornitoriOlio);
    /* #endregion */

    /* #region Searchbar-related page behavior */

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
            let searchTags = [];
            for (i in inputArray) {
                if (inputArray[i] != ' ') {
                    searchTags.push(inputArray[i]);
                }
                for (j in fornitori) {
                    // We define the square outside the local scopes.
                    let squareId = `#${fornitori[j].name}`;
                    let square = document.querySelector(squareId);

                    // Then the tags.
                    let tags = fornitori[j].tags;
                    
                    // We check that the tags of the square contain all the search words.
                    let contained = searchTags.every(r => tags.includes(r));
                    if (!contained) {
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
    /* #endregion */
})