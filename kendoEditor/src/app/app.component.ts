import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from "@angular/common";
import { EditorModule } from "@progress/kendo-angular-editor";
import { KENDO_EDITOR } from '@progress/kendo-angular-editor';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, KENDO_EDITOR,ToolBarModule,EditorModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kendoEditor';
  public value = `
        <p>The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
            In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
            The widget <strong>outputs identical HTML</strong> across all major browsers, follows
            accessibility standards, and provides API for content manipulation.
        </p>
        <p>Features include:</p>
        <ul>
            <li>Text formatting</li>
            <li>Bulleted and numbered lists</li>
            <li>Hyperlinks</li>
            <li>Cross-browser support</li>
            <li>Identical HTML output across browsers</li>
        </ul>
    `;
}
