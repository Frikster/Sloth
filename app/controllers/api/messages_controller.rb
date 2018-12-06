class Api::MessagesController < ApplicationController
  def index
    @messages = ChatMessage.all
    render :index
  end

  def new
  end

  def create
    @message = ChatMessage.new(message_params)
    @message.author_id = current_user.id
    if @message.photo.attached?
      # debugger
      @message.image_url = url_for(@message.photo)
    end
    if @message.save
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
    params.require(:message).permit(:body, :channel_id, :photo)
  end
end
