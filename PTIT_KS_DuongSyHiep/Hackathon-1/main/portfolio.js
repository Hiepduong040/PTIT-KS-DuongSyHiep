let heroInfo = {
    name: "Minh Cường",
    job: "freelance react developer",
    imgUrl: "https://picsum.photos/200/300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi porro excepturi assumenda, culpa cupiditate, veritatis nobis rerum blanditiis necessitatibus dolorum amet sed voluptatum aspernatur impedit ducimus veniam dicta itaque ratione!",
  };
  
  localStorage.setItem("heroInfo", JSON.stringify(heroInfo));

  document.addEventListener("DOMContentLoaded", function () {
    
    let storedHeroInfo = localStorage.getItem('heroInfo');
    
    if (storedHeroInfo) {
     
      let parsedHeroInfo = JSON.parse(storedHeroInfo);
      
      let logoImg = document.querySelector('.logo-box img');
      let logoH2 = document.querySelector('.logo-box h2');
      let headlineP = document.querySelector('.head-line');
      let h1Elements = document.querySelectorAll('h1');
      let descriptionP = document.querySelectorAll('.p-1');

      logoImg.src = parsedHeroInfo.imgUrl;
      logoH2.textContent = parsedHeroInfo.name;
      headlineP.textContent = parsedHeroInfo.job;
      h1Elements[0].textContent = "HAY! I'M " + parsedHeroInfo.name;
      h1Elements[1].textContent = "I'M A " + parsedHeroInfo.job;
      descriptionP.textContent = parsedHeroInfo.description;
     
    }
  });


  let recentProjects = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Auto Drive Project",
      link: "https://abcd-example.com",
      tags: ["Angular", "React", "Jquery"],
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Ecommerce Project",
      link: "https://abcd-example.com",
      tags: ["Bootstrap", "CSS", "Javascript"],
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Chat Application",
      link: "https://abcd-example.com",
      tags: ["MongoDB", "Javascript"],
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Social Media Platform",
      link: "https://abcd-example.com",
      tags: ["Vue", "Javascript"],
    },
    {
      id: 5,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Image Sharing Platform",
      link: "https://abcd-example.com",
      tags: ["React", "Javascript"],
    },
  ];
  
localStorage.setItem("recentProjects",JSON.stringify(recentProjects));

document.addEventListener("DOMContentLoaded", function () {
    let storedRecentProjects = localStorage.getItem('recentProjects');
    if (storedRecentProjects) {    
      let parsedRecentProjects = JSON.parse(storedRecentProjects);           
      let myWorkSection = document.querySelector('.my-work');          
      let workElements = myWorkSection.getElementsByClassName('work');           
      parsedRecentProjects.forEach(function(project, index) {       
        if (index < workElements.length) {
          let workElement = workElements[index];                   
          let imgElement = workElement.getElementsByTagName('img')[0];                    
          
          imgElement.src = project.imgUrl;                  
          
          let workDetailsDiv = workElement.getElementsByClassName('work-details')[0];                              
          let projectNameB = workDetailsDiv.getElementsByTagName('b')[0];
         
          projectNameB.textContent = project.projectName;
          
          let tagsP = workDetailsDiv.getElementsByTagName('p')[0];
          tagsP.textContent = project.tags.join(', ');
        }
      });
    }
  });


  let services = [
    {
      id: 1,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Website Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 2,
      imgUrl: "https://picsum.photos/300/300",
      serviceName: "Figma Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 3,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "SEO Marketing",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
    {
      id: 4,
      imgUrl: "https://picsum.photos/300/300",
      projectName: "Graphic Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui veritatis tenetur corrupti obcaecati ipsam culpa et totam fuga eligendi",
    },
  ];
  
  localStorage.setItem("services", JSON.stringify(services));



document.addEventListener("DOMContentLoaded", function () {
    let storedServices = JSON.parse(localStorage.getItem("services"));
    let servicesContainer = document.querySelector('.services article');
    servicesContainer.innerHTML = '';
    storedServices.forEach(function (service) {
      let workElement = document.createElement('div');
      workElement.classList.add('work');
  
      let imgElement = document.createElement('img');
      imgElement.src = service.imgUrl;
      workElement.appendChild(imgElement);

      let workDetailsDiv = document.createElement('div');
      workDetailsDiv.classList.add('work-details');
  
      let serviceNameB = document.createElement('b');
      serviceNameB.textContent = service.serviceName;
      workDetailsDiv.appendChild(serviceNameB);
  
      let descriptionP = document.createElement('p');
      descriptionP.textContent = service.description;
      workDetailsDiv.appendChild(descriptionP);
  
      workElement.appendChild(workDetailsDiv);
      servicesContainer.appendChild(workElement);
    });
  });