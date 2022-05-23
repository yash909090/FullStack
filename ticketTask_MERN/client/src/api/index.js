import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })


export const fetchTickets = () => API.get('/tickets');

export const createTicket = (newTicket) => API.post('/tickets', newTicket);

export const updateTicket = (id, updatedTicket) => API.put(`/tickets/${id}`, updatedTicket)

export const deleteTicket = (id) => API.post(`/tickets/delete/${id}`)

export const signIn = (usrname,password) => API.post('/user/signin', {usrname,password});
export const signUp = (firstname, lastname, usrname, password) => API.post('/user/signup', {firstname, lastname, usrname, password});