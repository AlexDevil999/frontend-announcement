
import {IUser} from './IUser'
import {makeAutoObservable} from 'mobx'
import AuthService from './AuthService'

export default class Store {

    user = {}
    isAuth = false

    constructor (){
        makeAutoObservable(this)
    }


    setAuth(bool: boolean){
        this.isAuth = bool
    }

    setUser(user:IUser){
        this.user = user
    }

    async login(phone:string,code:string){
        try {
            
            const response = await AuthService.login(phone,code)
            localStorage.setItem('token',response.data.accessToken)
            this.isAuth = true
            this.setUser(response.data.user)
            console.log(response)
            

        } catch (e) {
            // console.log(e.response.data);
            
        }
    }
}