const menuData = {
  starters: [
    {
      id: 1,
      name: "Desayuno sencillo",
      description: "Delicioso desayuno acompañado de arepa, huevo, quesito y bebida.",
      pictureUrl: require("../../assets/starters/img1.png"),
      price: "$8.000",
    },
    {
      id: 2,
      name: "Desayuno especial",
      description: "Desayuno tradicional y completo con arepa, huevo, proteína, quesito y bebida.",
      pictureUrl: require("../../assets/starters/img2.png"),
      price: "$12.000",
    },
    {
      id: 3,
      name: "Arepa acompañada",
      description: "Única y deliciosa arepa tradicional acompañada de proteína (carne o pollo) desmechada.",
      pictureUrl: require("../../assets/starters/img3.png"),
      price: "$7.000",
    },
  ],

  breakfast: [
    {
      id: 1,
      name: "Menú del día",
      description: "Completo y delicioso, incluye 100g de proteína, dos carbohidratos, ensalada, crema y jugo de 9oz.",
      pictureUrl: require("../../assets/breakfast/img1.png"),
      price: "$12.000",
    },
    {
      id: 2,
      name: "Punta de anca",
      description: "200g de proteína, papas a la francesa, arepa, queso, ensalada y bebida.",
      pictureUrl: require("../../assets/breakfast/img2.png"),
      price: "$22.000",
    },
    {
      id: 3,
      name: "Arroz mixto",
      description: "Arroz con cerdo, pollo, tocino, verduras y mazorca, acompañado de pan francés, ensalada y bebida.",
      pictureUrl: require("../../assets/breakfast/img3.png"),
      price: "$18.000",
    },
    {
      id: 4,
      name: "Trucha",
      description: "Trucha acompañada de arroz con coco, patacón, ensalada y bebida.",
      pictureUrl: require("../../assets/breakfast/img4.png"),
      price: "$18.000",
    },
  ],

  dinner: [
    {
      id: 1,
      name: "Hamburguesa",
      description: "Clásica y perfecta. Incluye papas a la francesa y bebida.",
      pictureUrl: require("../../assets/dinner/img1.png"),
      price: "$15.000",
    },
    {
      id: 2,
      name: "Sándwich sencillo",
      description: "Ideal para un break. Incluye pan, jamón, queso y lechuga.",
      pictureUrl: require("../../assets/dinner/img2.png"),
      price: "$5.000",
    },
    {
      id: 3,
      name: "Sándwich especial",
      description: "Pan, jamón, carne desmechada o pollo, queso, lechuga y tomate.",
      pictureUrl: require("../../assets/dinner/img3.png"),
      price: "$12.000",
    },
    {
      id: 4,
      name: "Chuzo de pollo",
      description: "Acompañado de papa al vapor, arepa y ensalada.",
      pictureUrl: require("../../assets/dinner/img4.png"),
      price: "$12.000",
    },
  ],

  drinks: [
    {
      id: 1,
      name: "Fritos",
      description: "Variedad de empanadas, pasteles de pollo, papas rellenas y mucho más.",
      pictureUrl: require("../../assets/drinks/img1.png"),
      price: "$3.000",
    },
    {
      id: 2,
      name: "Gaseosas personales",
      description: "Refrescos de 400 ml.",
      pictureUrl: require("../../assets/drinks/img2.png"),
      price: "$3.400",
    },
    {
      id: 3,
      name: "Agua",
      description: "Simple y perfecta.",
      pictureUrl: require("../../assets/drinks/img3.png"),
      price: "$2.000",
    },
  ],
};

export default menuData;
