import { Component } from '@angular/core';

@Component({
  selector: 'forge-viewer',
  templateUrl: './forge-viewer.component.html',
})
export class ForgeViewerComponent {
  viewerOptions: any;
  ngOnInit() {
    this.viewerOptions = {
      initializerOptions: {
        env: "Local",
        document: 'http://localhost:4200/assets/output/Resource/3D View/08f99ae5-b8be-4f8d-881b-128675723c10/New Construction/New Construction.svf'
      },
      viewerConfig: {
        extensions: ["Autodesk.DocumentBrowser"],
        theme: "bim-theme"
      }
    };
  }
}