class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.username = @user.email[/^(.*)(@)/, 1]
    if @user.save
      directChannel = Channel.new(name: @user.username, author_id: @user.id, direct_message_channel: true)
      if !directChannel.save
        Channel.create!(name: @user.email, author_id: @user.id, direct_message_channel: true)
        #TODO: there has to be a better way to do this...
      end
      login!(@user)
      @channel = Channel.first
      @user_channel = UserChannel.where(user_id: @user.id)[0]
      # debugger
      render "api/channels/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
