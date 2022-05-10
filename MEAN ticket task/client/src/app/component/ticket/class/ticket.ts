export class Ticket {
    constructor(
        public user_id: String,
        public userName: String,
        public ticket_desc: String,
        public date: {
            type: Date
        },
        public created_At: String,
        public updated_At: String,
        public deleted_At: String,
        public isDelete:boolean
        
    )
    
    
    {}

}
