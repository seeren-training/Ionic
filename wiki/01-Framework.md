# Le Framework

*  🔖 **One codebase**
*  🔖 **Frameworks**
*  🔖 **Get started**

___

## 📑 One codebase

Ionic est un framework open-source créé en 2013. Deux versions distinctes sont disponibles, incompatibles entre elles : la première version, 1.3.3, se base sur AngularJS tandis que la version 3 se base sur Angular 4 et TypeScript.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/ionic.jpg)

### 🏷️ **Multiplateform**

Ionic est un framework hybride, c'est à dire qu'avec une technologie et un code en HTML.JS.CSS il est possible de convertir et exécuter l'application sur différentes plateformes.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/hybrid.jpg)

Le compilateur Cordova est utilisé pour construire l'application JavaScript dans le langage natif cible.

### 🏷️ **Web App**

Les application hybrides sont qualifiées de Web App, c'est à dire qu'elle s'exécutent dans le contexte d'un navigateur web natif et s'opposent aux application natives.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/native.png)

Vous avez cependant accès aux fonctionnalités natives du device en utilisant les plugins du compilateur mobile dont l'intégration est simplifiée par Ionic.

___

## 📑 Frameworks

Ionic propose la création de projets sur 3 Frameworks différents: Angular, React et Vue depuis peu.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/frameworks.png)

Le prérequis pour développer sur Ionic est la connaissance d'un d'entre eux.

___

## 📑 [Get started](https://ionicframework.com/getting-started)

Ionic propose un guide pour savoir utiliser un terminal pour chaque système d'exploitation.

[Command Line Guide](https://blog.ionicframework.com/new-to-the-command-line/)

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/start.png)

### 🏷️ **Installation**

Installez le CLI avec un package manager.

```bash
npm install @ionic/cli
```

Pour exécuter le CLI de façon locale utilisez `npx`.

```bash
npx ionic
```

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/cli.png)

### 🏷️ **[Start](https://ionicframework.com/docs/cli/commands/start)**

Vous pouvez créer un projet pour le framework de votre choix disposant d'une configuration et intégration du compilateur Cordova.

```bash
npx ionic start my-app
```

___

👨🏻‍💻 Manipulation

Après avoir déterminé une thématique de projet détaillée avec des wireframes, créez un projet vierge avec Angular en incluant capacitor

___

### 🏷️ **[Serve](https://ionicframework.com/docs/cli/commands/serve)**

Ouvrez votre projet dans votre IDE préféré, Ionic nous offre quelques recommandations.

[IDE Recommandations](https://ionicframework.com/docs/v3/developer-resources/editors_and_ides/)

Dans la cas d'une installation locale d'Ionic vous devez installer ces dépendances.

```bash
npm install
```

Pour exécuter votre projet, la commande start est disponible.

```bash
npm start
```

Votre application est disponible à l'adresse http://localhost:4200/

🔗 [Ionic Serve](https://ionicframework.com/docs/cli/commands/serve)

En utilisant la commande serve d'Ionic le projet s'ouvre directement dans le navigateur.

```bash
npx ionic serve
```

🔗 [Angular serve](https://angular.io/cli/serve)

Vous remarquez que start est un shortcut vers ng serve, vous pouvez également exécuter cette commande pour démarrer votre projet

```bash
npx ng serve
```

Cette commande appartient à Angular et il est préférable d'observer ses options pour ouvrir le projet dans le navigateur par exemple.

```bash
npx ng serve --open
```

___

👨🏻‍💻 Manipulation

Démarrez votre application.