import mongoose from 'mongoose';

const tiSchema = mongoose.Schema({
    ticket_no: Number,
    user_id: String,
    userName: String,
    ticket_desc: String,
    date: {
        type: Date
    },
    created_At: {
        type: String,
        default: new Date()
    },
    updated_At: {
        type: String
    },
    deleted_At: {
        type: String
    },
    isDelete:{
        type:Boolean,
        default:false
    }
});

const TicketMessage = mongoose.model('TicketMessage', tiSchema);

export default TicketMessage;