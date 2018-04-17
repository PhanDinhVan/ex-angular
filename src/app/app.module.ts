import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { WordComponent } from './word/word.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StructComponent } from './struct/struct.component';
import { WordsComponent } from './words/words.component';
import { PersonComponent } from './person/person.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { ParentComponent } from './parent.component';
import { ChilComponent } from './chil.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip.component';

// import providers
import { IpService } from './ip.service';

@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    BookComponent,
    // [(ng-model)]="property"
    UserFormComponent,
    StructComponent,
    WordsComponent,
    PersonComponent,
    ListPersonsComponent,
    ParentComponent,
    ChilComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // import providers
  providers: [IpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
