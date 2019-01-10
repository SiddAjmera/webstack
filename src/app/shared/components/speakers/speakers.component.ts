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
      details: 'Siddharth is a Full Stack JavaScript Developer with an immense love and passion for the JavaScript(specially Angular) developer community.',
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
        title: 'Topic yet to be decided',
      }
    }, {
      id: 3,
      name: 'Akshay Milmile',
      designation: 'Full Stack JS Developer - TCS',
      image: 'https://pbs.twimg.com/profile_images/1058594005263491072/psCeJF5B_400x400.jpg',
      // image: 'assets/images/speakers/speaker3.jpg',
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
      name: 'Jane Doe',
      designation: 'Role, Company',
      image: 'assets/images/speakers/speaker7.jpg',
      // companyLogo: 'https://www.tcs.com/content/dam/tcs/images/logo/tcs50-white1.png',
      details: 'We\'re still looking for a Jane Doe who is interested in speaking at the event.',
      facebook: '',
      twitter: '',
      instagram: '',
      googlePlus: '',
      linkedIn: '',
      github: '',
      medium: '',
      youtube: '',
      sessionDetails: {
        date: '26 Jan',
        timeslot: '04.30 - 05.00 pm',
        title: 'Topic yet to be decided',
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
