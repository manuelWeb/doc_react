# Temps L

## Break point

- Desktop :
  - total width 1152px
  - offset 144px
  - Numbers of Columns 12
  - Gutter Width 12px
  - Columns Width 84px
  - Gutter Height 8px
  - Row Height 5 x Gutter Height

## Typographic Grid Guide

- font-weight (fw) : EB = Extra-Bold, B = Bold, SB = Semi-Bold, R = Regular, L = light.

<table>
	<tr>
		<th align="right">Nom</th>
		<th align="center">Mobile size/line-height</th>
		<th align="center">Desk & Tablet size/line-height</th>
		<th>fw</th>
	</tr>
	<tr>
		<td align="right">Hero</td>
		<td align="center">28/40</td>
		<td align="center">30/40</td>
		<td>B / R / L</td>
	</tr>
	<tr>
		<td align="right">Title</td>
		<td align="center">20/24</td>
		<td align="center">24/32</td>
		<td>B / R / L</td>
	</tr>
	<tr>
		<td align="right">Subtitle</td>
		<td align="center">18/24</td>
		<td align="center">20/28</td>
		<td>B / R / L</td>
	</tr>
	<tr>
		<th colspan="4" align="center">------ COMMON VALUES ------</th>
	</tr>
	<tr>
		<td align="right">paragraph_1</td>
		<td colspan="2" align="center">16/24</td>
		<td>B / R / L</td>
	</tr>
	<tr>
		<td align="right">paragraph_2</td>
		<td colspan="2" align="center">14/20</td>
		<td>B / R / L</td>
	</tr>
	<tr>
		<td align="right">legal</td>
		<td colspan="2" align="center">12/16</td>
		<td>B / R / L</td>
	</tr>
</table>


## Grid for design system

Ne pas appliquer la règle des 8 points (ou 4 points) entraine des incohérences sur la taille des images et le placement des icons par rapport à la hauteur de ligne. Voir organisms.sketch > pagelist taille de l'image principale > image/format1-1/330-328 (atoms.sketch).  
La solution est de garder le même rythme vertical sur la largeur de la page voir les propositions de grilles X3 beak points ci-dessous.

![columns, gutters, and margins.]( ./assets/images/grids/material.io-layout-grid.png )
1 columns, 2 gutters, 3 margins

## Solution en place sur Becquet (out of 8pt sys)

### width 320px

*6 colonnes de 40px / gouttières 12px / marge externe 10px ( Ratio 1.2 (10 x 1.2) )*

<!-- ![320](assets/images/grids/grid_guide-w320-c6-cw40-gw12.r1.2.png) -->
<img src="assets/images/grids/grid_guide-w320-c6-cw40-gw12.r1.2.png" alt="mobil 320" width="320" />

### width 480px

*6 colonnes de 72px / gouttières 8px / marge externe 4px (Ratio 0.5)*

![480]( assets/images/grids/grid_guide-480-6-72-8.png )

### width 768px

*8 colonnes de 76px / gouttières 20px / marge externe 10px (Ratio 0.5)*

![768]( assets/images/grids/grid_guide-768-8-76-20.png )

### width 1440px

*12 colonnes de 90px / 30px de gouttières / 15px de marge externe (Ratio 0.5)*

![1440]( assets/images/grids/grid_guide-1440-12-90-30.png )

[ http://grid.guide/ ]( http://grid.guide/ )

## Solution idéal

- [8 Point Grid System](https://spec.fm/specifics/8-pt-grid) pour :
  - Le rythme verticale et horizontale de 8 ou 4pt.
  - Les grilles pour les **3 points de rupture** :

| Device  | Width |  Columns  |        Gutters         | Ratio and Margins (external gutters) |
| :-----: | :---: | :-------: | :--------------------: | :----------------------------------: |
| Desktop | 1440  | 12 x 88px | 11 x 32px + (2 x 16px) |              0.5 (16px)              |
| Tablet  |  768  | 8  x 72px | 7 x 24px + (2 x 14px)  |              0.5 (14px)              |
|  Mobil  |  320  | 6  x 40px | 5 x 12px + (2 x 10px)  |              1.2 (10px)              |


### multiple 4 ( mult(4,400) )

| 8 |
| 12  | 16  | 20  | 24  | 28  | 32  | 36  | 40  | 44  | 48  | 52  | 56  | 60  | 64  | 68  | 72  | 76  | 80  | 84 | 88 | 92 | 96 |
| 100 | 104 | 108 | 112 | 116 | 120 | 124 | 128 | 132 | 136 | 140 | 144 | 148 | 152 | 156 | 160 | 164 | 168 |
| 172 | 176 | 180 | 184 | 188 | 192 | 196 | 200 | 204 | 208 | 212 | 216 | 220 | 224 | 228 | 232 | 236 | 240 |
| 244 | 248 | 252 | 256 | 260 | 264 | 268 | 272 | 276 | 280 | 284 | 288 | 292 | 296 | 300 | 304 | 308 | 312 |
| 316 | 320 | 324 | 328 | 332 | 336 | 340 | 344 | 348 | 352 | 356 | 360 | 364 | 368 | 372 | 376 | 380 | 384 |
| 388 | 392 | 396 | 400 |


### multiple 8

| 8   | 16  |
| 24  | 32  | 40  | 48  | 56  | 64  | 72  | 80  | 88  | 96  | 104 | 112 |
| 120 | 128 | 136 | 144 | 152 | 160 | 168 | 176 | 184 | 192 | 200 | 208 |
| 216 | 224 | 232 | 240 | 248 | 256 | 264 | 272 | 280 | 288 | 296 | 304 |
| 312 | 320 | 328 | 336 | 344 | 352 | 360 | 368 | 376 | 384 | 392 | 400 |


```javascript
// sign(nb:multiple, max range)
const mult = (num,max) => {
  let inc = num;
  const mary = [];
  while( inc < max){ mary.push(inc); inc += num }
  return mary;
}

// multiple 4
const mult4 = mult( 4, 100 )

// multiple 2
const mult2 = mult( 2, 100 )

```
