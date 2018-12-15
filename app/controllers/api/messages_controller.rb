class Api::MessagesController < ApplicationController
  def index
    @messages = ChatMessage.all
    render :index
  end

  def new
  end

  def create
    @message = ChatMessage.new(message_params)
    if !@message.author_id
      @message.author_id = current_user.id
    end
    if @message.photo.attached?
      @message.image_url = url_for(@message.photo)
    end
    if @message.save
      ActionCable.server.broadcast "chat_channel", {image_url: @message.image_url, channel_id: @message.channel_id}
      render "api/messages/show"
    else
      render json: @message.errors.full_messages, status: 422
    end
  end

  # def show
  #   @message = Message.find(params[:id])
  #   @user = current_user
  #   if @message
  #     render "api/messages/show"
  #   else
  #     render json: @message.errors.full_messages, status: 404
  #   end
  # end

  private
  def message_params
    params.require(:message).permit(:content, :channel_id, :photo, :image_url, :created_at, :author_id)
  end
end
