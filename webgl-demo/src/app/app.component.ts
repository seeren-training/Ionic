import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('webgl') webgl: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    window.setTimeout(() => {
      const element = this.webgl.nativeElement;
      const scene = new Scene();
      const camera = new PerspectiveCamera(75, element.clientWidth / element.clientHeight, 0.1, 1000);
      const renderer = new WebGLRenderer();
      const geometry = new BoxGeometry();
      const material = new MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new Mesh(geometry, material);
      scene.add(cube);
      renderer.setSize(element.clientWidth, element.clientHeight);
      element.appendChild(renderer.domElement);
      camera.position.z = 5;
      camera.position.z = 5;
      const animate = function () {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.05;
        cube.rotation.y += 0.05;
        renderer.render(scene, camera);
      };
      animate();
    }, 1000);
  }

}
