
// // importing the json file for response the data

const { NextResponse } = require("next/server");

import db from '../../db.json'

export const GET = () => {

    const data=db


    return NextResponse.json(data);

};


// how its work 

// first make a arrow function or make a normal function  then  

// return NextResponse.json()

// thats it 

3 step 

// first make a function 

// return NextResponse.json()

// then you can give them the data




