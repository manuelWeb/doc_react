# méthode BEM

> [ article Adeline Boizieau ]( https://medium.com/@ABCDE_line/bem-en-%C3%A9quipe-agile-8eeca0f740b3#4b58 )


## sémantique (version [officielle](http://getbem.com))

- block : .nom-du-bloc (tiret pour nom composés)
- éléments : .nom-du-bloc__nom-element (toujours préfixer le nom de l’élément par le nom de son bloc)
- modificateurs block: .nom-du-bloc--modifier
- modificateurs éléments: .nom-du-bloc__nom-element--modifier

![schema](./assets/images/markdown/bem/bem_schema.jpg)

> Le bloc formulaire sera ciblé en CSS par la classe .form, un élément label par .form\_\_label, un élément champ de saisie .form\_\_field.  
On considère les boutons et les cases à cocher comme des blocs autonomes car on suppose qu’ils peuvent se retrouver en dehors du bloc formulaire. On les sélectionnera respectivement par les classes .button et .checkbox. Pour l’état “coché” de la checkbox, on lui rajoutera en plus de sa classe de base, une classe modificatrice .checkbox–checked.

## quelques problèmes rencontrés

### Les éléments dans des éléments

Éviter de recréer la hiérarchie du DOM :

~~`.bloc__element__element {}`~~

Bonne pratique : **considérer tous les éléments d’un bloc sur un même niveau**.  
Tous sont des enfants du bloc, il n’y a aucun sous-enfant possible. Ainsi, dans un bloc formulaire nommé .form, on nommera un groupe de champ .form\_\_fieldset et un champ de saisie .form\_\_field , et non .form\_\_fieldset\_\_field.

```scss
  // block
  .form {}
  // champ de saisie (block + element)
  .form__field
  //un group de champ (block + elements)
  .form__fieldset
```

### Les blocs dans des blocs

Pour un bloc dans un bloc on utilise `.block1 .block2` exemple `.form .button`.  
Proscrire absolument : ~~`.form__button`~~ = 150 classes pour le même style.

### Application des modificateurs

*Avec BEM, on est souvent tenté de créer beaucoup de classes.  
Par exemple, pour une variante bloc en bloc--actif on aurait tendance à rajouter une classe “modifier” à tous les éléments dans ce bloc qui sont modifiés visuellement par l’état actif de ce parent.*

```html
<nav class="nav">
  <ul class="nav__items-list nav__items-list--inline">
    <li class="nav__item nav__item--inline"></li>
    <li class="nav__item nav__item--inline"></li>
  </ul>
</nav>
```

*Parce que la variante “inline” modifie à la fois l’élément .nav\_\_items-list et les éléments .nav\_\_item, **il est plus judicieux de l’appliquer seulement au bloc parent**, même si les propriétés modificatrices ne s’appliquent pas à lui mais à ses enfants.*

```html
<nav class="nav nav--inline">
  <ul class="nav__items-list">
    <li class="nav__item"></li>
    <li class="nav__item"></li>
  </ul>
</nav>
```

En css on cible les éléments modifiés comme suit :

```css
  .nav--inline .nav__list {} .nav--inline .nav__item {}
```

Le sélecteur modificateur .nav--inline .nav\_\_item composé de 2 classes, aura plus de poids que le sélecteur de base .nav\_\_item, il le surchargera quelque soit sa place dans le fichier CSS.

## Appliquer BEM partout ?

Appliquer à la lettre cette méthode dans tout notre CSS n’est pas une bonne idée. Parfois, il arrive d’avoir besoin de certaines classes utilitaires. Par exemple, on peut avoir une classe .t-error (t comme diminutif de texte) qu’on applique à n’importe quel élément texte pour appliquer une couleur rouge qui symbolise une erreur. Ce genre de classes abstraites n’est pas faite pour être “BEMisée”. Il faut utiliser le nommage BEM seulement pour les portions d’HTML ou CSS qui représentent des composants ou des éléments de composant.
