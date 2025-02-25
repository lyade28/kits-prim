import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmSignComponent } from './em-sign.component';

describe('EmSignComponent', () => {
  let component: EmSignComponent;
  let fixture: ComponentFixture<EmSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
