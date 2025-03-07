import M15R6 from "./assets/M15R6.jpeg";
import Blade15 from "./assets/Blade15.webp";
import Scar17 from "./assets/scar17.png";
import Raider17 from "./assets/raider17.jpg";
import MacPro16 from "./assets/mac_pro_16.png";
import Mac14 from "./assets/mac_14.png";

export const LABTOPS = [
    {
        id: 1,
        name: "Alienware` m15 R6",
        image: M15R6,
        company: "Dell",
        spec: {
            Processor: "Intel Core i7-11800H",
            RAM: "16GB DDR4",
            Storage: "1TB SSD",
            Graphics: "NVIDIA RTX 3070"
        },
        price: "$1,999"
    },
    {
        id: 2,
        name: "Razer Blade 15",
        image: Blade15,
        company: "Razer",
        spec: {
            Processor: "Intel Core i9-12900H",
            RAM: "32GB DDR5",
            Storage: "1TB SSD",
            Graphics: "NVIDIA RTX 3080 Ti"
        },
        price: "$3,499"
    },
    {
        id: 3,
        name: "ASUS ROG Strix Scar 17",
        company: "ASUS",
        image: Scar17,
        spec: {
            Processor: "AMD Ryzen 9 5900HX",
            RAM: "32GB DDR4",
            Storage: "2TB SSD",
            Graphics: "NVIDIA RTX 3080"
        },
        price: "$2,699"
    },
    {
        id: 4,
        name: "MSI GE76 Raider",
        image: Raider17,
        company: "MSI",
        spec: {
            Processor: "Intel Core i9-11980HK",
            RAM: "32GB DDR4",
            Storage: "1TB SSD",
            Graphics: "NVIDIA RTX 3080"
        },
        price: "$2,999"
    },
    {
        id: 5,
        name: "MacBook Pro 16 (M3 Max)",
        company: "Apple",
        image: MacPro16,
        spec: {
            Processor: "Apple M3 Max",
            RAM: "64GB Unified Memory",
            Storage: "2TB SSD",
            Graphics: "Integrated 40-core GPU"
        },
        price: "$4,299"
    },
    {
        id: 6,
        name: "MacBook Pro 14 (M3 Pro)",
        image: Mac14,
        company: "Apple",
        spec: {
            Processor: "Apple M3 Pro",
            RAM: "32GB Unified Memory",
            Storage: "1TB SSD",
            Graphics: "Integrated 18-core GPU"
        },
        price: "$2,499"
    }
];
