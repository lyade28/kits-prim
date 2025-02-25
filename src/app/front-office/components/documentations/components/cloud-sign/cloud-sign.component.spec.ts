import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudSignComponent } from './cloud-sign.component';

describe('CloudSignComponent', () => {
  let component: CloudSignComponent;
  let fixture: ComponentFixture<CloudSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloudSignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
