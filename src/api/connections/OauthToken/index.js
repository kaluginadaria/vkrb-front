import ApiConnection, { methods } from '@ktx/api-connection';

import parseToken from 'api/parsers/token';


class OauthToken extends ApiConnection{
    constructor(){
        super({
            url: '/api/o.token/',
            method: methods.POST
        });
    }

    request = (data) => {
        const requestData = new FormData();
        requestData.append('username', data.userName);
        requestData.append('password', data.password);
        requestData.append('grant_type', data.grantType);
        return  requestData;

    };

    requestHeaders  = (data) => {
      return {
          'Authorization': 'Basic SVRPdnNWdlhkb1gxUW5BVFBwRGhUZGlrZ2lDbEZLMU44a3VyNWJNVDpxbG5iSWNlenl2ZlB6QkducWRpRTU0ODJiQ09nRWlaa1ZKZnBSZ3BrUm5PRGRZV25xckZkZzRqQlA0dDlCTFFSVWRiUVpmdDFBd3o0NGN5NE5MR2FOMEwwZ2JvRE1UaFJrMkt4b3VsSHdLa2pKajBVSW9BZmg4ODdHcVhUcERWUQ==',
          'Content-Type':'application/x-www-form-urlencoded'
      }
    };

    response = (response) => {
        const entity = parseToken(response.data);
        return { entity };
    };
}


export default OauthToken;