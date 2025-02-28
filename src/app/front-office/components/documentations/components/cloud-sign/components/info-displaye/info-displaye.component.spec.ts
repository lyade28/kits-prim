import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDisplayeComponent } from './info-displaye.component';

describe('InfoDisplayeComponent', () => {
  let component: InfoDisplayeComponent;
  let fixture: ComponentFixture<InfoDisplayeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDisplayeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDisplayeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
