/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('index')
}).middleware('auth')

Route.group(() => {
  Route.get('/login', 'AuthController.loginView')
  Route.get('/register', 'AuthController.registerView')
  Route.post('/login', 'AuthController.login')
  Route.post('/register', 'AuthController.register')
  Route.get('/logout', 'AuthController.logout')
})

Route.get('/page1', async ({ view }) => {
  return view.render('pages/page1')
}).middleware('auth')

Route.get('/page2', async ({ view }) => {
  return view.render('pages/page2')
}).middleware('auth')

Route.get('/page3', async ({ view }) => {
  return view.render('pages/page3')
}).middleware('auth')