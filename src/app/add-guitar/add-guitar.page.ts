import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuitarService } from '../services/guitar.service';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-guitar',
  templateUrl: './add-guitar.page.html',
  styleUrls: ['./add-guitar.page.scss'],
})
export class AddGuitarPage implements OnInit {

  guitarForm: FormGroup;
  isSubmitted: boolean = false; // Para manejar el estado de envío
  capturedPhoto: string = ""; // Para guardar la foto capturada

  constructor(
    public formBuilder: FormBuilder, // Cambiado a public para usar en el template si es necesario
    private guitarService: GuitarService,
    private photoService: PhotoService,
    private router: Router
  ) {
    this.guitarForm = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
    });
  }

  ionViewWillEnter() {
    this.guitarForm.reset(); // Resetea el formulario al cargar la vista
    this.isSubmitted = false;
    this.capturedPhoto = ""; // Limpia la foto capturada
  }

  ngOnInit() {}

  getFormControl(field: string) {
    return this.guitarForm.get(field);
  }

  takePhoto() {
    this.photoService.takePhoto().then(data => {
      this.capturedPhoto = data.webPath ? data.webPath : "";
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
  }

  async onSubmit() {
    this.isSubmitted = true;
    if (!this.guitarForm.valid) {
      console.log('Por favor, completa todos los campos obligatorios');
      return;
    }
  
    let blob: Blob | undefined;
    if (this.capturedPhoto !== "") {
      const response = await fetch(this.capturedPhoto);
      blob = await response.blob();
    }
  
    this.guitarService.addGuitar(this.guitarForm.value, blob).subscribe(data => {
      console.log("¡Guitarra añadida con foto!");
      this.router.navigate(['/my-guitars']);
    });
  }
}
