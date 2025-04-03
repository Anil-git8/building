import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FOLKstoreComponent } from './folkstore.component';

describe('FOLKstoreComponent', () => {
  let component: FOLKstoreComponent;
  let fixture: ComponentFixture<FOLKstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FOLKstoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FOLKstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
