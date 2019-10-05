import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStoreItemComponent } from './content-store-item.component';

describe('ContentStoreItemComponent', () => {
  let component: ContentStoreItemComponent;
  let fixture: ComponentFixture<ContentStoreItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentStoreItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStoreItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
