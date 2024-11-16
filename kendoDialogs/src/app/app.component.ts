import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ActionsLayout, KENDO_DIALOGS } from '@progress/kendo-angular-dialog';
import {
  DialogService,
  DialogRef,
  DialogCloseResult,
  DialogThemeColor
} from "@progress/kendo-angular-dialog";
import { KENDO_BUTTON } from "@progress/kendo-angular-buttons";
import { DialogsModule } from '@progress/kendo-angular-dialog'; // Import Kendo Dialog Module
import { ButtonsModule } from '@progress/kendo-angular-buttons'; // Import Kendo Buttons Module
import { InputsModule } from '@progress/kendo-angular-inputs'; // Import Kendo Inputs Module
import { FormsModule } from '@angular/forms'; // Import FormsModule



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [KENDO_DIALOGS,KENDO_BUTTON,CommonModule, DialogsModule, ButtonsModule, FormsModule,InputsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [DialogService] 
})
export class AppComponent {
  // public opened = true;

  // public close(status: string): void {
  //   console.log(`Dialog result: ${status}`);
  //   this.opened = false;
  // }

  // public open(): void {
  //   this.opened = true;
  // }

  //2
  // public opened = true;
  // public actionsLayout: ActionsLayout = "end";
  // public layoutOptions: Array<string> = ["start", "center", "end", "stretched"];

  // public onDialogClose(): void {
  //   alert("No data deleted.");
  //   this.opened = false;
  // }

  // public onDeleteData(): void {
  //   alert("Data deleted.");
  //   this.opened = false;
  // }

  // public open(): void {
  //   this.opened = true;
  // }

  //3
  // public status = "open";

  // public onClose(): void {
  //   this.status = "Close button clicked";
  // }

  // public onAccept(): void {
  //   this.status = "accepted";
  // }

  // public onDecline(): void {
  //   this.status = "declined";
  // }


  //4
  // constructor(private dialogService: DialogService) {}

  // public result: string | undefined; 

  // public showConfirmation(): void {
  //   const dialog: DialogRef = this.dialogService.open({
  //     title: "Please confirm",
  //     content: "Are you sure?",
  //     actions: [{ text: "No" }, { text: "Yes", themeColor: "primary" }],
  //     width: 450,
  //     height: 200,
  //     minWidth: 250,
  //   });

  //   dialog.result.subscribe((result) => {
  //     if (result instanceof DialogCloseResult) {
  //       console.log("close");
  //     } else {
  //       console.log("action", result);
  //     }

  //     this.result = JSON.stringify(result);
  //   });
  // }

  public opened = false;

  public dialogThemeColor: DialogThemeColor = "primary";

  public close(): void {
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }

  public setThemeColor(themeColor: DialogThemeColor): void {
    this.dialogThemeColor = themeColor;
  }
}
