import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudilingLinksComponent } from './budiling-links.component';

describe('BudilingLinksComponent', () => {
  let component: BudilingLinksComponent;
  let fixture: ComponentFixture<BudilingLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudilingLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BudilingLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
