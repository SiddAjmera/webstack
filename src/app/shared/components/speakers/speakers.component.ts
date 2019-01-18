// tslint:disable:max-line-length

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers = [
    {
      id: 1,
      name: 'Siddharth Ajmera',
      designation: 'Full Stack JS Developer - TCS',
      // image: 'assets/images/speakers/speaker1.jpg',
      image: 'https://scontent.fpnq2-1.fna.fbcdn.net/v/t1.0-9/35426833_1654903297897980_4957177869231980544_n.jpg?_nc_cat=111&_nc_ht=scontent.fpnq2-1.fna&oh=d17e6d51e9336ad48da5aaaa4d47338f&oe=5CD24DEF',
      // companyLogo: 'https://www.tcs.com/content/dam/tcs/images/logo/tcs50-white1.png',
      details: 'Siddharth is a Google Developer Expert for Angular and a Full Stack JavaScript Developer with an immense love and passion for the JavaScript(specially Angular) developer community.',
      facebook: 'https://www.facebook.com/SiddAjmera',
      twitter: 'https://www.twitter.com/SiddAjmera',
      instagram: 'https://www.instagram.com/SiddAjmera',
      googlePlus: 'https://plus.google.com/+SiddharthAjmera',
      linkedIn: 'https://www.linkedin.com/in/SiddAjmera',
      github: 'https://github.com/SiddAjmera',
      medium: 'https://medium.com/@SiddAjmera/latest',
      youtube: 'https://www.youtube.com/siddharthajmera',
      sessionDetails: {
        date: '26 Jan',
        timeslot: '03.00 - 03.30 pm',
        title: 'Crashing into Angular',
      }
    },
    {
      id: 2,
      name: 'Pankaj Parkar',
      designation: 'Tech Lead, Synerzip',
      // image: 'assets/images/speakers/speaker5.jpg',
      image: 'https://pbs.twimg.com/profile_images/1024004701065338882/Qs4GJJpC_400x400.jpg',
      companyLogo: 'https://labs.synerzip.com/wp-content/themes/synerzip/beta_images/header-black-logo.png',
      details: 'Pankaj is a three-time Microsoft MVP and a Team Lead at Synerzip. He\'s an Angular Enthusiast with around 6 years of experience in the industry. He\'s also an OpenSource Contributor and an OSS Lover',
      facebook: 'https://www.facebook.com/pankaj.parkar',
      twitter: 'https://twitter.com/pankajparkar',
      instagram: '',
      googlePlus: '',
      linkedIn: 'https://in.linkedin.com/in/pankajparkar',
      github: 'https://github.com/pankajparkar',
      medium: '',
      youtube: '',
      sessionDetails: {
        date: '26 Jan',
        timeslot: '03.30 - 04.00 pm',
        title: 'Unit Testing Angular Apps',
      }
    }, {
      id: 3,
      name: 'Akshay Milmile',
      designation: 'Full Stack JS Developer - TCS',
      // image: 'https://pbs.twimg.com/profile_images/1058594005263491072/psCeJF5B_400x400.jpg',
      image: 'assets/images/speakers/akshay.jpg',
      // companyLogo: 'https://www.tcs.com/content/dam/tcs/images/logo/tcs50-white1.png',
      details: 'Akshay is a JavaScript junkie and loves writing Apps that run on Web, Mobile, and Voice channels, to deliver Omnichannel experiences.',
      facebook: '',
      twitter: 'https://twitter.com/_akshay_milmile',
      instagram: '',
      googlePlus: '',
      linkedIn: 'https://www.linkedin.com/in/akshaymilmile/',
      github: 'https://github.com/itachiRedhair',
      medium: 'https://medium.com/@akshay.milmile/latest',
      youtube: '',
      sessionDetails: {
        date: '26 Jan',
        timeslot: '04.00 - 04.30 pm',
        title: 'Creating a reusable Component Library in Angular',
      }
    }, {
      id: 4,
      name: 'Jagdeep Soni',
      designation: 'Solution Architect, TCS',
      image: 'https://scontent.fpnq2-1.fna.fbcdn.net/v/t1.0-9/27750647_1609902509057835_604483265165669179_n.jpg?_nc_cat=109&_nc_ht=scontent.fpnq2-1.fna&oh=76b18049eb616ecbf5df6a68536571b4&oe=5CC952D5',
      // image: 'assets/images/speakers/speaker7.jpg',
      // companyLogo: 'https://www.tcs.com/content/dam/tcs/images/logo/tcs50-white1.png',
      details: 'Jagdeep works as a Solution Architect at TCS. Apart from being an occasional poet and a random traveller, he\'s also into hiking, marathons, and software development.',
      facebook: 'https://www.facebook.com/jss.phoenix',
      twitter: 'https://twitter.com/js_soni',
      instagram: 'https://www.instagram.com/reach.jagdeep/',
      googlePlus: '',
      linkedIn: 'https://www.linkedin.com/in/jssoni/',
      github: 'https://github.com/Jagdeep1',
      medium: '',
      youtube: '',
      sessionDetails: {
        date: '26 Jan',
        timeslot: '04.30 - 05.00 pm',
        title: 'Angular Style Guide',
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
