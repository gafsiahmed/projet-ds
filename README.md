Le carrousel
## Enoncé
Afficher un diaporama de photos avec un titre sous la forme d'un carrousel
(quand on est à la fin, on revient au début et inversement).
Une barre d'outils permet à l'utilisateur d'avancer ou de reculer manuellement
dans le diaporama, de démarrer ou arrêter le carrousel, etc. Le diaporama
réagit également au clavier.
## Consignes
### HTML
Dans l'en-tête de la page :
* Ajouter un titre au programme : "Sliders".
* Créer une interface de navigation pour la barre d'outils, avec un hyperlien
permettant d'afficher ou de cacher la barre d'outils.
Par défaut :
* Une fenêtre de 5 miniatures est affichée en bas de la page avec la
possibilité de naviguer d’une page à la suivante ou inversement (Figure 1).
* au clic, la miniature prend une apparence différente et la photo
correspondante s’affiche dans la zone principale.
Quand on clique sur la barre d’outils, les miniatures sont masquées et un menu
composé par les boutons suivants est affiché (Figure 2):
* Un bouton pour reculer dans le diaporama.
* Un bouton pour démarrer ou arrêter le carrousel.
* Un bouton pour avancer dans le diaporama.
* Un bouton pour se déplacer aléatoirement dans le diaporama.
Dans la partie principale de la page :
* Créer une figure représentant le diaporama, avec une seule image et un seul
titre pour les balises. Ne pas oublier de mettre un texte alternatif pour
l'image pour le référencement.
### CSS
* Les boutons de la barre d'outil sont disposés les uns à côté des autres,
utiliser Font Awesome pour les icônes des boutons.
* Utiliser la font web *Open Sans* de chez Google pour l'ensemble de
l'exercice.
### Interactions
* Quand on clique sur l'hyperlien de l'interface de navigation les boutons de
la barre d'outils s'affichent ou se cachent, comme un bouton on/off.
* Quand on clique sur les boutons de la barre d'outils l'une des actions
spécifiées précédemment s'exécute.
* Quand on appuie sur la touche Espace du clavier, le carrousel démarre ou
s'arrête alternativement, comme un bouton on/off.
* Quand on appuie sur les touches fléchées gauche et droite du clavier on peut
respectivement reculer et avancer dans le diaporama.
## Détails
* Il faut séparer le code réutilisable dans d'autres projets du code
spécifique au projet.
* Organiser le code en trois parties : les variables, les fonctions et enfin
le code principal.
* Nommer correctement les gestionnaires d'évènements pour qu'ils aient un
sens.
* Pour le quatrième bouton de la barre d’outils, faites en sorte que le choix
aléatoire soit différent de l'endroit où se trouve actuellement.
* Penser à animer le changement d'images du slider : Il y a 2 animations à
gérer : l'animation de l'ancienne image qui disparaît et l'animation de la
nouvelle image qui apparaît. Les animations pourront être faites directement
en CSS.

