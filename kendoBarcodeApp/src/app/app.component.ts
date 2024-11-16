import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KENDO_BARCODES, KENDO_QRCODE } from '@progress/kendo-angular-barcodes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KENDO_BARCODES,KENDO_QRCODE],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kendoBarcodeApp';
}
