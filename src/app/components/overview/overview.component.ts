import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {

  schoolEducation = [
    {
      id: 1,
      title: 'Basic School Education',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Christ the King Matric Hr. Sec School\n2004 - 2016 \nKumbakonam, Tamilnadu 612001, India',
      showDetails: false
    },
    {
      id: 2,
      title: 'Intermediate School Education',
      image: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Christ the King Matric Hr. Sec School\n2016 - 2018 \nKumbakonam, Tamilnadu 612001, India',
      showDetails: false
    }
  ];

  collegeEducation = [
    {
      id: 3,
      title: 'College Education',
      image: 'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Sri Krishna College of Engineering and Technology\n2018 - 2022 \nCoimbatore, Tamilnadu, India',
      showDetails: false
    }
  ];

  collegeActivities = [
    {
      title: 'Syndicate Bank Hackathon',
      details: 'Participated in a competitive hackathon, gaining hands-on experience and innovative problem-solving skills.\nDuration: Nov 2019 - Dec 2019'
    },
    {
      title: 'Institution Innovation Council',
      details: 'Active member contributing to innovation and entrepreneurship initiatives on campus from Sep 2019 - Apr 2022'
    },
    {
      title: 'Framework of Entrepreneurship Awareness Camp',
      details: 'Engaged in a camp aimed at fostering entrepreneurial skills and mindset from Nov 2019 - Jan 2020'
    }
  ];

  collegePublications = [
    {
      title: 'Observation on the Current Security Landscape of Intelligent Transportation Systems',
      details: 'Published On: International Conference on Computer Vision and Robotics (CVR 2022) from Jan 2022 - Apr 2022',
      image: 'https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.publications.scrs.in/chapter/978-81-955020-5-9/93' 
    }
  ];

  workExperience = [
    {
      id: 4,
      title: 'Engineering Intern',
      image: 'https://images.unsplash.com/photo-1526374870839-e155464bb9b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'May 2022 - Jul 2022\nCGI Information Systems and Management Consultants Pvt Ltd\nAs an intern, I developed proficiency in Java and MEAN stack technologies. I assisted with coding, testing, and debugging, contributing to a successful final project and earning a completion certificate.',
      showDetails: false
    },
    {
      id: 5,
      title: 'Associate Software Engineer',
      image: 'https://images.unsplash.com/photo-1581094289810-adf5d25690e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'Aug 2022 - Dec 2023 \nCGI Information Systems and Management Consultants Pvt Ltd, Chennai\nIn this role, I played a key part in both front-end and back-end development. I helped design and implement user interfaces and server-side logic, collaborated on troubleshooting, and adhered to coding standards.',
      showDetails: false
    }
  ];

  workProjects = [
    {
      title: 'CGI Trade360 Global Transaction Project',
      details: 'Duration: Jan 2023 - Dec 2023 \nWorked on enhancing global trade applications with Java, HTML, CSS, JavaScript, and TypeScript. Improved user interfaces, integrated API workflows, and performed code analysis with SonarQube.',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      link: 'https://www.cgi.com/en/solution/banking-capital-markets/trade-finance/trade360'  
    }
  ];

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }
  
  // Usage
  skills = [
    { icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=71257&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=114474&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=QEQQKirln6Tf&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=9OGIyU8hrxW5&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=w1Gq29w4RQWL&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=ut6gQeo5pNqf&format=png&color=000000' },
    { icon: 'https://img.icons8.com/?size=100&id=16318&format=png&color=000000' },
    { icon: 'https://img.icons8.com/ios-filled/50/000000/git.png' },
    { icon: 'https://img.icons8.com/?size=100&id=q4RsigMwEQ0d&format=png&color=000000' }
  ];
  
  chunkedSkills = this.chunkArray(this.skills, 6);

  projects = [
    {
      id: 6,
      title: 'TinDog Designing Project (HTML, CSS, Bootstrap)',
      image: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'A web application for dog enthusiasts to connect with nearby dogs. Featuring a modern design with responsive layouts, interactive sections, and a user-friendly interface.',
      link: 'https://sudhar31.github.io/TinDog-Project/',
      showDetails: false
    },
    {
      id: 7,
      title: 'Amusement Park Ticketing System',
      image: 'https://images.unsplash.com/photo-1533302389448-cd8434c64bbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'A full-stack application developed with Spring Boot and Angular for managing amusement park tickets. It includes features for booking, viewing summaries, and real-time updates.',
      link: 'https://github.com/sudhar31/Amusement-Park-Ticketing-System-Project',
      showDetails: false
    },
    {
      id: 8,
      title: 'Glacial Bliss - A Icecream resturant',
      image: 'https://images.unsplash.com/photo-1627373719412-746f5c1e5363?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      details: 'A full-stack project utilizing Java Spring Boot for backend and Angular for a frontend, interactive user interface, managing ice cream and dessert orders with secure user authentication.',
      link: 'https://github.com/sudhar31/Glacial-Bliss',
      showDetails: false
    }
    
  ];

  toggle(id: number) {
    const sections = [
      ...this.schoolEducation,
      ...this.collegeEducation,
      ...this.workExperience,
      ...this.projects
    ];
    const section = sections.find(s => s.id === id);
    if (section) {
      section.showDetails = !section.showDetails;
    }
  }

  onKeyPress(event: KeyboardEvent, id: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggle(id);
    }
  }

}
