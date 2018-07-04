import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultiLevelDropDownModule } from '../lib';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { NotFoundComponent } from './not-found.component';
import { I18n } from './i18n';
import { DisabledOnSelectorDirective } from './disabled-on-selector.directive';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MultiLevelDropDownModule.forRoot()
    ],
    declarations: [
        NotFoundComponent,
        BookComponent,
        AppComponent,
        DisabledOnSelectorDirective
    ],
    providers: [
        I18n
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
