import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnNavBarComponent } from './bn-nav-bar.component';

describe('BnNavBarComponent', () => {
  let component: BnNavBarComponent;
  let fixture: ComponentFixture<BnNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnNavBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
