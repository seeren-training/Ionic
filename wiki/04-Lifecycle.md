# Lifecycle

*  🔖 **Hooks**

___

## 📑 [Hooks](https://ionicframework.com/docs/angular/lifecycle)

Ionic utilise les événements du cycle de vie fournis par Angular. Pour assurer les transitions, des hooks propre à Ionic sont disponibles.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/ioniclifecycle.png)

|Hook|Description|
|--|--|
|ionViewWillEnter|Déclenché lorsque le routage du composant est sur le point de s'animer dans la vue|
|ionViewDidEnter|Déclenché lorsque le routage du composant vers a terminé l'animation|
|ionViewWillLeave|Déclenché lorsque le routage du composant est sur le point de s'animer|
|ionViewDidLeave|Déclenché lorsque le routage du composant vers a terminé l'animation|

> En conclusion `ionViewWillEnter` peut s’avérer plus adapté comme hook que le ngOnInit d'angular pour être informé qu'un composant est navigué.

![image](https://raw.githubusercontent.com/seeren-training/Ionic/master/wiki/resources/ioniclifecycle.gif)

___

👨🏻‍💻 Manipulation

Ajustez vos hooks à ceux proposé par Ionic

___
