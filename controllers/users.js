import { v4 as uuidv4 } from 'uuid';


let users = [];

export const getUsers= (req, res) => {
    console.log(users);
    res.send(users);
}

export const createUser = (req,res)=>{
    //console.log('Posting users');//server side
    const user = req.body;
    
    users.push({ ...user, id : uuidv4() });
    res.send(`User mit name ${user.FirstName}schon geaddedt zu database`);


    //res.send('Post users');//clent side
}

export const getUser = (req,res)=>{
    const {id} = req.params;
   const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const {id} = req.params;
    users = users.filter((user) => user.id !== id);

    res.send(`User mit Id ${id} schon deleted.`);

}

export  const updateUser  =(req,res)=>{
    const {id} = req.params;
    const {FirstName,LastName,age} = req.body;

    const user = users.find((user) => user.id ===id);

    if(FirstName)user.FirstName=FirstName;
    if(LastName)user.LastName=LastName;
    if (age)user.age = age;

    res.send(`User mit the id ${id} schon updated.`);

}