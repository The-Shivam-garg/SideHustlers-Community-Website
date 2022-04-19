const team=[
    {
        fname:"Shivam",
        lname:"Garg",
        ilink:"./images/Shivam.jfif",
        role:"Community Lead"
    }
    ,{
        fname:"Arpit",
        lname:"Kumar",
        ilink:"./images/team/ark.jpg",
        role:"Community Manager", 
    },
    {
        fname:"Vimal",
        lname:"Mishra",
        ilink:"./images/Vimal.jpeg",
        role:"Technical Team Head",
    }
    ,{
        fname:"Satyaprakash",
        lname:"Sahoo",
        ilink:"./images/team/ss.jpg",
        role:"Marketing Head", 
    }
    ,{
        fname:"Arpit",
        lname:"Goyal",
        ilink:"./images/team/ag.jpg",
        role:"Technical Team", 
    }
    ,{
        fname:"Rishita",
        lname:"Bansal",
        ilink:"./images/team/rb.jpg",
        role:"Technical Team", 
    },

    {
        fname:"Zeeshan",
        lname:"Khan",
        ilink:"./images/team/Zeeshan.jpg",
        role:"Technical Team",
        
    }
    ,{
        fname:"Khushi",
        lname:"Saxena",
        ilink:"./images/team/ks.jpg",
        role:"Technical Team", 
    },{
        fname:"Shreya",
        lname:"Mittal",
        ilink:"./images/team/s.jpg",
        role:"Outreachy Team",
    },{
        fname:"Ishita",
        lname:"Sharma",
        ilink:"./images/team/ish.webp",
        role:"Outreachy Team", 
    }
    ,{
        fname:"Tanvi",
        lname:"jain",
        ilink:"./images/team/tj.jpeg",
        role:"Outreachy Team", 
    } ,{
        fname:"Ritik",
        lname:"Gautam",
        ilink:"./images/team/rg.jpg",
        role:"Outreachy Team", 
    }
    ,{
        fname:"Harsh",
        lname:"Varlani",
        ilink:"./images/team/harsh.jpg",
        role:"Graphic Designer ", 
    }
    ,{
        fname:"Arshad",
        lname:"Khan",
        ilink:"./images/team/ak.jpeg",
        role:"Graphic Designer", 
    }
    ,{
        fname:"Alisha",
        lname:"Chaudhari",
        ilink:"./images/team/alisha.jpg",
        role:"Content Writter", 
    }
   
   
    
    
  
    
   
    
    ,{
        fname:"Himani",
        lname:"",
        ilink:"./images/team/hm.jpg",
        role:"Content Writter", 
    }
   


]
let
 html='';
for (let index = 0; index < team.length; index++) {
    const e = team[index];
   html+= `  <div class="card">
    <img src=${e.ilink} class="m" alt="">
    <h1>${e.fname+" "+e.lname}</h1>
    <h3>${e.role}</h3>
    <div id="sm">
    <img src="./images/animation/linkedin.png" class="sm" alt="">
    <img src="./images/instagram.png" class="sm" alt="">
  </div>
  </div>`
}


document.getElementById("cards").innerHTML= html

document.getElementById("mn").addEventListener("click",()=>{
    document.getElementById("mnn").style.paddingLeft="10px";
    document.getElementById("mnn").style.marginLeft="21px";
    document.getElementById("mnn").style.width="158px";


    document.getElementById("mnn").style.backgroundColor="blue";
    document.getElementById("dp").style.animation="show 2s"

    document.getElementById("dp").style.opacity="1"
    // document.getElementById("tm").style.marginTop="-1100px"
    document.getElementById("mn").style.filter="invert(1)"
    document.getElementById("cls").style.display="block"
})
document.getElementById("cls").addEventListener("click",()=>{
    document.getElementById("mnn").style.backgroundColor="white";
    document.getElementById("dp").style.animation="hide 0s"
    document.getElementById("mnn").style.marginLeft="215px";
    document.getElementById("mnn").style.width="30px";


    document.getElementById("dp").style.opacity="0";
    // document.getElementById("tm").style.marginTop="0px"
    document.getElementById("mn").style.filter="invert(0)"
    document.getElementById("cls").style.display="none"
})
