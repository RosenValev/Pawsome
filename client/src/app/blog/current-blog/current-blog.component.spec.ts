import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBlogComponent } from './current-blog.component';

describe('CurrentBlogComponent', () => {
  let component: CurrentBlogComponent;
  let fixture: ComponentFixture<CurrentBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentBlogComponent]
    });
    fixture = TestBed.createComponent(CurrentBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
