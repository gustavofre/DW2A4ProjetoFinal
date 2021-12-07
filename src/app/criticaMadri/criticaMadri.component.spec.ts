import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaMadriComponent } from './criticaMadri.component';

describe('CriticaMadriComponent', () => {
  let component: CriticaMadriComponent;
  let fixture: ComponentFixture<CriticaMadriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticaMadriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaMadriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
