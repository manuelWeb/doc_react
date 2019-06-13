# README

## Plugins

### List

_Mardi 15 janv. 19 : 28 plugins_

|     Responsive      |       Organiser       | Placer - Dupliquer  |
| :------------------ | :-------------------- | :------------------ |
| Nudge, Push, Shove. | MergeDuplicateSymbols | Copy Paste Position |
| Automate            | Design System Manager | Duplicator          |
| Anima               | BatchCreateSymbols    | Paddy               |

- Runner
- AnimaToolkitPlugin
- Align Text Baseline
- Artboard manager
- Automate
- Batch Create Symbols (!important keybinding conflict between copy past position)
- Copy Paste Position Size (!important keybinding conflict between Batch Create Symbol)
- <span style="color: gray;">Design System Manager </span>
- <span style="color: green;">Design Systems Ashung Hung </span>
- Duplicator
- LayerRenamer
- MergeDuplicateSymbols
- MyPlugin
- Nudge, Push, Shove. (!important mess in rename layer)
- Paddy
  - Pannel
  - Polaris Telescope
- <span style="color: gray;">Rename-It</span>
- <span style="color: gray;">Select Children</span>
- Select Similar Layer
- Single Border
- Style Master
- Styles Generator
- Swap-Fill-Border
- Symbol Organizer
- Text tools
- <span style="color: gray">Toggle Craft</span>
- unsplash
- Unused Style Remover
- Zeplin
- <span style="color: gray;">InVisionDesignSystems</span>
- Sketch Styles Generator

#### Path plugin

**/Users/\$USER/Library/Application Support/com.bohemiancoding.sketch3/Plugins**

|                 list                  |                  of                  |          Plugins folder           |
| :------------------------------------ | :----------------------------------- | :-------------------------------- |
| Align Text Baseline.sketchplugin      | Paddy.sketchplugin                   | Symbol Organizer.sketchplugin     |
| AnimaToolkitPlugin.sketchplugin       | Panels.sketchplugin                  | Unused Style Remover.sketchplugin |
| BatchCreateSymbols.sketchplugin       | Rename-It.sketchplugin               | Zeplin.sketchplugin               |
| Copy Paste Position Size.sketchplugin | Runner.sketchplugin                  | artboard-manager.sketchplugin     |
| Duplicator.sketchplugin               | Select Children.sketchplugin         | automate-sketch.sketchplugin      |
| InVisionDesignSystems.sketchplugin    | Single-Border.sketchplugin           | text-tools.sketchplugin           |
| LayerRenamer.sketchplugin             | Sketch Styles Generator.sketchplugin | unsplash.sketchplugin             |
| MergeDuplicateSymbols.sketchplugin    | Style Master.sketchplugin            |                                   |
| NudgePushShove.sketchplugin           | Swap-Fill-Border.sketchplugin        |                                   |

### Usage

**LayerRenamer**

Rename with regexp -Bold to --Regular

```javascript
HEADING/(.+)/FF#1/Left/Black/-Bold
HEADING/$1/FF#1/Left/Black/--regular
```

## OSX Sketch key binding (X8 16 janv. 19)

### Pref > keyboard > app short key

| Command Name        | keybinding  | plugin   |
| ------------------: | : --------- |          |
| Round to Pixel      | ⌘ ⌥ K       |          |
| Uppercase           | ⌘ ⇧ U       |          |
| Lowercase           | ⌘ L         |          |
| Create Symbol       | F8          |          |
| Collapse All Groups | ⌘ ⌥ H       |          |
| Settings…           | ⌘ ⌥ ⌃ D     |          |
| Underline           | ⌘ ⇧ U       |          |
| Swap Fill & Border  | ⌘ ⇧ X       |          |
| Image…              | F2          |          |
| Grid Settings…      | ⌃ ⌥ D       |          |
| Layout Settings…    | ⌃ ⌥ L       |          |
| Rename Instances    | ⌃⌥R         | Automate |

# Text Styles

# Style Master

## Force de corps mobile et desktop

## 6 forces de corps

hero, title, subtitle, paragraph_1, paragraph_2, legal.

_lh = line-height_

Valeurs du fichier style-guide font-size/line-height :

|         Styles Names         | mobile | desktop & tablet |
| :--------------------------- | :----: | :--------------: |
| hero (headline)              | 28/40  |      30/40       |
| title (h1 heading)           | 20/24  |      24/32       |
| subtitle (h2 heading)        | 18/24  |      20/28       |
| paragraph_1 (body premium)   | 16/24  |      16/24       |
| paragraph_2 (body secondary) | 14/20  |      14/20       |
| legal                        | 12/16  |      12/16       |

## Système rythme vertical 8pt (peut être décliné sur un mutilple 4).

- multiple de 4 : | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 |

_renommer facilement et en masse les style de caractères générés par Styles Generator_

## changer le corps de toutes les occurrences avec le plugin Select Similar Layer

