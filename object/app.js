// var cars = {
//     tesla: {
//         cybertruck: {
//             name: "Cybertruck",
//             brand: "Tesla",
//             colors: ["Red", "White", "Black"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/tesla-cybertruck.jpg"
//         }
//     },
//     honda: {
//         civic: {
//             name: "Civic",
//             brand: "Honda",
//             colors: ["Blue", "Grey", "Black"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/honda-civic.jpg"
//         }
//     },
//     ford: {
//         mustang: {
//             name: "Mustang",
//             brand: "Ford",
//             colors: ["Yellow", "Red", "Black"],
//             doors: 2,
//             wheels: 4,
//             imgUrl: "https://example.com/ford-mustang.jpg"
//         }
//     },
//     audi: {
//         a4: {
//             name: "A4",
//             brand: "Audi",
//             colors: ["White", "Black", "Silver"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/audi-a4.jpg"
//         }
//     },
//     toyota: {
//         camry: {
//             name: "Camry",
//             brand: "Toyota",
//             colors: ["Red", "Blue", "Silver"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/toyota-camry.jpg"
//         }
//     },
//     bmw: {
//         series3: {
//             name: "3 Series",
//             brand: "BMW",
//             colors: ["Black", "White", "Grey"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/bmw-3-series.jpg"
//         }
//     },
//     dodge: {
//         challenger: {
//             name: "Challenger",
//             brand: "Dodge",
//             colors: ["Red", "Black", "Green"],
//             doors: 2,
//             wheels: 4,
//             imgUrl: "https://example.com/dodge-challenger.jpg"
//         }
//     },
//     subaru: {
//         impreza: {
//             name: "Impreza",
//             brand: "Subaru",
//             colors: ["Blue", "White", "Black"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/subaru-impreza.jpg"
//         }
//     },
//     nissan: {
//         altima: {
//             name: "Altima",
//             brand: "Nissan",
//             colors: ["Black", "White", "Silver"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/nissan-altima.jpg"
//         }
//     },
//     volkswagen: {
//         golf: {
//             name: "Golf",
//             brand: "Volkswagen",
//             colors: ["Red", "Blue", "White"],
//             doors: 4,
//             wheels: 4,
//             imgUrl: "https://example.com/vw-golf.jpg"
//         }
//     }
// };

// // for (var company in cars) {
// //     // console.log(key)
// //     for (var model in cars[company]) {
// //         console.log(cars[company][model].colors)
// //         // for (var varient in cars[company][model]) {
// //         //     console.log(cars[company][model][varient])
// //         // }
// //     }

// // }


// // for(var company in cars){
// //     // console.log(company)
// //     for(var model in cars[company]){
// //         console.log(cars[company][model].imgUrl)

// //     }
// // }

// // var user = "nissan"
// // var model = "altima"

// // console.log(cars[user][model]);


