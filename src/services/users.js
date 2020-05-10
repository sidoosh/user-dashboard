import request from '../utils/request';

const USERS_API = '/api/users';

export async function queryUsers() {
    const res = await request(USERS_API);
    return res.data;
}
