import "dotenv/config"

//framework_drivers
import http from "./framework_drivers/http"
import logger from "./framework_drivers/logger"
import error from "./framework_drivers/error"
import wrapper from  "./framework_drivers/wrapper"

//modules
import UserModule from "./modules/user"


class Server{
  constructor(){
    this.main()
  }

  //init process before main application running
  before(){
    try{

    }
    catch(e){
      logger('error', 'server-before', 'error init before', e)
      process.exit()
    }
  }

  //main proses whole application
  main(){
    try{
      this.before()

      new UserModule( { http, logger, error, wrapper } )
  

      this.after()
    }
    catch(e){
      logger('error', 'server-main', 'error main', e)
      process.exit()
    }
  }

  //init process after main application running
  after(){
    try{
      //serve http
      http.listen(process.env.PORT)
    }
    catch(e){
      logger('error', 'server-afer', 'error init after', e)
      process.exit()
    }
  }
}

new Server()