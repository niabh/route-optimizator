import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { InputTextModule } from "primeng/inputtext";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { DividerModule } from "primeng/divider";
import { CheckboxModule } from "primeng/checkbox";
import { DialogModule } from "primeng/dialog";
import { AutoCompleteModule } from "primeng/autocomplete";
import { TooltipModule } from "primeng/tooltip";
import { ConfirmPopupModule } from "primeng/confirmpopup";
import { ConfirmationService } from "primeng/api";
import { HttpClientModule } from "@angular/common/http";
import { LeafletIconGlyphService } from "./leaflet-icon-glyph";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		LeafletModule,
		AutoCompleteModule,
		InputTextModule,
		FormsModule,
		ButtonModule,
		ScrollPanelModule,
		DropdownModule,
		InputMaskModule,
		InputTextModule,
		DividerModule,
		CheckboxModule,
		DialogModule,
		TooltipModule,
		ConfirmPopupModule,
		HttpClientModule
	],
	providers: [ConfirmationService, LeafletIconGlyphService],
	bootstrap: [AppComponent]
})
export class AppModule {}
