import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDocComponent } from './content-doc.component';

describe('ContentDocComponent', () => {
  let component: ContentDocComponent;
  let fixture: ComponentFixture<ContentDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
