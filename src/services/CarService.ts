import {Injectable} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Car} from "../Entities/Car";

@Injectable()
export class CarService {

  constructor(private storage: Storage) {
    this.getAllCars().then((res)=> {
      console.log("Cars List: ")
      for (let i = 0; i < res.length; i++) {
        console.log(res[i])
      }
    })

    const car: Car = {
      id: 1,
      name: 'Toyota Corolla',
      date: '2022-01-01',
      price: 25000,
      categorie: 'Compact',
      boite: 'Automatic',
      clim: 'AC',
      nbplace: 5,
      nbporte: 4,
      capacitebg: 450,
      age: 2,
      permis: 3,
      image: "https://www.kia.com/content/dam/kia/us/en/home2-0/mtf-carousel/sedan/k5/kia_k5_2022_large-middle.png",
      bg: 'blue',
      description: 'This is a reliable and fuel-efficient car.',
      quantity: 3,
    };

/*
     this.addCar(car).then(()=> {
       this.getAllCars().then((res)=> {
         console.log(res);
       })
     });
*/

  }

  async addCar(car: Car) {
    let cars = await this.getAllCars();
    let index = cars.findIndex((u: Car) => u.id === car.id);
    if (index === -1) {
      cars.push(car);
      await this.storage.set('cars', JSON.stringify(cars));
    } else {
      throw new Error(`Car with id ${car.id} already exists`);
    }
  }



  async deleteCar(car: Car) {
    let cars = await this.getAllCars();
    let index = cars.findIndex((u: Car) => u.id === car.id);
    if (index !== -1) {
      cars.splice(index, 1);
      await this.storage.set('cars', JSON.stringify(cars));
    }
  }

  async updateCar(updatedCar: Car) {
    let cars = await this.getAllCars();
    let index = cars.findIndex((u: Car) => u.id === updatedCar.id);
    if (index !== -1) {
      cars[index] = updatedCar;
      await this.storage.set('cars', JSON.stringify(cars));
    } else {
      throw new Error("Car not found");
    }
  }

  async getCarById(id: number) {
    let cars:Car[] = await this.getAllCars();
    return cars.find((c: Car) => c.id === id);
  }


  async getAllCars() {
    let cars = await this.storage.get('cars');
    if (!cars) {
      return [];
    }
    return JSON.parse(cars);
  }


}
