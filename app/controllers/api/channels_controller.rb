class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
    render :index
  end

  def new
  end

  def create
    @channel = Channel.new(channel_params)
    @channel.author_id = current_user.id
    # p @channel
    @user = current_user
    if @channel.save
      #TODO: populate list with channel, maintaining alphabetical border
      @user_channel = UserChannel.new({channel_id: @channel.id, user_id: @user.id})
      @user_channel.save!
      # @user_channel = [user_channel]
      # debugger
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def show
    @channel = Channel.find(params[:id])
    @user = current_user
    if @channel
      render "api/channels/show"
    else
      render json: @channel.errors.full_messages, status: 404
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :direct_message_channel)
  end
end
