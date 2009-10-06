require 'rubygems'
require 'sinatra'
require 'couchrest'
require 'restclient'
require 'json'
require 'pp'

DB = "http://localhost:5984/todo"
@db = CouchRest.database!("http://localhost:5984/todo")
# TODO: Switch to just couchrest or just restclient - learn rest!


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
      #TODO: fix the "can't convert array to string" error - why does it update even with error present?
    end
    
    put '/create' do
      # TODO: create from submit form

    end
    
  end
end