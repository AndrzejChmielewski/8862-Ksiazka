import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/shared/shared.module";
import { PagesModule } from "./pages/pages.module";

@NgModule({
    declarations: [],
    imports: [SharedModule, RouterModule, ReactiveFormsModule, FormsModule, PagesModule, FormsModule],
    providers: [],
})

export class MainModule {}