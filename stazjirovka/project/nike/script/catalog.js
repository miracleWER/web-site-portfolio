var product = [
  {
    id: 0,
    name: "Nike Air Max Plus 3 Leather  ",
    desc: "Мужская обувь",
    price: 139.95,
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_439,c_limit/2f92a5ac-5b47-446f-bb56-8bd9e8bfaa91/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-plus-3-leather-brGftH.png",
  },
  {
    id: 1,
    name: "Nike Air Force 1 Luxe ",
    desc: "Мужская обувь",
    price: 58.95,
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_439,c_limit/7e8a0a3d-9b40-4a29-bfe2-e599bb15ab3b/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-luxe-p9XgNs.png",
  },
  {
    id: 2,
    name: "Nike Air Force 1 Shadow  ",
    desc: "Женская обувь",
    price: 57.99,
    img: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_439,c_limit/l3w4varugbogihcpj40e/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-force-1-shadow-n7WF4B.png",
  },
  {
    id: 3,
    name: "Nike Air Zoom Pegasus 38 ",
    desc: "Мужская обувь для бега по шоссе",
    price: 183.99,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c2c0d87b-6a37-4554-85c7-a9b58f65374d/кроссовки-для-бега-по-шоссе-air-zoom-pegasus-38-9zqg2h.png",
  },
  {
    id: 4,
    name: "Kyrie 7 ",
    desc: "Баскетбольная обувь",
    price: 139.95,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/24755cc1-63ef-400f-b086-2e129a5f1ba4/баскетбольные-кроссовки-kyrie-7-hv6LdK.png",
  },
  {
    id: 5,
    name: "Kyire Low 4",
    desc: "Баскетбольная обвуь",
    price: 129.95,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/230d2ee8-9bc0-4e9e-821e-0f0590b90cb5/баскетбольные-кроссовки-kyrie-low-4-5vqMr4.png",
  },
  {
    id: 6,
    name: "Nike Air Zoom SuperRep ",
    desc: "Мужская обувь для ВИИТ",
    price: 39.95,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/18c1b497-711b-4f12-8b2a-bff33f5e9988/кроссовки-для-виит-air-zoom-superrep-2-18jSRx.png",
  },
  {
    id: 7,
    name: "Nike Mercurial Vapor",
    desc: "Футбольные бутсы для игры на твердом грунте",
    price: 302,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e260c202-347e-4539-bcdc-180ab70ca3c2/футбольные-бутсы-для-игры-на-твердом-грунте-mercurial-vapor-14-elite-fg-LhM8Sl.png",
  },
  {
    id: 8,
    name: "Nike Metcon 7 ",
    desc: "Обувь для тренинга ",
    price: 152,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/617a3115-810c-4e3f-a29f-838ce48841ca/кроссовки-для-тренинга-metcon-7-mj0r6f.png",
  },
  {
    id: 9,
    name: "Nike Pegasus Trail 3 ",
    desc: "Мужская обувь для трейларинга ",
    price: 145,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b226db2c-9c68-4d1c-a0e2-d8abc995bf7a/кроссовки-для-трейлраннинга-pegasus-trail-3-3mTRcw.png",
  },
  {
    id: 10,
    name: "Nike ZoomX Vaporfly ",
    desc: "Мужская обувь для забегов по шоссе ",
    price: 302,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1b57a253-3863-4d2c-b465-53691324bc0a/кроссовки-для-забегов-по-шоссе-zoomx-vaporfly-next-2-krdZRk.png",
  },
  {
    id: 11,
    name: "Nike Air Zoom Alphafly ",
    desc: "Мужская обувь для заебгов по шоссе",
    price: 278,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/91f590d3-a78f-4d84-8019-55b73f94ba88/кроссовки-для-забегов-по-шоссе-air-zoom-alphafly-next-flyknit-xDM1Lj.png",
  },
  {
    id: 12,
    name: "Nike Free Run 5.0",
    desc: "Мужская обувь для заебгов по шоссе",
    price: 123,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d58dc67a-1479-4331-ab74-36d5188e05a7/кроссовки-для-бега-по-шоссе-free-run-5-0-DBLJkT.png",
  },
  {
    id: 13,
    name: "Nike Air Max 90",
    desc: "Мужская обувь",
    price: 142,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8b471488-d61e-424d-b3c0-247b6bf5cc75/кроссовки-air-max-90-mKFbN7.png",
  },
  {
    id: 14,
    name: "LeBron Witness 6 ",
    desc: "Баскетбольная обувь",
    price: 100,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/263505e6-ba35-4445-967e-fd603bd5ccc9/баскетбольные-кроссовки-lebron-witness-6-ZW0zn5.png",
  },
  {
    id: 15,
    name: "Nike Air Max 90 ",
    desc: "Мужская обувь",
    price: 132,
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/408dc200-b99a-4462-87db-c3015b34e624/кроссовки-air-max-90-S8L0TL.png",
  },
];

for (let i = 0; i < product.length; i++) {
  var catalog_res2 =
    '<div class="cards"> <img src="' +
    product[i].img +
    '" alt="" /> <div class="cards-text"> <h1>' +
    product[i].name +
    '</h1> <p class="price">' +
    product[i].price +
    '$</p> <p class="desc">' +
    product[i].desc +
    "</p> </div> </div>";
  document.getElementById("catalog_res2").innerHTML += catalog_res2;
}
