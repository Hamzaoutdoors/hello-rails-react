class V1::GreetingsController < ApplicationController
  def index
    render json: { greetings: [
      {
        message: 'hey'
      }
    ] }.to_json
  end
end
