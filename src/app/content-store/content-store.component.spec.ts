import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStoreComponent } from './content-store.component';

describe('ContentStoreComponent', () => {
  let component: ContentStoreComponent;
  let fixture: ComponentFixture<ContentStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
