import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/shared/shared.module";
import { MainPageComponent } from './main-page/main-page.component';
import { ToolbarComponent } from './shared-components/toolbar/toolbar.component';

@NgModule({
    declarations: [MainPageComponent, ToolbarComponent],
    imports: [RouterModule, SharedModule, ReactiveFormsModule],
    exports: [ToolbarComponent],
})

export class PagesModule {}