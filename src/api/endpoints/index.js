const api = '/api';


//oauth
const oauthToken = `${api}/o.token/`; //POST
const oauthRevokeToken = `${api}/o.revoke-token/`; //POST
//auth
const authRegister = `${api}/auth.register/`; //POST
const authActivate = `${api}/auth.activate/`; //POST
const authResetPassword = `${api}/auth.reset_password/`; //POST
const authNewPassword = `${api}/auth.new_password/`; //POST
const authSaveToken = `${api}/auth.save_token/`; //POST

//user
const userGet = `${api}/user.get/`; //GET
const userUpdate = `${api}/user.update/`; //POST
const userCheckPermUpdate = `${api}/user.check_perm_update/`; //GET
//calc


//core


//digest


//education

//event


//expert


//favorites


//matrix


//newsitem
const newsList = `${api}/news.list/`; //GET
const newsGet = `${api}/news.get/`; //GET
const newsGetCategories = `${api}/news.get_categories/`; //GET
const newsCreatePDF = `${api}/news.create_pdf/`; //GET
const newsAddFavorite = `${api}/news.add_favorite/`; //POST
const newsDeleteFavorite = `${api}/news.delete_favorite/`; //POST

//popular


//recourse


//search


//settings


//text




export default {
  oauthToken,
  oauthRevokeToken,


  authRegister,
  authActivate,
  authResetPassword,
  authNewPassword,
  authSaveToken,


  userGet,
  userUpdate,
  userCheckPermUpdate,


  newsList,
  newsGet,
  newsGetCategories,
  newsCreatePDF,
  newsAddFavorite,
  newsDeleteFavorite

}