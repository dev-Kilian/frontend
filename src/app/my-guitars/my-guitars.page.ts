import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { GuitarService } from '../services/guitar.service';

@Component({
  selector: 'app-my-guitars',
  templateUrl: './my-guitars.page.html',
  styleUrls: ['./my-guitars.page.scss'],
})
export class MyGuitarsPage implements OnInit {
  guitars: any[] = [];

  constructor(
    private guitarService: GuitarService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getAllGuitars();
  }

  getAllGuitars() {
    this.guitarService.getGuitars().subscribe(
      (response: any) => {
        this.guitars = response;
      },
      (error) => {
        console.error('Error fetching guitars:', error);
      }
    );
  }

  async confirmDelete(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirm Delete',
      message: 'Are you sure you want to delete this guitar?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Delete cancelled'),
        },
        {
          text: 'Delete',
          handler: () => this.deleteGuitar(id),
        },
      ],
    });

    await alert.present();
  }

  deleteGuitar(id: any) {
    this.guitarService.deleteGuitar(id).subscribe({
      next: () => {
        this.getAllGuitars();
      },
      error: (err) => {
        console.error('Error eliminando guitarra:', err);
      }
    });
  }
  
}



  // HARDCODED:
  /*guitars: any = [
    {
      id: 1,
      brand: "Ibanez",
      model: "Gio"
    },{
      id: 2,
      brand: "Fender",
      model: "Stratocaster"
    }
  ]

  constructor() { }

  ngOnInit() {
  }*/