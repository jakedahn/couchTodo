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

## Debug
    before do
      puts '[Params start]'
      pp params
      puts '[Params end]'
    end
##
    get '/' do
      @data = JSON.parse(RestClient.get("#{DB}/_design/todos/_view/all"))
      
      erb :index
    end
    
    post '/update' do
      plist = {:_id  =>  params[:_id], :_rev =>  params[:_rev], :done =>  params[:done], :task =>  params[:task]}
      RestClient.post("#{DB}", plist.to_json)
    end
    
    put '/create' do
      # TODO: create from submit form

    end
    
  end
end