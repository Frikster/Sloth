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
    @user = current_user
    if @channel.save
      #TODO: populate list with channel, maintaining alphabetical border
      # channel_id = Channel.find(name: channel_params.name).id
      # ChannelUser.create!({channel_id: channel_id, user_id: @user.id})
      # TODO: Is this even needed...? Given how my sample state is I can just add id's where needed and use a selector
      # is the joins table even needed?
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
