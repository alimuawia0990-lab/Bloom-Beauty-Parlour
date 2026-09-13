
const menu = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if(menu){
  menu.addEventListener('click',()=>links.classList.toggle('open'));
  links?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}
const year = document.querySelectorAll('[data-year]');
year.forEach(el=>el.textContent=new Date().getFullYear());

const form=document.querySelector('#appointmentForm');
if(form){
  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const name=document.querySelector('#name').value.trim();
    const phone=document.querySelector('#phone').value.trim();
    const service=document.querySelector('#service').value;
    const date=document.querySelector('#date').value.trim();
    const msg=`Hello Bloom Beauty Parlour!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0APreferred date/time: ${encodeURIComponent(date)}`;
    window.open(`https://wa.me/923119007449?text=${msg}`,'_blank');
  });
}
