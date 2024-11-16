import { Component, ViewChild, ViewEncapsulation  } from '@angular/core';
import { FormGroup, FormControl, } from '@angular/forms';
import { TextBoxComponent } from "@progress/kendo-angular-inputs"
import { SVGIcon, eyeIcon } from "@progress/kendo-svg-icons";
import { ReactiveFormsModule } from '@angular/forms';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons'
import { AvatarModule } from '@progress/kendo-angular-layout';


@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css',
  imports: [
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    AvatarModule,
    ButtonsModule
  ],
  encapsulation: ViewEncapsulation.None,
})


export class AppComponent {
  @ViewChild("password") public textbox!: TextBoxComponent;
  public eye: SVGIcon = eyeIcon;

  public ngAfterViewInit(): void {
    this.textbox.input.nativeElement.type = "password";
  }

  public toggleVisibility(): void {
    const inputEl = this.textbox.input.nativeElement;
    inputEl.type = inputEl.type === "password" ? "text" : "password";
  }

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    loggedin: new FormControl(),
  });

  public login(): void {
    this.form.markAllAsTouched();
  }

  public clearForm(): void {
    this.form.reset();
  }
}