    /*TODO
       faire en HTML et stylisé avec CSS ( ne pas trop s'attardé sur le style, 15/20 minute pour le html/css ), ce que j'ai déssiné au tableau ( digicode )
       dans une variable vous stockerais une suite de nombre que vous aurais choisis ( ce qui sera votre code a tapé sur le digicode).
       écouté les clicks, sur les nombres et affiché les nombre dans la zone sous le digicode.
       quand on click sur le bouton 'ok' si le mot de passe est le bon alors le texte ( sous le digicode) passe vert, sinon il deviendras rouge.
       sur le bouton 'c' le click videras la zone sous le digicode.
      pour aller plus loin :
       remplace dans la zone sous le digicode les nombres par un symbole.
       le code se valideras tout seul ( sans utilisé le bouton 'ok' ).
       créé un code pour modifier votre code example : btn 'ok' cliqué 5 fois, la zone sous le digicode change de couleur, entre votre code puis 'ok', et le mot de passe du digicode est mise a jour. (edited)
          */
    // créer une varibale avec des nombres
    //créer un événement qui écoute les click sur les nombres affiché et les renvoi dans l'input
    // ma fonction click doit récupérer les chiffres
    // creer une variable afin de stocker ce qui se trouve dans le p
    // creer une boucle qui permets de remplacer le contenu de p par un caractère *
    let code = "1234";
    let digicode = document.getElementsByClassName("bttn");
    let result = document.getElementById("reponse");
    //recuperer les éléments de la liste bttn et y accrocher les évenements de click
    let deletebttn = document.getElementById("delete");
    deletebttn.onclick = ondelete;
    let typednumber = ""; // on créer une variable vide

    function checkTime(i) {
      if (i < 10) {
        return "0" + i;
      }
      return i;
    }
    function startTime() {
      let today = new Date();
      let h = today.getHours();
      let m = today.getMinutes();
      let s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      let newd = (document.getElementById("datenow").innerHTML =
        h + ":" + m + ":" + s);
      let t = setTimeout(function() {
        startTime();
      }, 1000);
    }

    startTime();

    //let checked = document.getElementById("Ok");
    //checked.onclick = onchecked;

    for (let i = 0; i < digicode.length; i++) {
      digicode[i].addEventListener("click", setnumber);
    }
    function setnumber(e) {
      let element = e.target.innerText;
      // on crée une condition pour comparer la longueur de ce que je tape et
      // la longueur du code déja fourni dans la variable code
      if (typednumber.length < code.length) {
        // le += sert à recupérer le texte chaque fois qu'on clique sur le target
        typednumber += element;
        result.innerText = "";
        for (let i = 0; i < code.length; i++) {
          // le split sert à former un tableau avec nos données entrée en cliquant et on récupere l'index [i] et le compare à undefined"
          console.log(
            "typedNumb est de type :",
            typeof typednumber,
            "ont le passe en tableau",
            typednumber.split(""),
            "on regarde si a l'index :",
            i,
            " il y a :",
            typednumber.split("")[i]
          );
          if (typednumber.split("")[i] != undefined) {
            result.innerText += " *";
          } else {
            result.innerText += " _ ";
          }
        }
        if (typednumber.length === code.length) {
          onchecked();
        }
      }
      e.target.classList.add("lastActived"); // on target la fonction dont le paramètre est e et on y ajoute setTimeout()
      setTimeout(removeLastActived, 500, e.target.classList);
    }

    function ondelete(e) {
      result.innerText = "";
      typednumber = "";
      result.classList.remove("valid", "unvalid");
    }

    function onchecked() {
      // console.log(result.innerText, code);
      // let reponse = e.target;
      if (typednumber == code) {
        result.classList.add("valid");
      } else {
        result.classList.add("unvalid");
      }
      setTimeout(btnremoveclass, 2000);
    }

    function btnremoveclass() {
      result.classList.remove("valid", "unvalid");
      ondelete();
    }

    function removeLastActived(eClassList) {
      eClassList.remove("lastActived");
    }

    //mettre des underscore si rien n'est afficher , sinon mettre des étoiles