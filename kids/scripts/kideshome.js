let data=[
    {
        img:'https://www.yoox.com/images/items/12/12857139OW_14_f.jpg?impolicy=crop&width=306&height=390',
        title:'LITTLE MARC JACOBS',
        name:'Sweatshirts',
        price:'US$ 126,00',
    },
    {
        img:'https://www.yoox.com/images/items/13/13829366TR_14_f.jpg?impolicy=crop&width=387&height=490',
        title:'BILLIEBLUSH',
        name:'Denim pants',
        price:'US$ 78,00',
    },
    {
        img:'https://www.yoox.com/images/items/12/12865069TV_14_f.jpg?impolicy=crop&width=387&height=490',
        title:'PHILOSOPHY di LORENZO SERAFINI',
        name:'Sweatshirts',
        price:'US$ 111,00',
    },
    {
        img:'https://www.yoox.com/images/items/17/17317690OD_14_f.jpg?impolicy=crop&width=306&height=390',
        title:'EMPORIO ARMANI',
        name:'Laced shoes',
        price:'US$ 218,00',
    },
    {
        img:'https://www.yoox.com/images/items/15/15223785HD_14_f.jpg?impolicy=crop&width=387&height=490',
        title:'LITTLE MARC JACOBS',
        name:'Dresses',
        price:'US$ 112,00',
    },
    {
        img:'https://www.yoox.com/images/items/12/12867648JN_14_f.jpg?impolicy=crop&width=387&height=490',
        title:'LANVIN',
        name:'Sweatshirts',
        price:'US$ 144,00',
    },  
];


    let appenddata=(data)=>{
        let main= document.getElementById('girlProduct');
        main.innerHTML=null;
        data.forEach((el)=>{
            
            let img= document.createElement('img');
            img.src=el.img;

            let title = document.createElement('h4');
            title.innerText=el.title;

            let name = document.createElement('p');
            name.innerText=el.name;

            let price = document.createElement('p');
            
            price.innerText=el.price;

            let div=document.createElement('div');
            div.append(img,title,name,price);
            div.id='dav'
            div.addEventListener('click',()=>{
                rampur()
            })

            main.append(div);

        })
    }

    appenddata(data)
    // console.log(data)
    // function rampur(){
    //     // console.log('jhgugkiug')
    //     window.location.href='../girl/0_24Months.html'
    // }





    let data1=[
        {
            img:'https://www.yoox.com/images/items/12/12864133wu_14_r.jpg?width=210&height=272&impolicy=crop&gravity=Center',
            title:'LITTLE MARC JACOBS',
            name:'Sweatshirts',
            price:'US$ 126,00',
        },
        {
            img:'https://www.yoox.com/images/items/17/17256162sb_14_e.jpg?width=210&height=272&impolicy=crop&gravity=Center',
            title:'BILLIEBLUSH',
            name:'Denim pants',
            price:'US$ 78,00',
        },
        {
            img:'https://www.yoox.com/images/items/17/17243148uu_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center',
            title:'PHILOSOPHY di LORENZO SERAFINI',
            name:'Sweatshirts',
            price:'US$ 111,00',
        },
        {
            img:'https://www.yoox.com/images/items/13/13510536mo_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center',
            title:'EMPORIO ARMANI',
            name:'Laced shoes',
            price:'US$ 218,00',
        },
        {
            img:'https://www.yoox.com/images/items/13/13606477no_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center',
            title:'LITTLE MARC JACOBS',
            name:'Dresses',
            price:'US$ 112,00',
        },
        {
            img:'https://www.yoox.com/images/items/16/16075782kl_14_f.jpg?width=210&height=272&impolicy=crop&gravity=Center',
            title:'LANVIN',
            name:'Sweatshirts',
            price:'US$ 144,00',
        },  
    ];
    
    
        let appenddata1=(data)=>{
            let main= document.getElementById('boyProduct');
            main.innerHTML=null;
            data.forEach((el)=>{
                
                let img= document.createElement('img');
                img.src=el.img;
    
                let title = document.createElement('h4');
                title.innerText=el.title;
    
                let name = document.createElement('p');
                name.innerText=el.name;
    
                let price = document.createElement('p');
                
                price.innerText=el.price;
    
                let div=document.createElement('div');
                div.append(img,title,name,price);
                div.id='dav'
                div.addEventListener('click',()=>{
                    rampur()
                })
    
                main.append(div);
    
            })
        }
    
        appenddata1(data1)

  