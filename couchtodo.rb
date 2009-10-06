require 'rubygems'
require 'sinatra'
require 'couchrest'
require 'restclient'
require 'json'
require 'pp'

DB = "http://localhost:5984/todo"
@db = CouchRest.database!("http://localhost:5984/todo")

module CouchTodo
  class App < Sinatra::Default
    set :sessions, false
    set :run, false

    
    
    get '/' do
      @data = JSON.parse(RestClient.get("#{DB}/_design/todos/_view/all"))
      
      erb :index
    end
    
    post '/update' do
      result = @db.save_doc(params)
      return result.inspect
    end
    
    put '/create' do
      @db.save_doc
    end
    
  end
end