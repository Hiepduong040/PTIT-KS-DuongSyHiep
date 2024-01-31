let myHero=JSON.parse(localStorage.getItem("myInfor"))||[];
let projects=JSON.parse(localStorage.getItem("projects"))||[];
let personalDetail=JSON.parse(localStorage.getItem("personalDetail"))||[];
function render(){
   const ulHtml=projects.map(function(e){
    return`
    <tr>
    <td>1</td>
    <td>${e.projectName}</td>
    <td>${e.imgUrl}</td>
    <td>${e.link}</td>
    <td>
      <button type="button" class="btn btn-light">${e.tag}</button>
      <button type="button" class="btn btn-light">${e.tag}</button>
      <button type="button" class="btn btn-light">${e.tag}</button>
    </td>
    <td>
      <button type="button" class="btn btn-danger">Delete</button>
      <button type="button" class="btn btn-success">Update</button>
    </td>
  </tr> 
    `
   });
   document.querySelector('.body').innerHTML=ulHtml.join('');
} 
render();
