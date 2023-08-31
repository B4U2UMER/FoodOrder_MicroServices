import { Request, Response, NextFunction } from "express"
import { CreateVandorInput } from "../dto"
import { Vandor } from "../models/vandor";
import { GenerateSalt,GeneratePassword } from "../utility";

export const CreateVandor =  async(req: Request, res: Response, next: NextFunction)=>{
const {name,address,pincode,foodType,email,password,ownerName,phone} = <CreateVandorInput>req.body;

const existingVandor = await Vandor.findOne({email:email})
if(existingVandor!==null){
    return res.json('message: Astagfirullah A vendor already exist with this email');
}
// generate a salt
const salt = await GenerateSalt();
const userPassword = await GeneratePassword(password,salt);
const createdVandor = await Vandor.create(
    {
        name: name,
        address: address,
        pincode: pincode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
       
    }
)
res.json(createdVandor)
// res.json({name,address,pincode,foodType,email,password,ownerName, phone })
}

export const GetVandors =  async(req: Request, res: Response, next: NextFunction)=>{

}

export const GetVandorById =  async(req: Request, res: Response, next: NextFunction)=>{

}

function GenerateUserPassword() {
    throw new Error("Function not implemented.");
}
