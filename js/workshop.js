const workshopcard = [
    {
         workshopname:'AARAMBH 3.0',
        workshopimg:'github_session.png',
        workshoplink:''
    },{
        workshopname:'HackerEarth',
        workshopimg:'hacktoberfest.png',
        workshoplink:''
    },{
        workshopname:'#Iamremarkable by Google',
        workshopimg:'iamremarkable.jpg',
        workshoplink:''
    },{
         workshopname:'IMUN',
        workshopimg:'Binance_BUIDLer_Program_3.png',
        workshoplink:''
    },{
        workshopname:'Upcoming : New Year Lensathon',
       workshopimg:'upcoming.jfif',
       workshoplink:''
   },
];

var workRow = document.querySelectorAll('.workrow')[0];
const mainwork = workRow.attributes.pagename.value;
for(let i=0;i<workshopcard.length;i++){
    let work=document.createElement('div');
    work.className='workcolums';
    let imgurl;
    if(mainwork=='work-index')
    {
        imgurl= 'workshop/images/' + workshopcard[i].workshopimg;
        work.innerHTML='<a class="sess_card"><div class="sesscardstext">'+workshopcard[i].workshopname+'</div><div class="sesscardsimg"><img class="sess_img" src="'+imgurl+'" alt=""></div></a>';
    }
    else{

        imgurl= 'images/'+workshopcard[i].workshopimg;
        work.innerHTML='<a class="sess_card"><div class="sesscardstext">'+workshopcard[i].workshopname+'</div><div class="sesscardsimg"><img class="sess_img" src="'+imgurl +'" alt=""></div></a>';
      }
workRow.append(work);    
}
