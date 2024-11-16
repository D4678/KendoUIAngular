import { Component, Injectable  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { KENDO_UPLOADS } from '@progress/kendo-angular-upload';
import {
  HttpInterceptor,
  HttpClientModule,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpProgressEvent,
  HttpEventType,
  HttpResponse,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable, of, concat } from "rxjs";
import { delay } from "rxjs/operators";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UploadsModule } from "@progress/kendo-angular-upload";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { LabelModule } from "@progress/kendo-angular-label";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,KENDO_UPLOADS,HttpClientModule, BrowserModule,BrowserAnimationsModule, CommonModule, FormsModule,
    ReactiveFormsModule, HttpClientModule,UploadsModule, InputsModule, ButtonsModule, LabelModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  declarations: [UploadComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UploadInterceptor,
      multi: true,
    },
  ],
})


export class AppComponent {
  title = 'kendoUploads';
}

@Injectable()
export class UploadInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (req.url === "saveUrl") {
      const events: Observable<HttpEvent<unknown>>[] = [0, 30, 60, 100].map(
        (x) =>
          of(<HttpProgressEvent>{
            type: HttpEventType.UploadProgress,
            loaded: x,
            total: 100,
          }).pipe(delay(1000))
      );

      const success = of(new HttpResponse({ status: 200 })).pipe(delay(1000));
      events.push(success);

      return concat(...events);
    }

    if (req.url === "removeUrl") {
      return of(new HttpResponse({ status: 200 }));
    }

    return next.handle(req);
  }
}