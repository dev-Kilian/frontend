import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuitarService } from '../services/guitar.service';

@Component({
  selector: 'app-edit-guitar',
  templateUrl: './edit-guitar.page.html',
  styleUrls: ['./edit-guitar.page.scss'],
})
export class EditGuitarPage implements OnInit {
  guitarForm: FormGroup;
  guitarId!: number;

  constructor(
    private formBuilder: FormBuilder,
    private guitarService: GuitarService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.guitarForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.guitarId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadGuitar();
  }

  loadGuitar() {
    this.guitarService.getGuitarById(this.guitarId).subscribe((guitar: any) => {
      this.guitarForm.patchValue({
        brand: guitar.brand,
        model: guitar.model,
      });
    });
  }

  onSubmit() {
    if (this.guitarForm.valid) {
      this.guitarService.updateGuitar(this.guitarId, this.guitarForm.value).subscribe({
        next: () => {
          console.log('Guitar updated successfully:', this.guitarForm.value);
          this.router.navigate(['/my-guitars']);
        },
        error: (err) => console.error('Error updating guitar:', err),
      });
    } else {
      console.error('Invalid form data');
    }
  }
  
}
