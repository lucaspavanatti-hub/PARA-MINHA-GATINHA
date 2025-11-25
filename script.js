/* CONFIGURAÇÃO */
const photos = Array.from({length:30}, (_,i)=> `assets/photos/${i+1}.jpeg`);
const videos = Array.from({length:11}, (_,i)=> ({
  src: `assets/videos/${i+1}.mp4`,
  title: `Vídeo ${i+1}`
}));

/* Textos */
const typeLines = [
  'Para minha pessoa favorita.',
  'Um lugar com fotos, vídeos e palavras que contam um pouco da nossa história.',
  'Cada imagem, uma lembrança.'
];

const timelineEvents = [
  {date:'25 Abr 2025', title:'Primeiro contato após alguns anos', text:'O dia em que criei coragem pra te mandar mensagem kkk'},
  {date:'11 Mai 2025', title:'Primeiro encontro e Primeiro Beijo', text:'O dia em que nossos caminhos se cruzaram.'},
  {date:'17 Mai 2025', title:'Festa do seu Aniversário', text:'Conheci mais ou menos sua familia e não sabia onde enfiar a cara kkkkk, amei muito estar la com você'},
  {date:'01 Jun 2025', title:'Nossa primeira viagem', text:'Você tava morrendo de vergonha kkk'},
  {date:'08 Jun 2025', title:'Flus Haus', text:'Seu segundo aniversário kkk'},
  {date:'14 Jun 2025', title:'Oficialmente namorados', text:'Não no melhor lugar, mas foi muito especial'},
  {date:'23 Ago 2025', title:'Dormindo na casa dos seus avós', text:'Dani não dormiu nesses dias kkkk'},
];

const loves = [
  'Seu sorriso lindo',
  'Seu jeito único',
  'Seu abraço que eu amo.',
  'Seu chamego.',
  'Seu senso de humor',
  'Seu esforço para alcançar seus objetivos',
  'Sua parceria',
  'Sua cara quando eu vou te beijar kkk',
  'Sua inteligência',
  'Seu ombro amigo'
];

/* ELEMENTOS */
const galleryEl = document.getElementById('gallery');
const videoGrid = document.getElementById('videoGrid');
const timelineEl = document.getElementById('timeline');
const loveGrid = document.getElementById('loveGrid');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const surpriseBtn = document.getElementById('surpriseBtn');

/* TIMELINE */
timelineEvents.forEach(ev=>{
  const div = document.createElement('div');
  div.className='event';
  div.innerHTML = `
    <div class="dot"></div>
    <div class="content">
      <strong>${ev.title}</strong> — <small>${ev.date}</small>
      <div>${ev.text}</div>
    </div>
  `;
  timelineEl.appendChild(div);
});

/* GALERIA FOTO */
photos.forEach((src, idx)=>{
  const card = document.createElement('div');
  card.className='photo-card';
  card.innerHTML = `
    <img src="${src}" alt="Foto ${idx+1}">
    <div class="polaroid">Foto ${idx+1}</div>
  `;
  card.onclick = ()=> openModal(`<img src="${src}">`);
  galleryEl.appendChild(card);
});

/* GALERIA VIDEO */
videos.forEach((v, idx)=>{
  const card = document.createElement('div');
  card.className='video-card';

  const thumb = `assets/thumbs/${idx+1}.jpg`;

  card.innerHTML = `
    <img src="${thumb}" alt="Miniatura ${idx+1}">
    <div class="vlabel">Vídeo ${idx+1}</div>
  `;

  card.onclick = ()=> openModal(`
    <video controls autoplay src="${v.src}" style="max-width:100%;border-radius:10px;"></video>
  `);

  videoGrid.appendChild(card);
});

/* O QUE AMO */
loves.forEach((text, i)=>{
  const el = document.createElement('div');
  el.className='heart';
  el.innerHTML = `
    <p>💖 Qualidade ${i+1}</p>
    <div class="reveal">${text}</div>
  `;
  el.onclick = ()=> {
    const r = el.querySelector('.reveal');
    r.style.display = r.style.display === 'block' ? 'none' : 'block';
  };
  loveGrid.appendChild(el);
});

/* MODAL */
function openModal(html){
  modalContent.innerHTML = html;
  modal.classList.add('open');
}
closeModal.onclick = ()=> {
  modal.classList.remove('open');
  modalContent.innerHTML = "";
}

/* SURPRESA */
surpriseBtn.onclick = ()=>{
  openModal(`
    <div style="background:white;padding:20px;border-radius:10px;">
      <h2 style="font-family:'Dancing Script',cursive;color:#e76f9b;font-size:42px;">Emily ❤️</h2>
      <p style="font-size:16px;">Você é a melhor parte da minha vida.</p>
    </div>
  `);
};

/* TYPEWRITER */
(function typewriter(){
  const el = document.getElementById('typewriter');
  let line=0, pos=0, forward=true, pause=0;

  function tick(){
    const txt = typeLines[line];
    if(forward){
      pos++;
      el.textContent = txt.slice(0,pos);
      if(pos === txt.length){ forward=false; pause=25; }
    } else {
      if(pause>0) pause--;
      else {
        pos--;
        el.textContent = txt.slice(0,pos);
        if(pos===0){ forward=true; line=(line+1)%typeLines.length; }
      }
    }
    setTimeout(tick, forward?40:15);
  }
  tick();
})();

/* PETALAS */
(function petals(){
  const container = document.getElementById('petals');
  for(let i=0;i<28;i++){
    const p = document.createElement('div');
    p.className='petal';
    p.style.left = Math.random()*100 + "vw";
    p.style.animationDuration = (8 + Math.random()*10)+"s";
    p.style.animationDelay = (Math.random()*5)+"s";
    container.appendChild(p);
  }
})();