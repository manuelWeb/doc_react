# Becquet design system

## TOFIX

- font-size mobile → 18/24 : line-height out of 8pt system :
  - 18 is not in mmultiple 4 | 8 so it is missing 2 px on line-height
- Horizontal grid to multiple on 8 or 4 point otherwise it occurs divergence of ratio with vertical rhythm :
  - @See atoms.sketch section image/format1-1/330-328 can't br square.


## FIX

- Breadcrumb diff mobil / desktop : solution is to use custom icon font with icons that will be use in text.
  - @See exemple in lib atoms.sketch use in organisms.sketch pagelist/mobile
  - test plugin [sketch-iconfont](https://github.com/keremciu/sketch-iconfont)
  - create font from a suite of svg : [ fontello ]( http://fontello.com/ )

## Grid

### Layout

- [grid on 1152/32](https://uxdesign.cc/10-tricks-techniques-to-make-the-most-out-of-sketch-d12ae16d47e9#ff93)

## Typography

- [the-state-of-fluid-web-typography](https://betterwebtype.com/articles/2019/05/14/the-state-of-fluid-web-typography/)
- [book](https://betterwebtype.com/web-typography-book/)
```css
  body {
    font-size: calc(
      [minimum size] + ([maximum size] - [minimum size]) *
      ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))
    );
}
```