var carvariant = {
    honda: {
        civic: {
            type: {
                name: "honda civic reborn",
                year: 2006,
                price: 15000,
                colors: ["red", "blue", "green"],
                doors: 4,
                wheels: 4
            }
        },
        city: {
            type: {
                name: "honda city",
                year: 2007,
                price: 14000,
                colors: ["red", "blue", "green"],
                doors: 4,
                wheels: 4
            }
        },
        accord: {
            type: {
                name: "honda accord",
                year: 2008,
                price: 20000,
                colors: ["white", "black", "silver"],
                doors: 4,
                wheels: 4
            }
        }
    },
    toyota: {
        corolla: {
            type: {
                name: "toyota corolla",
                year: 2009,
                price: 16000,
                colors: ["blue", "grey", "white"],
                doors: 4,
                wheels: 4
            }
        },
        camry: {
            type: {
                name: "toyota camry",
                year: 2010,
                price: 22000,
                colors: ["black", "silver", "red"],
                doors: 4,
                wheels: 4
            }
        },
        yaris: {
            type: {
                name: "toyota yaris",
                year: 2011,
                price: 14000,
                colors: ["green", "blue", "white"],
                doors: 4,
                wheels: 4
            }
        }
    },
    ford: {
        focus: {
            type: {
                name: "ford focus",
                year: 2012,
                price: 17000,
                colors: ["red", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        },
        mustang: {
            type: {
                name: "ford mustang",
                year: 2013,
                price: 30000,
                colors: ["red", "yellow", "black"],
                doors: 2,
                wheels: 4
            }
        },
        fiesta: {
            type: {
                name: "ford fiesta",
                year: 2014,
                price: 15000,
                colors: ["blue", "grey", "red"],
                doors: 4,
                wheels: 4
            }
        }
    },
    bmw: {
        series3: {
            type: {
                name: "bmw 3 series",
                year: 2015,
                price: 35000,
                colors: ["black", "white", "blue"],
                doors: 4,
                wheels: 4
            }
        },
        series5: {
            type: {
                name: "bmw 5 series",
                year: 2016,
                price: 45000,
                colors: ["black", "silver", "grey"],
                doors: 4,
                wheels: 4
            }
        },
        series7: {
            type: {
                name: "bmw 7 series",
                year: 2017,
                price: 55000,
                colors: ["white", "black", "blue"],
                doors: 4,
                wheels: 4
            }
        }
    },
    audi: {
        a3: {
            type: {
                name: "audi a3",
                year: 2018,
                price: 33000,
                colors: ["red", "white", "black"],
                doors: 4,
                wheels: 4
            }
        },
        a4: {
            type: {
                name: "audi a4",
                year: 2019,
                price: 37000,
                colors: ["blue", "black", "grey"],
                doors: 4,
                wheels: 4
            }
        },
        a6: {
            type: {
                name: "audi a6",
                year: 2020,
                price: 42000,
                colors: ["white", "silver", "blue"],
                doors: 4,
                wheels: 4
            }
        }
    },
    mercedes: {
        cClass: {
            type: {
                name: "mercedes c-class",
                year: 2017,
                price: 40000,
                colors: ["black", "white", "silver"],
                doors: 4,
                wheels: 4
            }
        },
        eClass: {
            type: {
                name: "mercedes e-class",
                year: 2018,
                price: 50000,
                colors: ["grey", "white", "black"],
                doors: 4,
                wheels: 4
            }
        },
        sClass: {
            type: {
                name: "mercedes s-class",
                year: 2019,
                price: 60000,
                colors: ["white", "black", "blue"],
                doors: 4,
                wheels: 4
            }
        }
    },
    chevrolet: {
        spark: {
            type: {
                name: "chevrolet spark",
                year: 2016,
                price: 13000,
                colors: ["red", "blue", "white"],
                doors: 4,
                wheels: 4
            }
        },
        malibu: {
            type: {
                name: "chevrolet malibu",
                year: 2017,
                price: 24000,
                colors: ["grey", "black", "silver"],
                doors: 4,
                wheels: 4
            }
        },
        impala: {
            type: {
                name: "chevrolet impala",
                year: 2018,
                price: 28000,
                colors: ["black", "white", "blue"],
                doors: 4,
                wheels: 4
            }
        }
    },
    nissan: {
        altima: {
            type: {
                name: "nissan altima",
                year: 2015,
                price: 23000,
                colors: ["black", "blue", "white"],
                doors: 4,
                wheels: 4
            }
        },
        maxima: {
            type: {
                name: "nissan maxima",
                year: 2016,
                price: 27000,
                colors: ["red", "black", "grey"],
                doors: 4,
                wheels: 4
            }
        },
        versa: {
            type: {
                name: "nissan versa",
                year: 2017,
                price: 15000,
                colors: ["white", "blue", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    kia: {
        rio: {
            type: {
                name: "kia rio",
                year: 2014,
                price: 14000,
                colors: ["red", "blue", "white"],
                doors: 4,
                wheels: 4
            }
        },
        optima: {
            type: {
                name: "kia optima",
                year: 2015,
                price: 22000,
                colors: ["black", "grey", "blue"],
                doors: 4,
                wheels: 4
            }
        },
        soul: {
            type: {
                name: "kia soul",
                year: 2016,
                price: 18000,
                colors: ["white", "red", "black"],
                doors: 4,
                wheels: 4
            }
        }
    },
    hyundai: {
        elantra: {
            type: {
                name: "hyundai elantra",
                year: 2013,
                price: 19000,
                colors: ["blue", "white", "black"],
                doors: 4,
                wheels: 4
            }
        },
        sonata: {
            type: {
                name: "hyundai sonata",
                year: 2014,
                price: 21000,
                colors: ["black", "grey", "silver"],
                doors: 4,
                wheels: 4
            }
        },
        tucson: {
            type: {
                name: "hyundai tucson",
                year: 2015,
                price: 25000,
                colors: ["red", "blue", "white"],
                doors: 4,
                wheels: 4
            }
        }
    }
};

// console.log(carvariant)

var company = document.getElementById('company')
var brand = document.getElementById('brand')

for (var key in carvariant) {
    // console.log(key)
    company.innerHTML += `
              <option value="${key}">${key.toUpperCase()}</option>
   `
    for (var key1 in carvariant[key]) {
        console.log(key1)
    }
}
































