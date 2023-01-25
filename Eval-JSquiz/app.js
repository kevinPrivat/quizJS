

fetch('test.json')
  .then(function (response) {
    return response.json()
  })

  .then(function (data) {
    console.log(data)

    const fichierJ = data;
    //question aléatoire
    const randomTab = fichierJ.sort((a, b) => 0.5 - Math.random());
    let index = 0;
    const questions = document.querySelector('.quest')
    questions.textContent = fichierJ[index].questions;

    const reponses = document.querySelector('.reponse1_label')
    reponses.textContent = fichierJ[index].reponses[0];

    const reponses2 = document.querySelector('.reponse2_label')
    reponses2.textContent = fichierJ[index].reponses[1];

    const reponses3 = document.querySelector('.reponse3_label')
    reponses3.textContent = fichierJ[index].reponses[2];

    const reponses4 = document.querySelector('.reponse4_label')
    reponses4.textContent = fichierJ[index].reponses[3];

    const divReponses1 = document.querySelector('.reponse1')
    const divReponses2 = document.querySelector('.reponse2')
    const divReponses3 = document.querySelector('.reponse3')
    const divReponses4 = document.querySelector('.reponse4')


    const inputReponses1 = document.querySelector('.reponse1_input')
    const inputReponses2 = document.querySelector('.reponse2_input')
    const inputReponses3 = document.querySelector('.reponse3_input')
    const inputReponses4 = document.querySelector('.reponse4_input')


    // Obtenir le bouton "VALIDER".
    const button = document.querySelector(".valider");

    let score = 0;
    
    button.addEventListener("click", funcValid)
    button.addEventListener("click", afficheScore)
    button.addEventListener("click", btnValideDisparait)

    function btnValideDisparait() {
      button.style.display = "none"
    }

    //vérifie si la réponse est juste, si oui elle s'affiche en vert
    function funcValid() {
      if (document.getElementById('reponse1').checked && randomTab[index].reponses[0] == randomTab[index].bonne_reponse) {
        divReponses1.style = "background-color: green;"
        score++;
        alert(randomTab[index].modal)
        console.log(score)
      }

      if (document.getElementById('reponse2').checked && randomTab[index].reponses[1] == randomTab[index].bonne_reponse) {
        divReponses2.style = "background-color: green;"
        score++;
        alert(randomTab[index].modal)
        console.log(score)
      }

      if (document.getElementById('reponse3').checked && randomTab[index].reponses[2] == randomTab[index].bonne_reponse) {
        divReponses3.style = "background-color: green;"
        score++;
        alert(randomTab[index].modal)
        console.log(score)
      }

      if (document.getElementById('reponse4').checked && randomTab[index].reponses[3] == randomTab[index].bonne_reponse) {
        divReponses4.style = "background-color: green;"
        score++;
        alert(randomTab[index].modal)
        console.log(score)
      }


      // vérifie si la réponse est fausse, si oui l'affiche en rouge
      if (document.getElementById('reponse1').checked && randomTab[index].reponses[0] != randomTab[index].bonne_reponse) {
        divReponses1.style = "background-color: red;"
        alert(randomTab[index].modal)
      }
      if (document.getElementById('reponse2').checked && randomTab[index].reponses[1] != randomTab[index].bonne_reponse) {
        divReponses2.style = "background-color: red;"
        alert(randomTab[index].modal)
      }
      if (document.getElementById('reponse3').checked && randomTab[index].reponses[2] != randomTab[index].bonne_reponse) {
        divReponses3.style = "background-color: red;"
        alert(randomTab[index].modal)
      }
      if (document.getElementById('reponse4').checked && randomTab[index].reponses[3] != randomTab[index].bonne_reponse) {
        divReponses4.style = "background-color: red;"
        alert(randomTab[index].modal)
      }

    }
    // affichage du score
    const scoretext = document.querySelector(".score")
    function afficheScore() {
      scoretext.textContent = "votre score : " + score;
    }


    const btnSuivant = document.querySelector(".suivant");

    btnSuivant.addEventListener("click", buttonSuiv)


    function buttonSuiv() {
      ++index
      questions.textContent = fichierJ[index].questions;
      reponses.textContent = fichierJ[index].reponses[0];
      reponses2.textContent = fichierJ[index].reponses[1];
      reponses3.textContent = fichierJ[index].reponses[2];
      reponses4.textContent = fichierJ[index].reponses[3];

      divReponses1.style = "background-color: "
      divReponses2.style = "background-color: "
      divReponses3.style = "background-color: "
      divReponses4.style = "background-color: "
      button.style.display = "block"

      if (index >= 25) {
        pageSuivante()
      }
    }

    function pageSuivante() {
      document.location.href = "index2.html";
    }

  })

