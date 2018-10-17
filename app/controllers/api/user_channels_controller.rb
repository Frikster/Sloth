class Api::UserChannelsController < ApplicationController
  def index
    @user_channels = UserChannel.all
    render :index
  end

  def create
    @user_channel = UserChannel.new(user_channel_params)
    if @user_channel.save
      render :show
    else
      render json: @user_channel.errors.full_messages, status: 422
    end
  end

  private
  def user_channel_params
    params.require(:userChannel).permit(:channel_id, :user_id)
  end
end
