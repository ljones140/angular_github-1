require 'sinatra'
require 'json'

get '/' do
  send_file 'public/index.html'
end