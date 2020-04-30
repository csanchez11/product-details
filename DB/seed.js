// IMPORT DB HELPERS AND DB ACCESS


const features = ["Buttery-soft", "Bonded eyelets for ventilation", "Centre-back Tape works as a locker loop", "Abrasion-resistant", "Sweat-wicking", "Quick-drying", "Seemless constructions", "Engineered ventilation zones", "Four-way stretch", "Lightweight", "Sweat-wicking", "High Rise, 21 Inch Inseam", "Waistband pocket", "Waistband lies flat and won't dig in", "Breathable", "Added Lycra® fibre for stretch and shape retention", "Smooth cool feel", "Pocket holds your key or card", "Drawcord to customize fit", "High-coverage", "Mesh fabric panels for ventilation", "Feels barely there", "Low-friction performance", "Lightweight coverage", "Supportive", "Hidden waistband pocket", "Updated Fit", "Minimal seams to reduce chafe", "Soft"];
const materials = ["Body: 100% Polyester", "Body: 80% Nylon, 20% Lycra® Elastane", "Body: 69% Nylon, 31% Lycra® Elastane", "Body: 77% Nylon, 23% Lycra® Elastane"];
const designedFor = ["Yoga", "Running", "On the Move", "Training"];
const whyMade = ["Let the intensity rise. This was designed to keep things ventilated and dry as you get sweaty.", "Your practice has never felt so good. This was designed to minimize distractions and maximize comfort as you flow through your workout.", "Calm is always just a practice away. Nearly seamless and pocket-free to make floor work extra comfortable.", "Long live burpees. We made this with zipper-free storage to keep intense movement and floor work comfortable.", "From quad-burner hill sprints to feels-so-good floor stretches, these have got you covered.", "Focus on your strength, not your sweat. Powered by our fastest-drying fabric, this ultra-breathable piece handles heat and sweat during intense workouts.", "You asked, we listened. This updated collection has an improved fit and added spandex so it won’t bag out during sweaty workouts. Your favourite piece just got better."];
let imgurlCount = 1;

// let imgurl = `https://lulu-fec.s3.us-east-2.amazonaws.com/image${imgurlCount}.jpeg`

// Create a product that consists of a why made paragraph, materials list, features, and activity it was designed for
const createProduct = () => {
  let product = {};
  // Add random amount of random features
  product.features = buildFeatureList(Math.floor( (Math.random() * 6) + 4));
  // add random designedFor activitiy
  product.designedFor = designedFor[Math.floor(Math.random() * designedFor.length)];
  // add random whyMade paragraph
  product.whyMade = whyMade[Math.floor(Math.random() * whyMade.length)];
  // Add random material composition
  product.materials = materials[Math.floor(Math.random() * materials.length)]
  product.imgurl1 = `https://lulu-fec.s3.us-east-2.amazonaws.com/image${imgurlCount}.jpeg`;
  imgurlCount++;
  product.imgurl2 = `https://lulu-fec.s3.us-east-2.amazonaws.com/image${imgurlCount}.jpeg`;
  imgurlCount++;

  return product;
};

const buildFeatureList = (n) => {
  //define string and place in reandom feature
  let featureList = features[Math.floor(Math.random() * features.length)];
  //iterate from 0 to n
  for(let i = 0; i < n; i++){
    // for every count select random feature
    // concatenate into string
    featureList += ', ' + features[Math.floor(Math.random() * features.length)]
  }
  //return string
  // console.log(featureList, "inside func");
  return featureList;
}

// Create "n" amount of products
const createProducts = (n) => {
  //create an empty array
  let products = [];
    //invoke the create produc feature 100 times
    for(var i = 0; i < n; i++){
      products.push(createProduct())
    }
    return products;
  };

const seedData = () => {
  // Complete me please
};

// NOTE: DO NOT invoke this function as part of your
// server code - it is meant to only be run once so that
// you have access to data to work with
// seedData();
// let randNumb = Math.floor( (Math.random() * 6) + 4);
// console.log( buildFeatureList(Math.floor( (Math.random() * 6) + 4)) );
console.log(createProducts(3));