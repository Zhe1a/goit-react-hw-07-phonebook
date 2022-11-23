// import axios from 'axios';
// import {
//   fetchContacts,
//   fetchContactsFulfild,
//   fetchContactsReject,
// } from 'redux/contacts/tasksSlice';
// axios.defaults.baseURL = 'https://6376068cb5f0e1eb85005f05.mockapi.io';

// export const contactsPostApi = (name, number) => {
//   try {
//     return axios.post('/contacts', {
//       name: name,
//       phone: number,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// // export const contactsListApi = () => async dispatch => {
// //   try {
// //     dispatch(fetchContacts());
// //     const res = await axios.get('/contacts');
// //     dispatch(fetchContactsFulfild(res.data));
// //   } catch (error) {
// //     dispatch(fetchContactsReject(error.message));
// //   }
// // };

// export const contactsDeleteApi = id => {
//     console.log(id);
//   try {
//     return axios.delete(`/contacts/:${id}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// };
