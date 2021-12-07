import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaMalComponent } from './criticaMal.component';

describe('CriticaMalComponent', () => {
  let component: CriticaMalComponent;
  let fixture: ComponentFixture<CriticaMalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticaMalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaMalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
