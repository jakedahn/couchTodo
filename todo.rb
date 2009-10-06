require 'rubygems'
require 'sinatra'

module CouchTodo
  class App < Sinatra::Default
    set :sessions, false
    set :run, false

    get '/' do
      erb :index
    end

  end
end

