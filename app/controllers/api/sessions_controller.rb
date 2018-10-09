class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login!(@user)
      render "api/users/show"
    else
      # flash.now[:errors] = @user.errors.full_messages
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    if !logged_in?
      render json: { base: ['no user to log out fool'] }, status: 404
    else
      logout!
      render json: {}
    end
  end
end
