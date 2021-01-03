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

## 📑 [Android](https://ionicframework.com/docs/developing/android)

Vous pouvez effectuer un build sur Android moyennant l'acquisition des prérequis que ce soit avec Capacitor ou Cordova.

___

👨🏻‍💻 Manipulation

Suivez le guide pour acquérir les prerequis:  https://ionicframework.com/docs/developing/android

___

### 🏷️ [Capacitor](https://ionicframework.com/docs/cli/commands/capacitor-build)

Capacitor est released par la team Ionic et vient offrir une alternative à Cordova. En effectuant un build ou un run, capacitor ouvrira votre projet dans son envrionnement natif.

```bash
npx ionic capacitor run android
```

___

👨🏻‍💻 Manipulation

Effectuer un build avec Capacitor

___

### 🏷️ [Cordova](https://ionicframework.com/docs/cli/commands/cordova-build)

Dans votre projet Ionic vous possédez soit Capacitor, soit Cordova. Nous allons utiliser Cordova pour sa stabilité et la richesse de son eco système.

```bash
npm install cordova
```

VOus ne pouvez pas utiliser à la fois capacitor et cordova. Une commande permet de passer de l'un à l'autre.

```bash
ionic integration enable cordova
```

Les deux packages sont en conflit, si vous avez effectué un build avec capacitor, supprimez le dossier `android` à la racine de votre projet pour pouvoir continuer.

Une fois cordova installé vous pouvez effectuer un build sur une plateforme.

```bash
ionic cordova run android --device
```

La différence majeur entre un serve sans cordova c'est que cette fois ci cordova.js est émulé et propose les plugins visant les fonctionnalité natives du téléphone.

👨🏻‍💻 Manipulation

Buildez sur votre device android

___

## 📑 [Ios](https://ionicframework.com/docs/developing/ios)

Pour pouvoir builder sur Ios vous devez disposer d'un système d'exploitation Ios, d'un IPhone, du logiciel XCode ainsi qu'une licence développeur.

### 🏷️ Système d'exploitation Ios

Pour se doter d'un système d'exploitation Apple il y a différentes solutions. Utiliser une box virtuelle offre l'avantage de l simplicité et la légèreté, il y a différents guides pour posséder un système d'exploitation Mac OS via une virtul box.

* 🔗 [MacOs avec virtualbox](https://www.tech2tech.fr/comment-installer-macos-catalina-10-15-sur-virtualbox-sur-windows/)

Vous pouvez effectuer un build sur Ios moyennant l'acquisition des prérequis que ce soit avec Capacitor ou Cordova.

```bash
npx ionic capacitor run ios
```

___

👨🏻‍💻 Manipulation

Effectuer un build avec Capacitor

___