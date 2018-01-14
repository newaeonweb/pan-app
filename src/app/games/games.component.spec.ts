import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GamesService } from './games.service';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { FilterPipe } from './filter.pipe';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ GamesComponent, FilterPipe, SearchPipe ],
      providers: [GamesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });
});
