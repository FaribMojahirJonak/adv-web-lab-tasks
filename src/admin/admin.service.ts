import { Injectable } from "@nestjs/common";
import { AdminDTO } from "./admin.dto";

@Injectable()
export class AdminService {
    async addUser(myobj:AdminDTO):Promise<AdminDTO>{
        return myobj;   
    }

    getUsers(): object{
        return {message: "users"}
    }

    deleteUser(id: string): object {
        return { message: `User with id ${id} deleted` };
    }

    async updateUser(id: string, myobj: AdminDTO): Promise<AdminDTO> {

        return myobj;
    }

    async partialUpdateUser(id: string, myobj: Partial<AdminDTO>): Promise<AdminDTO> {

        return myobj as AdminDTO;
    }

    getUserById(id: string): object{
        return {message: "You id is " + id};
    }

    getUsersByNameAndId(name: string, id: string): object{
        return {message: "You id is " + id  +" and your name is "+ name};
    }
}