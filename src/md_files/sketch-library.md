# Sketch Library

## Bibliothèque partagée avec contrôle de versions

### 1-Installer l'application “GitHub Desktop”

- Télécharger [GitHub Desktop](https://desktop.github.com/).
- Créer un compte.
- À partir de là, il me faut votre nom d'utilisateur ou votre adresse mail renseigné lors de la création de votre compte GitHub pour que je puisse vous inviter à collaborer sur la bibliothèque sketch.
- Votre mot de passe reste confidentiel.
- Une fois que vous m'avez donné votre identifiant GitHub et que je vous ai ajouté comme collaborateur :
- accéder à la boite mail que vous avez utilisé lors de la création de votre compte GitHub.
- Ouvrir le mail Expéditeur : Becquet<noreply@github.com> > cliquer sur le bouton “View invitation”.
- Sur la page https://github.com/Becquet/sketch_shared_lib > Accept invitation

### 2-Configurer GitHub Desktop

- Première utilisation de GitHub Desktop :
- Sign in > renseigner :
  - Username or email address (renseigné lors de l'étape 0)
  - Password (renseigné lors de l'étape 0)
- **!Important : Pour passer à l'étape 3 vous devez avoir été invité à collaborer sur le projet et avoir accepter la collaboration (étape 0)**

### 3-Récupérer la (les) bibliothèque(s) partagée(s) depuis GitHub Desktop.app

- Clone a Repository from the internet…
- 3 ème onglet > URL
- Premier champ > Repository URL or… > renseigner :
  - https://github.com/Becquet/sketch_shared_lib
- Second champ > Local Path:
  - soit garder le chemin proposé par l'application GitHub Desktop :
    - /Users/votreNomDUtilisateur/Documents/**GitHub**/sketch_shared_lib
    - ou choisir un emplacement de votre choix, il peut se trouver n'importe ou sur votre machine.  
    Il servira à stocker une copie de la bibliothèque partagée.
- Valider avec > Clone

### 4-Utilisation de la bibliothèque fraichement récupéré

- Ouvrir votre projet.sketch.
- Dans Sketch.app :
  - Sketch > Preferences > Libraries > Add Library…
  - Naviguer jusqu'à “Local Path” utilisé lors de l'étape 3
  - /Users/votreNomDUtilisateur/Documents/**GitHub**/sketch_shared_lib ou votre chemin perso
  - Open
- 🎉 Et voila…
- Maintenant si un élément est mis à jour dans cette bibliothèque une notification apparait dans le coin supérieur droit de l'interface Sketch.

### 5-Mise à jour de la bibliothèque

- récupération des modifications :
- ouvrir GitHub Desktop
- Dans le volet de gauche “Current Repository”
  - Sélectionner le répertoire à mettre à jour avec la flèche vers le bas ˯ ex: sketch_shared_lib
- Dans le volet de droite cliquer sur “Fetch origin”
  - Et voila… 🎉

### 6-Apporter des modifications à la bibliothèque partagée

- Sketch.app :
- Ouvrir le fichier cloné (celui de l'étape 1-Récupérer…) deux solutions :
  - Dans le fichier.sketch en cours > Panneau de droite > APPEARANCE > Aa sketch_shared_lib/Hero/…  
  \> Open Text Style in Library…
- Ou ouvrir directement le fichier source:
  - /Users/votreNomDUtilisateur/Documents/**GitHub**/sketch_shared_lib
- Apporter les modifications nécessaires et fermer le fichier.  
À ce niveau les modification sont locales elles n'apparaissent pas encore sur les fichiers sketch des autres utilisateurs qui utilisent la lib : sketch_shared_lib

- Retourner dans GitHub Desktop:
- Sur le panneau de gauche (Current Repository) un petit 1 indique une modification sur la dite bibliothèque.
- Ajouter une description dans le champ _Description_ au dessus du bouton Commit to **master** toujours dans la partie gauche de l'interface.
- Ex de message : Font Hero Desktop decreased from 36 to 30px  
\> valider avec le bouton > Commit to **Master**
- Pour finir pousser les modification sur GitHub pour les partager avec les différents collaborateurs :
  - Partie droite de l'interface : bouton Push origin
- Et voila… 😎!
- Maintenant tous les fichier.sketch qui dépendant de cette lib auront une pastille Mauve dans le coin supérieur droit de l'interface : “Library Updates Available”.
- On peut accepter la (les) modification(s) > Library Updates Available > Update Components.
- À noter qu'un visuel permet de voir clairement la (les) modification(s).

### ajouter un contributeur à la bibliothèque sketch

- Sur le compte master (EX: https://github.com/Becquet/)
- Aller sur l'onglet Settings > Collaborators
- Ajouter un collaborateur soit avec son username ou son email > Add collaborator

- Sur le compte du collaborateur accepter l'invitation (une notification est affichée dans la cloche en haut à droite de l'interface).
- Becquet invited you to collaborate > Accept invitation
- Et voila le nouveau collaborateur peut mettre à jour le bibliothèque (un compte gratuit 3 collaborateurs au max).

## Changer les styles de text local par ceux de la bibliothèque externe

- Plugin Automate > Library…
- Sur des style de texte  
  \> Change Local Text Style to Library Text Style
- Sur des styles de calques  
  \>  Change Local Layer Style to Library Layer Style

## Questions

- Doit on avoir une lib bien four tout (Font + colors + icons + modal + forms etc…) ou la découper dans des fichiers séparés par éléments [Font colors,, icons, modal, forms, etc…] ?

## Améliorations

- Mise à jour : émettre une notification sur la messagerie Slack : [connect GitHub to Slack](https://get.slack.help/hc/en-us/articles/232289568-GitHub-for-Slack)

## Source

- article Medium: [How to create a version controlled Sketch Library for your distributed team using Github](https://medium.com/@gaznet/how-to-create-a-version-controlled-sketch-library-for-your-distributed-team-using-github-4a767a93351e)

# Zeplin organizing assets

## Source

- video [learnux.io](https://learnux.io/course/zeplin)