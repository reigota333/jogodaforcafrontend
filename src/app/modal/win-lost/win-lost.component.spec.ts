import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinLostComponent } from './win-lost.component';

describe('WinLostComponent', () => {
  let component: WinLostComponent;
  let fixture: ComponentFixture<WinLostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinLostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinLostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
