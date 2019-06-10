# Responsive design patterns <div style="text-align: right; font-size: 16px;">Ethan Marcotte</div>

## Chapitre 1 { Du + petit au + grand }

### sites responsive

- [ RESPONSIVE WEB DESIGN ](https://responsivewebdesign.com/podcast/capital-one-part-two/)
- [ L'année en recherche 2018 Google ](https://trends.google.fr/trends/yis/2018/GLOBAL/)
- [ ushahidi ](https://www.ushahidi.com)

### Bibliothèque de modèles ou guides de styles

> regroupé sous l'appellation _design patterns_

- [ mailchimp patterns ](https://ux.mailchimp.com/patterns/)
- [ starbucks styleguide ](https://www.starbucks.com/static/reference/styleguide/)
- [ starbucks react styleguide ](https://www.starbucks.com/developer/pattern-library/components/headings/)

## Chapitre 2 { Navigation }

**La navigation d'un site doit être une boussole pour les nouveaux utilisateurs et
ainsi les guider vers leur destination.**

> Je ne suis peut-être pas allé là où je voulais aller,
> mais je pense que je suis arrivé là où je devait être.
> -- <cite>Douglas Adams</cite>

### l'interrupteur afficher/masquer

- [ Responsive web design : l'en-tête menu < 909 ](https://responsivewebdesign.com/workshop/)

### Le menu hors canvas

- [ le site du Time ](http://time.com/)
- [ Walmart pas diff interrupteur ? ](https://www.walmart.ca/en)
- [ zurb exemple ](https://zurb.com/playground/off-canvas-layouts)
- [ wayback machine ](https://web.archive.org/web/20130819090807/http://stephanierieger.com/a-plea-for-progressive-enhancement)

### Menus à chargement conditionnel

- [ fivethirtyeight ](https://web.archive.org/web/20140901012941/http://fivethirtyeight.com/)

### Animation burger menu

- [ Le site du Time ](http://time.com/)

### Problème des tiroirs de navigation masqué

> L'inconvénient de pouvoir afficher beaucoup d'options,
> c'est que vous pouvez afficher beaucoup d'options. Et c'est
> certainement ce que vous ferez. Le potentiel d'abus est énorme…
> Vous voyez bien que les tiroirs de toutes sortes ont une fâcheuse
> tendance à se remplir de trucs inutiles.
> -- <cite>_Mike Stern évangéliste UX Apple_</cite>

### Modèles alternatifs

#### le dévoilement progressif

- [ BBC news ](https://www.bbc.com/news)
  - More et Sections.

#### Devenir plus responsive

- La présentation de la navigation par Chris Mulholland [ ( The Guardian ) ](https://advertising.theguardian.com/advertising) :

> Il attribue la conception du menu à trois facteurs :

1. Une analyse approfondie des objectifs de design
2. Une itération rapide d'un certain nombre de solutions potentielles
3. Surtout une implication précoce des utilisateurs dans le processus de design.

- [ Joe Stewart ](http://allcaps.cc/) ( design de Virgin America, partenaire de l'agence de design Work & Co )

> S'exprime de façon similaire - à savoir que le prototypage n'influence pas seulement le processus de design, il est le processus de design.

- Il ne s'agit pas de créer des prototypes de mise en page, mais de commencer véritablement notre travail créatif directement dans le navigateur. Et il y a de vrais avantages à cela : le navigateur est, après tout, une toile complètement flexible, et aucune application de design de bureau existant actuellement ne peut battre son adaptabilité intrinsèque.

> Je suis d'accord sur ce principe, jusqu'à un certain point. Je pense que l'approche doit avant tout convenir au designer. Si vous êtes plus alaise en pensant HTML et CSS, super ! Il est plus important de reconnaitre que chaque outil présente des forces et des faiblesses, et que vous avez intérêt à <u>emprunter la voie la plus rapide</u>.
> -- <cite>_Joe Stewart_</cite>

> Mon partenaire de design, Felipe, utilise illustrator pour tout, parce que c'est l'outil le plus rapide pour lui. Selon moi peut importe comment vous arrivez au résultat final. Si vous obtenez quelque chose à mettre entre les mains de quelqu'un pour recevoir du feedback, vous avez atteint votre objectif. La méthode employée importe peu.
> -- <cite>_Ethan Marcotte_</cite>

- Conclusion :

Les maquettes perdent leur statut de point final, c'est-à-dire de document de design destiné au client ou de livrable définitif. Notre métier manque encore d'un outil de design qui reflète l'instabilité des réseaux pour lesquels nous concevons, les divers modes d'interaction disponibles sur les appareils de nos utilisateurs et la flexibilité de la toile.

> Nous pouvons toujours essayer de deviner ce que veulent nos lecteurs, mais il n'y a rien de mieux de leur présenter des prototypes dès que possible.
> -- <cite>_Chris Mulholland_</cite>

**_Donner la priorité aux prototypes plutôt qu'aux documents Photoshop._**

#### Adapter la mise en page

Même avec les meilleurs intentions nos hypothèses de design ne se vérifient pas toujours.
Dans ce cas nous devons revoir une partie de notre travail, cela s'applique tout particulièrement aux systèmes de navigation responsive.
MailChimp a constaté que la navigation responsive de son application web, qui comporte une barre d'outils fixe, avait tendance à masquer d'autres éléments de l'interface. [En simplifiant la mise en page](https://mailchimp.com/), ils ont non seulement réglé ce problème mais aussi considérablement améliorer l'utilisation du menu.
Plutôt que d'adopter une approche complexe, nous devrions chercher des occasions d'en faire moins.

Les liens constituent une signalétique précieuse, ils doivent être traités comme des citoyens de première catégorie.

Les modèles de navigation ne doivent pas nécessairement être appliqués uniformément sur un site web. Nous pouvons déterminer de façon plus sélective et nuancée comment, où et pourquoi nous utilisons ces modèles dans notre travail.

Le design de [Franck Chimero](https://frankchimero.com/design/), une approche réservé pour sa navigation. Que votre écran soit gigantesque ou minuscule la navigation est toujours visible.

Cela ne veut pas dire qu'un système de navigation responsive complexe ne peut pas être élégant comme l'ont démontré le [BBC](https://www.bbc.com/news) et le [Guardian](https://www.theguardian.com/international). Mais nous avons tout intérêt à simplifier nos interfaces dès que l'occasion s'en présente.
Nos utilisateurs nous en remercieront.

## Chapitre 3 { Images et vidéos }

> Tant de films réalisés aujourd'hui ne sont que des photographies de gens qui parlent.
> -- <cite>_Alfred Hitchcock_</cite>

La meilleur façon de produire des images flexibles ne demande qu'une seul ligne de CSS :

```css
img {
  max-width: 100%;
}
```

Découverte par le designer Richard Rutter, cette simple règle indique que nos images peuvent être rendues dans n'importe quelle taille, du moment que la largeur n'excède jamais la largeur de leur conteneur.
Avec les grilles fluides et les médias queries, les images fluides sont l'un **des trois tenants** d'une mise en page responsive.
Selon moi max-width n'est qu'une partie de l'équation.

### Vers des vidéos fluides

Max-width : 100% peut sembler être une bonne solution mais ce n'est pas aussi simple que ça.

```css
img,
object,
video {
  max-width: 100%;
}
```

La largeur de la vidéo variera en même temps que notre grille fluide, mais la hauteur restera inchangée.
Pour comprendre pourquoi observons le balisage :

```html
<video src="video-main.mp4" height="547" width="972"></video>
```

_Certains services tiers demandent d'utiliser un élément object ou iframe.
La technique suivante fonctionne aussi avec ces éléments._

Contrairement aux images, les vidéos et autres objets intégrés n'ont pas de dimensions intrinsèques, nous devons la préciser dans notre HTML. Appliquer height : auto donne une hauteur de zéro à la vidéo qui est donc invisible.

Il existe un tas de méthode pour redimensionner les vidéo, la plupart nécessitent un peu de JavaScript.
Ces solutions JavaScript qui utilisent l'événement resize on un problème de performance voir font planter le navigateur.

Par chance, ce problème de fluidité des vidéo a été résolu. Et en prime il ne demande pas un poil de JavaScript 😎.
Ce que nous voulons c'est de préserver la largeur et la hauteur.

Il se trouve que ces deux occurrences ont un lien fondamental : le ratio d'aspect, mesuré d'un coin à l'autre de la vidéo.

Nous pouvons calculer ce ratio d'aspect à l'aide d'une simple formule :

```javascript
hauteur / largeur = "ratio d'aspect"
```

#### Exemple sur notre vidéo 972x547

```math
547 / 972 = 0.562757202
```

La hauteur de la vidéo doit mesurer environ 56 % de sa largeur.

Ajustement du balisage :

```html
<div class="player">
  <video src="video-main.mp4" height="168" width="300"></video>
</div>
```

```css
.player {
  padding-top: 56.2757202%;
}
```

Attribut padding-top correspondant au ratio d'aspect calculé précédemment.
Selon CSS les pourcentages de padding-top et padding-bottom sont relatifs à la largeur du bloc conteneur, pas à sa hauteur. Cette marge verticale sera toujours égale à 56.2757202% de la largeur de la boîte.

```css
.player {
  position: relative;
  padding-top: 56.2757202%;
}
.player video {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
```

Position relative sur .player créer un contexte de positionnement.
Tout élément positionné de façon absolue dans ce conteneur sera positionné relativement à .player plutôt qu'à viewport.
C'est ce qui permet à la seconde règle de fonctionner : la position de la vidéo dans le coin supérieur gauche de .player et height, width de la vidéo à 100%.

```css
.intro {
  background: url('bg-demo.jpg') no-repeat;
  background-size: 250px 400px;
}
```

De plus si nous donnons une valeur auto à l'une des dimensions, l'image se redimensionnera proportionnellement à une largeur ou un hauteur spécifique sans modifier le ration d'aspect.

```css
.intro {
  background: url('bg-demo.jpg') no-repeat;
  background-size: 250px auto;
}
```

On peut même définir notre background-size en pourcentages, afin que l'image épouse les dimensions de son conteneur.

```css
.intro {
  background: url('bg-demo.jpg') no-repeat;
  background-size: 50% 50%;
}
```

À noter que la propriété background-size n'est pas prise en charge par <= IE8.

### Travailler avec des arrière-plans flexibles

Si max-width: 100%; est génial pour les **images de premier plan**, c'est la propriété background-size qui permet de spécifier les dimensions que nous souhaitons sur nos image de fond.

## Chapitre 4 { Publicité responsive }

## Chapitre 5 { Concevoir la grille infinie }

## notes de bas de page

- [ cf section Tools ](http://responsivenews.co.uk/post/50028612882/responsive-news-testing)
