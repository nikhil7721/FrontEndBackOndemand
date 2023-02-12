import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasherhomeComponent } from './washerhome.component';

describe('WasherhomeComponent', () => {
  let component: WasherhomeComponent;
  let fixture: ComponentFixture<WasherhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasherhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasherhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
