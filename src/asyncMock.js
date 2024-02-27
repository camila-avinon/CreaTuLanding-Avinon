const products = [
    {
        id: 1,
        name: 'Mate imperial',
        price: 120,
        category: 'Mate',
        description: 'Mate imperial',
        image:'../imperial/imperialBlanco.jpeg',
        stock: 15
    },
    {
        id: 2,
        name: 'Mate camionero',
        price: 110,
        category: 'Mate',
        description: 'Mate camionero',
        image:'../camionero/camioneroMarron.jpg',
        stock: 10
    },
    {
        id: 3,
        name: 'Mate torpedo',
        price: 100,
        category: 'Mate',
        description: 'Mate torpedo',
        image:'../torpedo/torpedoMarron.jpg',
        stock: 5
    },
    {
        id: 4,
        name: 'Mate torpedo',
        price: 100,
        category: 'Mate',
        description: 'Mate PLástico',
        image:'../plastico/plasticoVerdeAgua.jpg',
        stock: 5
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id == id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    const product = (products.find((product) => product.category.toLowerCase == categoryId.toLowerCase))
    // console.log(product)
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 500)
    })
}