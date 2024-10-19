const some = "Hello World"

for (let i = 0; i < 5; i++) {
    console.log(some)
    
}

let thing = "some"

const func = () =>{
    thing += 'thing'
    console.log(thing)
}

func()


const func2 = () => {

    const value = 'else'
    thing = `some thing ${value}`

    console.log(thing)
}

func2()

// objects and notations 
var customer = {
    first_name: 'Moshe',
    last_name: 'Israeli'
}


console.log(`The customer name is: ${customer.first_name} \nThe last name of the customer is : ${customer.last_name}`)

customer.first_name = 'Egor'
customer['last_name'] = 'Pilmeni'

console.log(`The customer name is: ${customer.first_name} \nThe last name of the customer is : ${customer.last_name}`)