import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserService} from "../../services/UserService";
import {User} from "../../Entities/User";

/**
 * Generated class for the UsersStatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users-stats',
  templateUrl: 'users-stats.html',
})
export class UsersStatsPage implements OnInit{
  users: User[];
  totalUsers: number = 0;
  averagePhoneNumberLength: number;
  mostCommonAddress: string;
  mostCommonFirstLetterOfName: string;
  ngOnInit() {
    this.userService.getAllUsers().then((users)=> {
      this.users = users;
    this.totalUsers = this.users.length;
      console.log(this.totalUsers)
    this.averagePhoneNumberLength = this.calculateAveragePhoneNumberLength();
    this.mostCommonAddress = this.calculateMostCommonAddress();
    this.mostCommonFirstLetterOfName = this.calculateMostCommonFirstLetterOfName();
    });
  }

  constructor(private userService: UserService) {

  }

  ionViewWillEnter() {
    this.userService.getAllUsers().then((users)=> {
      this.users = users;
      this.totalUsers = this.users.length;
      this.averagePhoneNumberLength = this.calculateAveragePhoneNumberLength();
      this.mostCommonAddress = this.calculateMostCommonAddress();
      this.mostCommonFirstLetterOfName = this.calculateMostCommonFirstLetterOfName();
    });
  }

  calculateAveragePhoneNumberLength() {
    let totalLength = 0;
    for (let user of this.users) {
      if (user.phoneNumber) {
        totalLength += user.phoneNumber.toString().length;
      }
    }
    return totalLength / this.totalUsers;
  }

  calculateMostCommonAddress() {
    let addresses = {};
    for (let user of this.users) {
      if (user.adress) {
        addresses[user.adress] = addresses[user.adress] ? addresses[user.adress] + 1 : 1;
      }
    }
    let mostCommonAddress = '';
    let highestCount = 0;
    for (let address in addresses) {
      if (addresses[address] > highestCount) {
        mostCommonAddress = address;
        highestCount = addresses[address];
      }
    }
    return mostCommonAddress;
  }

  calculateMostCommonFirstLetterOfName() {
    let firstLetters = {};
    for (let user of this.users) {
      if (user.name && user.name.length > 0) {
        let firstLetter = user.name.charAt(0).toUpperCase();
        firstLetters[firstLetter] = firstLetters[firstLetter] ? firstLetters[firstLetter] + 1 : 1;
      }
    }
    let mostCommonFirstLetter = '';
    let highestCount = 0;
    for (let letter in firstLetters) {
      if (firstLetters[letter] > highestCount) {
        mostCommonFirstLetter = letter;
        highestCount = firstLetters[letter];
      }
    }
    return mostCommonFirstLetter;
  }
}
