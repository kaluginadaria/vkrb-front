import AuthorizedConnection from 'api/AuthorizedConnection';


class DiscussionsGet extends AuthorizedConnection {
    constructor() {
        super({
            url: '/api/recourse.list/',
        });
    }

    request = (data) => {
        return {
            'limit': data.limit,
        }
    };

    response = (response) => {
        return response.data.data;
    };
}


export default DiscussionsGet;