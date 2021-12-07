import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriticaDDGAComponent } from './criticaDDGA.component';

describe('CriticaDDGAComponent', () => {
  let component: CriticaDDGAComponent;
  let fixture: ComponentFixture<CriticaDDGAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriticaDDGAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriticaDDGAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
