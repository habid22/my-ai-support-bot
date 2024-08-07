const vehicles = {
    sedans: [
        { make: 'Toyota', model: 'Camry', mpg: '28 city / 39 highway', features: 'Hybrid option, excellent fuel efficiency', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
        { make: 'Honda', model: 'Accord', mpg: '30 city / 38 highway', features: 'Turbocharged engine, Eco Assist system', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Hyundai', model: 'Elantra', mpg: '33 city / 43 highway', features: 'Smartstream engine, highly efficient', colors: ['White', 'Black', 'Silver', 'Green', 'Red'] },
        { make: 'Ford', model: 'Fusion', mpg: '23 city / 34 highway', features: 'EcoBoost engine, Auto Start-Stop technology', colors: ['White', 'Black', 'Blue', 'Red'] },
        { make: 'Chevrolet', model: 'Malibu', mpg: '29 city / 36 highway', features: 'Turbocharged engine, fuel efficiency', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
    ],
    suvs: [
        { make: 'Toyota', model: 'RAV4', mpg: '28 city / 35 highway', features: 'Hybrid option, all-wheel drive', colors: ['White', 'Black', 'Gray', 'Blue', 'Green'] },
        { make: 'Honda', model: 'CR-V', mpg: '28 city / 34 highway', features: 'Turbocharged engine, spacious interior', colors: ['White', 'Black', 'Silver', 'Red', 'Green'] },
        { make: 'Hyundai', model: 'Tucson', mpg: '26 city / 33 highway', features: 'Smartstream engine, modern design', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Ford', model: 'Escape', mpg: '27 city / 33 highway', features: 'EcoBoost engine, advanced safety features', colors: ['White', 'Black', 'Silver', 'Blue', 'Green'] },
        { make: 'Chevrolet', model: 'Equinox', mpg: '26 city / 31 highway', features: 'Turbocharged engine, fuel efficiency', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
    ],
    trucks: [
        { make: 'Ford', model: 'F-150', mpg: '20 city / 26 highway', features: 'EcoBoost engine, high towing capacity', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Chevrolet', model: 'Silverado', mpg: '23 city / 33 highway', features: 'Duramax engine, advanced trailering technology', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
        { make: 'Ram', model: '1500', mpg: '22 city / 32 highway', features: 'eTorque mild hybrid system, luxury interior', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Toyota', model: 'Tundra', mpg: '18 city / 24 highway', features: 'i-FORCE engine, off-road capabilities', colors: ['White', 'Black', 'Silver', 'Green', 'Red'] },
        { make: 'GMC', model: 'Sierra', mpg: '21 city / 27 highway', features: 'Duramax engine, MultiPro tailgate', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
    ],
    sports: [
        { make: 'Porsche', model: '911', mpg: '18 city / 25 highway', features: 'High-performance engine, luxury interior', colors: ['White', 'Black', 'Silver', 'Red', 'Yellow'] },
        { make: 'Chevrolet', model: 'Corvette', mpg: '15 city / 27 highway', features: 'V8 engine, sports design', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
        { make: 'Ford', model: 'Mustang', mpg: '21 city / 31 highway', features: 'Turbocharged engine, iconic design', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Nissan', model: 'GT-R', mpg: '16 city / 22 highway', features: 'Twin-turbocharged V6 engine, advanced aerodynamics', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
        { make: 'Dodge', model: 'Challenger', mpg: '19 city / 30 highway', features: 'Supercharged V8 engine, muscle car design', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
    ],
    luxury: [
        { make: 'Mercedes-Benz', model: 'S-Class', mpg: '19 city / 28 highway', features: 'Luxurious interior, advanced technology', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
        { make: 'BMW', model: '7 Series', mpg: '22 city / 29 highway', features: 'Elegant design, high-performance engine', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Audi', model: 'A8', mpg: '17 city / 26 highway', features: 'Quattro all-wheel drive, luxury interior', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
        { make: 'Lexus', model: 'LS', mpg: '18 city / 27 highway', features: 'Hybrid option, premium materials', colors: ['White', 'Black', 'Gray', 'Blue', 'Red'] },
        { make: 'Jaguar', model: 'XJ', mpg: '15 city / 23 highway', features: 'Dynamic performance, luxury craftsmanship', colors: ['White', 'Black', 'Silver', 'Blue', 'Red'] },
    ],
};

module.exports = vehicles;
