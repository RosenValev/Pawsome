import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageServicesComponent } from './page-services.component';

describe('PageServicesComponent', () => {
  let component: PageServicesComponent;
  let fixture: ComponentFixture<PageServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageServicesComponent]
    });
    fixture = TestBed.createComponent(PageServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
