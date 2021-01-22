import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('video') private video: ElementRef

  constructor() { }

  ngAfterViewInit(): void {
    // Cross compatibility
    console.log(this.video);
    if (!window["cordova"]) {
      return this.startCamera();
    }
    window["cordova"].plugins.diagnostic.requestRuntimePermission(
      (status) => status == window["cordova"].plugins.diagnostic.permissionStatus.GRANTED
        ? this.startCamera()
        : alert('Need authorization'),
      () => alert('Camera error'),
      "CAMERA"
    );
  }

  startCamera() {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: { width: 1280, height: 720 }
      }).then((stream: MediaStream) => {
        this.video.nativeElement.onloadedmetadata = () => this.video.nativeElement.play();
        if ('srcObject' in this.video.nativeElement) {
          this.video.nativeElement.srcObject = stream;
        } else {
          this.video.nativeElement.src = window.URL.createObjectURL(stream);
        }
      }).catch((error: MediaStreamError) => alert(error.message));
  }

}
