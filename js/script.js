
    function validerform() {

        var facteurs = { "salarie" : 0.78, "cadre" : 0.75, "publique": 0.85, "liberale": 0.55, "portage": 0.49 };
        var radios = document.getElementsByName('regime');
        var regime;
        for(var i = 0; i < radios.length; i++){
            if(radios[i].checked){
                regime = radios[i].value;
            }
        }

        var brut = document.getElementById('abrut').value;
        var net = document.getElementById('net');
        var regimeout = document.getElementById('regimeout');
        var facteurout = document.getElementById('facteurout');
        var resultat = brut * facteurs[regime];
        regimeout.innerHTML = regime;
        facteurout.innerHTML = facteurs[regime];
        net.innerHTML = resultat;
        return true;

    }



    // Initiliser les listeners



    var radios = document.getElementsByName('regime');
    for(var i = 0; i < radios.length; i++) radios[i].addEventListener('input', function (evt) {
                    validerform();
    });

    var hbrut = document.getElementById('hbrut');
    var mbrut = document.getElementById('mbrut');
    var abrut = document.getElementById('abrut');

    hbrut.addEventListener('input', function (evt) {
        mbrut.value = Math.round(hbrut.value*152);
        abrut.value = Math.round(hbrut.value*2427);
        validerform();
    });

    mbrut.addEventListener('input', function (evt) {
        hbrut.value = Math.round(mbrut.value/152);
        abrut.value = Math.round(mbrut.value*16);
        validerform();
    });

    abrut.addEventListener('input', function (evt) {
        hbrut.value = Math.round(abrut.value/2427);
        mbrut.value = Math.round(abrut.value/16);
        validerform();
    });
