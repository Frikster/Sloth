class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login!(@user)
      @channel = Channel.first
      @user_channel = UserChannel.where(user_id: @user.id)[0]
      # TODO: make it remember the last channel you were on
      # debugger
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
