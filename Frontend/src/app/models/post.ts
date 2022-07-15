
import { Comments } from "./comments";

export interface Posts {
    id:number;
    slug:string;
    title:string;
    author:number;
    image:string;
    description:Text;
    created_at:string;
    updated_at:string;
    comment?:Comments[]
}
