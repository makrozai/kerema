# Athelas Gulp boilerplate



## Install

Se instala simplemente con ```$ npm install```

## Que hace

Permite trabajar con **ES2016**, **PUG** y **SCSS**

## Scripts

Hay varios, pero solo necesitas estos para trabajar

```gulp``` : corre el servidor y los watchers

```gulp watch``` : corre solo watchers de pug, js y css

```gulp webserver``` : corre solo el servidor local

*en caso que quieras correrlo con solo ```npm```

```npm run gulps``` : es equivalente a ```gulp```

------------------------------------

## Trabajo de programación SASS

Para la programacion en sass necesitamos seguir la estructura de **ITCSS**
para esto en la carpeta **SCSS**

* **00-vendor** : se utiliza para guardar el framework de diseño o estrucuta CSS que se va a utilizar
* **01-settings** : guarda las variables utilizadas
* **03-generic** : estilos de reset y normalize de css
* **04-elements** : estilos base directamente en elementos HTML
* **05-objects** : estilos de elementos de estructura mas no diseños
* **06-components** : estilos de elementos de diseño(UI)
* **07-trumps** : utilidades y clases de ayuda con la capacidad de anular cualquier cosa que vaya antes

-------------------------------------

## Trabajo de programación PUG

Esta estructura de carpetas se complementa de la misma manera que **ITCSS**, sin embargo aun no esta definida completamente.

* **blocks** : elementos que permanecen constantemente en cada vista del sistema(ejem: header, footer)
* **components** : elementos que se requiere constantemente trabajarlos, con variaciones(es recomendable que cada componente sea un mixin)
* **settings** : guarda las variables arreglos e importa todos los components en un archivo *mixin* para posteriormente ser llamado
* **/** : en la raiz es donde se guardara las vistas creadas


*recuerda setear la url en caso uses este repo*