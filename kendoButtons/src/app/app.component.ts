import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import {
  ButtonSize,
  ButtonRounded,
  ButtonFillMode,
  ButtonThemeColor
} from "@progress/kendo-angular-buttons";
import { IOption } from "./models";
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';
import { RouterOutlet } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';


export type Option = {
  type: string;
  data: string[];
  default: ButtonSize | ButtonRounded | ButtonFillMode | ButtonThemeColor;
};



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     KENDO_BUTTONS, 
     CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    DropDownsModule,
    ButtonsModule,
    LabelModule
  ],
  providers: [provideAnimations()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'kendoButtons';
  public size: ButtonSize = "medium";
  public rounded: ButtonRounded = "medium";
  public fillMode: ButtonFillMode = "solid";
  public themeColor: ButtonThemeColor = "base";

  public options: Option[] = [
    {
      type: "size",
      data: ["small", "medium", "large"],
      default: this.size,
    },
    {
      type: "rounded",
      data: ["small", "medium", "large", "full"],
      default: this.rounded,
    },
    {
      type: "fillMode",
      data: ["solid", "flat", "outline", "clear", "link"],
      default: this.fillMode,
    },
    {
      type: "themeColor",
      data: [
        "base",
        "primary",
        "secondary",
        "tertiary",
        "info",
        "success",
        "warning",
        "error",
        "dark",
        "light",
        "inverse",
      ],
      default: this.themeColor,
    },
  ];

  public changeHandler({ optionType, optionValue }: IOption): void {
    this[optionType] = optionValue;
  }
}
