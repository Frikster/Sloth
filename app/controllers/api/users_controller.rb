class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    @user.username = @user.email[/^(.*)(@)/, 1]
    if @user.save
      @channel = Channel.first
      setup_direct_channels
      login!(@user)
      render "api/channels/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

  def setup_direct_channels
    directChannel = Channel.new(name: @user.username, author_id: @user.id, direct_message_channel: true)
    if !directChannel.save     # if it cannot save then use email as channel name
      Channel.create!(name: @user.email, author_id: @user.id, direct_message_channel: true) #TODO: there has to be a better way to do this...
    end
    @user_channel = UserChannel.create!(user_id: @user.id, channel_id: @channel.id) #TODO check if this still needed in json or can be refactored t only do the create wthut assignment
    User.all.each do |user|
      if user.id != @user.id
        directChannel = Channel.new(name: @user.username + ', ' + user.username, direct_message_channel: true)
        if !directChannel.save
          Channel.create!(name: @user.email + ', ' + user.email, direct_message_channel: true)
        end
        UserChannel.create!(user_id: @user.id, channel_id: directChannel.id)
        UserChannel.create!(user_id: user.id, channel_id: directChannel.id)
      end
    end
  end
end
