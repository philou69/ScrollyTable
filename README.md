# ScrollyTable
CSS and JS to make easy scrolling table

ScrollyTable help you to display huge table on screen. 
With it, you can simply fix the head and the first left cell, 
so you can move in the table without losing yourself.

## Dependency and compatibility

ScrollyTable need jQuery3 to works. 
It's not compatible with IE and has not been tested with Microsoft Edge.

## How it work

For display the table, ScrollyTable use div element.
First, generate a table content with `div.scrolly-table` like this
```html
<div class="scrolly-table">
</div>
```
ScrollyTable use the standard HTML elements as the class name for each element.
```html
<div class="scrolly-table">
    <div class="thead">
                    <div class="tr">
                        <div class="th">Simple header cell</div>
                    </div>
                </div>
    <div class="tbody">
        <div class="tr">
            <div class="td">Simple body cell</div>
        </div>
    </div>
</div>
```
## Special rendering
### Ellipsis
Basic, each cell fills the width of the table evenly
If the contents of the cell are too big, a line break is performed
To bypass this effect, you can use the `.ellipsis` class which will display an ellipsis on cells with too much content.
```html
<div class="scrolly-table ellipsis">
    <div class="thead">
                    <div class="tr">
                        <div class="th">Simple header cell</div>
                    </div>
                </div>
    <div class="tbody">
        <div class="tr">
            <div class="td">Simple body cell</div>
        </div>
    </div>
</div>
```
### Scrolling horizontally
If you do not want an ellipsis effect or a return, you can make the table scrollable horizontally
Add the `.scrolly-table-h` on the first div.
```html
<div class="scrolly-table scrolly-table-h">
    <div class="thead">
                    <div class="tr">
                        <div class="th">Simple header cell</div>
                    </div>
                </div>
    <div class="tbody">
        <div class="tr">
            <div class="td">Simple body cell</div>
        </div>
    </div>
</div>
```

### Fixing the header 
On large tables, you can fix the header to easily remember which colones it is.
Simply adding the `.sticky-head` to the head div.
```html
<div class="scrolly-table">
    <div class="thead sticky-head">
                    <div class="tr">
                        <div class="th">Simple header cell</div>
                    </div>
                </div>
    <div class="tbody">
        <div class="tr">
            <div class="td">Simple body cell</div>
        </div>
    </div>
</div>
```
### Fixing the side cell
If the first or last column is very important, you can fix them on the side.
Use the `.sticky-left` or `.sticky-right` on both thead and tbody div.
```html
<div class="scrolly-table">
    <div class="thead sticky-head sticky-left">
                    <div class="tr">
                        <div class="th">Simple header cell</div>
                    </div>
                </div>
    <div class="tbody sticky-left">
        <div class="tr">
            <div class="td">Simple body cell</div>
        </div>
    </div>
</div>
```
### hover the mouse 
You can simply coloring the background of the line and the column of the cell you hovering with the `.hovering`
```html
<div class="scrolly-table hovering">
    <div class="thead">
                    <div class="tr">
                        <div class="th">Simple header cell</div>
                    </div>
                </div>
    <div class="tbody">
        <div class="tr">
            <div class="td">Simple body cell</div>
        </div>
    </div>
</div>
```
If the color of the effect is not your type, just add a CSS style 
```css
.scrolly-table.hovering .hover {
    background-color: UseYourColor;
}
```
The class `.hover` is use to set the background color on the cells on the line and on the column.
