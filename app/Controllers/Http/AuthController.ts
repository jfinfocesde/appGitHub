import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import user from 'App/Models/user'
import AuthValidator from 'App/Validators/AuthValidator'


export default class AuthController {
  public async loginView({ view }: HttpContextContract) {
    return view.render('auth/login')
  }

  public async registerView({ view }: HttpContextContract) {
    return view.render('auth/register')
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')
    await auth.use('web').attempt(email, password)
    response.redirect('/')
  }

  public async register({ auth, request, response }: HttpContextContract) {
    const payload = await request.validate(AuthValidator)
    const userNew = await user.create(payload)
    await auth.login(userNew)
    return response.redirect('/')
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.use('web').logout()
    response.redirect('/login')
  }


}
