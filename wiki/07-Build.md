# Build

*  🔖 **Build**
*  🔖 **Cordova**
*  🔖 **Android**
*  🔖 **Ios**

___

## 📑 [Build](https://ionicframework.com/docs/cli/commands/build)

Pour construire votre projet pour le web, vous pouvez builder en développement ou production.

```bash
ionic build --prod
```

Le build Ionic est un shorcut vers le build de votre framework.

```bash
ng build --prod
```

Votre projet est build dans le dossier www qui correspond à celui visé par le config.xml de Cordova.

> Pour une mise en production pour le web, l'index.html possède une balise base qui vaut "/" et vous empêche de déployer dans un sous dossier, n'hésitez pas à le transformer en chemin relatif si besoin: ./.

___

👨🏻‍💻 Manipulation

Déployez votre application sur un serveur web comme un github pages par exemple.

___

## 📑 [Cordova](https://ionicframework.com/docs/cli/commands/cordova-build)

Dans votre projet Ionic vous possédez soit Capacitor, soit Cordova. Capacitor prend le paris de séparer le code en rapport avec les fonctionnalité natives du téléphone de votre code source et de pouvoir vous exprimer dans le langage de votre choix. Nous allons utiliser Cordova pour sa stabilité et la richesse de son eco système.

```bash
npm install cordova
```

Une fois cordova installé vous pouvez effectuer un build sur une plateforme.

```bash
ionic cordova run browser
```

La différence majeur entre un serve sans cordova c'est que cette fois çi cordova.js est émulé, remarquez l’absence du not found dans le réseau.
___

👨🏻‍💻 Manipulation

Effectuer un build avec cordova

___


## 📑 [Android](https://ionicframework.com/docs/developing/android)


Cordova étant vérifié vous pouvez déployer sur la plateforme de votre choix.

```bash
ionic cordova run android --device
```

___

👨🏻‍💻 Manipulation

Buildez sur votre device android

___

## 📑 [Ios](https://ionicframework.com/docs/developing/ios)

Pour pouvoir builder sur Ios vous devez disposer d'un système d'exploitation Ios, d'un IPhone, du logiciel XCode ainsi qu'une licence développeur à [99$/an/device](https://developer.apple.com/fr/support/compare-memberships/).

```bash
ionic cordova build ios --device
```

___

👨🏻‍💻 Manipulation

Buildez sur votre device ios

___