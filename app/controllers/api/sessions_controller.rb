class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      @channel = Channel.first
      render "api/channels/show"
    else
      if User.find_by(email: params[:user][:email])
        message = 'Incorrect password'
      else
        message = 'Username or email invalid'
      end
      render json: [message], status: 422
    end
  end

  def destroy
    if !logged_in?
      render json: { base: ['No user to log out'] }, status: 404
    else
      logout!
      render json: {}
    end
  end
end
