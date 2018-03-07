import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WayInputComponent } from './way-input.component';

describe('WayInputComponent', () => {
  let component: WayInputComponent;
  let fixture: ComponentFixture<WayInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WayInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WayInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
