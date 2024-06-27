import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadmeGeneratorComponent } from './readme-generator.component';

describe('ReadmeGeneratorComponent', () => {
  let component: ReadmeGeneratorComponent;
  let fixture: ComponentFixture<ReadmeGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReadmeGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadmeGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
