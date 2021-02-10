# UI Components

*  🔖 **Layout**
*  🔖 **Components**
*  🔖 **Router**
*  🔖 **Library**

___

## 📑 [Layout](https://ionicframework.com/docs/layout/structure)

Ionic Framework fournit plusieurs mises en page différentes qui peuvent être utilisées pour structurer une application.

### 🏷️ **Content**

```html
<ion-app>
  <ion-header>
    <ion-toolbar>
      <ion-title>Header</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <h1>Main Content</h1>
  </ion-content>
</ion-app>
```

### 🏷️ **CSS**

Ionic Framework fournit un ensemble de classes utilitaires CSS qui peuvent être utilisées sur n'importe quel élément afin de modifier le texte, le placement des éléments ou d'ajuster le remplissage et la marge.

[Utilities](https://ionicframework.com/docs/layout/css-utilities)

## 📑 [Components](https://ionicframework.com/docs/components)

Les applications ioniques sont constituées de blocs de construction de haut niveau appelés Composants, qui vous permettent de créer rapidement l'interface utilisateur de votre application.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/components.png)

Ionic est livré avec un certain nombre de composants, y compris des cartes, des listes et des onglets. Une fois que vous êtes familiarisé avec les principes de base, reportez-vous à l'index de l'API pour obtenir une liste complète de chaque composant et sous-composant.

### 🏷️ **Import**

Pour importer la librairie de components dans votre projet, contrairement à la librairie Angular Material une ligne suffit mais elle a besoin d'une initialisation.

```js
imports: [
  //...
  IonicModule.forRoot(),
  //...
],
```

___

## 📑 Router

Router outlet est un composant utilisé dans le routage dans une application Angular ou Vue.

[ion-router-outlet](https://ionicframework.com/docs/api/router-outlet

Il se comporte de la même manière que le router outlet intégré d'Angular ou de Vue, mais contient la logique permettant de fournir une navigation empilée et d'animer les vues d'entrée et de sortie. Il ne prend pas en charge les vues enfants.

```html
<ion-router-outlet></ion-router-outlet>
```

___

## 📑 Cross device

Les composants d'affichage s'adaptent en fonction de l'OS, le menu en est un exemple.

```html
<ion-menu side="start">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item>Menu Item</ion-item>
    </ion-list>
  </ion-content>
</ion-menu>
```

### 🏷️ **Others**

> Chaque composant possède sa page de documentation et de live démo.

De nombreux composants sont présents sur la documentation et leur utilisation est simple est correctement documentée et détaillée.

___

👨🏻‍💻 Manipulation

Après avoir détaillé votre expérience utilisateur sur wireframe, implémentez la en utilisant les composants d'affichage présents dans Ionic.