- sélectionner un calque text de la famille de corps à modifier ex : Desktop > Hero (High_Grey)
- utiliser le plugin
  - Select Similar Layer >
    In Current Artboard > Font
  - !Attention désélectionner autre famille qui aurait le même corps…!
  - utiliser plugin Automate > Layer > Select Layers In Selection By Name
- modifier la force de corps + la hauteur de ligne.
- mettre à jour les styles de texte > APPEARANCE > _Multiple Text Styles_ > Update Text Styles

## Change Color font

```javascript
// find
(.+)/(.+)/(.+)/(.+)/Signal_Red/(.+)
// replaceby
$1/$2/$3/$4/orange/$5
```

## Change Uppercase by lowercase

```javascript
// find
(\w)
// replaceby
\L$1
```

## Complet text styles string

**Type/device/font-family/alignment/color/font-weight**

```javascript
[Hero, Title, Subtitle, Paragraph_1, Paragraph_2, Legales]:Type/
[ff#1, ff#2, …]:font-family/[center, left, right]:alignment/
[primary, secondary, tertiary]:color/[-regular, --bold]

```

**exemple**

```javascript
Hero (fresh generated style) to
Hero/mobi/ff#1/left/primary/--bold
Title to
Title/desk/ff#1/left/primary/--bold
Subtitle to
Subtitle/desk/ff#1/left/primary/--bold

```

# Process to dynamically rename text style

## Create all styled path occurrences

```javascript
// First :: select (only bold or regular and only left or center or right) stylish text styles
// Use plugin Styles Generator / Generate shared styles

// Rename generated style by using Style Master > rename Text Styles
// Use this regex (select only string with no “slash” / ex: Body) :
// with Regular expression checkbox On and Show only matching styles checkbox On
(^[\w\s]*$) // first (best) solution
(^((?!\/).)*$) // second solution
(^[\w\s]*[^\W])$ // third…

// Replace :
$1/[mobi|desk]/[ff#1,ff#2]/[left|center|right]/[…color]/[--bold|-regular]
// Yolo!!! Get your own styled text style :
[Hero,Title,Subtitle,etc…]/[mobi|desk]/[ff#1,ff#2]/[left|center|right]/[…color]/[--bold|-regular]

// then select styled right and then center text etc…
// plugin style text generator
// rename with --regular that's it guy ;)
$1/mobi/ff#1/right/Validating_Green/-regular


```

## rename second path occurence

```javascript

// ex rename Body/ff#1/center/primary/--bold to
// Body/desk/ff#1/center/primary/--bold

// Find:
(.+)/(.+)/(.+)/(.+)/(.+)
// Replace:
$1/desk/$2/$3/$4/$5

```

## rename last path occurence

```javascript

// ex Body/desk/ff#1/left/primary/--regular
// => Body/desk/ff#1/left/primary/-regular
Find
(.+\/)--(regular).*
Replace by
$1-$2

// find name with slash
.+\/.+(.+)*

```

## rename multiple layer with LayerRenamer (regex)

```javascript

// select layers
// Ex : [ff#1/primary/mobile, ff#1/secondary/mobile, ff#1/tertiary/mobile]
// To [primary, Secondary, tertiary]

// Find:
ff#1/(.+)/.+
// Replace:
$1

```

## renommer à partir d'un terme manquant

```javascript
// un jeux de styles ou la section [device]:desk est omis

// find
^(((?!desk\/).)*)(ff#1)/(.+)/white/(.+)$
// replace
$1desk/$3/$4/white/$5

```

## Remplacer mobi par desk sur un jeux complet de style

![screen Style Master > Rename Text Styles](../medias/images/textStyle/styleMaster_deskToMobi.jpg)

# Find and Replace

## trouver est remplacer du texte dans la page ou dans le document complet

exemple :

- trouver tous les titres et supprimer le tiret demi-cadratin :
  - Font Family #1 (iciDuTexteVariable) -
- remplacer par
  - Font Family #1 (onGardeLeTexteVariable)

```javascript
// check Current page + RegEx (for expert) and enter this:
// Find
Font Family #1 \((.+)\) -

// Replace with
Font Family #1 ($1)

```

## Supprimer un mot dans une liste de calques

exemple :

- Supprimer /master sur les calques nommés :
  ['action-icons/master/32/canvas/ON', 'action-icons/master/32', 'action-icons/master/status/40/oval-background']
- Objectif ['action-icons/32/canvas/ON', 'action-icons/32', 'action-icons/status/40/oval-background']
- selectionner tous les calques à renommer (utiliser Filter en bas de la section calques).
- Plugin : LayerRenamer > Rename Layers >

```javascript
// Find :
(.+)*/master(.+)*
// Replace by
$1$2
```

# Sketch run script

_In Sketch run: Plugins > Run Script… ⌃⇧K_

## generate a list of all the postscript names of all the fonts you have installed...

```javascript
log(NSFontManager.sharedFontManager().availableFonts())
```
