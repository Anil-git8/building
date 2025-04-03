import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshrayaComponent } from './ashraya.component';

describe('AshrayaComponent', () => {
  let component: AshrayaComponent;
  let fixture: ComponentFixture<AshrayaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AshrayaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AshrayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
