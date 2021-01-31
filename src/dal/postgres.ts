import User from 'models/User';

export const getUsers = (): User[] => {
    return [
        {
            id: '1',
            userName: 'bla bla 1'
        },
        {
            id: '2',
            userName: 'bla bla 2'
        }
    ]
}