import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePokeComponent } from './liste-poke.component';

describe('ListePokeComponent', () => {
  let component: ListePokeComponent;
  let fixture: ComponentFixture<ListePokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListePokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
